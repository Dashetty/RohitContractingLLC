export default function AboutStatic() {
  return (
    <section 
      className="static-fallback relative overflow-hidden bg-[#FAF7F2]" 
      style={{ padding: "var(--section-padding) 0" }}
    >
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 bg-[#D85A3014] border border-[#D85A302E]">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-accent text-sm font-medium tracking-wide">Our Legacy</span>
            </div>

            <h2 
              className="text-4xl sm:text-5xl font-bold text-[#1C1A17] leading-[1.1] mb-8"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Building the Future of <span className="italic text-accent">Dubai</span> with Precision & Integrity
            </h2>

            <div className="space-y-6 text-lg text-[#5C5047] leading-relaxed">
              <p>
                Founded in the heart of Dubai, Rohit Contracting L.L.C has grown into a trusted name in the UAE construction industry. We specialize in delivering high-end villa construction and comprehensive material supply solutions that meet the highest standards of quality.
              </p>
              <p>
                Our philosophy is simple: we combine traditional craftsmanship with modern engineering to create spaces that inspire. From initial groundworks to final turnkey delivery, our dedicated team ensures every project is executed with absolute precision.
              </p>
            </div>
          </div>
          
          <div className="aspect-[4/3] rounded-2xl bg-[#FDF8F3] border border-[#E8DCC8] flex items-center justify-center">
             <span className="text-[#7A6250] font-medium">Construction Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
