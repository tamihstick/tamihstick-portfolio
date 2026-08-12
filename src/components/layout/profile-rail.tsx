"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/metadata";

const sectionLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "Stack" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export function ProfileRail() {
  const pathname = usePathname();

  return (
    <aside className="archive-left-rail archive-scrollbar">
      <div className="archive-rail-shell flex flex-col">
        <section className="archive-rail-section">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-[8px] border border-[var(--outline-variant)] bg-[var(--surface-container-low)] font-display text-xl font-bold">
            EB
          </div>
          <div className="space-y-1">
            <p className="archive-label text-muted">Developer Record</p>
            <h2 className="archive-heading-sm">{profile.name}</h2>
            <p className="archive-body-sm text-secondary">@{profile.handle}</p>
            <p className="archive-body-sm">{profile.shortRole}</p>
            <p className="archive-body-sm text-secondary">{profile.location}</p>
          </div>
          <div className="mt-3">
            <Link href="/contact" className="archive-button w-full">
              Primary Contact
            </Link>
          </div>
        </section>
        <nav aria-label="Section links" className="archive-rail-section archive-rail-section--nav">
          {sectionLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="archive-rail-link"
              data-active={pathname === link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <section className="archive-rail-section">
          <p className="archive-label text-muted">Channels</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link href={siteConfig.github} target="_blank" rel="noreferrer">
              GitHub
            </Link>
            <Link href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </Link>
            <Link href={siteConfig.resume}>Download Resume</Link>
          </div>
        </section>
      </div>
    </aside>
  );
}
