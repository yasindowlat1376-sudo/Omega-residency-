# Ω-PATH-STUDY — Module index
Architecture baseline: 1.1.0. Parent: Ω-META → Ω-RESIDENCY. Execution: Ω-CIF.

| ID | Module | Scope |
|---|---|---|
| PATH-ARCH-01 | Governance & epistemics | Source authority, evidence states, privacy, safety and change control |
| PATH-ARCH-02 | Curriculum & competencies | Four-year developmental map, assessment and learning loop |
| PATH-ARCH-03 | Specimen-to-diagnosis | Clinical question through supervised report and audit |
| PATH-ARCH-04 | Gross pathology | Organ-specific dissection, sampling, dictation and safety |
| PATH-ARCH-05 | Microscopy & reasoning | Observation, pattern, differential and test selection |
| PATH-ARCH-06 | Entity knowledge | Cell, tissue and disease monographs; normal histology |
| PATH-ARCH-07 | Reporting | Structured diagnosis, synoptic data, uncertainty and addenda |
| PATH-ARCH-08 | Logbook & portfolio | Case exposure, feedback, competency and assessment records |
| PATH-ARCH-09 | Resident operations | Daily/weekly service, call, handoff and learning routines |
| PATH-ARCH-10 | Quality & modern pathology | Laboratory quality, molecular, digital and AI governance |
| PATH-ARCH-11 | Data, privacy & storage | Canonical records, access, retention and de-identification |
| PATH-ARCH-12 | Evidence register | Reference/version status, source authority and provenance |
| PATH-ARCH-13 | Implementation & validation | 30/60/90-day rollout, tests and acceptance gates |

Every module must identify dependencies, owner, input/output contracts, epistemic state, lifecycle state, privacy class, tests and verification evidence. Each reusable instruction chunk should remain independently executable and under 1,000 words.

Current code implements only the first operational slice: shift checklist, generic gross/microscopy text scaffolds, case log and shared-state persistence. The detailed procedure-aware grossing specification is documented in GROSSING_ENGINE.md; its multi-container and procedure-profile capabilities remain staged implementation work, not completed runtime features.
