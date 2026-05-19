"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      id="rc-loading-screen"
      className="fixed inset-0 z-[99999] bg-background flex flex-col items-center justify-center"
    >
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent flex items-center justify-center shadow-lg shadow-accent/20">
          <span className="text-foreground font-bold text-3xl">RC</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-1">
            Rohit Contracting
          </h2>
          <p className="text-sm text-foreground/40">Dubai, UAE</p>
        </div>
      </div>

      <div className="mt-12 h-[2px] bg-accent/20 rounded-full max-w-[200px] w-full overflow-hidden">
        <div className="h-full bg-accent rounded-full loading-bar-animate" />
      </div>

      <p className="mt-4 text-xs text-foreground/20 tracking-widest uppercase">
        Loading
      </p>
    </div>
  );
}
