import { useEffect } from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden py-16">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, rgba(160, 214, 0, 0.05) 0%, transparent 70%)", filter: "blur(100px)" }} />

      <div className="flex flex-col items-center max-w-xl space-y-6">
        {/* Large Centered Lottie Animation */}
        <div className="w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center">
          <DotLottieReact
            src="/notfound.lottie"
            loop
            autoplay
          />
        </div>

        <div className="space-y-4">
          <span className="font-label-caps text-label-caps text-secondary-fixed tracking-[0.2em] block uppercase">
            Page Not Found
          </span>
          <h1 className="font-display-xl text-3xl sm:text-4xl md:text-5xl text-on-surface font-semibold tracking-tight leading-tight">
            Oh Shit! Your curiosity found a <span className="text-secondary-fixed">dead end :(</span>
          </h1>
          <p className="font-subheading text-base sm:text-lg text-on-surface-variant max-w-md mx-auto leading-relaxed">
            The page you are looking for doesn't exist or has been moved. You can head back to safety or get in touch with our team.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full sm:w-auto">
          <Link
            to="/"
            className="w-full sm:w-auto bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-full font-label-caps text-label-caps font-bold hover:scale-105 glow-hover transition-all text-center"
          >
            Return Home
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-full font-label-caps text-label-caps font-bold transition-all text-center"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
