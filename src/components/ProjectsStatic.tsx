import Image from "next/image";
import { FileText, MapPin } from "lucide-react";

const completedProjects = [
  {
    id: 1,
    title: "Al Barsha South 2",
    location: "Al Barsha South 2",
    villaNo: "Villa-106",
    image: "/projects/106/106.jpeg",
    certificate: "/projects/106/106-Completion Doc.pdf",
  },
  {
    id: 2,
    title: "Al Barsha Second",
    location: "Al Barsha Second",
    villaNo: "Villa-107",
    image: "/projects/107/107.jpeg",
    certificate: "/projects/107/107-Completion Doc.pdf",
  },
  {
    id: 3,
    title: "Nad Al Sheba 1",
    location: "Nad Al Sheba 1",
    villaNo: "Villa-102",
    image: "/projects/102/102.jpeg",
    certificate: "/projects/102/102-Completion Doc.pdf",
  },
  {
    id: 4,
    title: "Al Warqa Fourth",
    location: "Al Warqa Fourth",
    villaNo: "Villa-103",
    image: "/projects/103/103.jpeg",
    certificate: "/projects/103/103-Completion certificate.pdf",
  },
  {
    id: 5,
    title: "Al Awir First",
    location: "Al Awir First",
    villaNo: "Villa-104",
    image: "/projects/104/104.jpeg",
    certificate: "/projects/104/104 - Completion1925910.pdf",
  },
  {
    id: 6,
    title: "Al Awir First",
    location: "Al Awir First",
    villaNo: "Villa-105",
    image: "/projects/105/105.jpeg",
    certificate: "/projects/105/105-COMPLETION DOC.pdf",
  },
  {
    id: 7,
    title: "Wadi Al Shabak",
    location: "Wadi Al Shabak",
    villaNo: "Villa-113",
    image: "/projects/113/113.jpeg",
    certificate: "/projects/113/113-completion.pdf",
  },
];

export default function ProjectsStatic() {
  return (
    <section 
      id="projects" 
      className="static-fallback relative overflow-hidden bg-[#FAF7F2]" 
      style={{ padding: "var(--section-padding) 0" }}
    >
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#D85A3014] border border-[#D85A302E]">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-accent text-sm font-medium tracking-wide">Our Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-[#1C1A17]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
            Building <span className="text-accent">Dubai&apos;s Skyline</span> One Project at a Time
          </h2>
          <p className="text-lg leading-relaxed text-[#5C5047]">
            Completed villas across Dubai, each with project photos and completion certificate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl overflow-hidden border border-[#D8C7B5] bg-[#FDF8F3]"
            >
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={`${project.villaNo} at ${project.location}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/70 via-[#1C1A17]/20 to-transparent" />

                <div className="absolute left-4 bottom-4 flex items-center gap-2 flex-wrap">
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-[#D85A30]/20 border border-[#D85A30]/40 text-[#FDF8F5]">
                    {project.villaNo}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3
                  className="text-2xl font-bold text-[#1C1A17] mb-2"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {project.title}
                </h3>

                <p className="text-sm text-[#7A6250] flex items-center gap-1.5 mb-4">
                  <MapPin size={14} />
                  {project.location}
                </p>

                <a
                  href={project.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D85A30] text-[#FDF8F5] text-sm font-semibold"
                >
                  <FileText size={15} />
                  View Completion Certificate
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
