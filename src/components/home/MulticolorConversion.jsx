import { Link } from "react-router-dom";

const MulticolorConversion = ({
  title = "Have a business problem that software could solve?",
  description = "Let's build something your business can actually use. From discovery to deployment and beyond, we take full engineering responsibility.",
  primaryCtaText = "Discuss a Project",
  primaryCtaLink = "/contact",
  secondaryCtaText = "Scope & Estimate Cost",
  secondaryCtaLink = "/cyp",
}) => {
  return (
    <section className="relative overflow-hidden py-10 md:py-14 bg-[#111111] border-y border-[#262626]">
      <div className="w-full relative px-0">
        {/* Strictly Rectangular Multicolored Frame Container touching the sides of the page */}
        <div className="relative w-full rounded-none p-[6px] sm:p-[7px] md:p-[7px] multicolor-cta-bg border-y border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {/* Organic lighting accents inside container */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#F97316]/50 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/3 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B5CF6]/50 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#3B82F6]/45 rounded-full blur-[90px] pointer-events-none" />

          {/* Strictly Rectangular Grained Claymorphism Slab (Zero border radius) */}
          <div
            className="relative w-full rounded-none py-14 sm:py-16 md:py-20 px-6 sm:px-12 md:px-16 text-center overflow-hidden border border-white/20 bg-[#131316]/85 backdrop-blur-2xl z-10"
            style={{
              boxShadow:
                "inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.6)",
            }}
          >
            {/* Subtle SVG tactile noise grain overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-35 mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: "160px 160px",
              }}
            />

            {/* Inner specular top gradient glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-28 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
              }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto space-y-6">
              {/* Central Statement */}
              <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12]">
                {title}
              </h2>

              {/* Supporting statement */}
              <p className="text-base sm:text-lg md:text-xl text-[#D1D1D1] max-w-2xl mx-auto leading-relaxed font-light">
                {description}
              </p>

              {/* CTA Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                {primaryCtaText && (
                  <Link
                    to={primaryCtaLink}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-[#111111] px-9 py-4 rounded-full font-semibold text-sm sm:text-base transition-all shadow-xl hover:scale-[1.02] active:scale-95"
                  >
                    <span>{primaryCtaText}</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                )}

                {secondaryCtaText && (
                  <Link
                    to={secondaryCtaLink}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#202022]/80 hover:bg-[#28282a] text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition-all"
                  >
                    <span>{secondaryCtaText}</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MulticolorConversion;
