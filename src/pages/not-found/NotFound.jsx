import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, rgba(189,245,0,0.04) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="space-y-8 max-w-2xl">
        <span className="font-label-caps text-label-caps text-secondary-fixed tracking-widest block">SYSTEM ERROR 404</span>
        <h1 className="font-display-xl text-display-xl text-on-surface text-glow">
          Lost in the <span className="text-secondary-fixed">Digital Void</span>
        </h1>
        <p className="font-subheading text-subheading text-on-surface-variant">
          The signal you sent cannot be located within the lab's network topology. This sector of the grid remains unmapped.
        </p>

        {/* Diagnostic cards */}
        <div className="grid grid-cols-3 gap-4 my-12">
          {[
            { label: "SIGNAL LOSS", val: "100%" },
            { label: "SCAN DEPTH", val: "∞" },
            { label: "LAB STATUS", val: "ACTIVE" },
          ].map(({ label, val }) => (
            <div key={label} className="glass-card p-6 rounded-xl !transform-none">
              <p className="text-secondary-fixed font-bold text-2xl">{val}</p>
              <p className="font-label-caps text-[10px] text-on-surface-variant mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-full font-label-caps text-label-caps font-bold hover:scale-105 glow-hover transition-all"
          >
            Return to Base
          </Link>
          <Link
            to="/contact"
            className="border border-white/20 text-white px-8 py-4 rounded-full font-label-caps text-label-caps font-bold hover:bg-white/5 transition-all"
          >
            Contact Lab
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
