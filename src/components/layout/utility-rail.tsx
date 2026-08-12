import { profile } from "@/data/profile";
import { ArchiveLabel } from "@/components/ui/archive-label";
import { ArchivePanel } from "@/components/ui/archive-panel";
import { TechTag } from "@/components/ui/tech-tag";

const currentStack = ["Next.js", "React", "TypeScript", "Supabase"];

export function UtilityRail() {
  return (
    <aside className="archive-right-rail sticky top-[64px] h-[calc(100vh-64px)] p-4">
      <div className="archive-utility-shell flex flex-col gap-3">
        <ArchivePanel title="Status" eyebrow="UTILITY // 01" className="archive-utility-panel">
          <div className="space-y-3">
            <p className="archive-status" data-status="available">
              STATUS: AVAILABLE
            </p>
            <p className="archive-body-sm text-secondary">
              Open to selected frontend projects, product collaboration, and UI implementation work.
            </p>
          </div>
        </ArchivePanel>
        <ArchivePanel title="Current Stack" eyebrow="UTILITY // 02" className="archive-utility-panel">
          <div className="flex flex-wrap gap-2">
            {currentStack.map((item) => (
              <TechTag key={item}>{item}</TechTag>
            ))}
          </div>
        </ArchivePanel>
        <ArchivePanel title="System Metadata" eyebrow="UTILITY // 03" className="archive-utility-panel">
          <div className="grid gap-3">
            <div>
              <ArchiveLabel>Location</ArchiveLabel>
              <p className="mt-1 text-sm">{profile.location}</p>
            </div>
            <div>
              <ArchiveLabel>Timezone</ArchiveLabel>
              <p className="mt-1 text-sm">{profile.timezone}</p>
            </div>
            <div>
              <ArchiveLabel>Mode</ArchiveLabel>
              <p className="mt-1 text-sm">Frontend</p>
            </div>
            <div>
              <ArchiveLabel>Last Update</ArchiveLabel>
              <p className="mt-1 text-sm">AUG 2026</p>
            </div>
          </div>
        </ArchivePanel>
        <ArchivePanel title="Current Focus" eyebrow="UTILITY // 04" className="archive-utility-panel">
          <ul className="grid gap-2 text-sm text-secondary">
            {profile.interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </ArchivePanel>
      </div>
    </aside>
  );
}
