"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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

// ── Milestone Data ──
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

// ── Components ──

function TimelineNode({
  milestone,
  index,
  isActive,
  onClick,
}: {
  milestone: (typeof milestones)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = milestone.icon;

  const isTop = milestone.position === "top";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: isTop ? -30 : 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center min-w-[200px] sm:min-w-[240px] md:min-w-[280px] flex-shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content Card */}
      <motion.div
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
        className={`relative w-full cursor-pointer rounded-2xl p-5 transition-all duration-500 ${
          isTop ? "mb-8" : "mt-8 order-3"
        }`}
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
            isActive || isHovered
              ? "0 12px 32px -8px rgba(92, 80, 71, 0.15)"
              : "0 2px 8px rgba(92, 80, 71, 0.06)",
        }}
        whileHover={{ y: isTop ? -4 : 4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Year Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg"
            style={{
              background: isActive
                ? "color-mix(in srgb, var(--color-accent) 18%, transparent)"
                : "color-mix(in srgb, var(--color-accent) 10%, transparent)",
              border: `1px solid ${
                isActive
                  ? "color-mix(in srgb, var(--color-accent) 40%, transparent)"
                  : "color-mix(in srgb, var(--color-accent) 20%, transparent)"
              }`,
            }}
          >
            <Icon size={16} className="text-accent" />
          </span>
          <span className="text-sm font-bold tracking-wider text-accent">
            {milestone.year}
          </span>
        </div>

        {/* Title */}
        <h4
          className="text-base font-bold mb-2 leading-snug"
          style={{
            color: "var(--text-heading)",
            fontFamily: "var(--font-cormorant), Georgia, serif",
          }}
        >
          {milestone.title}
        </h4>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--text-body)" }}>
          {milestone.description}
        </p>

        {/* Detail (shown when active) */}
        <AnimatePresence>
          {isActive && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xs leading-relaxed pt-2 mt-2"
              style={{
                color: "var(--text-muted)",
                borderTop: "1px solid color-mix(in srgb, var(--border-earth) 50%, transparent)",
              }}
            >
              {milestone.detail}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Active indicator dot */}
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
            style={{
              background: "var(--card-cream)",
              borderRight: "1.5px solid color-mix(in srgb, var(--color-accent) 60%, transparent)",
              borderBottom: "1.5px solid color-mix(in srgb, var(--color-accent) 60%, transparent)",
            }}
          />
        )}
      </motion.div>

      {/* Connector Line */}
      <div
        className={`relative w-px flex-shrink-0 ${isTop ? "order-2 mb-0" : "order-2 mt-0"}`}
        style={{
          height: "48px",
          background: `linear-gradient(to ${isTop ? "bottom" : "top"}, var(--border-earth), color-mix(in srgb, var(--color-accent) 40%, transparent))`,
        }}
      >
        {/* Node on timeline */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2"
          style={{
            [isTop ? "bottom" : "top"]: "-8px",
            background: isActive ? "var(--color-accent)" : "white",
            borderColor: isActive ? "var(--color-accent)" : "var(--border-earth)",
            boxShadow: isActive
              ? "0 0 0 4px color-mix(in srgb, var(--color-accent) 20%, transparent)"
              : "none",
          }}
          animate={{
            scale: isActive ? 1.2 : isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

function TimelineTrack({ scrollRef }: { scrollRef: React.RefObject<HTMLDivElement | null> }) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  }, [scrollRef]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, [scrollRef, checkScroll]);

  return (
    <>
      {/* The horizontal line */}
      <div
        className="absolute left-0 right-0 h-px top-1/2 -translate-y-1/2 hidden md:block"
        style={{ background: "var(--border-earth)" }}
      />

      {/* Scroll Buttons */}
      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scroll("left")}
          aria-label="Scroll timeline left"
          className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 ${
            canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{
            background: "rgba(253, 248, 243, 0.9)",
            borderColor: "var(--border-earth)",
            color: "var(--text-heading)",
            boxShadow: "0 4px 12px rgba(92, 80, 71, 0.1)",
          }}
        >
          <ChevronLeft size={18} />
        </motion.button>
      </div>

      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-4 z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scroll("right")}
          aria-label="Scroll timeline right"
          className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 ${
            canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{
            background: "rgba(253, 248, 243, 0.9)",
            borderColor: "var(--border-earth)",
            color: "var(--text-heading)",
            boxShadow: "0 4px 12px rgba(92, 80, 71, 0.1)",
          }}
        >
          <ChevronRight size={18} />
        </motion.button>
      </div>
    </>
  );
}

