# Ω-PATH-STUDY — Release Readiness

**Review date:** 2026-11-18  
**Repository:** `yasindowlat1376-sudo/Omega-residency-`  
**Release target:** GitHub Pages PWA for supervised pathology-residency education

## Release definition

A release is ready for public educational use only when the software checks, dependency review, data-recovery checks, mobile smoke test and content-governance checks below have explicit evidence. A successful build is not clinical validation or curriculum accreditation.

## Verified implementation

- React/Vite application with modular domain, application, infrastructure and pathology workspaces.
- Learning units, active recall, PGY1–PGY4 developmental competency map, grossing builder, microscopy/reasoning scaffold and de-identified educational case log.
- Original labelled histology schematics and an interactive GI knowledge canvas.
- Local browser persistence and JSON import/export for study state.
- GitHub Actions CI and Pages deployment workflows.
- Knowledge Canvas viewport and node layout persistence is implemented in the release-hardening branch; it stores only local view state and does not sync between devices.

## Release gates

| Gate | Current state | Evidence required to close |
|---|---|---|
| Lint, strict typecheck, core tests, static scan, production build | PASS | PR run 44231169603 and latest main run 44231346200 both passed all steps |
| Dependency advisories | OPEN | Fresh `npm audit --json` from the exact lockfile; document each remaining high/critical finding, dependency path, runtime exposure and mitigation |
| Canvas persistence | MERGED to main in PR #23 | Round-trip, scale-clamping and malformed-storage recovery tests passed in CI; manual browser reload test remains outstanding |
| Browser E2E | OPEN | Test navigation, canvas drag/pan/zoom, persistence, import/export and responsive layouts |
| Android PWA smoke test | OPEN | Install, relaunch, offline reload, local data persistence and JSON restore on a physical Android device |
| Backup and migration | PARTIAL | Validate schema migration, invalid-record handling and restore from a fresh export |
| Official IUMS curriculum | UNKNOWN | Dated primary IUMS / Ministry documents for rotations, logbook, assessment and promotion |
| Clinical content approval | NOT COMPLETED | Named faculty review and recorded approval for each high-impact educational content set |
| Clinical workflow safety | POLICY DEFINED | Confirm local SOP alignment before using any workflow template operationally |

## Dependency security notes

The last recorded audit in issue #7 reported four high-severity findings. The current lockfile snapshot contains:

- `vite@6.4.6`
- `source-map-js@1.2.2`
- `fdir@6.5.0`
- `tinyglobby@0.2.17`
- `picomatch@4.0.7`

The GitHub advisory for `picomatch` GHSA-fc5q-39xc-vjpf currently identifies versions through 4.0.7 and does not publish a fixed version. Do not claim this item is patched, suppress it without documented reasoning, or pin an unmerged fork. Re-run the audit against the exact branch lockfile before release; advisory data and dependency trees can change.

## Safety and privacy constraints

- Do not commit patient identifiers, accession/barcode values, identifiable clinical images or real patient records.
- Keep educational case records de-identified and local-first.
- Do not present original schematics as histology micrographs.
- Do not autonomously diagnose, stage, issue final reports or sign out cases.
- Local SOPs and responsible pathologist instructions take precedence over educational templates.
- Keep official IUMS policy distinct from international standards such as CAP, ICCR and RCPath.

## Reproducible verification

Run from a clean checkout with the committed lockfile:

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run security:scan
npm audit --json
npm run build
```

Record the commit SHA, workflow run URL, audit JSON summary and device-test date with each release.

## Decision

**Current classification: RELEASE CANDIDATE — NOT FULLY RELEASE-CLOSED.**

PR #23 is merged to main. PR verification and latest main-branch CI passed. The latest GitHub Pages build and deployment also completed successfully. The open security review, physical-device verification, browser E2E coverage and faculty/curriculum validation remain explicit gates. Do not label the project clinically validated or fully production-ready until those gates are closed.
