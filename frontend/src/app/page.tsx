import HeroSection from "@/sections/HeroSection";

import AboutSection from "@/sections/AboutSection";

import ProjectsSection from "@/sections/ProjectsSection";

import SkillsSection from "@/sections/SkillsSection";

import ResearchSection from "@/sections/ResearchSection";

import HobbiesSection from "@/sections/HobbiesSection";

import ContactSection from "@/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#0A0A0A] text-white">
      <HeroSection />

      <AboutSection />

      <ProjectsSection />

      <SkillsSection />

      <ResearchSection />

      <HobbiesSection />

      <ContactSection />
    </main>
  );
}
