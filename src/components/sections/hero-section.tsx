"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, BadgeCheck, Github, Mail, MoreHorizontal } from "lucide-react";

import profileDarkImage from "@/assets/profile-dark.png";
import profileImage from "@/assets/profile.png";
import { profile } from "@/data/profile";
import { ArchiveLabel } from "../ui/archive-label";

export function HeroSection() {
  const [pageStats, setPageStats] = useState(profile.page);

  useEffect(() => {
    let isActive = true;

    async function loadPageStats() {
      try {
        const response = await fetch("/api/page-visits", { cache: "no-store" });
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { recentViews?: string; comments?: string };

        if (!isActive) {
          return;
        }

        setPageStats([
          { value: data.recentViews ?? profile.page[0]?.value ?? "0", label: "recent views" },
          { value: data.comments ?? profile.page[1]?.value ?? "0", label: "comments" },
        ]);
      } catch {
        // Keep the fallback values if the live counter is unavailable.
      }
    }

    loadPageStats();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <section id="index" className="reveal bryl-home-hero bryl-home-hero--profile" data-visible="true">
      <ArchiveLabel >00 - index</ArchiveLabel>
      <div className="bryl-home-hero__container" aria-labelledby="hero-title">
        <div className="bryl-profile-card__layout">
          <div className="bryl-profile-card__content">
            <div className="bryl-profile-card__masthead">
              <div className="bryl-profile-card__identity min-w-0">
                <h1 id="hero-title" className="bryl-profile-card__title bryl-profile-card__title--accent">
                  {profile.name}
                </h1>
                <p className="bryl-profile-card__handle">
                  @{profile.handle}
                  <BadgeCheck size={16} strokeWidth={1.8} aria-hidden="true" className="bryl-profile-card__verified" />
                </p>
              </div>
              <div className="bryl-portrait-frame bryl-profile-card__avatar-wrap">
                <div className="bryl-portrait-dots" />
                <div className="bryl-profile-card__avatar" aria-hidden="true">
                  <Image
                    src={profileImage}
                    alt=""
                    fill
                    priority
                    className="object-cover bryl-portrait-image bryl-portrait-image--default"
                    sizes="(min-width: 1024px) 192px, (min-width: 640px) 160px, 44vw"
                  />
                  <Image
                    src={profileDarkImage}
                    alt=""
                    fill
                    priority
                    className="object-cover bryl-portrait-image bryl-portrait-image--dark"
                    sizes="(min-width: 1024px) 192px, (min-width: 640px) 160px, 44vw"
                  />
                </div>
              </div>
            </div>

            <div className="bryl-profile-card__body">
              <p>
                Full stack developer sharing practical builds, UI systems, and clean product workflows. I turn rough
                ideas into responsive Next.js experiences with usable detail.
              </p>
              <p>
                <Link href="/projects" className="bryl-profile-card__link bryl-profile-card__link--accent">
                  tamihstick.dev/projects
                </Link>
              </p>
            </div>

            <div className="bryl-profile-card__meta">
              <p>
                <strong>{pageStats[0]?.value}</strong> recent views <span>/</span>{" "}
                <strong>0</strong> comments
              </p>
              <div className="bryl-profile-card__icons" aria-label="Profile actions">
                <Link href={profile.socialLinks[0].href} target="_blank" rel="noreferrer noopener" aria-label="Open GitHub">
                  <Github size={22} strokeWidth={2.1} />
                </Link>
                <Link href="mailto:erjhonbaldoza.dev@gmail.com" aria-label="Send email notification">
                  <Mail size={22} strokeWidth={2.1} />
                </Link>
                <Link
                  href={profile.socialLinks[2].href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="More profile links"
                >
                  <MoreHorizontal size={24} strokeWidth={2.1} />
                </Link>
              </div>
            </div>

          </div>
        </div>

        <div className="bryl-profile-tabs" role="tablist" aria-label="Profile sections">
          {profile.stats.map((stats) => (
            <Link
              href={stats.value}
              key={stats.label}
              role="tab"
              tabIndex={0}
              className="bryl-profile-tabs__tab"
            >
              <span className="bryl-profile-tabs__value">
                <strong>{stats.value}</strong>
                <ArrowUpRight size={12} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <p className="bryl-profile-tabs__label">{stats.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
