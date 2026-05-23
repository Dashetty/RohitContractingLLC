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
            Explore our diverse portfolio of residential villas, commercial spaces, and industrial projects delivered across the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[4/5] rounded-2xl bg-[#FDF8F3] border border-[#E8DCC8] flex items-center justify-center">
              <span className="text-[#7A6250] font-medium">Project Showcase</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
