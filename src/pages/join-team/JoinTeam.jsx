import { useState, useEffect, useRef } from "react";
import { useSEO } from "../../hooks/useSEO";

const roleOptions = [
  "Frontend Engineer",
  "Backend & Cloud Architect",
  "AI / Machine Learning Engineer",
  "Product Designer & Strategist",
  "Generalist / Software Engineer",
];

const JoinTeam = () => {
  useSEO({
    title: "Careers & Engineering Opportunities — Join Achaia Labs",
    description: "Join the engineering team at Achaia Labs. Build high-impact client systems and in-house software products.",
    path: "/join-our-team",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    portfolio: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const roleDropdownRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Cursor glow effect in brand blue
    const handleMouseMove = (e) => {
      const el = document.createElement("div");
      el.style.cssText = `position:fixed;width:140px;height:140px;background:rgba(49,94,251,0.07);filter:blur(50px);border-radius:50%;pointer-events:none;z-index:0;left:${e.clientX - 70}px;top:${e.clientY - 70}px;transition:opacity 1s;`;
      document.body.appendChild(el);
      setTimeout(() => {
        el.style.opacity = "0";
        setTimeout(() => el.remove(), 1000);
      }, 100);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Label highlight on focus
    const inputs = document.querySelectorAll(".form-input");
    inputs.forEach((input) => {
      const onFocus = () =>
        input.closest(".field-group")?.querySelector("label")?.classList.add("!text-secondary-fixed");
      const onBlur = () =>
        input.closest(".field-group")?.querySelector("label")?.classList.remove("!text-secondary-fixed");
      input.addEventListener("focus", onFocus);
      input.addEventListener("blur", onBlur);
    });

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handlePointerDown = (e) => {
      if (!roleDropdownRef.current?.contains(e.target)) {
        setIsRoleOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsRoleOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleRoleSelect = (role) => {
    setFormData((p) => ({ ...p, role }));
    setIsRoleOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://www.sendmyform.live/api/f/join-team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: formData.role,
          portfolio: formData.portfolio,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", role: "", portfolio: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="font-body-md text-[#F5F5F3] bg-[#111111] min-h-screen">
      <main className="relative z-10 pt-16 pb-14 sm:pt-20 md:pt-24 px-6 md:px-margin-desktop max-w-7xl mx-auto">
        {/* Hero */}
        <section className="mb-10 md:mb-16 max-w-4xl text-left">
          <span className="font-mono text-xs font-semibold text-[#315EFB] tracking-widest uppercase mb-4 block">
            We are hiring
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#F5F5F3] mb-6 font-semibold tracking-tight leading-tight">
            Build high-impact systems <br />
            <span className="text-[#A6A6A6]">with our engineering team.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#A6A6A6] max-w-2xl leading-relaxed">
            We don’t build disposable prototypes. We engineer software systems, commerce platforms, and automation pipelines for growing businesses. If you value craft, technical honesty, and real ownership, let’s talk.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            <div className="p-8 md:p-10 rounded-3xl bg-[#181818] border border-[#303030] shadow-md">
              <h3 className="font-mono text-xs font-semibold text-[#777777] uppercase tracking-wider mb-8 block">
                Core Lab Pillars
              </h3>
              <div className="space-y-8">
                <div>
                  <span className="material-symbols-outlined text-[#315EFB] mb-2" style={{ fontSize: "24px" }}>
                    bolt
                  </span>
                  <h4 className="font-semibold text-base text-[#F5F5F3] mb-1">Execution Speed</h4>
                  <p className="text-[#A6A6A6] text-sm">We ship production-grade code with weekly staging releases and fast feedback loops.</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-[#315EFB] mb-2" style={{ fontSize: "24px" }}>
                    palette
                  </span>
                  <h4 className="font-semibold text-base text-[#F5F5F3] mb-1">Meticulous Craft</h4>
                  <p className="text-[#A6A6A6] text-sm">Every interaction, response time, and edge case is intentionally designed and tested.</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-[#315EFB] mb-2" style={{ fontSize: "24px" }}>
                    terminal
                  </span>
                  <h4 className="font-semibold text-base text-[#F5F5F3] mb-1">Modern Architecture</h4>
                  <p className="text-[#A6A6A6] text-sm">Pragmatic engineering: React, Node, Python, cloud pipelines, and purposeful automation.</p>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-[#262626] flex flex-col gap-2">
                <h4 className="font-mono text-xs font-semibold text-[#777777] uppercase tracking-wider">Direct Pitch</h4>
                <a href="mailto:contact@achaialabs.tech" className="text-[#315EFB] hover:underline text-sm font-semibold">
                  contact@achaialabs.tech
                </a>
              </div>
            </div>
          </aside>

          {/* Form */}
          <section className="lg:col-span-8 order-1 lg:order-2">
            <div className="p-8 md:p-12 rounded-3xl bg-[#181818] border border-[#303030] shadow-md">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#F5F5F3] mb-8">Apply to Join</h2>

              {status === "success" ? (
                <div className="text-center py-20 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                    <span className="material-symbols-outlined text-3xl">check</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#F5F5F3]">Application Received</h3>
                  <p className="text-[#A6A6A6] max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                    Your details have been received. An engineering lead will review your portfolio and reach out.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="bg-[#315EFB] hover:bg-[#254EDB] text-white px-8 py-3 rounded-full text-xs font-semibold transition-all shadow-md active:scale-95 mt-4"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="field-group space-y-2">
                      <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A6A6A6] block">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input text-sm"
                        placeholder="e.g. Priya Patel"
                        type="text"
                      />
                    </div>
                    <div className="field-group space-y-2">
                      <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A6A6A6] block">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input text-sm"
                        placeholder="you@domain.com"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="field-group space-y-2">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A6A6A6] block">
                      Primary Discipline / Role
                    </label>
                    <div className="scope-select" ref={roleDropdownRef}>
                      <button
                        type="button"
                        className={`form-input scope-select__trigger text-sm ${
                          isRoleOpen ? "scope-select__trigger--open" : ""
                        }`}
                        aria-haspopup="listbox"
                        aria-expanded={isRoleOpen}
                        onClick={() => setIsRoleOpen((open) => !open)}
                      >
                        <span className={formData.role ? "text-[#F5F5F3]" : "text-[#777777]"}>
                          {formData.role || "Select your primary expertise"}
                        </span>
                        <span className="material-symbols-outlined scope-select__icon text-sm">keyboard_arrow_down</span>
                      </button>
                      <input type="hidden" name="role" value={formData.role} />
                      {isRoleOpen && (
                        <div className="scope-select__pane" role="listbox" aria-label="Role / Superpower">
                          {roleOptions.map((role) => (
                            <button
                              key={role}
                              type="button"
                              role="option"
                              aria-selected={formData.role === role}
                              className="scope-select__option"
                              onClick={() => handleRoleSelect(role)}
                            >
                              {role}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="field-group space-y-2">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A6A6A6] block">
                      Portfolio / GitHub / Work Links <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      required
                      className="form-input text-sm"
                      placeholder="https://github.com/yourusername or portfolio URL"
                      type="url"
                    />
                  </div>

                  <div className="field-group space-y-2">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A6A6A6] block">
                      Introduction & Recent Projects <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-input text-sm resize-none"
                      placeholder="Tell us about a complex software system or interface you engineered..."
                      rows={5}
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-950/80 border border-red-800/60 text-red-300 text-xs sm:text-sm">
                      Submission encountered an error. Please email your details directly to{" "}
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
                          <span>Submitting Application...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
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

export default JoinTeam;
