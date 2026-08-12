import type { Metadata } from "next";
import Link from "next/link";

import { ArchiveLabel } from "@/components/ui/archive-label";
import { ArchivePanel } from "@/components/ui/archive-panel";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { profile } from "@/data/profile";

export const metadata: Metadata = buildMetadata({
  pageTitle: "Resume",
  path: "/resume",
  pageDescription: "Resume-style overview of frontend experience, stack, and contact details.",
});

export default function ResumePage() {
  return (
    <div className="archive-page-padding py-6 md:py-8">
      <div className="archive-content mx-auto space-y-6 lg:mx-0 lg:max-w-none">
        <div className="space-y-2">
          <ArchiveLabel>DOCUMENT // RESUME_RECORD</ArchiveLabel>
          <h1 className="archive-heading">{profile.name}</h1>
          <p className="archive-body text-secondary">{profile.role}</p>
        </div>
        <ArchivePanel title="Summary">
          <p className="archive-body text-secondary">
            Front-end developer focused on responsive interfaces, reusable component systems, and product-oriented UI implementation using React, Next.js, and TypeScript.
          </p>
        </ArchivePanel>
        <ArchivePanel title="Contact">
          <div className="grid gap-2 text-sm">
            <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>
            <Link href={siteConfig.github} target="_blank" rel="noreferrer">
              {siteConfig.github}
            </Link>
            <Link href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              {siteConfig.linkedin}
            </Link>
          </div>
        </ArchivePanel>
      </div>
    </div>
  );
}
