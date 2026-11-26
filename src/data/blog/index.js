import { post as crmRealEstate } from "./crm-for-real-estate-agents.js";
import { post as webDevSmallBiz } from "./website-developer-for-small-business.js";
import { post as crmAgency } from "./crm-agency.js";
import { post as webBuildingSmallBiz } from "./website-building-for-small-business.js";
import { post as crmRecruitment } from "./crm-in-recruitment.js";
import { post as bestCrmMarketing } from "./best-crm-for-marketing-agency.js";
import { post as aiAutomationAgency } from "./ai-automation-agency.js";
import { post as shopifyDevPartner } from "./shopify-developer-partner.js";
import { post as shopifyApiDev } from "./shopify-api-developer.js";

export const blogPosts = [
  crmRealEstate,
  webDevSmallBiz,
  crmAgency,
  webBuildingSmallBiz,
  crmRecruitment,
  bestCrmMarketing,
  aiAutomationAgency,
  shopifyDevPartner,
  shopifyApiDev,
];

export const blogCategories = [
  "All Articles",
  "CRM & Systems",
  "Web Development",
  "AI Automation",
  "Shopify & E-Commerce",
];

export function getBlogPostBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return blogPosts.find((p) => p.slug.toLowerCase() === normalized) || null;
}

export function getRelatedPosts(currentSlug, limit = 2) {
  const current = getBlogPostBySlug(currentSlug);
  if (!current) return blogPosts.slice(0, limit);

  // First look for explicitly related slugs
  if (current.relatedSlugs && current.relatedSlugs.length > 0) {
    const explicit = current.relatedSlugs
      .map((s) => getBlogPostBySlug(s))
      .filter(Boolean);
    if (explicit.length >= limit) return explicit.slice(0, limit);
  }

  // Fallback to same category
  const sameCategory = blogPosts.filter(
    (p) => p.slug !== current.slug && p.category === current.category
  );
  if (sameCategory.length > 0) return sameCategory.slice(0, limit);

  // Fallback to any other post
  return blogPosts.filter((p) => p.slug !== current.slug).slice(0, limit);
}

