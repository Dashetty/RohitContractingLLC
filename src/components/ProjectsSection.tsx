"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Building2,
  MapPin,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  HardHat,
  CheckCircle2,
} from "lucide-react";

// ── Color Palette (Preserved) ──
const colors = {
  bgCream: "#FDF8F3",
  cardBeige: "#F5EDE4",
  cardCream: "#FAF6F1",
  cardEarth: "#E8DDD0",
  textHeading: "#2C2420",
  textBody: "#5C5047",
  textMuted: "#8B7D6B",
  borderEarth: "#D8C7B5",
  accent: "#D85A30",
  accentLight: "rgba(216, 90, 48, 0.08)",
  accentBorder: "rgba(216, 90, 48, 0.18)",
  dark: "#1C1A17",
};

// ── Completed Projects ──
const completedProjects = [
  {
    id: 1,
    title: "Al Barsha South 2",
    category: "Residential",
    location: "Al Barsha South 2",
    villaNo: "Villa-106",
    year: "2024",
    description: "Private Villa (G+1+R)",
    images: ["/projects/106/106.jpeg", "/projects/106/106-2.jpeg"],
    featured: true,
  },
  {
    id: 2,
    title: "Al Barsha Second",
    category: "Residential",
    location: "Al Barsha Second",
    villaNo: "Villa-107",
    year: "2024",
    description: "Private Villa (G+1) with Annex",
    images: ["/projects/107/107.jpeg"],
    featured: false,
  },
  {
    id: 3,
    title: "Nad Al Sheba 1",
    category: "Residential",
    location: "Nad Al Sheba 1",
    villaNo: "Villa-102",
    year: "2023",
    description: "Private Villa (G+1) with Service Annex",
    images: ["/projects/102/102.jpeg"],
    featured: false,
  },
  {
    id: 4,
    title: "Al Warqa Fourth",
    category: "Residential",
    location: "Al Warqa Fourth",
    villaNo: "Villa-103",
    year: "2023",
    description: "Private Villa (G+1)",
    images: ["/projects/103/103.jpeg", "/projects/103/103-2.jpeg"],
    featured: true,
  },
  {
    id: 5,
    title: "Al Awir First",
    category: "Residential",
    location: "Al Awir First",
    villaNo: "Villa-104",
    year: "2023",
    description: "Private Villa (G+1)",
    images: ["/projects/104/104.jpeg", "/projects/104/104-2.jpeg", "/projects/104/104-3.jpeg"],
    featured: false,
  },
  {
    id: 6,
    title: "Al Awir First",
    category: "Residential",
    location: "Al Awir First",
    villaNo: "Villa-105",
    year: "2023",
    description: "Private Villa (G+1)",
    images: ["/projects/105/105.jpeg"],
    featured: false,
  },
  {
    id: 7,
    title: "Wadi Al Shabak",
    category: "Residential",
    location: "Wadi Al Shabak",
    villaNo: "Villa-113",
    year: "2024",
    description: "Private Villa",
    images: ["/projects/113/113.jpeg", "/projects/113/113-2.jpeg"],
    featured: true,
  },
];

// ── Ongoing Projects ──
const ongoingProjects = [
  {
    plotNo: "71110988",
    area: "Al Awir",
    project: "Proposed Villa G+1",
    consultant: "Al Jawaher Engineering Consultant",
    progress: 65,
  },
  {
    plotNo: "71115852",
    area: "Al Awir First",
    project: "Proposed Villa G+1",
    consultant: "Al Jawaher Engineering Consultant",
    progress: 40,
  },
  {
    plotNo: "6180243",
    area: "Nad Al Sheba First",
    project: "Proposed Villa G+1",
    consultant: "Al Jawaher Engineering Consultant",
    progress: 80,
  },
  {
    plotNo: "71112967",
    area: "Al Awir First",
    project: "Proposed Villa G+1",
    consultant: "Al Jawaher Engineering Consultant",
    progress: 25,
  },
  {
    plotNo: "71114913",
    area: "Al Awir",
    project: "Proposed Villa G+1",
    consultant: "First Trend Architects Consultant",
    progress: 55,
  },
  {
    plotNo: "6723550",
    area: "Al Barsha South Second",
    project: "Proposed Villa G+1",
    consultant: "Al Jawaher Engineering Consultant",
    progress: 70,
  },
  {
    plotNo: "6154198",
    area: "Nad Al Sheba Second",
    project: "Proposed Villa Complex",
    consultant: "Archpix Engineering Consultants",
    progress: 45,
  },
  {
    plotNo: "2811179",
    area: "Al Khawaneej First",
    project: "Proposed Villa G+2",
    consultant: "Al Jawaher Engineering Consultant",
    progress: 30,
  },
];

