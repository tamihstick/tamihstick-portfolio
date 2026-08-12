import type { Metadata } from "next";

import { ProjectCard } from "@/components/ui/project-card";
import { ArchiveLabel } from "@/components/ui/archive-label";
import { buildMetadata } from "@/lib/metadata";
import { projects } from "@/data/projects";

export const metadata: Metadata = buildMetadata({
  pageTitle: "Projects",
  path: "/projects",
  pageDescription: "Selected frontend projects, case studies, and implementation details from Erjhon Baldoza.",
});

export default function ProjectsPage() {
  return (
    <div className="archive-page-padding bryl-inner-page py-8 md:py-10">
      <div className="archive-content mx-auto space-y-6">
        <div className="space-y-2">
          <ArchiveLabel>INDEX // ALL_PROJECTS</ArchiveLabel>
          <h1 className="archive-heading">Project records with role, stack, and implementation context.</h1>
        </div>
        <div className="grid gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} variant={index === 0 ? "featured" : "compact"} />
          ))}
        </div>
      </div>
    </div>
  );
}
