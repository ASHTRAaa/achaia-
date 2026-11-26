import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";

const deliverables = [
  { icon: "architecture", title: "Operational Workflow Mapping", desc: "We interview your team and document how information, approvals, and inventory actually flow across your organization before writing a single line of code." },
  { icon: "database", title: "Custom Database Architecture", desc: "Relational database schema design (PostgreSQL/MySQL) optimized for data integrity, auditability, rapid search, and long-term reporting." },
  { icon: "dashboard", title: "Role-Based Executive Dashboards", desc: "Clean administrative interfaces tailored for leadership, branch heads, accountants, and field staff with granular access permissions." },
  { icon: "inventory", title: "Inventory & Procurement Tracking", desc: "Batch tracking, low-stock triggers, multi-warehouse transfers, supplier management, and automated purchase order generation." },
  { icon: "receipt_long", title: "Invoicing & Payment Accounting", desc: "Automated GST/tax invoices, ledger entries, receivables/payables tracking, and automated payment receipt reconciliations." },
  { icon: "hub", title: "External System Integrations", desc: "Bi-directional API integrations with existing software, third-party logistics, banking APIs, biometric devices, or Shopify storefronts." },
  { icon: "lock", title: "Security & Audit Logging", desc: "Comprehensive audit trails recording every critical update, user role controls, session timeouts, and automatic daily backups." },
  { icon: "support_agent", title: "Deployment & Agreed Maintenance", desc: "Production cloud provisioning (AWS/GCP/DigitalOcean), staff training documentation, data migration from legacy spreadsheets, and ongoing maintenance." },
];

const painPoints = [
  "Critical business data trapped in dozens of disconnected Excel or Google sheets",
  "Zero real-time visibility into stock levels, pending orders, or cash flow balances",
  "Off-the-shelf ERPs (SAP/Odoo) that are bloated, overly expensive, and forced onto your team",
  "Manual duplicate entry leading to costly human mistakes and billing errors",
  "Difficulty controlling which employees can see or edit sensitive financial numbers",
];

const Erp = () => {
  useSEO({
    title: "Custom ERP & Business Management Software",
    description:
      "Achaia Labs builds custom ERP systems, operational dashboards, and inventory management software designed around your actual business workflows. Discover and deploy with ongoing support.",
    path: "/services/erp",
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
            <span className="text-[#315EFB] font-mono text-xs uppercase tracking-wider font-semibold">ERP & Business Systems</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#F5F5F3] mb-6 leading-tight font-semibold tracking-tight">
            Custom ERP systems built around how your business actually runs.
          </h1>
          <p className="text-base sm:text-lg text-[#A6A6A6] max-w-2xl leading-relaxed mb-8">
            Off-the-shelf enterprise software forces you to change how you work. We build lean, reliable internal software and management systems that reflect your real operational workflows — without the bloat or perpetual license fees.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-8 py-4 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <span>Discuss Your Operations</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link
              to="/work/skmt-trust"
              className="inline-flex items-center gap-2 border border-[#303030] hover:border-[#444444] bg-[#181818] hover:bg-[#202020] text-[#F5F5F3] px-7 py-4 rounded-full text-sm font-semibold transition-all"
            >
              <span>View SKMT Trust ERP</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-16 md:py-20 bg-[#141414] border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block">
                The Operational Bottleneck
              </span>
              <h2 className="text-3xl sm:text-4xl text-[#F5F5F3] font-semibold leading-snug">
                When spreadsheets reach their limit, business velocity collapses.
              </h2>
              <p className="text-[#A6A6A6] leading-relaxed">
                Most growing companies run on a patchwork of spreadsheets, WhatsApp groups, and email threads. As order volume increases or multiple branches open, this fragile setup cracks: files get overwritten, numbers fail to reconcile, and decisions are made on outdated information.
              </p>
              <p className="text-[#A6A6A6] leading-relaxed">
                We engineer centralized, web-based management platforms tailored to your industry — whether you are running an educational trust, institutional supply network, manufacturing unit, or multi-location retail business.
              </p>
            </div>
            <div className="lg:col-span-6 space-y-3">
              {painPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl border border-[#303030] bg-[#181818]">
                  <span className="w-6 h-6 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                  <p className="text-sm sm:text-base text-[#CCCCCC] font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-margin-desktop">
        <div className="max-w-2xl mb-16">
          <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block mb-3">
            System Modules
          </span>
          <h2 className="text-3xl sm:text-4xl text-[#F5F5F3] font-semibold mb-4">
            Built modularly for your specific operations.
          </h2>
          <p className="text-[#A6A6A6] text-base sm:text-lg leading-relaxed">
            Only pay for and deploy the modules your organization actually needs. We build clean, extensible software that scales with your growth.
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

      {/* Verified ERP Client Work */}
      <section className="py-16 bg-[#161616] border-y border-[#262626] text-[#F5F5F3]">
        <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block mb-3">Verified Project Evidence</span>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-[#F5F5F3]">
                SKMT Trust — Governance & Academic ERP Dashboard
              </h2>
              <p className="text-[#A6A6A6] text-base leading-relaxed mb-6">
                Engineered a unified governance portal for an educational trust. Replacing disconnected manual records with an integrated dashboard tracking program tracks, affiliated institutes, student enrollment cohorts, fee receipts, and institutional compliance.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="px-3 py-1 rounded-full bg-[#202020] border border-[#303030] text-xs font-medium text-[#CCCCCC]">Institutional Governance</span>
                <span className="px-3 py-1 rounded-full bg-[#202020] border border-[#303030] text-xs font-medium text-[#CCCCCC]">Student & Program Cohorts</span>
                <span className="px-3 py-1 rounded-full bg-[#202020] border border-[#303030] text-xs font-medium text-[#CCCCCC]">Role-Based Access</span>
              </div>
              <Link
                to="/work/skmt-trust"
                className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-7 py-3.5 rounded-full text-xs font-bold transition-all shadow-md active:scale-95"
              >
                <span>Read Case Study</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="rounded-3xl p-3 bg-[#181818] border border-[#303030] shadow-2xl max-w-md overflow-hidden">
                <div className="rounded-2xl overflow-hidden bg-black">
                  <img
                    src="/work-assets/skmt_erp_tablet.webp"
                    alt="SKMT Trust Governance Dashboard on tablet"
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
            Ready to replace manual spreadsheets with software that works?
          </h2>
          <p className="text-[#A6A6A6] text-base sm:text-lg">
            Tell us about your current operational processes, pain points, and user roles. We will map out a clear software architecture and delivery timeline.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-9 py-4 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <span>Discuss Your Business System</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Erp;
