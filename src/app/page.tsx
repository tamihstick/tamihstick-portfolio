import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SelectedProjectsSection } from "@/components/sections/selected-projects";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <div className="archive-page-padding bryl-home py-8 md:py-10">
      <div className="archive-content mx-auto space-y-16">
        <HeroSection />
        <SelectedProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
}
