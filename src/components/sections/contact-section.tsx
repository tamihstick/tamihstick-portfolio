"use client";

import Link from "next/link";
import { useState } from "react";

import { ArchiveLabel } from "@/components/ui/archive-label";
import { ArchivePanel } from "@/components/ui/archive-panel";
import { siteConfig } from "@/lib/metadata";

type SubmitState = "idle" | "sending" | "success";

export function ContactSection() {
  const [state, setState] = useState<SubmitState>("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    window.setTimeout(() => setState("success"), 900);
  }

  return (
    <section id="contact" className="space-y-6">
      <div className="space-y-2">
        <ArchiveLabel>05 — CONTACT_INFO</ArchiveLabel>
        <h2 className="archive-heading">Open lines for project inquiries, collaboration, and frontend opportunities.</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <ArchivePanel title="Direct Channels">
          <div className="space-y-4 text-sm">
            <div>
              <p className="archive-label text-muted">Email</p>
              <Link href={`mailto:${siteConfig.email}`} className="mt-1 block">
                {siteConfig.email}
              </Link>
            </div>
            <div>
              <p className="archive-label text-muted">GitHub</p>
              <Link href={siteConfig.github} target="_blank" rel="noreferrer noopener" className="mt-1 block">
                {siteConfig.github}
              </Link>
            </div>
            <div>
              <p className="archive-label text-muted">LinkedIn</p>
              <Link href={siteConfig.linkedin} target="_blank" rel="noreferrer noopener" className="mt-1 block">
                {siteConfig.linkedin}
              </Link>
            </div>
            <div>
              <p className="archive-label text-muted">Resume</p>
              <Link href={siteConfig.resume} className="mt-1 block">
                Download resume
              </Link>
            </div>
          </div>
        </ArchivePanel>
        <ArchivePanel title="Send Message">
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="archive-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" className="archive-input" required placeholder="Your name" />
              </div>
              <div className="archive-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" className="archive-input" required placeholder="you@example.com" />
              </div>
            </div>
            <div className="archive-field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" className="archive-input" required placeholder="Project inquiry" />
            </div>
            <div className="archive-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className="archive-textarea" required placeholder="Tell me about the work you want to build." />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button type="submit" className="archive-button" disabled={state === "sending"}>
                {state === "sending" ? "Sending..." : "Send Message"}
              </button>
              <p className="archive-body-sm text-secondary" aria-live="polite">
                {state === "success"
                  ? "Transmission queued. For urgent inquiries, use the email link on the left."
                  : "This demo form shows client-side validation and feedback states."}
              </p>
            </div>
          </form>
        </ArchivePanel>
      </div>
    </section>
  );
}
