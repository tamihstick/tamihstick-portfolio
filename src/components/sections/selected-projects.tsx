import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { featuredProjects } from "@/data/projects";
import { ArchiveLabel } from "@/components/ui/archive-label";

export function SelectedProjectsSection() {
  return (
    <section id="selected-work" className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div className="space-y-2">
          <ArchiveLabel>01 — selected work</ArchiveLabel>
          <h2 className="archive-heading">A few builds with product context, interface detail, and technical ownership.</h2>
        </div>
        <Link href="/projects" className="archive-link-row hidden md:inline-flex">
          All projects
          <ArrowRight size={14} />
        </Link>
      </div>
      <div className="bryl-list">
        {featuredProjects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="bryl-list-row"
          >
            <div className="min-w-0 space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="archive-heading-sm">{project.name}</h3>
                <span className="archive-status" data-status={project.status}>
                  {project.status}
                </span>
              </div>
              
              <p className="archive-body text-secondary">{project.summary}</p>
            </div>
            <div className="flex items-center gap-4 self-start md:self-center">
              <span className="archive-label text-muted">{project.year}</span>
              <ArrowRight size={16} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
