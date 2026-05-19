"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Building2 } from "lucide-react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldAnimate = mounted;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#FAF7F2' }}
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center">
        {/* 1. Badge */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={shouldAnimate ? { duration: 0.6 } : undefined}
          className="inline-flex items-center gap-2.5 rounded-full font-badge"
          style={{
            background: '#F0E6D8',
            border: '1px solid #E8DFD0',
            padding: '7px 22px',
            fontSize: '13px',
          }}
        >
          <Shield size="14" style={{ color: '#8B6347' }} />
          <span className="leading-none tracking-wide" style={{ color: '#8B6347' }}>
            Premier Dubai Construction Company
          </span>
        </motion.div>

        {/* Spacer badge → heading: 20px */}
        <div style={{ height: '20px' }} />

        {/* 2. Heading */}
        <motion.h1
          initial={shouldAnimate ? { opacity: 0, y: 24 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={shouldAnimate ? { duration: 0.8, delay: 0.15 } : undefined}
          className="text-center leading-[1.1] tracking-tight max-w-3xl"
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontWeight: 600,
            color: '#1C1A17',
            fontSize: 'clamp(52px, 7vw, 80px)',
          }}
        >
          Building{" "}
          <span className="font-accent-primary">Excellence</span>
          {" "}Across{" "}
          <span className="font-accent-secondary">Dubai</span>
        </motion.h1>

        {/* Spacer heading → paragraph: 24px */}
        <div style={{ height: '24px' }} />

        {/* 3. Subheading */}
        <motion.p
          initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={shouldAnimate ? { duration: 0.8, delay: 0.3 } : undefined}
          className="text-center mx-auto leading-relaxed"
          style={{
            fontSize: '17px',
            fontWeight: 400,
            color: '#5C5047',
            maxWidth: '520px',
            lineHeight: '1.7',
          }}
        >
          Premium villa construction and turnkey contracting across Dubai.
        </motion.p>

        {/* Spacer paragraph → buttons: 32px */}
        <div style={{ height: '32px' }} />

        {/* 4. CTA Buttons */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={shouldAnimate ? { duration: 0.8, delay: 0.45 } : undefined}
          className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto"
          style={{ gap: '12px' }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 font-medium text-center transition-all duration-300 active:scale-95 w-full sm:w-auto hover:brightness-90"
            style={{
              background: '#D85A30',
              color: '#FDF8F5',
              fontFamily: 'var(--font-plus-jakarta), ui-sans-serif, system-ui, sans-serif',
              fontWeight: 500,
              fontSize: '15px',
              borderRadius: '6px',
              padding: '12px 28px',
            }}
          >
            Request Quote
            <ArrowRight size="16" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 font-medium text-center transition-all duration-300 active:scale-95 w-full sm:w-auto hover:border-accent hover:text-accent"
            style={{
              border: '1.5px solid #1C1A17',
              background: 'transparent',
              color: '#1C1A17',
              fontFamily: 'var(--font-plus-jakarta), ui-sans-serif, system-ui, sans-serif',
              fontWeight: 500,
              fontSize: '15px',
              borderRadius: '6px',
              padding: '12px 28px',
            }}
          >
            Explore Services
            <ArrowRight size="16" />
          </a>
        </motion.div>

        {/* Spacer buttons → image: 48px */}
        <div style={{ height: '48px' }} />

        {/* 5. Hero Image placeholder */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 24 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={shouldAnimate ? { duration: 1, delay: 0.6 } : undefined}
          className="w-full overflow-hidden"
          style={{
            maxWidth: '90%',
            borderRadius: '16px',
            border: '1px solid #E8DFD0',
          }}
        >
          <div
            className="relative w-full flex items-center justify-center overflow-hidden"
            style={{
              aspectRatio: '16 / 9',
              background: 'linear-gradient(135deg, #F0E6D8 0%, #E8DFD0 40%, #D9C9B8 70%, #C9B49F 100%)',
            }}
          >
            {/* Warm architectural silhouette hint */}
            <svg
              viewBox="0 0 800 450"
              className="absolute inset-0 w-full h-full opacity-30"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect x="100" y="180" width="140" height="200" rx="2" fill="#1C1A17" opacity="0.15" />
              <rect x="230" y="130" width="160" height="250" rx="2" fill="#1C1A17" opacity="0.12" />
              <rect x="380" y="160" width="130" height="220" rx="2" fill="#1C1A17" opacity="0.10" />
              <rect x="500" y="100" width="150" height="280" rx="2" fill="#1C1A17" opacity="0.14" />
              <rect x="640" y="200" width="80" height="180" rx="2" fill="#1C1A17" opacity="0.08" />
              {/* Crane arm */}
              <line x1="550" y1="60" x2="700" y2="60" stroke="#1C1A17" strokeWidth="2" opacity="0.12" />
              <line x1="700" y1="60" x2="700" y2="100" stroke="#1C1A17" strokeWidth="2" opacity="0.12" />
            </svg>
            <div className="relative z-10 flex flex-col items-center gap-3 opacity-50">
              <Building2 size="40" style={{ color: '#8B6347' }} />
              <span
                className="text-sm font-medium tracking-wider uppercase"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  color: '#8B6347',
                }}
              >
                Dubai Construction
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={shouldAnimate ? { opacity: 0 } : false}
        animate={shouldAnimate ? { opacity: 1 } : undefined}
        transition={shouldAnimate ? { delay: 2.5 } : undefined}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[11px] tracking-[0.15em] uppercase"
          style={{ color: '#8B6347' }}
        >
          Scroll
        </span>
        <motion.div
          animate={shouldAnimate ? { y: [0, 6, 0] } : undefined}
          transition={shouldAnimate ? { duration: 1.5, repeat: Infinity } : undefined}
          className="w-[18px] h-[28px] rounded-full flex justify-center pt-1.5"
          style={{ border: '2px solid #E8DFD0' }}
        >
          <motion.div
            className="w-[3px] h-[6px] rounded-full"
            style={{ background: '#C17F4A' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
