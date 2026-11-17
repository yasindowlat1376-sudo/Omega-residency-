# AI Pipeline

Provider-neutral interface:
`generate / structured_generate / classify / extract / review`

Providers:
`OpenAI / Anthropic / Gemini / Local / Mock`

Live providers use a server-side proxy contract (`VITE_PLATFORM_SERVICES_URL`) and no production API key is embedded in the browser bundle.

When credentials are unavailable, the Mock provider remains functional and live integration is marked `BLOCKED_BY_CREDENTIALS`.