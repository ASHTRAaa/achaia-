import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", scope: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  useEffect(() => {
    window.scrollTo(0, 0);

    // Cursor glow effect
    const handleMouseMove = (e) => {
      const el = document.createElement("div");
      el.style.cssText = `position:fixed;width:128px;height:128px;background:rgba(189,245,0,0.04);filter:blur(50px);border-radius:50%;pointer-events:none;z-index:0;left:${e.clientX - 64}px;top:${e.clientY - 64}px;transition:opacity 1s;`;
      document.body.appendChild(el);
      setTimeout(() => { el.style.opacity = "0"; setTimeout(() => el.remove(), 1000); }, 100);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Label highlight on focus
    const inputs = document.querySelectorAll(".form-input");
    inputs.forEach((input) => {
      const onFocus = () => input.closest(".field-group")?.querySelector("label")?.classList.add("!text-secondary-fixed");
      const onBlur = () => input.closest(".field-group")?.querySelector("label")?.classList.remove("!text-secondary-fixed");
      input.addEventListener("focus", onFocus);
      input.addEventListener("blur", onBlur);
    });

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://www.sendmyform.live/api/f/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, email: formData.email, scope: formData.scope, message: formData.message }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", scope: "", message: "" });
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
      <div className="fixed top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full pointer-events-none z-0" style={{ background: "rgba(189,245,0,0.03)", filter: "blur(120px)" }} />
      <div className="fixed bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full pointer-events-none z-0" style={{ background: "rgba(205,194,219,0.04)", filter: "blur(120px)" }} />

      <main className="relative z-10 pt-40 pb-section-gap px-6 md:px-margin-desktop max-w-7xl mx-auto">
        {/* Hero */}
        <section className="mb-gutter md:mb-20 max-w-4xl">
          <span className="font-label-caps text-label-caps text-secondary-fixed tracking-widest uppercase mb-4 block">Inquiry & Collaboration</span>
          <h1 className="font-display-xl text-4xl md:text-display-xl mb-6">
            Let's build a new <br /><span className="text-on-surface-variant opacity-60">technological reality.</span>
          </h1>
          <p className="font-subheading text-subheading text-on-surface-variant max-w-2xl">
            We don't just build software. We engineer high-performance digital ecosystems for visionaries. Let's start a conversation about your next breakthrough.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-gutter order-2 lg:order-1">
            <div className="glass-card p-8 md:p-10 rounded-xl">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-8 block opacity-50">Global Lab Access</h3>
              <div className="space-y-12">
                <div>
                  <span className="material-symbols-outlined text-secondary-fixed mb-2" style={{ fontSize: "24px" }}>lan</span>
                  <h4 className="font-subheading text-on-surface mb-1">Direct Liaison</h4>
                  <p className="text-on-surface-variant">hello@achaia-labs.com</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-secondary-fixed mb-2" style={{ fontSize: "24px" }}>hub</span>
                  <h4 className="font-subheading text-on-surface mb-1">Operational Center</h4>
                  <p className="text-on-surface-variant leading-relaxed">480 Tech Plaza, Floor 12<br />San Francisco, CA 94103</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-secondary-fixed mb-2" style={{ fontSize: "24px" }}>schedule</span>
                  <h4 className="font-subheading text-on-surface mb-1">Availability</h4>
                  <p className="text-on-surface-variant">Mon — Fri: 09:00 — 18:00 PST</p>
                </div>
              </div>
              <div className="mt-16 pt-8 border-t border-white/5 flex gap-4">
                {["alternate_email", "group", "public"].map((icon) => (
                  <a key={icon} href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-secondary-fixed !transform-none">
                    <span className="material-symbols-outlined text-sm">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
            {/* Visual */}
            <div className="relative h-64 rounded-xl overflow-hidden glass-card group">
              <img
                alt="Lab Alpha-01"
                className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZs6fuHqtUzEc62hGgeYZsFYtmce3EitYPiYvzy2IQiCGfLEcees2tSja04mErOUC5zP3vuPhhR4yfpdCDbtB2wJ0eyY99ET1jD-bUXVo-DqRrUHrxyRjGGgozvEuoRA19Php_j_uftF40rZSeI0YGml87cXkzRA1I_3Dm6ShJ7HFDairff8hO6JaFqQdfq1PVvlawxd9WI-Xq2gGzIZf3nBPQt-T7IBMUU_Sfu7EwwLmbVsQRDyyvjtYO7H16vJOePT-q2IGXx_kI"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-label-caps text-label-caps text-secondary-fixed">Lab Alpha-01</p>
              </div>
            </div>
          </aside>

          {/* Form */}
          <section className="lg:col-span-8 order-1 lg:order-2">
            <div className="glass-card p-8 md:p-12 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: "rgba(189,245,0,0.03)", filter: "blur(100px)" }} />
              <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-12">Start a Discussion</h2>

              {status === "success" ? (
                <div className="text-center py-20 space-y-6">
                  <span className="material-symbols-outlined text-6xl text-secondary-fixed">check_circle</span>
                  <h3 className="font-headline-lg text-2xl text-on-surface">Transmission Received</h3>
                  <p className="text-on-surface-variant">Our lab team will contact you within 24 hours to begin the conversation.</p>
                  <button onClick={() => setStatus("idle")} className="bg-secondary-fixed text-on-secondary-fixed px-8 py-3 rounded-full font-label-caps text-label-caps hover:scale-105 transition-all">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="field-group space-y-2">
                      <label className="font-label-caps text-label-caps text-on-surface-variant/70 block ml-1 transition-colors">Identity</label>
                      <input name="name" value={formData.name} onChange={handleChange} required className="form-input" placeholder="Your Name" type="text" />
                    </div>
                    <div className="field-group space-y-2">
                      <label className="font-label-caps text-label-caps text-on-surface-variant/70 block ml-1 transition-colors">Electronic Mail</label>
                      <input name="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="Email@organization.com" type="email" />
                    </div>
                  </div>
                  <div className="field-group space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant/70 block ml-1 transition-colors">Vision / Scope</label>
                    <select name="scope" value={formData.scope} onChange={handleChange} className="form-input appearance-none cursor-pointer">
                      <option value="">Select project category</option>
                      <option>Software Engineering</option>
                      <option>AI / Machine Learning</option>
                      <option>Product Strategy</option>
                      <option>Infrastructure</option>
                    </select>
                  </div>
                  <div className="field-group space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant/70 block ml-1 transition-colors">The Discussion</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required className="form-input resize-none" placeholder="Describe the problem you are solving or the system you intend to build..." rows={6} />
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
                      {status === "submitting" ? "Transmitting..." : "Transmit Request"}
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap gap-12 items-center opacity-30 grayscale hover:opacity-50 transition-opacity">
              {["FORGE TECH", "NEXUS.CORE", "STRATUM", "ORBITAL"].map((b) => (
                <span key={b} className="font-label-caps text-label-caps tracking-[0.4em]">{b}</span>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Contact;
