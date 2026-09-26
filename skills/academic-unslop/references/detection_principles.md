# Multi-Detector AIGC Trace Detection Principles & Quantitative Anchors

**Specification Version**: 2.21.0  
**Authority**: Modular Reference for `academic-unslop-skill` by KalarisLabs  
**Model-Agnostic Wording**: Applicable across LLM architectures, coding agents, and academic evaluation harnesses.

---

## 1. Multi-Detector Risk Architecture

Commercial and academic AI detectors (including Turnitin AI, CNKI AIGC / 知网, GPTZero, and Originality.ai) evaluate academic texts across three primary statistical layers:
1. **Token-Level Predictability (Perplexity)**: Likelihood of subsequent word sequences under standard language models. High perplexity reflects idiosyncratic, unpredictable human word choices; low perplexity flags machine-standard sequences.
2. **Syntactic Burstiness & Rhythm Variation**: Variance in sentence lengths, clause structures, and punctuation across adjacent sentences. LLMs inherently generate uniform sentence lengths with low standard deviation.
3. **Document Architecture & Template Regularity**: Structural conformity to standardized academic schemas (e.g., rigid hypothesis setup, uniform transition chains, mechanical empirical reporting loops).

### Multi-Detector Convergence Principle
Different detectors weight features differently:
- **Turnitin AI**: Heavily sensitive to continuous AI-generated prose segments, uniform syntactic rhythm, and AI-typical connective phrases (*"it is worth noting that"*, *"plays a pivotal role"*).
- **CNKI AIGC (知网)**: Aggregates continuous character spans (AI feature value) and heavily flags standardized Chinese academic boilerplate (e.g., front-loaded background clichés and back-loaded countermeasure templates).
- **GPTZero**: Evaluates burstiness and perplexity distributions at the document and paragraph tier.

This skill targets the **underlying structural and syntactic vulnerabilities** that trigger external detectors across the board, rather than overfitting to any single system.

---

## 2. Core 17-Dimension Scoring System (D1–D17)

Every included English-route paragraph is scored across 17 distinct AI-trace dimensions.  
**Total Dimension Weight: 49.0 points.**

| ID | Dimension Name | Max Weight | Quantitative Anchors & Indicators | Diagnostic Criteria |
|:---|:---|:---:|:---|:---|
| **D1** | Repetitive Sentence Starters | 3.0 | $\ge 3$ consecutive sentences with identical grammatical heads | Repeated initial subject nouns, identical gerund openers, or identical pronoun structures (e.g., *"This study... The study... It..."*). |
| **D2** | Formulaic Transitions & Connector Chains | 3.0 | Transition density $> 3$ per 100 words | Mechanical paragraph/sentence heads: *"Furthermore,"*, *"Moreover,"*, *"In addition,"*, *"Consequently,"*, *"Therefore,"*. |
| **D3** | Over-Smooth Logical Flow | 3.0 | Uninterrupted background $\rightarrow$ gap $\rightarrow$ purpose $\rightarrow$ contribution | Seamless conceptual glide lacking cognitive tension, scholarly counter-perspectives, or real-world friction. |
| **D4** | Uniform Sentence Length and Rhythm | 2.5 | Coefficient of Variation $CV = \sigma / \mu < 0.25$ | Sentences cluster tightly around 15–22 words with identical clause nesting; absence of short declarative punches ($< 10$ words) or clause-dense bursts ($> 28$ words). |
| **D5** | Generic Academic Phrasing | 3.0 | Presence of Tier 1/2 AI academic buzzwords | Pervasive textbook generalities: *"plays a pivotal role"*, *"underscores the significance"*, *"rich tapestry"*, *"delve into"*, *"testament to"*. |
| **D6** | Overused Hedging or Balanced Claims | 2.0 | Stacked modal verbs $\ge 2$ per sentence | Dual hedging (*"could potentially"*, *"may tentatively suggest"*); rigid 50/50 balance (*"while X has benefits, Y also offers advantages"*). |
| **D7** | Conclusion-Style Generalizations | 2.5 | High density of unanchored normative assertions | Broad claims about theoretical or managerial implications disconnected from the specific dataset, sample, or coefficient values. |
| **D8** | Passive Voice & Nominalization Clusters | 2.0 | Passive verb ratio $> 35\%$; $\ge 4$ nominalizations per paragraph | Heavy agentless passives (*"was performed"*, *"were conducted"*) and stacked abstract nouns ending in `-tion`, `-ment`, `-ance`. |
| **D9** | Abstract-to-Concrete Imbalance | 2.5 | Conceptual nouns outnumber concrete entities $> 4:1$ | High-level theoretical discourse without grounding in sample size, industry context, data collection instruments, or operational metrics. |
| **D10** | Citation Pattern Regularity | 2.0 | Citation syntax regularity $> 80\%$ | Monotonous citation syntax: every sentence ending in parenthetical `(Author, Year)` or opening with `Author (Year) argued that`. |
| **D11** | Lexical Flatness & Repeated Verbs | 2.5 | Type-Token Ratio $TTR < 0.60$ for non-technical words | Reusing a narrow bank of safe reporting verbs (*"demonstrates"*, *"indicates"*, *"shows"*, *"reveals"*) across adjacent sentences. |
| **D12** | Paragraph-Level Template Structure | 4.0 | Fixed 4-part internal paragraph cadence | Rigid progression: (1) generic topic sentence $\rightarrow$ (2) two literature citations $\rightarrow$ (3) synthetic summary $\rightarrow$ (4) forward-looking bridge. |
| **D13** | Cross-Paragraph Structural Repetition | 4.0 | $\ge 2$ adjacent paragraphs sharing structural skeleton | Neighboring paragraphs with identical sentence counts, matching opening transitions, and parallel functional arguments. |
| **D14** | AI-Like Smoothness / Low Human Friction | 3.0 | Complete absence of procedural qualification | Absence of authorial hesitation, methodological caveats, fieldwork realities, data cleaning dilemmas, or boundary qualifications. |
| **D15** | Thesis-Section Template Dependency | 3.0 | Strict adherence to genre-standard outlines | In theory review: Theorist $\rightarrow$ Year $\rightarrow$ Core Concept $\rightarrow$ Application to Current Study across multiple subsections. |
| **D16** | Methodological Template Intensity | 4.0 | Fixed 3-step variable measurement loop | Repeating: Variable definition $\rightarrow$ Scale author & item count $\rightarrow$ Likert scale rating point for every variable in Section 3. |
| **D17** | Predictable Reporting Sequence | 3.0 | Fixed 4-step statistical reporting loop | Repeating: Statistical test name $\rightarrow$ Numerical threshold $\rightarrow$ Calculated statistic $\rightarrow$ "Hypothesis Hx is supported" for every hypothesis. |

