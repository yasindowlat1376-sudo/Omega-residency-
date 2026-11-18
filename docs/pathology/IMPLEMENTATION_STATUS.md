# Ω-PATH-STUDY — Implementation status

Updated: 2026-11-18

## Verified engineering baseline
- Desktop and mobile Chromium Playwright smoke suite merged in PR #26.
- CI checks include lint, strict typecheck, core tests, static security scan, production build and browser E2E.
- Knowledge Canvas persistence is implemented and covered by core/browser regression tests.

## Grossing engine

### Implemented in the current application
- Generic structured gross-description builder and copy-ready preview.
- Receipt phrase and fixative fields.
- Multiple independently entered containers, each with a verbatim label, specimen part, received-in field and description.
- Container count and ordered container details in generated gross narrative.
- Generic fields for procedure/specimen, organ/site/laterality, orientation, dimensions, weight, external surface, lesion, margins, sampling and block identifiers.
- Comprehensive/concise selector (output behavior still requires validation; do not assume concise mode suppresses or preserves all required fields).
- Local educational case draft/log.

### Specified or partially represented; implementation still required
- Procedure-aware dynamic forms. The current procedure-profile selector is a value selector; it does not yet activate validated procedure-specific required/conditional fields.
- Profile-specific narrative ordering and terminology for biopsy, polypectomy, skin excision, lymph node, prostate, hysterectomy, colectomy/gastrectomy, gallbladder, liver biopsy and breast excision.
- Verified institution-specific abbreviation dictionary; unverified shorthand is preserved verbatim in the receipt phrase, but no governed dictionary exists.
- Structured container-to-specimen-part concordance and explicit mismatch/stop workflow.
- Block-level provenance linking each actually submitted block to its container, specimen part, anatomical location and sampling reason.
- Field-level distinctions among not present, not identified, not assessed, not applicable and unknown.
- Comprehensive/concise output rules validated against local practice.
- Current local SOP/version metadata and faculty-approved protocol links.

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
