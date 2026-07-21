# Three-Way Trust Reconciliation

The reconciliation that catches trust-account errors before the bar does. Run it every period (monthly is the near-universal standard). "Three-way" means three independently-derived balances must all agree:

1. **Adjusted bank balance** — what the bank says, corrected for timing.
2. **Book balance** — the trust account's own running balance (from `journal.yaml`).
3. **Client ledger total** — the sum of every individual client's trust balance.

If all three are equal, the account reconciles. If any differ, it does not — and "close enough" is not a thing in trust accounting. A $12 gap is a bug with a cause, and the cause is often a symptom (a disbursement posted to the wrong client nets to a small account-level difference while hiding a large per-client error).

## Why three balances, not two

An ordinary bank reconciliation compares the bank to your checkbook — two balances. That catches arithmetic and timing errors, but it will happily reconcile an account where one client's money is quietly funding another's disbursement, because at the account level the total is still right. The **third** balance — the sum of individual client ledgers — is the one that catches misappropriation. When the client-ledger total diverges from the book balance, money has moved between clients. That is the error the whole exercise exists to find.

## Inputs to gather from the user

- **Ending bank statement balance** for the period (from the bank, not from memory).
- **Deposits in transit** — deposits recorded in the journal on/before period end that had not yet posted to the bank statement.
- **Outstanding disbursements** — trust checks/transfers recorded on/before period end that had not yet cleared the bank as of the statement.
- **Bank fees or interest** the bank applied that aren't yet in the journal (in an IOLTA account the interest is remitted to the state program, not the clients — it should not land in a client ledger).

## The computation

```
Adjusted bank balance = ending statement balance
                        + deposits in transit
                        − outstanding disbursements

Book balance          = journal running balance of the trust account as of period end

Client ledger total   = Σ (each client's ledger balance as of period end)
```

**Reconciles when:** `Adjusted bank balance == Book balance == Client ledger total`.

Use exact figures. Never round. Compute to the cent.

## When they don't agree

Do not record a completed reconciliation. Produce a discrepancy report and rank the likely causes:

| Symptom | Likely cause | Where to look |
|---|---|---|
| Book ≠ Adjusted bank | A transaction is missing from the journal, or a bank item (fee, returned deposit) isn't recorded | Compare statement line-by-line to the journal for the period |
| Book ≠ Client ledger total | A transaction has the wrong `matter`, or a client ledger has an entry the account-level view doesn't | Re-derive every client ledger from the journal; look for a disbursement posted to the wrong client |
| Off by a round-trip (2× an amount) | A transaction entered with the wrong sign/direction | Search the journal for that amount |
| Off by a transposition (difference divisible by 9) | Two digits swapped in an amount | Check recent manual entries |
| A client ledger is **negative** | A disbursement exceeded a client's balance — another client's funds were spent | 🔴 This is the cardinal violation. Top of the report. Identify the disbursement and the funding gap immediately |

An uncleared deposit that's stale (past the config threshold) is worth surfacing here too — a deposit that never clears may have bounced, which changes every downstream balance.

## Output

Write `trust/reconciliations/<YYYY-MM>.md`:

```markdown
TRUST ACCOUNT RECORD — [Firm] — [account nickname] — NOT PRIVILEGED, SUBJECT TO BAR EXAMINATION

# Three-Way Reconciliation — [YYYY-MM]

> **⚠️ Reviewer note**
> - **Bank source:** [statement dated YYYY-MM-DD | user-provided figures — verify against the statement]
> - **Result:** [RECONCILED — all three balances agree | NOT RECONCILED — $[gap] discrepancy, see below]
> - **Flags:** [N open — listed below | none]
> - **Before relying:** tie these figures to the bank statement, and have the responsible attorney/bookkeeper sign the reconciliation.

**Period:** [YYYY-MM-DD] to [YYYY-MM-DD]
**Account:** [nickname] · [bank] · ...[last 4]

## The three balances

| Balance | Amount |
|---|---|
| Adjusted bank balance | $[X] |
| Book balance (journal) | $[X] |
| Client ledger total | $[X] |

**Status:** [✅ RECONCILED — all three equal | ❌ NOT RECONCILED — difference of $[gap]]

### Bank adjustment detail
- Ending statement balance: $[X]
- + Deposits in transit: $[X] ([list])
- − Outstanding disbursements: $[X] ([list])
- = Adjusted bank balance: $[X]

## Client ledger balances (period end)

| Matter | Client | Balance | Uncleared incl. | Flag |
|---|---|---|---|---|
| [slug] | [name] | $[X] | $[Y] | [🔴/🟠/🟡/—] |
| **Total** | | **$[X]** | | |

## Open flags

- [🔴/🟠/🟡] [description, matter, amount, and the fix]

## Sign-off

- Prepared: [date]
- Reviewed by attorney/bookkeeper: [ name / pending ]
```

An unsigned reconciliation is a draft, not the compliance artifact the rule contemplates. The record should be reviewed and signed by the responsible attorney (and bookkeeper, if the firm uses one), and retained for the state's retention period.
