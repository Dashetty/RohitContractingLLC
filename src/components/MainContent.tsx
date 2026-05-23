"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import HeroStatic from "@/components/HeroStatic";
import AboutStatic from "@/components/AboutStatic";
import ServicesStatic from "@/components/ServicesStatic";
import ProjectsStatic from "@/components/ProjectsStatic";
import ContactStatic from "@/components/ContactStatic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
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
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), { ssr: false });
const CTASection = dynamic(() => import("@/components/CTASection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { 
  ssr: false,
  loading: () => <ContactStatic />
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), { ssr: false });
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });

export default function MainContent() {
  // When the client wrapper mounts, mark the document so server fallbacks
  // can be hidden via CSS to avoid duplicate content (server static + client).
  useEffect(() => {
    document.documentElement.classList.add("client-mounted");
    return () => document.documentElement.classList.remove("client-mounted");
  }, []);
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
          <CTASection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
