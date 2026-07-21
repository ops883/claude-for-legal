---
name: trust-accounting
description: Maintain a client trust (IOLTA) ledger and run the monthly three-way reconciliation — record deposits, disbursements, and earned-fee transfers against individual client ledgers, and flag commingling, negative client balances, disbursing against uncollected funds, and reconciliation breaks. Use when the user says "record a retainer", "log a settlement deposit", "pay out of trust", "move earned fees to operating", "reconcile the trust account", "IOLTA", or "client trust account".
argument-hint: "<setup | deposit | disburse | transfer | ledger | reconcile | report> [matter-slug]"
---

# /trust-accounting

Client money held in trust is not the lawyer's money, and the rules governing it (ABA Model Rule 1.15 and each state's analog) are strict-liability in practice: the most common paths to suspension or disbarment are trust-account violations, and most are bookkeeping errors, not theft. This skill keeps a structured client-trust ledger and runs the three-way reconciliation that catches those errors before the bar does.

**This is a reasoning and checking layer, not your system of record.** The bank is the system of record; compliant trust-accounting software (Clio, TrustBooks, QuickBooks with a trust workflow) or your bookkeeper is the operational ledger. This skill helps you keep an accurate parallel ledger, enforces the rules on every transaction, and runs the reconciliation — but the numbers must ultimately tie to the bank statement, and a CPA or bookkeeper who knows your state's rules should own the account. Never treat this ledger as authoritative over the bank.

## Subcommands

Dispatch on the first token of `$ARGUMENTS`:

- `/litigation-legal:trust-accounting setup` — one-time: configure the trust account(s), state, retention period, and warning thresholds. Writes `trust/trust-config.yaml`.
- `/litigation-legal:trust-accounting deposit [matter-slug]` — record a deposit into trust for a client/matter. Appends to the journal.
- `/litigation-legal:trust-accounting disburse [matter-slug]` — record a disbursement out of trust. Runs the pre-disbursement checks (sufficient cleared client balance, no negative ledger).
- `/litigation-legal:trust-accounting transfer [matter-slug]` — move earned fees from trust to operating against a specific matter. Requires an earned basis (invoice).
- `/litigation-legal:trust-accounting ledger [matter-slug]` — render one client's individual ledger with running balance, or all client ledgers if no slug.
- `/litigation-legal:trust-accounting reconcile` — run the three-way reconciliation for a period and write the record.
- `/litigation-legal:trust-accounting report` — trust-wide status: total held, per-client balances, last reconciliation date, open flags.

## Instructions

1. Read `~/.claude/plugins/config/claude-for-legal/litigation-legal/CLAUDE.md` → `## Practice role` and the company/state profile. Trust accounting is a **private-practice** concern. If `## Practice role` is `in-house`, tell the user: "Trust accounting applies to firms and solo practitioners who hold client funds — not to in-house counsel. If you're in private practice, re-run `/litigation-legal:cold-start-interview --redo` and select a private-practice role. Otherwise this skill isn't for your setup." Don't error; the in-house state is a legitimate no-op.
2. Read `trust/trust-config.yaml`. If it's missing and the subcommand isn't `setup`, run `setup` first — every other subcommand depends on the account and state being configured.
3. Load `references/reconciliation.md` (the three-way procedure) and `references/state-rules.md` (what varies by state and what to verify) before doing substantive work on `reconcile`, `disburse`, or `transfer`.
4. Follow the subcommand workflow below.
5. Confirm before writing. Every transaction that moves money — `deposit`, `disburse`, `transfer` — is shown to the user for confirmation before it's appended to the journal.

---

# Trust Accounting

## Purpose

A client trust account (an IOLTA account, when the funds are nominal or short-term enough that pooling them and remitting the net interest to the state bar foundation is the right vehicle) holds money that belongs to clients or third parties, not the firm. The failure modes are well-worn and each is a discipline case:

- **Commingling** — the lawyer's own money mixed with client money, or earned fees left sitting in trust.
- **Negative client ledger** — paying out more for one client than that client has in trust, which necessarily spends a *different* client's money. This is the cardinal violation; it is misappropriation even when accidental and even when later cured.
- **Disbursing against uncollected funds** — writing a trust check before the deposit that funds it has actually cleared the bank. The check clears against other clients' money in the interim.
- **Reconciliation break** — the account-level balance, the book balance, and the sum of client ledgers stop agreeing, and nobody notices for months.
- **Holding earned fees in trust** — once a fee is earned, it must come out; leaving it in is commingling.
- **Moving unearned fees out** — the mirror error; advance fees are the client's money until earned.

