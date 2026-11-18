# Ω-PATH-STUDY — Implementation status

Updated: 2026-11-18

## Verified engineering baseline
- Desktop and mobile Chromium Playwright smoke suite merged in PR #26.
- CI checks include lint, strict typecheck, core tests, static security scan, production build and browser E2E.
- Knowledge Canvas persistence is implemented and covered by core/browser regression tests.

## Grossing engine

### Implemented
- Generic single-record structured gross-description builder.
- Basic fields for specimen type, organ, procedure, site/laterality, orientation, dimensions, weight, external surface, lesion, margins, sampling and blocks.
- Copy-ready text output and local educational case draft/log.

### Specified; implementation pending
- Stable receipt → procedure/specimen identity → macroscopic examination → sampling/block map → narrative sequence.
- Multi-container intake with verbatim labels and container/part concordance.
- Procedure-aware form profiles (biopsy, polypectomy, skin excision, lymph node, prostate, hysterectomy, colectomy/gastrectomy, gallbladder, liver biopsy, breast excision).
- Comprehensive default and concise/local style profiles.
- Verified institution-specific abbreviation dictionary; preserve unverified shorthand verbatim.
- Block-level provenance linking container, specimen part, anatomical location and actual sampling reason.
- Stop conditions for identity/label mismatch, orientation ambiguity, special tissue allocation and unavailable SOP.

### Explicit non-goals / safeguards
- No autonomous cassette prescription or claim that a suggested block was actually taken.
- No inferred normal/negative finding from a blank field.
- No diagnostic interpretation or attending preference in the gross-observation layer.
- No substitution for local SOP, LIS, responsible pathologist or institutional sign-out.

## Other not implemented / not verified
- Organ-specific sampling protocols verified against current local SOP.
- Complete specimen-to-diagnosis workflow and LIS integration.
- Image viewer/WSI/image analysis.
- AI diagnostic interpretation.
- Official IUMS rotation calendar and SOP ingestion.
- CAP/ICCR synoptic report generation (versioned datasets and copyright controls required).
- Competency sign-off and portfolio analytics.
- Encryption/authentication/secure retention/institution-approved hosting.
- Physical Android installation/offline verification.
- Faculty review of educational and workflow content.

Source must pass branch CI and review before it is called verified, merged, deployed or clinically validated.
