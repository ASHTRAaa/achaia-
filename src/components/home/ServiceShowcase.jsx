import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const servicePanels = [
  {
    id: "shopify",
    number: "01",
    tag: "COMMERCE",
    title: "Shopify & E-Commerce Systems",
    summary:
      "We design and engineer high-converting Shopify storefronts connected to your inventory, checkout flows, payment gateways, and shipping logistics from day one.",
    capabilities: [
      "Custom lookbook & bespoke storefront design",
      "Variant matrices & nested collection architecture",
      "Seamless payment gateway & checkout integration",
      "Real-time inventory, ERP & warehouse sync",
    ],
    serviceLink: "/services/shopify",
    caseStudyLink: "/work/moms-and-moon",
    caseStudyLabel: "Case Study: Moms & Moon",
    clientName: "Moms & Moon",
    clientType: "Occasion Wear & Kids Fashion",
    image: "/work-assets/moni_monu_laptop.webp",
    imageAlt: "Moms & Moon Shopify Storefront engineered by Achaia Labs",
    mockupType: "browser",
    mockupUrl: "momsandmoon.com",
    metrics: ["Custom Lookbook UX", "Payment Gateway Setup", "Mobile-First Conversion"],
  },
  {
    id: "erp",
    number: "02",
    tag: "OPERATIONS",
    title: "ERP & Business Systems",
    summary:
      "We replace fragile spreadsheets and disconnected SaaS tools with centralized internal web software — customized to your team's exact administrative, inventory, and financial workflows.",
    capabilities: [
      "Custom operational workflow & database architecture",
      "Role-based administrative & staff access portals",
      "Inventory, procurement & student/cohort tracking",
      "Automated invoicing, fee ledgers & audit logs",
    ],
    serviceLink: "/services/erp",
    caseStudyLink: "/work/skmt-trust",
    caseStudyLabel: "Case Study: SKMT Trust Governance",
    clientName: "SKMT Trust",
    clientType: "Educational & Fellowship Governance",
    image: "/work-assets/skmt_erp_tablet.webp",
    imageAlt: "SKMT Trust Governance ERP Portal engineered by Achaia Labs",
    mockupType: "tablet",
    mockupUrl: "portal.skmttrust.org/governance",
    metrics: ["Cohort Management", "Role-Based Security", "Automated Ledgers"],
  },
  {
    id: "apps",
    number: "03",
    tag: "MOBILE & APPLICATION",
    title: "Application Development",
    summary:
      "We build production Android and cross-platform applications engineered for responsive speed, battery efficiency, offline caching resilience, and long-term OS maintenance.",
    capabilities: [
      "Product discovery & native UX/UI interface design",
      "Android Kotlin & React Native production architecture",
      "Resilient offline caching & encrypted local data",
      "Google Play Store release & ongoing OS compatibility",
    ],
    serviceLink: "/services/apps",
    caseStudyLink: "/work/helios",
    caseStudyLabel: "Case Study: Helios Mobile Platform",
    clientName: "Helios Platform",
    clientType: "Creative Tools & Mobile Prompt Ecosystem",
    image: "/work-assets/helios_mobile.webp",
    imageAlt: "Helios Android Application interface engineered by Achaia Labs",
    mockupType: "mobile",
    mockupUrl: "helios.app/mobile",
    metrics: ["Sub-50ms Search", "Offline Local Cache", "Play Store Release"],
  },
  {
    id: "ai-automation",
    number: "04",
    tag: "AI & AUTOMATION",
    title: "AI & Workflow Automation",
    summary:
      "We eliminate manual operational bottlenecks by connecting APIs, document extraction models, and automated business logic with reliable human-in-the-loop exception handling.",
    capabilities: [
      "Operational bottleneck & workflow discovery",
      "Multi-software API integrations (Shopify, ERPs, CRMs)",
      "Document, catalog & invoice data extraction",
      "Execution logging, error alerts & continuous monitoring",
    ],
    serviceLink: "/services/ai-automation",
    caseStudyLink: "/work/fox-wing-media",
    caseStudyLabel: "Case Study: Fox Wing Media & Helios",
    clientName: "Fox Wing & Creative Workflows",
    clientType: "Intelligent Ingestion & Media Pipelines",
    image: "/work-assets/foxwing_main.webp",
    imageAlt: "Workflow Automation & Web Architecture engineered by Achaia Labs",
    mockupType: "workflow",
    mockupUrl: "api.achaialabs.tech/pipeline",
    metrics: ["Automated Data Ingestion", "Deterministic Validation", "Zero Lost Transactions"],
  },
];

