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
              More Than Just <span className="italic text-accent">Construction</span>
            </h2>

            <div className="space-y-6 text-lg text-[#5C5047] leading-relaxed">
              <p>
                Based in Dubai Festival City, Rohit Contracting L.L.C brings together
                professionals who genuinely care about their work, from villa groundworks
                to full-scale commercial projects. We handle everything end-to-end,
                with an unwavering focus on quality, safety, and making sure our clients
                are happy with the result.
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
