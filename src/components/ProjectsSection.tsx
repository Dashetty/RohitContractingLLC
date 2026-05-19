"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Warehouse,
  Cog,
  HardHat,
  MapPin,
  Calendar,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Al Barsha South 2",
    category: "Residential",
    location: "Al Barsha South 2",
    year: "",
    description: "Private Villa (G+1+R)",
    image: null,
    color: "project-residential",
    size: "medium",
  },
  {
    id: 2,
    title: "Al Barsha Second",
    category: "Residential",
    location: "Al Barsha Second",
    year: "",
    description: "Private Villa (G+1) with Annex",
    image: null,
    color: "project-residential",
    size: "medium",
  },
  {
    id: 3,
    title: "Nad Al Sheba 1",
    category: "Residential",
    location: "Nad Al Sheba 1",
    year: "",
    description: "Private Villa (G+1) with Service Annex",
    image: null,
    color: "project-residential",
    size: "medium",
  },
  {
    id: 4,
    title: "Al Warqa Fourth",
    category: "Residential",
    location: "Al Warqa Fourth",
    year: "",
    description: "Private Villa (G+1)",
    image: null,
    color: "project-residential",
    size: "medium",
  },
  {
    id: 5,
    title: "Al Awir First (G+2)",
    category: "Residential",
    location: "Al Awir First",
    year: "",
    description: "Private Villa (G+2)",
    image: null,
    color: "project-residential",
    size: "medium",
  },
  {
    id: 6,
    title: "Al Awir First (G+1)",
    category: "Residential",
    location: "Al Awir First",
    year: "",
    description: "Private Villa (G+1)",
    image: null,
    color: "project-residential",
    size: "medium",
  },
  {
    id: 7,
    title: "Al Barsha South 2 (Svc Annex)",
    category: "Residential",
    location: "Al Barsha South 2",
    year: "",
    description: "Private Villa (G+1+R) with Service Annex",
    image: null,
    color: "project-residential",
    size: "medium",
  },
];

const categories = ["All", "Commercial", "Industrial", "Infrastructure", "Supply", "Residential"];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-dark-surface">
      <div className="absolute inset-0 industrial-texture opacity-20" />

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
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed">
            Showcasing our finest work across Dubai
          </p>
        </motion.div>

        {/* Completed villas are presented as project cards below */}

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "glass text-foreground/60 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  project.size === "large"
                    ? "lg:col-span-2 lg:row-span-1"
                    : ""
                }`}
                style={{ minHeight: project.size === "large" ? "400px" : "320px" }}
                onClick={() => setSelected(project)}
              >
                {/* Project background placeholder */}
                <div
                  className={`absolute inset-0 ${project.color} steel-gradient`}
                >
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Category badge */}
                  <div className="mb-3">
                    <span className="px-3 py-1 glass rounded-full text-xs text-foreground/80">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-1">
                      <MapPin size="14" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size="14" />
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 glass rounded-lg flex items-center justify-center">
                    <ArrowUpRight className="text-accent" size="20" />
                  </div>
                </div>

                {/* Zoom effect */}
                <div
                  className="absolute inset-0 scale-105 group-hover:scale-110 transition-transform duration-700 opacity-0 group-hover:opacity-30"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-2xl max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image area */}                <div
                  className={`h-64 ${selected.color} relative`}
                >
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 className="text-foreground/20" size="64" />
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 glass rounded-lg flex items-center justify-center text-foreground hover:text-accent transition-colors"
                >
                  <X size="20" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="px-3 py-1 glass-accent rounded-full text-xs text-accent">
                  {selected.category}
                </span>
                <h3 className="text-2xl font-bold text-foreground mt-4 mb-3">
                  {selected.title}
                </h3>
                <p className="text-foreground/60 mb-6">{selected.description}</p>
                <div className="flex items-center gap-6 text-sm text-foreground/50">
                  <span className="flex items-center gap-1">
                    <MapPin size="16" /> {selected.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size="16" /> {selected.year}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
