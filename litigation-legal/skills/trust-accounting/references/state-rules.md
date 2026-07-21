# Trust-Accounting Rules by State — What Varies, What to Verify

The federal baseline is **ABA Model Rule 1.15** (Safekeeping Property). Every state has adopted a version of it, but the details differ, and the details are what get lawyers disciplined. This file is a starting-point map, not authority. **Every value here carries `[verify against your state bar]`** — trust rules and dollar thresholds change, and the controlling text is your state's rule and your IOLTA program's requirements, not this note.

The `setup` subcommand seeds a few of these values into `trust-config.yaml`; confirm them against your state bar before relying on them.

## The universal core (Model Rule 1.15, adopted nearly everywhere)

These hold in substantially every U.S. jurisdiction. Treat them as settled in shape, but confirm the specifics:

- **Segregation.** Client and third-party funds are held separate from the lawyer's own funds. `[model knowledge — verify]`
- **No commingling.** The lawyer's money does not go in the trust account, with one narrow exception: many states permit a small amount of the lawyer's own funds solely to cover bank service charges. The permitted amount is state-specific. `[verify against your state bar]`
- **Individual client ledgers.** A separate ledger per client/matter, with a running balance that is never negative. `[model knowledge — verify]`
- **Prompt notice and delivery.** Notify the client on receipt of funds, and promptly deliver funds the client is entitled to. `[model knowledge — verify]`
- **Recordkeeping and reconciliation.** Keep complete records; reconcile regularly (monthly, in practice, in most states). `[model knowledge — verify]`
- **Earned vs. unearned.** Advance fees and unearned retainers are the client's money and stay in trust until earned. `[model knowledge — verify]`

## What varies by state — check each of these

### Retention period
How long trust records must be kept after the representation ends. Commonly **5 years** (the ABA Model Rule figure), but some states differ — for example, **New York** requires **7 years** under its rules. `[verify against your state bar]` Do not assert a number for the user's state without confirming it.

### IOLTA participation and eligibility
- Whether IOLTA participation is **mandatory, opt-out, or voluntary** varies by state. Most are mandatory or opt-out today. `[verify against your state bar]`
- Which funds belong in a **pooled IOLTA account** (nominal in amount or short-term) vs. a **separate interest-bearing account for the client** (large enough or held long enough that net interest would benefit the client) — the line is a judgment the rule frames but doesn't reduce to a single dollar threshold. `[verify against your state bar]`
- Interest on an IOLTA account is remitted to the state's IOLTA program / bar foundation (funding legal aid), **not** to the client and **not** to the lawyer. `[model knowledge — verify]`

### The lawyer's-own-funds buffer for bank fees
Whether the state permits a small deposit of the lawyer's own money to cover bank charges, and any cap on it. Some states allow it; some require fees be handled another way. `[verify against your state bar]`

### Flat fees and "earned on receipt"
Whether a flat fee may be deposited to **operating** on receipt (as "earned on receipt") or must go to **trust** until earned is genuinely state-specific and has been litigated. Several states require advance flat fees to go to trust absent specific disclosures and client agreement; a few permit "earned on receipt" with the right paper. This is where a well-meaning lawyer most often gets the deposit wrong. `[verify against your state bar]` — and it's a fee-agreement drafting question, not just a bookkeeping one.

### Unidentified / unclaimed funds
Most states have a specific procedure for funds you can't identify to a client, and for unclaimed trust balances (often escheat to the state or to the IOLTA program after a dwell period). There is no compliant "suspense" bucket you leave money in indefinitely. `[verify against your state bar]`

### Reconciliation formality
Whether a **three-way reconciliation** is required by rule (vs. strongly expected as the standard of care) varies, but the three-way reconciliation is the accepted best practice everywhere and is what an auditor looks for. Do it regardless of whether your state's text spells out "three-way." `[model knowledge — verify]`

## Non-US jurisdictions

If the practice profile's jurisdiction footprint is non-US, this framework does **not** apply — client-money rules outside the U.S. are different regimes entirely (e.g., the **SRA Accounts Rules** in England & Wales, provincial law-society trust rules in Canada, state/territory rules in Australia). Recognize it per the practice profile's `## Jurisdiction recognition` section, say the US framework doesn't apply, and route to the applicable regulator's rules. Do not run US trust doctrine against non-US client-money facts.

## How to actually verify

1. **Your state bar's rule of professional conduct 1.15** (and any state-specific trust-accounting rule or recordkeeping rule that supplements it) — the controlling text.
2. **Your state IOLTA program** — eligibility, participation mechanics, remittance.
3. **Your state bar's ethics hotline** — most run one, free to members, for exactly these questions.
4. A **CPA or bookkeeper who does law-firm trust accounting** in your state — for the operational setup.

When the user asks a rule question that turns on a current requirement or dollar figure, run the currency check in `## Shared guardrails` (search, don't answer from memory) and tag the result — don't state a state-specific requirement as settled from training knowledge.
