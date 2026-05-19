"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Building2 } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 steel-gradient">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 industrial-texture opacity-30" />
      </div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse animation-delay-1000" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center"
          >
            <Building2 className="text-accent" size="36" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Let&apos;s Build Something{" "}
            <span className="font-display-accent">Exceptional</span>
          </h2>

          <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Partner with Rohit Contracting for your next project. From concept
            to completion, we deliver excellence.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="group px-8 py-4 bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 active:scale-95 flex items-center gap-2 text-lg"
            >
              Contact Us
              <ArrowRight
                size="20"
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="tel:+971501234567"
              className="group px-8 py-4 border border-foreground/20 hover:border-accent/50 text-foreground font-semibold rounded-xl transition-all duration-300 hover:bg-foreground/5 flex items-center gap-2 text-lg"
            >
              <Phone size="20" />
              Call Us Now
            </a>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 mt-16 text-sm text-foreground/40"
          >
            <span>✓ Free Consultation</span>
            <span>✓ No Obligation Quote</span>
            <span>✓ UAE Licensed</span>
            <span>✓ 10+ Years Experience</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
