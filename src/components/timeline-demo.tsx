"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Building2,
  Trophy,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const milestones = [
  {
    year: "2022",
    title: "Company Establishment",
    description: "Rohit Contracting L.L.C was officially established to deliver premium villa construction services across Dubai.",
    detail: "Founded with a commitment to quality craftsmanship, transparency, and client satisfaction.",
    icon: Building2,
    position: "top" as const,
  },
  {
    year: "2025",
    title: "10+ Projects Handed Over",
    description: "Achieved a major milestone — 10+ premium villa projects successfully completed and handed over.",
    detail: "Every project delivered on time, within budget, and to uncompromising quality standards.",
    icon: Trophy,
    position: "bottom" as const,
  },
  {
    year: "2026",
    title: "15+ Projects Running",
    description: "Scaling new heights with 15+ active villa construction projects currently underway across Dubai.",
    detail: "A reflection of our growing reputation and the unwavering trust placed by Dubai homeowners.",
    icon: TrendingUp,
    position: "top" as const,
  },
];

function TimelineCard({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0];
  index: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-40px" });
  const Icon = milestone.icon;
  const isTop = milestone.position === "top";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: isTop ? -20 : 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center flex-shrink-0"
      style={{ width: 280 }}
    >
      {/* Card */}
      <div
        className={`relative w-full rounded-2xl p-5 text-center ${isTop ? "mb-8" : "mt-8 order-3"}`}
        style={{
          background: "var(--card-cream)",
          border: "1.5px solid var(--border-earth)",
          boxShadow: "0 4px 20px -6px rgba(92, 80, 71, 0.1), 0 1px 4px rgba(92, 80, 71, 0.04)",
        }}
      >
        {/* Year + Icon */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg"
            style={{
              background: "color-mix(in srgb, var(--color-accent) 9%, transparent)",
              border: "1px solid color-mix(in srgb, var(--color-accent) 18%, transparent)",
            }}
          >
            <Icon size={15} className="text-accent" />
          </span>
          <span className="text-sm font-bold tracking-wider text-accent">{milestone.year}</span>
        </div>

        <h4
          className="text-lg font-bold mb-2 leading-snug"
          style={{ color: "var(--text-heading)" }}
        >
          {milestone.title}
        </h4>

        <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-body)" }}>
          {milestone.description}
        </p>

        <p
          className="text-xs leading-relaxed pt-2"
          style={{
            color: "var(--text-muted)",
            borderTop: "1px solid color-mix(in srgb, var(--border-earth) 55%, transparent)",
          }}
        >
          {milestone.detail}
        </p>
      </div>

      {/* Stem */}
      <div
        className={`relative w-px flex-shrink-0 order-2`}
        style={{
          height: 48,
          background: `linear-gradient(to ${isTop ? "bottom" : "top"}, var(--border-earth), color-mix(in srgb, var(--color-accent) 40%, transparent))`,
        }}
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2"
          style={{
            [isTop ? "bottom" : "top"]: -8,
            background: "var(--color-accent)",
            borderColor: "var(--color-accent)",
            boxShadow: "0 0 0 4px color-mix(in srgb, var(--color-accent) 18%, transparent)",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function HorizontalTimeline() {
  const [activeIndex, setActiveIndex] = useState(-1);

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
          className="text-4xl sm:text-5xl font-bold leading-tight mb-6 heading-serif"
          style={{ color: "var(--text-heading)" }}
        >
          Key <span className="text-gradient-warm">Milestones</span>
        </h2>

        <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-body)" }}>
          From our founding in 2022 to a growing portfolio of villa projects — each milestone reflects our commitment to quality and trust.
        </p>
      </motion.div>

      {/* ── Desktop: static horizontal timeline (no card styling) ── */}
      <div className="hidden md:block">
        <div className="py-4">
          <div
            className="relative flex items-center justify-center gap-6"
            style={{ minHeight: 420 }}
          >
            {/* Centre rule */}
            <div
              className="absolute left-[10%] right-[10%] h-px top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ background: "var(--border-earth)" }}
            />

            <div className="flex-1" />

            {milestones.map((milestone, i) => (
              <TimelineCard
                key={milestone.year}
                milestone={milestone}
                index={i}
              />
            ))}

            <div className="flex-1" />
          </div>
        </div>
      </div>

      {/* ── Mobile: vertical accordion (tap to reveal detail) ── */}
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
                {/* Icon instead of decorative dot */}
                <Icon size={18} className="text-accent shrink-0" />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-bold tracking-wider text-accent">{milestone.year}</span>
                    <span className="w-1 h-1 rounded-full" style={{ background: "var(--border-earth)" }} />
                    <span className="text-sm font-bold truncate" style={{ color: "var(--text-heading)" }}>{milestone.title}</span>
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
            <strong style={{ color: "var(--text-heading)" }}>5+ years</strong> of continuous growth and delivery
          </span>
        </div>
      </motion.div>
    </div>
  );
}
