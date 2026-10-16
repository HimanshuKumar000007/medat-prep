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
- Difficulty metadata, if present.
- Explanation and answer-review behavior.
- The 18-minute timer configuration.
- Navigation, answer persistence, submission, scoring, and results.
- Generalprobe registration and GP4 exam assembly.
- Existing validation scripts and tests.

Use the actual repository structure. Likely relevant files include the generalprobe data registry, SEK ER question-bank files, and shared SEK components, but inspect real paths instead of assuming they exist.

Reuse existing scenario renderers, timers, navigation, scoring, and result components wherever possible. Do not build a parallel SEK ER implementation unnecessarily.

## 3. Create 12 entirely original scenarios

Write 12 new, concise, realistic German-language scenarios that assess emotional regulation in everyday or interpersonal situations.

Possible contexts include:

- Receiving unexpected criticism.
- Handling frustration after repeated effort.
- Responding to a misunderstanding.
- Managing anxiety before an important event.
- Coping constructively with disappointment.
- Dealing with uncertainty about a decision.
- Recovering concentration after an emotional setback.
- Responding to provocative behavior.
- Balancing personal priorities with group responsibilities.
- Recognizing and addressing an avoidable mistake.
- Handling an unexpected change in plans.
- Responding to a conflict between expectations and reality.

These are suggestions, not mandatory templates. Create varied situations that are distinct from GP1–GP3.

Every question must contain:

1. A unique GP4 question ID.
2. A self-contained German-language scenario.
3. A clearly identifiable person whose emotional response is relevant.
4. Enough context to understand the emotional challenge.
5. Exactly four answer options, A–D.
6. Four realistic first-person strategy statements.
7. One intended best answer.
8. A concise explanation supporting the best answer.
9. A short rationale for each distractor.
10. Required metadata compatible with the existing schema.

Keep scenarios focused. Avoid irrelevant information, excessive narrative, and situations that depend on facts never provided.

Use fictional characters and avoid identifying real people or adding unnecessary medical or psychological history.

## 4. Keep all four options in the first person

Every option must describe a strategy from the perspective of the person experiencing the situation.

Use phrasing compatible with the established interface, such as:

- “Ich würde zunächst versuchen, …”
- “Ich würde mir bewusst machen, …”
- “Ich würde die Situation noch einmal …”
- “Ich würde ruhig ansprechen, …”

These are examples, not fixed templates.

All four answers must be plausible actions or responses that the person could take. Do not write answer options as definitions, diagnostic labels, or third-person instructions.

Keep option length, grammatical structure, specificity, and tone reasonably comparable. Do not make the correct answer consistently longer, more sophisticated, or more polished than all distractors.

Do not expose the key through distinctive formatting, labels, or hints.

## 5. Establish exactly one defensibly best strategy

For each scenario, determine which strategy is the most appropriate given the facts, emotional state, and practical constraints described.

Potential emotional-regulation principles include:

- Recognizing an emotional response without automatically acting on it.
- Pausing before making an impulsive decision.
- Reconsidering an interpretation when relevant evidence supports another perspective.
- Distinguishing controllable factors from uncontrollable outcomes.
- Identifying a realistic next step.
- Communicating assertively and respectfully.
- Breaking an overwhelming task into manageable parts.
- Seeking appropriate support when needed.
- Accepting an emotion while addressing the underlying problem.
- Returning attention to a task after managing distress.
- Setting a proportionate boundary when another person's behavior is inappropriate.

Use these principles contextually rather than mechanically. Do not make cognitive reframing the correct answer in every situation or imply that suppressing emotions is always appropriate.

The best response must fit the situation. For example, reconsidering one's assumptions may be useful when information is incomplete, while setting a respectful boundary may be more appropriate when a clear boundary violation has occurred.

### Distractor requirements

Every incorrect response must be plausible but less appropriate in the particular scenario.

Potential weaknesses include:

- Reacting impulsively.
- Avoiding a necessary conversation.
- Treating an unverified assumption as fact.
- Escalating a conflict.
- Blaming oneself excessively.
- Attempting to control another person's emotions.
- Suppressing emotions without addressing the problem.
- Repeatedly seeking reassurance instead of taking a constructive step.
- Ignoring a preventable problem.
- Acting prematurely without sufficient information.

Use these only when they fit the context. Avoid ridiculous or obviously irrelevant distractors.

**Do not create two options that could reasonably be considered equally effective and then arbitrarily mark one as correct.**

## 6. Conduct a scenario-by-scenario semantic audit

Every best-answer decision must be reviewed against the actual scenario.

For each of the 12 questions, assess:

1. **Contextual fit:** Does the best strategy address the specific problem?
2. **Emotional awareness:** Does it respond constructively to the emotional state?
3. **Practicality:** Can the person realistically carry out the strategy?
4. **Proportionality:** Is the response appropriate to the seriousness of the situation?
5. **Agency:** Does it distinguish the person's choices from factors outside their control?
6. **Communication:** Where others are involved, is the proposed response constructive and appropriate?
7. **Timing:** Does the strategy fit the stage of the situation?
8. **Distractor separation:** Is there a clear reason each alternative is less suitable?
9. **Ambiguity:** Could a reasonable reader choose a different strategy based on the same facts?
10. **Unsupported assumptions:** Does the expected answer depend on information not stated in the scenario?

Revise any scenario where the intended answer is not clearly defensible.

Do not claim that the chosen response is psychologically certain or universally effective. Emotional regulation is context-sensitive; the objective is a structured decision-making exercise with one well-supported best response.

