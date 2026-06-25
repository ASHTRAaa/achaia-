import { useState, useEffect, useRef } from "react";

const roleOptions = [
  "Frontend Wizard",
  "Backend & Infrastructure Architect",
  "AI / Machine Learning Engineer",
  "Product Strategist & Designer",
  "Generalist / Other",
];

const JoinTeam = () => {
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

    // Cursor glow effect
    const handleMouseMove = (e) => {
      const el = document.createElement("div");
      el.style.cssText = `position:fixed;width:128px;height:128px;background:rgba(189,245,0,0.04);filter:blur(50px);border-radius:50%;pointer-events:none;z-index:0;left:${e.clientX - 64}px;top:${e.clientY - 64}px;transition:opacity 1s;`;
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
    <div className="font-body-md text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Ambient Background Blooms */}
      <div
        className="fixed top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full pointer-events-none z-0"
        style={{ background: "rgba(189,245,0,0.03)", filter: "blur(120px)" }}
      />
      <div
        className="fixed bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full pointer-events-none z-0"
        style={{ background: "rgba(131,66,251,0.04)", filter: "blur(120px)" }}
      />

      <main className="relative z-10 pt-16 pb-14 sm:pt-20 md:pt-24 px-6 md:px-margin-desktop max-w-7xl mx-auto">
        {/* Hero */}
        <section className="mb-10 md:mb-16 max-w-4xl text-left">
          <span className="font-label-caps text-label-caps text-secondary-fixed tracking-widest uppercase mb-4 block">
            We are hiring
          </span>
          <h1 className="font-display-xl text-4xl md:text-display-xl mb-6 font-semibold tracking-tight">
            Build the next frontier <br />
            <span className="text-on-surface-variant opacity-60">with our high-performance team.</span>
          </h1>
          <p className="font-subheading text-subheading text-on-surface-variant max-w-2xl leading-relaxed">
            We don’t just build software. We engineer technological reality. If you are obsessed with speed, design, and building high-impact digital systems, let’s start a conversation.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-gutter order-2 lg:order-1">
            <div className="glass-card p-8 md:p-10 rounded-xl">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-8 block opacity-50">
                Core Lab Pillars
              </h3>
              <div className="space-y-12">
                <div>
                  <span className="material-symbols-outlined text-secondary-fixed mb-2" style={{ fontSize: "24px" }}>
                    bolt
                  </span>
                  <h4 className="font-subheading text-on-surface mb-1">Unmatched Speed</h4>
                  <p className="text-on-surface-variant text-sm">We ship high-fidelity products in fractions of standard timelines.</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-secondary-fixed mb-2" style={{ fontSize: "24px" }}>
                    palette
                  </span>
                  <h4 className="font-subheading text-on-surface mb-1">Premium Design</h4>
                  <p className="text-on-surface-variant text-sm">Every element is crafted with meticulous visual precision.</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-secondary-fixed mb-2" style={{ fontSize: "24px" }}>
                    terminal
                  </span>
                  <h4 className="font-subheading text-on-surface mb-1">AI-Native Stack</h4>
                  <p className="text-on-surface-variant text-sm">Deeply integrating AI workflows to augment engineering velocity.</p>
                </div>
              </div>
              <div className="mt-16 pt-8 border-t border-white/5 flex flex-col gap-4">
                <h4 className="font-label-caps text-label-caps text-on-surface-variant opacity-50">Direct Pitch</h4>
                <a href="mailto:contact@achaialabs.tech" className="text-[#A0D600] hover:underline text-sm font-semibold">
                  contact@achaialabs.tech
                </a>
              </div>
            </div>

            {/* Visual Card */}
            <div className="relative h-64 rounded-xl overflow-hidden glass-card group">
              <img
                alt="Innovation Lab"
                className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-label-caps text-label-caps text-secondary-fixed">Join Achaia Labs</p>
              </div>
            </div>
          </aside>

          {/* Form */}
          <section className="lg:col-span-8 order-1 lg:order-2">
            <div className="glass-card p-8 md:p-12 rounded-xl relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{ background: "rgba(189,245,0,0.03)", filter: "blur(100px)" }}
              />
              <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-12">Apply to the Lab</h2>

              {status === "success" ? (
                <div className="text-center py-20 space-y-6">
                  <span className="material-symbols-outlined text-6xl text-secondary-fixed">check_circle</span>
                  <h3 className="font-headline-lg text-2xl text-on-surface">Application Transmitted</h3>
                  <p className="text-on-surface-variant">
                    Your credentials have been securely logged. Our engineering lead will review them and reach out.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="bg-secondary-fixed text-on-secondary-fixed px-8 py-3 rounded-full font-label-caps text-label-caps hover:scale-105 transition-all"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="field-group space-y-2">
                      <label className="font-label-caps text-label-caps text-on-surface-variant/70 block ml-1 transition-colors">
                        Identity
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Your Name"
                        type="text"
                      />
                    </div>
                    <div className="field-group space-y-2">
                      <label className="font-label-caps text-label-caps text-on-surface-variant/70 block ml-1 transition-colors">
                        Electronic Mail
                      </label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="you@domain.com"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="field-group space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant/70 block ml-1 transition-colors">
                      Your Superpower
                    </label>
                    <div className="scope-select" ref={roleDropdownRef}>
                      <button
                        type="button"
                        className={`form-input scope-select__trigger ${
                          isRoleOpen ? "scope-select__trigger--open" : ""
                        } ${formData.role ? "" : "scope-select__trigger--placeholder"}`}
                        aria-haspopup="listbox"
                        aria-expanded={isRoleOpen}
                        onClick={() => setIsRoleOpen((open) => !open)}
                      >
                        <span>{formData.role || "Select your primary expertise"}</span>
                        <span className="material-symbols-outlined scope-select__icon">keyboard_arrow_down</span>
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
                    <label className="font-label-caps text-label-caps text-on-surface-variant/70 block ml-1 transition-colors">
                      Digital Footprints (Portfolio / GitHub / LinkedIn)
                    </label>
                    <input
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="https://github.com/yourusername"
                      type="url"
                    />
                  </div>

                  <div className="field-group space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant/70 block ml-1 transition-colors">
                      The Pitch
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-input resize-none"
                      placeholder="Tell us about a complex system you have designed or why you want to build with us..."
                      rows={5}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-error text-sm">Transmission failed. Please try again or email us directly.</p>
                  )}

                  <div className="flex items-center gap-4">
                    <div className="flex-grow h-[1px] bg-white/5" />
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group flex items-center gap-4 bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-full font-label-caps text-label-caps transition-all hover:pr-10 active:scale-95 shadow-2xl shadow-secondary-fixed/20 disabled:opacity-60"
                    >
                      {status === "submitting" ? "Transmitting..." : "Transmit Application"}
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap gap-12 items-center opacity-30 grayscale hover:opacity-50 transition-opacity">
              {["SPEED", "METICULOUS", "BUILD", "SCALE"].map((b) => (
                <span key={b} className="font-label-caps text-label-caps tracking-[0.4em]">
                  {b}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default JoinTeam;
