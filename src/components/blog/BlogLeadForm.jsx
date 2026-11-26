import { useState } from "react";
import { HiOutlineCheckCircle, HiOutlineExclamationCircle, HiOutlineArrowRight } from "react-icons/hi2";

/**
 * BlogLeadForm — Contextual lead capture form for blog articles.
 * Reuses the existing SendMyForm API contract at https://www.sendmyform.live/api/f/contact-us
 */
export default function BlogLeadForm({
  articleTitle = "",
  articleSlug = "",
  defaultService = "General Inquiry",
  headline = "Discuss Your Architecture Requirements",
  subtext = "Tell us about your operational challenge or project requirements. Our engineering team reviews and responds within 24 hours.",
  badge = "Direct Engineering Consultation",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setStatus("submitting");

    // Compose payload using existing contract
    const contextualMessage = `[Source: Blog / ${articleTitle || articleSlug}]\nCompany: ${
      formData.company || "Not specified"
    }\n\nProject Requirements:\n${formData.message || "Requested direct consultation from article."}`;

    try {
      const res = await fetch("https://www.sendmyform.live/api/f/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || "",
          service: defaultService,
          message: contextualMessage,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative my-12 p-6 sm:p-8 md:p-10 rounded-3xl bg-[#141414] border border-[#2A2A2A] shadow-2xl overflow-hidden">
      {/* Subtle ambient lighting accent */}
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(49, 94, 251, 0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl">
        <span className="inline-block px-3 py-1 rounded-full bg-[#1F1F1F] border border-[#333333] text-xs font-mono font-medium text-[#315EFB] uppercase tracking-wider mb-4">
          {badge}
        </span>
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#F5F5F3] tracking-tight leading-snug mb-3">
          {headline}
        </h3>
        <p className="text-sm sm:text-base text-[#888888] leading-relaxed mb-8">
          {subtext}
        </p>

        {status === "success" ? (
          <div className="p-6 rounded-2xl bg-[#112211] border border-[#225522] text-[#A3E635] flex items-start gap-4">
            <HiOutlineCheckCircle className="text-2xl shrink-0 mt-0.5 text-emerald-400" />
            <div>
              <h4 className="text-base font-semibold text-white mb-1">
                Inquiry received successfully
              </h4>
              <p className="text-sm text-[#CCCCCC] leading-relaxed">
                Thank you for reaching out. An Achaia Labs systems engineer will evaluate your requirements and contact you at {formData.email || "your email"} within 24 hours.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {status === "error" && (
              <div className="p-4 rounded-xl bg-[#2D1212] border border-[#5A2020] text-red-300 flex items-center gap-3 text-sm">
                <HiOutlineExclamationCircle className="text-xl shrink-0 text-red-400" />
                <span>
                  Unable to submit inquiry. Please check your connection or email our team directly at{" "}
                  <a href="mailto:contact@achaialabs.tech" className="underline text-white">
                    contact@achaialabs.tech
                  </a>.
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="lead-name" className="block text-xs font-mono uppercase text-[#777777] tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  id="lead-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#303030] text-[#F5F5F3] placeholder-[#555555] text-sm focus:outline-none focus:border-[#315EFB] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="lead-email" className="block text-xs font-mono uppercase text-[#777777] tracking-wider mb-1.5">
                  Work Email *
                </label>
                <input
                  id="lead-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#303030] text-[#F5F5F3] placeholder-[#555555] text-sm focus:outline-none focus:border-[#315EFB] transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="lead-company" className="block text-xs font-mono uppercase text-[#777777] tracking-wider mb-1.5">
                Company / Organization
              </label>
              <input
                id="lead-company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name or Domain"
                disabled={status === "submitting"}
                className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#303030] text-[#F5F5F3] placeholder-[#555555] text-sm focus:outline-none focus:border-[#315EFB] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="lead-message" className="block text-xs font-mono uppercase text-[#777777] tracking-wider mb-1.5">
                Project Overview / Primary Challenge
              </label>
              <textarea
                id="lead-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your systems requirement or operational bottleneck..."
                disabled={status === "submitting"}
                className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#303030] text-[#F5F5F3] placeholder-[#555555] text-sm focus:outline-none focus:border-[#315EFB] transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#315EFB] hover:bg-[#254EDB] text-white font-medium text-sm transition-all shadow-lg shadow-blue-900/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "submitting" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Architecture Inquiry</span>
                    <HiOutlineArrowRight className="text-base" />
                  </>
                )}
              </button>

              <span className="text-xs text-[#666666] font-mono">
                Direct engineer review • No sales spam
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

