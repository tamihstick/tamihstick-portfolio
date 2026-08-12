import { skillGroups } from "@/data/skills";
import { ArchiveLabel } from "@/components/ui/archive-label";
import { ArchivePanel } from "@/components/ui/archive-panel";
import { TechTag } from "@/components/ui/tech-tag";

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-6">
      <div className="space-y-2">
        <ArchiveLabel>SYSTEM // CORE_COMPETENCIES</ArchiveLabel>
        <h2 className="archive-heading">Grouped capabilities shaped by product work instead of generic skill bars.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <ArchivePanel key={group.label} title={group.label}>
            <div className="space-y-4">
              <p className="archive-body-sm text-secondary">{group.summary}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <TechTag key={skill}>{skill}</TechTag>
                ))}
              </div>
            </div>
          </ArchivePanel>
        ))}
      </div>
    </section>
  );
}
