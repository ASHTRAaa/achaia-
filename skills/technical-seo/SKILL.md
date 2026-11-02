---
name: technical-seo
description: Guidelines and technical specifications for metadata, canonicalization, structured data, sitemaps, and robots.txt.
---

# Technical SEO Skill

## Overview
This skill defines the technical execution standards required for Achaia Labs' React SPA to ensure seamless indexing, rich snippet eligibility, and robust crawlability by Google and other search engines.

## Core Directives
1. **Accurate Canonicalization:** Every page must specify its canonical self-referencing URL (`https://www.achaialabs.tech/blog/...`) to prevent duplicate indexing across protocol, query parameters, or trailing slash variations.
2. **Dynamic SPA Metadata Synchronization:** Synchronize `document.title`, description, Open Graph, and Twitter tags on route transitions using React hooks.
3. **Valid Schema.org JSON-LD:** Inject machine-readable structured data (`BlogPosting`, `BreadcrumbList`, and `Organization`) into the document head for each individual article.
4. **Automated XML Sitemap Maintenance:** Keep `public/sitemap.xml` dynamically updated through build scripts that parse valid content routes without manually editing XML strings.

## Sub-Modules
- [metadata.md](./metadata.md): Meta tags, Open Graph, Twitter cards, and character limits.
- [structured-data.md](./structured-data.md): Schema.org specifications for articles and breadcrumbs.
- [sitemap-and-robots.md](./sitemap-and-robots.md): Crawl directives, sitemap indexing, and build automation.
- [canonicalization.md](./canonicalization.md): Canonical tag enforcement and URL hygiene.

