import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * SSR-safe media query hook.
 * Returns false during SSR, then flips to the correct value on mount.
 */
export function useMediaQuery(query: string): boolean {
  // Initialize synchronously on first render.
  // This avoids a false→true flash on desktop that would cause
  // HeroSection to render HeroStatic before swapping to HeroCinematic.
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
