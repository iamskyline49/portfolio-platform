import HeroSection from "@/sections/HeroSection";

import FeaturedProjects from "@/sections/FeaturedProjects";

import ResearchSection from "@/sections/ResearchSection";

import ContactSection from "@/sections/ContactSection";

import SkillsSection from "@/sections/SkillsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects />

      <ResearchSection />

      <ContactSection />
    </>
  );
}
