import { Link } from "react-router-dom";
import { HiOutlineArrowUpRight, HiOutlineClock, HiOutlineCalendar } from "react-icons/hi2";

export default function BlogCard({ post }) {
  if (!post) return null;

  return (
    <article className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#181818] border border-[#2E2E2E] hover:border-[#315EFB]/60 transition-all duration-300 hover:shadow-xl hover:shadow-black/40">
      <div>
        {/* Category & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-[#222222] border border-[#333333] text-xs font-mono font-medium text-[#315EFB]">
            {post.category}
          </span>
          <div className="flex items-center gap-3 text-xs text-[#777777] font-mono">
            <span className="flex items-center gap-1">
              <HiOutlineClock className="text-sm" />
              {post.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <HiOutlineCalendar className="text-sm" />
              {post.publishDate}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F5F3] group-hover:text-white tracking-tight leading-snug mb-3">
          <Link to={`/blog/${post.slug}`} className="focus:outline-none">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[#888888] leading-relaxed line-clamp-3 mb-6">
          {post.excerpt}
        </p>
      </div>

      {/* Footer link */}
      <div className="pt-4 border-t border-[#262626] flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-wider text-[#777777] group-hover:text-[#A6A6A6] transition-colors">
          Read Guide
        </span>
        <Link
          to={`/blog/${post.slug}`}
          className="w-9 h-9 rounded-full bg-[#202020] border border-[#303030] group-hover:bg-[#315EFB] group-hover:border-[#315EFB] text-[#A6A6A6] group-hover:text-white flex items-center justify-center transition-all duration-300"
          aria-label={`Read article: ${post.title}`}
        >
          <HiOutlineArrowUpRight className="text-base" />
        </Link>
      </div>
    </article>
  );
}

