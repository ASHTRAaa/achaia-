# Canonicalization Standards

## 1. Principles
- **One Canonical URL Per Asset:** Avoid multiple URLs serving duplicate or identical content.
- **Protocol & Domain Enforcement:** Always use `https://www.achaialabs.tech` as the origin.
- **Trailing Slash Hygiene:** Root URL has trailing slash (`https://www.achaialabs.tech/`); subpages do not (`https://www.achaialabs.tech/blog`, `https://www.achaialabs.tech/blog/[slug]`).
- **Dynamic DOM Injection:** Ensure the `<link rel="canonical">` element in `document.head` updates synchronously upon route transitions via React SEO hooks.

