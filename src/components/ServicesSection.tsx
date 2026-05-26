"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Hammer,
  Wrench,
  Cog,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "New Construction",
    description:
      "Complete construction of residential villas from foundation to finishing, built to Dubai Municipality standards with turnkey structural, MEP, interior, and telecom solutions.",
  },
  {
    icon: Hammer,
    title: "Renovation & Fit-Out",
    description:
      "Interior and exterior renovation works, fit-out solutions, and refurbishment of existing structures.",
  },
  {
    icon: Wrench,
    title: "Civil & Structural",
    description:
      "Foundation works, structural framing, concrete works, and civil engineering components for residential projects.",
  },
  {
    icon: Cog,
    title: "MEP Works",
    description:
      "Mechanical, Electrical, and Plumbing installations integrated seamlessly within residential villa construction.",
  },
  {
    icon: Truck,
    title: "Project Management",
    description:
      "End to end oversight from design coordination through to Dubai Municipality completion certification.",
  },
];

const row1 = services.slice(0, 3);
const row2 = services.slice(3);

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

function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative rounded-2xl p-6 text-center transition-all duration-500 overflow-hidden"
      style={{
        background: "var(--card-beige)",
        border: "1px solid var(--border-earth)",
        boxShadow: "0 2px 12px rgba(92, 80, 71, 0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(216, 90, 48, 0.3)";
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(92, 80, 71, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-earth)";
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(92, 80, 71, 0.08)";
      }}
    >
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 border border-accent/10 group-hover:border-accent/30 flex items-center justify-center mb-5 mx-auto transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/20">
          <service.icon
            className="text-accent group-hover:text-accent-light transition-colors"
            size="26"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors" style={{ color: "var(--text-heading)" }}>
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32" style={{ background: "var(--bg-beige)" }}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
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
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(216, 90, 48, 0.08)",
              border: "1px solid rgba(216, 90, 48, 0.18)",
            }}
          >
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-accent text-sm font-medium tracking-wide">
              Our Services
            </span>
          </div>
          <h2 className="heading-serif text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Construction &{" "}
            <span className="text-gradient-warm">Contracting Services</span>
          </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-body)" }}>
            Comprehensive construction and contracting services across Dubai, from new builds and
            renovations to MEP, civil works, and project management.
          </p>
        </motion.div>

        {/* Row 1 — first 3 cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5"
        >
          {row1.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </motion.div>

        {/* Row 2 — last 2 cards centered */}
        <div className="flex justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            style={{ maxWidth: "640px", width: "100%" }}
          >
            {row2.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i + row1.length} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
