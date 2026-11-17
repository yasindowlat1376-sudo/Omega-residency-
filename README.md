# Ω-PATH-STUDY

**Mobile-first pathology residency learning and supervised workflow application.**

Parent architecture: Ω-META → Ω-RESIDENCY  
Execution architecture: Ω-CIF  
Primary learner: Pathology residents (initial content emphasis: PGY1 foundations)

## Application modules

- **Learning atlas:** 15 original normal-histology lessons across major organ systems.
- **Active recall:** 15 foundational questions with explanations and persistent progress.
- **Curriculum:** PGY1–PGY4 developmental competency map. This is not represented as an official IUMS curriculum.
- **Grossing reference:** 10 organ-specific specimen orientation cards with explicit local-SOP safeguards.
- **Shift workflow:** start-of-shift, specimen triage and handoff checklist.
- **Gross Description Builder:** structured fields and copy-ready descriptive output.
- **Microscopy & reasoning:** low-power architecture, cytology, stroma, differential, ancillary tests and epistemic state.
- **Educational case log:** de-identified learning records and JSON export.
- **Reference library:** external links to core textbooks, Histology Guide, OpenStax, WHO/IARC, Pathology Outlines, CAP, ICCR, RCPath and ACGME.

## Install on Android

After GitHub Pages deployment is active:

1. Open the app URL in Chrome.
2. Open the browser menu and choose **Install app** or **Add to Home screen**.
3. Launch Ω-PATH-STUDY from the home screen.
4. Visit once while online; the application shell and visited static assets are cached for offline use.

Expected URL: https://yasindowlat1376-sudo.github.io/Omega-residency-/

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
- See `docs/pathology/` for the curriculum map, reference map, architecture and data governance.
- See `docs/PROJECT_STATUS.md` for known limitations and release gates.
