# Ω-RESIDENCY

Source-aware learning and exam-intelligence foundation for the Iranian Medical Residency Entrance Exam.

## Current baseline

This repository started from the supplied **همراه رزیدنتی (1).zip** Vite + React + TypeScript prototype. The working UI was preserved while business logic was migrated into domain/application/infrastructure boundaries.

## What changed

- `src/domain/` — scoring, validation, errors, psychometrics contracts, typed state
- `src/application/` — exam/review/analytics/search/import-export/AI orchestration
- `src/infrastructure/` — local persistence adapter, migration, config, audit
- `src/exam/` — deterministic selection + persisted pause/resume/submit flow
- `src/review/` — extracted scheduler/review engine
- `src/analytics/` — real-activity metrics and study planning
- `src/ai/` — provider-agnostic LLM, AI job, prompt, claim and question lifecycle contracts
- `src/retrieval/` — retrieval and evidence interfaces
- `src/content/` — synthetic content, source registry, guideline watcher
- `docs/` — architecture, source registry, 1406 provenance policy, release status

## Provenance rule

Current prototype questions remain explicitly `SYNTHETIC_PROTOTYPE_CONTENT`. They are not official exam questions.

For 1406 / 54th-cycle data, primary Iranian authorities are separated from Telegram and commercial discovery sources. Secondary reports remain non-authoritative until matched to the official annual document.

## Run

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run security:scan
npm run build
npm run dev
```

## AI configuration

Live providers use a server-side proxy contract:

```text
VITE_PLATFORM_SERVICES_URL=https://...
VITE_PLATFORM_SERVICE_TOKEN=...
VITE_LLM_PROVIDER=openai|anthropic|gemini|local|mock
```

Never ship vendor API credentials inside the client bundle.

## Pathology residency package — Ω-PATH-STUDY

A pathology-specific workspace is being integrated as a domain package, reusing the canonical residency state and persistence. Current feature branch: shift checklist, gross description builder, microscopy reasoning scaffold, de-identified educational case log and on-call documentation. See `docs/pathology/` for the module index, architecture, curriculum, reference policy and safety boundaries. The feature branch is not yet CI-verified or merged.

## Release status

The repository is not marked production-ready merely because the UI runs. See `docs/PROJECT_STATUS.md` and `docs/RELEASE_CHECKLIST.md` for the exact current gate state.