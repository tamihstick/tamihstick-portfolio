import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";

import "@/app/globals.css";

import { MobileNav } from "@/components/layout/mobile-nav";
import { ProfileRail } from "@/components/layout/profile-rail";
import { SiteFooter } from "@/components/layout/site-footer";
import { TopNav } from "@/components/layout/top-nav";
import { UtilityRail } from "@/components/layout/utility-rail";
import { ThemeProvider } from "@/components/theme-provider";
import { buildMetadata, siteConfig } from "@/lib/metadata";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["500"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = buildMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.owner,
    alternateName: siteConfig.handle,
    jobTitle: "Front-End Developer",
    url: siteConfig.siteUrl,
    sameAs: [siteConfig.github, siteConfig.linkedin],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} ${sourceSerif.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>
          <TopNav />
          <div className="archive-main-shell has-mobile-nav">
            <ProfileRail />
            <main id="main-content" className="archive-main-content min-w-0">
              {children}
              <SiteFooter />
            </main>
            <UtilityRail />
          </div>
          <MobileNav />
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </body>
    </html>
  );
}
