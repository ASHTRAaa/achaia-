import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";

const deliverables = [
  {
    icon: "account_tree",
    title: "Workflow Discovery & Scoping",
    desc: "We analyze your recurring operational bottlenecks, manual data handoffs, and repetitive human tasks to identify where automation delivers reliable ROI without breaking existing operations.",
  },
  {
    icon: "hub",
    title: "API & System Integration",
    desc: "We connect your internal databases, CRMs, ERPs, communication tools (Slack, WhatsApp, Email), and external SaaS tools into cohesive automated pipelines.",
  },
  {
    icon: "psychology",
    title: "Model-Assisted Intelligent Processing",
    desc: "Integration of modern language and vision models for document extraction, intelligent categorization, structured data extraction, and customer inquiry triage.",
  },
  {
    icon: "verified_user",
    title: "Human-in-the-Loop & Fallback Logic",
    desc: "Every critical automation is designed with threshold checks and graceful approval gates. Unclear cases or high-value decisions are routed to human operators with full context.",
  },
  {
    icon: "smart_toy",
    title: "Task-Specific Automation Agents",
    desc: "Purpose-built multi-step agents that perform specific data reconciliation, research summarization, or report generation tasks with deterministic boundaries.",
  },
  {
    icon: "security",
    title: "Data Privacy & Security Controls",
    desc: "Zero-data-retention model usage, encrypted credential vaults, role-based access, and on-premise/VPC deployment options to safeguard sensitive proprietary business data.",
  },
  {
    icon: "monitoring",
    title: "Execution Logs & Health Monitoring",
    desc: "Real-time error alerting, audit trails, execution dashboards, and latency monitoring so your operations team always has full visibility into what ran and when.",
  },
  {
    icon: "build_circle",
    title: "Agreed Maintenance & Prompt Tuning",
    desc: "Models and APIs evolve. We agree on ongoing monitoring, model version updates, edge-case tuning, and integration maintenance as part of your delivery agreement.",
  },
];

const useCases = [
  {
    title: "Inbound Lead & Ticket Triage",
    desc: "Automatically parse incoming emails, RFQs, or support tickets, extract buyer intent and product specifications, enrich with CRM data, and route directly to the right account manager with a suggested draft.",
  },
  {
    title: "Invoice & Procurement Data Extraction",
    desc: "Extract tabular items, tax rates, vendor identifiers, and line-item prices from scanned PDFs and unstructured emails directly into your ERP or accounting database without manual data entry.",
  },
  {
    title: "Operational Reconciliation & Reporting",
    desc: "Automate daily cross-checks between Shopify orders, payment gateways, warehouse inventory, and courier tracking numbers, flagging mismatches immediately.",
  },
  {
    title: "AI Creative & Prompt Management",
    desc: "Streamline marketing and design workflows with structured prompt libraries, multi-parameter generation pipelines, and brand-safe content verification (as delivered in our Helios platform).",
  },
];

