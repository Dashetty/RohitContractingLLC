"use client";

import { motion } from "framer-motion";
import {
  Package,
  Container,
  Cable,
  Drill,
  SquareStack,
  Wrench,
  Cog,
  Box,
  ArrowRight,
} from "lucide-react";

const materials = [
  {
    icon: Box,
    name: "Cement",
    desc: "Premium Portland cement from UAE manufacturers",
    quality: "ASTM C150",
    items: "8 variants",
  },
  {
    icon: Container,
    name: "Steel",
    desc: "Structural steel, rebar, and steel sheets",
    quality: "BS 4449",
    items: "12 variants",
  },
  {
    icon: Cable,
    name: "Pipes & Fittings",
    desc: "PVC, HDPE, steel pipes and all fittings",
    quality: "ISO 4427",
    items: "50+ types",
  },
  {
    icon: Drill,
    name: "Electrical Supplies",
    desc: "Cables, switchgear, panels, and lighting",
    quality: "IEC Standard",
    items: "200+ SKUs",
  },
  {
    icon: SquareStack,
    name: "Wood & Plywood",
    desc: "Premium plywood, timber, and MDF boards",
    quality: "Grade A",
    items: "15 types",
  },
  {
    icon: Wrench,
    name: "Construction Hardware",
    desc: "Fasteners, anchors, tools, and accessories",
    quality: "Industrial Grade",
    items: "500+ SKUs",
  },
  {
    icon: Cog,
    name: "Industrial Equipment",
    desc: "Heavy machinery and industrial equipment",
    quality: "ISO Certified",
    items: "Custom orders",
  },
  {
    icon: Package,
    name: "Specialty Materials",
    desc: "Waterproofing, insulation, sealants, adhesives",
    quality: "Premium",
    items: "30+ types",
  },
];

export default function MaterialsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-dark-surface overflow-hidden">
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
              Materials & Supply
            </span>
          </div>
          <h2 className="heading-serif text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Premium{" "}
            <span className="text-gradient">Building Materials</span>
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto">
            Comprehensive range of high-quality construction materials sourced
            from trusted manufacturers worldwide
          </p>
        </motion.div>

        {/* Materials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {materials.map((material, i) => (
            <motion.div
              key={material.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative glass rounded-xl p-5 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover background effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 border border-accent/10 group-hover:border-accent/30 flex items-center justify-center mb-4 transition-all duration-300">
                  <material.icon className="text-accent" size="22" />
                </div>

                {/* Name */}
                <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {material.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/50 leading-relaxed mb-4">
                  {material.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-accent/10 rounded text-[10px] text-accent font-medium uppercase tracking-wider">
                    {material.quality}
                  </span>
                  <span className="px-2 py-1 bg-foreground/5 rounded text-[10px] text-foreground/50">
                    {material.items}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/20 hover:border-accent/50 text-foreground font-semibold rounded-xl transition-all duration-300 hover:bg-foreground/5 group"
          >
            Request Material Catalog
            <ArrowRight
              size="18"
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