---

## 3. Qualitative Supplement Dimensions (D18–D21)

Applied exclusively to qualitative and mixed-methods research sections:

- **D18: Qualitative Transition Templating**: Mechanical transitional pivots between qualitative themes (e.g., *"Turning to the second theme..."*, *"Moving to participant perceptions..."*).
- **D19: Qualitative Theme-Presentation Uniformity**: Presenting each thematic category with an identical skeleton: Theme title $\rightarrow$ abstract definition $\rightarrow$ single participant quotation $\rightarrow$ brief restatement.
- **D20: Qualitative Researcher-Voice Absence**: Absolute detachment of authorial stance; absence of interpretive reasoning, coding dilemmas, or reflexivity.
- **D21: Participant Quote-Balance Uniformity**: Artificial, mechanical balancing of participant evidence (e.g., exactly two quotes per participant, identical quote word lengths).  
  *Quotation Protection Rule*: Under D21, never edit, delete, shorten, or alter verbatim participant quotations. De-templating is achieved strictly by altering the researcher's framing and interpretive context.

---

## 4. Mathematical Calculation Pipeline & Scoring Formulas

### 4.1 Raw Paragraph Risk Score
$$\text{raw\_paragraph\_risk} = \min\left(\frac{\sum_{i=1}^{17} D_i}{49.0}, 1.0\right) \times 100\%$$

### 4.2 Floor Rules & Priority Escalations
To prevent false negatives when structural risk is extreme, the final paragraph risk index adopts the highest applicable floor:
$$\text{paragraph\_risk\_index} = \max(\text{raw\_paragraph\_risk}, \text{pattern\_floor}, \text{repeated\_structure\_floor}, \text{section\_template\_floor}, \text{d16\_d17\_trigger\_floor}, \text{multi\_detector\_trigger\_floor})$$

#### Pattern Floors
- $\ge 2$ strong AI dimensions ($\ge 70\%$ of max weight): $\text{floor} = 18\%$
- $\ge 3$ strong AI dimensions: $\text{floor} = 28\%$
- $\ge 4$ strong AI dimensions: $\text{floor} = 38\%$
- $D_{12} \ge 2.4$: $\text{floor} = 35\%$
- $D_{12} \ge 2.4 \land D_3 \ge 1.5$: $\text{floor} = 42\%$
- $D_{12} \ge 3.2 \land D_5 \ge 2.0$: $\text{floor} = 50\%$
- Pervasive AI academic synthesis across most sentences: $\text{floor} = 60\%$

