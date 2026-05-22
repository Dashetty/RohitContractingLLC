"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission handler
    console.log("Form submitted:", formState);
  };

  const cardStyle = (id: string) =>
    ({
      background: "var(--card-cream)",
      border: hoveredCard === id ? "1px solid rgba(216,90,48,0.3)" : "1px solid var(--border-earth)",
      boxShadow:
        hoveredCard === id
          ? "0 4px 20px rgba(92,80,71,0.12)"
          : "0 2px 12px rgba(92,80,71,0.08)",
      transition: "all 0.3s ease",
    } as React.CSSProperties);

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "var(--bg-beige)" }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-[0.04]" />
        <div className="absolute inset-0 industrial-texture opacity-[0.06]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(216,90,48,0.08)",
              border: "1px solid rgba(216,90,48,0.18)",
            }}
          >
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-accent text-sm font-medium tracking-wide">
              Contact Us
            </span>
          </div>
          <h2 className="heading-serif text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Get In{" "}
            <span className="text-gradient-warm">Touch</span>
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--text-body)" }}
          >
            Ready to start your project? Reach out to our team
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Map Card */}
            <div
              className="rounded-2xl p-6"
              style={cardStyle("map")}
              onMouseEnter={() => setHoveredCard("map")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(216,90,48,0.1)",
                    border: "1px solid rgba(216,90,48,0.15)",
                  }}
                >
                  <MapPin className="text-accent" size="22" />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "var(--text-heading)" }}
                  >
                    Our Location
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-body)" }}
                  >
                    Sky Business Center, Floor 1–109 Office,
                    <br />
                    Nadd Al Hamar Road, Dubai Festival City (Al Kheeran 1),
                    <br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
              {/* Mini map placeholder */}
              <div
                className="mt-4 h-40 rounded-xl flex items-center justify-center"
                style={{
                  background: "var(--card-beige)",
                  border: "1px solid var(--border-warm)",
                }}
              >
                <div className="text-center">
                  <MapPin
                    className="mx-auto mb-2"
                    size="24"
                    style={{ color: "rgba(216,90,48,0.4)" }}
                  />
                  <div
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Dubai Festival City
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div
              className="rounded-2xl p-6"
              style={cardStyle("phone")}
              onMouseEnter={() => setHoveredCard("phone")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(216,90,48,0.1)",
                    border: "1px solid rgba(216,90,48,0.15)",
                  }}
                >
                  <Phone className="text-accent" size="22" />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "var(--text-heading)" }}
                  >
                    Phone
                  </h3>
                  <a
                    href="tel:+971501234567"
                    className="text-sm text-accent hover:text-accent-light transition-colors"
                  >
                    +971 50 123 4567
                  </a>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Available 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div
              className="rounded-2xl p-6"
              style={cardStyle("email")}
              onMouseEnter={() => setHoveredCard("email")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(216,90,48,0.1)",
                    border: "1px solid rgba(216,90,48,0.15)",
                  }}
                >
                  <Mail className="text-accent" size="22" />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "var(--text-heading)" }}
                  >
                    Email
                  </h3>
                  <a
                    href="mailto:info@rohitcontracting.ae"
                    className="text-sm text-accent hover:text-accent-light transition-colors"
                  >
                    info@rohitcontracting.ae
                  </a>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    We reply within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div
              className="rounded-2xl p-6"
              style={cardStyle("hours")}
              onMouseEnter={() => setHoveredCard("hours")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(216,90,48,0.1)",
                    border: "1px solid rgba(216,90,48,0.15)",
                  }}
                >
                  <Clock className="text-accent" size="22" />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "var(--text-heading)" }}
                  >
                    Business Hours
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-body)" }}
                  >
                    Sat - Thu: 8:00 AM - 7:00 PM
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Friday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl p-5 transition-all duration-300 group"
              style={{
                background: "var(--card-cream)",
                border: "1px solid var(--border-earth)",
                boxShadow: "0 2px 12px rgba(92,80,71,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(216,90,48,0.3)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(92,80,71,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-earth)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(92,80,71,0.08)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                style={{
                  background: "rgba(22, 163, 74, 0.12)",
                  border: "1px solid rgba(22, 163, 74, 0.2)",
                }}
              >
                <MessageCircle className="text-emerald-600" size="22" />
              </div>
              <div className="flex-1">
                <div
                  className="font-semibold"
                  style={{ color: "var(--text-heading)" }}
                >
                  Chat on WhatsApp
                </div>
                <div
                  className="text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  Quick response via WhatsApp
                </div>
              </div>
              <ChevronRight
                size="18"
                className="text-emerald-600 group-hover:translate-x-1 transition-transform shrink-0"
              />
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 sm:p-10 space-y-6"
              style={{
                background: "var(--card-cream)",
                border: "1px solid var(--border-earth)",
                boxShadow: "0 2px 12px rgba(92,80,71,0.08)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: "var(--text-heading)" }}
              >
                Send us a Message
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: "var(--text-muted)" }}
              >
                Fill in the form and our team will get back to you shortly
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group">
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-body)" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none placeholder-[var(--text-muted)]"
                    style={{
                      background: "rgba(92,80,71,0.05)",
                      border: "1px solid var(--border-warm)",
                      color: "var(--text-heading)",
                    }}
                    placeholder="Your name"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-accent, #D85A30)";
                      e.currentTarget.style.background = "rgba(216,90,48,0.05)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-warm)";
                      e.currentTarget.style.background = "rgba(92,80,71,0.05)";
                    }}
                    required
                  />
                </div>
                <div className="group">
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-body)" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none placeholder-[var(--text-muted)]"
                    style={{
                      background: "rgba(92,80,71,0.05)",
                      border: "1px solid var(--border-warm)",
                      color: "var(--text-heading)",
                    }}
                    placeholder="your@email.com"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-accent, #D85A30)";
                      e.currentTarget.style.background = "rgba(216,90,48,0.05)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-warm)";
                      e.currentTarget.style.background = "rgba(92,80,71,0.05)";
                    }}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-body)" }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({ ...formState, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none placeholder-[var(--text-muted)]"
                  style={{
                    background: "rgba(92,80,71,0.05)",
                    border: "1px solid var(--border-warm)",
                    color: "var(--text-heading)",
                  }}
                  placeholder="+971 XX XXX XXXX"
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent, #D85A30)";
                    e.currentTarget.style.background = "rgba(216,90,48,0.05)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-warm)";
                    e.currentTarget.style.background = "rgba(92,80,71,0.05)";
                  }}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-body)" }}
                >
                  Message
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none resize-none placeholder-[var(--text-muted)]"
                  style={{
                    background: "rgba(92,80,71,0.05)",
                    border: "1px solid var(--border-warm)",
                    color: "var(--text-heading)",
                  }}
                  placeholder="Tell us about your project..."
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent, #D85A30)";
                    e.currentTarget.style.background = "rgba(216,90,48,0.05)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-warm)";
                    e.currentTarget.style.background = "rgba(92,80,71,0.05)";
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 flex items-center justify-center gap-2 group"
              >
                <Send size="18" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
