"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Shield, ArrowRight, Building2 } from "lucide-react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldAnimate = mounted;

  // Scroll-driven values: as the user scrolls through the hero section
  // we expand the framed card and simultaneously zoom the image out.
  const { scrollYProgress } = useScroll({ target: shouldAnimate ? rootRef : undefined, offset: ["start start", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 320, damping: 28 });

  // Finish expansion earlier for a faster effect
  const frameWidth = useTransform(progress, [0, 0.7], ["66%", "100vw"]);
  const frameMaxWidth = useTransform(progress, [0, 0.7], ["1200px", "100vw"]);
  const frameBorderRadius = useTransform(progress, [0, 0.7], [40, 0]);
  // Slightly less aggressive initial zoom for a cinematic reveal
  const imageScale = useTransform(progress, [0, 0.7], [1.4, 1]);
  const textOpacity = useTransform(progress, [0, 0.7], [1, 0]);
  const [textPointer, setTextPointer] = useState<"auto" | "none">("auto");

  useEffect(() => {
    return progress.on("change", (v) => {
      setTextPointer(v >= 0.65 ? "none" : "auto");
    });
  }, [progress]);
  
  // do not early-return here; useScroll is now passed an undefined target until
  // the ref hydrates which avoids the 'Target ref is defined but not hydrated' error.
  // slightly taller initial frame so ground materials aren't cut off
  const frameHeight = useTransform(progress, [0, 0.7], ["62vh", "100vh"]);

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative overflow-hidden"
      style={{ background: '#FAF7F2' }}
    >
      {/* container that pins the hero card while the user scrolls inside it */}
      <div style={{ height: '120vh' }}>
        <div className="sticky top-[15vh] left-0 right-0 flex justify-center items-start">
          <motion.div
            className="relative z-30 flex items-center justify-center overflow-hidden"
            style={{
              width: frameWidth,
              maxWidth: frameMaxWidth,
              height: frameHeight,
              borderRadius: frameBorderRadius,
              border: '1px solid #E8DFD0',
              background: '#000',
              boxShadow: '0 18px 40px rgba(28,26,23,0.04)'
            }}
          >
            <motion.div
              className="absolute inset-0 bg-no-repeat bg-cover"
              style={{
                backgroundImage: "url('/bg.png')",
                backgroundPosition: 'center 30%',
                scale: imageScale,
                transformOrigin: 'center center',
                filter: 'brightness(0.95) contrast(0.98)'
              }}
            />

            <div className="relative w-full flex items-center justify-center" style={{ pointerEvents: textPointer }}>
              <div className="relative z-20 w-full max-w-3xl text-center px-8 py-12">
                <motion.div style={{ opacity: textOpacity, willChange: 'opacity' }}>
                  <div className="inline-flex items-center gap-2.5 rounded-full font-badge"
                    style={{
                      background: '#F0E6D8',
                      border: '1px solid #E8DFD0',
                      padding: '7px 22px',
                      fontSize: '13px',
                      display: 'inline-flex',
                    }}
                  >
                    <Shield size="14" style={{ color: '#8B6347' }} />
                    <span className="leading-none tracking-wide" style={{ color: '#8B6347' }}>
                      Premier Dubai Construction Company
                    </span>
                  </div>

                  <div style={{ height: '20px' }} />

                  <h1
                    className="leading-[1.02] tracking-tight"
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontWeight: 600,
                      color: '#FDF8F5',
                      fontSize: 'clamp(40px, 6vw, 84px)',
                      lineHeight: 1.02,
                      textShadow: '0 2px 20px rgba(0,0,0,0.45)'
                    }}
                  >
                    Building <span className="font-accent-primary" style={{ color: '#FFE8D6' }}>Excellence</span> Across <span className="font-accent-secondary" style={{ color: '#FFE8D6' }}>Dubai</span>
                  </h1>

                  <div style={{ height: '18px' }} />

                  <p style={{ color: '#FDF8F5', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
                    Premium villa construction and turnkey contracting across Dubai.
                  </p>

                  <div style={{ height: '24px' }} />

                  <div className="flex items-center justify-center gap-3">
                    <a href="#contact" className="inline-flex items-center gap-2"
                      style={{ background: '#D85A30', color: '#FDF8F5', padding: '12px 26px', borderRadius: 10, fontWeight: 600 }}>
                      Request Quote
                    </a>
                    <a href="#services" className="inline-flex items-center gap-2"
                      style={{ border: '1.5px solid rgba(255,255,255,0.5)', color: '#FDF8F5', padding: '10px 22px', borderRadius: 6, backdropFilter: 'blur(8px)' }}>
                      Explore Services
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
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
