"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SquareArrowOutUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export type CardStackItem = {
  id: string | number;
  title: string;
  client?: string;
  vertical?: string;
  description?: string;
  shortDesc?: string;
  imageSrc?: string;
  img?: string;
  href?: string;
  link?: string;
  ctaLabel?: string;
  tag?: string;
  deliverables?: string[];
};

export type CardStackProps<T extends CardStackItem> = {
  items: T[];
  initialIndex?: number;
  maxVisible?: number;
  cardWidth?: number;
  cardHeight?: number;
  overlap?: number;
  spreadDeg?: number;
  perspectivePx?: number;
  depthPx?: number;
  tiltXDeg?: number;
  activeLiftPx?: number;
  activeScale?: number;
  inactiveScale?: number;
  springStiffness?: number;
  springDamping?: number;
  loop?: boolean;
  autoAdvance?: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;
  showDots?: boolean;
  showControls?: boolean;
  className?: string;
  onChangeIndex?: (index: number, item: T) => void;
  renderCard?: (item: T, state: { active: boolean }) => React.ReactNode;
};

function wrapIndex(n: number, len: number) {
  if (len <= 0) return 0;
  return ((n % len) + len) % len;
}

function signedOffset(i: number, active: number, len: number, loop: boolean) {
  const raw = i - active;
  if (!loop || len <= 1) return raw;
  const alt = raw > 0 ? raw - len : raw + len;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

export function CardStack<T extends CardStackItem>({
  items,
  initialIndex = 0,
  maxVisible = 5,
  cardWidth = 560,
  cardHeight = 350,
  overlap = 0.44,
  spreadDeg = 38,
  perspectivePx = 1200,
  depthPx = 130,
  tiltXDeg = 10,
  activeLiftPx = 22,
  activeScale = 1.04,
  inactiveScale = 0.93,
  springStiffness = 260,
  springDamping = 26,
  loop = true,
  autoAdvance = true,
  intervalMs = 3800,
  pauseOnHover = true,
  showDots = true,
  showControls = true,
  className,
  onChangeIndex,
  renderCard,
}: CardStackProps<T>) {
  const reduceMotion = useReducedMotion();
  const len = items.length;

  const [active, setActive] = React.useState(() => wrapIndex(initialIndex, len));
  const [hovering, setHovering] = React.useState(false);
  const [containerWidth, setContainerWidth] = React.useState(1200);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      } else if (typeof window !== "undefined") {
        setContainerWidth(window.innerWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const responsiveCardWidth = Math.min(cardWidth, Math.max(300, containerWidth - 36));
  const responsiveCardHeight = Math.round(
    (responsiveCardWidth / cardWidth) * cardHeight
  );

  React.useEffect(() => {
    setActive((a) => wrapIndex(a, len));
  }, [len]);

  React.useEffect(() => {
    if (!len) return;
    onChangeIndex?.(active, items[active]!);
  }, [active, len, items, onChangeIndex]);

  const maxOffset = Math.max(0, Math.floor(maxVisible / 2));
  const cardSpacing = Math.max(12, Math.round(responsiveCardWidth * (1 - overlap)));
  const stepDeg = maxOffset > 0 ? spreadDeg / maxOffset : 0;

  const canGoPrev = loop || active > 0;
  const canGoNext = loop || active < len - 1;

  const prev = React.useCallback(() => {
    if (!len || !canGoPrev) return;
    setActive((a) => wrapIndex(a - 1, len));
  }, [canGoPrev, len]);

  const next = React.useCallback(() => {
    if (!len || !canGoNext) return;
    setActive((a) => wrapIndex(a + 1, len));
  }, [canGoNext, len]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  React.useEffect(() => {
    if (!autoAdvance || reduceMotion || !len || (pauseOnHover && hovering)) return;

    const id = window.setInterval(() => {
      if (loop || active < len - 1) next();
    }, Math.max(1000, intervalMs));

    return () => window.clearInterval(id);
  }, [autoAdvance, intervalMs, hovering, pauseOnHover, reduceMotion, len, loop, active, next]);

  if (!len) return null;

  const activeItem = items[active]!;

  return (
    <div
      ref={containerRef}
      className={cn("w-full select-none", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="relative w-full overflow-visible focus:outline-none"
        style={{ height: Math.max(400, responsiveCardHeight + 90) }}
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label="Production Showcase 3D Card Stack"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-2 mx-auto h-52 w-[75%] rounded-full bg-[#315EFB]/10 blur-[90px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-4 mx-auto h-40 w-[80%] rounded-full bg-black/50 blur-[80px]"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 flex items-end justify-center"
          style={{
            perspective: `${perspectivePx}px`,
          }}
        >
          <AnimatePresence initial={false}>
            {items.map((item, i) => {
              const off = signedOffset(i, active, len, loop);
              const abs = Math.abs(off);
              const visible = abs <= maxOffset;

              if (!visible) return null;

              const rotateZ = off * stepDeg;
              const x = off * cardSpacing;
              const y = abs * 12;
              const z = -abs * depthPx;

              const isActive = off === 0;
              const scale = isActive ? activeScale : inactiveScale;
              const lift = isActive ? -activeLiftPx : 0;
              const rotateX = isActive ? 0 : tiltXDeg;
              const zIndex = 100 - abs;

              const dragProps = isActive
                ? {
                    drag: "x" as const,
                    dragConstraints: { left: 0, right: 0 },
                    dragElastic: 0.18,
                    onDragEnd: (
                      _e: any,
                      info: { offset: { x: number }; velocity: { x: number } }
                    ) => {
                      if (reduceMotion) return;
                      const travel = info.offset.x;
                      const v = info.velocity.x;
                      const threshold = Math.min(150, responsiveCardWidth * 0.22);

                      if (travel > threshold || v > 600) prev();
                      else if (travel < -threshold || v < -600) next();
                    },
                  }
                : {};

              return (
                <motion.div
                  key={item.id}
                  className={cn(
                    "absolute bottom-4 rounded-2xl border border-white/20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)]",
                    "will-change-transform",
                    isActive
                      ? "cursor-grab active:cursor-grabbing ring-1 ring-white/30"
                      : "cursor-pointer hover:border-white/40 opacity-75 hover:opacity-90"
                  )}
                  style={{
                    width: responsiveCardWidth,
                    height: responsiveCardHeight,
                    zIndex,
                    transformStyle: "preserve-3d",
                  }}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: y + 40,
                          x,
                          rotateZ,
                          rotateX,
                          scale,
                        }
                  }
                  animate={{
                    opacity: isActive ? 1 : Math.max(0.45, 1 - abs * 0.22),
                    x,
                    y: y + lift,
                    rotateZ,
                    rotateX,
                    scale,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: springStiffness,
                    damping: springDamping,
                  }}
                  onClick={() => {
                    if (!isActive) setActive(i);
                  }}
                  {...dragProps}
                >
                  <div
                    className="h-full w-full"
                    style={{
                      transform: `translateZ(${z}px)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {renderCard ? (
                      renderCard(item, { active: isActive })
                    ) : (
                      <DefaultFanCard item={item} active={isActive} />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {showDots || showControls ? (
        <div className="mt-8 flex items-center justify-center gap-4">
          {showControls && (
            <button
              onClick={prev}
              className="p-2 rounded-full bg-[#181818] border border-[#303030] hover:border-[#444444] text-[#A6A6A6] hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Previous Project"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          )}

          {showDots && (
            <div className="flex items-center gap-2">
              {items.map((it, idx) => {
                const on = idx === active;
                return (
                  <button
                    key={it.id}
                    onClick={() => setActive(idx)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      on
                        ? "w-6 bg-[#315EFB]"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    )}
                    aria-label={`Go to ${it.title}`}
                  />
                );
              })}
            </div>
          )}

          {showControls && (
            <button
              onClick={next}
              className="p-2 rounded-full bg-[#181818] border border-[#303030] hover:border-[#444444] text-[#A6A6A6] hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Next Project"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}

          {activeItem?.href && (
            <Link
              to={activeItem.href}
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181818] border border-[#303030] text-xs font-semibold text-[#A6A6A6] hover:text-white hover:border-[#444444] transition-all"
              aria-label={`Open ${activeItem.title} case study`}
            >
              <span>Case Study</span>
              <SquareArrowOutUpRight className="h-3 w-3 text-[#315EFB]" />
            </Link>
          )}
        </div>
      ) : null}
    </div>
  );
}

function DefaultFanCard({ item, active }: { item: CardStackItem; active: boolean }) {
  return (
    <div className="relative h-full w-full bg-[#141416] overflow-hidden">
      <img
        src={item.imageSrc || item.img}
        alt={item.title}
        className="h-full w-full object-cover select-none"
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      {item.vertical && (
        <div className="absolute top-4 left-4 z-10 bg-[#111111]/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-[#F5F5F3] uppercase tracking-wider border border-white/10">
          {item.vertical}
        </div>
      )}
      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
          {item.title}
        </h3>
        {item.client && (
          <p className="mt-1 text-xs text-[#B5B5B5] font-light">
            {item.client}
          </p>
        )}
      </div>
    </div>
  );
}

export default CardStack;
