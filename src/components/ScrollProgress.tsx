"use client";

import { useEffect, useState, useRef } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const cachedHeight = useRef(0);

  useEffect(() => {
    // Cache layout-dependent values and only recalc on resize (not scroll).
    const updateCache = () => {
      cachedHeight.current =
        document.documentElement.scrollHeight - window.innerHeight;
    };
    updateCache();

    const handleScroll = () => {
      // window.scrollY is a free read — no layout recalc.
      const scrollPercent =
        cachedHeight.current > 0
          ? (window.scrollY / cachedHeight.current) * 100
          : 0;
      setProgress(Math.min(scrollPercent, 100));
    };

    const handleResize = () => {
      updateCache();
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-accent via-accent-light to-accent transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
