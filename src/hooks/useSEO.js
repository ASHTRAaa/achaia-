import { useEffect } from "react";

const BASE_URL = "https://www.achaialabs.tech";
const DEFAULT_IMAGE = "https://www.achaialabs.tech/og-image.png";

/**
 * useSEO — dynamically updates page-level SEO metadata for the Achaia Labs SPA.
 */
export function useSEO({ title, description, path = "", image = DEFAULT_IMAGE }) {
  useEffect(() => {
    const fullTitle = title.includes("Achaia Labs")
      ? title
      : `${title} | Achaia Labs`;

    document.title = fullTitle;
    updateMeta("name", "description", description);
    updateMeta("name", "robots", "index, follow");
    updateMeta("property", "og:title", fullTitle);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", BASE_URL + path);
    updateMeta("property", "og:image", image);
    updateMeta("property", "og:type", "website");
    updateMeta("property", "og:site_name", "Achaia Labs");
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", fullTitle);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", image);

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = BASE_URL + path;

    return () => {
      document.title = "Achaia Labs | Business Software & Automation";
    };
  }, [title, description, path, image]);
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
