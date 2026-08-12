"use client";

import { useEffect, useState } from "react";

import { AboutSection } from "@/components/sections/about-section";
import { IntroAnimation } from "@/components/intro-animation";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SelectedProjectsSection } from "@/components/sections/selected-projects";
import { SkillsSection } from "@/components/sections/skills-section";

let hasPlayedIntroThisSession = false;

export default function HomePage() {
  const [shouldPlayIntro, setShouldPlayIntro] = useState(() => !hasPlayedIntroThisSession);
  const [isPageRevealed, setIsPageRevealed] = useState(() => hasPlayedIntroThisSession);

  useEffect(() => {
    setShouldPlayIntro(!hasPlayedIntroThisSession);
    setIsPageRevealed(hasPlayedIntroThisSession);
  }, []);

  function handleIntroComplete() {
    hasPlayedIntroThisSession = true;
    setShouldPlayIntro(false);
    setIsPageRevealed(true);
  }

  if (shouldPlayIntro === null) {
    return null;
  }

  return (
    <>
      {shouldPlayIntro ? <IntroAnimation onComplete={handleIntroComplete} /> : null}
      <div
        className="archive-page-padding bryl-home py-8 md:py-10 archive-main-reveal"
        data-visible={isPageRevealed ? "true" : "false"}
      >
        <div className="archive-content mx-auto space-y-16">
          <HeroSection />
          <SelectedProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <AboutSection />
          <ContactSection />
        </div>
      </div>
    </>
  );
}
