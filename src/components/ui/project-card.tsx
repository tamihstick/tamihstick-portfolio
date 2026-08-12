import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types/portfolio";
import { ArchiveLabel } from "@/components/ui/archive-label";
import { ArchivePanel } from "@/components/ui/archive-panel";
import { StatusBadge } from "@/components/ui/status-badge";
import { TechTag } from "@/components/ui/tech-tag";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
  variant?: "featured" | "compact";
};

export function ProjectCard({ project, index, variant = "compact" }: ProjectCardProps) {
  const isFeatured = variant === "featured";

  return (
    <ArchivePanel
      interactive
      className={cn("project-card p-0", isFeatured && "md:grid md:grid-cols-[1.2fr_0.9fr]")}
    >
      <div className="project-card__media">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover"
          sizes={isFeatured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
        />
      </div>
      <div className="project-card__content flex flex-col gap-4">
        <div className="project-card__meta">
          <ArchiveLabel>{`INDEX // 00${index + 1}`}</ArchiveLabel>
          <StatusBadge status={project.status} />
          <ArchiveLabel>{project.year}</ArchiveLabel>
        </div>
        <div className="space-y-3">
          <h3 className="archive-heading-sm">{project.name}</h3>
          <p className="archive-body text-secondary">{project.summary}</p>
        </div>
        <dl className="grid gap-3 text-sm md:grid-cols-2">
          <div>
            <dt className="archive-label text-muted">Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt className="archive-label text-muted">Category</dt>
            <dd>{project.category}</dd>
          </div>
        </dl>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechTag key={technology}>{technology}</TechTag>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-3">
          <Link href={`/projects/${project.slug}`} className="archive-button">
            View Case Study
          </Link>
          {project.liveUrl ? (
            <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="archive-button archive-button--secondary">
              Live Site
              <ArrowUpRight size={14} />
            </Link>
          ) : null}
          {project.repositoryUrl ? (
            <Link
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="archive-button archive-button--secondary"
            >
              Source
              <ArrowUpRight size={14} />
            </Link>
          ) : null}
        </div>
      </div>
    </ArchivePanel>
  );
}
