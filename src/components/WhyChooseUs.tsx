"use client";

import { useState, useEffect, useRef, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Award,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

/* ── Feature cards (two rows: 3 + 2, centered, no numeric claims) ── */
type Reason = {
  icon: ComponentType<{ size?: number; strokeWidth?: number; style?: Record<string, string> }>;
  title: string;
  desc: string;
};

const reasonsRow1: Reason[] = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Accelerated project timelines delivered without compromising quality or precision.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Partner",
    desc: "Every project backed by 1 year complimentary maintenance and full accountability.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Rigorous quality control at every project stage ensures consistent, reliable results.",
  },
];

const reasonsRow2: Reason[] = [
  {
    icon: Award,
    title: "UAE Compliance",
    desc: "Full adherence to Dubai Municipality & UAE regulations for complete peace of mind.",
  },
  {
    icon: CheckCircle2,
    title: "Safety Standards",
    desc: "Zero-compromise safety protocols and PPE compliance across all operations.",
  },
];

/* ── Stats cards ── */
const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Expert Professionals" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

/* ── Animated heading words ── */
const headingWords = ["Trust", "Excellence"];

/* ── Feature card sub-component (module-level, stable reference) ── */
function FeatureCard({ reason, index }: { reason: Reason; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group w-full sm:w-[300px] rounded-2xl p-6 text-left cursor-default relative"
      style={{
        background: "var(--card-earth)",
        border: hovered
          ? "1px solid rgba(216, 90, 48, 0.3)"
          : "1px solid var(--border-earth)",
        boxShadow: hovered
          ? "0 8px 28px rgba(92, 80, 71, 0.12)"
          : "0 2px 12px rgba(92, 80, 71, 0.08)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-[0.04] rounded-2xl pointer-events-none" />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/15"
          style={{
            width: "52px",
            height: "52px",
            background: "rgba(216, 90, 48, 0.08)",
            borderRadius: "14px",
          }}
        >
          <reason.icon
            style={{ color: "var(--color-accent)" }}
            size={24}
            strokeWidth={1.5}
          />
        </div>

        {/* Title — Plus Jakarta Sans 600 */}
        <h3
          className="font-semibold text-base leading-snug mb-3 transition-colors group-hover:text-accent"
          style={{ color: "var(--text-heading)" }}
        >
          {reason.title}
        </h3>

        {/* Description — Plus Jakarta Sans 400 */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text-body)" }}
        >
          {reason.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const [wordIndex, setWordIndex] = useState(0);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const [isHeadingInView, setIsHeadingInView] = useState(false);

  /* ── IntersectionObserver for heading animation ── */
  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeadingInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ── Word swap interval (only when in view) ── */
  useEffect(() => {
    if (!isHeadingInView) return;
    const id = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % headingWords.length);
    }, 3800);
    return () => clearInterval(id);
  }, [isHeadingInView]);

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "var(--bg-earth)" }}
    >
      <div className="absolute inset-0 industrial-texture opacity-[0.06]" />
      <div className="absolute inset-0 grid-pattern opacity-[0.04]" />

      <div
        className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1440px" }}
      >
        {/* ── Header block ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center justify-center rounded-full px-4 py-2 mb-6"
            style={{
              background: "rgba(216, 90, 48, 0.08)",
              border: "1px solid rgba(216, 90, 48, 0.18)",
            }}
          >
            <span className="w-2 h-2 bg-accent rounded-full mr-2" />
            <span className="text-accent text-sm font-medium tracking-wide">
              Why Choose Us
            </span>
          </div>

          {/* Animated heading — "Built on [Trust ↔ Excellence]" */}
          <h2
            ref={headingRef}
            className="heading-serif text-4xl sm:text-5xl font-bold leading-tight mb-6 max-w-4xl"
            style={{ color: "var(--text-heading)" }}
          >
            Built on{" "}
            <span className="relative inline-block min-w-[140px] sm:min-w-[170px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={headingWords[wordIndex]}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="inline-block font-accent-primary"
                >
                  {headingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>

          {/* Subheading */}
          <p
            className="text-lg leading-relaxed max-w-2xl mb-16"
            style={{ color: "var(--text-body)" }}
          >
            What sets Rohit Contracting apart in the UAE construction industry
          </p>
        </motion.div>

        {/* ── Stats grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--card-earth)",
                border: "1px solid var(--border-earth)",
                boxShadow: "0 2px 12px rgba(92, 80, 71, 0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(216, 90, 48, 0.3)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(92, 80, 71, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-earth)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(92, 80, 71, 0.08)";
              }}
            >
              <div
                className="font-semibold leading-none mb-2"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(32px, 5vw, 52px)",
                  color: "var(--color-accent)",
                }}
              >
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2}
                />
              </div>
              <div
                className="font-medium"
                style={{
                  fontSize: "clamp(14px, 1.5vw, 16px)",
                  color: "var(--text-body)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Feature cards — Row 1 (3 cards, centered) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-5 mb-5"
        >
          {reasonsRow1.map((reason, i) => (
            <FeatureCard key={reason.title} reason={reason} index={i} />
          ))}
        </motion.div>

        {/* ── Feature cards — Row 2 (2 cards, centered) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-5"
        >
          {reasonsRow2.map((reason, i) => (
            <FeatureCard
              key={reason.title}
              reason={reason}
              index={i + reasonsRow1.length}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
