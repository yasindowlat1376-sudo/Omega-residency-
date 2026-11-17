# Ω-PATH-STUDY
Pathology residency learning, supervised workflow and professional development. Parent: Ω-META → Ω-RESIDENCY. Execution fabric: Ω-CIF. Architecture index baseline 1.1.0 (2026-11-15).

This is an integrated domain workbench, not a separate application core. It reuses Ω-RESIDENCY canonical state, persistence, audit and import/export. No parallel identity, task, memory or patient-record system.

## Included MVP
Pathology workspace navigation; shift checklist; gross description builder; microscopy observation/reasoning scaffold; differential and ancillary fields; epistemic-state selector; de-identified educational case log and JSON export; shared StudyState persistence and backup/restore.

## Non-negotiable boundaries
Epistemic state: FACT | INFERENCE | HYPOTHESIS | UNKNOWN. Preserve source state separately from derived state and retain provenance/version. Never store patient name, national identifier, DOB, phone, address, accession/barcode or identifiable image. Institutional LIS remains patient-record system of record. This UI does not autonomously diagnose, issue final reports, stage tumours or sign out. IUMS local rotation calendar, SOPs, call rules, case minimums and assessments remain UNKNOWN until verified. CAP, ICCR, WHO/IARC, RCPath, ACGME and ISO are scope-limited references, not automatically Iranian regulations.
