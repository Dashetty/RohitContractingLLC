"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  MapPin,
  ArrowUpRight,
  X,
  FileText,
} from "lucide-react";

// ── Completed Projects ──
const completedProjects = [
  {
    id: 1,
    title: "Al Barsha South 2",
    category: "Residential",
    location: "Al Barsha South 2",
    villaNo: "Villa-106",
    year: "",
    description: "Private Villa (G+1+R)",
    images: ["/projects/106/106.jpeg", "/projects/106/106-2.jpeg"],
    certificate: "/projects/106/106-Completion Doc.pdf",
    size: "medium",
  },
  {
    id: 2,
    title: "Al Barsha Second",
    category: "Residential",
    location: "Al Barsha Second",
    villaNo: "Villa-107",
    year: "",
    description: "Private Villa (G+1) with Annex",
    images: ["/projects/107/107.jpeg"],
    certificate: "/projects/107/107-Completion Doc.pdf",
    size: "medium",
  },
  {
    id: 3,
    title: "Nad Al Sheba 1",
    category: "Residential",
    location: "Nad Al Sheba 1",
    villaNo: "Villa-102",
    year: "",
    description: "Private Villa (G+1) with Service Annex",
    images: ["/projects/102/102.jpeg"],
    certificate: "/projects/102/102-Completion Doc.pdf",
    size: "medium",
  },
  {
    id: 4,
    title: "Al Warqa Fourth",
    category: "Residential",
    location: "Al Warqa Fourth",
    villaNo: "Villa-103",
    year: "",
    description: "Private Villa (G+1)",
    images: ["/projects/103/103.jpeg", "/projects/103/103-2.jpeg"],
    certificate: "/projects/103/103-Completion certificate.pdf",
    size: "medium",
  },
  {
    id: 5,
    title: "Al Awir First",
    category: "Residential",
    location: "Al Awir First",
    villaNo: "Villa-104",
    year: "",
    description: "Private Villa (G+1)",
    images: ["/projects/104/104.jpeg", "/projects/104/104-2.jpeg", "/projects/104/104-3.jpeg"],
    certificate: "/projects/104/104 - Completion1925910.pdf",
    size: "medium",
  },
  {
    id: 6,
    title: "Al Awir First",
    category: "Residential",
    location: "Al Awir First",
    villaNo: "Villa-105",
    year: "",
    description: "Private Villa (G+1)",
    images: ["/projects/105/105.jpeg"],
    certificate: "/projects/105/105-COMPLETION DOC.pdf",
    size: "medium",
  },
  {
    id: 7,
    title: "Wadi Al Shabak",
    category: "Residential",
    location: "Wadi Al Shabak",
    villaNo: "Villa-113",
    year: "",
    description: "Private Villa",
    images: ["/projects/113/113.jpeg", "/projects/113/113-2.jpeg"],
    certificate: "/projects/113/113-completion.pdf",
    size: "medium",
  },
];

// ── Ongoing Projects ──
const ongoingProjects = [
  {
    plotNo: "71110988",
    area: "Al Awir",
    project: "Proposed Villa G+1",
    consultant: "Al Jawaher Engineering Consultant",
  },
  {
    plotNo: "71115852",
    area: "Al Awir First",
    project: "Proposed Villa G+1",
    consultant: "Al Jawaher Engineering Consultant",
  },
  {
    plotNo: "6180243",
    area: "Nad Al Sheba First",
    project: "Proposed Villa G+1",
    consultant: "Al Jawaher Engineering Consultant",
  },
  {
    plotNo: "71112967",
    area: "Al Awir First",
    project: "Proposed Villa G+1",
    consultant: "Al Jawaher Engineering Consultant",
  },
  {
    plotNo: "71114913",
    area: "Al Awir",
    project: "Proposed Villa G+1",
    consultant: "First Trend Architects Consultant",
  },
  {
    plotNo: "6723550",
    area: "Al Barsha South Second",
    project: "Proposed Villa G+1",
    consultant: "Al Jawaher Engineering Consultant",
  },
  {
    plotNo: "6154198",
    area: "Nad Al Sheba Second",
    project: "Proposed Villa 1 (G+1+R) + Villa 2 (G+1) + Villa 3 (G+1)",
    consultant: "Archpix Engineering Consultants",
  },
  {
    plotNo: "2811179",
    area: "Al Khawaneej First",
    project: "Proposed Villa G+2",
    consultant: "Al Jawaher Engineering Consultant",
  },
];

