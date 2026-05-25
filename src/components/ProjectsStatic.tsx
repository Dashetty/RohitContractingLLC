import Image from "next/image";
import { FileText, MapPin, CheckCircle2, Clock } from "lucide-react";

const completedProjects = [
  {
    id: 1,
    title: "Al Barsha South 2",
    location: "Al Barsha South 2",
    villaNo: "Villa-106",
    year: "2024",
    description: "Private Villa (G+1+R)",
    image: "/projects/106/106.jpeg",
    certificate: "/projects/106/106-Completion Doc.pdf",
    featured: true,
  },
  {
    id: 2,
    title: "Al Barsha Second",
    location: "Al Barsha Second",
    villaNo: "Villa-107",
    year: "2024",
    description: "Private Villa (G+1) with Annex",
    image: "/projects/107/107.jpeg",
    certificate: "/projects/107/107-Completion Doc.pdf",
    featured: false,
  },
  {
    id: 3,
    title: "Nad Al Sheba 1",
    location: "Nad Al Sheba 1",
    villaNo: "Villa-102",
    year: "2023",
    description: "Private Villa (G+1) with Service Annex",
    image: "/projects/102/102.jpeg",
    certificate: "/projects/102/102-Completion Doc.pdf",
    featured: false,
  },
  {
    id: 4,
    title: "Al Warqa Fourth",
    location: "Al Warqa Fourth",
    villaNo: "Villa-103",
    year: "2023",
    description: "Private Villa (G+1)",
    image: "/projects/103/103.jpeg",
    certificate: "/projects/103/103-Completion certificate.pdf",
    featured: true,
  },
  {
    id: 5,
    title: "Al Awir First",
    location: "Al Awir First",
    villaNo: "Villa-104",
    year: "2023",
    description: "Private Villa (G+1)",
    image: "/projects/104/104.jpeg",
    certificate: "/projects/104/104 - Completion1925910.pdf",
    featured: false,
  },
  {
    id: 6,
    title: "Al Awir First",
    location: "Al Awir First",
    villaNo: "Villa-105",
    year: "2023",
    description: "Private Villa (G+1)",
    image: "/projects/105/105.jpeg",
    certificate: "/projects/105/105-COMPLETION DOC.pdf",
    featured: false,
  },
  {
    id: 7,
    title: "Wadi Al Shabak",
    location: "Wadi Al Shabak",
    villaNo: "Villa-113",
    year: "2024",
    description: "Private Villa",
    image: "/projects/113/113.jpeg",
    certificate: "/projects/113/113-completion.pdf",
    featured: true,
  },
];

const ongoingProjects = [
  { plotNo: "71110988", area: "Al Awir", project: "Proposed Villa G+1", consultant: "Al Jawaher Engineering Consultant", progress: 65 },
  { plotNo: "71115852", area: "Al Awir First", project: "Proposed Villa G+1", consultant: "Al Jawaher Engineering Consultant", progress: 40 },
  { plotNo: "6180243", area: "Nad Al Sheba First", project: "Proposed Villa G+1", consultant: "Al Jawaher Engineering Consultant", progress: 80 },
  { plotNo: "71112967", area: "Al Awir First", project: "Proposed Villa G+1", consultant: "Al Jawaher Engineering Consultant", progress: 25 },
  { plotNo: "71114913", area: "Al Awir", project: "Proposed Villa G+1", consultant: "First Trend Architects Consultant", progress: 55 },
  { plotNo: "6723550", area: "Al Barsha South Second", project: "Proposed Villa G+1", consultant: "Al Jawaher Engineering Consultant", progress: 70 },
  { plotNo: "6154198", area: "Nad Al Sheba Second", project: "Proposed Villa Complex", consultant: "Archpix Engineering Consultants", progress: 45 },
  { plotNo: "2811179", area: "Al Khawaneej First", project: "Proposed Villa G+2", consultant: "Al Jawaher Engineering Consultant", progress: 30 },
];

const stats = [
  { label: "Projects Completed", value: "7", icon: CheckCircle2 },
  { label: "Active Sites", value: "8", icon: Clock },
  { label: "Areas Covered", value: "6", icon: MapPin },
];

function StatItem({ label, value, Icon }: { label: string; value: string; Icon: React.ComponentType<{ size: number; className?: string }> }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3" style={{ background: "rgba(216, 90, 48, 0.07)" }}>
        <Icon size={20} className="text-accent" />
      </div>
      <div className="text-3xl font-bold mb-1 text-[#2C2420]" style={{ fontFamily: "Georgia, serif" }}>{value}</div>
      <div className="text-xs font-medium uppercase tracking-wider text-[#8B7D6B]">{label}</div>
    </div>
  );
}

export default function ProjectsStatic() {
  return (
    <section 
      className="static-fallback relative overflow-hidden py-24 sm:py-32 bg-[#FDF8F3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(216, 90, 48, 0.08)", border: "1px solid rgba(216, 90, 48, 0.18)" }}>
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-accent text-sm font-medium tracking-wide">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-[#2C2420]" style={{ fontFamily: "Georgia, serif" }}>
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-[#5C5047]">
            A curated collection of completed villas across Dubai, each delivered with precision and documented excellence.
          </p>
        </div>

        {/* Stats */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 p-4 sm:p-8 rounded-2xl bg-[#F5EDE4] border border-[#D8C7B5]">
            {stats.map((s) => (
              <StatItem key={s.label} label={s.label} value={s.value} Icon={s.icon} />
            ))}
          </div>
        </div>

        {/* Tab Toggle (inactive — always shows completed in static) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl gap-1 bg-[#F5EDE4] border border-[#D8C7B5]" style={{ boxShadow: "0 1px 4px rgba(92, 80, 71, 0.06)" }}>
            <div className="px-6 py-2.5 text-sm font-semibold rounded-xl bg-accent text-white flex items-center gap-2">
              Completed
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/20 text-white">{completedProjects.length}</span>
            </div>
            <div className="px-6 py-2.5 text-sm font-semibold rounded-xl text-[#8B7D6B] flex items-center gap-2">
              In Progress
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#E8DDD0] text-[#8B7D6B]">{ongoingProjects.length}</span>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedProjects.map((project) => (
            <article
              key={project.id}
              className={`rounded-2xl overflow-hidden bg-[#F5EDE4] border border-[#D8C7B5] ${project.featured ? 'md:col-span-2' : ''}`}
              style={{ minHeight: project.featured ? "380px" : "320px" }}
            >
              <div className={`relative overflow-hidden ${project.featured ? 'h-[65%]' : 'h-[60%]'}`}>
                <Image
                  src={project.image}
                  alt={`${project.villaNo} at ${project.location}`}
                  fill
                  sizes={project.featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/70 via-transparent to-transparent opacity-60" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/90 text-[#5C5047] border border-white/20 shadow-sm">
                    Residential
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#D85A30]/90 text-white shadow-sm">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between h-[35%]">
                <div>
                  <span className="inline-block text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-md mb-2 bg-[#D85A30]/10 text-accent border border-[#D85A30]/20">
                    {project.villaNo}
                  </span>
                  <h3 className="text-xl font-bold text-[#2C2420] mb-1" style={{ fontFamily: "Georgia, serif" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#5C5047] line-clamp-2">{project.description}</p>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#D8C7B5]/30">
                  <div className="flex items-center gap-1.5 text-sm text-[#8B7D6B]">
                    <MapPin size={14} />
                    <span className="truncate">{project.location}</span>
                  </div>
                  <a
                    href={project.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                  >
                    <FileText size={14} />
                    Certificate
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
