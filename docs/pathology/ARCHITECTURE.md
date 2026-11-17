# Ω-PATH-STUDY — Architecture
## Mission
Support the four-year pathology residency and development in anatomic pathology, laboratory medicine, molecular diagnostics, digital pathology, quality, research, education and professional practice.

## Layering
T0 Ω-META kernel: identity, authorization, typed objects, provenance, epistemics, audit and safety. T1 shared substrates: knowledge graph, context, causal reasoning, search, learning/retrieval, storage and governance. T2 Ω-RESIDENCY: residency learning/exam workflows and shared state. T3 Ω-PATH-STUDY: pathology-specific profiles, templates, competency and supervised workflows. Ω-CIF provides bounded execution, approvals, checkpoints, verification and audit. Do not duplicate root ontology, memory database, task engine or identity store.

## Core workflow
Capture → validate identity/concordance in institutional LIS → pre-analytic triage → grossing → processing/QC → microscopy → differential → ancillary test decision → integrated interpretation → supervised report → communication → audit/learning capture. Store only authorized, de-identified learning abstractions. LIS remains system of record.

## Typed pathology objects
PathologyCase; SpecimenProfile; GrossObservation; SamplingMap; MicroscopyObservation; DifferentialItem; AncillaryTest; ReportDraft; CompetencyRecord; LearningClaim; CallEvent. The current code implements only a subset; remaining objects are design contracts, not runtime features.

## Epistemic and lifecycle state
Epistemic: FACT | INFERENCE | HYPOTHESIS | UNKNOWN. Lifecycle: CONCEPT | IMPLEMENTED | VERIFIED | LEARNING | DEPRECATED. Do not conflate evidence, confidence, clinical status and implementation status. UNKNOWN is not FALSE.

## Safety gates
Stop and escalate on identity mismatch, specimen/requisition discordance, unclear orientation/site, inadequate fixation, possible infection needing fresh tissue, suspected lymphoma/flow triage, tissue scarcity, margin ambiguity, frozen-section limitations, discordant morphology/ancillary data, critical result, or uncertain classification/staging.

## Learning model
Knowledge & Reasoning: normal histology, mechanisms, patterns, differential, tests, classifications and evidence. Practice & Performance: grossing, microscopy, reporting, communication, QA and competency. Shared cohorts: microscope, grossing, case integration, source ingestion, report practice, oral/board practice, EBM/research, error log and spaced review.

## Known gaps
No complete LIS, image viewer, WSI ingestion, image analysis, guideline sync, organ-specific sampling engine, autonomous AI diagnosis, live IUMS curriculum integration or official rotation scheduler.
