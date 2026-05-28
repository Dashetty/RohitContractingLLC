"use client";

import { useState, useEffect, useRef, type ComponentType, type CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  HeartHandshake,
  ShieldCheck,
  Award,
  CheckCircle2,
} from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

/* ── Feature cards data ── */
interface FeatureCard {
  icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string; style?: CSSProperties }>;
  title: string;
  desc: string;
}

const featureCards: FeatureCard[] = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Accelerated project timelines without compromising quality or safety standards.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Partner",
    desc: "Ongoing support with 1-year free maintenance on all completed projects.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Rigorous quality control at every stage, from procurement to handover.",
  },
  {
    icon: Award,
    title: "Dubai Compliance",
    desc: "Full adherence to Dubai Municipality, DMCC, and Dubai regulatory standards.",
  },
  {
    icon: CheckCircle2,
    title: "Safety Standards",
    desc: "Zero-compromise safety protocols across every project site and operation.",
  },
];

/* ── Stats ── */
const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Expert Professionals" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

function TypewriterHeading() {
  const [displayed, setDisplayed] = useState("");
  const [cursorOn, setCursorOn] = useState(true);
  const ref = useRef<HTMLHeadingElement>(null);
  const started = useRef(false);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Start typing only when section enters viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const words = ["Trust", "Excellence"];
        let wi = 0;
        let ci = 0;
        let deleting = false;
        let timer: ReturnType<typeof setTimeout>;

        function tick() {
          const word = words[wi];
          if (!deleting) {
            ci++;
            setDisplayed(word.slice(0, ci));
            if (ci === word.length) {
              // pause, then start deleting (loop forever)
              timer = setTimeout(() => { deleting = true; tick(); }, 1500);
              return;
            }
          } else {
            ci--;
            setDisplayed(word.slice(0, ci));
            if (ci === 0) {
              wi = (wi + 1) % words.length;
              deleting = false;
            }
          }
          timer = setTimeout(tick, deleting ? 40 : 70);
        }

        timer = setTimeout(tick, 200);
        // eslint-disable-next-line consistent-return
        return () => clearTimeout(timer);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={ref}
      className="heading-serif text-4xl sm:text-5xl font-bold leading-tight mb-6 max-w-4xl"
      style={{ color: "var(--color-heading)" }}
    >
      Built on{" "}
      <span
        className="italic"
        style={{ color: "var(--color-accent)", fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        {displayed}
      </span>
      <span
        className="inline-block rounded-sm ml-0.5"
        style={{
          width: 3,
          height: "0.8em",
          verticalAlign: "middle",
          background: "var(--color-accent)",
          opacity: cursorOn ? 1 : 0,
          transition: "opacity 0.1s",
        }}
      />
    </h2>
  );
}

/* ── Sub-component: single feature card ── */
function FeatureCard({ card, index }: { card: FeatureCard; index: number }) {
  const Icon = card.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group relative rounded-2xl p-6 text-center transition-all duration-300"
      style={{
        background: "var(--color-surface-card)",
        border: "1px solid var(--color-border-earth)",
        boxShadow: "0 2px 12px color-mix(in oklch, var(--color-shadow-warm) calc(0.08 * 100%), transparent)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "color-mix(in oklch, var(--color-accent-brand) calc(0.3 * 100%), transparent)";
        e.currentTarget.style.boxShadow = "0 8px 28px color-mix(in oklch, var(--color-shadow-warm) calc(0.12 * 100%), transparent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border-earth)";
        e.currentTarget.style.boxShadow = "0 2px 12px color-mix(in oklch, var(--color-shadow-warm) calc(0.08 * 100%), transparent)";
      }}
    >
      <div className="absolute inset-0 grid-pattern opacity-[0.04] rounded-2xl pointer-events-none" />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="flex items-center justify-center mb-5 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg rounded-xl"
          style={{
            width: "52px",
            height: "52px",
            background: "color-mix(in oklch, var(--color-accent-brand) calc(0.08 * 100%), transparent)",
            boxShadow: "0 0 0 0 color-mix(in oklch, var(--color-accent-brand) calc(0.15 * 100%), transparent)",
            transition: "box-shadow 0.3s, transform 0.3s",
          }}
        >
          <Icon
            style={{ color: "var(--color-accent)" }}
            size={24}
            strokeWidth={1.5}
          />
        </div>

        {/* Title — Plus Jakarta Sans, not Cormorant */}
        <h3
          className="font-bold text-lg leading-snug mb-3 group-hover:text-accent transition-colors"
          style={{ color: "var(--color-heading)" }}
        >
          {card.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-warm-text)" }}
        >
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Main component ── */
export default function WhyChooseUs() {
  /* Split cards: first 3 in row 1, last 2 centered in row 2 */
  const row1 = featureCards.slice(0, 3);
  const row2 = featureCards.slice(3);

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "var(--color-surface-earth)" }}
    >
      <div className="absolute inset-0 industrial-texture opacity-[0.06]" />
      <div className="absolute inset-0 grid-pattern opacity-[0.04]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              background: "color-mix(in oklch, var(--color-accent-brand) calc(0.08 * 100%), transparent)",
              border: "1px solid color-mix(in oklch, var(--color-accent-brand) calc(0.18 * 100%), transparent)",
            }}
          >
            <span className="w-2 h-2 bg-accent rounded-full mr-2" />
            <span className="text-accent text-sm font-medium tracking-wide">
              Why Choose Us
            </span>
          </div>

          {/* Typewriter heading */}
          <TypewriterHeading />

          {/* Subheading */}
          <p
            className="text-lg leading-relaxed max-w-2xl mb-16"
            style={{ color: "var(--color-warm-text)" }}
          >
            The reasons our clients trust us with their projects
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
                background: "var(--color-surface-card)",
                border: "1px solid var(--color-border-earth)",
                boxShadow: "0 2px 12px color-mix(in oklch, var(--color-shadow-warm) calc(0.08 * 100%), transparent)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "color-mix(in oklch, var(--color-accent-brand) calc(0.3 * 100%), transparent)";
                e.currentTarget.style.boxShadow = "0 8px 28px color-mix(in oklch, var(--color-shadow-warm) calc(0.12 * 100%), transparent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border-earth)";
                e.currentTarget.style.boxShadow = "0 2px 12px color-mix(in oklch, var(--color-shadow-warm) calc(0.08 * 100%), transparent)";
              }}
            >
              <div
                className="font-bold leading-none mb-2"
                style={{
                  fontSize: "clamp(24px, 3.5vw, 30px)",
                  fontFamily: "var(--font-serif), Georgia, serif",
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
                  color: "var(--color-warm-text)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Row 1 — 3 cards ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5"
        >
          {row1.map((card, i) => (
            <FeatureCard key={card.title} card={card} index={i} />
          ))}
        </motion.div>

        {/* ── Row 2 — 2 cards centered ── */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            style={{ maxWidth: "640px", width: "100%" }}
          >
            {row2.map((card, i) => (
              <FeatureCard key={card.title} card={card} index={i + row1.length} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
