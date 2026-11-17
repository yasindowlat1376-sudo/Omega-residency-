# Changelog

## 0.3.0-architecture-refactor — 2026-09-27
- migrated the Vite/React prototype into domain/application/infrastructure boundaries
- introduced LocalStorageAdapter and legacy migration metadata
- persisted exam interruptions and resume state
- extracted scoring, review scheduling, analytics, search, import/export
- removed direct OpenAI SDK usage from React UI
- added provider-neutral AI and retrieval contracts
- added source registry, Telegram discovery registry, guideline watcher contracts
- removed single fake readiness percentage in favor of actual metrics + uncertainty
- added CI, security-scan and core smoke-test scripts