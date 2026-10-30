import { useEffect } from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useSEO } from "../../hooks/useSEO";

const NotFound = () => {
  useSEO({
    title: "404 — Page Not Found",
    description: "The page you are looking for does not exist on Achaia Labs.",
    path: "/404",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden py-16 bg-[#111111] text-[#F5F5F3]">
      <div className="flex flex-col items-center max-w-xl space-y-6">
        {/* Large Centered Lottie Animation */}
        <div className="w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
          <DotLottieReact
            src="/notfound.lottie"
            loop
            autoplay
          />
        </div>

        <div className="space-y-4">
          <span className="text-[#315EFB] font-mono text-xs uppercase tracking-widest block font-semibold">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#F5F5F3] tracking-tight leading-tight">
            We couldn't find the page you were looking for.
          </h1>
          <p className="text-base text-[#A6A6A6] max-w-md mx-auto leading-relaxed">
            The page you requested may have moved or no longer exists. Explore our solutions or return to the homepage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md active:scale-95"
          >
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#181818] hover:bg-[#202020] border border-[#303030] hover:border-[#444444] text-[#F5F5F3] px-7 py-3.5 rounded-full font-semibold text-sm transition-all"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
