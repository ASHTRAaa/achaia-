import { Link } from "react-router-dom";
import { StarfieldCanvas } from "@/components/ui/hyperdrive-hero";
import HeroHighlighterMorph from "@/components/home/HeroHighlighterMorph";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[75vh] md:min-h-[82vh] flex flex-col justify-center items-center py-20 md:py-28 bg-[#111111]">
      {/* Hyperdrive Starfield Canvas Background */}
      <StarfieldCanvas className="opacity-70 pointer-events-none" />

      {/* Atmospheric Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-transparent to-[#111111] pointer-events-none z-[1]" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none z-[2]"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(49, 94, 251, 0.16) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-margin-desktop text-center">
        {/* Hero Headline & Subheading */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold text-[#F5F5F3] tracking-tight leading-[1.06]">
            We build <HeroHighlighterMorph>software</HeroHighlighterMorph> <br />
            <span className="text-[#A6A6A6]">We <span className="text-[#4867FA]">automate</span> the work behind your business.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#A6A6A6] max-w-2xl mx-auto leading-relaxed">
            <i>Achaia Labs</i> architects, builds, deploys, and maintains software systems — custom Shopify stores, business ERPs, mobile applications, and AI workflow automations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition-all shadow-lg active:scale-95"
            >
              <span>Discuss a Project</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>

            <Link
              to="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#181818]/90 hover:bg-[#202020] text-[#F5F5F3] border border-[#303030] hover:border-[#444444] px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition-all backdrop-blur-sm"
            >
              <span>Explore Our Work</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
