"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/lib/metadata";

const navItems = [
  { href: "/", label: "Index" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "Stack" },
  { href: "/contact", label: "Contact" },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="archive-top-nav">
      <div className="archive-top-nav__inner">
        <div className="flex items-center gap-4">
          <Link href="/" className="archive-wordmark">
            archive_01
          </Link>
          <span className="hidden archive-label text-muted md:inline">tamihstick</span>
        </div>
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="archive-nav-link"
              data-active={pathname === item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden archive-status md:inline-flex" data-status="available">
            Available
          </span>
        </div>
      </div>
    </header>
  );
}
