# Browser end-to-end tests

The browser suite uses Playwright with a pinned CI runner version. It is intentionally installed ephemerally in CI so the production dependency lockfile is not changed by test tooling.

## Run locally

```bash
npm ci
npm install --no-save --package-lock=false @playwright/test@1.56.1
npx playwright install chromium
npm run test:e2e
```

## Current coverage

- Application hydration and pathology workspace navigation.
- Knowledge Canvas selected-node and zoom persistence across a full page reload.
- Mobile viewport horizontal-overflow regression on the canvas screen.

This is a smoke/regression baseline, not comprehensive acceptance testing. It does not replace physical Android PWA installation, offline-mode testing, assistive-technology review or faculty content validation.