This skill records transactions in a way that makes those errors visible immediately, and runs the monthly three-way reconciliation that is required (or effectively required) in most states.

## What this skill is not

- **Not accounting software.** It doesn't connect to your bank, doesn't clear checks, doesn't file the IOLTA remittance. It keeps a parallel ledger and checks it.
- **Not a substitute for a bookkeeper or CPA.** Someone who knows your state's rules should own the account and sign off on reconciliations.
- **Not tax or fee-agreement advice.** Whether a particular flat fee goes to trust or operating on receipt, whether your state allows "earned on receipt" fees, and how to paper the fee agreement are questions for you and, where needed, your state bar's ethics line.
- **Not the authoritative balance.** The bank statement is. When this ledger and the bank disagree, the bank wins and the difference is a bug to find, not a number to overwrite.

## Trust records are not privileged

Client trust records are **required business records subject to inspection by the bar** — in most states on demand and without a subpoena. Do **not** apply the plugin's `PRIVILEGED & CONFIDENTIAL — ATTORNEY WORK PRODUCT` header to ledgers, reconciliations, or reports from this skill. They carry a plain identifying header instead (see the output templates below). The reviewer note still applies. Marking a required, producible record as privileged work product is both wrong and a bad look in an audit.

## Storage layout

```
~/.claude/plugins/config/claude-for-legal/litigation-legal/trust/
├── trust-config.yaml                 # account(s), state, retention period, thresholds — written by `setup`
├── journal.yaml                      # append-only transaction journal — THE source of truth in this ledger
├── client-ledgers/                   # rendered per-client ledgers (derived from journal, regenerated on demand)
│   └── <matter-slug>.md
└── reconciliations/
    └── <YYYY-MM>.md                  # one three-way reconciliation record per period, retained
```

`journal.yaml` is append-only and is the single source of truth for this ledger. Client balances and reconciliations are *derived* from it — never hand-edit a balance. A correcting entry is a new journal line with a note, never an edit to a past line. This mirrors the append-only discipline the rest of the plugin uses for matter history, and it's what an auditor expects: a trust ledger you can silently edit is a trust ledger nobody can trust.

## Journal entry shape

Each journal line:

```yaml
- id: [sequential integer]
  date: [YYYY-MM-DD]              # transaction date
  type: [deposit | disburse | transfer | correction]
  matter: [matter-slug]           # the client ledger this hits — REQUIRED, never "unassigned"
  client: [client name]
  amount: [decimal]               # positive; direction is set by `type` and `subtype`
  subtype: [see categories below]
  method: [check | wire | ach | card | cash]
  reference: [check number / wire ref / invoice number]
  cleared: [true | false]         # deposits: has it cleared the bank? disbursements: has the check cleared?
  cleared_date: [YYYY-MM-DD | null]
  memo: [free text — what this is]
  entered: [YYYY-MM-DD]           # when the line was recorded
```

