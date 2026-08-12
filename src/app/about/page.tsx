import type { Metadata } from "next";

import { TechStackSection } from "@/components/sections/tech-stack-section";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  pageTitle: "Tech Stack",
  path: "/about",
  pageDescription: "Frontend stack, tooling, and implementation workflow used by Erjhon Baldoza.",
});

export default function AboutPage() {
  return (
    <div className="archive-page-padding bryl-inner-page py-8 md:py-10">
      <div className="archive-content mx-auto">
        <TechStackSection />
      </div>
    </div>
  );
}
