import Link from "next/link";

import { siteConfig } from "@/lib/metadata";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--outline-variant)] px-4 py-8 md:px-6">
      <div className="archive-container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="archive-label text-muted">ARCHIVE_01</p>
          <p className="text-sm text-secondary">{`© ${new Date().getFullYear()} ${siteConfig.owner}`}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href={siteConfig.github} target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
          <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>
          <span className="text-secondary">Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
