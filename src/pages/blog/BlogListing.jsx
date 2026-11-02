import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogPosts, blogCategories } from "../../data/blog/index.js";
import BlogCard from "../../components/blog/BlogCard.jsx";
import { useBlogSEO } from "../../hooks/useBlogSEO.js";
import { HiOutlineMagnifyingGlass, HiOutlineArrowRight } from "react-icons/hi2";

export default function BlogListing() {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  useBlogSEO({
    title: "Engineering Blog & Technical Insights",
    description: "In-depth engineering guides on custom CRM architecture, Shopify API development, AI workflow automation, and small business web systems.",
    path: "/blog",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All Articles" || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.primaryKeyword.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="font-body-md text-[#F5F5F3] bg-[#111111] min-h-screen">
      <main className="pt-20 pb-28 px-4 sm:px-6 md:px-margin-desktop max-w-7xl mx-auto">
        {/* Page Header */}
        <section className="mb-14 max-w-3xl">
          <span className="text-[#315EFB] font-mono text-xs uppercase tracking-widest block mb-3 font-semibold">
            Technical Publication & Case Analysis
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#F5F5F3] tracking-tight leading-[1.1] mb-6">
            Engineering insights, architecture guides, and operational playbooks.
          </h1>
          <p className="text-base sm:text-lg text-[#888888] leading-relaxed">
            Practical breakdowns of custom CRM development, high-speed Shopify engineering, deterministic AI automation pipelines, and modern web application architecture.
          </p>
        </section>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#262626]">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {blogCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#315EFB] text-white font-medium shadow-md shadow-blue-900/30"
                      : "bg-[#181818] border border-[#2B2B2B] text-[#888888] hover:text-[#CCCCCC] hover:border-[#3A3A3A]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] sm:min-w-[300px]">
            <HiOutlineMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base text-[#666666]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic or keyword..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#181818] border border-[#2B2B2B] text-sm text-[#F5F5F3] placeholder-[#555555] focus:outline-none focus:border-[#315EFB] transition-colors"
            />
          </div>
        </div>

        {/* Article Cards Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl bg-[#141414] border border-[#222222]">
            <p className="text-base text-[#888888] mb-4">
              No articles matched your search query.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All Articles");
                setSearchQuery("");
              }}
              className="px-5 py-2 rounded-full bg-[#202020] border border-[#333333] text-xs font-mono text-[#CCCCCC] hover:text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner CTA */}
        <section className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#141414] border border-[#262626] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-mono text-[#315EFB] uppercase tracking-wider block mb-2 font-semibold">
              Ready to Build?
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#F5F5F3] tracking-tight mb-2">
              Have a specific software system or workflow challenge?
            </h2>
            <p className="text-sm sm:text-base text-[#888888] leading-relaxed">
              Explore our transparent project estimator or speak directly with our engineering team to map technical scope and milestones.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/cyp"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#315EFB] hover:bg-[#254EDB] text-white text-sm font-medium transition-all shadow-lg shadow-blue-900/30"
            >
              <span>Project Estimator</span>
              <HiOutlineArrowRight />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#202020] hover:bg-[#2A2A2A] border border-[#333333] text-[#F5F5F3] text-sm font-medium transition-all"
            >
              <span>Contact Team</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

