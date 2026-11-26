# Schema.org Structured Data Specifications

## 1. Article / BlogPosting Schema
Every blog article must render a dynamic JSON-LD `<script>` tag conforming to Schema.org standards:

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Article SEO Title]",
  "description": "[Meta Description]",
  "image": ["https://www.achaialabs.tech/work-assets/achaia_showcase_poster.png"],
  "datePublished": "2026-03-15T08:00:00+00:00",
  "dateModified": "2026-03-20T10:00:00+00:00",
  "author": {
    "@type": "Organization",
    "name": "Achaia Labs Engineering Team",
    "url": "https://www.achaialabs.tech/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Achaia Labs",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.achaialabs.tech/achaia.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.achaialabs.tech/blog/[slug]"
  }
}
```

## 2. BreadcrumbList Schema
Enables Google to display clean hierarchical breadcrumb trails in SERP results:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.achaialabs.tech/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://www.achaialabs.tech/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[Article Short Title]",
      "item": "https://www.achaialabs.tech/blog/[slug]"
    }
  ]
}
```

