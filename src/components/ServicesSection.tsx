"use client";

import { motion } from "framer-motion";
import {
  Building2,
  HardHat,
  Warehouse,
  ShoppingCart,
  Cog,
  Hammer,
  Truck,
  Wrench,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "New Construction",
    description:
      "Complete villa construction from foundations through finishing, delivered to Dubai Municipality standards.",
  },
  {
    icon: Hammer,
    title: "Renovation & Fit-Out",
    description:
      "Interior and exterior refurbishment, fit‑out solutions and upgrade works for existing buildings.",
  },
  {
    icon: Building2,
    title: "Residential Villas",
    description:
      "Custom design and construction of private villas across Dubai, finished with premium materials and workmanship.",
  },
  {
    icon: Wrench,
    title: "Civil & Structural",
    description:
      "Foundation works, structural framing, concrete and civil engineering services for residential projects.",
  },
  {
    icon: Cog,
    title: "MEP Works",
    description:
      "Mechanical, electrical and plumbing systems integrated into villa projects with specialist installers.",
  },
  {
    icon: Truck,
    title: "Project Management",
    description:
      "End‑to‑end project oversight from design coordination through to Dubai Municipality completion certification.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-background">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/2 rounded-full blur-3xl" />

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
              Our Services
            </span>
          </div>
          <h2 className="heading-serif text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Comprehensive{" "}
            <span className="text-gradient">Construction Solutions</span>
          </h2>
            <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto">
            End-to-end contracting, material supply, and trusted partnerships
            across Dubai — from new construction and MEP works to renovation
            and project management.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative glass rounded-2xl p-6 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 border border-accent/10 group-hover:border-accent/30 flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/20">
                  <service.icon
                    className="text-accent group-hover:text-accent-light transition-colors"
                    size="26"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/50 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More removed per design request */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
