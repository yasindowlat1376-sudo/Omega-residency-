# PROJECT_STATUS

Version: 0.3.0-architecture-refactor (recovered baseline)

## Verification snapshot — 2026-11-17

GitHub Actions run: 44157652287
Merged baseline commit: 956c547ce3e3109032377f8cc0bd1544523835fe

- npm ci: PASS
- lint: PASS
- strict TypeScript typecheck: PASS (after explicit StudyState return annotations in exam state transitions)
- core smoke tests: PASS
- static security scan: PASS
- Vite production build: PASS

Dependency note: npm ci reported 5 high-severity dependency advisories. The static secret/security scan passing does not resolve those advisories; dependency-level audit and remediation remain OPEN.

## Capability status

Architecture: PASS (static/core verification)
Domain: PASS (strict TypeScript check)
Persistence: PARTIAL (LocalStorage adapter + migration path; browser persistence behavior still needs E2E coverage)
Migration: PARTIAL (legacy migration path exists; representative legacy fixtures need runtime verification)
Question Bank: PARTIAL (synthetic bank preserved; no verified official 1406 question corpus)
Question Intelligence: PARTIAL
Exam Engine: PASS (persisted/resumable synthetic simulator; typechecked and smoke-tested)
Scoring: PARTIAL (synthetic percentage rule; official 1406 rule not assumed)
Adaptive Testing: PARTIAL (fallback only)
Scheduler: PASS (extracted review scheduler)
Analytics: PARTIAL (real attempts only; some metrics intentionally INSUFFICIENT_DATA)
RAG: PARTIAL (interface + mock retriever)
Citations: PARTIAL (traceability contracts; live evidence resolver not connected)
Knowledge Graph: PARTIAL (typed object contract)
Guideline Watcher: PARTIAL (metadata/update contract; no live scheduler)
AI: PARTIAL (providers + proxy contract + mock; live credentials unknown)
Search: PASS for MVP local search contract
Import/Export: PASS for JSON and CSV event paths (full browser E2E pending)
Dependency security: OPEN (5 high advisories reported during npm ci; audit triage required)
Native release: BLOCKED_BY_NATIVE_CONFIG (no Android project, signing configuration, APK or AAB in this source baseline)

## Material UNKNOWNs

- Exact official 1406 primary annual resource file and pinned source content
- Live backend persistence availability
- Live provider credentials and proxy deployment
- Full browser E2E coverage and device/browser compatibility
- Dependency advisory identities, reachability and remediation impact
- Adequate psychometric sample size

A successful CI build verifies the web production bundle only. It does not establish production readiness, official question validity, native Android readiness, or live AI/RAG connectivity.
