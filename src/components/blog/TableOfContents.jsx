import { useState, useEffect } from "react";
import { HiOutlineListBullet } from "react-icons/hi2";

export default function TableOfContents({ items = [] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0.1 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  const handleClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offset = 90; // account for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <nav
      aria-label="Table of contents"
      className="p-6 rounded-2xl bg-[#161616] border border-[#2B2B2B] shadow-lg sticky top-24"
    >
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#262626] text-xs font-mono uppercase tracking-wider text-[#F5F5F3] font-semibold">
        <HiOutlineListBullet className="text-base text-[#315EFB]" />
        <span>Table of Contents</span>
      </div>
      <ul className="space-y-2 text-xs sm:text-sm">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`block py-1 pl-2.5 -ml-2.5 rounded-md border-l-2 transition-all duration-200 ${
                  isActive
                    ? "border-[#315EFB] text-white font-medium bg-[#1F1F1F]"
                    : "border-transparent text-[#777777] hover:text-[#CCCCCC] hover:border-[#444444]"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

