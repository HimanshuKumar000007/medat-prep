<USER_REQUEST>
# SEK ER GP4 — Create, Validate, and Integrate 12 Original Emotion Regulation Scenarios

Implement **SEK ER (Emotionen regulieren), Generalprobe 4 (GP4)** in the existing MedAT preparation platform.

This is a complete implementation task. Create 12 original German-language scenarios, design four first-person strategy options per scenario, validate the intended best answers, integrate the new bank into the actual GP4 simulator, and execute the relevant tests.

**Do not stop after generating question objects or writing a documentation report. Verify the actual simulator, answer keys, timer, scoring, and result flow.**

## 1. Exact GP4 configuration

Create exactly 12 original SEK ER questions.

| Requirement | Target |
|---|---:|
| Section | SEK ER — Emotionen regulieren |
| Generalprobe | GP4 |
| Total questions | Exactly 12 |
| Time limit | 18 minutes (1,080 seconds) |
| Answer options | Exactly four: A, B, C, D |
| Response perspective | First-person strategy statements |
| Correct answers | Exactly one defensibly best strategy per question |
| Question IDs | `SEK-ER-GP4-001` through `SEK-ER-GP4-012` |

Inspect the existing GP1–GP3 SEK ER banks and actual application configuration before implementation. Preserve the repository's established schemas, answer-key conventions, timer behavior, navigation, scoring, and result handling.

Do not add a fifth answer option, switch to the SEK EE likely/unlikely response format, or introduce ranking interactions from SEK SE.

Do not invent an official difficulty distribution, negative-marking rule, partial-credit policy, or scoring formula. Follow the established project specification.

## 2. Inspect the existing implementation first

Before creating or modifying any files, inspect:

- SEK ER GP1, GP2, and GP3 question banks.
- Existing scenario and question schemas.
- Answer-option and correct-answer representations.
- The four-option response interface.
- The established first-person wording conventions.
- Diffic
<truncated 13412 bytes>
nswer-persistence tests.
- Timer and submission tests.
- Scoring and results tests.
- Type check.
- Production build.
- GP1–GP3 regression checks.

Inspect the actual final code diff.

Do not claim a command passed unless it genuinely ran successfully. Fix failures where possible, and report unresolved failures honestly. If a check cannot run, state why rather than fabricating terminal output, test results, or integration evidence.

## 14. Final report with evidence

At completion, provide:

1. Files created or modified.
2. Confirmation of exactly 12 questions.
3. Confirmation of the 18-minute timer.
4. The final difficulty distribution, following the established project configuration.
5. The list of GP4 question IDs.
6. Evidence that all 12 best-answer decisions received semantic review.
7. A summary of how each correct strategy is supported by its scenario.
8. Results of the four-option, answer-key, and ambiguity checks.
9. Originality comparison against GP1–GP3.
10. The actual simulator integration path.
11. Actual validator, test, type-check, and production-build results.
12. Confirmation that GP1–GP3 content remains unchanged.
13. Any outstanding limitations.

Include actual terminal output or accurate excerpts from executed commands. Clearly distinguish automated validation from manual semantic review and unverified checks.

## Final acceptance criteria

GP4 SEK ER is complete only when the actual application loads exactly 12 original emotional-regulation scenarios, each has four plausible first-person strategy options and one defensibly best response, the 18-minute timer works, the established scoring and review behavior is preserved, and GP1–GP3 remain unaffected.

**Prioritize context-sensitive decisions, one defensibly best response per scenario, realistic distractors, and verified simulator integration over merely generating 12 question objects.**
</USER_REQUEST>
<ADDITIONAL_METADATA>
The current local time is: 2026-10-16T12:22:47+05:30.
</ADDITIONAL_METADATA>