"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="archive-mobile-nav md:hidden" aria-label="Mobile navigation">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="archive-mobile-nav__item" data-active={pathname === item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
