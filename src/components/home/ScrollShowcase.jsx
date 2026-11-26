import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/**
 * TUNABLE CONSTANTS (matching micro1.ai Intelligence stage)
 * - SCROLL_LENGTH_PER_ITEM: Height in vh consumed per item (e.g. 85vh)
 * - TRANSITION_DURATION: 600ms
 * - TRANSITION_EASING: cubic-bezier(0.16, 1, 0.3, 1)
 * - INACTIVE_OPACITY: 0.28
 * - ACTIVE_OPACITY: 1.0
 * - MASK_STOPS: transparent 0%, black 16%, black 84%, transparent 100%
 */

export const defaultShowcaseItems = [
  {
    id: "shopify",
    number: "01",
    tag: "COMMERCE",
    title: "Shopify & E-Commerce Systems",
    description:
      "We design and engineer high-converting Shopify storefronts connected to your inventory, checkout flows, payment gateways, and shipping logistics from day one.",
    href: "/services/shopify",
    caseStudyHref: "/work/moms-and-moon",
    caseStudyName: "Moms & Moon",
    image: "/showcase/shopify_scroll_test.webp",
    imageAlt: "Moms & Moon Shopify Storefront engineered by Achaia Labs",
    client: "Moms & Moon (Boutique Kids Fashion)",
    metrics: ["Custom Lookbook UX", "Payment Gateway Setup", "Mobile-First Checkout"],
  },
  {
    id: "erp",
    number: "02",
    tag: "OPERATIONS",
    title: "ERP & Business Systems",
    description:
      "We replace fragile spreadsheets and disconnected SaaS tools with centralized internal web software — customized to your team's exact administrative, inventory, and financial workflows.",
    href: "/services/erp",
    caseStudyHref: "/work/skmt-trust",
    caseStudyName: "SKMT Trust Governance",
    image: "/showcase/skmt_scroll.webp",
    imageAlt: "SKMT Trust Governance ERP Portal engineered by Achaia Labs",
    client: "SKMT Trust (Educational Governance)",
    metrics: ["Student Cohorts", "Role-Based Security", "Automated Ledgers"],
  },
  {
    id: "apps",
    number: "03",
    tag: "MOBILE & APPLICATION",
    title: "Application Development",
    description:
      "We build production Android and cross-platform applications engineered for responsive speed, battery efficiency, offline caching resilience, and long-term OS maintenance.",
    href: "/services/apps",
    caseStudyHref: "/work/helios",
    caseStudyName: "Helios Platform",
    image: "/showcase/helios.webp",
    imageAlt: "Helios Mobile Application engineered by Achaia Labs",
    client: "Helios (Creative Prompt Engine)",
    metrics: ["Sub-50ms Search", "Offline Local Cache", "Play Store Release"],
  },
  {
    id: "ai-automation",
    number: "04",
    tag: "AI & AUTOMATION",
    title: "AI & Workflow Automation",
    description:
      "We eliminate manual operational bottlenecks by connecting APIs, document extraction models, and automated business logic with reliable human-in-the-loop exception handling.",
    href: "/services/ai-automation",
    caseStudyHref: "/work/fox-wing-media",
    caseStudyName: "Fox Wing Media",
    image: "/showcase/ai_automation_scroll.webp",
    imageAlt: "AI & Workflow Automation Architecture engineered by Achaia Labs",
    client: "AI Pipelines & Orchestration",
    metrics: ["API Pipelines", "Deterministic Validation", "Zero Lost Data"],
  },
];