export default function HorizontalTimeline() {
  const [activeIndex, setActiveIndex] = useState(2);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, var(--text-body) 0px, var(--text-body) 1px, transparent 1px, transparent 80px)`,
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-accent">
              Our Journey
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-5 heading-serif"
            style={{
              color: "var(--text-heading)",
            }}
          >
            Key <span className="text-accent">Milestones</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-body)" }}>
            A decade of growth, precision, and trusted delivery across the UAE construction landscape.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop: Horizontal scrollable timeline */}
          <div className="hidden md:block relative py-12">
            <TimelineTrack scrollRef={scrollRef} />

            <div
              ref={scrollRef}
              className="flex items-center gap-6 overflow-x-auto pb-8 pt-4 px-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
              }}
            >
              {/* Spacer for centering */}
              <div className="w-[calc(50%-140px)] flex-shrink-0" />

              {milestones.map((milestone, i) => (
                <TimelineNode
                  key={milestone.year}
                  milestone={milestone}
                  index={i}
                  isActive={activeIndex === i}
                  onClick={() => setActiveIndex(i)}
                />
              ))}

              {/* Spacer for centering */}
              <div className="w-[calc(50%-140px)] flex-shrink-0" />
            </div>
          </div>

          {/* Mobile: Vertical accordion-style cards */}
          <div className="md:hidden space-y-4">
            {milestones.map((milestone, i) => {
              const Icon = milestone.icon;
              const isActive = activeIndex === i;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  onClick={() => setActiveIndex(isActive ? -1 : i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveIndex(isActive ? -1 : i); } }}
                  className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
                  style={{
                    background: isActive ? "var(--card-cream)" : "var(--card-beige)",
                    border: `1.5px solid ${
                      isActive
                        ? "color-mix(in srgb, var(--color-accent) 50%, transparent)"
                        : "var(--border-earth)"
                    }`,
                    boxShadow: isActive
                      ? "0 8px 24px -6px rgba(92, 80, 71, 0.12)"
                      : "0 2px 6px rgba(92, 80, 71, 0.04)",
                  }}
                >
                  <div className="p-5 flex items-center gap-4">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: isActive
                          ? "color-mix(in srgb, var(--color-accent) 15%, transparent)"
                          : "color-mix(in srgb, var(--color-accent) 8%, transparent)",
                        border: `1px solid ${
                          isActive
                            ? "color-mix(in srgb, var(--color-accent) 30%, transparent)"
                            : "transparent"
                        }`,
                      }}
                    >
                      <Icon size={22} className="text-accent" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold tracking-wider text-accent">
                          {milestone.year}
                        </span>
                        <span
                          className="w-1 h-1 rounded-full"
                          style={{ background: "var(--border-earth)" }}
                        />
                        <span
                          className="text-xs font-medium truncate"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {milestone.title}
                        </span>
                      </div>
                      <p className="text-sm leading-snug" style={{ color: "var(--text-body)" }}>
                        {milestone.description}
                      </p>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: "var(--text-muted)" }}
                    >
                      <ChevronRight size={18} />
                    </motion.div>
                  </div>

                  {/* Expanded detail */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div
                          className="px-5 pb-5 pt-0 text-sm leading-relaxed"
                          style={{
                            color: "var(--text-muted)",
                            borderTop:
                              "1px solid color-mix(in srgb, var(--border-earth) 40%, transparent)",
                          }}
                        >
                          <div className="pt-3">{milestone.detail}</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Progress indicator (desktop) */}
          <div className="hidden md:flex justify-center mt-8 gap-2">
            {milestones.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="h-1.5 rounded-full transition-all duration-500"
                style={{
                  width: activeIndex === i ? 32 : 8,
                  background: activeIndex === i ? "var(--color-accent)" : "var(--border-earth)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
            style={{
              background: "var(--card-beige)",
              border: "1px solid var(--border-earth)",
            }}
          >
            <TrendingUp size={18} className="text-accent shrink-0" />
            <span className="text-sm font-medium" style={{ color: "var(--text-body)" }}>
              <strong style={{ color: "var(--text-heading)" }}>10+ years</strong> of continuous
              growth and delivery
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
