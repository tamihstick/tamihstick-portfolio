import { experience } from "@/data/experience";
import { ArchiveLabel } from "@/components/ui/archive-label";
import { TechTag } from "@/components/ui/tech-tag";
import { formatDateRange } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6">
      <div className="space-y-2">
        <ArchiveLabel>03 — professional history</ArchiveLabel>
        <h2 className="archive-heading">Recent frontend work, collaboration patterns, and delivery focus.</h2>
      </div>
      <div className="bryl-list">
        {experience.map((entry) => (
          <article key={`${entry.company}-${entry.role}`} className="bryl-list-row bryl-list-row--experience">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <ArchiveLabel>{entry.company.toLowerCase()}</ArchiveLabel>
                {entry.employmentType ? <span className="archive-status">{entry.employmentType}</span> : null}
              </div>
              <div className="space-y-2">
                <h3 className="archive-heading-sm">{entry.role}</h3>
                <p className="archive-body text-secondary">{entry.description}</p>
              </div>
              <ul className="grid gap-2 text-sm text-secondary">
                {entry.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {entry.technologies?.map((technology) => (
                  <TechTag key={technology}>{technology}</TechTag>
                ))}
              </div>
            </div>
            <div className="space-y-2 text-left lg:text-right">
              <p className="archive-body-sm">{formatDateRange(entry.startDate, entry.endDate, entry.current)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
