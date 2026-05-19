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
    icon: ShieldCheck,
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
    <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-30" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-accent rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-accent text-sm font-medium tracking-wide">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Built on{" "}
            <span className="font-display-accent">Trust</span>
            {" "}&{" "}
            <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto">
            What sets Rohit Contracting apart in the UAE construction industry
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center hover:border-accent/20 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2} />
              </div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Reasons grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group glass rounded-xl p-5 hover:bg-foreground/[0.03] hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 border border-accent/10 flex items-center justify-center shrink-0 transition-all duration-300">
                  <reason.icon className="text-accent" size="22" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-foreground/50 leading-relaxed">
                    {reason.desc}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-accent">
                    <span className="text-lg font-bold">{reason.stat}</span>
                    <span className="text-xs text-foreground/40">| {reason.statLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
