import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const BASE_URL = "https://www.achaialabs.tech";

/**
 * Priority and changefreq rules based on route type
 */
function getRouteMetadata(route) {
  if (route === "/") {
    return { priority: "1.0", changefreq: "weekly" };
  }
  if (route === "/services" || route === "/work" || route === "/products") {
    return { priority: "0.9", changefreq: "weekly" };
  }
  if (route.startsWith("/services/")) {
    return { priority: "0.85", changefreq: "weekly" };
  }
  if (route.startsWith("/work/")) {
    return { priority: "0.8", changefreq: "monthly" };
  }
  if (route.startsWith("/products/")) {
    return { priority: "0.8", changefreq: "monthly" };
  }
  if (route === "/about" || route === "/contact" || route === "/cyp") {
    return { priority: "0.8", changefreq: "monthly" };
  }
  if (route === "/join-our-team") {
    return { priority: "0.7", changefreq: "monthly" };
  }
  if (route === "/sitemap") {
    return { priority: "0.5", changefreq: "monthly" };
  }
  if (route === "/privacy" || route === "/terms" || route === "/cookies") {
    return { priority: "0.4", changefreq: "yearly" };
  }
  return { priority: "0.6", changefreq: "monthly" };
}

/**
 * Dynamically extract all routes from App.jsx, CaseStudyDetail.jsx, and Products.jsx
 */
export function extractSiteRoutes() {
  const appPath = path.join(rootDir, "src", "App.jsx");
  const caseStudyPath = path.join(rootDir, "src", "pages", "work", "CaseStudyDetail.jsx");
  const productsPath = path.join(rootDir, "src", "pages", "products", "Products.jsx");

  const appContent = fs.existsSync(appPath) ? fs.readFileSync(appPath, "utf8") : "";
  const caseStudyContent = fs.existsSync(caseStudyPath) ? fs.readFileSync(caseStudyPath, "utf8") : "";
  const productsContent = fs.existsSync(productsPath) ? fs.readFileSync(productsPath, "utf8") : "";

  // 1. Static routes from App.jsx (excluding wildcards, parameterized, dev demo harnesses, and aliases)
  const routeRegex = /<Route\s+(?:index|path=["']([^"']+)["'])/g;
  const staticRoutes = new Set(["/"]);
  let match;

  while ((match = routeRegex.exec(appContent)) !== null) {
    const rawPath = match[1];
    if (
      rawPath &&
      !rawPath.includes("*") &&
      !rawPath.includes(":") &&
      !rawPath.includes("demo") &&
      rawPath !== "legal/cookie-notice" // Alias to /cookies
    ) {
      staticRoutes.add("/" + rawPath.replace(/^\//, ""));
    }
  }

  // 2. Dynamic case study slugs from CaseStudyDetail.jsx
  const caseStudyRegex = /^\s*"([a-z0-9\-]+)":\s*\{/gm;
  const caseStudyRoutes = [];
  while ((match = caseStudyRegex.exec(caseStudyContent)) !== null) {
    const slug = match[1];
    if (slug && !caseStudyRoutes.includes(`/work/${slug}`)) {
      caseStudyRoutes.push(`/work/${slug}`);
    }
  }

  // 3. Dynamic product slugs from Products.jsx
  const productRegex = /id:\s*["']([a-z0-9\-]+)["']/g;
  const productRoutes = [];
  while ((match = productRegex.exec(productsContent)) !== null) {
    const id = match[1];
    if (id && !productRoutes.includes(`/products/${id}`)) {
      productRoutes.push(`/products/${id}`);
    }
  }

  // Combine and order logically
  const allRoutes = [
    "/",
    "/services",
    "/work",
    "/products",
    "/about",
    "/contact",
    "/cyp",
    "/join-our-team",
    // Services
    ...Array.from(staticRoutes).filter((r) => r.startsWith("/services/")),
    // Case studies
    ...caseStudyRoutes,
    // Products
    ...productRoutes,
    // Legal & utility
    "/privacy",
    "/terms",
    "/cookies",
    "/sitemap",
  ];

  // Deduplicate preserving order
  return Array.from(new Set(allRoutes));
}

/**
 * Generate formatted XML string
 */
export function generateSitemapXml() {
  const routes = extractSiteRoutes();
  const today = new Date().toISOString().split("T")[0];

  const xmlEntries = routes.map((route) => {
    const meta = getRouteMetadata(route);
    // Root URL keeps trailing slash; subpages do not
    const loc = route === "/" ? `${BASE_URL}/` : `${BASE_URL}${route}`;

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries.join("\n")}
</urlset>
`;
}

/**
 * Save sitemap to public/sitemap.xml
 */
export function writeSitemapFile() {
  const publicDir = path.join(rootDir, "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapPath = path.join(publicDir, "sitemap.xml");
  const xmlContent = generateSitemapXml();
  fs.writeFileSync(sitemapPath, xmlContent, "utf8");

  const routes = extractSiteRoutes();
  console.log(`[dynamic-sitemap] Generated public/sitemap.xml with ${routes.length} URLs (lastmod: ${new Date().toISOString().split("T")[0]}).`);
  return sitemapPath;
}

// When executed directly (e.g. node scripts/generate-sitemap.js)
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  writeSitemapFile();
}
