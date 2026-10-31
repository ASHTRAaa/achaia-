import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";

const verticals = [
  {
    id: "shopify",
    number: "01",
    label: "COMMERCE",
    icon: "storefront",
    title: "Shopify & E-Commerce",
    summary:
      "Custom Shopify stores built around your real commerce operations — tailored storefront design, catalog architecture, checkout conversion, payment gateways, and logistics integrations.",
    deliverables: [
      "Custom storefront & lookbook design",
      "Catalog, variant & collection matrices",
      "Checkout optimization & gateway setup",
      "Inventory & ERP synchronization",
    ],
    href: "/services/shopify",
    caseStudyHref: "/work/moms-and-moon",
    caseStudyName: "Moms & Moon",
  },
  {
    id: "erp",
    number: "02",
    label: "OPERATIONS",
    icon: "account_tree",
    title: "ERP & Business Systems",
    summary:
      "Purpose-built internal software that replaces fragile spreadsheets with centralized, real-time systems — executive dashboards, inventory tracking, role-based access, and audit trails.",
    deliverables: [
      "Custom operational workflow mapping",
      "Role-based executive & staff portals",
      "Inventory & procurement management",
      "Automated invoicing & financial logs",
    ],
    href: "/services/erp",
    caseStudyHref: "/work/skmt-trust",
    caseStudyName: "SKMT Trust ERP",
  },
  {
    id: "apps",
    number: "03",
    label: "MOBILE",
    icon: "smartphone",
    title: "Application Development",
    summary:
      "Production Android applications and modern web platforms built for stability, responsive performance, reliable offline caching, and seamless Google Play release.",
    deliverables: [
      "Product discovery & native UX/UI",
      "Android Kotlin / React Native engineering",
      "Secure REST APIs & offline sync",
      "Play Store release & OS maintenance",
    ],
    href: "/services/apps",
    caseStudyHref: "/work/helios",
    caseStudyName: "Helios App",
  },
  {
    id: "ai",
    number: "04",
    label: "AUTOMATION",
    icon: "smart_toy",
    title: "AI & Workflow Automation",
    summary:
      "Practical automation systems targeting repetitive data handoffs and document workflows — API pipelines, model-assisted extraction, and human-in-the-loop exception handling.",
    deliverables: [
      "Workflow discovery & bottleneck analysis",
      "Multi-system API integrations",
      "Document parsing & ticket triage",
      "Continuous health monitoring & tuning",
    ],
    href: "/services/ai-automation",
    caseStudyHref: "/work/fox-wing-media",
    caseStudyName: "Fox Wing Media",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover & Scope",
    desc: "We analyze your actual business bottlenecks, technical constraints, and user needs before writing a line of code. You receive a clear, fixed technical scope.",
  },
  {
    step: "02",
    title: "Design & Engineer",
    desc: "We design clean interfaces and build reliable software using modern React, mobile, cloud, and database architectures with weekly staging milestones.",
  },
  {
    step: "03",
    title: "Deploy & Validate",
    desc: "Rigorous QA testing, data migration, security checks, and smooth production deployment with comprehensive administrative handover.",
  },
  {
    step: "04",
    title: "Maintain & Improve",
    desc: "We remain your engineering partner after launch. We agree on explicit ongoing monitoring, maintenance windows, and iterative feature enhancements.",
  },
];

