"use client";

import { motion } from "framer-motion";
import {
  Target,
  Clock,
  Shield,
  TrendingUp,
  Building2,
  HardHat,
  Truck,
} from "lucide-react";
import HorizontalTimeline from "@/components/timeline-demo";

const values = [
  { icon: Shield, label: "Reliability", desc: "Consistent delivery excellence" },
  { icon: Target, label: "Precision", desc: "Attention to every detail" },
  { icon: TrendingUp, label: "Quality", desc: "Premium materials & workmanship" },
  { icon: Clock, label: "Timely Delivery", desc: "On schedule, every time" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "var(--bg-cream)" }}
    >
      {/* Background pattern — subtle warm texture */}
      <div className="absolute inset-0 industrial-texture opacity-[0.06]" />
      <div className="absolute inset-0 grid-pattern opacity-[0.04]" />

      <div className="relative z-10 section-container">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: "rgba(216, 90, 48, 0.08)",
            border: "1px solid rgba(216, 90, 48, 0.18)",
          }}
        >
          <span className="w-2 h-2 bg-accent rounded-full" />
          <span className="text-accent text-sm font-medium tracking-wide">
            Our Legacy
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image placeholder with warm editorial card */}
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden overflow-x-clip"
              style={{
                background: "var(--card-cream)",
                border: "1px solid var(--border-earth)",
                boxShadow: "0 4px 20px rgba(92, 80, 71, 0.1), 0 1px 4px rgba(92, 80, 71, 0.06)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Building2 className="mx-auto text-accent/30" size="64" />
                  <div className="text-lg font-medium" style={{ color: "var(--text-muted)" }}>
                    Construction Site
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{
                background: "linear-gradient(to top, rgba(28, 26, 23, 0.06), transparent)"
              }} />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-accent/90 flex items-center justify-center">
                  <HardHat size="20" className="text-white" />
                </div>
                <span className="text-sm font-medium" style={{ color: "var(--text-heading)" }}>
                  Safety First
                </span>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="sm:absolute sm:-bottom-6 sm:-right-6 relative mt-4 sm:mt-0 rounded-xl p-5 max-w-[200px]"
              style={{
                background: "var(--card-cream)",
                border: "1px solid var(--border-earth)",
                boxShadow: "0 4px 20px rgba(92, 80, 71, 0.12), 0 1px 4px rgba(92, 80, 71, 0.06)",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Truck className="text-accent" size="20" />
                </div>
                <div className="text-2xl font-bold text-accent">5+</div>
              </div>
              <div className="text-sm" style={{ color: "var(--text-body)" }}>Years of Excellence in Dubai Construction</div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-accent/20 rounded-xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent/10 rounded-xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Heading */}
            <h2 className="heading-serif text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ color: "var(--text-heading)" }}>
              More Than Just{" "}
              <span className="text-gradient-warm">Construction</span>
            </h2>

            <p className="text-lg leading-relaxed" style={{ color: "var(--text-body)" }}>
              Based in Dubai Festival City, Rohit Contracting L.L.C brings together
              professionals who genuinely care about their work, from villa groundworks
              to full-scale commercial projects. We handle everything end-to-end,
              with an unwavering focus on quality, safety, and making sure our clients
              are happy with the result.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, i) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl p-4 transition-all duration-300 group"
                  style={{
                    background: "var(--card-cream)",
                    border: "1px solid var(--border-earth)",
                    boxShadow: "0 4px 20px rgba(92, 80, 71, 0.1), 0 1px 4px rgba(92, 80, 71, 0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(216, 90, 48, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-earth)";
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                      <value.icon className="text-accent" size="18" />
                    </div>
                    <span className="font-semibold" style={{ color: "var(--text-heading)" }}>{value.label}</span>
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>{value.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Safety badge */}
            <div
              className="flex items-center gap-3 rounded-xl px-5 py-3"
              style={{
                background: "rgba(216, 90, 48, 0.06)",
                border: "1px solid rgba(216, 90, 48, 0.15)",
              }}
            >
              <Shield className="text-accent shrink-0" size="20" />
              <span className="text-sm" style={{ color: "var(--text-body)" }}>
                Committed to Dubai safety standards and regulatory compliance
              </span>
            </div>
          </motion.div>
        </div>

        <div className="mt-24">
          <HorizontalTimeline />
        </div>
      </div>
    </section>
  );
}
