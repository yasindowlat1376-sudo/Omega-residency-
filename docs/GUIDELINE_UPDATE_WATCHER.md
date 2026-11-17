# Guideline Watcher

Pipeline:
`GUIDELINE → DIFF → CLAIMS → CONCEPTS → QUESTIONS → FLASHCARDS → RECHECK QUEUE`

Rules:
- Historical versions are append-only.
- A change signal never silently edits a published question.
- Affected questions enter recheck/review state.
- The repository stores only metadata/claims necessary for traceability; it does not silently copy copyrighted guideline bodies.
- Live monitoring requires a configured provider or scheduled job; the current local adapter is a safe stub and does not fabricate updates.