import HeroSection from "@/sections/HeroSection";

import FeaturedProjects from "@/sections/FeaturedProjects";

import SkillsSection from "@/sections/SkillsSection";

import ResearchSection from "@/sections/ResearchSection";

import ContactSection from "@/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="overflow-hidden pt-12">
      <HeroSection />

      <FeaturedProjects />

      <SkillsSection />

      <ResearchSection />

      <ContactSection />
    </main>
  );
}