const Services = () => {
  useSEO({
    title: "Our Services — Shopify, ERP Systems, Apps & AI Automation",
    description:
      "Explore Achaia Labs' core engineering services: Shopify e-commerce stores, custom ERP software, Android mobile applications, and AI workflow automations with end-to-end delivery.",
    path: "/services",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-body-md text-body-md text-[#F5F5F3] bg-[#111111]">
      {/* Page Hero */}
      <section className="pt-16 pb-14 sm:pt-20 md:pt-24 px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#F5F5F3] mb-6 leading-tight font-semibold tracking-tight">
            Technology for the work your business needs to get done.
          </h1>
          <p className="text-base sm:text-lg text-[#A6A6A6] max-w-2xl leading-relaxed mb-8">
            We partner with ambitious founders, operational leaders, and growing companies to build, deploy, and maintain software systems that serve real commercial needs.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-8 py-4 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <span>Discuss a Project</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 border border-[#303030] hover:border-[#444444] bg-[#181818] hover:bg-[#202020] text-[#F5F5F3] px-7 py-4 rounded-full text-sm font-semibold transition-all"
            >
              <span>Explore Our Portfolio</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Verticals Grid */}
      <section className="py-16 md:py-24 bg-[#141414] border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop">
          <div className="max-w-2xl mb-16">
            <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block mb-3">
              Four Core Verticals
            </span>
            <h2 className="text-3xl sm:text-4xl text-[#F5F5F3] font-semibold mb-4">
              Specialized engineering across four defined disciplines.
            </h2>
            <p className="text-[#A6A6A6] text-base sm:text-lg leading-relaxed">
              We have delivered client work in all four areas. Explore each offering to see our deliverables, technical approach, and verified case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verticals.map((v) => (
              <div key={v.id} className="rounded-3xl bg-[#181818] p-8 sm:p-10 flex flex-col justify-between border border-[#303030] hover:border-[#444444] transition-all shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#315EFB] tracking-wider uppercase bg-[#315EFB]/10 border border-[#315EFB]/20 px-3 py-1 rounded-full">
                      Vertical {v.number} • {v.label}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#202020] text-[#315EFB] border border-[#303030] flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">{v.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#F5F5F3] mb-3">
                    {v.title}
                  </h3>
                  <p className="text-[#A6A6A6] text-sm sm:text-base leading-relaxed mb-6">
                    {v.summary}
                  </p>

                  <div className="space-y-2 mb-8 border-t border-[#262626] pt-6">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#777777] mb-3">Key Deliverables</p>
                    {v.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#CCCCCC]">
                        <span className="material-symbols-outlined text-[#315EFB] text-base">check_circle</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#262626]">
                  <Link
                    to={v.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#315EFB] hover:text-blue-400 transition-colors"
                  >
                    <span>Explore Service Details</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                  <Link
                    to={v.caseStudyHref}
                    className="text-xs font-medium text-[#777777] hover:text-[#F5F5F3] transition-colors"
                  >
                    View {v.caseStudyName} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-End Ownership Delivery Model */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-margin-desktop">
        <div className="max-w-3xl mb-16">
          <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block mb-3">
            Our Differentiator
          </span>
          <h2 className="text-3xl sm:text-4xl text-[#F5F5F3] font-semibold mb-4">
            End-to-end engineering ownership.
          </h2>
          <p className="text-[#A6A6A6] text-base sm:text-lg leading-relaxed">
            We are not a vendor who writes code and disappears. We take accountability for understanding your operational problem, architecting the solution, deploying it cleanly, and supporting it as your business evolves according to our agreed scope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((p, i) => (
            <div key={i} className="rounded-3xl bg-[#181818] border border-[#303030] p-8 flex flex-col justify-between hover:border-[#444444] transition-all">
              <div>
                <span className="text-3xl font-mono font-bold text-[#333333] block mb-4">{p.step}</span>
                <h3 className="font-semibold text-lg text-[#F5F5F3] mb-2">{p.title}</h3>
                <p className="text-[#A6A6A6] text-xs sm:text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-[#161616] border-t border-[#262626] text-[#F5F5F3] text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#F5F5F3]">
            Have a project or business system to discuss?
          </h2>
          <p className="text-[#A6A6A6] text-base sm:text-lg leading-relaxed">
            Reach out to our engineering team. We'll review your requirements, answer technical questions, and suggest a clear path forward.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-9 py-4 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <span>Start a Conversation</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
