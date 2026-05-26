"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Rocket,
  Building2,
  Truck,
  Factory,
  Trophy,
  Award,
  TrendingUp,
} from "lucide-react";

const milestones = [
  {
    year: "2014",
    title: "Founded",
    description: "Started with a vision to revolutionize UAE contracting from Dubai.",
    detail: "Built the foundation for quality, reliability, and long-term trust.",
    icon: Rocket,
    position: "top" as const,
  },
  {
    year: "2016",
    title: "First Tower",
    description: "Completed our first major commercial tower project.",
    detail: "Expanded our reputation across Dubai's contracting sector.",
    icon: Building2,
    position: "bottom" as const,
  },
  {
    year: "2018",
    title: "Trading Division",
    description: "Opened our material trading division.",
    detail: "Strengthened procurement and control across active sites.",
    icon: Truck,
    position: "top" as const,
  },
  {
    year: "2020",
    title: "Industrial Scale",
    description: "Launched industrial procurement services.",
    detail: "Broadened scope for complex builds and supply chains.",
    icon: Factory,
    position: "bottom" as const,
  },
  {
    year: "2023",
    title: "7 Projects",
    description: "Reached 7 completed projects milestone.",
    detail: "A strong sign of consistent execution and client confidence.",
    icon: Trophy,
    position: "top" as const,
  },
  {
    year: "2024",
    title: "Top Partner",
    description: "Recognized as a top contracting partner.",
    detail: "Delivering premium villa construction and material supply.",
    icon: Award,
    position: "bottom" as const,
  },
];

const CARD_WIDTH = 260; // px — matches min-w below
const CARD_GAP = 24;   // gap-6 = 24px

