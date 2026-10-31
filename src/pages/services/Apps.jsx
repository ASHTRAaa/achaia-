import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";

const deliverables = [
  { icon: "search", title: "Product Discovery & Architecture", desc: "Detailed requirements gathering, user persona modeling, device capability analysis, and mobile-first architectural planning." },
  { icon: "design_services", title: "Native & Responsive UI/UX", desc: "Clean interface layouts adhering to Android Material Design guidelines and modern minimalist principles for fast, intuitive user interaction." },
  { icon: "android", title: "Android Application Engineering", desc: "Native Kotlin / modern React Native engineering built for stability, low battery consumption, fast launch times, and broad device compatibility." },
  { icon: "api", title: "Backend & REST/GraphQL APIs", desc: "Robust backend services handling secure token authentication, data synchronization, push notifications, and high concurrency." },
  { icon: "offline_pin", title: "Offline Storage & State Caching", desc: "Local SQLite/Room database caching enabling core app functions to work reliably even in low-connectivity or offline field environments." },
  { icon: "lock", title: "Security & Permissions Management", desc: "Granular runtime permission flows (camera, location, background services), encrypted local storage, and secure network transport." },
  { icon: "bug_report", title: "Device Matrix QA & Testing", desc: "Rigorous testing across screen resolutions, Android OS versions, network throttling scenarios, and edge conditions before release." },
  { icon: "cloud_upload", title: "Google Play Store Release & Support", desc: "Store listing assets, privacy policy compliance, release bundle signing, Play Console approvals, and agreed ongoing OS update maintenance." },
];

const painPoints = [
  "Apps built without offline capability that crash or freeze when network connections stutter",
  "High battery drain and poor memory management leading to uninstalls and bad store reviews",
  "Bloated cross-platform prototypes that feel sluggish compared to clean native interfaces",
  "Fragile API integrations that fail under real-world usage and traffic spikes",
  "Lack of post-release support when new Android OS versions break deprecated APIs",
];

const Apps = () => {
  useSEO({
    title: "Android & Custom Application Development",
    description:
      "Achaia Labs engineers high-performance Android applications and modern web apps built for real operational reliability. End-to-end design, API integration, and Play Store release.",
    path: "/services/apps",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-body-md text-body-md text-[#F5F5F3] bg-[#111111]">
      {/* Hero */}
      <section className="pt-16 pb-14 sm:pt-20 md:pt-24 px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/services" className="text-[#777777] hover:text-[#F5F5F3] font-mono text-xs uppercase tracking-wider transition-colors">
              Services
            </Link>
            <span className="text-[#444444]">/</span>
            <span className="text-[#315EFB] font-mono text-xs uppercase tracking-wider font-semibold">Application Development</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#F5F5F3] mb-6 leading-tight font-semibold tracking-tight">
            Production Android and mobile apps built for real user needs.
          </h1>
          <p className="text-base sm:text-lg text-[#A6A6A6] max-w-2xl leading-relaxed mb-8">
            We don't build disposable prototypes. We engineer production-grade mobile applications and digital products with clean codebases, thoughtful interfaces, secure backends, and ongoing maintenance.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-8 py-4 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <span>Discuss Your App</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link
              to="/work/helios"
              className="inline-flex items-center gap-2 border border-[#303030] hover:border-[#444444] bg-[#181818] hover:bg-[#202020] text-[#F5F5F3] px-7 py-4 rounded-full text-sm font-semibold transition-all"
            >
              <span>View Helios App Case Study</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-16 md:py-20 bg-[#141414] border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block">
                The Quality Dilemma
              </span>
              <h2 className="text-3xl sm:text-4xl text-[#F5F5F3] font-semibold leading-snug">
                Building an app is easy. Engineering one that users keep and rely on is hard.
              </h2>
              <p className="text-[#A6A6A6] leading-relaxed">
                Many businesses invest in mobile apps that look acceptable in initial mockups but frustrate users in the wild: sluggish interactions, poor offline handling, inconsistent permission prompts, and unhandled network errors.
              </p>
              <p className="text-[#A6A6A6] leading-relaxed">
                Our approach emphasizes robust engineering fundamentals: responsive UI threads, resilient data caching, clean battery footprint, and security controls that safeguard user trust from the first install.
              </p>
            </div>
            <div className="lg:col-span-6 space-y-3">
              {painPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl border border-[#303030] bg-[#181818]">
                  <span className="w-6 h-6 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                  <p className="text-sm sm:text-base text-[#CCCCCC] font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-margin-desktop">
        <div className="max-w-2xl mb-16">
          <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block mb-3">
            What We Deliver
          </span>
          <h2 className="text-3xl sm:text-4xl text-[#F5F5F3] font-semibold mb-4">
            From concept to Google Play release.
          </h2>
          <p className="text-[#A6A6A6] text-base sm:text-lg leading-relaxed">
            A comprehensive, transparent development lifecycle with weekly staging builds and verified milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((d, i) => (
            <div key={i} className="rounded-3xl bg-[#181818] border border-[#303030] hover:border-[#444444] p-7 flex flex-col justify-between shadow-md transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#202020] border border-[#303030] text-[#315EFB] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">{d.icon}</span>
                </div>
                <h3 className="font-semibold text-lg text-[#F5F5F3] mb-3">{d.title}</h3>
                <p className="text-[#A6A6A6] text-xs sm:text-sm leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Evidence Card */}
      <section className="py-16 bg-[#161616] border-y border-[#262626] text-[#F5F5F3]">
        <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block mb-3">Featured Mobile Product</span>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-[#F5F5F3]">
                Helios — Mobile AI Application
              </h2>
              <p className="text-[#A6A6A6] text-base leading-relaxed mb-6">
                Engineered Helios as a high-speed mobile client allowing users to search, filter, and execute categorized AI prompt workflows with instant copy, parameter sliders, and cloud syncing.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="px-3 py-1 rounded-full bg-[#202020] border border-[#303030] text-xs font-medium text-[#CCCCCC]">Android Mobile Architecture</span>
                <span className="px-3 py-1 rounded-full bg-[#202020] border border-[#303030] text-xs font-medium text-[#CCCCCC]">Local Cache & Quick Search</span>
                <span className="px-3 py-1 rounded-full bg-[#202020] border border-[#303030] text-xs font-medium text-[#CCCCCC]">Smooth 60fps Micro-Animations</span>
              </div>
              <Link
                to="/work/helios"
                className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-7 py-3.5 rounded-full text-xs font-bold transition-all shadow-md active:scale-95"
              >
                <span>Read Case Study</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="rounded-3xl p-3 bg-[#181818] border border-[#303030] shadow-2xl max-w-xs overflow-hidden">
                <div className="rounded-2xl overflow-hidden bg-black">
                  <img
                    src="/work-assets/helios_mobile.webp"
                    alt="Helios Mobile Application Interface"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-margin-desktop text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#F5F5F3]">
            Planning a mobile application or product?
          </h2>
          <p className="text-[#A6A6A6] text-base sm:text-lg">
            Let's evaluate your functional requirements, technical stack choices, and delivery timeline together.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-9 py-4 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <span>Discuss Your Application</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apps;
