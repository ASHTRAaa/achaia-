import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";

const categories = [
  "All Projects",
  "Shopify & E-Commerce",
  "ERP & Business Systems",
  "Application Development",
  "AI & Automation",
];

const projects = [
  {
    id: "moms-and-moon",
    title: "Moms & Moon",
    client: "Boutique Kids Fashion Brand",
    category: "Shopify & E-Commerce",
    categorySlug: "Shopify & E-Commerce",
    tag: "Shopify • Mobile-First",
    description:
      "Engineered a mobile-first Shopify e-commerce presence for an occasion wear brand, featuring custom festive collection lookbooks, age/size variant filters, and domestic payment integrations.",
    deliverables: ["Custom Shopify Theme", "Mobile Checkout Flow", "Logistics & Payment Sync"],
    img: "/work-assets/MnM.webp",
    featured: true,
  },
  {
    id: "skmt-trust",
    title: "SKMT Trust",
    client: "Educational & Fellowship Trust",
    category: "ERP & Business Systems",
    categorySlug: "ERP & Business Systems",
    tag: "Custom ERP • Governance",
    description:
      "Built a unified institutional governance portal replacing disconnected spreadsheets to manage fellowship tracks, affiliated institute records, student enrollment cohorts, and fee schedules.",
    deliverables: ["Governance ERP Portal", "Student Cohort Tracking", "Role-Based Permissions"],
    img: "/work-assets/skmt.webp",
    featured: true,
  },
  {
    id: "gaurav-synthetics",
    title: "Gaurav Synthetics",
    client: "Textile & Wholesale Dealer",
    category: "Shopify & E-Commerce",
    categorySlug: "Shopify & E-Commerce",
    tag: "Digital Catalog • Wholesale",
    description:
      "Engineered a scalable digital catalog and local visibility platform for an exclusive Ramraj Cotton dealership, strengthening buyer discoverability and wholesale inquiry generation.",
    deliverables: ["Scalable Web Platform", "Product Catalog Architecture", "Inbound Inquiry Funnel"],
    img: "/work-assets/gauravsyn.webp",
    featured: false,
  },
  {
    id: "mandala-good-vibes",
    title: "Mandala Good Vibes",
    client: "Gemstones & Spiritual",
    category: "Shopify & E-Commerce",
    categorySlug: "Shopify & E-Commerce",
    tag: "Shopify • Digital Catalog",
    description:
      "Built a high-speed Shopify store platform and spiritual gemstone directory, enabling customers to search, filter certified healing crystals, and place orders with seamless domestic payments.",
    deliverables: ["Shopify Store Platform", "Gemstone Directory Engine", "Fast Local Caching"],
    img: "/work-assets/mandala.webp",
    featured: false,
  },
  {
    id: "helios",
    title: "Helios AI Platform",
    client: "AI Creative Tools Platform",
    category: "Application Development",
    categorySlug: "Application Development",
    tag: "Android App • AI Workflows",
    description:
      "Engineered a high-speed mobile client and prompt organization ecosystem, enabling creative teams to search, test, and execute multi-parameter AI generation prompts.",
    deliverables: ["Android Mobile Application", "Prompt Directory Engine", "Fast Local Caching"],
    img: "/showcase/helios_2.png",
    featured: true,
  },
  {
    id: "fox-wing-media",
    title: "Fox Wing Media",
    client: "Modern PR & Growth Agency",
    category: "AI & Automation",
    categorySlug: "AI & Automation",
    tag: "AI PR • Brand Authority",
    description:
      "Designed and developed a high-authority digital presence that makes an AI-powered public relations proposition clear, credible, and conversion-ready for modern founders.",
    deliverables: ["Authority Web Platform", "Editorial Showcase", "Meeting Booking Journey"],
    img: "/work-assets/foxwing.webp",
    featured: false,
  },
  {
    id: "divine-enterprises",
    title: "Divine Enterprises",
    client: "Institutional Supply Network",
    category: "ERP & Business Systems",
    categorySlug: "ERP & Business Systems",
    tag: "B2B Procurement • Supply",
    description:
      "Built a trust-led digital platform for a regional supply business serving education, office, industrial, textile, and manpower procurement needs.",
    deliverables: ["Multi-Category Catalog", "Procurement RFQ Funnel", "Institutional Verification"],
    img: "/work-assets/divineEnt.webp",
    featured: false,
  },
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  useSEO({
    title: "Client Portfolio & Case Studies — Real Delivered Systems",
    description:
      "Explore Achaia Labs' verified client engagements across Shopify e-commerce, custom ERP systems, Android mobile applications, and AI workflow automation.",
    path: "/work",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.categorySlug === selectedCategory || (selectedCategory === "AI & Automation" && (p.categorySlug === "AI & Automation" || p.id === "helios")));

  return (
    <div className="font-body-md text-body-md text-[#F5F5F3] bg-[#111111]">
      {/* ── Page Hero ── */}
      <section className="pt-16 pb-12 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#F5F5F3] tracking-tight leading-[1.1]">
            Real client work across four engineering verticals.
          </h1>
          <p className="text-base sm:text-lg text-[#A6A6A6] leading-relaxed max-w-2xl">
            We partner with business owners and founders to build software that serves real operational and commercial needs. Explore our verified deliverables across e-commerce, internal ERPs, mobile apps, and automation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[#315EFB] text-white shadow-md"
                  : "bg-[#181818] border border-[#303030] text-[#A6A6A6] hover:text-[#F5F5F3] hover:bg-[#202020]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="rounded-3xl bg-[#181818] border border-[#303030] hover:border-[#444444] transition-all overflow-hidden flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="h-60 overflow-hidden bg-[#141414] relative border-b border-[#262626]">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-xs font-medium text-[#777777] mb-1">{project.client}</p>
                  <h2 className="text-2xl font-semibold text-[#F5F5F3] group-hover:text-[#315EFB] transition-colors mb-3">
                    {project.title}
                  </h2>
                  <p className="text-sm text-[#A6A6A6] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 border-t border-[#262626] pt-5">
                    {project.deliverables.map((d, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#CCCCCC]">
                        <span className="material-symbols-outlined text-[#315EFB] text-sm">
                          check_circle
                        </span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 pt-3 flex items-center justify-between border-t border-[#262626] text-xs font-semibold text-[#315EFB]">
                <span>Read Full Case Study</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Consultation CTA Strip ── */}
      <section className="py-20 bg-[#161616] border-t border-[#262626] text-[#F5F5F3] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#F5F5F3]">
            Have a project or system you need built?
          </h2>
          <p className="text-[#A6A6A6] text-base sm:text-lg leading-relaxed">
            Reach out to our engineering team to discuss your problem, review technology choices, and get a clear scope and timeline proposal.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-9 py-4 rounded-full font-semibold text-sm transition-all shadow-md active:scale-95"
            >
              <span>Discuss Your Project</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
