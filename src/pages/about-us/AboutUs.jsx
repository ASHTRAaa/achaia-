import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import aboutHeroImg from "/team-assets/about-hero.png";
import teamShowcaseImg from "/team-assets/team.webp";
import manishPhoto from "/team-assets/manish.webp";
import gurujeetPhoto from "/team-assets/gurujeet.webp";
import ayushPhoto from "/team-assets/ayush.webp";
import sushantPhoto from "/team-assets/sushant.webp";
import { useSEO } from "../../hooks/useSEO";
import MulticolorConversion from "../../components/home/MulticolorConversion";
import Team from "@/components/ui/team-01";
import "./AboutUs.css";

const AboutUs = () => {
  useSEO({
    title: "About Achaia Labs — Product Engineering & Automation Team",
    description:
      "Meet the founding team behind Achaia Labs. Hands-on product engineering, custom ERPs, Shopify e-commerce, and AI workflow automation with direct ownership.",
    path: "/about",
  });

  const [activeStep, setActiveStep] = useState(0);
  const [expanded, setExpanded] = useState({ gurujeet: false, manish: false, ayush: false, sushant: false });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const timelineSteps = [
    {
      title: "Discovery & Problem Definition",
      desc: "We analyze operational bottlenecks, existing data silos, and user workflows before recommending or choosing technology.",
      icon: "search",
    },
    {
      title: "Architecture & Solution Strategy",
      desc: "Defining the technical schema, data model, APIs, framework selection, and clean responsive UI architecture.",
      icon: "architecture",
    },
    {
      title: "Precision Build & Iteration",
      desc: "Engineering high-performance web, mobile, and cloud software with weekly staging milestones and direct feedback loops.",
      icon: "code",
    },
    {
      title: "Deployment & Ongoing Ownership",
      desc: "Production release, administrative team handover, and agreed ongoing maintenance, monitoring, and iterative improvements.",
      icon: "handshake",
    },
  ];

  const teamData = [
    {
      name: "Manish Kumar",
      role: "Client Outreach Head",
      bio: "Leads client partnerships, project strategy, and commercial operations. Focuses on aligning engineering deliverables with measurable business outcomes.",
      image: manishPhoto,
      socials: {
        linkedin: "https://www.linkedin.com/in/manish-k-06a2003b1/",
        x: "https://x.com/hitwicket_hogya",
      },
    },
    {
      name: "Gurujeet Kumar",
      role: "Business Operations Head",
      bio: "Manages financial planning, project operations, and search discoverability. Ensures client delivery timelines remain grounded in operational discipline.",
      image: gurujeetPhoto,
      socials: {
        linkedin: "https://www.linkedin.com/in/imgurujeet/",
        x: "https://x.com/imgurujeet",
      },
    },
    {
      name: "Ayush Aman",
      role: "Technical Operations Head",
      bio: "Leads software architecture, AI automation pipelines, mobile development, and cloud DevOps. Passionate about building resilient, low-latency production systems.",
      image: ayushPhoto,
      socials: {
        linkedin: "https://www.linkedin.com/in/ayushaman24/",
        x: "https://x.com/aman_ayush4",
      },
    },
    {
      name: "Sushant Kumar",
      role: "Marketing Head",
      bio: "Drives inbound strategy, growth positioning, and market outreach for both client platforms and in-house software products.",
      image: sushantPhoto,
      socials: {
        linkedin: "https://www.linkedin.com/in/sushant-kumar-9a85ab251/",
        x: "https://x.com/Sushant18857491",
      },
    },
  ];

  return (
    <div className="font-body-md text-[#F5F5F3] bg-[#111111] min-h-screen">
      {/* ── SECTION 1 — HERO ── */}
      <section className="pt-16 pb-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <span className="text-[#315EFB] font-mono text-xs uppercase tracking-widest block font-semibold">
            About Achaia Labs
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#F5F5F3] tracking-tight leading-[1.1]">
            Engineering software around real business problems.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#A6A6A6] leading-relaxed">
            Most digital projects falter because they solve imagined problems with bloated features. At Achaia Labs, we build, integrate, deploy, and maintain software systems designed around how businesses actually operate.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-8 py-4 rounded-full font-semibold text-sm transition-all shadow-md active:scale-95"
            >
              <span>Discuss a Project</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 bg-[#181818] hover:bg-[#202020] border border-[#303030] hover:border-[#444444] text-[#F5F5F3] px-7 py-4 rounded-full font-semibold text-sm transition-all"
            >
              <span>Explore Our Portfolio</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — APPROACH & DELIVERY MODEL ── */}
      <section className="py-16 md:py-24 bg-[#141414] border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#315EFB] font-mono text-xs uppercase tracking-widest block font-semibold">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#F5F5F3] leading-tight">
                Direct ownership. <br />No layers of bureaucracy.
              </h2>
              <div className="space-y-4 text-[#A6A6A6] leading-relaxed text-sm sm:text-base">
                <p>
                  We are not an agency that hands your project off to junior freelancers. When you work with Achaia Labs, you collaborate directly with the engineers and strategists building your software.
                </p>
                <div className="p-5 rounded-2xl bg-[#181818] border border-[#303030] border-l-4 border-l-[#315EFB] space-y-2">
                  <p className="font-semibold text-[#F5F5F3] text-sm">Our Core Principles:</p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#CCCCCC]">
                    <li>• Understand the operational bottleneck before choosing technology</li>
                    <li>• Build around real workflows, not rigid vendor templates</li>
                    <li>• Agree on ongoing maintenance and ownership before launch</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Timeline */}
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-mono font-semibold text-[#777777] uppercase tracking-wider mb-2">Our 4-Phase Delivery Journey</p>
              <div className="space-y-3">
                {timelineSteps.map((step, idx) => (
                  <div
                    key={step.title}
                    onMouseEnter={() => setActiveStep(idx)}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                      idx === activeStep
                        ? "border-[#315EFB] shadow-md bg-[#202020]"
                        : "border-[#303030] bg-[#181818] hover:border-[#444444]"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        idx === activeStep ? "bg-[#315EFB] text-white" : "bg-[#252525] text-[#A6A6A6]"
                      }`}>
                        <span className="material-symbols-outlined text-lg">{step.icon}</span>
                      </div>
                      <h3 className="font-semibold text-base text-[#F5F5F3]">{step.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#A6A6A6] pl-11 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — FOUNDING TEAM SHOWCASE (team-01) ── */}
      <Team
        badge="Founding Engineering Team"
        heading="The builders behind Achaia Labs."
        subtitle="A focused team of engineers, operators, and strategists working directly on your systems."
        teamData={teamData}
        className="border-b border-[#262626]"
      />

      {/* ── SECTION 4 — MICRO1-INSPIRED MULTICOLOR CLAYMORPHISM CTA ── */}
      <MulticolorConversion
        title="Ready to partner on your next software build?"
        description="Let's evaluate your operational requirements and engineer a solution designed for dependable long-term performance."
        primaryCtaText="Discuss a Project"
        primaryCtaLink="/contact"
        secondaryCtaText="Scope & Estimate Cost"
        secondaryCtaLink="/cyp"
      />
    </div>
  );
};

export default AboutUs;
