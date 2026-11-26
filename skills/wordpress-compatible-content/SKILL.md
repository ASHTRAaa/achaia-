---
name: wordpress-compatible-content
description: Standards for structuring article content with clean semantic markup, accessible heading hierarchies, and CMS portability.
---

# WordPress Compatible Content Skill

## Overview
This skill ensures that all article content generated for Achaia Labs uses clean, semantic HTML structure and markdown hierarchy that can be effortlessly ported into headless CMSs, standard WordPress instances, Ghost, or static site generators.

## Core Directives
1. **Semantic HTML Tags:** Exclusively use standard HTML elements (`<h1>` through `<h3>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<table>`, `<blockquote>`, `<code>`, `<pre>`).
2. **Strict Heading Hierarchy:** Single `<h1>`, followed by `<h2>` for top-level thematic sections, and `<h3>` for subsections. Never skip levels (no `<h4>` directly under `<h2>`).
3. **No Embedded Style Attributes:** Avoid inline `style="..."` attributes on article body elements. Keep markup decoupled from styling so it inherits native CSS tokens naturally.
4. **Relative Route Links for Internals:** Use standard relative anchor hrefs (`/services/...`, `/work/...`) so routes resolve cleanly across development, staging, and production environments.

## Sub-Modules
- [heading-structure.md](./heading-structure.md): Heading architecture and outline frameworks.
- [html-content-format.md](./html-content-format.md): Semantic formatting rules and code block conventions.