## 7. Difficulty metadata

Inspect the actual SEK ER GP1–GP3 datasets to determine whether a defined difficulty distribution exists.

If the project has an established distribution, preserve that configuration for GP4 where appropriate. If no distribution is specified, do not invent an official requirement. Assign difficulty according to the established conventions and report the final counts.

Difficulty should arise from the reasoning required:

- **Easy:** A clear emotional challenge with a relatively direct constructive strategy.
- **Medium:** Several contextual facts must be considered before choosing the best response.
- **Hard:** More nuanced situations involving competing goals, uncertainty, interpersonal boundaries, or emotional and practical trade-offs.

Avoid making questions hard merely through vague writing, obscure vocabulary, excessive narrative, or deliberately ambiguous choices.

Validate all assigned difficulty counts programmatically.

## 8. Preserve the established scoring behavior

Inspect the existing SEK ER scoring implementation and reuse it.

Do not invent a new official MedAT scoring formula, negative-marking rule, partial-credit rule, or pass threshold.

Verify that:

- Each question has one stored correct option.
- The selected option is evaluated against the correct key.
- Changing a response before submission updates the final answer.
- An unanswered question follows the existing submission rules.
- Navigation does not lose or misattribute the response.
- The results page reports the correct number of questions and the actual computed score.
- Correct answers and explanations are revealed only at the existing review stage.

If the current scoring implementation contains a defect, document it and make the smallest safe correction, with tests.

## 9. Validate answer keys and explanations

Use the existing schema to associate each question with its four options, correct answer, and explanations.

Where supported, maintain internal quality-assurance metadata containing:

- Question ID.
- Intended correct option.
- Relevant scenario facts.
- Explanation of why the option is best.
- A concise explanation of each distractor's weakness.
- Semantic-review status.
- Any ambiguity found during review.

For every question, verify that the stored answer key matches the option actually rendered in the application.

If the option order changes, update the answer key and associated metadata together.

Create or extend a GP4 validator that checks:

1. Exactly 12 questions exist.
2. All IDs are unique and GP4-specific.
3. Each question contains one scenario and exactly four options, A–D.
4. All options use the required first-person perspective.
5. Every option is non-empty and conforms to the schema.
6. Each question has exactly one stored answer key.
7. The correct answer references an existing option.
8. Explanations agree with the scenario and intended best answer.
9. Required metadata is present.
10. No duplicated question IDs or registration collisions occur.
11. The timer is set to 1,080 seconds.
12. The actual GP4 simulator loads the new dataset.

Structural validation is not enough to establish that one strategy is uniquely best. Manually review all 12 scenarios and all 48 options.

Do not mark every question as semantically validated merely because a schema validator passes.

## 10. Originality audit against GP1–GP3

Compare GP4 against all existing SEK ER questions in GP1, GP2, and GP3.

Check for:

- Reused scenario descriptions with superficial wording changes.
- Recycled character and context combinations.
- Identical four-option sets.
- Copied strategy statements or distractor explanations.
- Repeated scenarios testing exactly the same judgment with nearly identical reasoning.
- Duplicate IDs or metadata collisions.

Conceptual overlap is acceptable because emotional-regulation practice necessarily revisits related principles. However, the actual scenarios, response options, and decision-making contexts must be meaningfully original.

Use automated similarity checks where practical and manual semantic review for substantive overlap.

Do not modify GP1–GP3 content to hide duplication. Produce a concise originality report explaining any significant overlaps and how they were addressed.

## 11. Integrate GP4 into the actual simulator

Register the new dataset through the actual Generalprobe 4 SEK ER entry point.

Verify end to end that:

- GP4 loads exactly 12 SEK ER questions.
- Every question displays its scenario and four first-person options.
- Exactly one option can be selected per question.
- Changing the selection works correctly.
- Answers persist during navigation according to existing rules.
- The timer is 18 minutes (1,080 seconds).
- Component re-renders do not restart the timer.
- Timer expiration follows the established submission behavior.
- The result page receives the correct submitted responses.
- Scoring uses the existing implementation.
- Correct answers and explanations appear only at the designated review stage.
- No question is accidentally registered twice.
- The rest of the GP4 navigation remains unchanged.

Trace the real data-loading and navigation path. The existence of a new data file is not proof that the actual simulator consumes it.

Reuse the existing scenario renderer, timer, answer-selection interface, and results system. Do not introduce duplicate infrastructure unnecessarily.

Keep answer keys and internal explanations out of active-test visible UI where supported by the existing architecture. Do not claim server-side answer protection if the keys remain readable in the client bundle.

## 12. Preserve other exam sections

Do not modify:

- GP1–GP3 SEK ER content.
- SEK EE or SEK SE content.
- Other KFF sections.
- BMS Biology, Chemistry, Physics, or Mathematics datasets.
- TV content.
- Unrelated timer, navigation, or scoring behavior.

The established GP4 BMS composition must remain:

- Biology: 40 questions.
- Chemistry: 24 questions.
- Physics: 18 questions.
- Mathematics: 12 questions.
- Total BMS: exactly 94 questions.

SEK ER is separate from the BMS total.

If shared code needs modification, explain why, keep the patch minimal, and run regression tests for affected sections.

## 13. Run actual tests and inspect the final diff

Execute the repository's real:

- SEK ER GP4 validator.
- Generalprobe data-validation scripts.
- Answer-key and option-selection tests.
- Relevant navigation and answer-persistence tests.
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