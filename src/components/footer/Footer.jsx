import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg?react";
import FooterLogo from "./FooterLogo";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMapPin, HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="relative bg-[#0A0A0C] text-[#A6A6A6] border-t border-[#262626] overflow-hidden">
      {/* Ambient Radial Dome Lighting matching micro1 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% 0%, rgba(66, 66, 76, 0.22), rgba(29, 29, 34, 0.35) 45%, #0A0A0C 85%)",
        }}
      />

      {/* Micro1 Tactile SVG Film Grain Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-10 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#222222]">
          {/* Company Statement */}
          <div className="lg:col-span-6 space-y-6">
            <Link to="/" className="inline-block" aria-label="Achaia Labs home">
              <Logo className="h-7 w-auto text-[#F5F5F3]" />
            </Link>
            <p className="text-[#888888] text-sm sm:text-base leading-relaxed max-w-md">
              Achaia Labs is a product engineering and business automation company. We build, integrate, deploy, and maintain software systems that serve real operational and commercial needs.
            </p>
            <div className="flex items-center gap-5 pt-3">
              <a
                href="https://www.linkedin.com/search/results/all/?keywords=achaia%20labs&origin=RICH_QUERY_SUGGESTION&spellCorrectionEnabled=false&heroEntityKey=urn%3Ali%3Aorganization%3A112998902&position=0"
                target="_blank"
                rel="noreferrer"
                className="text-[#888888] hover:text-[#F5F5F3] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://x.com/achaialabs"
                target="_blank"
                rel="noreferrer"
                className="text-[#888888] hover:text-[#F5F5F3] transition-colors"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/achaialabs?igsh=MTF5ZXVxbDEyZnlrOQ=="
                target="_blank"
                rel="noreferrer"
                className="text-[#888888] hover:text-[#F5F5F3] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Navigation Links Columns - 2 balanced columns uniformly distributed */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 sm:gap-14 lg:gap-16 max-w-lg lg:ml-auto">
            {/* Services */}
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5F5F3] mb-4">
                Services
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link to="/services/shopify" className="text-[#888888] hover:text-[#F5F5F3] transition-colors">
                    Shopify & E-Commerce
                  </Link>
                </li>
                <li>
                  <Link to="/services/erp" className="text-[#888888] hover:text-[#F5F5F3] transition-colors">
                    ERP & Business Systems
                  </Link>
                </li>
                <li>
                  <Link to="/services/apps" className="text-[#888888] hover:text-[#F5F5F3] transition-colors">
                    Application Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/ai-automation" className="text-[#888888] hover:text-[#F5F5F3] transition-colors">
                    AI & Workflow Automation
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-[#315EFB] hover:text-blue-400 transition-colors font-medium">
                    All Services Overview →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5F5F3] mb-4">
                Company
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link to="/about" className="text-[#888888] hover:text-[#F5F5F3] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[#888888] hover:text-[#F5F5F3] transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/cyp" className="text-[#888888] hover:text-[#F5F5F3] transition-colors">
                    Project Estimator
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-[#888888] hover:text-[#F5F5F3] transition-colors">
                    In-House Products
                  </Link>
                </li>
                <li>
                  <Link to="/join-our-team" className="text-[#888888] hover:text-[#F5F5F3] transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Strip (Address bar) */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs sm:text-sm text-[#888888] border-b border-[#222222]">
          <div className="flex items-center gap-2">
            <HiOutlineMapPin className="text-base text-[#315EFB] shrink-0" />
            <span>Godrej Waterside, Salt Lake City, Kolkata, West Bengal - 700091, India</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:contact@achaialabs.tech"
              className="flex items-center gap-2 hover:text-[#F5F5F3] transition-colors"
            >
              <HiOutlineEnvelope className="text-base text-[#315EFB] shrink-0" />
              <span>contact@achaialabs.tech</span>
            </a>

            <div className="flex items-center gap-3">
              <HiOutlinePhone className="text-base text-[#315EFB] shrink-0" />
              <a href="tel:+916202589421" className="hover:text-[#F5F5F3] transition-colors">
                +91 6202589421
              </a>
              <span className="text-[#444444]">/</span>
              <a href="tel:+917633831340" className="hover:text-[#F5F5F3] transition-colors">
                +91 7633831340
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Sitemap, Privacy, Terms, and Cookie Policy */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#666666]">
          <p>© {new Date().getFullYear()} Achaia Labs. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            <Link to="/sitemap" className="hover:text-[#A6A6A6] transition-colors">
              Sitemap
            </Link>
            <Link to="/privacy" className="hover:text-[#A6A6A6] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#A6A6A6] transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-[#A6A6A6] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Monumental Watermark Logo with clean 2-3px vertical clearance below the address/bottom bar */}
      <div className="relative w-full max-w-[100rem] mx-auto px-4 sm:px-6 md:px-8 mt-1 sm:mt-2 z-10 overflow-hidden">
        <FooterLogo />
      </div>
    </footer>
  );
};

export default Footer;