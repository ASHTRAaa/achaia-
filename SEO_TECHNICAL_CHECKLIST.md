# Technical SEO & Quality Assurance Checklist — Achaia Labs

## 1. Document Level Requirements
- [ ] Unique `<title>` matching target primary keyword and intent (50–65 chars).
- [ ] Unique `<meta name="description">` providing clear summary (140–160 chars).
- [ ] Correct self-referencing canonical tag `<link rel="canonical" href="...">`.
- [ ] Robots meta set to `<meta name="robots" content="index, follow">`.
- [ ] Standardized Open Graph properties: `og:title`, `og:description`, `og:url`, `og:image`, `og:type` (`article`), and `og:site_name`.
- [ ] Twitter card markup: `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`, and `twitter:site` (`@achaialabs`).

## 2. Structured Data (JSON-LD) Validation
- [ ] `BlogPosting` or `Article` schema with required fields:
  - `@context`: `"https://schema.org"`
  - `@type`: `"BlogPosting"`
  - `headline`, `description`, `image`, `datePublished`, `dateModified`
  - `author`: Achaia Labs Engineering Team
  - `publisher`: Achaia Labs organization reference with valid logo
  - `mainEntityOfPage`: Absolute article URL
- [ ] `BreadcrumbList` schema linking Home -> Blog -> Article.

## 3. Crawlability & Architecture
- [ ] Route returns clean HTTP 200 via React Router.
- [ ] Route registered in `scripts/generate-sitemap.js` and exported in `public/sitemap.xml`.
- [ ] Route referenced in on-site HTML sitemap (`/sitemap`).
- [ ] Blog hub (`/blog`) linked in global website footer (`src/components/footer/Footer.jsx`).
- [ ] Zero broken internal links (`/services/...`, `/work/...`, `/blog/...`).
- [ ] External links verified and configured with `target="_blank"` and `rel="noopener noreferrer"`.

## 4. Lead Capture & Form Integration
- [ ] Reuses existing production endpoint: `https://www.sendmyform.live/api/f/contact-us`.
- [ ] Captures `name`, `email`, `company`, `service`, and contextual `message`.
- [ ] Field validation on submit (email syntax, required inputs).
- [ ] Handles visual states cleanly: `submitting` (loading indicator), `success` (confirmation screen), and `error` (alert).
- [ ] Prevents duplicate submissions while request is in flight.

## 5. Performance & Mobile Responsiveness
- [ ] Layout renders seamlessly across mobile (375px+), tablet (768px+), and desktop (1024px+).
- [ ] Fast text rendering without layout shift (CLS < 0.1).
- [ ] High contrast text meeting WCAG AA standards against dark background (`#111111`).

