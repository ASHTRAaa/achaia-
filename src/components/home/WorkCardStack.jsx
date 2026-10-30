import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardStack } from "../ui/card-stack";

export const featuredWorkItems = [
  {
    id: "moms-and-moon",
    title: "Moms & Moon",
    client: "Boutique Occasion Wear & Kids Fashion",
    vertical: "Shopify & E-Commerce",
    shortDesc:
      "Designed and engineered a mobile-first Shopify storefront featuring custom festive collection lookbooks, age/size variant filters, and domestic payment integrations.",
    deliverables: ["Custom Shopify Theme", "Mobile-First UX", "Payment Gateway Setup"],
    imageSrc: "/work-assets/MnM.webp",
    href: "/work/moms-and-moon",
  },
  {
    id: "skmt-trust",
    title: "SKMT Trust",
    client: "Educational & Fellowship Trust",
    vertical: "ERP & Business Systems",
    shortDesc:
      "Built a unified institutional governance portal replacing disconnected spreadsheets to manage fellowship tracks, affiliated institute records, student enrollment cohorts, and fee schedules.",
    deliverables: ["Governance ERP Portal", "Student Cohort Tracking", "Role-Based Permissions"],
    imageSrc: "/work-assets/skmt.webp",
    href: "/work/skmt-trust",
  },
  {
    id: "gaurav-synthetics",
    title: "Gaurav Synthetics",
    client: "Textile & Wholesale Dealer",
    vertical: "Catalog & Web Architecture",
    shortDesc:
      "Engineered a scalable digital catalog and local visibility platform for an exclusive Ramraj Cotton dealership, strengthening buyer discoverability and wholesale inquiry generation.",
    deliverables: ["Scalable Web Platform", "Product Catalog Architecture", "Inbound Inquiry Funnel"],
    imageSrc: "/work-assets/gauravsyn.webp",
    href: "/work/gaurav-synthetics",
  },
  {
    id: "mandala",
    title: "Mandala",
    client: "Gemstones & Spirituality",
    vertical: "Shopify & E-Commerce",
    shortDesc:
      "Built a high-speed Shopify Store Platform and directory for gemstones, enabling customers to search, filter and explore the collection.",
    deliverables: ["Shopify Store Platform", "Directory Engine", "Fast Local Caching"],
    imageSrc: "/work-assets/mandala.webp",
    href: "/work/mandala-good-vibes",
  },
  {
    id: "fox-wing-media",
    title: "Fox Wing Media",
    client: "PR, Media & Ingestion Agency",
    vertical: "Workflow Automation & Web",
    shortDesc:
      "Designed and developed a modern digital media architecture and publication workflow system to showcase media placements, client case studies, and editorial achievements.",
    deliverables: ["Editorial Web Architecture", "Media Placement Showcase", "Lead Generation Ingestion"],
    imageSrc: "/work-assets/foxwing.webp",
    href: "/work/fox-wing-media",
  },
  {
    id: "divine-enterprises",
    title: "Divine Enterprises",
    client: "Industrial Equipment & Engineering",
    vertical: "Industrial Web Platform",
    shortDesc:
      "Structured and engineered an industrial product catalog and inquiry system for industrial filtration and manufacturing machinery.",
    deliverables: ["Industrial Specification Engine", "Inquiry Routing Pipeline", "SEO & Technical Architecture"],
    imageSrc: "/work-assets/divineEnt.webp",
    href: "/work/divine-enterprises",
  },
];

export function WorkCardStack() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <CardStack
        items={featuredWorkItems}
        initialIndex={0}
        cardWidth={560}
        cardHeight={350}
        overlap={0.46}
        spreadDeg={42}
        perspectivePx={1200}
        depthPx={140}
        tiltXDeg={11}
        activeLiftPx={24}
        activeScale={1.04}
        inactiveScale={0.92}
        autoAdvance={false}
        intervalMs={3500}
        pauseOnHover={true}
        showDots={true}
        showControls={true}
        renderCard={(item, { active }) => (
          <div
            className="group relative h-full w-full rounded-2xl overflow-hidden bg-[#121215] cursor-pointer"
            onClick={(e) => {
              if (active) {
                // If clicked on the active card, navigate to the case study
                navigate(item.href);
              }
            }}
          >
            {/* 1. Full-bleed background image */}
            <img
              src={item.imageSrc}
              alt={item.title}
              className="h-full w-full object-cover object-top select-none transition-transform duration-700 group-hover:scale-105"
              draggable={false}
            />

            {/* 2. Base overlay gradient & client title (visible by default) */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 flex flex-col justify-end p-6 sm:p-7 group-hover:opacity-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight drop-shadow-md">
                {item.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#CCCCCC] font-light">
                {item.client}
              </p>
            </div>

            {/* 4. Hover Dark Shade Overlay with 1-2 liner description */}
            <div
              className="absolute inset-0 backdrop-blur-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between opacity-0 group-hover:opacity-100 z-20"
              style={{ backgroundColor: "rgba(11, 11, 15, 0.94)" }}
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono font-semibold text-[#315EFB] uppercase tracking-wider">
                    {item.vertical}
                  </span>

                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  {item.title}
                </h3>

                {/* 1-2 liner description */}
                <p className="text-xs sm:text-sm text-[#E2E2E2] leading-relaxed line-clamp-3 mb-4">
                  {item.shortDesc}
                </p>

                {/* Key Deliverable pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {item.deliverables.map((deliv, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-[#1B1B20] border border-[#2E2E36] text-[10px] sm:text-[11px] text-[#B0B0B5] font-mono"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Row */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  to={item.href}
                  className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254acc] text-white px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-md active:scale-95"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Read Case Study</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <span className="text-[11px] text-[#888888]">
                  {item.client}
                </span>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default WorkCardStack;
