import type { Metadata } from "next";

const siteUrl = "https://tamihstick.dev";
const title = "tamihstick";
const description =
  "Front-end developer portfolio featuring React, Next.js, TypeScript, responsive interfaces, and selected web application projects.";

export const siteConfig = {
  name: "ARCHIVE_0",
  owner: "Erjhon Baldoza",
  handle: "tamihstick",
  email: "erjhonbaldoza.dev@gmail.com",
  siteUrl,
  description,
  github: "https://github.com/tamihstick",
  linkedin: "https://ph.linkedin.com/in/erjhon-baldoza-792236319",
  resume: "/resume",
};

export function buildMetadata({
  pageTitle,
  pageDescription = description,
  path = "",
}: {
  pageTitle?: string;
  pageDescription?: string;
  path?: string;
}): Metadata {
  const fullTitle = pageTitle ? `${pageTitle} | ${siteConfig.name}` : title;
  const url = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description: pageDescription,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: pageDescription,
    },
  };
}
