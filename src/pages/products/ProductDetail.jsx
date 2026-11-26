import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";

const products = [
  {
    id: "helios",
    name: "Helios",
    tag: "INTRODUCING HELIOS",
    title: "AI Prompts From",
    titleHighlight: "Across the Galaxy",
    subtitle: "Helios is a premium AI prompt library and creative workflow organizer. Discover premium prompts, streamline your workflow, and navigate cinematic AI parameters.",
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1jfSSU56U9PeobJ8XTne8IoA1geSHcbK82_xIq7WIJAHHRe7Rq-CIM_dXlmG2fyJTPmZkB3Vqw_Yggu3_I-6M5VdelT5KlUovSs8Il86BPK9vj6yBBwkk5motTCo9DNJN_qKttaArCbwkSnIkHBHL0_EYvlwwbsfVeFpC0YRwGM11sCqGt94tQ0neIqYDrMZRX2IUVKVxyOL96NMqmPIsKX5NRslJ5W_i3_GdtxzlFfDveK0ap4BhBM4JN1jTWiKwxj3-jnrUWot8",
    liveUrl: "https://heliosai.achaialabs.tech/",
    features: [
      { icon: "lightbulb", title: "Cosmic Prompt Vault", desc: "Discover and organize 5k+ high-performance prompts tailored for Midjourney v6, Stable Diffusion, and LLMs." },
      { icon: "video_library", title: "Cinematic Video Galaxy", desc: "Access finely-tuned motion and camera parameters optimized for Runway Gen-2, Luma Dream Machine, Sora, and Pika.", large: true, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyWghbrQKXPVgsnwfqZ-2CCuI_Aj2ODxJCVyqi7XBb8XsiDCXsO5g8lBRdbBrMbid7h3UQ2L9OhpFOkph5Wqm53qUnZ-73M5JGWWKPoqqESCup19ourz-GMdbwt4xsR41P35k5RRVnFMeZ_v2CdvClIkMPd_6NabmFFoHlV8GWQEGbVOIOt1ziueTcuLPiT__Fzi_2M_KAGBLGzApJCbTnfUa6pDD4upJL4NmZGdGFvIkqTglrGnA3x5DYrchouzkymvASAsHv916n" },
      { icon: "schema", title: "Constellations", desc: "Organize prompt flows, variables, and templates locally on-device or sync them securely across your workspace." },
      { icon: "security", title: "Privacy-First Local Storage", desc: "SSL encryption and local vault preferences ensure your proprietary prompts stay completely under your control." },
      { icon: "auto_awesome", title: "Helios Pro", desc: "Unlock unlimited constellations, secure cloud sync, and priority access to professional text-to-video parameters." }
    ],
    demoTitle: "Streamline Your Prompt Flows",
    demoItems: [
      { icon: "check_circle", text: "Organize prompts into logical Constellations." },
      { icon: "sync", text: "Zero-knowledge encryption for cloud vault synchronization." },
      { icon: "code", text: "Copy variables and templates instantly with one click." }
    ],
    demoCTA: "Unlock Helios Pro",
    specs: [
      { key: "LIBRARY SIZE", val: "5,000+ Premium Prompts" },
      { key: "COMPATIBLE MODELS", val: "Midjourney, Sora, Luma, GPT-4" },
      { key: "DATA PRIVACY", val: "On-Device / SSL Sync" },
      { key: "UPGRADE PLANS", val: "Monthly & Annual Pro Tiers" }
    ]
  },
  {
    id: "sendmyform",
    name: "SendMyForm",
    tag: "INTRODUCING SENDMYFORM",
    title: "Backend-Free Form",
    titleHighlight: "Handling For Developers",
    subtitle: "SendMyForm is a no-backend form submission service. Receive, validate, filter spam, and deliver submissions straight to your inbox without custom server code.",
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkStvHseZmyhbpnFY4jnxEL4-OmqinD8woLXQgndCQyTUJ9mxKfnihULb9gP_Z8mk5qODXMZEuoy6IhJs_ldnFJSOjkL_lQCp7B42mUg9q23Sdz_3V5LvWleLGUPANgeeR98dU2NbALeOAVIG-3sBPWDFwJL9xLdAt_c4nPSAePn4c3S-JDrVXYs8ONbrfEIwMzE3l1JrgRUb-c8X8jeAwiBEse0k8e6978KqWA_WQDY-eiJ8kS-MryE7XJ8Ad15CV5_CP3n88JIrj",
    liveUrl: "https://www.sendmyform.live/",
    features: [
      { icon: "code", title: "Zero Infrastructure", desc: "No databases, PHP scripts, or SMTP servers required. Simply set your form endpoint ID and you are live." },
      { icon: "mail", title: "Instant Inbox Delivery", desc: "All submissions are captured, validated, and instantly forwarded to your registered email address with 99.9% availability.", large: true, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyWghbrQKXPVgsnwfqZ-2CCuI_Aj2ODxJCVyqi7XBb8XsiDCXsO5g8lBRdbBrMbid7h3UQ2L9OhpFOkph5Wqm53qUnZ-73M5JGWWKPoqqESCup19ourz-GMdbwt4xsR41P35k5RRVnFMeZ_v2CdvClIkMPd_6NabmFFoHlV8GWQEGbVOIOt1ziueTcuLPiT__Fzi_2M_KAGBLGzApJCbTnfUa6pDD4upJL4NmZGdGFvIkqTglrGnA3x5DYrchouzkymvASAsHv916n" },
      { icon: "security", title: "Smart Spam Filtering", desc: "Advanced server-side spam and bot protection blocks malicious inputs before they clutter your inbox." },
      { icon: "web", title: "Framework Agnostic", desc: "Paste clean HTML into WordPress, Webflow, Framer, React, or custom static sites with no SDK required." },
      { icon: "edit_document", title: "Visual Form Builder", desc: "Generate secure form code snippets with custom inputs visually using the online generator." }
    ],
    demoTitle: "Ship Forms Without Infrastructure",
    demoItems: [
      { icon: "check_circle", text: "Create input fields in our visual editor." },
      { icon: "sync", text: "Generate semantic HTML and unique endpoint IDs." },
      { icon: "code", text: "Zero configuration, work directly out of the box." }
    ],
    demoCTA: "Generate Your Form",
    specs: [
      { key: "INTEGRATION TIME", val: "< 60 seconds" },
      { key: "API SLA UPTIME", val: "99.9% Availability" },
      { key: "SPAM PROTECTION", val: "Server-side spam filtering" },
      { key: "SUPPORTED CLIENTS", val: "WordPress, Framer, React, HTML5" }
    ]
  },
  {
    id: "holdon",
    name: "Hold On",
    tag: "INTRODUCING HOLD ON",
    title: "Anti-Theft Security",
    titleHighlight: "Always On Guard",
    subtitle: "Hold On is a lightweight mobile security app that triggers an instant loud alarm if your phone is unplugged, moved, or pickpocketed in public spaces.",
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyWghbrQKXPVgsnwfqZ-2CCuI_Aj2ODxJCVyqi7XBb8XsiDCXsO5g8lBRdbBrMbid7h3UQ2L9OhpFOkph5Wqm53qUnZ-73M5JGWWKPoqqESCup19ourz-GMdbwt4xsR41P35k5RRVnFMeZ_v2CdvClIkMPd_6NabmFFoHlV8GWQEGbVOIOt1ziueTcuLPiT__Fzi_2M_KAGBLGzApJCbTnfUa6pDD4upJL4NmZGdGFvIkqTglrGnA3x5DYrchouzkymvASAsHv916n",
    liveUrl: "https://play.google.com/store/apps/details?id=com.silentchaos.holdon",
    features: [
      { icon: "power_off", title: "Charger Unplug Protection", desc: "Triggers a persistent loud alarm immediately if someone disconnects your device from power." },
      { icon: "directions_walk", title: "Pickpocket Detection", desc: "Smart accelerometer-based motion sensing triggers when the device is pulled from your pocket or bag.", large: true, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1jfSSU56U9PeobJ8XTne8IoA1geSHcbK82_xIq7WIJAHHRe7Rq-CIM_dXlmG2fyJTPmZkB3Vqw_Yggu3_I-6M5VdelT5KlUovSs8Il86BPK9vj6yBBwkk5motTCo9DNJN_qKttaArCbwkSnIkHBHL0_EYvlwwbsfVeFpC0YRwGM11sCqGt94tQ0neIqYDrMZRX2IUVKVxyOL96NMqmPIsKX5NRslJ5W_i3_GdtxzlFfDveK0ap4BhBM4JN1jTWiKwxj3-jnrUWot8" },
      { icon: "lock", title: "Lock-Screen Override", desc: "Alarms cannot be dismissed or silenced without your secure lock-screen password or biometric authentication." },
      { icon: "battery_charging_80", title: "Lightweight Background Service", desc: "Runs as a foreground service with low battery overhead, providing continuous protection without performance drain." },
      { icon: "settings_suggest", title: "Adjustable Sensitivity", desc: "Calibrate detection thresholds for different environments like libraries, trains, cafes, and airports." }
    ],
    demoTitle: "Public Space Peace of Mind",
    demoItems: [
      { icon: "check_circle", text: "Secure lock-screen authentication setup." },
      { icon: "sync", text: "Battery-efficient foreground alarm process." },
      { icon: "code", text: "Smart sensitivity modes calibrated for motion." }
    ],
    demoCTA: "Protect Your Phone",
    specs: [
      { key: "MINIMUM OS REQUIREMENT", val: "Android 8.0+" },
      { key: "BATTERY OVERHEAD", val: "< 1.5% daily usage" },
      { key: "ALARM TRIGGERS", val: "Charger, Motion, Pocket extraction" },
      { key: "LATEST RELEASE", val: "March 2026 (UI & Accelerometer updates)" }
    ]
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const prod = products.find((p) => p.id === id) || products[0];
  const bgGlowRef = useRef(null);

  useSEO({
    title: `${prod.name} — ${prod.tag.replace("INTRODUCING ", "")}`,
    description: prod.subtitle,
    path: `/products/${prod.id}`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-[#111111] text-[#F5F5F3] min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative flex flex-col items-start justify-center pt-16 pb-14 sm:pt-20 md:pt-24 px-6 md:px-margin-desktop text-left overflow-hidden">
        <div className="max-w-4xl space-y-6">
          <span className="font-mono text-xs font-semibold text-[#315EFB] tracking-widest uppercase">{prod.tag}</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#F5F5F3] font-semibold tracking-tight leading-tight">
            {prod.title} <span className="text-[#315EFB]">{prod.titleHighlight}</span>
          </h1>
          <p className="text-base sm:text-lg text-[#A6A6A6] max-w-2xl leading-relaxed">
            {prod.subtitle}
          </p>
          <div className="pt-6 flex flex-wrap justify-start gap-4">
            {prod.liveUrl ? (
              <a href={prod.liveUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#315EFB] hover:bg-[#254EDB] text-white font-semibold text-sm rounded-full transition-all shadow-md active:scale-95 flex items-center gap-2">
                <span>Check Live Site</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            ) : (
              <Link to="/contact" className="px-8 py-4 bg-[#315EFB] hover:bg-[#254EDB] text-white font-semibold text-sm rounded-full transition-all shadow-md active:scale-95">
                Request Early Access
              </Link>
            )}
            <Link to="/contact" className="px-8 py-4 bg-[#181818] hover:bg-[#202020] border border-[#303030] hover:border-[#444444] text-[#F5F5F3] font-semibold text-sm rounded-full transition-all">
              Get in Touch
            </Link>
          </div>
        </div>
        {/* Product Preview */}
        <div className="mt-16 w-full max-w-6xl mx-auto">
          <div className="p-3 bg-[#181818] border border-[#303030] rounded-3xl shadow-2xl">
            <img
              alt={`${prod.name} Preview`}
              className="w-full rounded-2xl shadow-inner border border-white/5"
              src={prod.heroImg}
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-28 px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="mb-16 text-left">
          <span className="text-[#315EFB] font-mono text-xs uppercase tracking-widest block font-semibold mb-2">Capabilities</span>
          <h2 className="text-3xl sm:text-4xl text-[#F5F5F3] font-semibold mb-4">Precision Engineering.</h2>
          <p className="text-[#A6A6A6] text-base sm:text-lg max-w-xl">Every module is crafted for maximum performance and security, ensuring a premium user experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prod.features[0] && (
            <div className="p-8 sm:p-10 rounded-3xl bg-[#181818] border border-[#303030] flex flex-col gap-6 shadow-md">
              <span className="material-symbols-outlined text-[#315EFB] text-4xl">
                {prod.features[0].icon}
              </span>
              <h3 className="text-xl font-semibold text-[#F5F5F3]">{prod.features[0].title}</h3>
              <p className="text-[#A6A6A6] text-sm leading-relaxed">{prod.features[0].desc}</p>
            </div>
          )}
          {/* Large card */}
          {prod.features[1] && (
            <div className="md:col-span-2 p-8 sm:p-10 rounded-3xl bg-[#181818] border border-[#303030] flex flex-col md:flex-row gap-10 shadow-md overflow-hidden relative">
              <div className="flex-1 space-y-6">
                <span className="material-symbols-outlined text-[#315EFB] text-4xl">
                  {prod.features[1].icon}
                </span>
                <h3 className="text-xl font-semibold text-[#F5F5F3]">{prod.features[1].title}</h3>
                <p className="text-[#A6A6A6] text-sm leading-relaxed">{prod.features[1].desc}</p>
              </div>
              <div className="flex-1 h-48 md:h-full relative opacity-60 hover:opacity-100 transition-opacity">
                <img alt={prod.features[1].title} className="h-full w-full object-cover rounded-xl" src={prod.features[1].img} />
              </div>
            </div>
          )}
          {prod.features.slice(2, 5).map(({ icon, title, desc }) => (
            <div key={icon} className="p-8 sm:p-10 rounded-3xl bg-[#181818] border border-[#303030] flex flex-col gap-6 shadow-md">
              <span className="material-symbols-outlined text-[#315EFB] text-4xl">{icon}</span>
              <h3 className="text-xl font-semibold text-[#F5F5F3]">{title}</h3>
              <p className="text-[#A6A6A6] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 md:py-24 bg-[#141414] border-y border-[#262626]">
        <div className="px-6 md:px-margin-desktop max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#F5F5F3]">Experience the <span className="text-[#315EFB]">Live Interaction</span>.</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#181818] border border-[#303030] border-l-4 border-l-[#315EFB]">
                  <span className="material-symbols-outlined text-[#315EFB]">check_circle</span>
                  <p className="text-sm sm:text-base text-[#F5F5F3] font-medium">{prod.demoItems[0]?.text || "Easy visual setup and configuration."}</p>
                </div>
                {prod.demoItems.slice(1).map(({ icon, text }) => (
                  <div key={icon} className="flex items-center gap-4 p-4 rounded-2xl bg-[#181818] border border-[#303030]">
                    <span className="material-symbols-outlined text-[#A6A6A6]">{icon}</span>
                    <p className="text-sm sm:text-base text-[#CCCCCC]">{text}</p>
                  </div>
                ))}
              </div>
              {prod.liveUrl ? (
                <a href={prod.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#315EFB] hover:bg-[#254EDB] text-white font-semibold text-sm rounded-full transition-all shadow-md active:scale-95">
                  {prod.demoCTA}
                </a>
              ) : (
                <Link to="/contact" className="inline-block px-8 py-4 bg-[#315EFB] hover:bg-[#254EDB] text-white font-semibold text-sm rounded-full transition-all shadow-md active:scale-95">
                  {prod.demoCTA}
                </Link>
              )}
            </div>
            {/* Live Dashboard Mockup */}
            <div className="lg:w-1/2 w-full aspect-square relative bg-[#181818] border border-[#303030] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 p-8 flex flex-col gap-6 bg-[#181818]">
                <div className="flex justify-between items-center border-b border-[#262626] pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="font-mono text-[10px] text-[#A6A6A6] uppercase tracking-wider">LIVE SESSION: ACTIVE</span>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="bg-[#141414] border border-[#303030] rounded-2xl p-5 flex flex-col justify-between">
                    <span className="text-[10px] font-mono font-semibold text-[#777777] uppercase tracking-wider">AVAILABILITY</span>
                    <div className="text-2xl font-bold text-[#315EFB]">{prod.id === "sendmyform" ? "99.9%" : prod.id === "helios" ? "99.0%" : "Always On"}</div>
                    <div className="h-1 bg-[#262626] rounded-full overflow-hidden">
                      <div className="h-full bg-[#315EFB] w-3/4" />
                    </div>
                  </div>
                  <div className="bg-[#141414] border border-[#303030] rounded-2xl p-5 flex flex-col justify-between">
                    <span className="text-[10px] font-mono font-semibold text-[#777777] uppercase tracking-wider">SECURITY</span>
                    <div className="text-2xl font-bold text-[#315EFB]">{prod.id === "helios" ? "SSL / Local" : prod.id === "sendmyform" ? "Spam Filter" : "Biometrics"}</div>
                    <div className="h-1 bg-[#262626] rounded-full overflow-hidden">
                      <div className="h-full bg-[#315EFB] w-1/4" />
                    </div>
                  </div>
                  <div className="col-span-2 bg-[#141414] border border-[#303030] rounded-2xl p-5 h-full relative flex flex-col justify-between">
                    <span className="text-[10px] font-mono font-semibold text-[#777777] uppercase tracking-wider">PRODUCT HIGHLIGHT</span>
                    <div className="flex-1 flex items-center justify-center opacity-40">
                      <span className="material-symbols-outlined text-8xl text-[#315EFB]">
                        {prod.id === "helios" ? "auto_awesome" : prod.id === "sendmyform" ? "terminal" : "security"}
                      </span>
                    </div>
                    <p className="text-xs text-[#A6A6A6] text-center mt-2">{prod.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-20 md:py-28 px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#315EFB] font-mono text-xs uppercase tracking-widest block font-semibold mb-2">Architecture</span>
            <h2 className="text-3xl sm:text-4xl text-[#F5F5F3] font-semibold mb-4">Technical Foundations</h2>
            <p className="text-[#A6A6A6] text-base leading-relaxed mb-10">Designed to perform with extreme reliability and seamless integration.</p>
            <dl className="space-y-4">
              {prod.specs.map(({ key, val }) => (
                <div key={key} className="flex justify-between border-b border-[#262626] pb-4">
                  <dt className="text-xs font-mono font-semibold text-[#777777] uppercase tracking-wider">{key}</dt>
                  <dd className="text-sm font-semibold text-[#F5F5F3]">{val}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="p-3 bg-[#181818] border border-[#303030] rounded-3xl shadow-xl">
              <img
                alt="Technical specs overview"
                className="rounded-2xl w-full object-cover h-[380px]"
                src={prod.heroImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Products List */}
      <section className="py-16 md:py-24 px-6 md:px-margin-desktop max-w-7xl mx-auto border-t border-[#262626]">
        <div className="mb-12">
          <span className="text-[#315EFB] font-mono text-xs uppercase tracking-widest block font-semibold mb-2">Ecosystem</span>
          <h2 className="text-3xl sm:text-4xl text-[#F5F5F3] font-semibold mb-3">All Products</h2>
          <p className="text-[#A6A6A6] text-base">The full Achaia Labs in-house ecosystem.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link key={p.id} to={`/products/${p.id}`} className="p-8 rounded-3xl bg-[#181818] border border-[#303030] hover:border-[#444444] flex flex-col justify-between h-[250px] transition-all shadow-md group">
              <div>
                <span className="font-mono text-[10px] text-[#315EFB] font-bold uppercase tracking-wider mb-2 block">{p.tag.replace("INTRODUCING ", "")}</span>
                <h3 className="text-xl font-semibold text-[#F5F5F3] mb-2">{p.name}</h3>
                <p className="text-[#A6A6A6] text-xs sm:text-sm line-clamp-3 leading-relaxed">{p.subtitle}</p>
              </div>
              <div className="flex items-center gap-2 text-[#315EFB] font-semibold text-xs tracking-wider uppercase mt-4">
                <span>EXPLORE</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-margin-desktop bg-[#141414] border-t border-[#262626]">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#F5F5F3]">Ready to partner on your next build?</h2>
          <p className="text-[#A6A6A6] text-base leading-relaxed">Connect with our engineering team for an architectural consultation, or get started immediately with our live products.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {prod.liveUrl ? (
              <a href={prod.liveUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#315EFB] hover:bg-[#254EDB] text-white font-semibold text-sm rounded-full transition-all shadow-md active:scale-95">
                Access {prod.name} Live
              </a>
            ) : (
              <Link to="/contact" className="px-8 py-4 bg-[#315EFB] hover:bg-[#254EDB] text-white font-semibold text-sm rounded-full transition-all shadow-md active:scale-95">
                Request Early Access
              </Link>
            )}
            <Link to="/contact" className="px-8 py-4 bg-[#181818] hover:bg-[#202020] border border-[#303030] hover:border-[#444444] text-[#F5F5F3] font-semibold text-sm rounded-full transition-all">
              Discuss a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
