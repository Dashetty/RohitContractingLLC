"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import {
  Target,
  Clock,
  Shield,
  TrendingUp,
  Truck,
} from "lucide-react";
import HorizontalTimeline from "@/components/timeline-demo";

const aboutImages = [
  "/projects/AboutSectionLogo.png",
  "/projects/106/106.jpeg",
  "/projects/107/107.jpeg",
  "/projects/102/102.jpeg",
  "/projects/103/103.jpeg",
  "/projects/104/104.jpeg",
  "/projects/105/105.jpeg",
  "/projects/113/113.jpeg",
];

const LOGO_INDEX = 0;

const values = [
  { icon: Shield, label: "Reliability", desc: "Consistent delivery excellence" },
  { icon: Target, label: "Precision", desc: "Attention to every detail" },
  { icon: TrendingUp, label: "Quality", desc: "Premium materials & workmanship" },
  { icon: Clock, label: "Timely Delivery", desc: "On schedule, every time" },
];

export default function AboutSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
 
  // Detect touch device — computed once
  const isTouchDevice = useMemo(
    () => typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0),
    []
  );

  // Detect viewport width for ambient drift gating
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // IntersectionObserver — pause carousel when scrolled out of view
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Preload the next image in the background
  useEffect(() => {
    const nextIndex = (currentImage + 1) % aboutImages.length;
    // Use createElement instead of new Image() to avoid shadowing next/image's Image
    const img = document.createElement("img");
    img.src = aboutImages[nextIndex];
  }, [currentImage]);

  // Auto-advance carousel — only when in view and not paused
  useEffect(() => {
    if (isPaused || !isInView) return;
    const duration = currentImage === LOGO_INDEX ? 5000 : 4500;
    const timer = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % aboutImages.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [isPaused, isInView, currentImage]);

  const isProjectSlide = currentImage !== LOGO_INDEX;
  const enableDrift = isDesktop && isProjectSlide;
  // Stable random duration per slide — prevents drift restart on hover re-renders
  const driftDuration = useMemo(() => 18 + Math.random() * 6, [currentImage]);

  const handleMouseEnterCarousel = () => {
    if (!isTouchDevice) setIsPaused(true);
  };

  const handleMouseLeaveCarousel = () => {
    if (!isTouchDevice) setIsPaused(false);
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "var(--color-surface-cream)" }}
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
            background: "color-mix(in oklch, var(--color-accent-brand) calc(0.08 * 100%), transparent)",
            border: "1px solid color-mix(in oklch, var(--color-accent-brand) calc(0.18 * 100%), transparent)",
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
            {/* Auto-scrolling image carousel */}
            <div
              ref={carouselRef}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              style={{
                background: "var(--color-surface-card)",
                border: "1px solid var(--color-border-earth)",
                boxShadow: "0 4px 20px color-mix(in oklch, var(--color-shadow-warm) calc(0.1 * 100%), transparent), 0 1px 4px color-mix(in oklch, var(--color-shadow-warm) calc(0.06 * 100%), transparent)",
              }}
              onMouseEnter={handleMouseEnterCarousel}
              onMouseLeave={handleMouseLeaveCarousel}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    ...(enableDrift
                      ? { scale: [1, 1.015], y: [0, -6] }
                      : {}),
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 1.2, ease: "easeInOut" },
                    ...(enableDrift
                      ? {
                          scale: {
                            duration: driftDuration,
                            ease: "linear",
                          },
                          y: {
                            duration: driftDuration,
                            ease: "linear",
                          },
                        }
                      : {}),
                  }}
                  className="absolute inset-0 will-change-transform"
                >
                  <Image
                    src={aboutImages[currentImage]}
                    alt={`Rohit Contracting — ${currentImage === 0 ? "Company Logo" : `Project ${currentImage}`}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={currentImage === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Dots indicator — subtle visual-only indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-2.5 py-1.5 rounded-full bg-black/10 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-1.5">
                  {aboutImages.map((_, i) => (
                    <span
                      key={i}
                      className="block rounded-full transition-all duration-500"
                      style={{
                        width: i === currentImage ? 8 : 4,
                        height: i === currentImage ? 8 : 4,
                        background: i === currentImage
                          ? "var(--color-accent-brand)"
                          : "rgba(255,255,255,0.4)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="sm:absolute sm:-top-14 sm:-left-8 relative mt-4 sm:mt-0 rounded-xl p-3 max-w-[160px]"
              style={{
                background: "var(--color-surface-card)",
                border: "1px solid var(--color-border-earth)",
                boxShadow: "0 4px 20px color-mix(in oklch, var(--color-shadow-warm) calc(0.12 * 100%), transparent), 0 1px 4px color-mix(in oklch, var(--color-shadow-warm) calc(0.06 * 100%), transparent)",
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Truck className="text-accent" size="16" />
                </div>
                <div className="text-xl font-bold text-accent">5+</div>
              </div>
              <div className="text-xs" style={{ color: "var(--color-warm-text)" }}>Years of Excellence in Dubai Construction</div>
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
            <h2 className="heading-serif text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ color: "var(--color-heading)" }}>
              More Than Just{" "}
              <span className="text-gradient-warm">Construction</span>
            </h2>

            <p className="text-lg leading-relaxed" style={{ color: "var(--color-warm-text)" }}>
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
                    background: "var(--color-surface-card)",
                    border: "1px solid var(--color-border-earth)",
                    boxShadow: "0 4px 20px color-mix(in oklch, var(--color-shadow-warm) calc(0.1 * 100%), transparent), 0 1px 4px color-mix(in oklch, var(--color-shadow-warm) calc(0.06 * 100%), transparent)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "color-mix(in oklch, var(--color-accent-brand) calc(0.3 * 100%), transparent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border-earth)";
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                      <value.icon className="text-accent" size="18" />
                    </div>
                    <span className="font-semibold" style={{ color: "var(--color-heading)" }}>{value.label}</span>
                  </div>
                  <p className="text-sm" style={{ color: "var(--color-warm-muted)" }}>{value.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Safety badge */}
            <div
              className="flex items-center gap-3 rounded-xl px-5 py-3"
              style={{
                background: "color-mix(in oklch, var(--color-accent-brand) calc(0.06 * 100%), transparent)",
                border: "1px solid color-mix(in oklch, var(--color-accent-brand) calc(0.15 * 100%), transparent)",
              }}
            >
              <Shield className="text-accent shrink-0" size="20" />
              <span className="text-sm" style={{ color: "var(--color-warm-text)" }}>
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
