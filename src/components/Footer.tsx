"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone, MapPin, Clock } from "lucide-react";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Projects", href: "#projects" },
  ],
  Support: [
    { label: "Contact Us", href: "#contact" },
    { label: "Request Quote", href: "#contact" },
  ],
};

// TODO: Add actual LinkedIn company URL once provided by client
const socialLinks = [
  { name: "LinkedIn", initial: "in", href: "#" },
  {
    name: "Instagram",
    initial: "ig",
    href: "https://www.instagram.com/rohitcontracting?igsh=b2dpdGFldXVtbHR4",
  },
];

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
        className="relative z-10 mx-auto px-5 sm:px-10 lg:px-20"
        style={{ maxWidth: "1440px" }}
      >
        {/* Top section */}
        <div className="py-16 grid lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl"
                style={{
                  background: "var(--color-accent)",
                  color: "#FDF8F5",
                }}
              >
                RC
              </div>
              <div className="flex flex-col">
                <span
                  className="heading-serif text-xl font-bold tracking-tight"
                  style={{ color: "var(--text-heading)" }}
                >
                  Rohit
                </span>
                <span
                  className="text-[10px] font-medium tracking-[0.2em] uppercase -mt-1"
                  style={{ color: "var(--color-accent)" }}
                >
                  Contracting
                </span>
              </div>
            </a>

            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: "var(--text-body)" }}
            >
              Premium contracting and building material solutions for commercial,
              industrial, and infrastructure projects across Dubai.
            </p>

            {/* Social links — letter initials */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-[1px] text-xs font-semibold"
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
                  aria-label={social.name}
                >
                  {social.initial}
                </a>
              ))}
            </div>

            {/* Contact info */}
            <div
              className="space-y-3 pt-4"
              style={{ borderTop: "1px solid var(--border-earth)" }}
            >
              {/* Phone */}
              <a
                href="tel:+97143986222"
                className="flex items-center gap-3 text-sm transition-colors hover:opacity-80"
                style={{ color: "var(--text-body)" }}
              >
                <Phone size="14" style={{ color: "var(--color-accent)" }} />
                +971 4 398 6222
              </a>

              {/* Email */}
              <a
                href="mailto:info@rohitcontracting.ae"
                className="flex items-center gap-3 text-sm transition-colors hover:opacity-80"
                style={{ color: "var(--text-body)" }}
              >
                <Mail size="14" style={{ color: "var(--color-accent)" }} />
                info@rohitcontracting.ae
              </a>

              {/* Address */}
              <a
                href="https://www.google.com/maps/search/Sky+Business+Center+Dubai+Festival+City"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm transition-colors hover:opacity-80"
                style={{ color: "var(--text-body)" }}
              >
                <MapPin size="14" style={{ color: "var(--color-accent)", marginTop: "2px" }} />
                <span>
                  Sky Business Center, Office 109
                  <br />
                  Nadd Al Hammar Road, Al Kheeran
                  <br />
                  Dubai Festival City, Dubai, UAE
                  <br />
                  PO Box 182129
                </span>
              </a>

              {/* Hours */}
              <div
                className="flex items-start gap-3 text-sm"
                style={{ color: "var(--text-body)" }}
              >
                <Clock size="14" style={{ color: "var(--color-accent)", marginTop: "2px" }} />
                <span>
                  Monday – Saturday: 7:00 AM – 6:00 PM
                  <br />
                  Sunday: Closed
                </span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="heading-serif font-semibold text-sm mb-5 uppercase tracking-wider"
                style={{ color: "var(--text-body)" }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-300 flex items-center gap-1.5"
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
          ))}
        </div>

        {/* ── Unified trust band: credentials + copyright + tagline ── */}
        <div
          className="rounded-2xl px-6 py-6 mt-8 mb-8"
          style={{
            background: "rgba(216, 90, 48, 0.03)",
            border: "1px solid rgba(216, 90, 48, 0.06)",
          }}
        >
          {/* Credentials — compact, centered, dot-separated */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-center mb-5"
            style={{ color: "var(--text-muted)" }}
          >
            <span>Rohit Contracting L.L.C</span>
            <span style={{ color: "rgba(216, 90, 48, 0.35)" }}>·</span>
            <span>Trade License No. 1126644</span>
            <span style={{ color: "rgba(216, 90, 48, 0.35)" }}>·</span>
            <span>Dubai DED</span>
            <span style={{ color: "rgba(216, 90, 48, 0.35)" }}>·</span>
            <span>Contractor Classification: G+4</span>
            <span style={{ color: "rgba(216, 90, 48, 0.35)" }}>·</span>
            <span>Dubai Chamber Member No. 433957</span>
            <span style={{ color: "rgba(216, 90, 48, 0.35)" }}>·</span>
            <span>Established 2022</span>
          </div>

          {/* Divider */}
          <div
            className="mx-auto w-full max-w-xl mb-5"
            style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(216, 90, 48, 0.12), transparent)" }}
          />

          {/* Copyright + Tagline */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-1">
            <p
              className="text-xs text-center"
              style={{ color: "var(--text-muted)" }}
            >
              &copy; {new Date().getFullYear()} Rohit Contracting L.L.C. All rights reserved.
            </p>
            <span
              className="hidden sm:inline text-xs"
              style={{ color: "rgba(216, 90, 48, 0.35)" }}
            >
              ·
            </span>
            <p
              className="text-xs text-center"
              style={{ color: "var(--text-muted)" }}
            >
              Premium Construction &amp; Building Materials | Dubai, UAE
            </p>
          </div>
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
