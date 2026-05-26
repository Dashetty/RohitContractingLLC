"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsLoading(false), 1400);
    const removeTimer = setTimeout(() => setVisible(false), 1700);
    return () => { clearTimeout(fadeTimer); clearTimeout(removeTimer); };
  }, []);

  if (!visible) return null;

  return (
    <div
      id="rc-loading-screen"
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
      style={{
        background: "#FAF7F2",
        opacity: isLoading ? 1 : 0,
        transition: "opacity 0.35s ease",
        pointerEvents: isLoading ? "auto" : "none",
      }}
    >
      {/* Logo */}
      <div
        style={{
          opacity: isLoading ? 1 : 0,
          transform: isLoading ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/projects/logoorevamp.png"
          alt="Rohit Contracting L.L.C"
          style={{
            height: "clamp(120px, 25vw, 200px)",
            width: "auto",
            objectFit: "contain",
            filter: "brightness(0) saturate(100%)",
          }}
        />
      </div>

      {/* Loading bar */}
      <div
        className="mt-10 rounded-full overflow-hidden"
        style={{ width: 160, height: 2, background: "rgba(216,90,48,0.15)" }}
      >
        <div
          className="h-full rounded-full loading-bar-animate"
          style={{ background: "#D85A30" }}
        />
      </div>

      <p className="mt-4 text-xs tracking-widest uppercase" style={{ color: "rgba(92,80,71,0.35)" }}>
        Loading
      </p>
    </div>
  );
}
