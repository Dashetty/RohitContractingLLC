"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Building2 } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--color-heading)" }}
    >
      {/* Background textures */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
        <div className="absolute inset-0 industrial-texture opacity-[0.08]" />
      </div>

      {/* Warm accent glow — breathing pulse */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-accent/12 rounded-full blur-[100px] animate-pulse-ambient" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[100px] animate-pulse-ambient-delayed" />

      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon — floating */}
          <div className="animate-float">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <div
                className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-6 sm:mb-8 rounded-2xl flex items-center justify-center"
                style={{
                  background: "color-mix(in oklch, var(--color-accent-brand) calc(0.15 * 100%), transparent)",
                  border: "1px solid color-mix(in oklch, var(--color-accent-brand) calc(0.25 * 100%), transparent)",
                }}
              >
                <Building2
                  className="text-accent"
                  size={28}
                  style={{ width: "clamp(24px, 4vw, 36px)", height: "clamp(24px, 4vw, 36px)" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Heading — with subtle shimmer sweep on accent span */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-serif font-bold leading-tight mb-4 sm:mb-6"
            style={{
              color: "var(--color-text-on-dark-soft)",
              fontSize: "clamp(28px, 5.5vw, 64px)",
            }}
          >
            Let&apos;s Build Something{" "}
            <span
              className="font-accent-primary animate-shimmer-dark"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--color-accent-brand) 0%, #FFD4A8 50%, var(--color-accent-brand) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Exceptional
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mx-auto mb-10 sm:mb-12 leading-relaxed"
            style={{
              color: "rgba(253,248,245,0.7)",
              maxWidth: "560px",
              fontSize: "clamp(15px, 2vw, 20px)",
            }}
          >
            Let us help with your next project. Whether it is a new build or
            a renovation, our team is here to bring it to life.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 active:scale-95"
              style={{ fontSize: "clamp(14px, 1.6vw, 18px)" }}
            >
              Contact Us
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform shrink-0"
                style={{ width: "clamp(16px, 2vw, 20px)", height: "clamp(16px, 2vw, 20px)" }}
              />
            </a>
            <a
              href="tel:+971559239581"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                border: "1.5px solid rgba(253,248,245,0.25)",
                color: "var(--color-text-on-dark-soft)",
                fontSize: "clamp(14px, 1.6vw, 18px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent, var(--color-accent-brand))";
                e.currentTarget.style.background = "rgba(253,248,245,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(253,248,245,0.25)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <Phone
                size={18}
                className="shrink-0"
                style={{ width: "clamp(16px, 2vw, 20px)", height: "clamp(16px, 2vw, 20px)" }}
              />
              Call Us Now
            </a>
          </motion.div>

          {/* Trust indicators — staggered entrance */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.8, staggerChildren: 0.12 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-x-8 mt-12 sm:mt-16 text-xs sm:text-sm"
            style={{ color: "rgba(253,248,245,0.5)" }}
          >
            {["Free Consultation", "No Obligation Quote", "Dubai Licensed", "5+ Years Experience"].map(
              (text) => (
                <motion.span
                  key={text}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-1.5"
                >
                  <span style={{ color: "color-mix(in oklch, var(--color-accent-brand) calc(0.6 * 100%), transparent)" }}>✓</span>
                  {text}
                </motion.span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
