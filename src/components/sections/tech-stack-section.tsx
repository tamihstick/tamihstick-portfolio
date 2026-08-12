import { skillGroups } from "@/data/skills";
import { ArchiveLabel } from "@/components/ui/archive-label";
import { TechTag } from "@/components/ui/tech-tag";

export function TechStackSection() {
  return (
    <section id="stack" className="space-y-6">
      <div className="space-y-2">
        <ArchiveLabel>04 — tech stack</ArchiveLabel>
        <h1 className="archive-heading">Tools, frameworks, and workflows I use as a front-end and full stack developer.</h1>
      </div>
      <div className="bryl-list">
        {skillGroups.map((group) => (
          <article key={group.label} className="bryl-list-row bryl-list-row--stack">
            <div className="space-y-3">
              <ArchiveLabel>{group.label.toLowerCase()}</ArchiveLabel>
              <h2 className="archive-heading-sm">{group.label}</h2>
              <p className="archive-body text-secondary">{group.summary}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <TechTag key={skill}>{skill}</TechTag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
