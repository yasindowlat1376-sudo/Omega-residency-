# Security

- No production API credential is stored in source.
- Browser AI uses a proxy contract, not vendor keys.
- Static secret scan is part of CI.
- Logs should not contain source documents or secrets.
- User state is local-first until a backend is explicitly configured.