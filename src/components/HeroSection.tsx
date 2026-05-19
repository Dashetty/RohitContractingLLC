"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Building2, Globe } from "lucide-react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldAnimate = mounted;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 industrial-texture opacity-40" />

        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-accent/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        {/* Diagonal steel beam effect */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="w-full h-full" style={{
            background: 'repeating-linear-gradient(45deg, transparent, transparent 100px, var(--color-card-border) 100px, var(--color-card-border) 101px)',
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content — 7 cols */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              transition={shouldAnimate ? { duration: 0.6 } : undefined}
              className="inline-flex items-center gap-2 px-4 py-2 glass-accent rounded-full"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent text-sm font-medium tracking-wide">
                Premier Dubai Construction Company
              </span>
            </motion.div>

            {/* Main Heading — Cormorant Garamond base */}
            <motion.h1
              initial={shouldAnimate ? { opacity: 0, y: 30 } : false}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              transition={shouldAnimate ? { duration: 0.8, delay: 0.2 } : undefined}
              className="font-heading-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-heading"
            >
              Building{" "}
              <span className="font-display-accent">Excellence</span>
              <br />
              <span className="font-text-warm-italic">Across Dubai</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              transition={shouldAnimate ? { duration: 0.8, delay: 0.4 } : undefined}
              className="text-base sm:text-lg leading-relaxed max-w-xl text-warm-text"
            >
              Premium villa construction and turnkey contracting across Dubai.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              transition={shouldAnimate ? { duration: 0.8, delay: 0.6 } : undefined}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group px-8 py-4 bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:scale-105 active:scale-95 flex items-center gap-2 text-base"
              >
                Request Quote
                <ArrowRight
                  size="18"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#services"
                className="group px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:shadow-xl flex items-center gap-2 text-base border-[1.5px] border-heading hover:border-accent text-heading hover:text-accent"
              >
                Explore Services
                <ArrowRight
                  size="18"
                  className="group-hover:translate-x-1 transition-transform opacity-60 group-hover:opacity-100"
                />
              </a>
            </motion.div>
          </div>

          {/* Right — Stat cards (5 cols) */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: 80 } : false}
            animate={shouldAnimate ? { opacity: 1, x: 0 } : undefined}
            transition={shouldAnimate ? { duration: 1, delay: 0.5 } : undefined}
            className="hidden lg:flex lg:col-span-5 flex-col gap-4 relative"
          >
            {/* Stat card 1 */}
            <motion.div
              animate={shouldAnimate ? { y: [0, -8, 0] } : undefined}
              transition={
                shouldAnimate
                  ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  : undefined
              }
              className="rounded-2xl p-5 ml-auto max-w-sm w-full"
              style={{
                background: 'var(--color-glass-bg)',
                backdropFilter: 'blur(12px)',
                border: '1px solid #E8DFD0',
                borderLeft: '3px solid #C17F4A',
              }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-xl bg-secondary-accent/10 flex items-center justify-center">
                  <Building2 className="text-secondary-accent" size="24" />
                </div>
                <div>
                  <div className="text-lg font-bold text-heading">500+</div>
                  <div className="text-sm text-warm-muted">Projects Completed</div>
                </div>
              </div>
              <div className="flex gap-2">
                {["Commercial", "Industrial", "Infrastructure"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs bg-card-border text-warm-text"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            {/* Stat card 2 */}
            <motion.div
              animate={shouldAnimate ? { y: [0, 8, 0] } : undefined}
              transition={
                shouldAnimate
                  ? {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }
                  : undefined
              }
              className="rounded-2xl p-5 max-w-sm mx-auto w-full"
              style={{
                background: 'var(--color-glass-bg)',
                backdropFilter: 'blur(12px)',
                border: '1px solid #E8DFD0',
                borderLeft: '3px solid #C17F4A',
              }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-xl bg-secondary-accent/10 flex items-center justify-center">
                  <Award className="text-secondary-accent" size="24" />
                </div>
                <div>
                  <div className="text-lg font-bold text-heading">
                    ISO Certified
                  </div>
                  <div className="text-sm text-warm-muted">
                    Quality & Safety Standards
                  </div>
                </div>
              </div>
              <div className="w-full bg-card-border rounded-full h-2">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "98%" }}
                  transition={{ duration: 2, delay: 1.5 }}
                  className="h-full rounded-full bg-secondary-accent"
                />
              </div>
              <div className="text-xs mt-1 text-right text-warm-muted">
                98% Quality Score
              </div>
            </motion.div>

            {/* Stat card 3 */}
            <motion.div
              animate={shouldAnimate ? { y: [0, -6, 0] } : undefined}
              transition={
                shouldAnimate
                  ? {
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }
                  : undefined
              }
              className="rounded-2xl p-5 ml-auto max-w-sm w-full"
              style={{
                background: 'var(--color-glass-bg)',
                backdropFilter: 'blur(12px)',
                border: '1px solid #E8DFD0',
                borderLeft: '3px solid #C17F4A',
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-accent/10 flex items-center justify-center">
                  <Globe className="text-secondary-accent" size="24" />
                </div>
                <div>
                  <div className="text-lg font-bold text-heading">
                    Dubai Operations
                  </div>
                  <div className="text-sm text-warm-muted">
                    Dubai • Abu Dhabi • Sharjah
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={shouldAnimate ? { opacity: 0 } : false}
        animate={shouldAnimate ? { opacity: 1 } : undefined}
        transition={shouldAnimate ? { delay: 2 } : undefined}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-warm-muted">
          Scroll
        </span>
        <motion.div
          animate={shouldAnimate ? { y: [0, 8, 0] } : undefined}
          transition={
            shouldAnimate ? { duration: 1.5, repeat: Infinity } : undefined
          }
          className="w-5 h-8 rounded-full flex justify-center pt-2"
          style={{ border: '2px solid #E8DFD0' }}
        >
          <motion.div className="w-1 h-2 rounded-full bg-secondary-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
