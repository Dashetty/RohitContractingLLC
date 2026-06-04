export default function WhyChooseUsStatic() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "60+", label: "Expert Professionals" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const cards = [
    { title: "Fast Delivery", desc: "Accelerated project timelines without compromising quality or safety standards." },
    { title: "Trusted Partner", desc: "Ongoing support with 1-year free maintenance on all completed projects." },
    { title: "Quality Assurance", desc: "Rigorous quality control at every stage, from procurement to handover." },
    { title: "Dubai Compliance", desc: "Full adherence to Dubai Municipality, DMCC, and Dubai regulatory standards." },
    { title: "Safety Standards", desc: "Zero-compromise safety protocols across every project site and operation." },
  ];

  return (
    <section
      className="static-fallback relative overflow-hidden py-24 sm:py-32"
      style={{ background: "var(--color-surface-earth)" }}
    >
      <div className="absolute inset-0 industrial-texture opacity-[0.06]" />
      <div className="absolute inset-0 grid-pattern opacity-[0.04]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center rounded-full px-4 py-2 mb-6" style={{ background: "rgba(216,90,48,0.08)", border: "1px solid rgba(216,90,48,0.18)" }}>
            <span className="w-2 h-2 bg-accent rounded-full mr-2" />
            <span className="text-accent text-sm font-medium tracking-wide">Why Choose Us</span>
          </div>
          <h2 className="heading-serif text-4xl sm:text-5xl font-bold leading-tight mb-6 max-w-4xl" style={{ color: "var(--color-heading)" }}>
            Built on <span className="italic" style={{ color: "var(--color-accent)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>Trust</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mb-16" style={{ color: "var(--color-warm-text)" }}>
            The reasons our clients trust us with their projects
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl p-8 text-center" style={{ background: "var(--color-surface-card)", border: "1px solid var(--color-border-earth)" }}>
              <div className="font-bold leading-none mb-2" style={{ fontSize: "clamp(24px, 3.5vw, 30px)", fontFamily: "var(--font-serif), Georgia, serif", color: "var(--color-accent)" }}>
                {stat.value}
              </div>
              <div className="font-medium" style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: "var(--color-warm-text)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Feature cards — row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {cards.slice(0, 3).map((card) => (
            <div key={card.title} className="group relative rounded-2xl p-6 text-center" style={{ background: "var(--color-surface-card)", border: "1px solid var(--color-border-earth)" }}>
              <h3 className="font-bold text-lg leading-snug mb-3" style={{ color: "var(--color-heading)" }}>{card.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-warm-text)" }}>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Feature cards — row 2 */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" style={{ maxWidth: "640px", width: "100%" }}>
            {cards.slice(3).map((card) => (
              <div key={card.title} className="group relative rounded-2xl p-6 text-center" style={{ background: "var(--color-surface-card)", border: "1px solid var(--color-border-earth)" }}>
                <h3 className="font-bold text-lg leading-snug mb-3" style={{ color: "var(--color-heading)" }}>{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-warm-text)" }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