function TimelineNode({
  milestone,
  index,
  isActive,
  onClick,
  nodeRef,
}: {
  milestone: (typeof milestones)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
  nodeRef: (el: HTMLDivElement | null) => void;
}) {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-40px" });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = milestone.icon;
  const isTop = milestone.position === "top";

  return (
    <motion.div
      ref={(el) => {
        (inViewRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
        nodeRef(el);
      }}
      initial={{ opacity: 0, y: isTop ? -20 : 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center flex-shrink-0"
      style={{ width: CARD_WIDTH, scrollSnapAlign: "center" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card */}
      <motion.div
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); }
        }}
        className={`relative w-full cursor-pointer rounded-2xl p-5 ${isTop ? "mb-8" : "mt-8 order-3"}`}
        animate={{
          y: isActive ? (isTop ? -5 : 5) : 0,
          scale: isActive ? 1.03 : 1,
        }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: isActive || isHovered ? "var(--card-cream)" : "var(--card-beige)",
          border: `1.5px solid ${
            isActive
              ? "var(--color-accent)"
              : isHovered
              ? "color-mix(in srgb, var(--color-accent) 30%, transparent)"
              : "var(--border-earth)"
          }`,
          boxShadow:
            isActive
              ? "0 16px 40px -10px rgba(216, 90, 48, 0.18), 0 4px 12px -4px rgba(92, 80, 71, 0.12)"
              : isHovered
              ? "0 8px 24px -6px rgba(92, 80, 71, 0.12)"
              : "0 2px 8px rgba(92, 80, 71, 0.06)",
          transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s",
        }}
      >
        {/* Year + Icon */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg"
            style={{
              background: isActive
                ? "color-mix(in srgb, var(--color-accent) 16%, transparent)"
                : "color-mix(in srgb, var(--color-accent) 9%, transparent)",
              border: `1px solid color-mix(in srgb, var(--color-accent) ${isActive ? 35 : 18}%, transparent)`,
            }}
          >
            <Icon size={15} className="text-accent" />
          </span>
          <span className="text-sm font-bold tracking-wider text-accent">{milestone.year}</span>
        </div>

        <h4
          className="text-base font-bold mb-2 leading-snug"
          style={{ color: "var(--text-heading)", fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          {milestone.title}
        </h4>

        <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
          {milestone.description}
        </p>

        <AnimatePresence>
          {isActive && (
            <motion.p
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 8 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.25 }}
              className="text-xs leading-relaxed pt-2"
              style={{
                color: "var(--text-muted)",
                borderTop: "1px solid color-mix(in srgb, var(--border-earth) 55%, transparent)",
              }}
            >
              {milestone.detail}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Active pointer nub */}
        {isActive && (
          <motion.div
            layoutId="cardNub"
            className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
            style={{
              background: "var(--card-cream)",
              borderRight: "1.5px solid color-mix(in srgb, var(--color-accent) 55%, transparent)",
              borderBottom: "1.5px solid color-mix(in srgb, var(--color-accent) 55%, transparent)",
            }}
          />
        )}
      </motion.div>

      {/* Stem */}
      <div
        className={`relative w-px flex-shrink-0 order-2`}
        style={{
          height: 48,
          background: `linear-gradient(to ${isTop ? "bottom" : "top"}, var(--border-earth), color-mix(in srgb, var(--color-accent) 40%, transparent))`,
        }}
      >
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2"
          style={{
            [isTop ? "bottom" : "top"]: -8,
            background: isActive ? "var(--color-accent)" : "white",
            borderColor: isActive ? "var(--color-accent)" : "var(--border-earth)",
            boxShadow: isActive
              ? "0 0 0 4px color-mix(in srgb, var(--color-accent) 18%, transparent)"
              : "none",
          }}
          animate={{ scale: isActive ? 1.25 : isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.28 }}
        />
      </div>
    </motion.div>
  );
}

export default function HorizontalTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ── Scroll a specific card into the center of the track ──
  const scrollToCard = useCallback((index: number) => {
    const track = scrollRef.current;
    const card = cardRefs.current[index];
    if (!track || !card) return;

    const trackCenter = track.clientWidth / 2;
    const cardLeft = card.offsetLeft;
    const cardCenter = card.offsetWidth / 2;
    track.scrollTo({ left: cardLeft - trackCenter + cardCenter, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  // ── Sync active dot from scroll position ──
  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;

    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const trackCenter = track.scrollLeft + track.clientWidth / 2;
        let closest = 0;
        let minDist = Infinity;
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const dist = Math.abs(trackCenter - cardCenter);
          if (dist < minDist) { minDist = dist; closest = i; }
        });
        setActiveIndex(closest);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => { track.removeEventListener("scroll", onScroll); cancelAnimationFrame(rafId); };
  }, []);

  // ── Arrow navigation ──
  const prev = () => scrollToCard(Math.max(0, activeIndex - 1));
  const next = () => scrollToCard(Math.min(milestones.length - 1, activeIndex + 1));

  return (
    <div className="relative w-full">
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-6 border"
          style={{
            background: "color-mix(in srgb, var(--color-accent) 8%, transparent)",
            borderColor: "color-mix(in srgb, var(--color-accent) 18%, transparent)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-semibold tracking-[0.05em] text-accent">Our Journey</span>
        </div>

        <h2
          className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-5 heading-serif"
          style={{ color: "var(--text-heading)" }}
        >
          Key <span className="text-accent">Milestones</span>
        </h2>

        <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-body)" }}>
          A decade of growth, precision, and trusted delivery across the UAE construction landscape.
        </p>
      </motion.div>

      {/* ── Desktop: horizontal snap-scroll track ── */}
      <div className="hidden md:block">
        {/* Arrow buttons */}
        <div className="relative">
          <button
            onClick={prev}
            aria-label="Previous milestone"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200"
            style={{
              background: "rgba(253,248,243,0.92)",
              borderColor: "var(--border-earth)",
              color: "var(--text-heading)",
              boxShadow: "0 2px 8px rgba(92,80,71,0.1)",
              opacity: activeIndex === 0 ? 0.3 : 1,
              pointerEvents: activeIndex === 0 ? "none" : "auto",
            }}
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={next}
            aria-label="Next milestone"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200"
            style={{
              background: "rgba(253,248,243,0.92)",
              borderColor: "var(--border-earth)",
              color: "var(--text-heading)",
              boxShadow: "0 2px 8px rgba(92,80,71,0.1)",
              opacity: activeIndex === milestones.length - 1 ? 0.3 : 1,
              pointerEvents: activeIndex === milestones.length - 1 ? "none" : "auto",
            }}
          >
            <ChevronRight size={16} />
          </button>

          {/* Track */}
          <div className="py-4">
            {/* Centre rule */}
            <div
              className="absolute left-0 right-0 h-px top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ background: "var(--border-earth)" }}
            />

            <div
              ref={scrollRef}
              className="flex items-center overflow-x-auto"
              style={{
                gap: CARD_GAP,
                minHeight: 560,
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                maskImage:
                  "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              }}
            >
              {/* Leading spacer to allow first card to centre */}
              <div className="flex-shrink-0" style={{ width: `calc(50% - ${CARD_WIDTH / 2}px)` }} />

              {milestones.map((milestone, i) => (
                <TimelineNode
                  key={milestone.year}
                  milestone={milestone}
                  index={i}
                  isActive={activeIndex === i}
                  onClick={() => scrollToCard(i)}
                  nodeRef={(el) => { cardRefs.current[i] = el; }}
                />
              ))}

              {/* Trailing spacer */}
              <div className="flex-shrink-0" style={{ width: `calc(50% - ${CARD_WIDTH / 2}px)` }} />
            </div>
          </div>
        </div>

        {/* ── Progress dots ── */}
        <div className="flex justify-center items-center mt-6 gap-2">
          {milestones.map((m, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              aria-label={`Go to ${m.year}`}
              className="rounded-full transition-all duration-400 focus:outline-none"
              style={{
                height: 6,
                width: activeIndex === i ? 28 : 6,
                background:
                  activeIndex === i
                    ? "var(--color-accent)"
                    : "color-mix(in srgb, var(--border-earth) 80%, var(--text-muted) 20%)",
                opacity: activeIndex === i ? 1 : 0.5,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Mobile: vertical accordion ── */}
      <div className="md:hidden space-y-3">
        {milestones.map((milestone, i) => {
          const Icon = milestone.icon;
          const isActive = activeIndex === i;
          return (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-16px" }}
              transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveIndex(isActive ? -1 : i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveIndex(isActive ? -1 : i); }
              }}
              className="rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: isActive ? "var(--card-cream)" : "var(--card-beige)",
                border: `1.5px solid ${isActive ? "color-mix(in srgb, var(--color-accent) 45%, transparent)" : "var(--border-earth)"}`,
                boxShadow: isActive ? "0 6px 20px -4px rgba(92,80,71,0.12)" : "0 1px 4px rgba(92,80,71,0.04)",
                transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s",
              }}
            >
              <div className="p-4 flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isActive
                      ? "color-mix(in srgb, var(--color-accent) 14%, transparent)"
                      : "color-mix(in srgb, var(--color-accent) 7%, transparent)",
                    border: `1px solid ${isActive ? "color-mix(in srgb, var(--color-accent) 28%, transparent)" : "transparent"}`,
                  }}
                >
                  <Icon size={20} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-bold tracking-wider text-accent">{milestone.year}</span>
                    <span className="w-1 h-1 rounded-full" style={{ background: "var(--border-earth)" }} />
                    <span className="text-xs font-medium truncate" style={{ color: "var(--text-muted)" }}>{milestone.title}</span>
                  </div>
                  <p className="text-sm leading-snug" style={{ color: "var(--text-body)" }}>{milestone.description}</p>
                </div>
                <motion.div animate={{ rotate: isActive ? 90 : 0 }} transition={{ duration: 0.2 }} style={{ color: "var(--text-muted)" }}>
                  <ChevronRight size={16} />
                </motion.div>
              </div>
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-4 pb-4 text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)", borderTop: "1px solid color-mix(in srgb, var(--border-earth) 40%, transparent)", paddingTop: 12 }}
                    >
                      {milestone.detail}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* ── Bottom stat ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.55 }}
        className="mt-14 text-center"
      >
        <div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
          style={{ background: "var(--card-beige)", border: "1px solid var(--border-earth)" }}
        >
          <TrendingUp size={17} className="text-accent shrink-0" />
          <span className="text-sm font-medium" style={{ color: "var(--text-body)" }}>
            <strong style={{ color: "var(--text-heading)" }}>10+ years</strong> of continuous growth and delivery
          </span>
        </div>
      </motion.div>
    </div>
  );
}
