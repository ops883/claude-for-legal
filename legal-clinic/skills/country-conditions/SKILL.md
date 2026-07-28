---
name: country-conditions
description: >
  Builds a country conditions research packet for asylum, withholding of
  removal, and CAT claims — organized around the changed-circumstances issue
  rather than around the history of abuse. Produces a sourced memo with a
  tiered source index, a verification checklist, and a "what changed / what
  happened after" chronology exhibit. Leads and structure, NOT authoritative
  citations; students pull and verify every source. Use when a student needs
  country conditions for an I-589, a merits brief, a bond packet, or a CAT
  argument, or when DHS is expected to argue conditions have improved.
argument-hint: "[country] [risk profile, e.g. political opposition]"
---

# /country-conditions

1. Load `~/.claude/plugins/config/claude-for-legal/legal-clinic/CLAUDE.md` → practice areas, supervising attorney.
2. Confirm scope before researching: form of relief, risk profile, hearing posture. These change the packet materially.
3. Build the packet using the structure below. Lead with **durability**, not with the history of abuse.
4. Every source goes in the tiered index with a URL and a date. Mark anything you could not retrieve in full.
5. Output the packet plus the chronology exhibit. Route to the supervising attorney before anything is filed.

```
/legal-clinic:country-conditions "Venezuela" "political opposition activist"
```

---

# Country Conditions: Build for the Contested Issue

## Purpose

Most country conditions research fails not because it lacks evidence of abuse
but because it answers the wrong question. The historical record of persecution
in a refugee-producing country is usually well documented and rarely disputed.
What DHS contests — and what IJs actually decide — is whether conditions have
**changed** enough that the applicant's fear is no longer well-founded.

This skill produces a packet organized around that question.

> **Leads, not authorities.** Everything this skill produces is a starting
> point. No citation is verified. The student pulls every source, confirms every
> figure against the original document, and takes the packet to the supervising
> attorney before it informs a filing.

## Load context

`~/.claude/plugins/config/claude-for-legal/legal-clinic/CLAUDE.md` → practice
areas, jurisdiction, supervising attorney, escalation rules.

## Check for a threshold bar before researching anything

Country conditions research is merits research. If a **threshold bar** disposes
of the application first, the packet is wasted work — and worse, the student
spends the available time on the wrong record.

Ask, in this order, before opening a single source:

1. **Safe third country / asylum cooperative agreement.** Under
   INA § 208(a)(2)(A) and 8 C.F.R. § 1240.11(h), an applicant who may be removed
   to an ACA country is **ineligible to apply for asylum at all**. The
   Immigration Judge never reaches the country of feared persecution. Where an
   ACA is in play, the only merits-type showing available is persecution or
   torture **in the ACA country** — which is a different research task, with an
   earlier deadline, and it is the one that matters. Check the client's date of
   entry (the ACA Rule applies only to entries on or after November 19, 2019)
   and the exceptions in the Federal Register document publishing that specific
   agreement.
2. **One-year filing deadline.** INA § 208(a)(2)(B), and whether a changed- or
   extraordinary-circumstances exception applies under § 208(a)(2)(D).
3. **Prior denial, firm resettlement, particularly serious crime, persecutor
   bar, terrorism-related inadmissibility.**

Withholding of removal and CAT protection survive the asylum-specific bars, so a
threshold bar rarely ends the case — but it changes which country's conditions
you need and which form of relief the packet is built to support. Establish this
first and confirm it with the supervising attorney.

## Scope the packet first

Ask before researching. These four answers change what gets built:

| Question | Why it changes the packet |
|---|---|
| **Form of relief** | Asylum needs nexus and discretion; withholding needs a higher probability showing; CAT needs no nexus and is mandatory — different evidence carries each |
| **Risk profile** | "Political opposition" and "returnee" pull almost disjoint source sets |
| **Posture** | Detained bond vs. affirmative interview vs. individual merits hearing changes length and emphasis |
| **Past persecution established?** | If yes, the burden shifts to DHS and the packet is a rebuttal document, not a proof document |

## The core structural move

Where a country has undergone an apparent political change — an election, a
transition, a peace deal, an amnesty, a change of head of state — DHS will argue
**fundamental change in circumstances** under 8 C.F.R. § 1208.13(b)(1)(i)(A).

Do not organize the packet chronologically or by human rights category. Organize
it around **four pillars** that answer the durability question:

1. **Continuity of the apparatus.** Did the security services, intelligence
   agencies, judiciary, and enabling laws survive the change? Name the specific
   agencies. Command continuity is the single most persuasive fact available.
2. **New violations after the change.** Anything the persecutor did *after* the
   date DHS relies on is worth more than anything before it. Count it, date it,
   source it.
3. **Defects in whatever relief was granted.** Amnesties, releases, and pardons
   are frequently partial, discretionary, procedurally defective, or revocable.
   Read the instrument itself, not the press release.
