# Ω-RESIDENCY Architecture

`UI → Application Services → Domain → Infrastructure/Adapters`

AI/RAG and external providers are adapters. They never own domain truth.

Core boundaries now exist for:
- exam selection, state and scoring
- review scheduling
- analytics and study planning
- persistence and migration
- AI provider abstraction
- retrieval and claim provenance
- guideline version tracking
- source registry and agent registry

The legacy React UI remains the transport/presentation layer; business calculations moved into service/domain modules.