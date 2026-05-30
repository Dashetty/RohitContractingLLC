export default function AboutStatic() {
  return (
    <section 
      className="static-fallback relative overflow-hidden bg-[#FAF7F2] py-24 sm:py-32" 
    >
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 bg-[#D85A3014] border border-[#D85A302E]">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-accent text-sm font-medium tracking-wide">Our Legacy</span>
            </div>

            <h2
              className="heading-serif text-4xl sm:text-5xl font-bold leading-tight mb-6"
              style={{ color: "var(--color-heading)" }}
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

            {/* Values grid — matches client version layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                { label: "Reliability", desc: "Consistent delivery excellence" },
                { label: "Precision", desc: "Attention to every detail" },
                { label: "Quality", desc: "Premium materials & workmanship" },
                { label: "Timely Delivery", desc: "On schedule, every time" },
              ].map((v) => (
                <div key={v.label} className="rounded-xl p-4 bg-[#FDF8F3] border border-[#D8C7B5]">
                  <span className="font-semibold text-[#1C1A17]">{v.label}</span>
                  <p className="text-sm mt-1 text-[#8B6347]">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Safety badge */}
            <div className="flex items-center gap-3 rounded-xl px-5 py-3 mt-6 bg-[rgba(216,90,48,0.06)] border border-[rgba(216,90,48,0.15)]">
              <span className="text-accent shrink-0">&#x1f6e1;</span>
              <span className="text-sm text-[#5C5047]">
                Committed to Dubai safety standards and regulatory compliance
              </span>
            </div>
          </div>
          
          <div className="aspect-[4/3] rounded-2xl bg-[#FDF8F3] border border-[#E8DCC8] flex items-center justify-center">
             <span className="text-[#7A6250] font-medium">Construction Excellence</span>
          </div>
        </div>

        {/* Timeline placeholder — matches the height of HorizontalTimeline in the client version */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-6 border bg-[#D85A3014] border-[#D85A302E]">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm font-semibold tracking-[0.05em] text-accent">Our Journey</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 heading-serif" style={{ color: "var(--color-heading)" }}>
              Key <span className="text-accent">Milestones</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#5C5047]">
              From our founding in 2022 to a growing portfolio of villa projects — each milestone reflects our commitment to quality and trust.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center gap-6 relative" style={{ minHeight: 420 }}>
            <div className="absolute left-[10%] right-[10%] h-px top-1/2 -translate-y-1/2 pointer-events-none bg-[#D8C7B5]" />
            <div className="flex-1" />
            {[2022, 2025, 2026].map((year) => (
              <div key={year} className="relative flex flex-col items-center flex-shrink-0" style={{ width: 280 }}>
                <div className="w-full rounded-2xl p-5 text-center bg-[#FDF8F3] border border-[#D8C7B5]">
                  <span className="text-sm font-bold tracking-wider text-accent">{year}</span>
                </div>
                <div className="relative w-px flex-shrink-0" style={{ height: 48, background: "linear-gradient(to bottom, #D8C7B5, rgba(216,90,48,0.4))" }}>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2" style={{ bottom: -8, background: "var(--color-accent)", borderColor: "var(--color-accent)" }} />
                </div>
              </div>
            ))}
            <div className="flex-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
