import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";
import ScrollShowcase from "../../components/home/ScrollShowcase";
import MulticolorConversion from "../../components/home/MulticolorConversion";
import WorkCardStack from "../../components/home/WorkCardStack";

const featuredProjects = [
  {
    id: "moms-and-moon",
    title: "Moms & Moon",
    client: "Boutique Occasion Wear & Kids Fashion",
    vertical: "Shopify & E-Commerce",
    description:
      "Designed and engineered a mobile-first Shopify storefront for an occasion wear brand, featuring custom festive collection lookbooks, age/size variant filters, and domestic payment integrations.",
    deliverables: ["Custom Shopify Theme", "Mobile-First UX", "Payment Gateway Setup"],
    img: "/work-assets/moni_monu_laptop.webp",
    link: "/work/moms-and-moon",
  },
  {
    id: "skmt-trust",
    title: "SKMT Trust",
    client: "Educational & Fellowship Trust",
    vertical: "ERP & Business Systems",
    description:
      "Built a unified institutional governance portal replacing disconnected spreadsheets to manage fellowship tracks, affiliated institute records, student enrollment cohorts, and fee schedules.",
    deliverables: ["Governance ERP Portal", "Student Cohort Tracking", "Role-Based Permissions"],
    img: "/work-assets/skmt_erp_tablet.webp",
    link: "/work/skmt-trust",
  },
  {
    id: "gaurav-synthetics",
    title: "Gaurav Synthetics",
    client: "Textile & Wholesale Dealer (Ramraj Cotton)",
    vertical: "Catalog & Web Architecture",
    description:
      "Engineered a scalable digital catalog and local visibility platform for an exclusive Ramraj Cotton dealership, strengthening buyer discoverability and wholesale inquiry generation.",
    deliverables: ["Scalable Web Platform", "Product Catalog Architecture", "Inbound Inquiry Funnel"],
    img: "/work-assets/gauravsyn.webp",
    link: "/work/gaurav-synthetics",
  },
  {
    id: "helios",
    title: "Helios",
    client: "AI Creative Tools Platform",
    vertical: "Application & Mobile Platform",
    description:
      "Engineered a high-speed mobile client and prompt organization ecosystem, enabling creative teams to search, test, and execute multi-parameter AI generation prompts.",
    deliverables: ["Android Mobile Application", "Prompt Directory Engine", "Fast Local Caching"],
    img: "/work-assets/helios_mobile.webp",
    link: "/work/helios",
  },
  {
    id: "fox-wing-media",
    title: "Fox Wing Media",
    client: "PR, Media & Ingestion Agency",
    vertical: "Workflow Automation & Web",
    description:
      "Designed and developed a modern digital media architecture and publication workflow system to showcase media placements, client case studies, and editorial achievements.",
    deliverables: ["Editorial Web Architecture", "Media Placement Showcase", "Lead Generation Ingestion"],
    img: "/work-assets/foxwing_main.webp",
    link: "/work/fox-wing-media",
  },
  {
    id: "divine-enterprises",
    title: "Divine Enterprises",
    client: "Industrial Equipment & Engineering",
    vertical: "Industrial Web Platform",
    description:
      "Structured and engineered an industrial product catalog and inquiry system for industrial filtration and manufacturing machinery.",
    deliverables: ["Industrial Specification Engine", "Inquiry Routing Pipeline", "SEO & Technical Architecture"],
    img: "/work-assets/divineEnt.webp",
    link: "/work/divine-enterprises",
  },
];

const ownershipSteps = [
  {
    step: "01",
    phase: "Discover",
    title: "Understanding the Business Problem",
    desc: "We analyze your actual operational workflows, technical dependencies, and commercial goals before recommending or choosing technology.",
  },
  {
    step: "02",
    phase: "Build",
    title: "Design & Engineering",
    desc: "We build the software with clean architecture, modern React and mobile frameworks, robust APIs, and weekly staging milestone reviews.",
  },
  {
    step: "03",
    phase: "Deploy",
    title: "Testing & Production Release",
    desc: "Cross-device QA, edge-case testing, data migration, and production deployment with comprehensive admin handover sessions.",
  },
  {
    step: "04",
    phase: "Maintain",
    title: "Ongoing Engineering Ownership",
    desc: "We don't disappear at launch. We agree on explicit ongoing monitoring, maintenance windows, bug fixes, and iterative improvements.",
  },
];

