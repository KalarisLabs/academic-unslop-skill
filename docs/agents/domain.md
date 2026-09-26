# Domain Modeling & Terminology Guidelines

**Domain**: AIGC Detector-Informed Academic Thesis Revision  
**Authority**: KalarisLabs

## Ubiquitous Language & Core Terminology

- **Minimal-Edit Surgical Revision**: Sentence-by-sentence and clause-by-clause editing of authentic author prose. Never regenerates paragraphs from scratch. Every rewritten sentence must trace back to an original sentence.
- **Protected Academic Elements**: Text tokens that must be preserved with 100% verbatim accuracy:
  - Statistical symbols and metrics ($\beta, t, F, R^2, \Delta R^2, \chi^2, df, p$, VIF, Cronbach's $\alpha$, sample size $N/n$).
  - Section headings and sub-headings (on their own lines).
  - Parenthetical citations, author names, publication years.
  - Variable names, abbreviations, hypothesis labels ($H_1, H_2a$).
  - Verbatim participant quotes and scale instruments.
  - Complete reference lists / bibliographies.
- **Red Line**: The lowest comparable external detector score achieved so far on a given chapter. Any revision round resulting in a higher or equal score is rolled back.
- **Closed Loop**: A strict iterative loop: diagnose 1 chapter $\rightarrow$ minimal rewrite $\rightarrow$ stop and external re-test $\rightarrow$ verify improvement $\rightarrow$ lock chapter as DONE (when $< 30\%$) or escalate rung.
- **Breakpoints**: Substantive empirical sentences (concrete numbers, methodology notes, boundary qualifiers) inserted to disrupt continuous AI-like text blocks without changing meaning.
- **Quality Gates A–J**: The 10 mandatory, output-blocking validation gates enforced by Phase 7.
