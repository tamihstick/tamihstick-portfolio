import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { ArchiveLabel } from "@/components/ui/archive-label";
import { ArchivePanel } from "@/components/ui/archive-panel";
import { StatusBadge } from "@/components/ui/status-badge";
import { TechTag } from "@/components/ui/tech-tag";
import { buildMetadata } from "@/lib/metadata";
import { getProjectBySlug, projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({ pageTitle: "Project Not Found", path: `/projects/${slug}` });
  }

  return buildMetadata({
    pageTitle: project.name,
    path: `/projects/${project.slug}`,
    pageDescription: project.summary,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="archive-page-padding py-6 md:py-8">
      <article className="archive-content mx-auto space-y-6 lg:mx-0 lg:max-w-none">
        <header className="space-y-4">
          <ArchiveLabel>{`CASE_STUDY // ${project.slug.toUpperCase()}`}</ArchiveLabel>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="archive-heading">{project.name}</h1>
            <StatusBadge status={project.status} />
          </div>
          <p className="archive-body max-w-3xl text-secondary">{project.description}</p>
          <div className="archive-meta-row">
            <span className="archive-tag">{project.role}</span>
            <span className="archive-tag">{project.year}</span>
            <span className="archive-tag">{`Team ${project.teamSize}`}</span>
            <span className="archive-tag">{project.category}</span>
          </div>
        </header>

        <div className="overflow-hidden border border-[var(--outline-variant)] bg-[var(--surface-container)]">
          <div className="relative aspect-[16/9]">
            <Image src={project.image} alt={project.imageAlt} fill sizes="100vw" className="object-cover grayscale" priority />
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <ArchivePanel title="Overview" eyebrow="RECORD // 01">
            <div className="space-y-4">
              <p className="archive-body text-secondary">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <TechTag key={technology}>{technology}</TechTag>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="archive-button">
                    Live Site
                    <ArrowUpRight size={14} />
                  </Link>
                ) : null}
                {project.repositoryUrl ? (
                  <Link href={project.repositoryUrl} target="_blank" rel="noreferrer" className="archive-button archive-button--secondary">
                    Source
                    <ArrowUpRight size={14} />
                  </Link>
                ) : (
                  <span className="archive-status" data-status="private">
                    SOURCE // PRIVATE
                  </span>
                )}
              </div>
            </div>
          </ArchivePanel>
          <ArchivePanel title="Responsibilities" eyebrow="RECORD // 02">
            <ul className="grid gap-3 text-sm text-secondary">
              {project.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ArchivePanel>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <ArchivePanel title="Challenges + Decisions" eyebrow="RECORD // 03">
            <ul className="grid gap-3 text-sm text-secondary">
              {(project.challenges ?? ["Project-specific technical and UX tradeoffs are documented as the case study evolves."]).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ArchivePanel>
          <ArchivePanel title="Outcome" eyebrow="RECORD // 04">
            <ul className="grid gap-3 text-sm text-secondary">
              {(project.outcomes ?? ["Delivered a usable production-oriented interface with structured component patterns."]).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ArchivePanel>
        </div>
      </article>
    </div>
  );
}