const tabs = [
  { id: "completed", label: "Completed" },
  { id: "ongoing", label: "In Progress" },
] as const;

type ViewMode = (typeof tabs)[number]["id"];

type CompletedProject = (typeof completedProjects)[number];

export default function ProjectsSection() {
  const [viewMode, setViewMode] = useState<ViewMode>("completed");
  const [selected, setSelected] = useState<CompletedProject | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <section id="projects" className="relative py-24 sm:py-32" style={{ background: "var(--bg-cream)" }}>
      <div className="absolute inset-0 industrial-texture opacity-[0.06]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
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
              Portfolio
            </span>
          </div>
          <h2 className="heading-serif text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ color: "var(--text-heading)" }}>
            Featured <span className="text-gradient-warm">Projects</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-body)" }}>
            {viewMode === "completed"
              ? "Completed villas across Dubai, each with site photos and completion certificate"
              : "Currently under construction across Dubai"}
          </p>

          {/* Toggle */}
          <div
            className="mt-8 inline-flex rounded-xl p-1"
            style={{
              background: "var(--card-beige)",
              border: "1px solid var(--border-earth)",
              boxShadow: "0 1px 4px rgba(92, 80, 71, 0.06)",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setViewMode(tab.id)}                  className={`relative px-6 py-2.5 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  viewMode === tab.id
                    ? "text-white"
                    : ""
                }`}
                style={viewMode !== tab.id ? { color: "var(--text-muted)" } : undefined}
              >
                {viewMode === tab.id && (
                  <motion.div
                    layoutId="projectTab"
                    className="absolute inset-0 bg-accent rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          {viewMode === "completed" ? (
            <motion.div
              key="completed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {completedProjects.map((project, i) => (
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
                  style={{
                    minHeight: project.size === "large" ? "400px" : "320px",
                    border: "1px solid var(--border-earth)",
                    boxShadow: "0 2px 12px rgba(92, 80, 71, 0.08)",
                  }}
                  onClick={() => {
                    setSelected(project);
                    setActiveImageIndex(0);
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
                  <div className="absolute inset-0">
                    <Image
                      src={project.images[0]}
                      alt={`${project.villaNo} - ${project.location}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/80 via-[#1C1A17]/25 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="mb-3 flex items-center gap-2 flex-wrap">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "rgba(253,248,243,0.92)",
                          border: "1px solid var(--border-earth)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {project.category}
                      </span>
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: "rgba(216,90,48,0.14)",
                          border: "1px solid rgba(216,90,48,0.34)",
                          color: "#FDF8F5",
                        }}
                      >
                        {project.villaNo}
                      </span>
                    </div>
                    <h3 className="heading-serif text-2xl font-bold mb-2 group-hover:text-accent transition-colors" style={{ color: "#FDF8F5" }}>
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm" style={{ color: "rgba(253,248,245,0.82)" }}>
                      <span className="flex items-center gap-1">
                        <MapPin size="14" />
                        {project.location}
                      </span>
                      {project.year && (
                        <span className="flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full" style={{ background: "var(--border-earth)" }} />
                          {project.year}
                        </span>
                      )}
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                        style={{
                          background: "rgba(253,248,243,0.9)",
                          color: "#5C5047",
                        }}
                      >
                        {project.images.length} Photo{project.images.length > 1 ? "s" : ""}
                      </span>
                      <a
                        href={project.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
                        style={{
                          background: "rgba(216,90,48,0.18)",
                          color: "#FDF8F5",
                        }}
                      >
                        <FileText size={13} /> Certificate
                      </a>
                    </div>
                  </div>

                  {/* Arrow up-right on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: "rgba(253,248,243,0.92)",
                        border: "1px solid var(--border-earth)",
                      }}
                    >
                      <ArrowUpRight className="text-accent" size="20" />
                    </div>
                  </div>

                  {/* Warm diagonal pattern on hover */}
                  <div
                    className="absolute inset-0 scale-105 group-hover:scale-110 transition-transform duration-700 opacity-0 group-hover:opacity-20"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(253,248,243,0.12) 2px, rgba(253,248,243,0.12) 4px)",
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="ongoing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {ongoingProjects.map((project, i) => (
                <motion.div
                  key={project.plotNo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative rounded-2xl overflow-hidden cursor-default transition-all duration-500"
                  style={{
                    background: "var(--card-cream)",
                    border: "1px solid var(--border-earth)",
                    boxShadow: "0 2px 12px rgba(92, 80, 71, 0.08)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(216, 90, 48, 0.25)";
                    e.currentTarget.style.boxShadow = "0 8px 28px rgba(92, 80, 71, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-earth)";
                    e.currentTarget.style.boxShadow = "0 2px 12px rgba(92, 80, 71, 0.08)";
                  }}
                >
                  {/* Grid pattern background */}
                  <div className="absolute inset-0 grid-pattern opacity-[0.06]" />

                  {/* Warm shimmer overlay on hover */}
                  <motion.div
                    className="absolute inset-0 grid-pattern opacity-0 group-hover:opacity-[0.18] transition-opacity duration-700 warm-shimmer"
                    aria-hidden="true"
                  />

                  {/* Subtle accent top border glow */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative z-10 p-6 flex flex-col gap-5">
                    {/* Top row: status + plot no */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-[11px] font-semibold uppercase tracking-widest text-accent/80">
                          In Progress
                        </span>
                      </div>
                      <span className="text-[11px] font-mono tracking-wider" style={{ color: "var(--text-muted)" }}>
                        #{project.plotNo}
                      </span>
                    </div>

                    {/* Project type — main heading */}
                    <div>
                      <h3 className="heading-serif text-xl font-bold leading-snug" style={{ color: "var(--text-heading)" }}>
                        {project.project}
                      </h3>
                    </div>

                    {/* Area + Consultant — stacked, muted */}
                    <div className="mt-auto space-y-1.5">
                      <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-body)" }}>
                        <MapPin size="14" className="text-accent/60 shrink-0" />
                        <span>{project.area}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                        <Building2 size="14" className="shrink-0 mt-0.5" style={{ color: "var(--text-muted)" }} />
                        <span>{project.consultant}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Completed Project Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            style={{ background: "rgba(28, 26, 23, 0.85)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1C1A17] rounded-2xl max-w-2xl w-full overflow-hidden border border-[#D8C7B5]/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-64 relative" style={{ background: "var(--card-earth)" }}>
                <Image
                  src={selected.images[activeImageIndex]}
                  alt={`${selected.villaNo} - ${selected.location}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/75 via-[#1C1A17]/10 to-transparent" />

                <div className="absolute left-4 bottom-4 flex gap-2">
                  {selected.images.map((image, index) => (
                    <button
                      key={image}
                      onClick={() => setActiveImageIndex(index)}
                      className="w-14 h-10 rounded-md overflow-hidden border transition-colors"
                      style={{
                        borderColor: index === activeImageIndex ? "rgba(216,90,48,0.8)" : "rgba(253,248,243,0.45)",
                      }}
                      aria-label={`View image ${index + 1} of ${selected.images.length}`}
                    >
                      <Image
                        src={image}
                        alt={`${selected.villaNo} preview ${index + 1}`}
                        width={56}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-accent)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)"; }}
                >
                  <X size="20" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium tracking-wide">
                    {selected.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF8F5]/10 text-[#FDF8F5] border border-[#FDF8F5]/30">
                    {selected.villaNo}
                  </span>
                </div>
                <h3 className="heading-serif text-2xl font-bold text-white mt-4 mb-3">
                  {selected.title}
                </h3>
                <p className="text-[#C4B8A8] text-[17px] leading-[1.6] mb-6">{selected.description}</p>
                <div className="flex items-center gap-6 text-sm text-[#7A6250] mb-6">
                  <span className="flex items-center gap-1.5">
                    <MapPin size="16" className="text-accent" /> {selected.location}
                  </span>
                  {selected.year && (
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D8C7B5]" />
                      {selected.year}
                    </span>
                  )}
                </div>

                <a
                  href={selected.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
                >
                  <FileText size={16} /> View Completion Certificate
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