const ScrollShowcase = ({
  badge = null,
  heading = (
    <>
      We {" "}
      <span className="underline decoration-[#315EFB] underline-offset-[12px] decoration-2 font-medium">
        <i>build Systems</i>
      </span>{" "}
      around the way your business works.
    </>
  ),
  subtitle = "Four core engineering disciplines connected through one delivery model. We don't sell generic agency packages — we build, integrate, and maintain the operational software modern businesses run on.",
  items = defaultShowcaseItems,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRef = useRef(null);

  // Detect mobile screens (< 900px) to switch from sticky pinning to stacked presentation
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll listener for sticky pinning on desktop
  useEffect(() => {
    if (isMobile) return;

    let animationFrameId;

    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const maxScroll = rect.height - window.innerHeight;

      if (maxScroll <= 0) return;

      // rect.top <= 0 means section has entered sticky viewport
      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / maxScroll, 0), 1);

      // Determine active item segment
      const segmentSize = 1 / items.length;
      const index = Math.min(
        Math.floor(progress / segmentSize),
        items.length - 1
      );

      setActiveIndex(index);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [items.length, isMobile]);

  // Click handler to smooth scroll directly to an item's segment
  const scrollToItem = (index) => {
    if (!wrapperRef.current || isMobile) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const wrapperTop = window.scrollY + rect.top;
    const maxScroll = rect.height - window.innerHeight;
    const targetScroll = wrapperTop + ((index + 0.4) / items.length) * maxScroll;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  // Approximate item slot height for precise optical centering in the left column
  const itemSlotHeight = 190;

  return (
    <section className="bg-[#111111] text-[#F5F5F3] relative border-t border-[#262626]">
      {/* ── DESKTOP PINNED EXPERIENCE (>= 900px) ── */}
      {!isMobile ? (
        <div
          ref={wrapperRef}
          style={{ height: `${items.length * 140 + 40}vh` }}
          className="relative w-full"
        >
          {/* Sticky Viewport Stage */}
          <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-8 md:py-12 px-6 md:px-margin-desktop max-w-7xl mx-auto overflow-hidden">
            {/* Header Area */}
            <div className="text-center max-w-3xl mx-auto mb-4 shrink-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F5F5F3] tracking-tight leading-[1.12] mb-2.5">
                {heading}
              </h2>
              <p className="text-sm sm:text-base text-[#A6A6A6] max-w-2xl mx-auto leading-relaxed line-clamp-2">
                {subtitle}
              </p>
            </div>

            {/* Two-Column Stage */}
            <div className="grid grid-cols-12 gap-8 lg:gap-14 items-center flex-1 min-h-0">
              {/* LEFT COLUMN: ~42% width, translating focus list with generous spacing and mask-image fade */}
              <div className="col-span-5 h-[420px] relative overflow-hidden flex flex-col justify-center">
                {/* Mask-Image gradient container for clean item isolation */}
                <div
                  className="w-full h-full relative"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, transparent 0%, transparent 6%, black 22%, black 72%, transparent 90%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, transparent 0%, transparent 6%, black 22%, black 72%, transparent 90%, transparent 100%)",
                  }}
                >
                  <div
                    className="space-y-16 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      transform: `translateY(calc(110px - ${activeIndex * itemSlotHeight}px))`,
                    }}
                  >
                    {items.map((item, idx) => {
                      const isActive = idx === activeIndex;

                      return (
                        <div
                          key={item.id || idx}
                          onClick={() => scrollToItem(idx)}
                          style={{ minHeight: "130px" }}
                          className={`cursor-pointer transition-all duration-700 py-3 flex flex-col justify-center group ${
                            isActive
                              ? "opacity-100 scale-100"
                              : "opacity-20 hover:opacity-40 scale-[0.97]"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 mb-2">
                            <span
                              className={`font-mono text-xs font-bold px-2 py-0.5 rounded transition-colors ${
                                isActive
                                  ? "bg-[#315EFB]/15 text-[#315EFB] border border-[#315EFB]/30"
                                  : "text-[#555555]"
                              }`}
                            >
                              {item.number || `0${idx + 1}`}
                            </span>
                            <Link
                              to={item.href || "#"}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 text-xl sm:text-2xl font-semibold text-[#F5F5F3] group-hover:text-white transition-colors"
                            >
                              <span>{item.title}</span>
                              <span className="material-symbols-outlined text-lg text-[#315EFB] group-hover:translate-x-1.5 transition-transform">
                                chevron_right
                              </span>
                            </Link>
                          </div>

                          {/* Description (visible only on active item with smooth expansion) */}
                          <div
                            className={`transition-all duration-700 overflow-hidden ${
                              isActive
                                ? "max-h-36 opacity-100 mt-2.5"
                                : "max-h-0 opacity-0 pointer-events-none"
                            }`}
                          >
                            <p className="text-sm text-[#A6A6A6] leading-relaxed max-w-md">
                              {item.description}
                            </p>

                            {/* Service & Case Study links */}
                            <div className="flex items-center gap-4 mt-3 text-xs font-semibold">
                              <Link
                                to={item.href}
                                onClick={(e) => e.stopPropagation()}
                                className="text-[#315EFB] hover:underline inline-flex items-center gap-1"
                              >
                                <span>Explore Discipline</span>
                                <span className="material-symbols-outlined text-xs">arrow_forward</span>
                              </Link>
                              {item.caseStudyHref && (
                                <Link
                                  to={item.caseStudyHref}
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-[#777777] hover:text-[#F5F5F3] transition-colors"
                                >
                                  Case Study: {item.caseStudyName}
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: ~58% width, stacked 3D mockup visual area */}
              <div className="col-span-7 h-[430px] lg:h-[500px] relative flex items-center justify-center">
                {/* Background subtle radial glow */}
                <div
                  className="absolute inset-0 pointer-events-none -z-0 opacity-40"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(49, 94, 251, 0.12) 0%, transparent 65%)",
                  }}
                />

                {items.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  const isPast = idx < activeIndex;

                  return (
                    <div
                      key={item.id || idx}
                      className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive
                          ? "translateY(0px) scale(1)"
                          : `translateY(${isPast ? -28 : 28}px) scale(0.95)`,
                        pointerEvents: isActive ? "auto" : "none",
                        zIndex: isActive ? 10 : 0,
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        className="max-h-[380px] lg:max-h-[460px] w-auto max-w-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Progress Indicator Bar */}
            <div className="flex items-center justify-center gap-3 pt-4 shrink-0">
              {items.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToItem(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === activeIndex
                      ? "w-10 bg-[#315EFB]"
                      : "w-3 bg-[#303030] hover:bg-[#555555]"
                  }`}
                  aria-label={`Jump to ${item.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* ── MOBILE / TABLET STACKED PRESENTATION (< 900px) ── */
        <div className="py-16 px-4 sm:px-6 max-w-3xl mx-auto space-y-12">
          {/* Header Area */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#F5F5F3] tracking-tight leading-tight mb-3">
              {heading}
            </h2>
            <p className="text-sm text-[#A6A6A6] leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Stacked Cards */}
          <div className="space-y-10">
            {items.map((item, idx) => (
              <div
                key={item.id || idx}
                className="rounded-3xl bg-[#181818] border border-[#303030] p-6 shadow-xl space-y-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#315EFB] bg-[#315EFB]/10 px-2.5 py-1 rounded border border-[#315EFB]/20">
                    {item.number || `0${idx + 1}`} / {item.tag}
                  </span>
                  {item.caseStudyHref && (
                    <Link
                      to={item.caseStudyHref}
                      className="text-xs text-[#777777] hover:text-[#F5F5F3] transition-colors"
                    >
                      Case Study →
                    </Link>
                  )}
                </div>

                <div>
                  <Link
                    to={item.href || "#"}
                    className="text-2xl font-semibold text-[#F5F5F3] hover:text-[#315EFB] transition-colors flex items-center justify-between group"
                  >
                    <span>{item.title}</span>
                    <span className="material-symbols-outlined text-lg text-[#315EFB] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                  <p className="text-sm text-[#A6A6A6] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Mockup Image */}
                <div className="flex items-center justify-center overflow-hidden py-3">
                  <img
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    className="max-h-[260px] w-auto max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#315EFB] hover:underline"
                  >
                    <span>Explore Service</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </Link>
                  {item.client && (
                    <span className="text-[11px] text-[#777777] font-mono">
                      {item.client}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ScrollShowcase;
