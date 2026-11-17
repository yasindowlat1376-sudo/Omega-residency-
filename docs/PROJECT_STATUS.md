# Ω-RESIDENCY / Ω-PATH-STUDY — Project status

**Snapshot:** 2026-11-17  
**Repository:** `yasindowlat1376-sudo/Omega-residency-`  
**Default branch:** `main`  
**Active completion branch:** `feature/omega-path-study-core-pathology`

## Verified repository state

The main branch contains the Ω-RESIDENCY application and an integrated pathology workspace. The pathology learning hub includes a normal-histology atlas, a four-year developmental competency map, grossing orientation cards, active recall, references, shift checklist, gross-description builder, microscopy/reasoning scaffold and de-identified educational case log.

A completion branch is adding the missing General Pathology foundation layer and tightening content coverage tests. Do not treat unmerged branch work as part of the production release until its PR is merged and CI passes.

## Pathology learning coverage

- 15 normal-histology lessons across major organ systems.
- 8 General Pathology foundations: cell injury/adaptation/death; inflammation; repair/fibrosis; hemodynamic disorders/thrombosis/shock; neoplasia; immune-mediated injury; infectious patterns; molecular pathology/genetics.
- 31 active-recall questions after the completion branch is merged.
- Four-year PGY1–PGY4 developmental competency map.
- 10 grossing orientation cards.
- Educational microscopy and reasoning scaffold with FACT / INFERENCE / HYPOTHESIS / UNKNOWN.
- Local browser persistence and JSON export; no cloud synchronization is currently established.

## Verification and release gates

| Area | Status | Evidence / limitation |
|---|---|---|
| TypeScript / lint / core tests | Previously passed on an earlier verified commit; rerun required for current branch | Do not extrapolate old CI to new commits |
| Production build | Previously passed on an earlier verified commit; rerun required | Web bundle only |
| GitHub Pages | Configured in `.github/workflows/deploy-pages.yml`; live URL not independently verified | Treat publication as UNKNOWN until a successful deployment run and HTTP/device check |
| Android install | PWA design only | No native APK/AAB, signing or Play release |
| Browser persistence | Implemented using local browser storage | Cross-device sync and full E2E recovery tests remain unverified |
| Clinical validation | Not completed | Educational content requires faculty review and local SOP alignment |
| Official IUMS curriculum | UNKNOWN | Obtain current primary IUMS / Ministry documents before asserting rotation durations, case quotas or promotion rules |
| Dependency security | OPEN | Earlier install reported 5 high-severity npm advisories; identify exact advisories and remediate without blind force upgrades |
| AI/RAG backend | PARTIAL / UNKNOWN | No live provider credential, proxy or evidence resolver is verified |
| Image/slide library | NOT INCLUDED as a validated diagnostic dataset | Use licensed/public teaching collections and explicit source attribution; no patient-identifiable material |

## Non-negotiable safety and governance

- Never store patient names, national identifiers, date of birth, phone/address, accession/barcode or identifiable images.
- The educational case log is not an LIS and must not become a patient record.
- The application must not autonomously diagnose, stage, issue final reports or sign out cases.
- Grossing steps, tissue triage, fixation, cassette maps, frozen section and ancillary allocation must follow current local SOP and responsible pathologist instructions.
- International references (WHO/IARC, CAP, ICCR, RCPath, ACGME) are versioned and scope-specific; they are not automatically Iranian regulations.
- Distinguish source facts from derived interpretation and retain uncertainty rather than silently filling missing data.

## Remaining completion roadmap

1. Merge and verify the General Pathology content expansion.
2. Inspect npm audit output, identify vulnerable dependency paths and update only compatible safe versions; rerun CI.
3. Verify GitHub Pages deployment and installability on a real Android device.
4. Obtain official IUMS curriculum, rotation schedule, assessment and promotion documents; preserve source/date/version.
5. Expand system-based pathology, cytopathology, hematopathology, ancillary-test stewardship and image-based slide exercises using licensed sources.
6. Add browser E2E tests for persistence, migration, export/import and offline behavior.
7. Faculty review of all educational content and local workflow templates before operational clinical use.

**Release rule:** A green CI run is software verification, not clinical validation, curriculum accreditation or production readiness.
