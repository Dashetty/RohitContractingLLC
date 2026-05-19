"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Building2, Globe } from "lucide-react";

// Hero stats removed — moved or removed per design decisions

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
        {/* Cinematic gradient background simulating construction site */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 industrial-texture" />

        {/* Animated geometric shapes for industrial feel */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        {/* Diagonal steel beam effect */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="w-full h-full" style={{
            background: 'repeating-linear-gradient(45deg, transparent, transparent 100px, var(--color-border) 100px, var(--color-border) 101px)',
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
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

            {/* Main Heading */}
            <motion.h1
              initial={shouldAnimate ? { opacity: 0, y: 30 } : false}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              transition={shouldAnimate ? { duration: 0.8, delay: 0.2 } : undefined}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
            >
              <span className="text-foreground">Building Excellence</span>
              <br />
              <span className="text-gradient">Across Dubai</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              transition={shouldAnimate ? { duration: 0.8, delay: 0.4 } : undefined}
              className="text-lg sm:text-xl text-foreground/60 max-w-xl leading-relaxed"
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
                className="group px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:scale-105 active:scale-95 flex items-center gap-2 text-base"
              >
                Request Quote
                <ArrowRight
                  size="18"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#services"
                className="group px-8 py-4 border border-foreground/20 hover:border-accent/50 text-foreground font-semibold rounded-xl transition-all duration-300 hover:bg-foreground/5 hover:shadow-xl flex items-center gap-2 text-base"
              >
                Explore Services
                <ArrowRight
                  size="18"
                  className="group-hover:translate-x-1 transition-transform opacity-60 group-hover:opacity-100"
                />
              </a>
            </motion.div>

            {/* Hero stats removed to declutter hero — retained in other sections if needed */}
          </div>

          {/* Right - Floating glass cards */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: 100 } : false}
            animate={shouldAnimate ? { opacity: 1, x: 0 } : undefined}
            transition={shouldAnimate ? { duration: 1, delay: 0.5 } : undefined}
            className="hidden lg:flex flex-col gap-6 relative"
          >
            {/* Floating glass card 1 */}
            <motion.div
              animate={shouldAnimate ? { y: [0, -15, 0] } : undefined}
              transition={
                shouldAnimate
                  ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  : undefined
              }
              className="glass rounded-2xl p-6 ml-auto max-w-sm"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Building2 className="text-accent" size="24" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">500+</div>
                  <div className="text-sm text-foreground/60">Projects Completed</div>
                </div>
              </div>
              <div className="flex gap-2">
                {["Commercial", "Industrial", "Infrastructure"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-foreground/5 rounded-full text-xs text-foreground/60"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            {/* Floating glass card 2 */}
            <motion.div
              animate={shouldAnimate ? { y: [0, 15, 0] } : undefined}
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
              className="glass rounded-2xl p-6 max-w-sm"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Award className="text-accent" size="24" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">
                    ISO Certified
                  </div>
                  <div className="text-sm text-foreground/60">
                    Quality & Safety Standards
                  </div>
                </div>
              </div>
              <div className="w-full bg-foreground/5 rounded-full h-2">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "98%" }}
                  transition={{ duration: 2, delay: 1.5 }}
                  className="bg-accent h-full rounded-full"
                />
              </div>
              <div className="text-xs text-foreground/40 mt-1 text-right">
                98% Quality Score
              </div>
            </motion.div>

            {/* Floating glass card 3 */}
            <motion.div
              animate={shouldAnimate ? { y: [0, -10, 0] } : undefined}
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
              className="glass rounded-2xl p-6 ml-auto max-w-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Globe className="text-accent" size="24" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">
                    Dubai Operations
                  </div>
                  <div className="text-sm text-foreground/60">
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
        <span className="text-xs text-foreground/30 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={shouldAnimate ? { y: [0, 8, 0] } : undefined}
          transition={
            shouldAnimate ? { duration: 1.5, repeat: Infinity } : undefined
          }
          className="w-5 h-8 border-2 border-foreground/20 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
