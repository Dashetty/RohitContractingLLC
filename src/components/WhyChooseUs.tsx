"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Award,
  Users,
  Package,
  DollarSign,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Accelerated project timelines without compromising quality",
    stat: "30%",
    statLabel: "Faster Delivery",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Rigorous quality control at every project stage",
    stat: "100%",
    statLabel: "Quality Checked",
  },
  {
    icon: Award,
    title: "UAE Compliance",
    desc: "Full adherence to Dubai Municipality & UAE regulations",
    stat: "100%",
    statLabel: "Compliant",
  },
  {
    icon: Users,
    title: "Professional Team",
    desc: "Expert engineers, project managers, and skilled workforce",
    stat: "200+",
    statLabel: "Team Members",
  },
  {
    icon: Package,
    title: "Reliable Procurement",
    desc: "Global sourcing network for premium construction materials",
    stat: "1000+",
    statLabel: "Suppliers",
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    desc: "Optimized budgets without compromising on quality",
    stat: "25%",
    statLabel: "Cost Savings",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Partner",
    desc: "Long-term relationships with leading UAE developers",
    stat: "98%",
    statLabel: "Client Retention",
  },
  {
    icon: CheckCircle2,
    title: "Safety Standards",
    desc: "Zero-compromise safety protocols and PPE compliance",
    stat: "0",
    statLabel: "Major Incidents",
  },
];

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 200, suffix: "+", label: "Expert Team" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export default function WhyChooseUs() {
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

          {/* Heading */}
          <h2
            className="heading-serif text-4xl sm:text-5xl font-bold leading-tight mb-6 max-w-4xl"
            style={{ color: "var(--text-heading)" }}
          >
            Built on{" "}
            <span className="font-accent-primary">Trust</span>
            {" & "}
            <span className="font-accent-secondary">Excellence</span>
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
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

        {/* ── Features grid ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl p-6 text-left max-sm:text-center transition-all duration-300"
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
              {/* Subtle grid pattern overlay */}
              <div className="absolute inset-0 grid-pattern opacity-[0.04] rounded-2xl pointer-events-none" />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="flex items-center justify-center mb-5 mx-auto sm:mx-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/15"
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

                {/* Title */}
                <h3
                  className="heading-serif text-lg font-bold leading-snug mb-3 group-hover:text-accent transition-colors"
                  style={{ color: "var(--text-heading)" }}
                >
                  {reason.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--text-body)" }}
                >
                  {reason.desc}
                </p>

                {/* Stat footer */}
                <div className="flex items-center gap-2 max-sm:justify-center">
                  <span
                    className="font-semibold"
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "clamp(18px, 1.8vw, 22px)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {reason.stat}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {reason.statLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