const Home = () => {
  const [workViewMode, setWorkViewMode] = useState("stack");

  useSEO({
    title: "Achaia Labs — Product Engineering & Business Automation",
    description:
      "Achaia Labs builds Shopify stores, custom ERP systems, Android & mobile applications, and AI workflow automations with end-to-end delivery and ongoing engineering ownership.",
    path: "/",
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#111111] text-[#F5F5F3]">
      {/* ── SECTION 2: SCROLL-DRIVEN SERVICE SHOWCASE (MICRO1 INTELLIGENCE REPLICA) ── */}
      <ScrollShowcase />

      {/* ── SECTION 3: SELECTED REAL CLIENT WORK ── */}
      <section className="py-24 md:py-32 border-t border-[#262626] bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-semibold text-[#F5F5F3] tracking-tight">
                Selected work from production.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center p-1 rounded-full bg-[#181818] border border-[#303030] text-xs">
                <button
                  type="button"
                  onClick={() => setWorkViewMode("stack")}
                  className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                    workViewMode === "stack"
                      ? "bg-[#315EFB] text-white shadow-sm"
                      : "text-[#A6A6A6] hover:text-white"
                  }`}
                >
                  3D Stack
                </button>
                <button
                  type="button"
                  onClick={() => setWorkViewMode("grid")}
                  className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                    workViewMode === "grid"
                      ? "bg-[#315EFB] text-white shadow-sm"
                      : "text-[#A6A6A6] hover:text-white"
                  }`}
                >
                  Grid View
                </button>
              </div>

              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#315EFB] hover:text-blue-400 transition-colors px-2 py-1"
              >
                <span>View All</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {workViewMode === "stack" ? (
            <div className="py-2">
              <WorkCardStack />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={project.link}
                className="group rounded-3xl bg-[#181818] border border-[#303030] hover:border-[#444444] transition-all overflow-hidden flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="h-56 overflow-hidden bg-[#141414] relative border-b border-[#262626]">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-xl text-[#F5F5F3] group-hover:text-[#315EFB] transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#777777] mb-3">{project.client}</p>
                    <p className="text-xs sm:text-sm text-[#A6A6A6] line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#262626]">
                      {project.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2.5 py-0.5 rounded-md bg-[#202020] border border-[#2c2c2c] text-[10px] text-[#888888]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-[#262626] flex items-center justify-between text-xs font-semibold text-[#315EFB]">
                  <span>Read Case Study</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 4: MEMORABLE MULTICOLOURED CONVERSION MOMENT (MICRO1 REFERENCE C) ── */}
      <MulticolorConversion />

      {/* ── SECTION 5: END-TO-END OWNERSHIP PROCESS ── */}
      <section className="py-24 md:py-32 bg-[#111111] border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-margin-desktop">
          <div className="max-w-3xl mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#F5F5F3] tracking-tight leading-tight mb-4">
              Our differentiator: End-to-end engineering ownership.
            </h2>
            <p className="text-[#A6A6A6] text-base sm:text-lg leading-relaxed">
              We do not treat client work as a handoff of templates or unmaintained scripts. We take responsibility for understanding the business problem, building a reliable system, and remaining involved as it runs and evolves according to agreed scope.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ownershipSteps.map((step) => (
              <div key={step.step} className="rounded-3xl bg-[#181818] border border-[#303030] p-8 flex flex-col justify-between hover:border-[#444444] transition-all shadow-md">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-mono font-bold text-[#303030]">{step.step}</span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#315EFB] bg-[#315EFB]/10 px-3 py-1 rounded-full border border-[#315EFB]/20">
                      {step.phase}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-[#F5F5F3] mb-3">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#181818] border border-[#303030] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1 max-w-2xl">
              <p className="text-sm font-semibold text-[#F5F5F3]">
                Transparent SLA & Maintenance Arrangements
              </p>
              <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                Support, bug fixes, integration updates, and performance monitoring terms are explicitly agreed prior to launch. We don't disappear after deployment.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all shrink-0 shadow-md active:scale-95"
            >
              <span>Discuss Project Scope</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY ACHAIA (PRACTICAL ENGINEERING PRINCIPLES) ── */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 md:px-margin-desktop">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#F5F5F3] tracking-tight mb-4">
            How we approach engineering.
          </h2>
          <p className="text-[#A6A6A6] text-base sm:text-lg leading-relaxed">
            We avoid generic agency hype. Our engineering principles are grounded in what actually keeps production systems reliable, cost-effective, and easy to maintain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl bg-[#181818] border border-[#303030] p-8 hover:border-[#444444] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#202020] border border-[#303030] text-[#315EFB] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-2xl">target</span>
            </div>
            <h3 className="font-semibold text-xl text-[#F5F5F3] mb-3">
              Understand the business problem first
            </h3>
            <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed">
              We never choose a tech stack or framework before understanding who uses the system, what data must flow, and where current bottlenecks exist. Technology is a means to an operational outcome.
            </p>
          </div>

          <div className="rounded-3xl bg-[#181818] border border-[#303030] p-8 hover:border-[#444444] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#202020] border border-[#303030] text-[#315EFB] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
            </div>
            <h3 className="font-semibold text-xl text-[#F5F5F3] mb-3">
              Built for real implementation, not just demos
            </h3>
            <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed">
              Pretty mockups that break during peak traffic or fail when network connectivity drops are useless. We engineer database constraints, resilient offline caching, and graceful failure fallbacks.
            </p>
          </div>

          <div className="rounded-3xl bg-[#181818] border border-[#303030] p-8 hover:border-[#444444] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#202020] border border-[#303030] text-[#315EFB] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-2xl">handshake</span>
            </div>
            <h3 className="font-semibold text-xl text-[#F5F5F3] mb-3">
              Clear commitments and defined responsibilities
            </h3>
            <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed">
              We communicate transparently regarding what is in scope, what requires third-party API dependencies, and how post-launch support is structured. Zero surprise invoices or abandoned codebases.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
