"use client";

import { BriefcaseBusiness, Download, FolderKanban, Github, Layers3, Linkedin, Mail, FileText } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/metadata";

const sectionLinks = [
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/experience", label: "Experience", icon: BriefcaseBusiness },
  { href: "/about", label: "Stack", icon: Layers3 },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/resume", label: "Resume", icon: FileText },
];

const channelLinks = [
  { href: siteConfig.github, label: "GitHub", icon: Github, external: true },
  { href: siteConfig.linkedin, label: "LinkedIn", icon: Linkedin, external: true },
  { href: siteConfig.resume, label: "Download Resume", icon: Download, external: false },
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
        </section>
        <nav aria-label="Section links" className="archive-rail-section archive-rail-section--nav">
          {sectionLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="archive-rail-link"
              data-active={pathname === link.href}
            >
              <link.icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} aria-hidden="true" />
              {link.label}
            </Link>
          ))}
        </nav>
        <section className="archive-rail-section">
          <p className="archive-label text-muted">Channels</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            {channelLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer noopener" : undefined}
                className="archive-rail-link"
              >
                <link.icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} aria-hidden="true" />
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}
