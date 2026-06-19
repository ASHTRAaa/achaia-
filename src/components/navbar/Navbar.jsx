import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/logo.svg?react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className={
      isHome
        ? "bg-transparent absolute top-0 left-0 w-full z-50 transition-all duration-300 border-none"
        : "bg-background/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 transition-all duration-300"
    }>
      <div className="flex justify-between items-center w-full px-6 lg:px-10 py-6">
        <Logo className="h-6 w-auto text-[#A0D600]" />

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

        <Link
          to="/cyp"
          className="bg-secondary-fixed text-on-secondary-fixed px-6 py-2 rounded-full font-label-caps text-label-caps font-bold hover:scale-95 transition-transform active:scale-90"
        >
          Get Started
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-4 text-on-surface"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4 bg-background/95 backdrop-blur-xl">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-on-surface-variant hover:text-secondary-fixed transition-colors font-label-caps text-label-caps py-2">Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="text-on-surface-variant hover:text-secondary-fixed transition-colors font-label-caps text-label-caps py-2">Products</Link>
          <Link to="/work" onClick={() => setMenuOpen(false)} className="text-on-surface-variant hover:text-secondary-fixed transition-colors font-label-caps text-label-caps py-2">Work</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-on-surface-variant hover:text-secondary-fixed transition-colors font-label-caps text-label-caps py-2">Contact</Link>
          <Link to="/cyp" onClick={() => setMenuOpen(false)} className="text-on-surface-variant hover:text-secondary-fixed transition-colors font-label-caps text-label-caps py-2">Cost Your Project</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
