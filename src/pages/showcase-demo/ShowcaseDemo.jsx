import React from "react";
import { Link } from "react-router-dom";
import ScrollShowcase from "../../components/home/ScrollShowcase";

const demoItems = [
  {
    id: "realm",
    number: "01",
    tag: "SIMULATION",
    title: "Realm",
    description:
      "RL environments that mirror real-world scenarios to generate world-class human data for agentic actions and elevate model reasoning.",
    href: "#realm",
    image: "/showcase/1.png",
    imageAlt: "Realm RL Environment 3D Card",
    client: "micro1 RL Environment",
    metrics: ["GPT-5.5 Ready", "Reward Benchmarking", "19 Evaluation Criteria"],
  },
  {
    id: "cortex",
    number: "02",
    tag: "EVALUATION",
    title: "Cortex",
    description:
      "The contextual evaluation platform for improving AI agent performance in production with precision scoring matrices.",
    href: "#cortex",
    image: "/showcase/2.png",
    imageAlt: "Cortex Evaluation Platform 3D Card",
    client: "Contextual Evaluator",
    metrics: ["88.6% Judge Agreement", "Latency Dashboards", "Automated QA"],
  },
  {
    id: "robotics",
    number: "03",
    tag: "PHYSICAL AI",
    title: "Robotics",
    description:
      "High-fidelity real-world robotics data and trajectory capture for advanced embodied intelligence models.",
    href: "#robotics",
    image: "/showcase/3.png",
    imageAlt: "Robotics Embodied Intelligence 3D Card",
    client: "Embodied AI Trajectory",
    metrics: ["Trajectory Mapping", "Multi-modal Sync", "Real-World Capture"],
  },
];

const ShowcaseDemo = () => {
  return (
    <div className="bg-[#0D0D0D] text-[#F5F5F3] min-h-screen">
      {/* ── 100vh Top Filler to Test Section Pinning ── */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 border-b border-[#222222]">
        <div className="max-w-2xl space-y-4">
          <span className="font-mono text-xs text-[#315EFB] font-bold tracking-widest uppercase bg-[#315EFB]/10 px-3 py-1 rounded-full border border-[#315EFB]/20">
            TESTING HARNESS • TOP FILLER (100VH)
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Scroll Down to Test Pinning
          </h1>
          <p className="text-[#888888] text-base leading-relaxed">
            This section represents 100vh of preceding page content. As you scroll past this point, the stage below will lock cleanly into sticky focus and scrub through items before unpinning.
          </p>
          <div className="pt-4">
            <span className="material-symbols-outlined text-3xl text-[#555555] animate-bounce">
              keyboard_arrow_down
            </span>
          </div>
        </div>
      </section>

      {/* ── ScrollShowcase Pinned Stage ── */}
      <ScrollShowcase
        badge="REPLICA VALIDATION • 3-ITEM SUITE"
        heading="micro1 Intelligence"
        subtitle="We're building the infrastructure for advancing intelligence through expert human data, real-world training environments, and contextual evaluations."
        items={demoItems}
      />

      {/* ── 100vh Bottom Filler to Test Section Unpinning ── */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 border-t border-[#222222]">
        <div className="max-w-2xl space-y-4">
          <span className="font-mono text-xs text-emerald-400 font-bold tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            UNPIN CONFIRMED • BOTTOM FILLER (100VH)
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Section Unpinned Cleanly
          </h2>
          <p className="text-[#888888] text-base leading-relaxed">
            The scroll showcase has unpinned. Scrolling back upwards reverses the sequence exactly without layout jump or scroll hitching.
          </p>
          <div className="pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#181818] hover:bg-[#222222] text-white px-6 py-3 rounded-full text-sm font-semibold border border-[#303030]"
            >
              <span>Back to Achaia Home</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowcaseDemo;
