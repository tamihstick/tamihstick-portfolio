import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  pageTitle: "Contact",
  path: "/contact",
  pageDescription: "Contact channels and project inquiry details for Erjhon Baldoza.",
});

export default function ContactPage() {
  return (
    <div className="archive-page-padding bryl-inner-page py-8 md:py-10">
      <div className="archive-content mx-auto">
        <ContactSection />
      </div>
    </div>
  );
}
