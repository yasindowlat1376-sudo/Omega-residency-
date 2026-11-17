# Performance Notes

No speculative optimization was added. The current app keeps the prototype's client-side dataset in memory and uses local persistence.

First production performance pass should measure:
startup, question load, answer persistence, exam navigation, submit, analytics, global search.