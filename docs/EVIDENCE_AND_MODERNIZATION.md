# Ω-RESIDENCY — Evidence, Official Information & Modernization Plan

Last reviewed: 2026-11-17

## 1. Evidence hierarchy

The application must distinguish source authority from educational usefulness.

1. **Iranian primary authorities** — IUMS, Ministry of Health / Deputy for Education, Medical Education Evaluation Center (Sanjeshp). These govern Iranian residency admission, curriculum, promotion, service obligations and institutional workflow.
2. **International tumour classification** — WHO Classification of Tumours / IARC. Record the exact organ volume, edition, publication year and access route. A new volume does not update every organ system automatically.
3. **Reporting standards** — CAP, ICCR and RCPath. Useful for structured reporting and benchmarking. They are jurisdiction-specific and do not replace Iranian law, IUMS policy or local SOPs.
4. **Core textbooks** — Robbins & Cotran, Rosai & Ackerman, Sternberg, Lester, Odze & Goldblum. Record edition and chapter/page when available from a lawfully accessed copy.
5. **Secondary learning resources** — Pathology Outlines, Histology Guide, open textbooks and peer-reviewed review articles. Use for orientation; verify material claims against primary sources.
6. **Discovery-only feeds** — social channels and commercial prep providers. They may reveal a new notice but cannot establish a rule or date.

## 2. Current verified updates (17 Nov 2026)

- IARC lists *Digestive System Tumours* as WHO Classification of Tumours, 6th edition, Volume 1 (2026). This is volume-specific; other organ systems must retain their own current editions until independently verified.
- CAP reports a 16 September 2026 release affecting 14 cancer protocols. Each organ protocol has its own current version; the CAP release page must be checked before a reporting template is used.
- CAP is a US professional reporting standard. Its accreditation requirements are not automatically applicable to IUMS or Iranian laboratories.
- The official IUMS website, Ministry of Health education portal and Sanjeshp are registered as primary authority entry points. The detailed IUMS Pathology residency curriculum, local rotation schedule, logbook, promotion rules and hospital SOPs have not yet been verified from dated primary documents.

## 3. Required provenance fields for every educational object

- Stable object ID and topic/system
- Content type: fact, morphology, differential, algorithm, case exercise, image, reporting element
- Epistemic status: FACT / INFERENCE / HYPOTHESIS / UNKNOWN
- Source authority and exact source URL
- Edition/version, publication/update date and access date
- Jurisdiction and applicability
- Evidence type and directness (primary classification, guideline, consensus, textbook, review, teaching aid)
- Content author/reviewer and faculty approval status
- Image attribution, licence, permitted reuse and original-vs-third-party status
- Next review date and change history

Do not assign a fabricated page number, DOI, publication date, official endorsement or faculty approval. UNKNOWN must remain explicit.

## 4. Known weaknesses and risks

| Area | Current limitation | Modernization action |
|---|---|---|
| Official curriculum | IUMS-specific curriculum and rotations not sourced from official dated documents | Obtain official PDF/circulars; map every rotation, competency, case count and assessment to its source |
| Guideline currency | Seed records are not a live update feed | Add source-specific review schedule, change log and human verification |
| Reference precision | Some entries link to a publisher or portal rather than an exact edition/chapter | Add exact bibliographic metadata only after checking source copy |
| Visual atlas | Current drawings are original schematics, not histology micrographs | Add licensed/openly reusable slide images with stain, organ, magnification and attribution |
| Knowledge map | Current GI map is a seeded prototype | Add editable nodes/edges, persistence, undo/redo, import/export, minimap, keyboard navigation and graph validation |
| Presentation mode | Current sequence is a fixed demo path | Add user-authored story paths, saved camera frames and export to presentation |
| Clinical governance | App is not a LIS or sign-out system | Keep educational-only warnings, de-identification rules and faculty-review gates |
| Offline and backup | Browser-local persistence can be lost if site data is cleared | Add tested export/import, schema migrations and encrypted backup only after threat-model review |
| Accessibility | Canvas interactions need keyboard and screen-reader alternatives | Provide outline/tree view, keyboard pan/zoom and accessible node detail navigation |
| Testing | Core tests exist; visual interactions need browser-level regression tests | Add E2E tests for pan, zoom, drag, search, presentation, responsive layout and persistence |

## 5. Infinite canvas interaction contract

The knowledge canvas should evolve toward a Prezi/Miro-style workspace:

- Infinite pan/zoom surface with minimap and fit-to-content
- Nodes for organ, morphology, diagnosis, differential, IHC, molecular test, report, image and source
- Typed relationships: IS_A, PART_OF, CAUSES, ASSOCIATED_WITH, DIFFERENTIAL_OF, SUPPORTS, CONTRADICTS, TESTS_FOR, REPORTED_BY
- Node detail panel with evidence and epistemic status
- Saved views and guided presentation paths
- Undo/redo and version history
- Keyboard-accessible list/tree alternative
- Local-first persistence with explicit export/import
- Optional collaborative sync only after privacy, access-control and audit requirements are designed

## 6. Image policy

- Prefer original diagrams, public-domain assets or images with an explicit compatible licence.
- Link to WHO/IARC, Histology Guide and other virtual microscopy sources rather than copying restricted images.
- Every third-party image must carry attribution, source URL, licence/terms and access date.
- Do not place identifiable patient images, labels, accession numbers or screenshots in GitHub.
- Label every original schematic as a schematic; never present it as a real H&E or gross photograph.

## 7. Acceptance criteria

- CI passes lint, strict typecheck, tests, security scan and production build.
- Every high-impact clinical assertion has traceable provenance and jurisdiction.
- Official IUMS-specific content is marked VERIFIED only after a primary document is obtained.
- Visual assets have known origin and reuse permissions.
- Canvas supports keyboard alternatives and is tested on mobile.
- No patient-identifying data is stored in the repository or external AI tools.