#### Cross-Paragraph & Section-Template Floors
- 3–5 paragraphs sharing structural openings: $\text{floor} = 25\%$
- 6–10 paragraphs sharing structural openings: $\text{floor} = 35\%$
- $> 10$ paragraphs sharing structural openings: $\text{floor} = 45\%$
- Entire section repeating structural skeleton: $\text{floor} = 50\%$
- Literature Review generic template (`definition → citation → implication`): $\text{floor} = 35\%$
- Hypothesis development template (`variable definition → mechanism → hypothesis`): $\text{floor} = 40\%$
- Empirical Results template (`coefficient → significance → hypothesis support`): $\text{floor} = 35\%$
- Discussion template (`result → explanation → implication`): $\text{floor} = 42\%$
- Conclusion unanchored implication template: $\text{floor} = 45\%$

#### D16 / D17 Methodology & Reporting Floors
- If $D_{16} \ge 2.5 \lor D_{17} \ge 2.5$: $\text{paragraph\_risk\_index} \ge 50\%$, Priority = A: Critical (P0), Rewrite Intensity = Structural Reorganisation.

### 4.3 Multi-Detector Trigger Floors (Triggers A–D)
- **Trigger A (Front-Loaded AI Concentration)**: When opening 20% of chapter contains dense AI segments $\rightarrow$ Minimum Priority P1 (High).
- **Trigger B (Uniform Sentence Rhythm Across Paragraphs)**: 3+ neighboring paragraphs share sentence length, clause pattern, and density $\rightarrow$ Pass 2 rhythm repair mandatory.
- **Trigger C (Human Research Trace Deficit)**: Smooth conceptual glide lacking researcher decision traces $\rightarrow$ Review for T19 relocation or T29 grounded reconstruction.
- **Trigger D (Repeated Result-Implication Loop)**: Conclusion/discussion repeats `result → theoretical → practical` $> 2$ times $\rightarrow$ Rewrite unit must be expanded to paragraph group.

### 4.4 Scope-Level Internal Risk Index
$$\text{scope\_risk\_index} = (0.45 \times \text{average\_paragraph\_risk}) + (0.25 \times \text{high\_risk\_share}) + (0.15 \times \text{medium\_risk\_share}) + (0.15 \times \text{section\_repetition\_score})$$

Where all inputs are evaluated on a 0–100 scale:
- `average_paragraph_risk`: Mean $\text{paragraph\_risk\_index}$ across included body paragraphs.
- `high_risk_share`: Percentage of paragraphs with $\text{paragraph\_risk\_index} \ge 40\%$.
- `medium_risk_share`: Percentage of paragraphs with $\text{paragraph\_risk\_index} \ge 25\%$ (cumulative; includes high-risk paragraphs).
- `section_repetition_score`: 0–20 (low), 21–40 (mild), 41–60 (clear repetition in 1 section), 61–80 (repetition across several sections), 81–100 (systemic).

*Scope Labeling Rule*: Label as `overall_risk_index` **only** when Scope = Full document; otherwise label as `target_chapter_risk_index`, `batch_risk_index`, or `fragment_risk_index`.

### 4.5 External Calibration Heuristic
When an external detector report (Turnitin AI or CNKI) is provided:
- If $\text{external\_score} - \text{internal\_estimate} \ge 15\text{ percentage points}$ OR $\text{external\_score} \ge 1.5 \times \text{internal\_estimate}$:
  Apply baseline calibration floor: $\text{internal\_score} \ge 0.70 \times \text{external\_score}$.  
  *Aggressive rewriting* under recalibration means **deeper structural de-templating and rhythm disruption**, never looser prose generation.

---

## 5. Signal Calibration & False-Positive Safeguards

1. **Legitimate Citation Carveout**: Standard parenthetical academic attributions `(Smith, 2021; Wang et al., 2023)` must never be scored as vague attribution or passive fluff under D9/D10.
2. **Single Signal Isolation Rule**: A single flagged word or isolated passive sentence is NOT a reliable AI indicator. A paragraph is elevated to High Risk only when a **cluster** of multiple distinct dimensions co-occurs.
3. **No Double-Counting**: Do not penalize the exact same text token under multiple dimensions (e.g., if a phrase is scored under D2, do not score the same words under D5).
4. **Preservation of Authentic Non-Native Phrasing**: Do not penalize plain or slightly repetitive syntax typical of non-native English scholars. Over-polishing non-native prose into native journal idioms increases detector risk.
