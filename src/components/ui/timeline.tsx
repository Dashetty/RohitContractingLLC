"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  className?: string;
}

export function Timeline({ data, className }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!timelineRef.current) return;

    const updateHeight = () => {
      if (timelineRef.current) {
        setHeight(timelineRef.current.getBoundingClientRect().height);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(timelineRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 12%", "end 82%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <div ref={containerRef} className={cn("relative w-full overflow-clip", className)}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div ref={timelineRef} className="relative pb-6 sm:pb-10">
          {data.map((item, index) => {
            const isLeftAligned = index % 2 === 0;

            return (
              <div
                key={item.title}
                className={cn(
                  "relative grid gap-6 py-8 sm:py-10 lg:py-12",
                  "lg:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)]",
                  isLeftAligned ? "lg:[&>div:first-child]:order-1 lg:[&>div:last-child]:order-3" : "lg:[&>div:first-child]:order-3 lg:[&>div:last-child]:order-1"
                )}
              >
                <div className="hidden lg:block" />

                <div className="relative z-10 flex items-start justify-center lg:justify-center">
                  <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 320, damping: 26 }}
                    whileHover={{ scale: 1.08, boxShadow: "0 16px 34px rgba(216, 90, 48, 0.18)" }}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent text-accent-foreground shadow-sm sm:h-16 sm:w-16"
                    aria-label={item.title}
                  >
                    <span className="text-sm font-extrabold tracking-tight sm:text-base">
                      {item.title}
                    </span>
                  </motion.div>
                </div>

                <div className="hidden lg:block" />

                <div
                  className={cn(
                    "relative rounded-[28px] border border-[var(--border-earth)] bg-[var(--card-cream)] px-5 py-5 shadow-[0_8px_30px_rgba(92,80,71,0.08)] sm:px-7 sm:py-7 lg:px-8 lg:py-8",
                    isLeftAligned
                      ? "lg:col-start-1 lg:row-start-1 lg:mr-10"
                      : "lg:col-start-3 lg:row-start-1 lg:ml-10"
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    {item.content}
                  </motion.div>
                </div>
              </div>
            );
          })}

          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 overflow-hidden rounded-full lg:block"
            style={{ background: "var(--border-warm)" }}
          >
            <motion.div
              style={{ height: heightTransform, opacity: opacityTransform }}
              className="absolute inset-x-0 top-0 w-px rounded-full bg-gradient-to-b from-accent via-[#E09A67] to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}