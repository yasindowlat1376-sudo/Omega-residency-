# Ω-RESIDENCY / Ω-PATH-STUDY — Project status

**Snapshot:** 2026-11-17  
**Repository:** `yasindowlat1376-sudo/Omega-residency-`  
**Default branch:** `main`

## Latest delivery update

- PR #5 (General Pathology expansion) merged; verification run `44161766908` passed.
- PR #6 (dependency audit visibility + Dependabot) merged; verification run `44162070672` passed.
- Dependency remediation is tracked in [issue #7](https://github.com/yasindowlat1376-sudo/Omega-residency-/issues/7); five high-severity npm advisories remain OPEN.

## Latest verified delivery

- Pull request [#5](https://github.com/yasindowlat1376-sudo/Omega-residency-/pull/5) — merged.
- Merge commit: `06da3c2ce8020726c0bf2efa6803b2752d11c062`.
- GitHub Actions verification run: `44161766908` — **success**.
- Verified steps: `npm ci`, lint, strict TypeScript typecheck, core tests, static security scan and Vite production build.

This verifies the source and production web bundle for that commit. It does not establish clinical validation, official curriculum approval, native Android readiness or successful Pages publication.

## Pathology learning coverage on main

- 15 normal-histology lessons across major organ systems.
- 8 General Pathology foundations: cell injury/adaptation/death; inflammation; repair/fibrosis; hemodynamic disorders/thrombosis/shock; neoplasia; immune-mediated injury; infectious patterns; molecular pathology/genetics.
- 31 linked active-recall questions (15 normal-histology + 16 General Pathology).
- Four-year PGY1–PGY4 developmental competency map.
- 10 grossing orientation cards.
- Educational microscopy and reasoning scaffold with FACT / INFERENCE / HYPOTHESIS / UNKNOWN.
- Shift checklist, gross-description builder, educational case log and JSON export.
- Local browser persistence; cloud synchronization is not established.

## Verification and release gates

A non-blocking `npm audit --json` summary step is being added to CI so advisory identity, affected dependency paths, severity and fix availability are visible in the run log. Dependabot weekly updates are being enabled for npm dependencies and GitHub Actions.

| Area | Status | Evidence / limitation |
|---|---|---|
| Lint / typecheck / core tests | PASS | GitHub Actions run 44161766908 |
| Production build | PASS | Vite build completed in run 44161766908 |
| Static security scan | PASS | This checks configured repository patterns; it does not clear npm advisories |
| npm dependency audit | OPEN | `npm ci` reported 5 high-severity vulnerabilities; exact advisory paths and remediation remain to be reviewed |
| GitHub Pages | CONFIGURED / DEPLOYMENT UNVERIFIED | Workflow exists; live URL and deployment environment not independently confirmed |
| Android install | PWA design only | No native APK/AAB, signing or Play release |
| Browser persistence | IMPLEMENTED / E2E PARTIAL | Local browser storage; cross-device sync and full recovery tests unverified |
| Clinical validation | NOT COMPLETED | Educational content requires faculty review and local SOP alignment |
| Official IUMS curriculum | UNKNOWN | Obtain current primary IUMS / Ministry documents before asserting rotation durations, case quotas or promotion rules |
| AI/RAG backend | PARTIAL / UNKNOWN | No live provider credential, proxy or evidence resolver is verified |
| Image/slide library | NOT INCLUDED as a validated diagnostic dataset | Use licensed/public teaching collections and explicit source attribution |

## Non-negotiable safety and governance

- Never store patient names, national identifiers, date of birth, phone/address, accession/barcode or identifiable images.
- The educational case log is not an LIS and must not become a patient record.
- The application must not autonomously diagnose, stage, issue final reports or sign out cases.
- Grossing steps, tissue triage, fixation, cassette maps, frozen section and ancillary allocation must follow current local SOP and responsible pathologist instructions.
- International references (WHO/IARC, CAP, ICCR, RCPath, ACGME) are versioned and scope-specific; they are not automatically Iranian regulations.
- Distinguish source facts from derived interpretation and retain uncertainty rather than silently filling missing data.

## Remaining completion roadmap

1. Resolve the five high-severity npm advisories tracked in issue #7; update only compatible safe versions and rerun CI.
2. Verify GitHub Pages deployment and installability on a real Android device.
3. Obtain official IUMS curriculum, rotation schedule, assessment and promotion documents; preserve source/date/version.
4. Expand system-based pathology, cytopathology, hematopathology, ancillary-test stewardship and image-based slide exercises using licensed sources.
5. Add browser E2E tests for persistence, migration, export/import and offline behavior.
6. Faculty review of all educational content and local workflow templates before operational clinical use.

**Release rule:** A green CI run is software verification, not clinical validation, curriculum accreditation or production readiness.
