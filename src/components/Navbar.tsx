"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const squigglePath =
  "M0,4 C4,-1 8,9 12,4 C16,-1 20,9 24,4 C28,-1 32,9 36,4 C40,-1 44,9 48,4";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const wasScrolledRef = useRef(false);
  const activeSectionRef = useRef("");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ── Scroll-spy: IntersectionObserver for reliable section detection ──
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        // Only process when user is scrolled past hero
        if (window.scrollY <= 80) return;

        // Track entries that are currently intersecting the detection zone
        let latestActive = activeSectionRef.current;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Since we iterate from top to bottom, the last intersecting
            // section in the batch is the one deepest on the page — that's
            // the one we want (the user has scrolled furthest into it)
            latestActive = entry.target.id;
          }
        }

        if (latestActive !== activeSectionRef.current) {
          activeSectionRef.current = latestActive;
          setActiveSection(latestActive);
        }
      },
      {
        // Detection zone: from 80px (navbar height) down to 60% viewport height.
        // A section is "active" when its top is visible in the upper portion.
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    // Try to find and observe sections — retry on scroll if not all are mounted yet
    const tryObserve = () => {
      const elements = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];
      if (elements.length === ids.length) {
        elements.forEach((el) => observer.observe(el));
        return true;
      }
      return false;
    };

    let retry: (() => void) | null = null;
    if (!tryObserve()) {
      // Sections might not be mounted yet (dynamic imports), retry on next scroll
      retry = () => {
        if (tryObserve()) {
          window.removeEventListener("scroll", retry!);
          retry = null;
        }
      };
      window.addEventListener("scroll", retry, { passive: true });
    }

    return () => {
      observer.disconnect();
      if (retry) {
        window.removeEventListener("scroll", retry);
      }
    };
  }, []);

  // ── Scroll state: navbar background + hero clear ──
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Hysteresis buffer: enter scrolled state at 80px, leave only below 60px.
      const wasScrolled = wasScrolledRef.current;
      const nowScrolled = wasScrolled ? scrollY > 60 : scrollY > 80;
      wasScrolledRef.current = nowScrolled;
      setScrolled(nowScrolled);

      // Clear active section when at the very top (hero)
      if (scrollY <= 80) {
        activeSectionRef.current = "";
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
        style={
          scrolled
            ? {
                background: "rgba(250, 247, 242, 0.92)",
                borderBottom: "1px solid rgba(232, 221, 208, 0.4)",
                boxShadow: "0 1px 16px rgba(92, 80, 71, 0.06)",
              }
            : undefined
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center font-bold text-white text-lg transition-all duration-300">
                RC
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-lg font-bold tracking-tight transition-colors duration-500 ${
                    scrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  Rohit
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent -mt-1">
                  Contracting
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === link.href.slice(1)
                      ? "text-accent"
                      : scrolled
                        ? "text-foreground/70 hover:text-foreground"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  <AnimatePresence>
                    {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeNavSquiggle"
                      exit={{ opacity: 0 }}
                      className="absolute left-0 right-0 flex justify-center"
                      style={{ bottom: "-2px" }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    >
                      <svg
                        width="48"
                        height="8"
                        viewBox="0 0 48 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d={squigglePath}
                          stroke="var(--color-accent, #D85A30)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>
                    </motion.div>
                    )}
                  </AnimatePresence>
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 px-6 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Phone size="16" />
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden relative w-10 h-10 flex items-center justify-center transition-colors duration-500 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size="24" /> : <Menu size="24" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-24"
            style={{
              background: scrolled ? "rgba(250, 247, 242, 0.95)" : "rgba(10,10,10,0.95)",
              backdropFilter: scrolled ? undefined : "blur(20px)",
              WebkitBackdropFilter: scrolled ? undefined : "blur(20px)",
            }}
          >
            <div className="flex flex-col items-center gap-2 p-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className={`w-full text-center py-4 text-lg font-medium rounded-lg transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "text-accent bg-accent/10"
                      : scrolled
                        ? "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setMobileOpen(false)}
                className="w-full mt-4 py-4 bg-accent text-white text-lg font-semibold rounded-lg text-center hover:bg-accent-dark transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size="18" />
                Get a Quote
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
