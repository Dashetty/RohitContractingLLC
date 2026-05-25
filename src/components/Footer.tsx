"use client";

import { motion } from "framer-motion";
import { ArrowUp, Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative" style={{ background: "var(--bg-earth)" }}>
      {/* Subtle background textures */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="absolute inset-0 industrial-texture opacity-[0.04]" />
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* ── 4-column grid ── */}
        <div className="py-16 grid grid-cols-5 md:grid-cols-5 lg:grid-cols-12 gap-3 md:gap-6 lg:gap-8">
          {/* ═══════════════════════════════════════════════════
              COL 1 — Brand (wider)
              Logo, description, social icons
              ═══════════════════════════════════════════════════ */}
          <div className="col-span-5 lg:col-span-4 space-y-5">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg shrink-0"
                style={{
                  background: "var(--color-accent)",
                  color: "#FDF8F5",
                }}
              >
                RC
              </div>
              <div className="flex flex-col">
                <span
                  className="text-lg font-bold tracking-tight"
                  style={{ color: "var(--text-heading)" }}
                >
                  Rohit
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase -mt-1" style={{ color: "var(--color-accent)" }}>
                  Contracting
                </span>
              </div>
            </a>

            {/* Description */}
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--text-body)" }}
            >
              Contracting and building material services for commercial,
              industrial, and infrastructure projects across Dubai.
            </p>

            {/* Social links — Instagram + LinkedIn only */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/rohitcontracting?igsh=b2dpdGFldXVtbHR4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-[1px] text-[11px] font-semibold"
                style={{
                  background: "var(--card-earth)",
                  border: "1px solid var(--border-earth)",
                  color: "var(--text-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-accent)";
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.color = "#FDF8F5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--card-earth)";
                  e.currentTarget.style.borderColor = "var(--border-earth)";
                  e.currentTarget.style.color = "var(--text-muted)";
                }}
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="#" // TODO: LinkedIn URL to be added
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-[1px] text-[11px] font-semibold"
                style={{
                  background: "var(--card-earth)",
                  border: "1px solid var(--border-earth)",
                  color: "var(--text-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-accent)";
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.color = "#FDF8F5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--card-earth)";
                  e.currentTarget.style.borderColor = "var(--border-earth)";
                  e.currentTarget.style.color = "var(--text-muted)";
                }}
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════
              COL 2 — Company Links
              ═══════════════════════════════════════════════════ */}
          <div className="col-span-2 lg:col-span-3">              <h4
              className="font-semibold text-sm mb-5 uppercase tracking-wider"
              style={{ color: "var(--text-body)" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Projects", href: "#projects" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-muted)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ═══════════════════════════════════════════════════
              COL 3 — Contact Details
              ═══════════════════════════════════════════════════ */}
          <div className="col-span-3 lg:col-span-3 space-y-3">
            <h4
              className="font-semibold text-sm mb-5 uppercase tracking-wider"
              style={{ color: "var(--text-body)" }}
            >
              Contact
            </h4>

            {/* Phone */}
            <a
              href="tel:+97143986222"
              className="flex items-center gap-3 text-sm transition-colors hover:opacity-80"
              style={{ color: "var(--text-body)" }}
            >
              <Phone size="14" style={{ color: "var(--color-accent)" }} className="shrink-0" />
              +971 4 398 6222
            </a>

            {/* Phone 2 (WhatsApp) */}
            <a
              href="https://wa.me/971559229581?text=Hello%2C%20I%27m%20interested%20in%20Rohit%20Contracting%27s%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm transition-colors hover:opacity-80"
              style={{ color: "var(--text-body)" }}
            >
              <Phone size="14" style={{ color: "var(--color-accent)" }} className="shrink-0" />
              +971 55 922 9581
            </a>

            {/* Email */}
            <a
              href="mailto:info@rohitcontracting.ae"
              className="flex items-start gap-3 text-sm transition-colors hover:opacity-80"
              style={{ color: "var(--text-body)" }}
            >
              <Mail size="14" style={{ color: "var(--color-accent)" }} className="shrink-0 mt-0.5" />
              <span className="break-words">info@rohitcontracting.ae</span>
            </a>
          </div>

          {/* ═══════════════════════════════════════════════════
              COL 4 — Trust / Credentials
              ═══════════════════════════════════════════════════ */}
          <div className="col-span-5 lg:col-span-2">
            <h4
              className="font-semibold text-sm mb-5 uppercase tracking-wider"
              style={{ color: "var(--text-body)" }}
            >
              Our Credentials
            </h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {[
                "Trade License No. 1126644",
                "Dubai DED Registered",
                "Contractor Classification: G+4",
                "Dubai Chamber No. 433957",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm leading-snug"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            BOTTOM BAR — clean: copyright left, tagline right
            ═══════════════════════════════════════════════════ */}
        <div
          className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--border-earth)" }}
        >
          <p className="text-xs text-center sm:text-left" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} Rohit Contracting L.L.C. All rights reserved.
          </p>
          <p className="text-xs text-center sm:text-right" style={{ color: "var(--text-muted)" }}>
            Premium Construction &amp; Building Materials | Dubai, UAE
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={scrollToTop}
        className="absolute -top-5 right-8 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-[2px]"
        style={{
          background: "var(--color-accent)",
          color: "#FDF8F5",
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp size="20" />
      </motion.button>
    </footer>
  );
}
