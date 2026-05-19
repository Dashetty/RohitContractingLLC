"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  MessageCircle,
  Globe,
  Camera,
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

const socialLinks = [
  { name: "LinkedIn", icon: ExternalLink, href: "#" },
  { name: "Twitter", icon: MessageCircle, href: "#" },
  { name: "Facebook", icon: Globe, href: "#" },
  { name: "Instagram", icon: Camera, href: "#" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative" style={{ background: "#EDE0CE" }}>
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
                  background: "#D85A30",
                  color: "#FDF8F5",
                }}
              >
                RC
              </div>
              <div className="flex flex-col">
                <span
                  className="heading-serif text-xl font-bold tracking-tight"
                  style={{ color: "#1C1A17" }}
                >
                  Rohit
                </span>
                <span
                  className="text-[10px] font-medium tracking-[0.2em] uppercase -mt-1"
                  style={{ color: "#D85A30" }}
                >
                  Contracting
                </span>
              </div>
            </a>

            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: "#5C5047" }}
            >
              Premium contracting and building material solutions for commercial,
              industrial, and infrastructure projects across Dubai.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-[1px]"
                    style={{
                      background: "#F2E8DB",
                      border: "1px solid #D8C7B5",
                      color: "#7A6250",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#D85A30";
                      e.currentTarget.style.borderColor = "#D85A30";
                      e.currentTarget.style.color = "#FDF8F5";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#F2E8DB";
                      e.currentTarget.style.borderColor = "#D8C7B5";
                      e.currentTarget.style.color = "#7A6250";
                    }}
                    aria-label={social.name}
                  >
                    <Icon size="16" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>

            {/* Contact info */}
            <div
              className="space-y-3 pt-4"
              style={{ borderTop: "1px solid #D8C7B5" }}
            >
              <a
                href="tel:+971501234567"
                className="flex items-center gap-3 text-sm transition-colors hover:opacity-80"
                style={{ color: "#5C5047" }}
              >
                <Phone size="14" style={{ color: "#D85A30" }} />
                +971 50 123 4567
              </a>
              <a
                href="mailto:info@rohitcontracting.ae"
                className="flex items-center gap-3 text-sm transition-colors hover:opacity-80"
                style={{ color: "#5C5047" }}
              >
                <Mail size="14" style={{ color: "#D85A30" }} />
                info@rohitcontracting.ae
              </a>
              <a
                href="mailto:rohitcontracting@gmail.com"
                className="flex items-center gap-3 text-sm transition-colors hover:opacity-80"
                style={{ color: "#7A6250" }}
              >
                <Mail size="14" style={{ color: "#7A6250" }} />
                rohitcontracting@gmail.com
              </a>
              <div
                className="flex items-start gap-3 text-sm"
                style={{ color: "#5C5047" }}
              >
                <MapPin size="14" style={{ color: "#D85A30", marginTop: "2px" }} />
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
                style={{ color: "#5C5047" }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-300"
                      style={{ color: "#7A6250" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#D85A30";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#7A6250";
                      }}
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
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid #E8DFD0" }}
        >
          <p
            className="text-xs text-center sm:text-left"
            style={{ color: "#7A6250" }}
          >
            &copy; {new Date().getFullYear()} Rohit Contracting. All rights
            reserved. | Licensed by Dubai Municipality
          </p>
          <p
            className="text-xs text-center"
            style={{ color: "#7A6250" }}
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
          background: "#D85A30",
          color: "#FDF8F5",
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp size="20" />
      </motion.button>
    </footer>
  );
}
