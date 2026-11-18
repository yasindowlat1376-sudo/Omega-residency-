# Ω-GROSSING ENGINE — Specification v2

**Lifecycle:** DESIGN SPECIFICATION → implementation pending validation  
**Primary purpose:** produce a complete, anatomically ordered, factual gross description whose structure is stable across services while its applicable fields adapt to specimen/procedure type.

## 1. Non-negotiable principles

1. Grossing records macroscopic observations and handling, not microscopic interpretation or diagnostic opinion.
2. The core sequence is stable; required/conditional sections and wording depend on specimen type, procedure, anatomy and local SOP.
3. Default output is comprehensive. A concise rendering may be selected for a locally accepted workflow, but must not silently omit required observations.
4. Never invent or infer dimensions, weight, orientation, lesion features, margins, container count, fixation status, cassette count or sampling.
5. Distinguish not present, not identified, not assessed, not applicable and unknown. Blank must never be auto-converted to normal/negative.
6. Local SOP, responsible pathologist and institutional LIS remain authoritative. The engine is an educational drafting aid, not an autonomous sampling or sign-out system.

## 2. Stable report sequence

### A. Receipt / accession context
- Receipt phrase and fixative status (e.g. the local service's RSINF shorthand, when actually used and verified).
- Number of containers received.
- Each container's label verbatim, kept as a separate container record.
- Procedure/specimen designation as written on the requisition/label.
- Container-to-specimen-part concordance. Any discrepancy triggers stop-and-escalate; never reconcile by guess.
- Fresh/frozen/formalin/other medium and special handling only when actually documented.

### B. Procedure and specimen identity
- Procedure name (e.g. total hysterectomy, bilateral salpingo-oophorectomy, polypectomy, core biopsy), preserving clinically meaningful exact wording.
- Specimen parts, laterality, anatomical site and orientation.
- Separate containers/parts remain separately traceable throughout the description and block key.

### C. Macroscopic examination
- Overall specimen dimensions in explicit order and units; weight when applicable.
- Configuration, integrity and relevant external surface (serosa, capsule, skin, mucosa, ink, etc.).
- Opening/cutting method and cut-surface findings when applicable.
- Lesion(s): number, site, three-dimensional size, shape, colour, consistency, border, depth/extent, relation to landmarks and adjacent structures.
- Background parenchyma/mucosa, additional lesions, nodes and attached structures when applicable.
- Margins: identify each relevant margin, inking convention, measured distance and relationship to lesion. Do not label a margin negative unless it was actually assessed.
- Special findings and limitations (fragmentation, disruption, cautery, poor orientation, absent landmarks, incomplete sampling).

### D. Sampling / cassette map
- Record actual blocks taken, in sequence, with block ID, anatomical location and reason/target.
- Preserve container and specimen-part provenance in every block identifier.
- Protocol/SOP title, version/date and source must be recorded when a protocol informs sampling.
- A template may suggest questions/areas to consider, but must never prescribe or claim that blocks were taken. Human confirmation is mandatory.
- Tissue allocation for flow cytometry, microbiology, frozen section, molecular studies or other ancillary work must follow local SOP and be documented only when performed.

### E. Generated narrative
- Produce a coherent, copy-ready paragraph or paragraphs in anatomical order.
- Keep exact measurements, units, labels and locally approved abbreviations.
- Do not add a diagnosis, stage, grade, invasion, margin status or other microscopic conclusion to the gross narrative.

## 3. Procedure-aware profiles

The selected procedure controls which structured sections appear. The following are profile families, not fixed sampling protocols:

| Profile | Required focus areas |
|---|---|
| Core / needle biopsy | Number of cores/fragments, dimensions of each or aggregate as locally required, colour/consistency, tissue allocation and actual block mapping |
| Mucosal biopsy | Container/label, number and size of fragments, aggregate dimensions, colour/consistency, orientation limitations, actual blocks |
| Polypectomy / endoscopic excision | Number, dimensions, morphology, stalk/base when present, cauterized/resection base, orientation/fragmentation, actual sampling |
| Skin ellipse / excision | Orientation, dimensions, skin/soft tissue, lesion site and dimensions, depth, peripheral/deep margins, inking map, actual sampling |
| Lymph node | Number, dimensions, intact/cut surface, grossly distinct areas, special handling/ancillary allocation per SOP, actual blocks |
| Prostate cores / prostatectomy | Core-by-container traceability or whole-gland orientation, dimensions/weight, anatomic landmarks, margins and actual sampling per current protocol |
| Hysterectomy ± adnexa | Uterus/cervix and each adnexal part separately identified, dimensions/weight, serosa, cervix, endometrium, myometrium, lesion mapping, margins/parametria when present, adnexal structures and actual blocks |
| Colectomy / gastrectomy | Segment and orientation, length/circumference, serosa, margins, lesion location and distance to margins, depth/adjacent structures, nodes and background mucosa, actual sampling |
| Gallbladder | Dimensions, serosa, cystic duct margin, mucosa, wall thickness, stones/sludge and cut surface when present, lesion mapping, actual blocks |
| Liver biopsy | Number and length of cores, aggregate dimensions where appropriate, colour/consistency, fragmentation and actual blocks |
| Breast excision | Orientation, dimensions/weight, specimen radiograph correlation when available, lesion and clip/cavity localization, margins/inking, skin/nipple when present, actual blocks |

A profile must not imply that a section is universally required or that a sampling protocol is current. The active institutional SOP and specimen-specific protocol determine applicability.

## 4. Completeness and style profiles

- **Comprehensive (default):** all applicable fields and explicit container/part traceability.
- **Concise:** shorter narrative using only locally accepted abbreviations; never suppress mandatory data.
- **Institution/service profile:** local field order, units, label formatting and approved terminology.
- **Attending preference:** may affect the diagnostic reasoning/interpretation layer where appropriate. It must not alter or bias the factual gross observations. Grossing structure remains consistent.

## 5. Abbreviation and phrase dictionary

- Store abbreviation, exact expansion, language, service/institution, context, source, approval status and effective date.
- Preserve source labels and abbreviations verbatim.
- Expand an abbreviation only when its meaning has been confirmed for the relevant institution/service. Do not guess an expansion from context.
- RSINF is captured as a locally reported shorthand pending verification of its exact institutional expansion and preferred punctuation. Do not globally assume its meaning.
- Unknown or conflicting abbreviations remain unchanged and are flagged for review.

## 6. Multi-container data model

Each case contains an ordered array of containers:
- containerIndex
- labelVerbatim
- procedureOrPart
- receivedIn / fixative
- specimenDescription
- concordanceStatus
- notes

Each specimen part links to one or more containers. Each cassette/block links to a container, specimen part, location and sampling reason. The engine must prevent silent merging of separately labelled containers.

## 7. Validation and stop conditions

Stop drafting or sampling recommendations and request human review when:
- label/requisition/specimen identity or laterality does not match;
- container count or specimen parts are discordant;
- orientation is missing/ambiguous where it changes margin interpretation;
- fresh tissue, flow, microbiology, frozen or molecular allocation may be needed;
- tissue is scant, fragmented, disrupted or inadequately fixed;
- a margin, lesion boundary or anatomical landmark cannot be confidently identified;
- the applicable local protocol is unavailable or its version is unknown.

## 8. Acceptance criteria for implementation

- Multiple containers and verbatim labels can be entered independently and retain order.
- Receipt/fixative wording is distinct from specimen/procedure and macroscopic findings.
- Selecting a procedure activates a relevant profile without removing the stable core sequence.
- Comprehensive mode is default; concise mode cannot hide mandatory fields.
- Narrative output never fabricates data or interprets missing data as normal.
- Block map is generated only from blocks explicitly confirmed as taken.
- Abbreviations are preserved unless a verified local dictionary entry permits expansion.
- Attending-specific diagnostic preferences are isolated from gross description.
- Unit tests cover empty, multi-container, multi-part, incomplete, conflicting-label and abbreviation cases.
- Browser tests cover procedure switching, container entry, output preview and persistence.
- Faculty/service review and local SOP verification are required before operational use.

## Current implementation state

The current application already supports receipt/fixative fields, multiple independently entered containers with verbatim labels, specimen-part and description fields, and ordered container details in the generated narrative. It also has a generic procedure-profile selector and comprehensive/concise selector. However, profile selection does not yet activate validated procedure-specific forms; the structured cassette map records actual cassette ID, source container, site/component, piece count, sectioning plane and purpose, but does not yet enforce container-to-part concordance or stop conditions. There is no governed abbreviation dictionary or protocol-governed sampling map. Treat only the container intake and generic narrative fields as implemented; the remaining items are planned requirements.