const ServiceShowcase = () => {
  const [activeTab, setActiveTab] = useState("shopify");
  const sectionRefs = useRef({});

  // Sync active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 280;
      servicePanels.forEach((panel) => {
        const el = sectionRefs.current[panel.id];
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(panel.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPanel = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveTab(id);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#111111] text-[#F5F5F3] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-margin-desktop">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold text-[#F5F5F3] tracking-tight leading-[1.1] mb-6">
            Software built around the way your business works.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#A6A6A6] leading-relaxed">
            Four core engineering disciplines connected through one delivery model. We don't sell generic agency packages — we build, integrate, and maintain the operational software modern businesses run on.
          </p>
        </div>

        {/* Sticky Service Navigation Bar (Desktop) */}
        <div className="sticky top-[74px] z-30 hidden md:block mb-16 py-3 bg-[#111111]/90 backdrop-blur-md border-y border-[#262626]">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#777777]">
              SERVICE DIRECTORY
            </span>
            <div className="flex items-center gap-2">
              {servicePanels.map((panel) => {
                const isActive = activeTab === panel.id;
                return (
                  <button
                    key={panel.id}
                    onClick={() => scrollToPanel(panel.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                      isActive
                        ? "bg-[#315EFB] text-white shadow-md"
                        : "bg-[#181818] text-[#A6A6A6] hover:text-[#F5F5F3] hover:bg-[#202020] border border-[#303030]"
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-75">{panel.number}</span>
                    <span>{panel.title.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4 Connected Vertical Service Panels */}
        <div className="space-y-20 md:space-y-32">
          {servicePanels.map((panel, idx) => (
            <div
              key={panel.id}
              id={`service-${panel.id}`}
              ref={(el) => (sectionRefs.current[panel.id] = el)}
              className="scroll-mt-32 pt-4"
            >
              <div className="rounded-3xl bg-[#181818] border border-[#303030] p-6 sm:p-10 lg:p-12 hover:border-[#444444] transition-all shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* LEFT SIDE: Narrative & Capabilities */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Header meta */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-[#315EFB] bg-[#315EFB]/10 px-3 py-1 rounded-full border border-[#315EFB]/20">
                        {panel.number} / {panel.tag}
                      </span>
                      <span className="text-xs text-[#777777]">Verified Production Discipline</span>
                    </div>

                    {/* Prominent heading */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F5F5F3] tracking-tight leading-snug">
                      {panel.title}
                    </h3>

                    {/* Business-oriented description */}
                    <p className="text-sm sm:text-base text-[#A6A6A6] leading-relaxed">
                      {panel.summary}
                    </p>

                    {/* Capabilities List */}
                    <div className="space-y-2.5 pt-4 border-t border-[#262626]">
                      <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#777777]">
                        Key Deliverables & Scope
                      </p>
                      {panel.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CCCCCC]">
                          <span className="material-symbols-outlined text-[#315EFB] text-base shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTAs & Navigation */}
                    <div className="pt-6 border-t border-[#262626] flex flex-wrap items-center gap-4">
                      <Link
                        to={panel.serviceLink}
                        className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-md active:scale-95"
                      >
                        <span>Explore {panel.title.split(" ")[0]} Services</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>

                      <Link
                        to={panel.caseStudyLink}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#A6A6A6] hover:text-[#F5F5F3] transition-colors"
                      >
                        <span>{panel.caseStudyLabel}</span>
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT SIDE: Large, Layered Product-Interface Visual */}
                  <div className="lg:col-span-7">
                    <div className="rounded-2xl bg-[#111111] border border-[#303030] overflow-hidden shadow-2xl relative group">
                      {/* Browser Chrome Header */}
                      <div className="px-4 py-3 bg-[#161616] border-b border-[#262626] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#383838]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#383838]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#383838]" />
                        </div>
                        <div className="px-3 py-1 rounded-md bg-[#111111] border border-[#262626] text-[11px] font-mono text-[#777777] max-w-[200px] truncate">
                          https://{panel.mockupUrl}
                        </div>
                        <div className="text-[11px] font-mono text-[#555555]">PROD</div>
                      </div>

                      {/* Actual Project Screenshot */}
                      <div className="relative overflow-hidden bg-[#0A0A0A] p-2 sm:p-4">
                        <img
                          src={panel.image}
                          alt={panel.imageAlt}
                          className="w-full h-auto rounded-xl object-cover transform transition-transform duration-700 group-hover:scale-[1.01]"
                        />
                      </div>

                      {/* Bottom Visual Credibility Strip */}
                      <div className="p-3 sm:p-4 bg-[#141414] border-t border-[#262626] flex flex-wrap items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2 text-[#A6A6A6]">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="font-medium text-[#F5F5F3]">{panel.clientName}</span>
                          <span className="text-[#555555]">•</span>
                          <span className="text-[#777777]">{panel.clientType}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {panel.metrics.map((m, mIdx) => (
                            <span
                              key={mIdx}
                              className="px-2.5 py-0.5 rounded-md bg-[#202020] border border-[#303030] text-[11px] text-[#A6A6A6] hidden sm:inline-block"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
