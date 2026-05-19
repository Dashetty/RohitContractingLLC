"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

const footerLinks = {
  Services: [
    "Building Contracting",
    "Construction Management",
    "Material Trading",
    "Industrial Procurement",
    "Infrastructure Projects",
    "Renovation & Civil Works",
  ],
  Company: [
    "About Us",
    "Our Team",
    "Projects",
    "Careers",
    "News & Media",
    "Sustainability",
  ],
  Support: [
    "Contact Us",
    "Request Quote",
    "FAQ",
    "Privacy Policy",
    "Terms of Service",
    "Sitemap",
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-border">
      {/* Industrial texture overlay */}
      <div className="absolute inset-0 industrial-texture opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center font-bold text-accent-foreground text-xl">
                RC
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-foreground">
                  Rohit
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent -mt-1">
                  Contracting
                </span>
              </div>
            </a>
            <p className="text-sm text-foreground/50 leading-relaxed max-w-sm">
              Premium contracting and building material solutions for commercial,
                industrial, and infrastructure projects across Dubai.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {["LinkedIn", "Twitter", "Facebook", "Instagram"].map((name, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-foreground/40 hover:text-accent hover:border-accent/30 transition-all duration-300 text-[10px] font-bold uppercase tracking-wider"
                  aria-label={`${name}`}
                >
                  {name.slice(0, 1)}
                </a>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-3 pt-4 border-t border-border">
              <a
                href="tel:+971501234567"
                className="flex items-center gap-3 text-sm text-foreground/50 hover:text-accent transition-colors"
              >
                <Phone size="14" className="text-accent" />
                +971 50 123 4567
              </a>
              <a
                href="mailto:info@rohitcontracting.ae"
                className="flex items-center gap-3 text-sm text-foreground/50 hover:text-accent transition-colors"
              >
                <Mail size="14" className="text-accent" />
                info@rohitcontracting.ae
              </a>
              <a
                href="mailto:rohitcontracting@gmail.com"
                className="flex items-center gap-3 text-sm text-foreground/40 transition-colors"
              >
                <Mail size="14" className="text-foreground/40" />
                rohitcontracting@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-foreground/50">
                <MapPin size="14" className="text-accent mt-0.5" />
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
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/40 hover:text-accent transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/30 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Rohit Contracting. All rights
            reserved. | Licensed by Dubai Municipality
          </p>
          <p className="text-xs text-foreground/20 text-center">
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
        className="absolute -top-5 right-8 w-10 h-10 rounded-full bg-accent hover:bg-accent-dark text-accent-foreground flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
        aria-label="Scroll to top"
      >
        <ArrowUp size="20" />
      </motion.button>
    </footer>
  );
}
