import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactStatic() {
  return (
    <section 
      id="contact" 
      className="static-fallback relative overflow-hidden bg-[#2C1F14]" 
      style={{ padding: "var(--section-padding) 0" }}
    >
      <div className="section-container relative z-10 text-white">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              Let&apos;s Build <span className="text-[#FFE8D6]">Your Vision</span>
            </h2>
            <p className="text-lg text-white/70 mb-12 max-w-lg">
              Partner with Dubai&apos;s premier construction and material supply experts. We&apos;re ready to bring precision and excellence to your next project.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-widest">Call Us</div>
                  <div className="text-lg font-medium">+971 4 251 4336</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-widest">Email Us</div>
                  <div className="text-lg font-medium">info@rohitcontracting.ae</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-widest">Visit Us</div>
                  <div className="text-lg font-medium">Sky Business Center, Dubai Festival City</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex items-center justify-center min-h-[400px]">
            <span className="text-white/40 font-medium italic">Contact Form Initializing...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
