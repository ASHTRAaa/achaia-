import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";

const Sitemap = () => {
  useSEO({
    title: "Sitemap",
    description: "Sitemap of Achaia Labs - Complete directory of services, portfolio, company, and legal pages.",
    path: "/sitemap",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-[#0A0A0C] text-[#A6A6A6] min-h-screen">
      {/* Ambient Top Glow matching micro1 */}
      <div
        className="absolute inset-x-0 top-0 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(66, 66, 76, 0.22), transparent 75%)",
        }}
      />

      <main className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 pt-24 pb-32 md:pt-32 md:pb-40">
        {/* Centered Page Title */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#F5F5F3] tracking-tight">
            achaia labs sitemap
          </h1>
        </div>

        {/* Multi-column open editorial link directory - exactly matching micro1 inspiration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16 lg:gap-24">
          {/* Column 1 */}
          <div className="space-y-12">
            <div>
              <h2 className="text-base sm:text-lg font-medium text-[#F5F5F3] mb-5">
                Services
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base">
                <Link to="/services/shopify" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  Shopify & E-Commerce
                </Link>
                <Link to="/services/erp" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  ERP & Business Systems
                </Link>
                <Link to="/services/apps" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  Application Development
                </Link>
                <Link to="/services/ai-automation" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  AI & Workflow Automation
                </Link>
                <Link to="/services" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  All Services Overview
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-medium text-[#F5F5F3] mb-5">
                Case studies
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base">
                <Link to="/work/moms-and-moon" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  Moms & Moon (Shopify)
                </Link>
                <Link to="/work/skmt-trust" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  SKMT Trust (ERP)
                </Link>
                <Link to="/work/gaurav-synthetics" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  Gaurav Synthetics (Textile)
                </Link>
                <Link to="/work/mandala-good-vibes" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  Mandala Good Vibes (Gemstones)
                </Link>
                <Link to="/work/fox-wing-media" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  Fox Wing Media (PR)
                </Link>
                <Link to="/work/divine-enterprises" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  Divine Enterprises (Procurement)
                </Link>
                <Link to="/work/helios" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  Helios AI App (Mobile)
                </Link>
                <Link to="/work" className="block text-[#315EFB] hover:text-blue-400 transition-colors font-medium">
                  All Case Studies Overview →
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-12">
            <div>
              <h2 className="text-base sm:text-lg font-medium text-[#F5F5F3] mb-5">
                Company
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base">
                <Link to="/about" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  About Us
                </Link>
                <Link to="/contact" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  Contact Us
                </Link>
                <Link to="/cyp" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  Project Estimator
                </Link>
                <Link to="/join-our-team" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  Careers & Hiring
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-medium text-[#F5F5F3] mb-5">
                In-House Products
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base">
                <Link to="/products/helios" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  Helios (AI Workflow Platform)
                </Link>
                <Link to="/products/sendmyform" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  SendMyForm (Developer Form API)
                </Link>
                <Link to="/products/holdon" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  Hold On (Mobile Security App)
                </Link>
                <Link to="/products" className="block text-[#315EFB] hover:text-blue-400 transition-colors font-medium">
                  All Products Overview →
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-medium text-[#F5F5F3] mb-5">
                Inquiries
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base">
                <Link to="/cyp" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  Discuss a Project
                </Link>
                <Link to="/contact" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  General Inquiries
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-12">
            <div>
              <h2 className="text-base sm:text-lg font-medium text-[#F5F5F3] mb-5">
                Other
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base">
                <Link to="/privacy" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="block text-[#888888] hover:text-[#F5F5F3] transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-medium text-[#F5F5F3] mb-5">
                Support
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base">
                <a
                  href="mailto:contact@achaialabs.tech"
                  className="block text-[#888888] hover:text-[#F5F5F3] transition-colors"
                >
                  contact@achaialabs.tech
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sitemap;
