# Domain Model

Major objects:
`StudyState`, `Question`, `Card`, `StudyEvent`, `ExamResult`, `ActiveExam`, `AuditEvent`, `GuidelineRecord`, `SourceRecord`, `KnowledgeNode`, `KnowledgeEdge`, `AIJob`, `Claim`.

Epistemic/provenance rules:
- `SYNTHETIC_PROTOTYPE_CONTENT` is explicit.
- `UNKNOWN` is not false.
- source state is separate from derived state.
- migrated records retain legacy metadata.