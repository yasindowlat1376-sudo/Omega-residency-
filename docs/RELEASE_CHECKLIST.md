# Release Checklist

## Verified in GitHub Actions — 2026-11-17
- [x] npm ci on Node.js 22
- [x] Contract lint
- [x] Strict TypeScript typecheck
- [x] Core smoke tests
- [x] Static secret/security scan
- [x] Vite production build
- [x] Source baseline merged to main

## Still required before a production web release
- [ ] Dependency audit and remediation for 5 high-severity advisories reported by npm ci
- [ ] Full browser E2E tests across supported browsers and mobile viewports
- [ ] Runtime verification of legacy migration with representative fixtures
- [ ] Persistence and import/export recovery tests
- [ ] Verify official 1406 source documents against primary authority and pin immutable snapshots
- [ ] Configure and verify live backend persistence, if enabled
- [ ] Configure provider proxy and validate live AI/retrieval behavior without exposing credentials
- [ ] Privacy review, threat model and operational monitoring

## Native Android release — separate workstream
- [ ] Add/approve native Android or Capacitor platform architecture
- [ ] Configure Android SDK, package identity and permissions
- [ ] Configure signing securely outside source control
- [ ] Build and verify APK
- [ ] Build and verify AAB
- [ ] Test install, upgrade, offline behavior, backup and restore on physical Android devices
