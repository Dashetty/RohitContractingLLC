import MainContent from "@/components/MainContent";
import HeroStatic from "@/components/HeroStatic";
import AboutStatic from "@/components/AboutStatic";
import ServicesStatic from "@/components/ServicesStatic";
import ProjectsStatic from "@/components/ProjectsStatic";
import ContactStatic from "@/components/ContactStatic";

export default function Home() {
  return (
    <>
      {/* Server-rendered semantic fallbacks for crawlers and immediate paint */}
      <HeroStatic />
      <AboutStatic />
      <ServicesStatic />
      <ProjectsStatic />
      <ContactStatic />

      {/* Client wrapper mounts and replaces/enhances the interactive sections */}
      <MainContent />
    </>
  );
}