const AiAutomation = () => {
  useSEO({
    title: "AI & Workflow Automation Systems",
    description:
      "Achaia Labs builds practical AI and workflow automation systems for businesses. API integrations, document extraction, human-in-the-loop agents, and agreed maintenance.",
    path: "/services/ai-automation",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-body-md text-body-md text-[#F5F5F3] bg-[#111111]">
      {/* Hero */}
      <section className="pt-16 pb-14 sm:pt-20 md:pt-24 px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/services" className="text-[#777777] hover:text-[#F5F5F3] font-mono text-xs uppercase tracking-wider transition-colors">
              Services
            </Link>
            <span className="text-[#444444]">/</span>
            <span className="text-[#315EFB] font-mono text-xs uppercase tracking-wider font-semibold">AI & Workflow Automation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#F5F5F3] mb-6 leading-tight font-semibold tracking-tight">
            Practical AI automation built around real business operations.
          </h1>
          <p className="text-base sm:text-lg text-[#A6A6A6] max-w-2xl leading-relaxed mb-8">
            We don't sell speculative AI hype. We automate specific, time-consuming business workflows using robust API integrations, intelligent models, and deterministic validation where reliability matters most.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-8 py-4 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <span>Discuss Your Workflow</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link
              to="/work/helios"
              className="inline-flex items-center gap-2 border border-[#303030] hover:border-[#444444] bg-[#181818] hover:bg-[#202020] text-[#F5F5F3] px-7 py-4 rounded-full text-sm font-semibold transition-all"
            >
              <span>View Helios Case Study</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Realistic Philosophy Section */}
      <section className="py-16 md:py-20 bg-[#141414] border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop">
          <div className="max-w-3xl mb-12">
            <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block mb-3">Our Engineering Approach</span>
            <h2 className="text-3xl sm:text-4xl text-[#F5F5F3] font-semibold mb-4 leading-snug">
              Where AI makes sense — and where deterministic code is better.
            </h2>
            <p className="text-[#A6A6A6] text-base sm:text-lg leading-relaxed">
              Autonomous agents that promise to run entire companies sound exciting, but real businesses require predictability, accountability, and zero unforced hallucinations. We design hybrid systems: standard code handles business rules and database transactions, while AI handles unstructured text, document understanding, and smart triage with human oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((uc, i) => (
              <div key={i} className="rounded-3xl p-8 bg-[#181818] border border-[#303030] shadow-md">
                <span className="text-xs font-mono font-bold text-[#315EFB] tracking-wider uppercase block mb-2">Use Case 0{i + 1}</span>
                <h3 className="text-xl font-semibold text-[#F5F5F3] mb-3">{uc.title}</h3>
                <p className="text-[#A6A6A6] text-sm sm:text-base leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-margin-desktop">
        <div className="max-w-2xl mb-16">
          <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block mb-3">What We Deliver</span>
          <h2 className="text-3xl sm:text-4xl text-[#F5F5F3] font-semibold mb-4">
            End-to-end automation engineering.
          </h2>
          <p className="text-[#A6A6A6] text-base sm:text-lg leading-relaxed">
            From initial API mapping to error-handling thresholds and production monitoring, we build software that runs dependably in your live operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((d, i) => (
            <div key={i} className="rounded-3xl bg-[#181818] border border-[#303030] hover:border-[#444444] p-7 flex flex-col justify-between shadow-md transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#202020] border border-[#303030] text-[#315EFB] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">{d.icon}</span>
                </div>
                <h3 className="font-semibold text-lg text-[#F5F5F3] mb-3">{d.title}</h3>
                <p className="text-[#A6A6A6] text-xs sm:text-sm leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Evidence Card */}
      <section className="py-16 bg-[#161616] border-y border-[#262626] text-[#F5F5F3]">
        <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block mb-3">Verified Project Evidence</span>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-[#F5F5F3]">
                Helios — AI Prompt & Workflow Platform
              </h2>
              <p className="text-[#A6A6A6] text-base leading-relaxed mb-6">
                To demonstrate our AI engineering capabilities, we designed and built Helios: a production platform and Android mobile app serving creative professionals, prompt developers, and content teams with structured prompt execution and multi-parameter management.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="px-3 py-1 rounded-full bg-[#202020] border border-[#303030] text-xs font-medium text-[#CCCCCC]">AI Prompt Library</span>
                <span className="px-3 py-1 rounded-full bg-[#202020] border border-[#303030] text-xs font-medium text-[#CCCCCC]">Android Application</span>
                <span className="px-3 py-1 rounded-full bg-[#202020] border border-[#303030] text-xs font-medium text-[#CCCCCC]">REST API Integration</span>
              </div>
              <Link
                to="/work/helios"
                className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-7 py-3.5 rounded-full text-xs font-bold transition-all shadow-md active:scale-95"
              >
                <span>Read Case Study</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="rounded-3xl p-3 bg-[#181818] border border-[#303030] shadow-2xl max-w-sm overflow-hidden">
                <div className="rounded-2xl overflow-hidden bg-black">
                  <img
                    src="/work-assets/helios_mobile.webp"
                    alt="Helios AI mobile app interface"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-margin-desktop text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#F5F5F3]">
            Have a repetitive operational workflow to automate?
          </h2>
          <p className="text-[#A6A6A6] text-base sm:text-lg">
            Tell us about your team's manual handoffs, data entry bottlenecks, or integration gaps. We'll outline a concrete solution architecture and delivery plan.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-9 py-4 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <span>Discuss Your Automation Project</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiAutomation;
