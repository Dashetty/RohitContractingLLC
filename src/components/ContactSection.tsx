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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission handler
    console.log("Form submitted:", formState);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-dark-surface">
      <div className="absolute inset-0 industrial-texture opacity-20" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-accent rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-accent text-sm font-medium tracking-wide">
              Contact Us
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed">
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
            <div className="glass rounded-2xl p-6 hover:border-accent/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-accent" size="22" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Location</h3>
                  <p className="text-sm text-foreground/60">
                    Sky Business Center, Floor 1–109 Office,
                    <br />
                    Nadd Al Hamar Road, Dubai Festival City (Al Kheeran 1),
                    <br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
              {/* Mini map placeholder */}
              <div className="mt-4 h-40 rounded-xl steel-gradient border border-border flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto text-accent/50 mb-2" size="24" />
                  <div className="text-xs text-foreground/30">Dubai Festival City</div>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="glass rounded-2xl p-6 hover:border-accent/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="text-accent" size="22" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:+971501234567"
                    className="text-sm text-accent hover:text-accent-light transition-colors"
                  >
                    +971 50 123 4567
                  </a>
                  <p className="text-xs text-foreground/40 mt-1">Available 24/7</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:border-accent/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="text-accent" size="22" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:info@rohitcontracting.ae"
                    className="text-sm text-accent hover:text-accent-light transition-colors"
                  >
                    info@rohitcontracting.ae
                  </a>
                  <p className="text-xs text-foreground/40 mt-1">
                    We reply within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:border-accent/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="text-accent" size="22" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Business Hours
                  </h3>
                  <p className="text-sm text-foreground/60">
                    Sat - Thu: 8:00 AM - 7:00 PM
                  </p>
                  <p className="text-xs text-foreground/40 mt-1">
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
              className="flex items-center gap-3 glass-accent rounded-2xl p-5 hover:bg-accent/15 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[color-mix(in_oklch,var(--color-chart-2)_20%,transparent)] flex items-center justify-center group-hover:bg-[color-mix(in_oklch,var(--color-chart-2)_30%,transparent)] transition-colors">
                <MessageCircle className="text-[var(--color-chart-2)]" size="22" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-foreground">Chat on WhatsApp</div>
                <div className="text-sm text-foreground/50">
                  Quick response via WhatsApp
                </div>
              </div>
              <ChevronRight
                size="18"
                className="text-[var(--color-chart-2)] group-hover:translate-x-1 transition-transform"
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
              className="glass rounded-2xl p-8 sm:p-10 space-y-6"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Send us a Message
              </h3>
              <p className="text-sm text-foreground/50 mb-6">
                Fill in the form and our team will get back to you shortly
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-xl text-foreground placeholder-foreground/30 focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-xl text-foreground placeholder-foreground/30 focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({ ...formState, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-xl text-foreground placeholder-foreground/30 focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all duration-300"
                  placeholder="+971 XX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  Message
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-xl text-foreground placeholder-foreground/30 focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
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