const tabs = [
  { id: "completed", label: "Completed", count: completedProjects.length },
  { id: "ongoing", label: "In Progress", count: ongoingProjects.length },
] as const;

type ViewMode = (typeof tabs)[number]["id"];
type CompletedProject = (typeof completedProjects)[number];

// ── Components ──

function SectionHeader({ viewMode }: { viewMode: ViewMode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
        style={{
          background: colors.accentLight,
          border: `1px solid ${colors.accentBorder}`,
        }}
      >
        <span className="w-2 h-2 bg-accent rounded-full" />
        <span className="text-accent text-sm font-medium tracking-wide">
          Portfolio
        </span>
      </div>
      <h2 className="heading-serif text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ color: colors.textHeading }}>
        Featured{" "}
        <span className="text-gradient-warm">Projects</span>
      </h2>
      <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: colors.textBody }}>
        {viewMode === "completed"
          ? "A curated collection of completed villas across Dubai, each delivered with precision and documented excellence."
          : "Currently shaping Dubai’s residential landscape. Real-time progress on active construction sites."}
      </p>
    </motion.div>
  );
}

function ProjectCard({ project, index, onSelect }: { project: CompletedProject; index: number; onSelect: (p: CompletedProject) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative cursor-pointer ${project.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
      onClick={() => onSelect(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="relative overflow-hidden rounded-2xl h-full min-h-[420px] md:min-h-[460px]"
        style={{
          background: colors.cardBeige,
          border: `1px solid ${colors.borderEarth}`,
        }}
      >
        {/* Image Container */}
        <div className={`relative ${project.featured ? 'h-[58%]' : 'h-[55%]'} overflow-hidden`}>
          <Image
            src={project.images[0]}
            alt={`${project.title} — ${project.villaNo}, ${project.location}`}
            fill
            sizes={project.featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Top Badge */}
          <div className="absolute top-5 left-5 flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md bg-white/90 text-[#5C5047] border border-white/20 shadow-sm">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md bg-[#D85A30]/90 text-white shadow-sm">
                Featured
              </span>
            )}
          </div>

          {/* Expand Icon */}
          <motion.div 
            className="absolute top-5 right-5 w-10 h-10 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center"
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Maximize2 size={16} className="text-white" />
          </motion.div>

          {/* Photo Count */}
          {project.images.length > 1 && (
            <div className="absolute bottom-5 right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md bg-black/40 text-white text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              {project.images.length} Photos
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`relative ${project.featured ? 'h-[42%]' : 'h-[45%]'} p-6 flex flex-col justify-between`}>
          <div>
            <div className="flex items-center gap-2 mb-2">
              {project.year && (
                <span className="text-xs font-medium" style={{ color: colors.textMuted }}>
                  {project.year}
                </span>
              )}
            </div>
            
            <h3 className="text-xl font-bold mb-1.5 group-hover:text-[#D85A30] transition-colors duration-300" style={{ color: colors.textHeading }}>
              {project.title}
            </h3>
            
            <p className="text-sm leading-relaxed line-clamp-2" style={{ color: colors.textBody }}>
              {project.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: `1px solid ${colors.borderEarth}40` }}>
            <div className="flex items-center gap-1.5 text-sm" style={{ color: colors.textMuted }}>
              <MapPin size={14} className="shrink-0" />
              <span className="truncate">{project.location}</span>
            </div>
            
            <motion.div 
              className="flex items-center gap-1 text-sm font-semibold"
              style={{ color: colors.accent }}
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span>View</span>
              <ArrowUpRight size={16} />
            </motion.div>
          </div>
        </div>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{ 
            boxShadow: isHovered 
              ? `0 0 0 2px ${colors.accent}40, 0 20px 40px -12px rgba(92, 80, 71, 0.25)` 
              : `0 0 0 0px transparent, 0 4px 12px rgba(92, 80, 71, 0.08)`
          }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}

function OngoingCard({ project, index }: { project: typeof ongoingProjects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div 
        className="relative rounded-2xl p-6 h-full overflow-hidden transition-all duration-500"
        style={{
          background: colors.cardCream,
          border: `1px solid ${isHovered ? colors.accent + '30' : colors.borderEarth}`,
          boxShadow: isHovered 
            ? '0 12px 32px -8px rgba(92, 80, 71, 0.15)' 
            : '0 2px 8px rgba(92, 80, 71, 0.06)',
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${colors.textBody} 0px, ${colors.textBody} 1px, transparent 1px, transparent 12px)`
        }} />

        {/* Header */}
        <div className="relative flex items-start justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <span className="w-2.5 h-2.5 rounded-full block animate-pulse" style={{ background: colors.accent }} />
              <span className="absolute inset-0 w-2.5 h-2.5 rounded-full animate-ping opacity-30" style={{ background: colors.accent }} />
            </div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: colors.accent }}>
              Active
            </span>
          </div>
          <span className="font-mono text-[11px] tracking-wider px-2.5 py-1 rounded-lg" style={{ 
            background: colors.cardEarth, 
            color: colors.textMuted 
          }}>
            #{project.plotNo}
          </span>
        </div>

        {/* Content */}
        <div className="relative mb-6">
          <h3 className="text-lg font-bold leading-snug mb-3" style={{ color: colors.textHeading }}>
            {project.project}
          </h3>
          
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-sm" style={{ color: colors.textBody }}>
              <MapPin size={14} className="shrink-0" style={{ color: colors.accent }} />
              <span>{project.area}</span>
            </div>
            <div className="flex items-start gap-2 text-sm" style={{ color: colors.textMuted }}>
              <Building2 size={14} className="shrink-0 mt-0.5" />
              <span className="leading-relaxed">{project.consultant}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: colors.textMuted }}>
              Progress
            </span>
            <span className="text-sm font-bold" style={{ color: colors.accent }}>
              {project.progress}%
            </span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: colors.cardEarth }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: colors.accent }}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${project.progress}%` } : {}}
              transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        {/* Bottom Accent Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{ background: colors.accent }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: CompletedProject; onClose: () => void }) {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = useCallback(() => {
    setActiveImage((prev) => (prev + 1) % project.images.length);
  }, [project.images.length]);

  const prevImage = useCallback(() => {
    setActiveImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  }, [project.images.length]);

  // Ref for onClose to avoid stale closure in the keydown listener
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Lock body scroll while modal is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prev;
    };
  }, [nextImage, prevImage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
      style={{ background: "rgba(28, 26, 23, 0.9)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl flex flex-col md:flex-row"
        style={{ background: colors.dark, border: `1px solid ${colors.borderEarth}30` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Section */}
        <div className="relative w-full md:w-[60%] h-[40vh] md:h-auto md:min-h-[600px] bg-[#2C2420]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={project.images[activeImage]}
                alt={`${project.title} — ${project.villaNo}, ${project.location} (Image ${activeImage + 1} of ${project.images.length})`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full backdrop-blur-md bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full backdrop-blur-md bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((img, idx) => (
              <button
                key={img}
                onClick={() => setActiveImage(idx)}
                aria-label={`Image ${idx + 1}`}
                className="relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300"
                style={{
                  borderColor: idx === activeImage ? colors.accent : 'transparent',
                  opacity: idx === activeImage ? 1 : 0.6,
                }}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>

          {/* Close Button Mobile */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:hidden w-10 h-10 rounded-full backdrop-blur-md bg-black/40 border border-white/20 flex items-center justify-center text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-[40%] p-8 md:p-10 flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: colors.accent }} />
              <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: colors.accent }}>
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="hidden md:flex w-10 h-10 rounded-full items-center justify-center transition-colors hover:bg-white/10"
              style={{ color: colors.textMuted }}
            >
              <X size={20} />
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: colors.textMuted }}>
              {project.description}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-sm" style={{ color: colors.textBody }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${colors.accent}15` }}>
                <MapPin size={18} style={{ color: colors.accent }} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: colors.textMuted }}>Location</div>
                <div className="font-medium text-white">{project.location}</div>
              </div>
            </div>
            
            {project.year && (
              <div className="flex items-center gap-3 text-sm" style={{ color: colors.textBody }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${colors.accent}15` }}>
                  <CheckCircle2 size={18} style={{ color: colors.accent }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: colors.textMuted }}>Completed</div>
                  <div className="font-medium text-white">{project.year}</div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-auto pt-6" style={{ borderTop: `1px solid ${colors.borderEarth}20` }}>
            <p className="text-xs" style={{ color: colors.textMuted }}>
              Completion certificate available on request
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function StatsBar() {
  const stats = [
    { label: "Completed", value: "10+", icon: Building2 },
    { label: "Running / Active", value: "15+", icon: HardHat },
    { label: "Areas Covered", value: "6", icon: MapPin },
  ];

  return (
    <div className="max-w-5xl mx-auto mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 p-4 sm:p-8 rounded-2xl" style={{ 
        background: colors.cardBeige,
        border: `1px solid ${colors.borderEarth}`,
      }}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3" style={{ background: `${colors.accent}12` }}>
              <stat.icon size={20} style={{ color: colors.accent }} />
            </div>
            <div className="text-3xl font-bold mb-1" style={{ color: colors.textHeading }}>
              {stat.value.endsWith('+') ? (
                <>
                  {stat.value.slice(0, -1)}
                  <span style={{ verticalAlign: 'middle' }}>+</span>
                </>
              ) : (
                stat.value
              )}
            </div>
            <div className="text-xs font-medium uppercase tracking-wider" style={{ color: colors.textMuted }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [viewMode, setViewMode] = useState<ViewMode>("completed");
  const [selected, setSelected] = useState<CompletedProject | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: colors.bgCream }}>
      {/* Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235C5047' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader viewMode={viewMode} />

        {/* Stats Bar */}
        <StatsBar />

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div 
            className="inline-flex p-1.5 rounded-2xl gap-1"
            style={{
              background: colors.cardBeige,
              border: `1px solid ${colors.borderEarth}`,
              boxShadow: "0 1px 4px rgba(92, 80, 71, 0.06)",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setViewMode(tab.id)}
                className="relative px-4 sm:px-6 py-2.5 text-sm font-semibold rounded-xl transition-colors duration-300"
                style={viewMode !== tab.id ? { color: colors.textMuted } : undefined}
              >
                {viewMode === tab.id && (
                  <motion.div
                    layoutId="projectTab"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: colors.accent }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 flex items-center gap-2 ${viewMode === tab.id ? 'text-white' : ''}`}>
                  {tab.label}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-lg ${viewMode === tab.id ? 'bg-white/20 text-white' : ''}`} style={viewMode !== tab.id ? { background: colors.cardEarth, color: colors.textMuted } : undefined}>
                    {tab.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          {viewMode === "completed" ? (
            <motion.div
              key="completed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {completedProjects.map((project, i) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={i} 
                  onSelect={(p) => setSelected(p)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="ongoing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {ongoingProjects.map((project, i) => (
                <OngoingCard key={project.plotNo} project={project} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal 
            project={selected} 
            onClose={() => setSelected(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
