import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";

export default function FAQSection({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section id="faqs" className="my-16 pt-10 border-t border-[#262626]">
      <div className="mb-8">
        <span className="text-[#315EFB] font-mono text-xs uppercase tracking-widest block mb-2 font-semibold">
          Knowledge Base
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#F5F5F3] tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-[#181818] border-[#3A3A3A] shadow-md"
                  : "bg-[#141414] border-[#262626] hover:border-[#333333]"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
              >
                <span className="text-base sm:text-lg font-medium text-[#F5F5F3]">
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full bg-[#202020] border border-[#303030] flex items-center justify-center shrink-0 text-[#A6A6A6] transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-[#315EFB] text-white border-[#315EFB]" : ""
                  }`}
                >
                  <HiOutlineChevronDown className="text-base" />
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#888888] leading-relaxed border-t border-[#222222]">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

