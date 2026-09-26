# Multi-Detector Rewriting Techniques & Thesis-Safe Revision Protocols

**Specification Version**: 2.21.0  
**Authority**: Modular Reference for `academic-unslop-skill` by KalarisLabs  
**Model-Agnostic Wording**: Operates across AI models, coding agents, and automated writing workflows.

---

## 1. Core Operational Constraints & Invariants

All revision operations executed under this skill are bound by four non-negotiable architectural invariants:

1. **Principle 2 — Minimal Edit Only, Never Regenerate**:
   - The single largest cause of score regression is regenerating paragraphs as fluent AI prose.
   - Revisions proceed sentence-by-sentence and clause-by-clause. Every revised sentence must trace directly to a specific original sentence (or a verified researcher-trace relocation).
   - Whole-paragraph regeneration, whole-chapter rewriting, back-translation, and external humanizer APIs are strictly forbidden.
2. **Principle 4 — Word-Count Preservation ($\ge 100\%$)**:
   - AI risk reduction must NEVER be achieved by compressing, deleting, or summarizing content.
   - $\text{revised\_word\_count} \ge \text{original\_word\_count}$ for every individual paragraph and for the chapter as a whole.
   - Growth target: $+0\%$ to $+15\%$. If removing formulaic connectors reduces length, compensate immediately by adding concrete thesis details, dataset attributes, or explicit operational mechanisms from existing content.
   - *Over-Cap Exception*: If an original paragraph already exceeds 200 words or 12 sentences, preserve all content without forcing growth; split at safe logical boundaries and evaluate Gate F on the combined descendant word count.
3. **Principle 6 & Gate G — Structure & Readability Invariants**:
   - Headings must remain on their own line with preceding and succeeding blank lines preserved verbatim.
   - Paragraph merging is strictly forbidden; do not create monolithic mega-paragraphs.
   - Soft readability target: $\le 160\text{ words}$, $\le 9\text{ sentences}$. Hard cap: $200\text{ words}$, $12\text{ sentences}$.
4. **Principle 8 & Gate H — Universal Syntactic Completeness (Zero Fragments)**:
   - Every single punctuation unit ending in a period must possess an independent grammatical subject, a finite main verb, and express a complete thought.
   - Never split subordinate clauses (*"When employees collaborate with AI."*), noun lists (*"Work engagement, and creative inspiration."*), or gerund continuations (*"Including regression analysis."*) into standalone sentences.

---

## 2. Dimension-to-Technique Mapping

| Hit Dimension | Primary Technique | Secondary Technique | Escalation Rung |
|:---|:---|:---|:---:|
| **D1: Repetitive Starters** | **T1 Starter Variation** | T23 Information Progression | Rung 1 |
| **D2: Formulaic Transitions** | **T2 Transition De-formulaizing** | T10 Lexical Precision | Rung 1 |
| **D3: Over-Smooth Logic** | **T13 Reasoning Visibility** | T14 Paragraph Architecture / T19 Trace Relocation | Rung 3 |
| **D4: Uniform Rhythm** | **T3 Sentence Length Variation** | T11 Non-Native Academic Rhythm | Rung 2 |
| **D5: Generic Academic Phrasing** | **T6 Generalization Surgery** | T12 Abstract Word Reduction | Rung 1 |
| **D6: Overused Hedging / Balance** | **T4 Hedging Calibration** | T5 Balance Disruption | Rung 1 |
| **D7: Conclusion Generalizations** | **T6 Generalization Surgery** | T22 Boundary Clarification | Rung 1 |
| **D8: Passive / Nominalization** | **T7 Passive Voice Control** | T1 Starter Variation | Rung 1 |
| **D9: Abstract / Concrete Imbalance** | **T8 Concrete Anchoring** | T12 Abstract Word Reduction / T19 Trace Relocation | Rung 1 |
| **D10: Citation Regularity** | **T9 Citation Naturalization** | T1 Starter Variation | Rung 1 |
| **D11: Lexical Flatness / Repetition**| **T10 Lexical Precision** | T11 Non-Native Academic Rhythm | Rung 1 |
| **D12: Paragraph-Level Template** | **T14 Paragraph Architecture** | T19 Researcher-Trace Relocation | Rung 3 |
| **D13: Cross-Paragraph Repetition** | **T15 Section-Level Pattern Diversification** | T14 Paragraph Architecture Rebuilding | Rung 3 |
| **D14: AI-Like Academic Smoothness** | **T11 Non-Native Rhythm** | T13 Reasoning Visibility / T19 Trace Relocation | Rung 2 |
| **D15: Section Template Dependency** | **T15 Pattern Diversification** | T19 Researcher-Trace Relocation | Rung 3 |
| **D16: Methodological Template** | **T17 Methodological Template Breaking** | T19 Researcher-Trace Relocation | Rung 4 |
| **D17: Predictable Reporting Sequence**| **T18 Sequence Reordering** | T19 Researcher-Trace Relocation | Rung 4 |

