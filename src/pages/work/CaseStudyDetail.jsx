import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const caseStudies = {
  "gaurav-synthetics": {
    tag: "Textile / Digital Transformation",
    title:
      "Gaurav Synthetics: Building a trusted online presence for a legacy textile business.",
    subtitle:
      "We turned an offline wholesale brand into a discoverable, lead-generating digital presence with local search, marketplace visibility, and a website built to scale.",
    heroImg: "/work-assets/gauravsyn.webp",
    liveUrl: "https://www.gauravsynthetics.in/",
    challengeTitle:
      "A respected offline business needed a stronger online presence to capture demand, build trust, and convert inquiries into sales.",
    challengeDesc:
      "The brand needed to communicate its exclusive Ramraj Cotton positioning, showcase premium fabric categories clearly, and make it easier for buyers to discover and contact the business online.",
    solutionTitle:
      "A modular website, local visibility improvements, and a conversion-focused digital ecosystem.",
    solutionDesc:
      "We built a dynamic, scalable website, improved the Google Business Profile and Maps presence, and strengthened IndiaMART visibility to turn attention into measurable enquiries. The platform was engineered to handle 7K–8K concurrent users without compromising experience.",
    impactTitle: "Business impact",
    impact: [
      {
        title: "4–5x lead generation",
        desc: "IndiaMART optimization helped multiply qualified inbound enquiries.",
      },
      {
        title: "7K–8K simultaneous users",
        desc: "The site architecture was designed for high traffic and stability.",
      },
      {
        title: "Exclusive brand trust",
        desc: "Positioned the Ramraj Cotton dealership with clarity and confidence.",
      },
    ],
    galleryTitle: "Digital touchpoints",
    gallerySubtitle:
      "A full-stack presence designed for discovery, trust, and conversion.",
    gallery: {
      main: "/work-assets/gs_ramraj.webp",
      side1: "/work-assets/gs_cat.webp",
      side2: "/work-assets/gs_coll.webp",
      side3: "/work-assets/gs_blogs.webp",
    },
  },

  "fox-wing-media": {
    tag: "PR / Brand Authority",
    title:
      "Fox Wing Media: Positioning a modern PR brand for authority and inbound growth.",
    subtitle:
      "We designed a premium digital presence that makes an AI-powered PR story feel credible, clear, and easy to buy into.",
    heroImg: "/work-assets/foxwing.webp",
    liveUrl: "https://foxwingmedia.com/",
    challengeTitle:
      "The agency needed to feel premium, trustworthy, and immediately understandable to first-time visitors.",
    challengeDesc:
      "The core problem was clarity: visitors had to quickly understand what the agency does, why it is different, and why they should reach out instead of bouncing.",
    solutionTitle:
      "A sharper message hierarchy, stronger service framing, and CTA-led structure.",
    solutionDesc:
      "We shaped the site around trust signals, authority building, and conversion-friendly sections so the brand feels credible from the first scroll and supports stronger lead intent.",
    impactTitle: "Business impact",
    impact: [
      {
        title: "Clearer positioning",
        desc: "The offer is easier to understand in seconds.",
      },
      {
        title: "Premium perception",
        desc: "Visual hierarchy supports trust and authority.",
      },
      {
        title: "Higher CTA readiness",
        desc: "Visitors are guided toward action with less friction.",
      },
    ],
    galleryTitle: "Brand system",
    gallerySubtitle:
      "A polished presentation for a modern PR and growth agency.",
    gallery: {
      main: "/work-assets/foxwing_main.webp",
      side1: "/work-assets/foxwing_side1.webp",
      side2: "/work-assets/foxwing_gal.webp",
      side3: "/work-assets/foxwing_side2.webp",
    },
  },

  "divine-enterprises": {
    tag: "B2B Supply / Institutional",
    title:
      "Divine Enterprises: Creating a credible B2B supply platform for institutional buyers.",
    subtitle:
      "We built a trust-led digital presence for a Bihar-based supply business serving education, office, industrial, textile, and manpower needs.",
    heroImg: "/work-assets/divineEnt.webp",
    challengeTitle:
      "Institutional buyers needed a clear, professional way to understand the company’s range and trust the process quickly.",
    challengeDesc:
      "The site had to balance broad offerings with strong credibility, so procurement teams and business buyers could scan the right service category without confusion.",
    solutionTitle:
      "Structured service pages, strong trust cues, and a streamlined inquiry journey.",
    solutionDesc:
      "We positioned the business around reliability, category depth, and ease of enquiry so decision-makers can move from browsing to contact with minimal friction.",
    impactTitle: "Business impact",
    impact: [
      {
        title: "Category clarity",
        desc: "Education, office, industrial, textile, and manpower offers are easy to scan.",
      },
      {
        title: "Trust-led design",
        desc: "The experience feels serious enough for institutional buyers.",
      },
      {
        title: "Faster enquiries",
        desc: "Clear structure and CTAs reduce hesitation.",
      },
    ],
    galleryTitle: "Procurement-ready presence",
    gallerySubtitle: "Designed to support serious B2B buying decisions.",
    gallery: {
      main: "/work-assets/divineEnt.webp",
      side1: "/work-assets/gs_coll.webp",
      side2: "/work-assets/gs_cat.webp",
      side3: "/work-assets/gs_blogs.webp",
    },
  },
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const cs = caseStudies[id] || caseStudies["gaurav-synthetics"];

  useEffect(() => {
    window.scrollTo(0, 0);

    const cards = document.querySelectorAll(".glass-border-hover");
    const handlers = [];

    cards.forEach((card) => {
      const handler = (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        card.style.setProperty("--mouse-x", x);
        card.style.setProperty("--mouse-y", y);
      };

      handlers.push({ card, handler });
      card.addEventListener("mousemove", handler);
    });

    return () => {
      handlers.forEach(({ card, handler }) => {
        card.removeEventListener("mousemove", handler);
      });
    };
  }, [id]);

  return (
    <div className="font-body-md text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <div
        className="ambient-glow"
        style={{ top: "10%", left: "-20%", position: "absolute" }}
      />
      <div
        className="ambient-glow"
        style={{ top: "60%", right: "-20%", position: "absolute" }}
      />

      {/* ── Hero ── */}
      <header className="pt-24 pb-section-gap px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-6 mb-16">
          <span className="font-label-caps text-label-caps text-secondary-fixed tracking-widest uppercase">
            {cs.tag}
          </span>
          <h1 className="font-display-xl text-display-xl max-w-4xl">
            {cs.title}
          </h1>
          <p className="font-subheading text-subheading text-on-surface-variant max-w-2xl">
            {cs.subtitle}
          </p>
          {cs.liveUrl && (
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs hover:scale-105 glow-hover transition-all active:scale-95 mt-2"
            >
              <span>Check Live Site</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          )}
        </div>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden glass-card group">
          <img
            alt="Case Study Hero"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={cs.heroImg}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      </header>

      {/* ── Challenge & Solution ── */}
      <section className="py-section-gap px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-6">
            <h2 className="font-label-caps text-label-caps text-on-surface-variant border-l-2 border-secondary-fixed pl-4">
              The Challenge
            </h2>
            <p className="font-headline-lg text-3xl leading-tight text-on-surface">
              {cs.challengeTitle}
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              {cs.challengeDesc}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="font-label-caps text-label-caps text-on-surface-variant border-l-2 border-secondary-fixed pl-4">
              The Solution
            </h2>
            <p className="font-headline-lg text-3xl leading-tight text-on-surface">
              {cs.solutionTitle}
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              {cs.solutionDesc}
            </p>
          </div>
        </div>
      </section>

      {/* ── Impact ── */}
      <section className="py-section-gap bg-surface-container-lowest border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop">
          <div className="mb-14 max-w-2xl">
            <span className="text-secondary-fixed font-label-caps text-label-caps">
              {cs.impactTitle}
            </span>
            <p className="mt-4 text-on-surface-variant max-w-xl">
              Outcome-focused improvements that help the business look credible,
              feel premium, and convert more of the right traffic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {cs.impact.map(({ title, desc }) => (
              <div
                key={title}
                className="glass-card rounded-2xl p-8 space-y-4 h-full"
              >
                <h3 className="font-semibold text-on-surface text-xl">
                  {title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-section-gap px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="mb-20 max-w-2xl">
          <h3 className="font-headline-lg text-headline-lg mb-4">
            {cs.galleryTitle}
          </h3>
          <p className="font-subheading text-subheading text-on-surface-variant">
            {cs.gallerySubtitle}
          </p>
        </div>

        <div className="grid grid-cols-12 gap-gutter h-[760px] lg:h-[820px]">
          <div className="col-span-12 md:col-span-8 relative rounded-xl overflow-hidden glass-card glass-border-hover transition-all">
            <img
              alt="Project highlight"
              className="w-full h-full object-cover"
              src={cs.gallery.main}
            />
            <div className="absolute bottom-0 left-0 p-10 bg-gradient-to-t from-background/85 w-full">
              <p className="font-label-caps text-label-caps text-secondary-fixed mb-2">
                Core experience
              </p>
              <p className="text-on-surface-variant max-w-md">
                Designed to communicate trust, structure, and a clear next step.
              </p>
            </div>
          </div>

          <div className="col-span-6 md:col-span-4 relative rounded-xl overflow-hidden glass-card glass-border-hover transition-all">
            <img
              alt="Project detail 1"
              className="w-full h-full object-cover"
              src={cs.gallery.side1}
            />
          </div>

          <div className="col-span-6 md:col-span-4 relative rounded-xl overflow-hidden glass-card glass-border-hover transition-all">
            <img
              alt="Project detail 2"
              className="w-full h-full object-cover"
              src={cs.gallery.side2}
            />
          </div>

          <div className="col-span-6 md:col-span-8 relative rounded-xl overflow-hidden glass-card glass-border-hover transition-all">
            <img
              alt="Project detail 3"
              className="w-full h-full object-cover"
              src={cs.gallery.side3}
            />
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

export default CaseStudyDetail;