"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLElement | null>(null);

  // Track scroll progress relative to this section.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Text fades out as the user scrolls through the section
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Scroll indicator: appear at 1.2s, auto-dismiss after 3s
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowHint(true), 3000);
    const t2 = setTimeout(() => setShowHint(false), 6000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background image — cinematic inhale: zoomed out → settles in */}
      <motion.div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundPosition: "center 30%",
          filter: "brightness(0.85) contrast(0.98)",
        }}
      />

      {/* Dark gradient overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(28,26,23,0.75) 0%, rgba(28,26,23,0.35) 40%, transparent 70%)",
        }}
      />

      {/* Content — centered, fades on scroll */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <motion.div
          className="w-full max-w-3xl text-center px-6"
          style={{ opacity: textOpacity, willChange: "opacity" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.75, ease: "easeOut" }}
          >
            <div className="glass-card inline-flex items-center gap-2.5 rounded-full mx-auto px-6 py-2 text-[15px]">
              <Shield size={14} className="text-accent" />
              <span
                className="leading-none"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  color: "var(--color-foreground)",
                  letterSpacing: "0.06em",
                }}
              >
                Premier Dubai Construction & Materials
              </span>
            </div>
          </motion.div>

          <div className="h-6" />

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.85, ease: "easeOut" }}
          >
            <h1
              className="leading-[1.02] tracking-tight font-semibold"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                color: "#FDF8F5",
                fontSize: "clamp(42px, 7vw, 92px)",
                textShadow: "0 2px 24px rgba(0,0,0,0.5)",
              }}
            >
              Building{" "}
              <span className="text-gradient-warm italic">
                Excellence
              </span>{" "}
              Across{" "}
              <span className="text-gradient-warm italic">
                Dubai
              </span>
            </h1>
          </motion.div>

          <div className="h-4" />

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.98, ease: "easeOut" }}
          >
            <p
              className="mx-auto"
              style={{
                color: "rgba(253,248,245,0.85)",
                maxWidth: "540px",
                lineHeight: 1.6,
                fontSize: "clamp(15px, 1.5vw, 19px)",
                textShadow: "0 1px 12px rgba(0,0,0,0.4)",
              }}
            >
              Mastering luxury villa construction, turnkey contracting, and precision material supply in the heart of the UAE.
            </p>
          </motion.div>

          <div className="h-8" />

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.08, ease: "easeOut" }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-accent hover:bg-accent-dark text-[#FDF8F5] px-8 py-3.5 rounded-xl font-semibold text-[15px] transition-all hover:shadow-lg hover:shadow-accent/20 hover:scale-105 active:scale-95"
              >
                Request Quote
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border-[1.5px] border-white/40 text-[#FDF8F5] px-8 py-3.5 rounded-xl backdrop-blur-md text-[15px] transition-all hover:bg-white/10 hover:border-white/60 active:scale-95"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — faster entry, auto-dismisses */}
      <motion.div
        animate={{ opacity: showHint ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span
          className="text-[11px] tracking-[0.15em] uppercase"
          style={{ color: "rgba(196,184,168,0.8)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={showHint ? { y: [0, 6, 0] } : { y: 0 }}
          transition={{ duration: 1.5, repeat: showHint ? Infinity : 0 }}
          className="w-[18px] h-[28px] rounded-full flex justify-center pt-1.5"
          style={{ border: "2px solid rgba(196,184,168,0.6)" }}
        >
          <motion.div
            className="w-[3px] h-[6px] rounded-full"
            style={{ background: "var(--color-accent)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
