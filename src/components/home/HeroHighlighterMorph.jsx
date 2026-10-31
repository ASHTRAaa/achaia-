import { useState, useRef, useEffect } from "react";

/**
 * HeroHighlighterMorph
 * High-agency interactive highlighter filter that morphs "software." into "systems."
 * Responsive to:
 * - Direct horizontal mouse scrubbing from left-to-right & vice versa
 * - Hover scroll (trackpad gesture / mouse wheel)
 * - Natural hover enter (auto-sweeps forward) / leave (sweeps back)
 * - Touch scrubbing and tap toggle
 *
 * Uses CSS Grid stacking to guarantee 100% mathematical baseline alignment
 * between "software." and "systems." with zero layout shift.
 */
export default function HeroHighlighterMorph() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [isScrubbing, setIsScrubbing] = useState(false);
  const scrubTimerRef = useRef(null);

  const clampProgress = (val) => Math.max(0, Math.min(100, val));

  // Natural hover enter: if entered from left, sweep forward
  const handleMouseEnter = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = clampProgress((x / rect.width) * 100);

    if (pct < 35) {
      setIsScrubbing(false);
      setProgress(100);
    } else {
      setIsScrubbing(true);
      setProgress(pct);
    }
  };

  // Direct tactile scrubbing as cursor moves horizontally across the word
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = clampProgress((x / rect.width) * 100);

    setIsScrubbing(true);
    setProgress(pct);

    clearTimeout(scrubTimerRef.current);
    scrubTimerRef.current = setTimeout(() => {
      setIsScrubbing(false);
    }, 120);
  };

  // Cursor leaves word: smoothly return highlighter back to "software." (0%)
  const handleMouseLeave = () => {
    clearTimeout(scrubTimerRef.current);
    setIsScrubbing(false);
    setProgress(0);
  };

  // Hover scroll: trackpad swipe or mouse wheel over the word scrubs it
  const handleWheel = (e) => {
    if (!containerRef.current) return;
    e.preventDefault();
    e.stopPropagation();

    // Prefer deltaX for horizontal trackpad swipe, otherwise deltaY
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    const step = delta > 0 ? 12 : -12;

    setIsScrubbing(false);
    setProgress((prev) => clampProgress(prev + step));
  };

  // Tap or click toggle
  const handleClick = () => {
    setIsScrubbing(false);
    setProgress((prev) => (prev > 50 ? 0 : 100));
  };

  // Mobile touch support
  const handleTouchMove = (e) => {
    if (!e.touches || e.touches.length === 0 || !containerRef.current) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const pct = clampProgress((x / rect.width) * 100);

    setIsScrubbing(true);
    setProgress(pct);
  };

  const handleTouchEnd = () => {
    setIsScrubbing(false);
    setProgress((prev) => (prev > 50 ? 100 : 0));
  };

  useEffect(() => {
    return () => clearTimeout(scrubTimerRef.current);
  }, []);

  const isHighlighted = progress > 1;
  const isFullySystems = progress >= 98;

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onWheel={handleWheel}
      onClick={handleClick}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      title="Hover, scrub, or scroll across to morph from software to systems"
      className="relative inline-grid [grid-template-areas:'stack'] align-baseline select-none cursor-ew-resize group mx-1"
    >
      {/* BASE LAYER: "software." in clean white with subtle resting marker underline */}
      <span
        className="[grid-area:stack] relative text-[#F5F5F3] font-semibold tracking-tight whitespace-nowrap px-2.5 py-0.5 rounded-lg transition-opacity duration-150"
        style={{ opacity: progress > 85 ? Math.max(0, 1 - (progress - 85) / 10) : 1 }}
      >
        software.
        {/* Subtle resting highlighter hint under the word */}
        <span
          className="absolute bottom-1 left-2.5 right-2.5 h-[3px] rounded-full bg-[#315EFB]/50 group-hover:bg-[#315EFB] transition-all duration-300 pointer-events-none"
          style={{ opacity: progress > 50 ? 0 : 1 }}
        />
      </span>

      {/* HIGHLIGHTER FILTER LAYER: Contrasting Electric Cobalt highlight revealing "systems." */}
      <span
        aria-hidden="true"
        className="[grid-area:stack] relative pointer-events-none whitespace-nowrap px-2.5 py-0.5 rounded-lg overflow-hidden"
        style={{
          background: "linear-gradient(90deg, #1D43D8 0%, #315EFB 60%, #4673FF 100%)",
          boxShadow: isHighlighted ? "0 0 24px rgba(49, 94, 251, 0.45)" : "none",
          clipPath: `inset(0 ${(100 - progress).toFixed(1)}% 0 0 round 8px)`,
          WebkitClipPath: `inset(0 ${(100 - progress).toFixed(1)}% 0 0 round 8px)`,
          transition: isScrubbing
            ? "none"
            : "clip-path 0.35s cubic-bezier(0.16, 1, 0.3, 1), -webkit-clip-path 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease",
        }}
      >
        {/* White text over electric blue highlight - identical typography & baseline */}
        <span className="text-white font-semibold tracking-tight whitespace-nowrap block drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
          systems.
        </span>

        {/* Luminous Leading Edge Highlighter Beam */}
        {isHighlighted && !isFullySystems && (
          <span
            className="absolute top-0 bottom-0 w-[2.5px] bg-white rounded-full shadow-[0_0_10px_#FFFFFF,0_0_4px_#315EFB] pointer-events-none"
            style={{
              left: `calc(${progress.toFixed(1)}% - 2px)`,
              transition: isScrubbing ? "none" : "left 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        )}
      </span>
    </span>
  );
}
