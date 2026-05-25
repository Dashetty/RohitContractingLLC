"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Shield } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLElement | null>(null);

  // Avoid passing an un-hydrated ref into useScroll — only bind after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Track scroll progress relative to this section once mounted
  const { scrollYProgress } = useScroll({
    target: mounted ? ref : undefined,
    offset: ["start start", "end start"],
  });

  // Text fades out as the user scrolls through the section and is spring-smoothed
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const smoothOpacity = useSpring(textOpacity, { stiffness: 140, damping: 28 });

  // Scroll indicator: appear at 1.2s, auto-dismiss after 3s
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowHint(true), 900);
    const t2 = setTimeout(() => setShowHint(false), 4200);
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
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        style={{
          transformOrigin: "center center",
        }}
      >
        {/* Parallax scroll scale (starts from 1 after zoom-in completes) */}
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.02]),
            width: "100%",
            height: "100%",
            position: "relative",
            filter: "brightness(0.92) saturate(0.85)",
          }}
        >
          <Image
            src="/bg.png"
            alt="Dubai construction site"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      {/* Light overlay — subtle center darkening + bottom gradient for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(18,14,10,0.15) 0%, rgba(18,14,10,0.08) 30%, rgba(18,14,10,0.18) 70%, rgba(18,14,10,0.25) 100%), linear-gradient(to top, rgba(28,26,23,0.75) 0%, rgba(28,26,23,0.35) 30%, transparent 65%)",
        }}
      />

      {/* Content — centered, fades on scroll */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <motion.div
          className="w-full max-w-3xl text-center px-6"
          style={{ opacity: smoothOpacity, willChange: "opacity" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 1.2, ease: "easeOut" }}
          >
            <div className="glass-card inline-flex items-center gap-2.5 rounded-full mx-auto px-4 sm:px-6 py-2 text-sm sm:text-[15px] flex-wrap justify-center">
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
            transition={{ duration: 0.45, delay: 1.3, ease: "easeOut" }}
          >
            <h1
              className="leading-[1.02] tracking-tight font-semibold"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                color: "#F6EFE6",
                fontSize: "clamp(42px, 7vw, 92px)",
                textShadow: "0 3px 28px rgba(0,0,0,0.6)",
              }}
            >
              Building{" "}
              <span
                className="italic"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontWeight: 600,
                  color: "#F0D5AD",
                  letterSpacing: "0.01em",
                  textShadow: "0 2px 16px rgba(15,10,8,0.5), 0 0 40px rgba(15,10,8,0.2)",
                }}
              >
                Excellence
              </span>{" "}
              Across{" "}
              <span
                className="italic"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontWeight: 600,
                  color: "#E0B88A",
                  letterSpacing: "0.01em",
                  textShadow: "0 2px 16px rgba(15,10,8,0.5), 0 0 40px rgba(15,10,8,0.2)",
                }}
              >
                Dubai
              </span>
            </h1>
          </motion.div>

          <div className="h-4" />

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 1.4, ease: "easeOut" }}
          >
            <p
              className="mx-auto"
              style={{
                color: "rgba(253,248,245,0.85)",
                maxWidth: "540px",
                lineHeight: 1.6,
                fontSize: "clamp(15px, 1.5vw, 19px)",
                textShadow: "0 1px 8px rgba(15,10,8,0.55), 0 0 24px rgba(15,10,8,0.15)",
              }}
            >
              Luxury villa construction, turnkey contracting, and material supply across Dubai and the UAE.
            </p>
          </motion.div>

          <div className="h-8" />

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 1.5, ease: "easeOut" }}
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
