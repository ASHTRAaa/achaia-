import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";
import MulticolorConversion from "../../components/home/MulticolorConversion";
import "./AboutUs.css";

const AboutUs = () => {
  useSEO({
    title: "About Achaia Labs — Product Engineering & Automation Team",
    description:
      "Learn how Achaia Labs operates — a focused engineering team delivering high-ownership Shopify stores, custom ERPs, mobile apps, and AI automations directly with clients.",
    path: "/about",
  });

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const companyFacts = [
    {
      label: "Team",
      value: "4-person",
    },
    {
      label: "Client Model",
      value: "Direct, frontfoot collaboration",
    },
    {
      label: "Based in",
      value: "Kolkata, West Bengal, India",
    },
    {
      label: "Works with",
      value: "Businesses worldwide",
    },
  ];

  const capabilities = [
    {
      title: "Shopify & E-Commerce",
      desc: "Custom Liquid storefronts, mobile-first conversion UX, regional payment & logistics sync, and scalable digital catalogs.",
      href: "/services/shopify",
    },
    {
      title: "ERP & Business Systems",
      desc: "Centralized governance portals, role-based dashboards, and relational backends replacing disconnected spreadsheets.",
      href: "/services/erp",
    },
    {
      title: "Application Development",
      desc: "Production Android and cross-platform applications engineered for offline resilience, local caching, and responsive speed.",
      href: "/services/apps",
    },
    {
      title: "AI & Workflow Automation",
      desc: "End-to-end API pipelines, document extraction, and human-in-the-loop automations built with Python, n8n, and LLMs.",
      href: "/services/ai-automation",
    },
  ];

  const industries = [
    { label: "Retail, D2C & E-Commerce", icon: "storefront" },
    { label: "Education, Trusts & Non-Profits", icon: "school" },
    { label: "Wholesale, Textiles & B2B Supply", icon: "inventory_2" },
    { label: "Media, Agencies & Professional Services", icon: "campaign" },
  ];

  const techStack = [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Supabase",
    "Shopify Liquid",
    "Android / Kotlin",
    "Tailwind CSS",
    "LangChain",
    "LangGraph",
    "Claude",
    "n8n",
    "Zapier",
    "AWS",
    "GCP",
  ];

  const howWeWork = [
    {
      title: "High engineering ownership",
      desc: "We don't pass your project down a chain of account managers or junior contractors. The engineers architecting your system own it from discovery to production.",
    },
    {
      title: "Direct, frontfoot collaboration",
      desc: "You communicate directly with the builders every week — fast decisions, clear trade-offs, and proactive problem solving without layers of bureaucracy.",
    },
    {
      title: "Fixed scope, clear milestones",
      desc: "We align on deliverables, technical architecture, and pricing before work starts, backed by working staging builds you can test every week.",
    },
    {
      title: "You own the code & systems",
      desc: "Everything lives in your repositories and cloud accounts from week one. No proprietary lock-in, and clear ongoing maintenance agreements post-launch.",
    },
  ];

  const timelineSteps = [
    {
      title: "Discovery & Problem Definition",
      desc: "We analyze operational bottlenecks, existing data silos, and user workflows before recommending or choosing technology.",
      icon: "search",
    },
    {
      title: "Architecture & Solution Strategy",
      desc: "Defining the technical schema, data model, APIs, framework selection, and clean responsive UI architecture.",
      icon: "architecture",
    },
    {
      title: "Precision Build & Iteration",
      desc: "Engineering high-performance web, mobile, and cloud software with weekly staging milestones and direct feedback loops.",
      icon: "code",
    },
    {
      title: "Deployment & Ongoing Ownership",
      desc: "Production release, administrative team handover, and agreed ongoing maintenance, monitoring, and iterative improvements.",
      icon: "handshake",
    },
  ];

  return (
    <div className="font-body-md text-[#F5F5F3] bg-[#111111] min-h-screen">
      {/* ── SECTION 1 — HERO ── */}
      <section className="pt-16 pb-14 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <span className="text-[#315EFB] font-mono text-xs uppercase tracking-widest block font-semibold">
            About Achaia Labs
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#F5F5F3] tracking-tight leading-[1.1]">
            Engineering Software around real business problems.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#A6A6A6] leading-relaxed">
            Most digital projects falter because they solve imagined problems with bloated layers. At Achaia Labs, we build, integrate, deploy, and maintain software systems designed around how businesses actually operate.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-8 py-4 rounded-full font-semibold text-sm transition-all shadow-md active:scale-95"
            >
              <span>Discuss a Project</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 bg-[#181818] hover:bg-[#202020] border border-[#303030] hover:border-[#444444] text-[#F5F5F3] px-7 py-4 rounded-full font-semibold text-sm transition-all"
            >
              <span>Explore Our Portfolio</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — COMPANY FACTS ── */}
      <section className="pb-12 md:pb-16 px-4 sm:px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#161616] border border-[#2A2A2A] p-7 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#F5F5F3] mb-8 tracking-tight">
            Company facts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyFacts.map((fact) => (
              <div key={fact.label} className="space-y-1.5">
                <p className="text-xs font-mono uppercase tracking-wider text-[#777777]">
                  {fact.label}
                </p>
                <p className="text-base sm:text-lg font-semibold text-[#F5F5F3]">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — WHAT WE DO ── */}
      <section className="pb-12 md:pb-16 px-4 sm:px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#161616] border border-[#2A2A2A] p-7 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#F5F5F3] mb-8 tracking-tight">
            What we do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-2xl bg-[#1C1C1F] border border-[#2D2D32] hover:border-[#3D3D45] p-6 sm:p-7 flex flex-col justify-between transition-colors"
              >
                <div className="space-y-2.5 mb-5">
                  <h3 className="text-base sm:text-lg font-semibold text-[#F5F5F3]">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
                <div>
                  <Link
                    to={cap.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#F5F5F3] hover:text-[#315EFB] underline underline-offset-4 decoration-[#444444] hover:decoration-[#315EFB] transition-colors"
                  >
                    <span>See the work</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — INDUSTRIES & TECHNOLOGY ── */}
      <section className="pb-12 md:pb-16 px-4 sm:px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#161616] border border-[#2A2A2A] p-7 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Industries */}
            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#F5F5F3] tracking-tight">
                Industries
              </h2>
              <ul className="space-y-3.5">
                {industries.map((ind) => (
                  <li key={ind.label} className="flex items-center gap-3 text-sm text-[#A6A6A6]">
                    <span className="material-symbols-outlined text-lg text-[#777777]">
                      {ind.icon}
                    </span>
                    <span>{ind.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#F5F5F3] tracking-tight">
                Technology
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full bg-[#1C1C1F] border border-[#2E2E34] text-xs sm:text-sm text-[#CCCCCC] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — HOW WE WORK ── */}
      <section className="pb-16 md:pb-24 px-4 sm:px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#161616] border border-[#2A2A2A] p-7 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#F5F5F3] mb-8 tracking-tight">
            How we work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {howWeWork.map((item) => (
              <div key={item.title} className="space-y-2">
                <h3 className="text-base font-semibold text-[#F5F5F3]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — 4-PHASE DELIVERY JOURNEY ── */}
      <section className="py-16 md:py-24 bg-[#141414] border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#315EFB] font-mono text-xs uppercase tracking-widest block font-semibold">
                Delivery Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#F5F5F3] leading-tight">
                Direct ownership. <br />From discovery to production.
              </h2>
              <div className="space-y-4 text-[#A6A6A6] leading-relaxed text-sm sm:text-base">
                <p>
                  Every engagement is led by a dedicated cross-functional pod of builders — product engineers, backend architects, and automation specialists working side-by-side with your operators.
                </p>
                <div className="p-5 rounded-2xl bg-[#181818] border border-[#303030] border-l-4 border-l-[#315EFB] space-y-2">
                  <p className="font-semibold text-[#F5F5F3] text-sm">What this means for you:</p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#CCCCCC]">
                    <li>• Zero handoffs to unvetted third-party freelancers</li>
                    <li>• Weekly staging demos with transparent progress</li>
                    <li>• Long-term SLA and maintenance clarity agreed upfront</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Timeline */}
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-mono font-semibold text-[#777777] uppercase tracking-wider mb-2">
                Our 4-Phase Delivery Journey
              </p>
              <div className="space-y-3">
                {timelineSteps.map((step, idx) => (
                  <div
                    key={step.title}
                    onMouseEnter={() => setActiveStep(idx)}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                      idx === activeStep
                        ? "border-[#315EFB] shadow-md bg-[#202020]"
                        : "border-[#303030] bg-[#181818] hover:border-[#444444]"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          idx === activeStep ? "bg-[#315EFB] text-white" : "bg-[#252525] text-[#A6A6A6]"
                        }`}
                      >
                        <span className="material-symbols-outlined text-lg">{step.icon}</span>
                      </div>
                      <h3 className="font-semibold text-base text-[#F5F5F3]">{step.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#A6A6A6] pl-11 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 — CONVERSION CTA ── */}
      <MulticolorConversion
        title="Ready to partner on your next software build?"
        description="Let's evaluate your operational requirements and engineer a solution designed for dependable long-term performance."
        primaryCtaText="Discuss a Project"
        primaryCtaLink="/contact"
        secondaryCtaText="Scope & Estimate Cost"
        secondaryCtaLink="/cyp"
      />
    </div>
  );
};

export default AboutUs;