4. **The residual population still at risk.** Independent monitors' current
   counts, and the gap between those counts and the government's claims.

## Source hierarchy

Build the index in three tiers. Tier 1 does the work; Tier 2 corroborates;
Tier 3 is what an adjudicator can take judicial notice of.

**Tier 1 — determinative.** UN fact-finding missions, commissions of inquiry,
and special rapporteurs; OHCHR; treaty body concluding observations; Human
Rights Watch and Amnesty International country reports; the leading domestic
monitor (often the most current source on detention figures).

**Tier 2 — supporting.** State Department Country Reports on Human Rights
Practices; Freedom House; CIVICUS; regional bodies; CRS reports; wire and
national press for discrete events; ReliefWeb for humanitarian data.

**Tier 3 — primary instruments and U.S. adjudication posture.** The text of the
amnesty, decree, or statute as published in the official gazette; USCIS policy
memoranda; controlling litigation; the State Department travel advisory. This
tier is routinely omitted and is often the most useful — an adjudicator will
credit the actual text of a law over a summary of it.

## Verification discipline

This is the part students get wrong.

- **Never cite what you have not opened.** Search summaries and secondary
  descriptions drift. Figures in particular drift.
- **Record what you could not retrieve.** If a source was paywalled, blocked, or
  unavailable, say so in the packet in a dedicated section. A packet that
  discloses its own gaps is more useful than one that hides them.
- **Date-stamp every figure.** Detention counts, casualty figures, and displaced
  populations move weekly. A number without a date is not evidence.
- **Reconcile divergent counts rather than picking one.** Different monitors use
  different definitions. Explain the divergence in a table — it demonstrates
  command of the record instead of appearing to cherry-pick.
- **Flag low-reliability claims explicitly.** If a striking fact traces only to
  partisan or unreliable outlets, mark it as requiring independent confirmation
  and tell the student what the conservative version of the claim is.

## Packet structure

```
0.  Evidentiary caveat — what was retrieved, what was not, what needs verifying
1.  Executive summary — the contested issue and the answer in one page
2.  Timeline of the relevant period
3.  Divergent figures reconciled (table)
4–7. The four pillars
8.  The specific risk profile — what happens to people like this applicant
9.  Civic space, judiciary, and the absence of state protection
     → the internal relocation analysis follows from this section
10. Returnees and deportees — how the state treats people sent back
11. Humanitarian and security baseline
12. Accountability and impunity
13. Tiered source index with URLs and dates + open-gaps checklist
14. Practice notes — how to deploy this at the hearing
```

## The chronology exhibit

Produce this as a **separate filing-ready document**. It is the highest-leverage
artifact the skill generates.

Two parts. **Part I** lists every event DHS relies on for changed conditions —
stated fairly, conceded openly. **Part II** lists everything documented *since*
the latest of those events, with a "why it matters" column tying each entry to
the legal standard.

The argument is structural: Part II should be longer, more recent, and more
authoritatively sourced than Part I. Let the reader see that before reading a
word of argument.

Close with the burden allocation. Where past persecution is established, DHS
bears the burden of showing fundamental change by a **preponderance** —
8 C.F.R. § 1208.13(b)(1)(ii). Students routinely brief this as though the
applicant must disprove change. Make the Department carry it.

## Don't forget

- **Plead CAT in the alternative and develop it fully.** Where a
  changed-circumstances argument threatens the asylum claim, CAT survives it:
  no nexus requirement, no discretionary denial, mandatory if the standard is
  met. Sections 7 and 10 of the structure feed it directly.
- **Humanitarian asylum.** § 1208.13(b)(1)(iii)(A) for severe past persecution
  and (iii)(B) for other serious harm on return — the humanitarian and
  returnee-treatment sections support (iii)(B) independent of political nexus.
- **Internal relocation.** § 1208.13(b)(3). Where the persecutor is the national
  government acting through nationally deployed forces, say so explicitly and
  tie it to the judiciary section.
- **Check the U.S. adjudication posture.** Processing holds, TPS terminations,
  and litigation vacaturs change what the student should be doing procedurally,
  and they change fast.
- **Consider an expert declarant.** Continuity-of-apparatus arguments are much
  stronger from someone who can speak to command structures.

## References

`references/venezuela-2026-worked-example.md` — a complete packet built with
this structure (Venezuela, political opposition profile, July 2026). Read it for
the shape of the output, not for its facts: it is a dated snapshot, and its own
§ 0 records which sources could not be retrieved when it was written.

## Escalate to the supervising attorney

- Before the packet informs any filing, in every case.
- Immediately if research surfaces a **filing deadline** implication — a
  changed-circumstances exception to the one-year bar under
  INA § 208(a)(2)(D) runs on discovery of the change.
- If conditions appear to have genuinely improved for this profile. That is a
  case-altering finding and is the attorney's call, not the student's.
