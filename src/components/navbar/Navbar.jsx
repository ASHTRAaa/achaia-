import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/logo.svg?react";

const servicesList = [
  {
    name: "Shopify & E-Commerce",
    desc: "Custom storefronts, checkout & logistics",
    href: "/services/shopify",
    icon: "storefront",
  },
  {
    name: "ERP & Business Systems",
    desc: "Internal tools, workflows & databases",
    href: "/services/erp",
    icon: "account_tree",
  },
  {
    name: "Application Development",
    desc: "Production Android apps & web platforms",
    href: "/services/apps",
    icon: "smartphone",
  },
  {
    name: "AI & Workflow Automation",
    desc: "API integrations, document parsing & triage",
    href: "/services/ai-automation",
    icon: "smart_toy",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesDropdownRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Handle scroll state for compact sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/95 backdrop-blur-md border-b border-[#303030] shadow-lg py-3.5"
          : "bg-[#111111]/80 backdrop-blur-sm border-b border-[#262626] py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-margin-desktop flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group transition-opacity hover:opacity-90"
          aria-label="Achaia Labs home"
        >
          <Logo className="h-6 sm:h-7 w-auto text-[#F5F5F3]" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {/* Services Dropdown */}
          <div className="relative" ref={servicesDropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isServicesActive
                  ? "text-[#315EFB] font-semibold"
                  : "text-[#A6A6A6] hover:text-[#F5F5F3] hover:bg-[#181818]"
              }`}
              aria-expanded={servicesOpen}
            >
              <span>Services</span>
              <span
                className={`material-symbols-outlined text-base transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-[#315EFB]" : ""
                }`}
              >
                keyboard_arrow_down
              </span>
            </button>

            {/* Dropdown Menu */}
            {servicesOpen && (
              <div
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-0 mt-2 w-80 p-2 rounded-2xl bg-[#181818] border border-[#303030] shadow-2xl transition-all z-50"
              >
                <div className="px-3 py-2 border-b border-[#282828] mb-1">
                  <Link
                    to="/services"
                    className="text-xs font-semibold uppercase tracking-wider text-[#777777] hover:text-[#315EFB] flex items-center justify-between"
                  >
                    <span>All Services Overview</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
                <div className="space-y-1">
                  {servicesList.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#202020] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#242424] text-[#315EFB] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#315EFB] group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-lg">{item.icon}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#F5F5F3] group-hover:text-[#315EFB] transition-colors">
                          {item.name}
                        </p>
                        <p className="text-xs text-[#777777] line-clamp-1">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/work"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "text-[#F5F5F3] font-semibold bg-[#181818]"
                  : "text-[#A6A6A6] hover:text-[#F5F5F3] hover:bg-[#181818]"
              }`
            }
          >
            Work
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "text-[#F5F5F3] font-semibold bg-[#181818]"
                  : "text-[#A6A6A6] hover:text-[#F5F5F3] hover:bg-[#181818]"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "text-[#F5F5F3] font-semibold bg-[#181818]"
                  : "text-[#A6A6A6] hover:text-[#F5F5F3] hover:bg-[#181818]"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Primary CTA and Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-md active:scale-95"
          >
            <span>Discuss a Project</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#F5F5F3] p-2 rounded-lg hover:bg-[#181818] transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[60px] sm:top-[70px] bottom-0 bg-[#111111] z-40 md:hidden overflow-y-auto border-t border-[#303030] px-6 py-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="border-b border-[#262626] pb-4">
              <p className="text-xs font-bold uppercase tracking-wider text-[#777777] mb-3">Services</p>
              <div className="space-y-2">
                <Link
                  to="/services"
                  className="block text-sm font-semibold text-[#F5F5F3] hover:text-[#315EFB]"
                >
                  All Services Overview →
                </Link>
                {servicesList.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#181818] text-[#A6A6A6] hover:text-[#F5F5F3]"
                  >
                    <span className="material-symbols-outlined text-[#315EFB] text-lg">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Link
                to="/work"
                className="block text-lg font-semibold text-[#F5F5F3] hover:text-[#315EFB]"
              >
                Work & Case Studies
              </Link>
              <Link
                to="/about"
                className="block text-lg font-semibold text-[#F5F5F3] hover:text-[#315EFB]"
              >
                About Achaia Labs
              </Link>
              <Link
                to="/contact"
                className="block text-lg font-semibold text-[#F5F5F3] hover:text-[#315EFB]"
              >
                Contact & Inquiries
              </Link>
              <Link
                to="/cyp"
                className="block text-sm font-medium text-[#777777] hover:text-[#315EFB]"
              >
                Project Estimator
              </Link>
              <Link
                to="/products"
                className="block text-sm font-medium text-[#777777] hover:text-[#315EFB]"
              >
                In-House Products
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-[#262626] space-y-4">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white font-semibold py-3.5 rounded-full text-sm"
            >
              <span>Discuss a Project</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <div className="text-xs text-[#777777] text-center space-y-1">
              <p>contact@achaialabs.tech</p>
              <p>+91 6202589421 / +91 7633831340</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
