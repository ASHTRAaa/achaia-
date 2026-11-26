# SEO Blog Engine Implementation Plan — Achaia Labs

## 1. Executive Summary & Objective

**Website:** [https://www.achaialabs.tech](https://www.achaialabs.tech)  
**Positioning:** Product engineering and business automation agency delivering Shopify stores, custom ERPs, Android/mobile applications, CRM platforms, and practical AI workflow automations.  
**Philosophy:** Research. Build. Automate. Scale.

The objective is to architect, develop, and integrate a native, high-performance SEO blog engine into the existing Achaia Labs single-page application (SPA). This engine will capture commercial and informational search traffic across nine high-intent topics, establish topical authority, showcase genuine project engineering experience, and convert qualified decision-makers into inbound leads using the existing `SendMyForm` API integration.

---

## 2. Existing Architecture Audit

### 2.1 Frontend Framework & Build System
- **Framework:** React 19.2.0 + React DOM 19.2.0
- **Routing:** `react-router-dom` v7.13.1
- **Build Tool:** Vite 7.3.2 with `@vitejs/plugin-react` and `vite-plugin-svgr`
- **Styling:** Tailwind CSS 3.4.19 + PostCSS 8.5.15 + Autoprefixer 10.5.0
- **Animations:** Motion / Framer Motion 12.38.0
- **Icons:** `react-icons` (FontAwesome 6, HeroIcons 2) and `lucide-react`
- **Analytics:** Google Analytics 4 (`G-EP8Y3C2Z1L`) with cookie consent gating via `gtag.js`

### 2.2 Global Design System & Design Tokens
Defined in `tailwind.config.js`:
- **Dark Theme Dominant:** Background `#111111`, Surface `#181818`, Elevated Surface `#202020`, Borders `#303030` and `#262626`.
- **Text Palette:** Primary `#F5F5F3`, Muted Text `#A6A6A6`, Subdued Text `#888888` / `#777777`.
- **Brand Accent:** High-contrast Royal Blue `#315EFB` (Hover: `#254EDB`, Tint: `rgba(49, 94, 251, 0.12)`).
- **Typography:** Primary font family `Poppins, sans-serif`. Monospace accents for tags and meta labels.
- **Card Styling:** `rounded-2xl` / `rounded-3xl` with subtle 1px border (`#303030`) and soft ambient glow effects.

### 2.3 Existing Navigation & Layout Hierarchy
- **Header:** Sticky glassmorphic navbar with dropdown menus for Services, Works, Products, and direct links to About and Contact.
- **Main Layout:** `MainLayout.jsx` orchestrates `<Navbar />`, conditional `<Hero />` (homepage only), `<Outlet />`, `<Footer />`, `<FeedbackTool />`, and `<CookieConsent />`.
- **Footer:** Two-column grid for Services and Company, full postal contact strip (`Godrej Waterside, Salt Lake City, Kolkata`), legal policy links, and monumental SVG branding.

### 2.4 Existing API & Lead Capture Architecture
- **Provider:** SendMyForm (Achaia Labs' proprietary developer form API platform).
- **Endpoint:** `POST https://www.sendmyform.live/api/f/contact-us`
- **Headers:** `Content-Type: application/json`, `Accept: application/json`
- **Existing Payloads:** Accepts JSON objects containing `name`, `email`, `company`, `service`, `message`, `phone`, `budget`, `timeline`.
- **Feedback & Validation:** Native React state handling `idle` | `submitting` | `success` | `error` with clear visual feedback and reset routines.

### 2.5 Existing SEO, Sitemap & Crawling Setup
- **SEO Hook:** `useSEO.js` updates `document.title`, `meta[name="description"]`, Open Graph, Twitter cards, and injects `<link rel="canonical">`.
- **Sitemap Generation:** Automated script `scripts/generate-sitemap.js` hooked directly into Vite's `buildStart` and `devServer` via `dynamicSitemapPlugin()`, as well as `npm run prebuild`.
- **Robots.txt:** In `public/robots.txt`:
  ```text
  User-agent: *
  Allow: /
  Sitemap: https://www.achaialabs.tech/sitemap.xml
  ```
- **Static Schema:** Root `index.html` embeds Organization and WebSite JSON-LD schemas.

---

## 3. Existing Project Inventory & Genuine Case Studies

To ensure compliance with Google's helpful content guidelines, real case studies from `src/pages/work/CaseStudyDetail.jsx` and `src/pages/products/Products.jsx` will be used as concrete examples in relevant articles:

1. **Moms & Moon (`/work/moms-and-moon`):**
   - *Domain:* Kids fashion e-commerce.
   - *Deliverables:* Mobile-first custom Shopify theme in Liquid, size/age matrices, Razorpay/UPI checkout, automated WhatsApp/email dispatch notifications.
   - *Applicability:* Articles on Shopify developer partner selection, mobile checkout, and e-commerce conversion.

2. **SKMT Trust (`/work/skmt-trust`):**
   - *Domain:* Educational & Fellowship Trust.
   - *Deliverables:* Custom governance ERP portal built in PostgreSQL, Node.js, and React replacing multi-tab spreadsheets; cohort tracking, fee management, role-based access.
   - *Applicability:* Articles on CRM agencies, custom CRM development, and business workflow systems.

3. **Gaurav Synthetics (`/work/gaurav-synthetics`):**
   - *Domain:* Wholesale textile dealer (exclusive Ramraj Cotton dealership).
   - *Deliverables:* High-speed digital catalog, category indexing, and direct inbound WhatsApp/email inquiry funnel.
   - *Applicability:* Small business website development and digital catalog architectures.

4. **Mandala Good Vibes (`/work/mandala-good-vibes`):**
   - *Domain:* Spiritual gemstones and healing crystals.
   - *Deliverables:* High-performance Shopify storefront, mineral filtering directory, fast local caching, domestic checkout.
   - *Applicability:* Shopify store customization and performance optimization.

5. **Helios AI Platform (`/work/helios`):**
   - *Domain:* AI creative tooling.
   - *Deliverables:* Android client, structured prompt directory, parameter testing engine, low-latency mobile client.
   - *Applicability:* AI automation agencies and API-driven application development.

6. **Fox Wing Media (`/work/fox-wing-media`):**
   - *Domain:* Modern PR & brand authority agency.
   - *Deliverables:* Authority web presence, dynamic editorial showcase, friction-free meeting booking integration.
   - *Applicability:* Small business web design and marketing agency workflows.

7. **Divine Enterprises (`/work/divine-enterprises`):**
   - *Domain:* B2B procurement and institutional supply network.
   - *Deliverables:* High-trust institutional supply catalog, RFQ submission system, supplier management.
   - *Applicability:* Custom business systems and B2B inquiry funnels.

8. **In-House Product: SendMyForm (`/products/sendmyform`):**
   - *Domain:* Developer form-to-email/API routing infrastructure.
   - *Deliverables:* Low-latency form endpoint handling spam filtering, domain whitelisting, and webhook triggers.

---

## 4. Technical Constraints & Mitigation Strategy

1. **SPA Client-Side Crawling:**
   - *Challenge:* Vite generates an SPA bundle where routes render on the client.
   - *Mitigation:* Clean semantic HTML tags (`<article>`, `<header>`, `<h1>`-`<h3>`, `<section>`, `<table>`), complete page metadata updates on mount, static sitemap registration with canonical URLs, and dynamic Schema.org JSON-LD injection for Googlebot.
2. **Design Uniformity:**
   - *Constraint:* Strict instruction not to introduce extraneous templates, bright gradients, or foreign fonts.
   - *Solution:* Construct all blog components using the established `#111111` background, `#181818` card containers, `#303030` borders, Poppins typography, and `#315EFB` interactive accents.
3. **Preserving Existing Form Contract:**
   - *Constraint:* Never break the `https://www.sendmyform.live/api/f/contact-us` API endpoint.
   - *Solution:* Pass valid standard fields (`name`, `email`, `company`, `service`, `message`) with contextual prefixing in `message` or `service` (e.g. `service: "CRM Solutions"` and `message: "[Inquiry from Blog: CRM in Recruitment] ..."`), ensuring 100% backend compatibility.

---

## 5. Blog Architecture & URL Structure

### 5.1 Proposed URL Routes
- Listing Hub: `/blog`
- Article 1: `/blog/crm-for-real-estate-agents`
- Article 2: `/blog/website-developer-for-small-business`
- Article 3: `/blog/crm-agency`
- Article 4: `/blog/website-building-for-small-business`
- Article 5: `/blog/crm-in-recruitment`
- Article 6: `/blog/best-crm-for-marketing-agency`
- Article 7: `/blog/ai-automation-agency`
- Article 8: `/blog/shopify-developer-partner`
- Article 9: `/blog/shopify-api-developer`

### 5.2 Component Structure
```text
src/
├── data/
│   └── blogPosts.js              # Centralized data model with 9 in-depth articles, metadata, FAQs, TOC
├── hooks/
│   ├── useSEO.js                 # Existing general SEO hook
│   └── useBlogSEO.js             # Specialized Article & BreadcrumbList JSON-LD + OpenGraph hook
├── components/
│   └── blog/
│       ├── BlogCard.jsx          # Uniform card matching portfolio/service cards
│       ├── BlogLeadForm.jsx      # Contextual inquiry form reusing SendMyForm endpoint
│       ├── TableOfContents.jsx   # Smooth-scrolling jump navigation
│       ├── AuthorCard.jsx        # Engineering editorial author snippet
│       └── FAQSection.jsx        # Semantic, accordion-style FAQ component
└── pages/
    └── blog/
        ├── BlogListing.jsx       # Hub page with category filter and search
        └── BlogPostDetail.jsx    # Complete editorial reading layout
```

---

## 6. Content Strategy & Search Intent Matrix

| Slug | Primary Keyword | Search Intent | Target Word Count | Featured Services / Case Studies |
|---|---|---|---|---|
| `crm-for-real-estate-agents` | CRM for real estate agents | Commercial investigation | 1,200–1,500 | Custom CRM, ERP Systems (`/services/erp`), SKMT Trust |
| `website-developer-for-small-business` | website developer for small business | Commercial investigation | 1,200–1,500 | App & Web Development (`/services/apps`), Gaurav Synthetics |
| `crm-agency` | CRM agency | Commercial investigation | 1,200–1,500 | ERP & Business Systems (`/services/erp`), SKMT Trust |
| `website-building-for-small-business` | website building for small business | Informational / commercial | 1,200–1,500 | Web Development (`/services/apps`), Gaurav Synthetics, Divine Enterprises |
| `crm-in-recruitment` | CRM in recruitment | Informational / commercial | 1,200–1,500 | Custom Software & Database Systems (`/services/erp`) |
| `best-crm-for-marketing-agency` | best CRM for marketing agency | Commercial investigation | 1,200–1,500 | Custom Software Architecture, Fox Wing Media |
| `ai-automation-agency` | AI automation agency | Commercial investigation | 1,200–1,500 | AI Automation (`/services/ai-automation`), Helios AI Platform |
| `shopify-developer-partner` | Shopify developer partner | Commercial investigation | 1,200–1,500 | Shopify Services (`/services/shopify`), Moms & Moon, Mandala Good Vibes |
| `shopify-api-developer` | Shopify API developer | Commercial / technical | 1,200–1,500 | Shopify Admin & Storefront API (`/services/shopify`), SendMyForm |

---

## 7. Implementation Roadmap

1. **Phase 1 & 2:** Repository audit completed; create reusable SEO Skills in `/skills/...`.
2. **Phase 3:** Create `SEO_KEYWORD_STRATEGY.md` with in-depth keyword analysis, search intents, entities, and SERP landscape.
3. **Phase 4 & 5:** Generate all 9 articles in `src/data/blogPosts.js` adhering to the standard 9-part structure (SEO title, intro, H2/H3 body, practical examples, external citations, internal links, soft service mention, conclusion, FAQs).
4. **Phase 6 & 7:** Build `useBlogSEO.js`, `BlogListing.jsx`, `BlogPostDetail.jsx`, `BlogLeadForm.jsx`, and supporting components.
5. **Phase 8 & 9:** Update `src/App.jsx` routes, add "Blog" link to `Footer.jsx`, update `Sitemap.jsx`, and hook into SendMyForm API.
6. **Phase 10 & 11:** Update `scripts/generate-sitemap.js`, rebuild `public/sitemap.xml`, verify `robots.txt`, and verify Vite build passes.
7. **Phase 12 & 13:** Quality assurance check across content, technical SEO, responsiveness, and compile final reporting deliverables.

