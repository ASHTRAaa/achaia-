import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getBlogPostBySlug, getRelatedPosts } from "../../data/blog/index.js";
import { useBlogSEO } from "../../hooks/useBlogSEO.js";
import TableOfContents from "../../components/blog/TableOfContents.jsx";
import FAQSection from "../../components/blog/FAQSection.jsx";
import BlogLeadForm from "../../components/blog/BlogLeadForm.jsx";
import BlogCard from "../../components/blog/BlogCard.jsx";
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineArrowLeft,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineChevronRight,
  HiOutlineCheckBadge,
  HiOutlineBriefcase,
} from "react-icons/hi2";

export default function BlogPostDetail() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // If slug is invalid, redirect to 404 or blog hub
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.slug, 2);

  useBlogSEO({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    path: `/blog/${post.slug}`,
    isArticle: true,
    publishDate: post.publishDate,
    modifiedDate: post.modifiedDate,
    category: post.category,
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: post.title, url: `/blog/${post.slug}` },
    ],
  });

  return (
    <div className="font-body-md text-[#F5F5F3] bg-[#111111] min-h-screen">
      <main className="pt-16 pb-28 px-4 sm:px-6 md:px-margin-desktop max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#777777]">
            <li>
              <Link to="/" className="hover:text-[#CCCCCC] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <HiOutlineChevronRight className="text-[10px]" />
            </li>
            <li>
              <Link to="/blog" className="hover:text-[#CCCCCC] transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <HiOutlineChevronRight className="text-[10px]" />
            </li>
            <li className="text-[#315EFB] truncate max-w-[200px] sm:max-w-md">
              {post.category}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#888888] hover:text-[#F5F5F3] transition-colors"
          >
            <HiOutlineArrowLeft className="text-sm" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#1C1C1C] border border-[#2E2E2E] text-xs font-mono font-medium text-[#315EFB]">
              {post.category}
            </span>
            <div className="flex items-center gap-3 text-xs font-mono text-[#777777]">
              <span className="flex items-center gap-1.5">
                <HiOutlineCalendar className="text-sm" />
                Published {post.publishDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <HiOutlineClock className="text-sm" />
                {post.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F5F5F3] tracking-tight leading-[1.15] mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[#A6A6A6] leading-relaxed border-l-2 border-[#315EFB] pl-4 sm:pl-6 my-6">
            {post.excerpt}
          </p>

          {/* Author Strip */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#222222]">
            <div className="w-10 h-10 rounded-full bg-[#202020] border border-[#303030] flex items-center justify-center text-xs font-mono font-bold text-[#315EFB]">
              AL
            </div>
            <div>
              <p className="text-xs font-mono text-[#F5F5F3] font-medium">
                Achaia Labs Engineering Team
              </p>
              <p className="text-xs text-[#777777]">
                Product Engineering & Systems Architecture
              </p>
            </div>
          </div>
        </header>

        {/* Article Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Content Column */}
          <article className="lg:col-span-8 order-2 lg:order-1">
            {/* Sections */}
            <div className="prose prose-invert max-w-none space-y-12 text-[#CCCCCC] text-base leading-relaxed">
              {post.sections?.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#F5F5F3] tracking-tight mb-5 pb-2 border-b border-[#222222]">
                    {section.h2}
                  </h2>
                  <div
                    className="article-body-content space-y-4"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </section>
              ))}
            </div>

            {/* Contextual Lead Capture Form */}
            <BlogLeadForm
              articleTitle={post.title}
              articleSlug={post.slug}
              defaultService={post.cta?.serviceVal || "General Inquiry"}
              headline={post.cta?.headline}
              subtext={post.cta?.subtext}
              badge={post.cta?.badge}
            />

            {/* External Reference Documentation */}
            {post.externalResources && post.externalResources.length > 0 && (
              <section className="my-12 p-6 rounded-2xl bg-[#141414] border border-[#242424]">
                <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-[#A6A6A6] font-semibold">
                  <HiOutlineCheckBadge className="text-base text-[#315EFB]" />
                  <span>Authoritative Industry & Developer Resources</span>
                </div>
                <div className="space-y-3">
                  {post.externalResources.map((res, idx) => (
                    <a
                      key={idx}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-xl bg-[#181818] border border-[#2B2B2B] hover:border-[#315EFB]/60 transition-colors group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-[#F5F5F3] group-hover:text-white">
                          {res.title}
                        </span>
                        <HiOutlineArrowTopRightOnSquare className="text-sm text-[#777777] group-hover:text-[#315EFB] shrink-0" />
                      </div>
                      <p className="text-xs text-[#888888] mt-1">
                        {res.description}
                      </p>
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ Accordion Section */}
            <FAQSection faqs={post.faqs} />
          </article>

          {/* Sticky Sidebar Column */}
          <aside className="lg:col-span-4 order-1 lg:order-2 space-y-6">
            {/* Table of Contents */}
            <TableOfContents items={post.tableOfContents} />

            {/* Contextual Service Pill Card */}
            {post.serviceLink && (
              <div className="p-6 rounded-2xl bg-[#161616] border border-[#2B2B2B]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#315EFB] uppercase tracking-wider font-semibold mb-2">
                  <HiOutlineBriefcase className="text-base" />
                  <span>Related Service</span>
                </div>
                <h4 className="text-base font-semibold text-[#F5F5F3] mb-2">
                  {post.serviceName}
                </h4>
                <p className="text-xs text-[#888888] leading-relaxed mb-4">
                  Discover how our engineering team builds and maintains scalable business systems.
                </p>
                <Link
                  to={post.serviceLink}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#315EFB] hover:underline"
                >
                  <span>Explore Service Overview →</span>
                </Link>
              </div>
            )}

            {/* Related Case Study Proof */}
            {post.caseStudyLink && (
              <div className="p-6 rounded-2xl bg-[#161616] border border-[#2B2B2B]">
                <div className="text-xs font-mono text-[#A6A6A6] uppercase tracking-wider font-semibold mb-2">
                  Verified Case Study
                </div>
                <h4 className="text-base font-semibold text-[#F5F5F3] mb-2">
                  {post.caseStudyName}
                </h4>
                <p className="text-xs text-[#888888] leading-relaxed mb-4">
                  Read our technical breakdown of objectives, architectural decisions, and production deliverables.
                </p>
                <Link
                  to={post.caseStudyLink}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#315EFB] hover:underline"
                >
                  <span>View Case Study Breakdown →</span>
                </Link>
              </div>
            )}
          </aside>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-24 pt-12 border-t border-[#262626]">
            <div className="mb-8">
              <span className="text-xs font-mono text-[#315EFB] uppercase tracking-wider block mb-2 font-semibold">
                Continue Reading
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#F5F5F3] tracking-tight">
                Related Architecture Guides
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {relatedPosts.map((rPost) => (
                <BlogCard key={rPost.slug} post={rPost} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

