import type { Metadata } from "next";

import { ExperienceSection } from "@/components/sections/experience-section";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  pageTitle: "Experience",
  path: "/experience",
  pageDescription: "Professional history, frontend responsibilities, and delivery focus.",
});

export default function ExperiencePage() {
  return (
    <div className="archive-page-padding bryl-inner-page py-8 md:py-10">
      <div className="archive-content mx-auto">
        <ExperienceSection />
      </div>
    </div>
  );
}
