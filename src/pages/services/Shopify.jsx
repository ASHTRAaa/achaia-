import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";

const deliverables = [
  { icon: "palette", title: "Custom Storefront Design", desc: "A tailored store layout, typography, and responsive visual architecture built around your brand identity and product range — not an off-the-shelf theme." },
  { icon: "inventory_2", title: "Product Catalogue & Collections", desc: "Product pages, variant structures, size/color matrices, and collection filters structured so buyers discover products with minimal friction." },
  { icon: "shopping_cart_checkout", title: "Checkout Flow & Conversion", desc: "Streamlined checkout configuration, payment gateway integrations (Razorpay, Stripe, UPI, COD), discount logic, and cart abandonment sequences." },
  { icon: "local_shipping", title: "Shipping & Logistics Integration", desc: "Automated carrier rate calculations, order dispatch tracking, webhook triggers, and fulfillment sync with your warehouse." },
  { icon: "integration_instructions", title: "ERP & Accounting Integration", desc: "Two-way inventory sync and sales data handoffs connecting Shopify to your backend ERP or accounting software." },
  { icon: "query_stats", title: "Analytics & Conversion Tracking", desc: "Google Analytics 4 enhanced e-commerce events, Meta Pixel, and conversion tracking configured to give actionable purchase funnel data." },
  { icon: "rocket_launch", title: "Testing, DNS & Production Launch", desc: "Cross-device QA, load readiness check, payment test orders, domain and SSL setup, and an admin handover session for your operations team." },
  { icon: "build_circle", title: "Agreed Post-Launch Support", desc: "Agreed maintenance windows, promotional campaign updates, theme performance tuning, and technical support as your order volumes scale." },
];

const painPoints = [
  "Generic themes that look cookie-cutter and fail to build brand trust",
  "High checkout abandonment caused by poorly configured payment and shipping steps",
  "Disjointed inventory management that requires manual spreadsheet reconciliations",
  "Slow mobile page load speeds that hurt paid ad conversions and SEO rankings",
  "Difficulty adding custom business rules or third-party logistics integrations",
];

const Shopify = () => {
  useSEO({
    title: "Shopify & E-Commerce Development",
    description:
      "Achaia Labs builds custom Shopify stores engineered for conversion, seamless inventory operations, and high order volumes. Full design, integration, and launch support.",
    path: "/services/shopify",
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
            <span className="text-[#315EFB] font-mono text-xs uppercase tracking-wider font-semibold">Shopify & E-Commerce</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#F5F5F3] mb-6 leading-tight font-semibold tracking-tight">
            Custom Shopify stores built around your commerce operations.
          </h1>
          <p className="text-base sm:text-lg text-[#A6A6A6] max-w-2xl leading-relaxed mb-8">
            Most agencies configure a stock theme. We engineer your e-commerce store — aligning storefront aesthetics, catalog discovery, payment gateways, and fulfillment workflows into a cohesive high-converting engine.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-8 py-4 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <span>Discuss Your Store</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link
              to="/work/moms-and-moon"
              className="inline-flex items-center gap-2 border border-[#303030] hover:border-[#444444] bg-[#181818] hover:bg-[#202020] text-[#F5F5F3] px-7 py-4 rounded-full text-sm font-semibold transition-all"
            >
              <span>View Moms & Moon Store</span>
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
                The Core Challenge
              </span>
              <h2 className="text-3xl sm:text-4xl text-[#F5F5F3] font-semibold leading-snug">
                A storefront that looks good on desktop but breaks down in real operations.
              </h2>
              <p className="text-[#A6A6A6] leading-relaxed">
                Thousands of brands launch Shopify stores that feel disconnected from their actual business reality. When catalog browsing is clumsy, checkout lags, or order details don't reach the warehouse team reliably, growth stalls and operational overhead multiplies.
              </p>
              <p className="text-[#A6A6A6] leading-relaxed">
                At Achaia Labs, we build the digital touchpoints and the operational plumbing together — ensuring seamless mobile checkout, real-time inventory visibility, and scalable architecture.
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
            What We Deliver
          </span>
          <h2 className="text-3xl sm:text-4xl text-[#F5F5F3] font-semibold mb-4">
            Everything your commerce business needs from day one.
          </h2>
          <p className="text-[#A6A6A6] text-base sm:text-lg leading-relaxed">
            Every deliverable is handled by experienced engineers, with transparent scope and concrete launch milestones.
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

      {/* Verified E-Commerce Client Work */}
      <section className="py-16 bg-[#161616] border-y border-[#262626] text-[#F5F5F3]">
        <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block mb-3">Featured Case Study</span>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-[#F5F5F3]">
                Moms & Moon — Premium Occasion Wear for Kids
              </h2>
              <p className="text-[#A6A6A6] text-base leading-relaxed mb-6">
                Designed and built a mobile-first Shopify e-commerce presence for a boutique children's fashion brand. Featuring custom occasion collection lookbooks, age/size variant filters, seamless checkout with integrated domestic payment gateways, and automated logistics sync.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="px-3 py-1 rounded-full bg-[#202020] border border-[#303030] text-xs font-medium text-[#CCCCCC]">Shopify Custom Theme</span>
                <span className="px-3 py-1 rounded-full bg-[#202020] border border-[#303030] text-xs font-medium text-[#CCCCCC]">Mobile-First UX</span>
                <span className="px-3 py-1 rounded-full bg-[#202020] border border-[#303030] text-xs font-medium text-[#CCCCCC]">Integrated Payments</span>
              </div>
              <Link
                to="/work/moms-and-moon"
                className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-7 py-3.5 rounded-full text-xs font-bold transition-all shadow-md active:scale-95"
              >
                <span>Read Full Case Study</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="rounded-3xl p-3 bg-[#181818] border border-[#303030] shadow-2xl max-w-md overflow-hidden">
                <div className="rounded-2xl overflow-hidden bg-black">
                  <img
                    src="/work-assets/moni_monu_laptop.webp"
                    alt="Moms & Moon Shopify store on laptop"
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
            Ready to build or scale your Shopify store?
          </h2>
          <p className="text-[#A6A6A6] text-base sm:text-lg">
            Let's discuss your product catalogue, target timeline, and operational requirements. We'll provide clear technical guidance and a transparent project proposal.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-9 py-4 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <span>Discuss Your E-Commerce Project</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shopify;
