"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

const footerLinks: Record<string, { label: string; href: string; isPlaceholder?: boolean }[]> = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#", isPlaceholder: true },
    { label: "Projects", href: "#projects" },
    { label: "Careers", href: "#", isPlaceholder: true },
    { label: "News & Media", href: "#", isPlaceholder: true },
    { label: "Sustainability", href: "#", isPlaceholder: true },
  ],
  Services: [
    { label: "All Services", href: "#services" },
    { label: "Building Contracting", href: "#", isPlaceholder: true },
    { label: "Construction Management", href: "#", isPlaceholder: true },
    { label: "Material Trading", href: "#", isPlaceholder: true },
    { label: "Infrastructure Projects", href: "#", isPlaceholder: true },
    { label: "Renovation & Civil Works", href: "#", isPlaceholder: true },
  ],
  Support: [
    { label: "Contact Us", href: "#contact" },
    { label: "Request Quote", href: "#contact" },
    { label: "FAQ", href: "#", isPlaceholder: true },
    { label: "Privacy Policy", href: "#", isPlaceholder: true },
    { label: "Terms of Service", href: "#", isPlaceholder: true },
    { label: "Sitemap", href: "#", isPlaceholder: true },
  ],
};

const socialLinks = [
  { name: "LinkedIn", initial: "in", href: "#" },
  { name: "X (Twitter)", initial: "X", href: "#" },
  { name: "Facebook", initial: "f", href: "#" },
  { name: "Instagram", initial: "ig", href: "#" },
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
              <a
                href="tel:+971501234567"
                className="flex items-center gap-3 text-sm transition-colors hover:opacity-80"
                style={{ color: "var(--text-body)" }}
              >
                <Phone size="14" style={{ color: "var(--color-accent)" }} />
                +971 50 123 4567
              </a>
              <a
                href="mailto:info@rohitcontracting.ae"
                className="flex items-center gap-3 text-sm transition-colors hover:opacity-80"
                style={{ color: "var(--text-body)" }}
              >
                <Mail size="14" style={{ color: "var(--color-accent)" }} />
                info@rohitcontracting.ae
              </a>
              <div
                className="flex items-start gap-3 text-sm"
                style={{ color: "var(--text-body)" }}
              >
                <MapPin size="14" style={{ color: "var(--color-accent)", marginTop: "2px" }} />
                <span>
                  Dubai Festival City, Al Kheeran 1
                  <br />
                  Dubai, United Arab Emirates
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
                      {link.isPlaceholder && (
                        <span
                          className="text-[10px] font-medium opacity-50"
                          style={{ color: "var(--text-muted)" }}
                        >
                          [+]
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border-earth)" }}
        >
          <p
            className="text-xs text-center sm:text-left"
            style={{ color: "var(--text-muted)" }}
          >
            &copy; {new Date().getFullYear()} Rohit Contracting L.L.C. All rights
            reserved. | Licensed by Dubai Municipality
          </p>
          <p
            className="text-xs text-center"
            style={{ color: "var(--text-muted)" }}
          >
            Premium Construction & Building Materials | Dubai, UAE
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
