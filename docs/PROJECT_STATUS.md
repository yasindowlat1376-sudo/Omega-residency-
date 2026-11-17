# Ω-RESIDENCY / Ω-PATH-STUDY — Project status

**Snapshot:** 2026-11-18  
**Repository:** `yasindowlat1376-sudo/Omega-residency-`  
**Default branch:** `main`  
**Latest main commit:** `0867b66189758a288da6081f9814e217d91c8850`

## Latest delivery

- PR [#18](https://github.com/yasindowlat1376-sudo/Omega-residency-/pull/18) merged on 2026-11-17.
- Added an interactive knowledge canvas, visual histology atlas integration, expanded evidence registry and modernization documentation.
- Merge commit: `0867b66189758a288da6081f9814e217d91c8850`.
- PR verification run [44169852520](https://github.com/yasindowlat1376-sudo/Omega-residency-/actions/runs/44169852520): **success** — install, dependency advisory summary, lint, strict typecheck, tests, static security scan and production build all passed.
- Pages deployment run [44171471196](https://github.com/yasindowlat1376-sudo/Omega-residency-/actions/runs/44171471196): **success** — build, artifact upload, Pages configuration and deploy jobs all passed.
- Expected app URL: https://yasindowlat1376-sudo.github.io/Omega-residency-/. The workflow reports successful deployment; a real-device browser smoke test remains outstanding.

## Application coverage

- 15 normal-histology lessons and 8 General Pathology foundations.
- 31 linked active-recall questions with explanations and progress tracking.
- Four-year PGY1–PGY4 developmental competency map, explicitly not represented as the official IUMS curriculum.
- 10 grossing orientation cards, shift checklist and structured gross-description builder.
- Educational microscopy/reasoning scaffold with FACT / INFERENCE / HYPOTHESIS / UNKNOWN.
- Educational case log and JSON export.
- Visual Atlas with original labelled schematics (not diagnostic micrographs).
- Knowledge Canvas MVP: draggable nodes, pan/zoom, searchable concepts, relationship edges, node detail/source panels and guided presentation path.
- Local browser persistence; cloud synchronization is not established.

## Verification and release gates

| Area | Status | Evidence / limitation |
|---|---|---|
| Lint / typecheck / tests / production build | PASS | PR verification run 44169852520 |
| Static security scan | PASS | Configured repository patterns only; does not clear dependency advisories |
| GitHub Pages workflow | PASS | Run 44171471196; real-device/browser smoke test remains outstanding |
| npm dependency audit | OPEN | Four high-severity findings were reported after PR #17; see [issue #7](https://github.com/yasindowlat1376-sudo/Omega-residency-/issues/7). Recheck current audit before any claim of remediation |
| Android install | PWA | No native APK/AAB, signing or Play release |
| Browser persistence | IMPLEMENTED / E2E PARTIAL | Local browser storage; cross-device sync and complete recovery tests unverified |
| Clinical validation | NOT COMPLETED | Educational content requires faculty review and local SOP alignment |
| Official IUMS curriculum | UNKNOWN | Obtain current primary IUMS / Ministry documents before asserting rotation durations, case quotas or promotion rules |
| AI/RAG backend | PARTIAL / UNKNOWN | No live provider credential, proxy or evidence resolver is verified |
| Image/slide library | NOT A VALIDATED DIAGNOSTIC DATASET | Use licensed/public teaching collections with source attribution |

A non-blocking npm audit summary is part of CI. Dependabot weekly updates are enabled for npm dependencies and GitHub Actions, restricted to semver minor/patch updates. Do not use `npm audit fix --force` or accept major toolchain changes without compatibility review.

## Non-negotiable safety and governance

- Never store patient names, national identifiers, date of birth, phone/address, accession/barcode or identifiable images.
- The educational case log is not an LIS and must not become a patient record.
- The application must not autonomously diagnose, stage, issue final reports or sign out cases.
- Grossing steps, tissue triage, fixation, cassette maps, frozen section and ancillary allocation must follow current local SOP and responsible pathologist instructions.
- International references (WHO/IARC, CAP, ICCR, RCPath, ACGME) are versioned and scope-specific; they are not automatically Iranian regulations.
- Distinguish source facts from derived interpretation and retain uncertainty rather than silently filling missing data.

## Remaining roadmap

1. Resolve high-severity npm advisories in issue #7 using compatible patched versions and full CI verification.
2. Perform Android browser smoke test: install prompt, responsive layout, offline reload, export/import and persistence after restart.
3. Obtain official IUMS curriculum, rotation schedule, assessment and promotion documents; preserve source/date/version and distinguish institutional policy from national policy.
4. Expand system-based pathology, cytopathology, hematopathology, ancillary-test stewardship and image-based slide exercises using licensed sources.
5. Upgrade Knowledge Canvas from MVP to durable graph workspace: persisted node positions, editable relationships, undo/redo, minimap, import/export and keyboard accessibility.
6. Add browser E2E tests for persistence, migration, export/import and offline behavior.
7. Faculty review of educational content and local workflow templates before operational clinical use.

**Release rule:** a green CI run is software verification, not clinical validation, curriculum accreditation or production readiness.