---

## 3. The Six-Rung Escalation Ladder (Principle 5)

When a chapter remains at or above the active target threshold ($< 30\%$) after external re-testing, escalate systematically up the ladder. Never jump directly to aggressive restructuring.

```
┌────────────────────────────────────────────────────────────────────────┐
│ Rung 6: Functional Reorganisation (Change paragraph communicative role)│
├────────────────────────────────────────────────────────────────────────┤
│ Rung 5: Source-Extracted Trace Integration (Relocate existing context) │
├────────────────────────────────────────────────────────────────────────┤
│ Rung 4: Reporting-Sequence & Template Breaking (Invert loops, T17/T18) │
├────────────────────────────────────────────────────────────────────────┤
│ Rung 3: Paragraph Architecture Rebuilding (Entry points, T14/T15)      │
├────────────────────────────────────────────────────────────────────────┤
│ Rung 2: Rhythm & Cadence Repair (Burstiness, safe splitting, T3/T11)   │
├────────────────────────────────────────────────────────────────────────┤
│ Rung 1: Sentence-Level Edits (Starters, transitions, lexical, T1-T10)  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Complete Technique Catalog (T1–T29)

### T1: Starter Variation (Rung 1)
- **Mechanism**: Recast repetitive initial subjects ("This study...", "The model...") by leading with prepositional phrases, adverbial clauses, or direct grammatical objects.
- **Before**: *"This study examines the mediating effect of psychological safety. This study collects data from 312 tech employees. This study uses structural equation modeling."*
- **After**: *"To investigate the mediating role of psychological safety, empirical data were gathered from 312 technology professionals. Using structural equation modeling, the hypothesized path relationships were evaluated."*

### T2: Transition De-Formulaizing (Rung 1)
- **Mechanism**: Strip formulaic transition words (*"Furthermore,"*, *"Moreover,"*, *"Additionally,"*). Rely on semantic cohesion, demonstrative noun phrases (*"Under this condition,"*, *"In contrast to prior assumptions,"*), or lexical pointers.
- **Before**: *"Moreover, employee self-efficacy influences task performance. Furthermore, organizational support enhances this relationship."*
- **After**: *"Employee self-efficacy directly shapes task performance. This performance advantage expands when organizational support provides necessary technological resources."*

### T3: Sentence Length Variation & Burstiness (Rung 2)
- **Mechanism**: Disrupt uniform 18-word sentences by alternating short declarative statements (6–10 words) with clause-rich analytical sentences (24–30 words).
- **Rule**: Splitting is permitted ONLY where both resulting clauses independently pass Gate H (subject + finite verb).

### T4: Hedging Calibration & Claim-Strength Control (Rung 1)
- **Mechanism**: Eliminate stacked hedges (*"could potentially suggest"* $\rightarrow$ *"suggests"*). Preserve exact epistemic boundaries: never upgrade inferential verbs (*"indicates"*, *"suggests"*) into assertive claims (*"proves"*, *"demonstrates"*).

### T5: Balance Disruption (Rung 1)
- **Mechanism**: Break artificial 50/50 argumentative balance (*"While X has benefits, Y also offers advantages"*). Introduce authentic scholarly priorities and contextual weight.

### T6: Generalization Surgery (Rung 1)
- **Mechanism**: Excise generic textbook platitudes (*"Innovation is vital for organizational survival in the modern era."*). Replace with specific operational context (*"In high-turnover software engineering teams, rapid feature iteration depends on knowledge sharing."*).

### T7: Passive Voice Control (Rung 1)
- **Mechanism**: Selectively convert agentless passives to active authorial or methodological subjects (*"We evaluated"* or *"The regression model indicates"*) without descending into informal register.

### T8: Concrete Anchoring (Rung 1)
- **Mechanism**: Ground abstract theoretical assertions in specific sample characteristics, instrument scales, or observable behavioral metrics.

### T9: Citation Naturalization (Rung 1)
- **Mechanism**: Alternate between information-prominent parenthetical citations `(Chen, 2022)` and author-prominent narrative attributions (`Chen (2022) observed...`). Avoid identical placement at sentence ends.

### T10: Lexical Precision & Repetition Control (Rung 1)
- **Mechanism (Anti-Synonym Rule)**: Preserve exact technical terms and variable names consistently (do NOT cycle synonyms for variables). Vary general academic reporting verbs and transition syntax.

### T11: Non-Native Academic Rhythm (Rung 2)
- **Mechanism**: Preserve authentic, grammatically correct non-native English cadence. Actively reject artificial AI fluency, idioms, or elevated GRE vocabulary (*"delve"*, *"tapestry"*, *"beacon"*).

### T12: Abstract Word Reduction (Rung 1)
- **Mechanism**: Replace stacked abstract nominalizations (`-tion`, `-ment`, `-ance`) with concrete procedural descriptions.

### T13: Reasoning Visibility (Rung 3)
- **Mechanism**: Make explicit the intermediate analytical friction, methodological dilemmas, or theoretical tensions that AI smoothing routinely erases.

### T14: Paragraph Architecture Rebuilding (Rung 3)
- **Mechanism**: Restructure the internal functional trajectory of the paragraph. Shift from standard deductive templates to inductive or comparative arrangements.

### T15: Section-Level Pattern Diversification (Rung 3)
- **Mechanism**: Differentiate parallel paragraphs within a section (e.g., across 3 hypothesis development subsections):
  - *Paragraph A*: Open from psychological mechanism.
  - *Paragraph B*: Open from empirical boundary condition.
  - *Paragraph C*: Open from behavioral resource allocation.

### T16: Shared External-Risk Structural Pass (Rung 4)
- **Mechanism**: Detector-agnostic structural pass applied to overlapping multi-detector risk clusters without changing authorial meaning.

### T17: Methodological Template Breaking (Length-Preserving) (Rung 4)
- **Mechanism**: De-template standard measurement sections (`definition → source → item count`) by integrating operational context and keeping word count $\ge 100\%$.
- **Before**: *"Job crafting was measured using the scale developed by Tims et al. (2012). The scale consists of 21 items. It is rated on a 5-point Likert scale ranging from 1 (never) to 5 (always)."*
- **After**: *"To capture proactive employee adjustments across tasks and relational boundaries, we administered the 21-item job crafting instrument established by Tims et al. (2012). Participants evaluated behavioral frequencies on a five-point Likert format extending from 1 ('never') to 5 ('very often')."*

### T18: Sequence Reordering (Length-Preserving) (Rung 4)
- **Mechanism**: Invert mechanical empirical reporting loops. Present empirical findings directly anchored to table rows before reviewing statistical criteria.
- **Before**: *"To test Hypothesis 1, regression analysis was performed. As shown in Table 4, the regression coefficient is β = 0.34, p < 0.001. Therefore, Hypothesis 1 is supported."*
- **After**: *"Table 4 indicates a robust positive relationship between employee AI autonomy and innovative work output (β = 0.34, p < 0.001). The statistical significance of this path estimate substantiates the theoretical prediction formalized in Hypothesis 1."*

### T19: Researcher-Trace Relocation & Local Integration (Rung 5)
- **Strict Boundary**: Extraction-only relocation of existing authorial justifications, fieldwork observations, and methodological boundary choices already present in the thesis.
- **Zero Generation**: T19 never generates new interpretive claims. Requires a verified Source Trace block.

### T20: Problem-Driven Recasting (Rung 3)
- **Mechanism**: Frame theoretical propositions around the practical empirical tension or diagnostic puzzle identified in the introduction.

### T21: Contrast & Counter-Perspective Integration (Rung 3)
- **Mechanism**: Weave in conflicting empirical findings or rival theoretical explanations already cited in the literature review to break artificial consensus.

### T22: Epistemic Boundary & Scope Clarification (Rung 3)
- **Mechanism**: Explicate the contextual boundaries (sample demographic, industry constraints, time horizon) that delimit the empirical findings.

### T23: Information-Progression Rewrite (Rung 2)
- **Mechanism**: De-mechanize repetitive subject openings (*"This study..."*) by recasting sentences using object-as-subject, problem-handling flow, or instrumental focus.

### T24: Introduction & Abstract Anti-Template (Rung 4)
- **T24-A (Quantitative)**: Break background $\rightarrow$ gap $\rightarrow$ model $\rightarrow$ contribution. Lead with the real-world operational phenomenon or methodological dilemma.
- **T24-B (Qualitative)**: Ground opening in the lived experiential paradox or institutional complexity rather than abstract conceptual definitions.

### T25: Qualitative Transition De-templating (Rung 4)
- **Mechanism**: Replace mechanical theme connectors with contextual transitions driven by participant narrative turns.

### T26: Qualitative Theme-Introduction Diversification (Rung 4)
- **Mechanism**: Alternate theme openings across descriptive narrative, conceptual tension, institutional constraint, and participant voice.

### T27: Local-Context & Thick-Description Grounding (Rung 4)
- **Mechanism**: Anchor qualitative themes in physical, temporal, and organizational fieldwork details already present in the interview transcripts or observational records.

### T28: Participant Quote Framing & Natural Balance Disruption (Rung 4)
- **Mechanism**: Vary quote introductory syntax (lead-in, embedded, trailing) while strictly preserving verbatim quote strings.

### T29: Evidence-Based Authorship Restoration (Rung 5)
- **Mechanism**: Grounded reconstruction of cautious interpretive and methodological reasoning from explicit thesis evidence. Mandatory 8-field Source Trace block required.

---

## 5. Three-Pass Rewrite Protocol (Phase 5)

Every paragraph selected for revision undergoes a structured three-pass protocol:

### Pass 1: Template and Phrase Repair
- Recast repetitive sentence openings.
- Strip formulaic transition words (*"Furthermore,"*, *"Moreover,"*).
- Replace Tier 1 AI academic phrases (*"delve"*, *"pivotal"*, *"testament"*) with plain academic terms.
- Preserve protected elements and ensure word count $\ge 100\%$.

### Pass 2: Rhythm and Architecture Repair
- Vary sentence length and burstiness (combine short punches and analytical sentences).
- Reorder reporting sequences (T18) and measurement chains (T17).
- Split over-long sentences safely at independent clause boundaries.
- Preserve headings on their own line and prevent paragraph merging.

### Pass 3: Human Research Trace & Section Differentiation
- Anchor findings directly to table numbers, specific coefficients, and hypothesis labels.
- Differentiate functional entry points across neighboring parallel paragraphs (T15).
- Ensure stylistic consistency with the author's low-risk baseline (reject over-polishing).

---

## 6. Mandatory Source Trace Block Logging

For any sentence adjusted using **T19 (Relocation)** or **T29 (Reconstruction)**, record this block:

```text
================================================================================
SOURCE TRACE BLOCK (T19 / T29)
================================================================================
Paragraph ID: [e.g., P-Ch4-12]
Operation Type: T19 Relocation | T29 Grounded Reconstruction
Source Location: [e.g., Chapter 3, Section 3.2, Paragraph 4, Lines 12-15]
Original Source Material: "[Exact verbatim quote from thesis establishing evidence]"
Revised Sentence: "[Revised sentence as inserted into target paragraph]"
Substantive Anchor: [Specific variable, dataset, table, or participant cited]
New Content Added: No (Strictly grounded in source material)
Integrity Verification: Pass | Author confirmation needed
================================================================================
```
