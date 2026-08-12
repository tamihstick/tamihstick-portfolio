import { profile } from "@/data/profile";
import { ArchiveLabel } from "@/components/ui/archive-label";
import { ArchivePanel } from "@/components/ui/archive-panel";

const infoRows = [
  ["Formal Name", profile.name],
  ["Handle", `@${profile.handle}`],
  ["Designation", profile.shortRole],
  ["Location", profile.location],
  ["Primary Focus", "Frontend systems and UI implementation"],
  ["Current Stack", profile.focus],
  ["Availability", profile.availability],
];

export function AboutSection() {
  return (
    <section id="about" className="space-y-6">
      <div className="space-y-2">
        <ArchiveLabel>DOCUMENT // CURATOR_INFO</ArchiveLabel>
        <h2 className="archive-heading">A structured profile focused on approach, working style, and present direction.</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <ArchivePanel title="Biography">
          <div className="space-y-4">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="archive-body text-secondary">
                {paragraph}
              </p>
            ))}
            <div className="archive-panel p-4">
              <p className="archive-label text-muted">Interests</p>
              <p className="mt-2 text-sm text-secondary">{profile.interests.join(" / ")}</p>
            </div>
          </div>
        </ArchivePanel>
        <ArchivePanel title="Profile Fields">
          <dl className="grid gap-4">
            {infoRows.map(([label, value]) => (
              <div key={label}>
                <dt className="archive-label text-muted">{label}</dt>
                <dd className="mt-1 text-sm">{value}</dd>
              </div>
            ))}
          </dl>
        </ArchivePanel>
      </div>
    </section>
  );
}
