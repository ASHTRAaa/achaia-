import { useEffect } from "react";

const BASE_URL = "https://www.achaialabs.tech";
const DEFAULT_IMAGE = "https://www.achaialabs.tech/work-assets/achaia_showcase_poster.png";

/**
 * useBlogSEO — Specialized hook for blog articles and blog listing.
 * Injects OpenGraph article tags, Twitter Cards, Canonical URL, and dynamic JSON-LD schemas.
 */
export function useBlogSEO({
  title,
  description,
  path = "/blog",
  image = DEFAULT_IMAGE,
  isArticle = false,
  publishDate,
  modifiedDate,
  category,
  breadcrumbs = [],
}) {
  useEffect(() => {
    const fullTitle = title.includes("Achaia Labs")
      ? title
      : `${title} | Achaia Labs`;

    document.title = fullTitle;
    updateMeta("name", "description", description);
    updateMeta("name", "robots", "index, follow");

    // Open Graph
    updateMeta("property", "og:title", fullTitle);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", BASE_URL + path);
    updateMeta("property", "og:image", image);
    updateMeta("property", "og:type", isArticle ? "article" : "website");
    updateMeta("property", "og:site_name", "Achaia Labs");

    if (isArticle && publishDate) {
      updateMeta("property", "article:published_time", publishDate);
    }
    if (isArticle && modifiedDate) {
      updateMeta("property", "article:modified_time", modifiedDate);
    }
    if (isArticle && category) {
      updateMeta("property", "article:section", category);
    }

    // Twitter
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", fullTitle);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", image);
    updateMeta("name", "twitter:creator", "@achaialabs");

    // Canonical link
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = BASE_URL + path;

    // Structured Data (JSON-LD)
    const scriptId = "blog-structured-data";
    let scriptEl = document.getElementById(scriptId);
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = scriptId;
      scriptEl.type = "application/ld+json";
      document.head.appendChild(scriptEl);
    }

    const schemas = [];

    // BreadcrumbList Schema
    if (breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url.startsWith("http") ? crumb.url : `${BASE_URL}${crumb.url}`,
        })),
      });
    }

    // Article / BlogPosting Schema
    if (isArticle) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description: description,
        image: [image],
        datePublished: publishDate || new Date().toISOString(),
        dateModified: modifiedDate || publishDate || new Date().toISOString(),
        author: {
          "@type": "Organization",
          name: "Achaia Labs Engineering Team",
          url: `${BASE_URL}/about`,
        },
        publisher: {
          "@type": "Organization",
          name: "Achaia Labs",
          logo: {
            "@type": "ImageObject",
            url: `${BASE_URL}/achaia.svg`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${BASE_URL}${path}`,
        },
      });
    }

    scriptEl.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : { "@graph": schemas });

    return () => {
      document.title = "Achaia Labs | Business Software & Automation";
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    };
  }, [title, description, path, image, isArticle, publishDate, modifiedDate, category, breadcrumbs]);
}

function updateMeta(attr, attrVal, content) {
  let el = document.querySelector(`meta[${attr}="${attrVal}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrVal);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

