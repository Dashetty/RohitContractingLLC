export default function CTAStatic() {
  return (
    <section
      className="static-fallback relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--color-heading)" }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
        <div className="absolute inset-0 industrial-texture opacity-[0.08]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-6 sm:mb-8 rounded-2xl flex items-center justify-center" style={{ background: "rgba(216,90,48,0.15)", border: "1px solid rgba(216,90,48,0.25)" }}>
          <span className="text-accent" style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>&#9632;</span>
        </div>

        <h2 className="heading-serif font-bold leading-tight mb-4 sm:mb-6" style={{ color: "var(--color-text-on-dark-soft)", fontSize: "clamp(28px, 5.5vw, 64px)" }}>
          Let&apos;s Build Something{" "}
          <span style={{ color: "var(--color-accent-brand)" }}>Exceptional</span>
        </h2>

        <p className="mx-auto mb-10 sm:mb-12 leading-relaxed" style={{ color: "rgba(253,248,245,0.7)", maxWidth: "560px", fontSize: "clamp(15px, 2vw, 20px)" }}>
          Let us help with your next project. Whether it is a new build or
          a renovation, our team is here to bring it to life.
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <div className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground font-semibold rounded-xl" style={{ fontSize: "clamp(14px, 1.6vw, 18px)" }}>
            Contact Us
          </div>
          <div className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-xl" style={{ border: "1.5px solid rgba(253,248,245,0.25)", color: "var(--color-text-on-dark-soft)", fontSize: "clamp(14px, 1.6vw, 18px)" }}>
            Call Us Now
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-x-8 mt-12 sm:mt-16 text-xs sm:text-sm" style={{ color: "rgba(253,248,245,0.5)" }}>
          {["Free Consultation", "No Obligation Quote", "Dubai Licensed", "5+ Years Experience"].map((text) => (
            <span key={text} className="flex items-center gap-1.5">
              <span style={{ color: "rgba(216,90,48,0.6)" }}>&#10003;</span>
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
