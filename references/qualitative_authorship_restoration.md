# Qualitative Authorship Restoration & Methodology-Compatibility Framework

**Specification Version**: 2.21.0  
**Authority**: Modular Reference for `academic-unslop-skill` by KalarisLabs  
**Model-Agnostic Wording**: Operates across AI models and agent harnesses.

---

## 1. Scope & Core Methodological Boundaries

This framework applies exclusively to qualitative chapters and mixed-methods research passages (interview analyses, focus group findings, case study fieldwork, thematic coding, observational field notes).

### Non-Negotiable Integrity Red Lines
1. **Zero Fabrication of Human Experience**:
   - Strictly forbids inventing researcher emotions, personal memoirs (*"this stayed with me"*, *"I was struck by"*), artificial positionality statements, or manufactured non-verbal gestures (*"pausing, looking down thoughtfully"*).
   - Strictly forbids inventing, extending, cleaning up, or modifying participant quotations.
2. **T19 Relocation vs. T29 Reconstruction**:
   - **T19 (Relocation)**: Moves or lightly adapts existing researcher commentary, interview context, or analytical choices already recorded elsewhere in the thesis. T19 never writes new interpretive claims.
   - **T29 (Grounded Reconstruction)**: Reconstructs a cautious interpretive sentence *only* when an unbroken evidentiary chain links it to documented data tables, coding trees, interview transcripts, or explicit theoretical frameworks. Requires a completed Source Trace block.
   - If evidentiary backing is absent or ambiguous, write **`Author confirmation needed`**; never insert ungrounded prose.

---

## 2. Methodology-Compatibility Matrix

Different qualitative epistemologies mandate distinct authorial stances. Applying an incompatible voice register destroys academic credibility.

| Qualitative Tradition | Dominant Epistemology | Permissible Voice & Stance | Impermissible Operations (Will Invalidate Research) | Applicable Techniques |
|:---|:---|:---|:---|:---:|
| **Reflexive Thematic Analysis (Braun & Clarke)** | Interpretive / Constructivist | Subjective, first-person (*"I interpreted"*, *"our analysis suggests"*), active reflexivity, values subjectivity as analytical resource. | Objective third-person passives claiming "themes emerged naturally without researcher influence"; inter-coder reliability metrics. | T25, T26, T28, T29 |
| **Codebook / Descriptive Thematic Analysis** | Post-positivist / Pragmatic | Structured, systematic, third-person or collective first-person (*"we identified"*), audit-trail focused. | Highly personal emotional confessions; speculative psychoanalytic interpretations. | T25, T26, T27 |
| **Classic Grounded Theory (Glaser)** | Objectivist / Realist | Neutral, detached, constant comparative focus (*"data indicate"*, *"categories emerge"*), concept-driven. | First-person emotional reflexivity; pre-conceived theoretical frameworks forced onto raw categories. | T26, T27 |
| **Constructivist Grounded Theory (Charmaz)** | Interpretivist / Constructivist | Explicit researcher-participant co-construction, reflexivity, situated narratives, visible interpretive decisions. | Claiming absolute objective truth; wiping out researcher presence entirely. | T25, T26, T27, T28, T29 |
| **Interpretative Phenomenological Analysis (IPA)** | Hermeneutic / Idiographic | Idiographic focus, deep double-hermeneutic interpretation (researcher making sense of participant making sense), nuanced voice. | Broad sociological generalizations; surface descriptive summaries; treating quotes as plain factual reports. | T26, T27, T28, T29 |
| **Case Study Research (Yin Paradigm)** | Realist / Post-positivist | Objective investigator stance, construct validity, chain of evidence, triangulation across documentation and interviews. | Reflexive autobiographical narrative; unanchored impressionistic storytelling. | T18, T21, T22, T27 |
| **Case Study Research (Stake Paradigm)** | Interpretive / Experiential | Emic perspective, thick contextual description, experiential vignettes, holistic case boundaries. | Rigid mechanical hypothesis testing; reductionist statistical tables without context. | T25, T26, T27, T28 |
| **Narrative Inquiry** | Relational / Constructionist | Temporal, biographical, highly dialogic, contextualized chronological progression. | Fragmenting life stories into disjointed de-contextualized 2-sentence codes. | T25, T27, T28 |

---

## 3. Qualitative De-Templating Protocols (T25–T28)

AI-generated qualitative analyses exhibit severe structural repetition that commercial detectors reliably flag. Use these protocols to restore authentic scholarly texture:

### T25: Qualitative Transition De-templating
- **Problem**: Mechanical introductory headings (*"Regarding the second theme, participants expressed..."*).
- **Remedy**: Link themes through conceptual tension, organizational dilemmas, or chronological shifts rooted in participant data.
- **Example**:
  - *Before*: *"Turning to the second theme, participants experienced role ambiguity. Furthermore, this ambiguity caused stress."*
  - *After*: *"While role definitions appeared clear in formal job descriptions, day-to-day coordination with algorithmic management tools produced immediate practical contradictions."*

### T26: Theme-Introduction Diversification
- Avoid beginning every theme with: `Theme Name → Formal Definition → Quote`.
- Rotate theme entry points:
  - *Entry Pattern A*: Start with a documented institutional dilemma.
  - *Entry Pattern B*: Start with a participant's contrasting perspective.
  - *Entry Pattern C*: Start with a procedural fieldwork observation.
  - *Entry Pattern D*: Start with a theoretical tension from literature.

### T27: Local-Context & Thick-Description Grounding
- Anchor abstract coding categories to concrete physical settings, departmental units, or institutional processes documented in the fieldwork.
- *Rule*: Draw exclusively from real interview metadata (e.g., department name, tenure, team size); never invent fictional details.

### T28: Participant Quote Framing & Balance Disruption
- **Problem**: Artificial AI symmetry (every participant gets 1 quote; every quote is exactly 25 words).
- **Remedy**:
  - Vary quote integration syntax:
    1. *Lead-in integration*: `As Participant 4 noted: "..."`
    2. *Embedded clause integration*: `The transition felt "abrupt and poorly communicated" according to Participant 7, who observed that...`
    3. *Trailing synthesis*: `"..." (Participant 12), a reaction reflecting broader team friction.`
  - **Quotation Invariant (Gate B)**: Every word within quotation marks is 100% locked. Do not correct grammar, modify colloquialisms, or truncate text unless indicated by original ellipses.

---

## 4. Grounded Interpretive Reconstruction (T29)

When qualitative findings lack authorial analytical depth (D20), reconstruct interpretive connective tissue using T29:

1. **Explicate the Hermeneutic Step**: Connect what the participant said to what the concept means, showing the researcher's analytical deduction.
2. **Document Evidentiary Grounding**: Every added sentence must be traceable to the interview transcript, coding dictionary, or established methodology.
3. **Mandatory Source Trace Logging**:
   ```text
   T29 Trace: Target P-Qual-08 -> Grounded in Participant 5 transcript (Lines 45-52) & 
   Thematic Code 'Algorithmic Ostracism'. New unsupported claims: None.
   ```
4. **Author Confirmation Boundary**: If interpretive intent cannot be confirmed from existing thesis text, output:
   `[Author confirmation needed: Clarify whether Participant 5's reaction represents individual resistance or team-wide norm.]`
