"use client";

import dynamic from "next/dynamic";

import LoadingScreen from "@/components/LoadingScreen";
import HeroStatic from "@/components/HeroStatic";
import AboutStatic from "@/components/AboutStatic";
import ServicesStatic from "@/components/ServicesStatic";
import ProjectsStatic from "@/components/ProjectsStatic";
import WhyChooseUsStatic from "@/components/WhyChooseUsStatic";
import CTAStatic from "@/components/CTAStatic";
import ContactStatic from "@/components/ContactStatic";

const Navbar = dynamic(() => import("@/components/Navbar"), { 
  ssr: false,
  loading: () => null
});
const HeroSection = dynamic(() => import("@/components/HeroSection"), { 
  ssr: false,
  loading: () => <HeroStatic />
});
const AboutSection = dynamic(() => import("@/components/AboutSection"), { 
  ssr: false,
  loading: () => <AboutStatic />
});
const ServicesSection = dynamic(() => import("@/components/ServicesSection"), { 
  ssr: false,
  loading: () => <ServicesStatic />
});
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), { 
  ssr: false,
  loading: () => <ProjectsStatic />
});
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), { 
  ssr: false,
  loading: () => <WhyChooseUsStatic />
});
const CTASection = dynamic(() => import("@/components/CTASection"), { 
  ssr: false,
  loading: () => <CTAStatic />
});
const ContactSection = dynamic(() => import("@/components/ContactSection"), { 
  ssr: false,
  loading: () => <ContactStatic />
});
const Footer = dynamic(() => import("@/components/Footer"), { 
  ssr: false,
  loading: () => null
});
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), { 
  ssr: false,
  loading: () => null
});
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { 
  ssr: false,
  loading: () => null
});

export default function MainContent() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <div className="relative min-h-screen bg-primary" style={{ minHeight: '100vh' }}>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <WhyChooseUs />
          <CTASection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
