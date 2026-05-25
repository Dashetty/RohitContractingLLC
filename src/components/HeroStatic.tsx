import { Shield } from "lucide-react";

export default function HeroStatic() {
  return (
    <section className="static-fallback relative h-screen w-full overflow-hidden bg-[#1C1A17] flex items-center justify-center">
      {/* Static Background Image Placeholder */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/bg.png')", backgroundPosition: "center 30%" }}
      />
      
      <div className="relative z-20 w-full max-w-3xl text-center px-6">
        <div className="glass-card inline-flex items-center gap-2.5 rounded-full mx-auto px-6 py-2 text-[15px]">
          <Shield size={14} className="text-accent" />
          <span className="leading-none text-white opacity-90" style={{ fontFamily: "var(--font-cormorant), serif", letterSpacing: "0.06em" }}>
            Premier Dubai Construction & Materials
          </span>
        </div>

        <div className="h-6" />

        <h1 
          className="leading-[1.02] tracking-tight font-semibold text-white"
          style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(42px, 7vw, 92px)" }}
        >
          Building <span className="italic font-accent-secondary hero-accent-outline">Excellence</span> Across <span className="italic font-accent-secondary hero-accent-outline">Dubai</span>
        </h1>

        <div className="h-4" />

        <p 
          className="mx-auto text-white/80"
          style={{ maxWidth: "540px", lineHeight: 1.6, fontSize: "clamp(15px, 1.5vw, 19px)" }}
        >
          Mastering luxury villa construction, turnkey contracting, and precision material supply in the heart of the UAE.
        </p>

        <div className="h-8" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="bg-accent text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] w-full sm:w-auto">
            Request Quote
          </div>
          <div className="border-[1.5px] border-white/40 text-white px-8 py-3.5 rounded-xl text-[15px] w-full sm:w-auto">
            Explore Services
          </div>
        </div>
      </div>
    </section>
  );
}
