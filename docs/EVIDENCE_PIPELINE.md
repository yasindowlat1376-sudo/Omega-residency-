# Ω-RESIDENCY Evidence and Citation Pipeline

## Purpose
Provide traceable learning references and citation metadata for pathology education. The source registry is a discovery catalogue; it is not proof that a specific article, dataset, image, or guideline has been reviewed or approved.

## Candidate source integrations

| Resource | Intended use | Identifier / evidence fields | Important limitation |
|---|---|---|---|
| PubMed / NCBI E-utilities | Biomedical literature search and PMID resolution | PMID, DOI, publication type, journal, dates, MeSH | Indexing is not quality appraisal |
| Europe PMC REST | Literature search, citation links, full-text availability | PMID, PMCID, DOI, source, first publication date | Separate peer-reviewed papers from preprints |
| PubMed Central | Full-text discovery and OA article metadata | PMCID, article license, figure license | License must be checked per article and figure |
| Crossref | DOI metadata enrichment | DOI, title, authors, journal, dates | Metadata can be incomplete or inconsistent |
| NCBI Bookshelf | Open biomedical books and reports | Book, chapter, authors, version, URL | Copyright/license is item-specific |
| ClinicalTrials.gov | Trial protocol/status/result discovery | NCT ID, recruitment status, last update | Registry record is not a peer-reviewed efficacy result |
| NCI Genomic Data Commons | TCGA and cancer genomics research | Project, case/file ID, data release, access tier | Controlled-access and data-use restrictions apply |
| SEER | Population cancer statistics | Registry period, population, site, measure | US population data are not automatically generalizable to Iran |
| Human Protein Atlas | Tissue-expression and IHC exploration | Protein, antibody, tissue, assay, release | Antibody validation and image/data reuse terms need review |

## Citation record schema
The citation utility accepts title, author list, journal, year, volume, issue, pages/eLocator, DOI, PMID and PMCID. It produces:
- Vancouver-style formatted text;
- DOI, PubMed and PMC links only when identifiers pass basic format validation;
- a completeness indicator (MINIMAL, PARTIAL, GOOD).

This is a formatting utility, not a bibliographic verification service. The user must compare the metadata with the publisher/database record before academic submission.

## Evidence provenance requirements
Every imported claim or learning object should retain:
- source ID and canonical URL;
- exact title and author/publisher;
- DOI / PMID / PMCID or stable document identifier when available;
- publication date and last-updated date separately;
- access date and retrieval timestamp;
- source type (primary study, systematic review, classification, guideline, textbook, secondary educational resource);
- study design / evidence type and population where applicable;
- jurisdiction and scope;
- license / reuse status for full text, figures and datasets;
- extraction method, model/prompt version if AI-assisted;
- epistemic status: FACT / INFERENCE / HYPOTHESIS / UNKNOWN;
- reviewer and review date, if faculty-checked;
- supersession / correction history.

## Retrieval and ranking policy
1. Resolve exact identifiers first (DOI, PMID, PMCID, NCT).
2. Search primary sources and official classifications/guidelines before secondary summaries.
3. Rank evidence by question fit and design, not citation count alone.
4. Keep preprints, editorials, case reports, reviews and original studies visibly distinct.
5. Do not infer causality from observational association.
6. Show publication date, correction/retraction status and guideline version when available.
7. Keep local Iranian / IUMS policy separate from international benchmarks.
8. Do not ingest full copyrighted books, CAP protocols or restricted images into the repository without permission.
9. Never convert a search result snippet into a confirmed fact without inspecting the source record.
10. AI-generated summaries must cite source records and expose uncertainty; the model must not fabricate page numbers, editions, DOIs or guideline dates.

## Current implementation status
- Source catalogue: implemented with authority and jurisdiction notes.
- Vancouver formatter and DOI / PMID / PMCID link validation: implemented.
- Live API ingestion, query UI, result deduplication, article-level licensing, retraction checks, caching and evidence ranking: NOT IMPLEMENTED.
- Faculty review and IUMS-specific policy verification: NOT COMPLETED.

## Next engineering phase
Implement provider adapters behind a typed interface, starting with NCBI E-utilities and Europe PMC. Keep API keys (if required by provider terms/rate limits) out of the browser bundle; use a server-side proxy or a user-provided local connector. Cache only permissible metadata, deduplicate by DOI/PMID, preserve raw provider responses for provenance where terms allow, and test network failure/rate-limit behavior.
