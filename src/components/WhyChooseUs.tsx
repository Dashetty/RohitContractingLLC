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

const cardClasses =
  "rounded-[28px] p-12 max-sm:p-7 transition-all duration-300 ease-out " +
  "bg-[#F2E8DB] border border-[#D8C7B5] " +
  "hover:-translate-y-[3px] hover:bg-[#EDE0D0] hover:border-[#C17F4A]";

export default function WhyChooseUs() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#EDE0CE" }}
    >
      <div
        className="relative z-10 mx-auto px-5 sm:px-10 lg:px-20 py-[72px] sm:py-[100px] lg:py-[140px]"
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
            className="inline-flex items-center justify-center rounded-full px-6 py-3 mb-9"
            style={{
              background: "rgba(216, 90, 48, 0.08)",
              border: "1px solid rgba(216, 90, 48, 0.18)",
              color: "#D85A30",
              fontSize: "15px",
              lineHeight: "1",
            }}
          >
            Why Choose Us
          </div>

          {/* Heading */}
          <h2
            className="heading-serif font-semibold leading-[1.1] text-[#1C1A17] mb-9 max-w-4xl"
            style={{ fontSize: "clamp(38px, 7vw, 72px)" }}
          >
            Built on{" "}
            <span className="font-accent-primary">Trust</span>
            {" & "}
            <span className="font-accent-secondary">Excellence</span>
          </h2>

          {/* Subheading */}
          <p
            className="text-[#5C5047] max-w-2xl leading-[1.6] mb-[72px]"
            style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
          >
            What sets Rohit Contracting apart in the UAE construction industry
          </p>
        </motion.div>

        {/* ── Stats grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-10"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`${cardClasses} text-center`}
            >
              <div
                className="font-semibold leading-none mb-2"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(36px, 6vw, 64px)",
                  color: "#D85A30",
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
                  color: "#5C5047",
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`${cardClasses} text-left max-sm:text-center`}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center mb-6 mx-auto sm:mx-0"
                style={{
                  width: "64px",
                  height: "64px",
                  background: "rgba(216, 90, 48, 0.08)",
                  borderRadius: "18px",
                }}
              >
                <reason.icon
                  style={{ color: "#D85A30" }}
                  size={28}
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3
                className="heading-serif font-semibold leading-tight text-[#1C1A17] mb-4"
                style={{ fontSize: "clamp(22px, 2.5vw, 28px)" }}
              >
                {reason.title}
              </h3>

              {/* Description */}
              <p
                className="leading-[1.6] mb-5"
                style={{
                  fontSize: "clamp(15px, 1.5vw, 18px)",
                  color: "#5C5047",
                }}
              >
                {reason.desc}
              </p>

              {/* Stat footer */}
              <div className="flex items-center gap-2 max-sm:justify-center">
                <span
                  className="font-semibold"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "clamp(20px, 2vw, 24px)",
                    color: "#D85A30",
                  }}
                >
                  {reason.stat}
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#7A6250",
                    lineHeight: "1",
                  }}
                >
                  {reason.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
