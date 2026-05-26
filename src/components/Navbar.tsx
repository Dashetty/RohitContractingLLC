"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
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

  // ── Scroll-spy: choose the nearest section above the nav offset ──
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));

    const updateActiveSection = () => {
      if (window.scrollY <= 80) {
        if (activeSectionRef.current !== "") {
          activeSectionRef.current = "";
          setActiveSection("");
        }
        return;
      }

      const sections = ids
        .map((id) => Array.from(document.querySelectorAll<HTMLElement>(`[id="${id}"]`)))
        .flat()
        .filter((el) => {
          const rect = el.getBoundingClientRect();
          return rect.height > 0 && rect.width > 0;
        });

      if (sections.length === 0) return;

      const offset = 120;
      const scrollPosition = window.scrollY + offset;
      const active = sections.reduce<{ id: string; top: number } | null>((best, section) => {
        const top = section.offsetTop;
        if (top <= scrollPosition && (!best || top > best.top)) {
          return { id: section.id, top };
        }
        return best;
      }, null);

      if (active && active.id !== activeSectionRef.current) {
        activeSectionRef.current = active.id;
        setActiveSection(active.id);
      }
    };

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
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
            {/* Brand */}
            <a href="#home" className="flex items-center">
              <div className="flex flex-col">
                <span
                  className="text-lg sm:text-xl font-bold tracking-[0.1em] leading-none"
                  style={{
                    color: scrolled ? "var(--text-heading)" : "#F6EFE6",
                    transition: "color 0.4s ease",
                  }}
                >
                  ROHIT
                </span>
                <span
                  className="text-[11px] sm:text-xs tracking-[0.15em] font-semibold"
                  style={{
                    color: scrolled ? "#8B7D6B" : "rgba(246,239,230,0.75)",
                    transition: "color 0.4s ease",
                  }}
                >
                  CONTRACTING L.L.C
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <LayoutGroup>
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
            </LayoutGroup>

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
            className="fixed inset-0 z-40 pt-24 overflow-y-auto"
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
