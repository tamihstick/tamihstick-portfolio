import type { Metadata } from "next";
import Link from "next/link";

import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import { ArchiveLabel } from "@/components/ui/archive-label";
import { ArchivePanel } from "@/components/ui/archive-panel";
import { buildMetadata, siteConfig } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  pageTitle: "Resume",
  path: "/resume",
  pageDescription: "Resume-style overview of frontend experience, stack, and contact details.",
});

const contactLinks = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "GitHub", value: siteConfig.github.replace("https://", ""), href: siteConfig.github },
  { label: "LinkedIn", value: siteConfig.linkedin.replace("https://", ""), href: siteConfig.linkedin },
];

export default function ResumePage() {
  return (
    <div className="archive-page-padding bryl-inner-page py-8 md:py-10">
      <div className="archive-content mx-auto space-y-8">
        <section className="space-y-5">
          <div className="space-y-3">
            <ArchiveLabel>DOCUMENT // RESUME_RECORD</ArchiveLabel>
            <h1 className="archive-heading">Front-end and full stack experience, system thinking, and product-oriented implementation.</h1>
            <p className="archive-body max-w-3xl text-secondary">
              {profile.name} builds responsive interfaces and connected product workflows with a focus on reusable components, practical UX structure, and maintainable front-end and full stack delivery.
            </p>
          </div>

          <div className="bryl-stat-row">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="bryl-stat-cell">
                <div>
                  <p className="archive-heading-sm">{stat.value}</p>
                </div>
                <p className="archive-label mt-2 text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <ArchivePanel title="Professional Summary" eyebrow="PROFILE // 01">
            <div className="space-y-4">
              <p className="archive-body text-secondary">
                Front-end and full stack developer focused on translating product requirements into clean, scalable interfaces and connected application flows using React, Next.js, TypeScript, and modern UI workflows.
              </p>
              <p className="archive-body text-secondary">
                Strongest in component architecture, responsive implementation, UX polish, and turning structured designs into dependable user-facing systems.
              </p>
            </div>
          </ArchivePanel>

          <ArchivePanel title="Contact + Availability" eyebrow="PROFILE // 02">
            <div className="space-y-4">
              <div className="space-y-3">
                {contactLinks.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1 border-b border-[var(--border-muted)] pb-3 last:border-b-0 last:pb-0">
                    <span className="archive-label text-muted">{item.label}</span>
                    <Link href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined} className="archive-body break-all">
                      {item.value}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="archive-meta-row">
                <span className="archive-status" data-status="available">
                  {profile.availability}
                </span>
                <span className="archive-tag">{profile.location}</span>
                <span className="archive-tag">{profile.timezone}</span>
              </div>
            </div>
          </ArchivePanel>
        </section>

        <section className="space-y-4">
          <div className="space-y-2">
            <ArchiveLabel>EXPERIENCE // 03</ArchiveLabel>
            <h2 className="archive-heading">Recent work shaped around front-end delivery, full stack workflows, and collaboration.</h2>
          </div>

          <div className="bryl-list">
            {experience.map((entry) => (
              <article key={`${entry.company}-${entry.role}`} className="bryl-list-row bryl-list-row--experience">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="archive-label text-muted">{entry.company}</span>
                    {entry.employmentType ? <span className="archive-status">{entry.employmentType}</span> : null}
                  </div>

                  <div className="space-y-2">
                    <h3 className="archive-heading-sm">{entry.role}</h3>
                    <p className="archive-body text-secondary">{entry.description}</p>
                  </div>

                  <ul className="space-y-2">
                    {entry.achievements.map((achievement) => (
                      <li key={achievement} className="archive-body-sm text-secondary">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 xl:text-right">
                  <p className="archive-body-sm">
                    {entry.startDate} - {entry.current ? "Present" : entry.endDate}
                  </p>
                  {entry.technologies?.length ? (
                    <div className="archive-meta-row xl:justify-end">
                      {entry.technologies.map((technology) => (
                        <span key={technology} className="archive-tag">
                          {technology}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="space-y-2">
            <ArchiveLabel>CAPABILITIES // 04</ArchiveLabel>
            <h2 className="archive-heading">Grouped strengths presented the same way the rest of the archive presents working knowledge.</h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <ArchivePanel key={group.label} title={group.label} eyebrow="SKILL_GROUP">
                <div className="space-y-4">
                  <p className="archive-body-sm text-secondary">{group.summary}</p>
                  <div className="archive-meta-row">
                    {group.skills.map((skill) => (
                      <span key={skill} className="archive-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ArchivePanel>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
