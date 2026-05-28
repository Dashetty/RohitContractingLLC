import {
  Building2,
  Cog,
  Hammer,
  Truck,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "New Construction",
    description: "Complete villa construction from foundations through finishing, delivered to Dubai Municipality standards.",
  },
  {
    icon: Hammer,
    title: "Renovation & Fit-Out",
    description: "Interior and exterior refurbishment, fit‑out solutions and upgrade works for existing buildings.",
  },
  {
    icon: Building2,
    title: "Residential Villas",
    description: "Custom design and construction of private villas across Dubai, finished with premium materials and workmanship.",
  },
  {
    icon: Wrench,
    title: "Civil & Structural",
    description: "Foundation works, structural framing, concrete and civil engineering services for residential projects.",
  },
  {
    icon: Cog,
    title: "MEP Works",
    description: "Mechanical, electrical and plumbing systems integrated into villa projects with specialist installers.",
  },
  {
    icon: Truck,
    title: "Project Management",
    description: "End‑to‑end project oversight from design coordination through to Dubai Municipality completion certification.",
  },
];

export default function ServicesStatic() {
  return (
    <section 
      className="static-fallback relative overflow-hidden bg-[#F0E6D6]"
      style={{ padding: "var(--section-padding) 0" }}
    >
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#D85A3014] border border-[#D85A302E]">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-accent text-sm font-medium tracking-wide">Our Services</span>
          </div>
          <h2 className="heading-serif text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ color: "var(--color-heading)" }}>
            Construction & <span className="text-accent">Contracting Services</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--color-warm-text)" }}>
            Contracting and trusted partnerships across Dubai — delivering premium villa
            construction from groundworks to final handover.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl p-6 bg-[#FAF7F2] border border-[#D8C7B5]"
            >
              <div className="w-14 h-14 rounded-xl bg-[#D85A3014] flex items-center justify-center mb-5">
                <service.icon className="text-accent" size="26" />
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: "var(--color-heading)" }}>{service.title}</h3>
              <p className="text-sm leading-relaxed text-[#5C5047]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
