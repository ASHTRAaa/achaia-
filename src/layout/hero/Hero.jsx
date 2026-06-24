import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-margin-mobile pt-24 pb-16 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/hero.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay gradient to blend with black background at the bottom and keep text highly readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black -z-10" />

      <div className="max-w-4xl space-y-8 relative z-10">
        <h1 className="font-display-xl text-5xl sm:text-6xl md:text-display-xl text-white leading-tight">
          <span className="text-secondary-fixed">Powering </span>
          the Journey Ahead{" "}
        </h1>
        <p className="font-subheading text-base sm:text-subheading text-white/90 max-w-2xl mx-auto">
          We build the future of SaaS, AI, and mobile experiences through precise technical craftsmanship and visionary design.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/products"
            className="w-full sm:w-auto bg-secondary-fixed text-on-secondary-fixed px-8 sm:px-10 py-3 sm:py-4 rounded-full font-label-caps text-label-caps font-extrabold glow-hover transition-all duration-300"
          >
            Explore Products
          </Link>
          <Link
            to="/work"
            className="w-full sm:w-auto border border-secondary-fixed text-secondary-fixed hover:bg-secondary-fixed/10 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-label-caps text-label-caps font-extrabold transition-all duration-300 shadow-[0_0_15px_rgba(160,214,0,0.15)]"
          >
            View Work
          </Link>
        </div>
      </div>

      {/* Modern Neon Glow Bottom Chips */}
      <div className="mt-16 sm:mt-28 flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl px-2 sm:px-4 relative z-10">
        {[
          { label: "SaaS", icon: "rocket_launch" },
          { label: "Mobile Apps", icon: "smartphone" },
          { label: "Agentic AI", icon: "psychology" },
          { label: "Web Platforms", icon: "desktop_windows" },
          { label: "SEO", icon: "search" }
        ].map((chip) => (
          <div
            key={chip.label}
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-secondary-fixed/20 bg-black/55 backdrop-blur-md shadow-[0_0_15px_rgba(160,214,0,0.1)] text-white/90 font-label-caps text-[9px] sm:text-[10px] tracking-widest uppercase hover:border-secondary-fixed/50 hover:shadow-[0_0_20px_rgba(160,214,0,0.25)] transition-all duration-300"
          >
            <span className="material-symbols-outlined text-secondary-fixed text-sm">{chip.icon}</span>
            <span>{chip.label}</span>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Hero;
