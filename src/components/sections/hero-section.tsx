"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, BadgeCheck, Github, Mail, MoreHorizontal } from "lucide-react";

import profileDarkImage from "@/assets/profile-dark.png";
import profileImage from "@/assets/profile.png";
import { profile } from "@/data/profile";
import { ArchiveLabel } from "../ui/archive-label";

// Only initialized in the browser effect. Survives route remounts until a full reload.
let visitRequest: Promise<string> | null = null;

export function HeroSection() {
  const [pageVisits, setPageVisits] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    // This is only a display cache; the database owns the shared total.
    try {
      const cached = window.localStorage.getItem("portfolio:page-visits:v1");
      if (cached && /^\d+$/.test(cached)) setPageVisits(cached);
    } catch {
      // Storage may be disabled; the shared counter still works.
    }

    // Reuse the request across navigation and React's development effect replay.
    visitRequest ??= fetch("/api/page-visits", {
      method: "POST",
      cache: "no-store",
    }).then(async (response) => {
      if (!response.ok) throw new Error("Page visits unavailable");
      const data = (await response.json()) as { pageVisits?: unknown };
      if (typeof data.pageVisits !== "string" || !/^\d+$/.test(data.pageVisits)) {
        throw new Error("Invalid page visits response");
      }
      return data.pageVisits;
    });

    visitRequest.then((count) => {
      if (!isActive) return;
      setPageVisits(count);
      try {
        window.localStorage.setItem("portfolio:page-visits:v1", count);
      } catch {
        // Caching is optional; a refresh still reads the database.
      }
    }).catch(() => {
      // Keep the last known total instead of replacing it with zero.
    });

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
                <strong>{pageVisits === null ? "—" : BigInt(pageVisits).toLocaleString("en-US")}</strong> page visits <span>/</span>{" "}
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
