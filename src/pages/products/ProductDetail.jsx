import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";

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

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleMouseMove = (e) => {
      if (!bgGlowRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      bgGlowRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(160, 214, 0, 0.08) 0%, transparent 70%)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [id]);

  return (
    <div className="bg-background text-on-background selection:bg-secondary-fixed selection:text-on-secondary-fixed overflow-x-hidden">
      {/* Hero */}
      <section className="relative flex flex-col items-start justify-center pt-16 pb-14 sm:pt-20 md:pt-24 px-6 md:px-margin-desktop text-left overflow-hidden">
        <div ref={bgGlowRef} className="absolute inset-0 -z-10 transition-all duration-300"
          style={{ background: "radial-gradient(circle at center, rgba(160, 214, 0, 0.05) 0%, transparent 70%)" }} />
        <div className="max-w-4xl space-y-6">
          <span className="font-label-caps text-label-caps text-secondary-fixed tracking-[0.2em]">{prod.tag}</span>
          <h1 className="font-display-xl text-display-xl max-md:text-headline-lg-mobile text-on-surface font-semibold tracking-tight">
            {prod.title} <span className="text-secondary-fixed">{prod.titleHighlight}</span>
          </h1>
          <p className="font-subheading text-subheading text-on-surface-variant max-w-2xl leading-relaxed">
            {prod.subtitle}
          </p>
          <div className="pt-6 flex flex-wrap justify-start gap-4">
            {prod.liveUrl ? (
              <a href={prod.liveUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps rounded-full hover:scale-105 transition-all glow-hover flex items-center gap-2">
                <span>Check Live Site</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            ) : (
              <Link to="/contact" className="px-8 py-4 bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps rounded-full hover:scale-105 transition-all glow-hover">
                Request Early Access
              </Link>
            )}
            <Link to="/contact" className="px-8 py-4 glass-card text-on-surface font-label-caps text-label-caps rounded-full hover:bg-white/10 transition-all !transform-none hover:!transform-none">
              Get in Touch
            </Link>
          </div>
        </div>
        {/* Product Preview */}
        <div className="mt-20 w-full max-w-6xl mx-auto">
          <div className="glass-card rounded-xl p-2 shadow-2xl">
            <img
              alt={`${prod.name} Preview`}
              className="w-full rounded-lg shadow-inner border border-white/5 grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              src={prod.heroImg}
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-section-gap px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="mb-20 text-left">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Precision Engineering.</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Every module is crafted for maximum performance and security, ensuring a premium user experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prod.features[0] && (
            <div className="glass-card p-10 rounded-xl flex flex-col gap-6 neon-glow group">
              <span className="material-symbols-outlined text-secondary-fixed text-4xl group-hover:scale-110 transition-transform">
                {prod.features[0].icon}
              </span>
              <h3 className="font-subheading text-subheading font-bold">{prod.features[0].title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{prod.features[0].desc}</p>
            </div>
          )}
          {/* Large card */}
          {prod.features[1] && (
            <div className="md:col-span-2 glass-card p-10 rounded-xl flex flex-col md:flex-row gap-10 neon-glow group overflow-hidden relative">
              <div className="flex-1 space-y-6">
                <span className="material-symbols-outlined text-secondary-fixed text-4xl">
                  {prod.features[1].icon}
                </span>
                <h3 className="font-subheading text-subheading font-bold">{prod.features[1].title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{prod.features[1].desc}</p>
              </div>
              <div className="flex-1 h-48 md:h-full relative opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <img alt={prod.features[1].title} className="h-full w-full object-cover rounded-lg" src={prod.features[1].img} />
              </div>
            </div>
          )}
          {prod.features.slice(2, 5).map(({ icon, title, desc }) => (
            <div key={icon} className="glass-card p-10 rounded-xl flex flex-col gap-6 neon-glow group">
              <span className="material-symbols-outlined text-secondary-fixed text-4xl">{icon}</span>
              <h3 className="font-subheading text-subheading font-bold">{title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-section-gap bg-surface-container-lowest relative">
        <div className="px-6 md:px-margin-desktop max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Experience the <span className="text-secondary-fixed">Live Interaction</span>.</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 glass-card rounded-lg border-l-4 border-secondary-fixed !transform-none">
                  <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
                  <p className="font-body-md text-body-md">{prod.demoItems[0]?.text || "Easy visual setup and configuration."}</p>
                </div>
                {prod.demoItems.slice(1).map(({ icon, text }) => (
                  <div key={icon} className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors rounded-lg">
                    <span className="material-symbols-outlined text-on-surface-variant">{icon}</span>
                    <p className="font-body-md text-body-md">{text}</p>
                  </div>
                ))}
              </div>
              {prod.liveUrl ? (
                <a href={prod.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps rounded-full hover:scale-105 transition-all">
                  {prod.demoCTA}
                </a>
              ) : (
                <Link to="/contact" className="inline-block px-8 py-4 bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps rounded-full hover:scale-105 transition-all">
                  {prod.demoCTA}
                </Link>
              )}
            </div>
            {/* Live Dashboard Mockup */}
            <div className="lg:w-1/2 w-full aspect-square relative glass-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 p-8 flex flex-col gap-6 bg-background/50">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-error" />
                    <div className="w-3 h-3 rounded-full bg-secondary-container" />
                    <div className="w-3 h-3 rounded-full bg-secondary-fixed" />
                  </div>
                  <span className="font-label-caps text-[10px] text-on-surface-variant">LIVE SESSION: ACTIVE</span>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="glass-card rounded-lg p-4 flex flex-col justify-between !transform-none">
                    <span className="text-[10px] font-label-caps text-on-surface-variant">AVAILABILITY</span>
                    <div className="text-2xl font-bold text-secondary-fixed">{prod.id === "sendmyform" ? "99.9%" : prod.id === "helios" ? "99.0%" : "Always On"}</div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary-fixed w-3/4 animate-pulse" />
                    </div>
                  </div>
                  <div className="glass-card rounded-lg p-4 flex flex-col justify-between !transform-none">
                    <span className="text-[10px] font-label-caps text-on-surface-variant">SECURITY</span>
                    <div className="text-2xl font-bold text-secondary-fixed">{prod.id === "helios" ? "SSL / Local" : prod.id === "sendmyform" ? "Spam Filter" : "Biometrics"}</div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary-fixed w-1/4" />
                    </div>
                  </div>
                  <div className="col-span-2 glass-card rounded-lg p-4 h-full relative !transform-none flex flex-col justify-between">
                    <span className="text-[10px] font-label-caps text-on-surface-variant">PRODUCT HIGHLIGHT</span>
                    <div className="flex-1 flex items-center justify-center opacity-30">
                      <span className="material-symbols-outlined text-8xl text-secondary-fixed">
                        {prod.id === "helios" ? "auto_awesome" : prod.id === "sendmyform" ? "terminal" : "security"}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant text-center mt-2">{prod.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-section-gap px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Technical Foundations</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-12">Designed to perform with extreme reliability and seamless integration.</p>
            <dl className="space-y-6">
              {prod.specs.map(({ key, val }) => (
                <div key={key} className="flex justify-between border-b border-white/5 pb-4 group">
                  <dt className="font-label-caps text-on-surface-variant group-hover:text-secondary-fixed transition-colors">{key}</dt>
                  <dd className="font-body-md text-on-surface">{val}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-full blur-3xl opacity-50" style={{ background: "radial-gradient(circle at center, rgba(160, 214, 0, 0.05) 0%, transparent 70%)" }} />
            <div className="glass-card p-8 rounded-2xl">
              <img
                alt="Technical specs overview"
                className="rounded-xl grayscale-[0.5] hover:grayscale-0 transition-all duration-700 w-full object-cover h-[400px]"
                src={prod.heroImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Products List */}
      <section className="py-section-gap px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">All Products</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">The full Achaia Labs in-house ecosystem.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {products.map((p) => (
            <Link key={p.id} to={`/products/${p.id}`} className="glass-card p-8 rounded-xl flex flex-col justify-between h-[250px] group">
              <div>
                <span className="font-label-caps text-[10px] text-secondary-fixed mb-2 block">{p.tag.replace("INTRODUCING ", "")}</span>
                <h3 className="font-headline-lg text-xl text-on-surface mb-2">{p.name}</h3>
                <p className="text-on-surface-variant text-sm line-clamp-3 leading-relaxed">{p.subtitle}</p>
              </div>
              <div className="flex items-center gap-2 text-secondary-fixed mt-4">
                <span className="font-label-caps text-xs">EXPLORE</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section-gap px-6 md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Ready to build the future?</h2>
          <p className="font-subheading text-subheading text-on-surface-variant">Connect with our engineering team for an architectural consultation, or get started immediately with our live products.</p>
          <div className="flex flex-wrap justify-center gap-6">
            {prod.liveUrl ? (
              <a href={prod.liveUrl} target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps rounded-full hover:scale-105 shadow-lg shadow-secondary-fixed/20 transition-all">
                Access {prod.name} Live
              </a>
            ) : (
              <Link to="/contact" className="px-12 py-5 bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps rounded-full hover:scale-105 shadow-lg shadow-secondary-fixed/20 transition-all">
                Request Early Access
              </Link>
            )}
            <Link to="/contact" className="px-12 py-5 glass-card text-on-surface font-label-caps text-label-caps rounded-full hover:bg-white/10 transition-all !transform-none">
              Contact Enterprise Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
