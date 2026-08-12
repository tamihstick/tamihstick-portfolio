import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { profile } from "@/data/profile";
import { ArchiveLabel } from "@/components/ui/archive-label";

export function HeroSection() {
  return (
    <section id="index" className="reveal bryl-home-hero space-y-10" data-visible="true">
      <div className="grid items-start gap-10 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-10">
        <div className="bryl-portrait-frame">
          <div className="bryl-portrait-dots" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[10px] border border-[var(--outline-variant)] bg-[var(--surface-container-low)]">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80"
              alt="Black and white portrait treatment used as hero artwork."
              fill
              priority
              className="object-cover grayscale contrast-125 bryl-portrait-image"
              sizes="(min-width: 1024px) 18rem, 70vw"
            />
          </div>
        </div>
        <div className="space-y-8 pt-2">
          <div className="space-y-3">
            <ArchiveLabel>01 — index</ArchiveLabel>
            <h1 className="archive-display">{profile.name}</h1>
          </div>
          <div className="max-w-xl space-y-5">
            <p className="archive-body text-secondary">
              I'm a front-end engineer. I build modern web interfaces and product experiences with a strong bias for
              clarity, structure, and usable detail.
            </p>
            <p className="archive-body text-secondary">
              Right now I'm building responsive systems with React and Next.js, turning rough ideas into interfaces
              people can actually use.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.12em] text-[var(--secondary)]">
            {profile.socialLinks.map((link) => (
              <Link key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="inline-flex items-center gap-1 hover:text-[var(--foreground)]">
                {link.label}
                <ArrowUpRight size={12} strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="bryl-stat-row">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="bryl-stat-cell">
            <div className="flex items-start gap-1">
              <p className="archive-heading-sm">{stat.value}</p>
              <ArrowUpRight size={12} strokeWidth={1.5} className="mt-1 text-[var(--muted-foreground)]" />
            </div>
            <p className="archive-label mt-2 text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
