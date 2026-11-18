# Ω-PATH-STUDY

**Mobile-first pathology residency learning and supervised workflow application.**

Parent architecture: Ω-META → Ω-RESIDENCY  
Execution architecture: Ω-CIF  
Primary learner: Pathology residents (initial content emphasis: PGY1 foundations)

## Application modules

- **Learning atlas:** 23 original learning units: 15 normal-histology lessons plus 8 General Pathology foundations.
- **Active recall:** 31 active-recall questions with explanations and persistent progress.
- **Curriculum:** PGY1–PGY4 developmental competency map, explicitly distinguished from the official IUMS curriculum.
- **Core concepts:** cell injury, inflammation, repair, hemodynamic disorders, neoplasia, immune injury, infection and molecular pathology.
- **Grossing reference:** 10 organ-specific specimen orientation cards with explicit local-SOP safeguards.
- **Shift workflow:** start-of-shift, specimen triage and handoff checklist.
- **Gross Description Builder:** structured fields and copy-ready descriptive output.
- **Microscopy & reasoning:** low-power architecture, cytology, stroma, differential, ancillary tests and epistemic state.
- **Educational case log:** de-identified learning records and JSON export.
- **Visual Atlas:** original labelled histology schematics with orientation cues, common pitfalls and linked learning references.
- **Knowledge Canvas:** pan/zoom concept map with draggable nodes, relationship edges, search, detail panels and guided presentation path.
- **Reference library:** external links to core textbooks, Histology Guide, OpenStax, WHO/IARC, Pathology Outlines, CAP, ICCR, RCPath and other sources.

## Open the web app

**Expected app URL:** https://yasindowlat1376-sudo.github.io/Omega-residency-/

The GitHub Actions deployment workflow completed successfully on 2026-11-17 (run [44171471196](https://github.com/yasindowlat1376-sudo/Omega-residency-/actions/runs/44171471196)). The workflow's build and deploy jobs both passed. The URL is the configured Pages address; reachability and installation should still be checked on the target Android device.

### Install on Android

1. Open the app URL in Chrome.
2. Open the browser menu and choose **Install app** or **Add to Home screen**.
3. Launch Ω-PATH-STUDY from the home screen.
4. Visit once while online; the application shell and visited static assets are cached for offline use.

Local learning progress and educational cases are stored in the browser on that device. Use JSON export for backups. Clearing browser site data can erase local records.

## Run locally

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run security:scan
npm run build
npm run dev
```

## Evidence and clinical safety

- Educational text is original paraphrase; it does not reproduce copyrighted textbook chapters or CAP protocol content.
- Official IUMS rotation calendars, local SOPs, required case numbers, duty rules and promotion criteria remain **UNKNOWN** until verified against current primary documents.
- CAP, ICCR, WHO/IARC, RCPath and ACGME resources are scope- and jurisdiction-specific; they are not automatically Iranian regulations.
- Never enter patient names, national identifiers, DOB, accession/barcode, contact details or identifiable images.
- The application is not an LIS, does not autonomously diagnose, stage, issue final reports or sign out cases. All clinical workflow remains under local SOP and responsible pathologist supervision.

## Release and delivery

- GitHub repository: https://github.com/yasindowlat1376-sudo/Omega-residency-
- Deployment workflow: `.github/workflows/deploy-pages.yml`
- CI workflow: `.github/workflows/ci.yml`
- Latest source status and release gates: [docs/PROJECT_STATUS.md](docs/PROJECT_STATUS.md)
- Evidence policy and modernization plan: [docs/EVIDENCE_AND_MODERNIZATION.md](docs/EVIDENCE_AND_MODERNIZATION.md)
- Release gates and verification checklist: [docs/RELEASE_READINESS.md](docs/RELEASE_READINESS.md)
- Pathology architecture and learning map: `docs/pathology/`

**Release rule:** a green CI run verifies software checks, not clinical validity, curriculum accreditation or readiness for independent clinical use.
