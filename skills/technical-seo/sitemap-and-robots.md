# Sitemap and Robots.txt Standards

## 1. Robots.txt Directives
Located at `/public/robots.txt`:
```text
User-agent: *
Allow: /

Sitemap: https://www.achaialabs.tech/sitemap.xml
```
- Ensures all public search engine crawlers (Googlebot, Bingbot) have unrestricted crawl access to indexable routes.
- Explicitly points to the single canonical sitemap endpoint.

## 2. Dynamic Sitemap Automation
- Handled by `scripts/generate-sitemap.js`.
- Automatically extracts routes from `App.jsx`, `CaseStudyDetail.jsx`, `Products.jsx`, and `src/data/blogPosts.js`.
- Assigns priority `0.85` and `changefreq: "monthly"` to blog articles.
- Formats XML entries with standardized `<loc>`, `<lastmod>`, `<changefreq>`, and `<priority>`.
- Hooked into Vite configuration so `public/sitemap.xml` is maintained automatically at build and runtime.

