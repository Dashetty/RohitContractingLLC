"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";

// Dynamically import framer-motion components (client-side only)
// Prevents SSR opacity:0 from framer-motion's initial prop causing blank pages
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: false });
const AboutSection = dynamic(() => import("@/components/AboutSection"), { ssr: false });
const ServicesSection = dynamic(() => import("@/components/ServicesSection"), { ssr: false });
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), { ssr: false });
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), { ssr: false });
const MaterialsSection = dynamic(() => import("@/components/MaterialsSection"), { ssr: false });
const CTASection = dynamic(() => import("@/components/CTASection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), { ssr: false });
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <div className="relative min-h-screen bg-primary">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <WhyChooseUs />
          <MaterialsSection />
          <CTASection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
