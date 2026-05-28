import Image from "next/image";
import { Shield } from "lucide-react";

export default function HeroStatic() {
  return (
    <section className="static-fallback relative h-screen w-full overflow-hidden bg-[#1C1A17] flex items-center justify-center">
      {/* Background image with clean parent for Next.js fill detection */}
      <div className="absolute inset-0 opacity-40">
        <div className="relative w-full h-full">
          <Image
            src="/bg.png"
            alt=""
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
            sizes="100vw"
          />
        </div>
      </div>

      <div className="relative z-20 w-full max-w-3xl text-center px-6 -mt-20 lg:-mt-32">
        {/* Logo above badge */}
        <div className="mb-3 sm:mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/logoorevamp.png"
            alt="Rohit Contracting L.L.C"
            style={{
              height: "clamp(60px, 8vw, 90px)",
              width: "auto",
              objectFit: "contain",
              filter: "brightness(0) invert(1)",
              margin: "0 auto",
            }}
          />
        </div>
        <div className="badge-pill inline-flex items-center gap-2.5 rounded-full mx-auto px-6 py-2 text-[15px]">
          <Shield size={14} className="text-accent" />
          <span className="leading-none text-white opacity-90" style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.04em" }}>
            Foundation To Completion
          </span>
        </div>

        <div className="h-7" />

        <h1 
          className="leading-[1.02] tracking-tight font-semibold"
          style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(42px, 7vw, 92px)", color: "var(--color-text-on-dark)" }}
        >
          Building <span 
            className="italic"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600, color: "var(--color-hero-gold)", letterSpacing: "0.01em" }}
          >Excellence</span> Across <span 
            className="italic"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600, color: "var(--color-hero-gold-deep)", letterSpacing: "0.01em" }}
          >Dubai</span>
        </h1>

        <div className="h-3" />

        <p 
          className="mx-auto text-white/80"
          style={{ maxWidth: "540px", lineHeight: 1.6, fontSize: "clamp(15px, 1.5vw, 19px)" }}
        >
          Luxury villa construction and turnkey contracting across Dubai.
        </p>

        <div className="h-6 sm:h-8" />

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
