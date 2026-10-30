import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";

const products = [
  {
    id: "helios",
    category: "AI PLATFORM",
    name: "Helios",
    icon: "psychology",
    desc: "AI prompt generation, parameter organization, and creative workflow platform built for designers and power users.",
    link: "https://heliosai.achaialabs.tech/",
  },
  {
    id: "sendmyform",
    category: "DEVELOPER TOOL",
    name: "SendMyForm",
    icon: "mail",
    desc: "Zero-backend form submission service built for developers and agencies to receive, validate, and manage submissions instantly.",
    link: "https://sendmyform.com/",
  },
  {
    id: "holdon",
    category: "MOBILE SECURITY",
    name: "Hold On",
    icon: "security",
    desc: "Anti-theft mobile security alarm application designed to protect smartphones from unauthorized movement and tampering in public spaces.",
    link: null,
  },
];

const Products = () => {
  useSEO({
    title: "In-House Products — Software Built by Achaia Labs",
    description:
      "Explore software platforms built by Achaia Labs. In-house engineering demonstrating our capabilities in AI, developer infrastructure, and mobile security.",
    path: "/products",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-body-md text-[#F5F5F3] bg-[#111111] min-h-screen">
      {/* Hero */}
      <section className="pt-16 pb-12 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-margin-desktop text-center max-w-4xl mx-auto space-y-4">
        <span className="text-[#315EFB] font-mono text-xs uppercase tracking-widest block font-semibold">
          In-House Engineering
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#F5F5F3] tracking-tight leading-tight">
          Software we build and run ourselves.
        </h1>
        <p className="text-base sm:text-lg text-[#A6A6A6] max-w-2xl mx-auto leading-relaxed">
          We don't just engineer systems for clients. We design, deploy, and scale proprietary platforms across AI, developer tools, and mobile security.
        </p>
      </section>

      {/* Products Grid */}
      <section className="py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="p-8 sm:p-10 rounded-3xl flex flex-col justify-between border border-[#303030] hover:border-[#444444] bg-[#181818] transition-all shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-[#315EFB] uppercase tracking-wider bg-[#202020] border border-[#303030] px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#202020] border border-[#303030] text-[#A6A6A6] flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">{p.icon}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-[#F5F5F3] mb-3">{p.name}</h2>
                <p className="text-sm text-[#A6A6A6] leading-relaxed mb-6">{p.desc}</p>
              </div>

              <div className="pt-6 border-t border-[#262626] flex items-center justify-between">
                <Link
                  to={`/products/${p.id}`}
                  className="text-xs font-semibold text-[#315EFB] hover:text-[#5B82FF] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Product Details</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#777777] hover:text-[#F5F5F3] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Launch</span>
                    <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