**Deposit subtypes:** `advance-fee` (unearned retainer — client funds until earned), `flat-fee-advance` (state-dependent; see `references/state-rules.md`), `settlement` (proceeds to be distributed), `cost-advance` (filing/expert costs held for the matter), `third-party` (funds held for a closing or in dispute), `lawyer-buffer` (the small amount of the lawyer's own money some states permit to cover bank fees — the *only* lawyer money allowed in the account), `replenishment`.

**Disbursement subtypes:** `to-client` (net proceeds/refund), `to-third-party` (lienholder, expert, co-counsel), `earned-fee` (→ handled via `transfer`, not `disburse`), `cost-payment` (filing fee, deposition, etc. paid for the matter), `bank-fee` (must draw only against `lawyer-buffer`, never client funds).

## Subcommand workflows

### `setup`

Run a short interview and write `trust/trust-config.yaml`:

- **State / jurisdiction** — controls which trust rules and retention period apply. Default from the company profile if present.
- **Trust account(s)** — for each: nickname, bank, last 4 of account number, type (`IOLTA` pooled vs. `separate-interest-bearing` for a single client's large/long-held funds). A firm often has one IOLTA plus occasional separate accounts.
- **Retention period** — how long trust records must be kept after the representation ends. Default to what `references/state-rules.md` lists for the state, tagged `[verify against your state bar]`.
- **Reconciliation cadence** — default monthly (the near-universal requirement).
- **Warning thresholds** — days a deposit stays uncleared before flagging (default 10), days past month-end before an un-run reconciliation is flagged (default 15).
- **Lawyer buffer permitted?** — whether the state allows a small lawyer's deposit for bank fees, and the cap. `[verify against your state bar]`.

Show the config and confirm before writing. Note in the output that the state-specific values are starting points to confirm with the state bar, not settled law.

### `deposit [matter-slug]`

1. Identify the matter/client. Every deposit is identified to exactly one client ledger — there is no "unassigned" or "suspense" bucket in a compliant trust account. If the user can't say whose money it is, stop: unidentified funds are their own problem (many states have a specific rule for them) and should not be silently parked.
2. Gather: amount, date, subtype, method, reference, memo.
3. Set `cleared: false` unless the user confirms the funds have actually cleared the bank (a wire that's landed, cash). A deposited check is **not** cleared on the deposit date — this is what the uncollected-funds check depends on later.
4. Show the entry and the client's new balance. Confirm. Append to `journal.yaml`.
5. If the subtype is `advance-fee` or `flat-fee-advance`, remind the user that these funds stay in trust until earned and are moved out via `transfer` against an invoice — not before.

### `disburse [matter-slug]`

Run **every** check before writing. Any failure is a hard stop, not a warning:

1. **Client identified** — the disbursement draws from exactly one client ledger.
2. **Sufficient balance** — that client's current ledger balance ≥ the disbursement amount. If not, **stop**: "This would drive [matter]'s trust ledger to [negative amount]. A trust account can never disburse more than a client holds — doing so spends another client's funds. Nothing has been recorded. Options: (a) you mis-identified the matter, (b) a deposit hasn't been recorded yet, (c) this genuinely overdraws — which is a compliance problem to fix before any payment goes out." Do not offer to record it anyway.
3. **Funds cleared** — the deposits funding this disbursement have `cleared: true`. If the client's balance depends on an uncleared deposit, **stop**: "This client's balance includes a deposit that hasn't cleared (recorded [date], check [ref]). Disbursing now writes a check against uncollected funds — it clears against other clients' money until the deposit settles. Wait for the deposit to clear, or confirm it has and I'll mark it cleared first." Let the user mark the deposit cleared if it truly has; don't override silently.
4. **Bank fees** — if subtype is `bank-fee`, it must draw against a `lawyer-buffer` balance, never a client. If there's no buffer configured or it's insufficient, flag that bank fees are being charged to client funds — a commingling problem.
5. Show the entry, the client's new balance, and confirm. Append.

**Non-lawyer gate.** Before recording any disbursement, read `## Who's using this` in the practice profile. If the Role is Non-lawyer: "Disbursing client trust funds is a regulated act with bar-discipline consequences if done wrong. Has the responsible attorney authorized this specific disbursement? (yes / no)." Do not proceed without an explicit yes.

### `transfer [matter-slug]`

Earned fees leave trust for operating through this path, never through `disburse`.

1. Identify the matter.
2. Require an **earned basis** — an invoice number, or the specific work/date the fee was earned. A transfer with no earned basis is the skill helping commingle; refuse it: "Fees can only move out of trust once earned, against a bill. What invoice or earned work supports this transfer?"
3. The transfer amount cannot exceed the earned amount, and cannot exceed the client's trust balance. Both are hard stops.
4. Record two-sided intent clearly: the amount leaves the client's trust ledger (`type: transfer`, out of trust) toward operating. This skill tracks the trust side; it does not manage the operating account.
5. Show, confirm, append. Note the invoice reference in the memo so the reconciliation and any audit can trace earned fee → bill → transfer.

### `ledger [matter-slug]`

Regenerate the client ledger from the journal (don't read a possibly-stale rendered file — derive from `journal.yaml`). With a slug: one client's ledger. Without: every client with a nonzero balance, plus a total. Write the rendered file(s) to `trust/client-ledgers/<slug>.md`.

Client ledger template:

```markdown
# Client Trust Ledger — [Client] ([matter-slug])
*Trust account record. Not privileged — subject to bar examination. Derived from journal.yaml on [date].*

**Account:** [IOLTA nickname]
**Current balance:** $[X]
**Uncleared included in balance:** $[Y] ([N] deposits not yet cleared)

| Date | Type | Subtype | Ref | Memo | Amount | Cleared | Running balance |
|---|---|---|---|---|---|---|---|
| [YYYY-MM-DD] | deposit | advance-fee | [ref] | [memo] | +$[x] | [Y/N] | $[bal] |
| [YYYY-MM-DD] | disburse | to-client | [ref] | [memo] | −$[x] | [Y/N] | $[bal] |
```

### `reconcile`

Follow `references/reconciliation.md` in full. In brief:

1. Ask the user for the period (default the most recent full month) and the bank inputs: ending statement balance, deposits in transit, outstanding checks/disbursements.
2. Compute the three balances:
   - **Adjusted bank balance** = ending statement balance + deposits in transit − outstanding disbursements.
   - **Book balance** = the journal's running trust-account balance as of period end.
   - **Client ledger total** = sum of every client's ledger balance as of period end.
3. **All three must be equal.** If any differ, do not "reconcile" — produce a discrepancy report: the amounts, the gap, and the likely causes ranked (unrecorded transaction, uncleared item, transposition, a disbursement recorded to the wrong matter). Reconciliation is not complete until they agree; say so plainly.
4. Flag any client ledger that is negative (should be impossible if `disburse` did its job — if one appears, it's a red alert), any deposit uncleared beyond the threshold, and whether the total held equals the sum of client ledgers.
5. Write `trust/reconciliations/<YYYY-MM>.md` and note that the reconciliation should be reviewed and signed by the responsible attorney (and/or bookkeeper) — an unsigned reconciliation isn't the compliance artifact the rule wants.

### `report`

Trust-wide snapshot: total held, per-client balances (a table), last reconciliation date and result, and all open flags (uncleared deposits past threshold, overdue reconciliation, any negative ledger, bank fees charged to client funds). This is the "am I clean right now" view. Offer it as a dashboard per the plugin's dashboard convention when there are more than ~10 client ledgers.

## Compliance flags (surface these wherever they appear)

Carry these at the canonical severity floor (`## Shared guardrails` in the practice profile):

- 🔴 **Negative client ledger** — misappropriation of another client's funds. Blocking. Never let a `disburse` create one; if `reconcile` finds one, it's the top line of the report.
- 🔴 **Disbursement against uncollected funds** — same effect, blocking.
- 🟠 **Reconciliation break** — the three balances don't agree. High until found and fixed.
- 🟠 **Earned fees left in trust / unearned fees moved out** — commingling. High.
- 🟠 **Bank fees drawn from client funds** — commingling. High.
- 🟡 **Overdue reconciliation** — past the configured threshold. Medium, rising.
- 🟡 **Deposit uncleared beyond threshold** — track; may signal a bounced or lost deposit. Medium.

## Output conventions

- **Header:** trust outputs use a plain identifying header — `TRUST ACCOUNT RECORD — [Firm] — [account nickname] — NOT PRIVILEGED, SUBJECT TO BAR EXAMINATION` — not the privilege header. See "Trust records are not privileged" above.
- **Reviewer note:** apply the `⚠️ Reviewer note` block from the practice profile's `## Outputs`. For trust work the **Before relying** line is almost always "tie this to the bank statement before you rely on it."
- **Money is exact.** Never round, never estimate a trust figure. If you don't have a number, the entry is incomplete — say so; don't fill it.
- **Currency / state rules:** state trust rules and retention periods change and vary; every state-specific value carries `[verify against your state bar]` and the currency trigger in `## Shared guardrails` applies — if the user asks a rule question that turns on a current requirement, check it, don't answer from memory.

## Close with the next-steps decision tree

End with the decision tree per the practice profile's `## Outputs`, customized to what just ran. For a `reconcile` that balanced: offer to file the reconciliation record, run `report`, or set the next month's reminder. For one that didn't: the tree is about *finding the break* — re-check a specific matter's ledger, list uncleared items, or review recent disbursements. Don't leave the user with a discrepancy and no path.

## What this skill does not do

- **Connect to the bank or clear items.** The user tells it what cleared; it never assumes.
- **File IOLTA remittances or interest reports.** That's between the bank, the firm, and the state IOLTA program.
- **Decide trust-vs-operating for a specific fee.** It records where the user directs and flags the rules; whether an "earned on receipt" flat fee is permitted is a state-law and fee-agreement question, flagged to counsel.
- **Replace compliant trust-accounting software or a bookkeeper.** It's the reasoning and checking layer alongside them.
