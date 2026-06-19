import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Work = () => {
  const glowRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleMouseMove = (e) => {
      glowRefs.current.forEach((glow, index) => {
        if (!glow) return;
        const factor = (index + 1) * 0.02;
        glow.style.transform = `translate(${e.clientX * factor}px, ${e.clientY * factor}px)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".work-section").forEach((s) => {
      s.classList.add("transition-all", "duration-1000", "opacity-0", "translate-y-10");
      observer.observe(s);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="font-body-md text-body-md selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Ambient glows */}
      <div ref={(el) => (glowRefs.current[0] = el)} className="ambient-glow top-[-10%] right-[-10%]" />
      <div ref={(el) => (glowRefs.current[1] = el)} className="ambient-glow bottom-[10%] left-[-10%]" />

      {/* ── Hero ── */}
      <section className="work-section px-6 md:px-margin-desktop pt-24 pb-section-gap max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <span className="text-secondary-fixed font-label-caps text-label-caps tracking-widest mb-6 block uppercase">Our Portfolio</span>
          <h1 className="font-display-xl text-display-xl text-white mb-8 leading-[1.1]">
            Engineering Excellence. <br />Digitally Defined.
          </h1>
          <p className="font-subheading text-subheading text-on-surface-variant max-w-2xl">
            We partner with ambitious founders to build high-performance digital products. Our work combines precision engineering with cinematic design to drive measurable impact.
          </p>
        </div>
      </section>

      {/* ── Project 01 – Large Editorial (12-col grid) ── */}
      <section className="work-section px-6 md:px-margin-desktop mb-section-gap max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-gutter">
          {/* Image */}
          <div className="col-span-12 lg:col-span-8 group relative overflow-hidden rounded-xl h-[600px]">
            <Link to="/work/gaurav-synthetics">
              <img
                alt="Gaurav Synthetics"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="src/assets/work-assets/gauravsyn.png"
              />
            </Link>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8">
              <div className="flex gap-2 mb-4">
                <span className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary-fixed">Textile</span>
                <span className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">Digital Transformation</span>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-center py-8">
            <div className="mb-4 text-secondary-fixed flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
              <span className="font-label-caps text-label-caps tracking-widest">Case Study 01</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-white mb-6">Gaurav Synthetics</h2>
            <p className="text-on-surface-variant mb-10 leading-relaxed">
              Designed and developed a conversion-focused digital platform for a legacy textile business, helping Gaurav Synthetics expand its online presence, strengthen discoverability, and generate more qualified wholesale leads across web and marketplace channels.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10 border-t border-white/5 pt-8">
              <div>
                <p className="text-secondary-fixed font-bold text-2xl">4–5x</p>
                <p className="text-on-surface-variant text-xs uppercase tracking-tighter opacity-60">Lead Generation</p>
              </div>
              <div>
                <p className="text-secondary-fixed font-bold text-2xl">7K–8K</p>
                <p className="text-on-surface-variant text-xs uppercase tracking-tighter opacity-60">Simultaneous Users</p>
              </div>
            </div>
            <Link to="/work/gaurav-synthetics" className="flex items-center gap-2 text-white hover:text-secondary-fixed transition-colors group">
              <span className="font-label-caps text-label-caps">View Process</span>
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Projects 02 & 03 – Asymmetric Grid ── */}
      <section className="work-section px-6 md:px-margin-desktop mb-section-gap max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-gutter">
          {/* Project 02 */}
          <div className="col-span-12 md:col-span-5 flex flex-col">
            <Link to="/work/fox-wing-media" className="glass-card rounded-xl overflow-hidden mb-8 h-[400px] block group">
              <img
                alt="Fox Wing Media"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                src="src/assets/work-assets/foxwing.png"
              />
            </Link>
            <div className="px-2">
              <div className="mb-2 text-secondary-fixed flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">rocket_launch</span>
                <span className="font-label-caps text-label-caps tracking-widest text-[10px]">Case Study 02</span>
              </div>
              <h3 className="font-headline-lg text-2xl text-white mb-3">Fox Wing Media</h3>
              <p className="text-on-surface-variant mb-6 text-sm">Designed and developed a conversion-focused website for Fox Wing Media to strengthen brand authority, improve service clarity, and support inbound lead generation through a polished PR and marketing presence.</p>
              <div className="flex gap-2 mb-6">
                <span className="text-[9px] font-bold text-on-surface-variant border border-white/10 px-2 py-0.5 rounded opacity-60">PR</span>
                <span className="text-[9px] font-bold text-on-surface-variant border border-white/10 px-2 py-0.5 rounded opacity-60">Branding</span>
              </div>
              <Link to="/work/fox-wing-media" className="flex items-center gap-2 text-white hover:text-secondary-fixed transition-colors group">
                <span className="font-label-caps text-label-caps">View Process</span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block col-span-1" />

          {/* Project 03 */}
          <div className="col-span-12 md:col-span-6 flex flex-col md:mt-24">
            <Link to="/work/divine-enterprises" className="glass-card rounded-xl overflow-hidden mb-8 h-[500px] block group">
              <img
                alt="Divine Enterprises"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                src="src/assets/work-assets/divineEnt.png"
              />
            </Link>
            <div className="px-2">
              <div className="mb-2 text-secondary-fixed flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">rocket_launch</span>
                <span className="font-label-caps text-label-caps tracking-widest text-[10px]">Case Study 03</span>
              </div>
              <h3 className="font-headline-lg text-2xl text-white mb-3">Divine Enterprises</h3>
              <p className="text-on-surface-variant mb-6 text-sm">We built a trust-led digital presence for a Bihar-based B2B supply business serving education, office, industrial, textile, and manpower needs.</p>
              <div className="flex gap-2 mb-8">
                {["B2B Supply", "Institutional", "Procurement"].map((tag) => (
                  <span key={tag} className="text-[9px] font-bold text-on-surface-variant border border-white/10 px-2 py-0.5 rounded opacity-60">{tag}</span>
                ))}
              </div>
              <Link to="/work/divine-enterprises" className="flex items-center gap-2 text-white hover:text-secondary-fixed transition-colors group">
                <span className="font-label-caps text-label-caps">View Process</span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities Tag Cloud ── */}
      <section className="work-section px-6 md:px-margin-desktop mb-section-gap max-w-7xl mx-auto">
        <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <h4 className="font-headline-lg text-xl text-white opacity-80">Our specialized <br />capabilities</h4>
          <div className="flex flex-wrap gap-3 max-w-2xl">
            {["Custom AI Models", "Real-time Data Engines", "WebGL & Creative Coding", "Distributed Systems", "High-Fidelity UI Systems", "Security Auditing", "Mobile Engineering"].map((cap) => (
              <span key={cap} className="px-4 py-2 rounded-full border border-white/10 text-xs text-on-surface-variant hover:border-secondary-fixed/50 hover:text-white transition-all cursor-default">
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="work-section px-6 md:px-margin-desktop mb-section-gap max-w-7xl mx-auto">
        <div className="glass-card p-12 md:p-24 rounded-3xl text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline-lg text-4xl md:text-5xl text-white mb-8">Ready to build the future?</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mb-12">
              Let's discuss how our engineering precision can accelerate your product roadmap. We are currently accepting new projects for Q3 2024.
            </p>
            <Link to="/contact" className="inline-block bg-secondary-fixed text-on-secondary-fixed px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:scale-105 glow-hover transition-all active:scale-95">
              Start a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
