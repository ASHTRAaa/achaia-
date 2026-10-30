import { useState, useEffect, useRef } from "react";
import { useSEO } from "../../hooks/useSEO";

const serviceOptions = [
  "Shopify & E-Commerce",
  "ERP & Business Systems",
  "Android & Application Development",
  "AI & Workflow Automation",
  "Custom Software Engineering",
];

const Contact = () => {
  useSEO({
    title: "Contact Achaia Labs — Discuss Your Software or Automation Project",
    description:
      "Get in touch with Achaia Labs' engineering team. Discuss your Shopify store, ERP software, mobile application, or AI workflow automation project.",
    path: "/contact",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handlePointerDown = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  
  const handleServiceSelect = (service) => {
    setFormData((p) => ({ ...p, service }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://www.sendmyform.live/api/f/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service || "General Inquiry",
          message: formData.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="font-body-md text-[#F5F5F3] bg-[#111111] min-h-screen">
      <main className="pt-16 pb-20 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-margin-desktop max-w-7xl mx-auto">
        {/* Page Hero */}
        <section className="mb-12 max-w-3xl">
          <span className="text-[#315EFB] font-mono text-xs uppercase tracking-widest block mb-3 font-semibold">
            Start a Conversation
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#F5F5F3] tracking-tight leading-[1.1] mb-6">
            Discuss your project with our engineering team.
          </h1>
          <p className="text-base sm:text-lg text-[#A6A6A6] leading-relaxed">
            Tell us about your business, operational bottleneck, or the software system you need built. We respond within 24 hours with actionable engineering feedback.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Sidebar */}
          <aside className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            <div className="p-8 rounded-3xl bg-[#181818] border border-[#303030] shadow-md">
              <h2 className="text-xs font-mono font-semibold text-[#777777] uppercase tracking-wider mb-6">
                Direct Contact Information
              </h2>

              <div className="space-y-6 text-sm">
                <div>
                  <p className="text-xs font-mono font-semibold text-[#A6A6A6] uppercase tracking-wider mb-1">
                    Email Inquiry
                  </p>
                  <a
                    href="mailto:contact@achaialabs.tech"
                    className="font-medium text-[#F5F5F3] hover:text-[#315EFB] transition-colors"
                  >
                    contact@achaialabs.tech
                  </a>
                </div>

                <div>
                  <p className="text-xs font-mono font-semibold text-[#A6A6A6] uppercase tracking-wider mb-1">
                    Direct Phone Lines
                  </p>
                  <div className="space-y-1">
                    <a
                      href="tel:+916202589421"
                      className="block font-medium text-[#F5F5F3] hover:text-[#315EFB] transition-colors"
                    >
                      +91 6202589421
                    </a>
                    <a
                      href="tel:+917633831340"
                      className="block font-medium text-[#F5F5F3] hover:text-[#315EFB] transition-colors"
                    >
                      +91 7633831340
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-mono font-semibold text-[#A6A6A6] uppercase tracking-wider mb-1">
                    Operating Office
                  </p>
                  <p className="text-[#CCCCCC] leading-relaxed">
                    Godrej Waterside<br />
                    Salt Lake, Kolkata, West Bengal - 700091<br />
                    India
                  </p>
                </div>

                <div>
                  <p className="text-xs font-mono font-semibold text-[#A6A6A6] uppercase tracking-wider mb-1">
                    Response Window
                  </p>
                  <p className="text-[#CCCCCC]">
                    Within 24 hours (Monday to Saturday)
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Assurance Box */}
            <div className="p-6 rounded-2xl bg-[#181818] border border-[#303030] text-xs sm:text-sm text-[#CCCCCC] space-y-2">
              <p className="font-semibold text-[#F5F5F3] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#315EFB] text-base">verified</span>
                Direct Engineer Consultation
              </p>
              <p className="text-[#A6A6A6] leading-relaxed">
                You will speak directly with technical leads who build systems, not commission-based sales reps reading from a script.
              </p>
            </div>
          </aside>

          {/* Contact Form */}
          <section className="lg:col-span-8 order-1 lg:order-2">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#181818] border border-[#303030] shadow-md">
              <h2 className="text-2xl font-semibold text-[#F5F5F3] mb-8">
                Send a Message
              </h2>

              {status === "success" ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                    <span className="material-symbols-outlined text-3xl">check</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#F5F5F3]">
                    Message Sent Successfully
                  </h3>
                  <p className="text-[#A6A6A6] max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                    Thank you for reaching out. An engineering lead will review your project details and get in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center gap-2 bg-[#315EFB] text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-[#254EDB] transition-all mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A6A6A6] block">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input text-sm"
                        placeholder="e.g. Rahul Sharma"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A6A6A6] block">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input text-sm"
                        placeholder="e.g. rahul@company.com"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A6A6A6] block">
                        Company / Business Name
                      </label>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input text-sm"
                        placeholder="e.g. Sharma Textiles Pvt Ltd"
                        type="text"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A6A6A6] block">
                        Service of Interest
                      </label>
                      <div className="scope-select" ref={dropdownRef}>
                        <button
                          type="button"
                          className={`form-input scope-select__trigger text-sm ${isDropdownOpen ? "scope-select__trigger--open" : ""}`}
                          aria-haspopup="listbox"
                          aria-expanded={isDropdownOpen}
                          onClick={() => setIsDropdownOpen((open) => !open)}
                        >
                          <span className={formData.service ? "text-[#F5F5F3]" : "text-[#777777]"}>
                            {formData.service || "Select a service category"}
                          </span>
                          <span className="material-symbols-outlined scope-select__icon text-sm">
                            keyboard_arrow_down
                          </span>
                        </button>
                        {isDropdownOpen && (
                          <div className="scope-select__pane" role="listbox">
                            {serviceOptions.map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                role="option"
                                aria-selected={formData.service === opt}
                                className="scope-select__option"
                                onClick={() => handleServiceSelect(opt)}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A6A6A6] block">
                      Project Details / Business Problem <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-input text-sm resize-none"
                      placeholder="Describe the system you need built, your existing tech stack, or the operational challenge you are solving..."
                      rows={5}
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-950/80 border border-red-800/60 text-red-300 text-xs sm:text-sm">
                      Submission encountered an error. Please email us directly at{" "}
                      <a href="mailto:contact@achaialabs.tech" className="underline font-semibold text-white">
                        contact@achaialabs.tech
                      </a>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center justify-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-8 py-4 rounded-full font-semibold text-sm transition-all shadow-md active:scale-95 disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Contact;
