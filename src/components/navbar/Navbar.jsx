import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../assets/logo.svg?react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDesktopOrTablet, setIsDesktopOrTablet] = useState(window.innerWidth >= 768);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Handle responsive check
  useEffect(() => {
    const handleResize = () => {
      setIsDesktopOrTablet(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll collapse/expand
  useEffect(() => {
    if (!isHome || !isDesktopOrTablet) {
      setIsCollapsed(false);
      return;
    }

    const handleScroll = () => {
      const threshold = 180;
      if (window.scrollY > threshold) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome, isDesktopOrTablet]);

  // Lock body scroll when fullscreen menu is open
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

  const expandedStyle = {
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "88px",
    borderRadius: "0px",
    backgroundColor: "transparent",
    borderBottom: "1px solid transparent",
  };

  const collapsedStyle = {
    position: "fixed",
    top: "24px",
    left: "calc(100% - 80px)", // 24px right + 56px width = 80px
    width: "56px",
    height: "56px",
    borderRadius: "9999px",
    backgroundColor: "rgba(10, 5, 21, 0.95)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 0 25px rgba(160, 214, 0, 0.25)",
  };

  return (
    <>
      <nav
        style={isHome && isDesktopOrTablet ? (isCollapsed ? collapsedStyle : expandedStyle) : {}}
        className={
          isHome
            ? (isDesktopOrTablet
                ? "z-50 transition-all duration-500 ease-in-out flex items-center justify-between overflow-hidden"
                : "bg-transparent absolute top-0 left-0 w-full z-50 border-none flex justify-between items-center px-4 sm:px-6 py-5 sm:py-6")
            : "bg-background/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 transition-all duration-300 w-full flex justify-between items-center px-4 sm:px-6 lg:px-10 py-5 sm:py-6"
        }
      >
        {/* Fullsize Navbar Content */}
        <div
          className={`flex justify-between items-center w-full h-full transition-all duration-300 ${
            isHome && isDesktopOrTablet && isCollapsed
              ? "opacity-0 pointer-events-none scale-95"
              : "opacity-100 pointer-events-auto scale-100"
          } ${isHome && isDesktopOrTablet ? "px-4 sm:px-6 lg:px-10" : ""}`}
        >
          <Link to="/" className="flex items-center" aria-label="Achaia Labs home">
            <Logo className="h-5 w-auto sm:h-6 text-[#A0D600]" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-secondary-fixed border-b-2 border-secondary-fixed pb-1 font-label-caps text-label-caps"
                  : "text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-secondary-fixed border-b-2 border-secondary-fixed pb-1 font-label-caps text-label-caps"
                  : "text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                isActive
                  ? "text-secondary-fixed border-b-2 border-secondary-fixed pb-1 font-label-caps text-label-caps"
                  : "text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps"
              }
            >
              Work
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-secondary-fixed border-b-2 border-secondary-fixed pb-1 font-label-caps text-label-caps"
                  : "text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps"
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-secondary-fixed border-b-2 border-secondary-fixed pb-1 font-label-caps text-label-caps"
                  : "text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps"
              }
            >
              Contact
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/cyp"
              className="hidden sm:inline-flex bg-secondary-fixed text-on-secondary-fixed px-5 py-2 rounded-full font-label-caps text-[10px] sm:text-label-caps font-bold hover:scale-95 transition-transform active:scale-90"
            >
              Get Started
            </Link>

            {/* Mobile Hamburger (when expanded or on other pages) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-on-surface flex items-center justify-center p-1 rounded-md hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>

        {/* Collapsed Circular Hamburger Trigger */}
        {isHome && isDesktopOrTablet && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              isCollapsed
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-75 pointer-events-none"
            }`}
          >
            <button
              onClick={() => setMenuOpen(true)}
              className="w-full h-full flex items-center justify-center text-on-surface hover:text-secondary-fixed transition-colors"
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-2xl font-bold">menu</span>
            </button>
          </div>
        )}
      </nav>

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 transition-all duration-300">
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 lg:right-10 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-secondary-fixed hover:text-black transition-colors animate-fade-in"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-6 text-center">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              end
              className={({ isActive }) =>
                isActive
                  ? "text-3xl font-semibold text-secondary-fixed"
                  : "text-3xl font-semibold text-on-surface hover:text-secondary-fixed transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-3xl font-semibold text-secondary-fixed"
                  : "text-3xl font-semibold text-on-surface hover:text-secondary-fixed transition-colors"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/work"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-3xl font-semibold text-secondary-fixed"
                  : "text-3xl font-semibold text-on-surface hover:text-secondary-fixed transition-colors"
              }
            >
              Work
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-3xl font-semibold text-secondary-fixed"
                  : "text-3xl font-semibold text-on-surface hover:text-secondary-fixed transition-colors"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-3xl font-semibold text-secondary-fixed"
                  : "text-3xl font-semibold text-on-surface hover:text-secondary-fixed transition-colors"
              }
            >
              Contact
            </NavLink>
            <Link
              to="/cyp"
              onClick={() => setMenuOpen(false)}
              className="mt-6 bg-secondary-fixed text-on-secondary-fixed px-8 py-3 rounded-full font-label-caps text-label-caps font-bold hover:scale-95 transition-transform active:scale-90"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
