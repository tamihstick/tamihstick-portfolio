# Personal Portfolio Website — Product Requirements Document

**Product name:** ARCHIVE_01 Portfolio  
**Owner:** Erjhon Baldoza / tamihstick  
**Product type:** Personal developer portfolio  
**Primary role represented:** Front-End Developer  
**Version:** 1.0  
**Status:** Build-ready

---

## 1. Product Summary

ARCHIVE_01 Portfolio is a monochrome, archival-inspired personal portfolio website for a front-end developer. The experience should feel like a curated technical record rather than a generic portfolio template.

The visual system is based on a high-contrast editorial/archive interface: restrained grayscale colors, strong typography, thin borders, compact mono labels, modular information panels, and subtle motion. The portfolio should communicate engineering ability, design awareness, active projects, work history, and contact availability without excessive decoration.

The finished site must be fast, responsive, accessible, SEO-friendly, easy to maintain, and structured so new projects and experience entries can be added without rewriting page layouts.

---

## 2. Product Vision

Create a personal portfolio that feels like a digital archive of a developer's work.

The site should communicate:

- technical capability;
- attention to interface detail;
- practical project experience;
- personal identity without unnecessary visual clutter;
- clear pathways to review projects, source code, résumé, and contact information.

The site should look intentionally designed even when no large hero artwork is present.

---

## 3. Goals

### Primary goals

1. Introduce the developer and current specialization immediately.
2. Showcase selected projects with enough technical context for recruiters and clients.
3. Explain professional experience and responsibilities clearly.
4. Present skills as evidence-backed capabilities rather than a generic technology cloud.
5. Make GitHub, résumé, email, and other relevant contact links easy to find.
6. Establish a memorable monochrome personal brand.
7. Perform well on desktop and mobile.

### Secondary goals

1. Allow projects to be added from a single data source.
2. Support future case-study pages.
3. Support light and dark themes.
4. Make the website suitable for freelance/client outreach as well as employment applications.
5. Provide subtle micro-interactions without reducing usability.

---

## 4. Non-Goals

The first version will not require:

- a CMS;
- user accounts;
- comments;
- a public admin panel;
- an e-commerce system;
- a complex blog publishing workflow;
- heavy WebGL or 3D scenes;
- continuous background animation;
- unnecessary loading screens.

These can be added later if they serve a real portfolio need.

---

## 5. Target Audience

### Recruiters and hiring managers

They need to understand the developer's role, stack, experience, selected work, and contact details quickly.

### Engineering leads

They need evidence that the developer understands component architecture, responsive interfaces, state management, APIs, databases, authentication, and production workflows.

### Potential freelance clients

They need to see what can be built, the quality of execution, project scope, and how to start a conversation.

### Other developers

They may explore GitHub, implementation details, technology choices, and the developer's approach to UI engineering.

---

## 6. Core User Stories

As a recruiter, I want to understand who this developer is within the first screen so I can decide whether to continue reviewing the portfolio.

As an engineering lead, I want to inspect project responsibilities and technology choices so I can evaluate actual frontend experience.

As a client, I want to see completed or active work and contact the developer without hunting for contact information.

As a visitor on mobile, I want the same core information without desktop sidebars making the interface difficult to navigate.

As the portfolio owner, I want to add a project or update experience from structured data rather than duplicating markup.

---

## 7. Brand Direction

### Concept

**Digital archive / developer record / interface index**

The experience should resemble a controlled technical archive with restrained brutalist/editorial influence.

### Brand characteristics

- precise;
- technical;
- minimal;
- neutral;
- structured;
- confident;
- highly legible;
- slightly experimental without becoming confusing.

### Avoid

- excessive gradients;
- neon cyberpunk styling;
- glassmorphism;
- oversized rounded cards;
- excessive shadows;
- decorative blobs;
- over-animated interfaces;
- generic SaaS landing-page visuals.

---

## 8. Design System

### Typography

**Display / headings:** Work Sans  
Weights: 600, 700

**Body:** Inter  
Weights: 400, 500

**Metadata / labels / tags:** JetBrains Mono  
Weight: 500

Recommended type scale:

- Display XL: 48px / 56px
- Heading LG: 32px / 40px
- Heading mobile: 24px / 32px
- Body MD: 16px / 24px
- Body SM: 14px / 20px
- Label MD: 12px / 16px, 0.05em tracking
- Label SM: 10px / 14px

### Color system

Core light palette:

- Background: `#f9f9f9`
- Surface: `#ffffff`
- Surface low: `#f3f3f3`
- Surface container: `#eeeeee`
- Surface high: `#e8e8e8`
- Border soft: `#e2e2e2`
- Border muted: `#cfc4c5`
- Primary text: `#1a1c1c`
- Secondary text: `#5e5e5f`
- Primary / strong action: `#000000`
- On-primary: `#ffffff`
- Error: `#ba1a1a`

Dark mode should invert hierarchy rather than simply invert every value.

### Radius

The visual language is mostly square.

- default: 4px
- medium: 8px
- large: 12px
- pill: 9999px

Cards should normally use 0–4px unless a component has a functional reason for more rounding.

### Spacing

Use a 4px base unit.

- 4px — micro
- 8px — small
- 16px — standard
- 24px — desktop page margin
- 32px — major stack

Maximum page width: `1200px`.

### Borders

Borders are a primary visual separator.

Standard:
`1px solid var(--outline-variant)`

Strong:
`1px solid var(--primary)`

Hoverable archive panels should transition from muted border to black/foreground.

### Shadows

Avoid conventional card shadows by default.

If elevation is required:
`0 8px 30px rgb(0 0 0 / 0.06)`

Use sparingly.

---

## 9. Information Architecture

### Primary routes

- `/` — Portfolio overview
- `/about` — Extended personal/professional profile
- `/projects` — All projects
- `/projects/[slug]` — Project case study
- `/experience` — Work history
- `/contact` — Contact details/form
- `/resume` or downloadable résumé asset

The MVP can implement the main sections on `/` and add dedicated project case-study routes.

### Main navigation

Desktop:
- Index
- Projects
- Experience
- About
- Contact
- GitHub icon/link
- Theme toggle

Mobile:
- Home
- Projects
- About
- Contact

---

## 10. Homepage Requirements

### 10.1 Top navigation

Fixed at the top.

Must contain:

- wordmark: `ARCHIVE_01`, `TAMIHSTICK`, or chosen personal mark;
- main navigation links;
- current availability indicator;
- GitHub shortcut;
- theme toggle.

Desktop height: 64px.

Behavior:

- remains visible while scrolling;
- has a strong bottom border;
- no blurred glass header;
- active route should be visually distinct.

---

### 10.2 Desktop left profile rail

Visible from medium/large breakpoints.

Contents:

- avatar or minimal developer glyph;
- display name;
- handle;
- role;
- location;
- status;
- primary contact button;
- anchor navigation for homepage sections.

Suggested navigation:

- Index
- Selected Work
- Experience
- Skills
- About
- Contact

Footer of rail may contain:

- GitHub
- LinkedIn
- Download résumé

The rail should remain fixed/sticky while the main content scrolls.

---

### 10.3 Hero / identity record

Primary heading should state identity and role clearly.

Example content structure:

`ERJHON BALDOZA`

`FRONT-END DEVELOPER // UI ENGINEERING`

Short introduction:
A 2–4 sentence summary describing frontend specialization, the kinds of products built, and preferred technologies.

Primary CTAs:

- View selected work
- Contact me

Secondary actions:

- GitHub
- Download résumé

Metadata row examples:

- Based in Philippines
- Available for selected projects
- Current focus: Next.js / React
- Last updated: dynamic month/year

The hero should not rely on a giant decorative image.

---

### 10.4 Selected projects

Section label:
`INDEX // SELECTED_WORK`

Display 3–6 featured projects.

Each project card must include:

- project number;
- project name;
- short one-line description;
- role;
- year;
- status;
- technology tags;
- project thumbnail or UI screenshot;
- `View Case Study`;
- optional `Live Site`;
- optional `Source`.

Recommended featured projects may include current real portfolio work such as:

- FOE PH Portal;
- Salarywise PH;
- Payedly;
- additional client or personal work selected by the owner.

Cards should not all use identical layouts. At least one featured project may use a larger editorial treatment.

---

## 11. Project Case Study Requirements

Each case study should contain:

### Header

- project name;
- status;
- date/year;
- role;
- team size;
- category;
- stack;
- links.

### Overview

Explain what the product is and the user's contribution.

### Problem

What problem did the product or feature solve?

### Responsibilities

Examples:

- responsive UI implementation;
- component architecture;
- API integration;
- auth;
- data fetching;
- state management;
- payments;
- dashboard design;
- accessibility;
- performance.

Only include responsibilities that are true for the project.

### Technical architecture

Describe:

- frontend framework;
- component system;
- data flow;
- server/API interaction;
- authentication;
- database-related integration;
- deployment if relevant.

### Screens / gallery

Use real screenshots where possible.

Images must:

- have alt text;
- use optimized image delivery;
- preserve aspect ratio;
- be lazy-loaded below the fold.

### Challenges and decisions

For every major case study, document at least one meaningful technical or UX decision.

### Outcome

State the resulting deliverable or measurable outcome where available.

Do not invent metrics.

---

## 12. Experience Section

Section label:
`DOCUMENT // PROFESSIONAL_HISTORY`

Each item contains:

- job title;
- company/client;
- employment type if useful;
- start/end dates;
- concise responsibilities;
- selected achievements;
- technologies used.

Desktop layout:
left-aligned role/company with date metadata on the right.

Mobile:
date moves below title or above description.

The section should prioritize recent and frontend-relevant experience.

---

## 13. Skills / Competencies

Section label:
`SYSTEM // CORE_COMPETENCIES`

Group skills rather than presenting one undifferentiated tag cloud.

Suggested groups:

### Frontend

- React
- Next.js
- TypeScript
- JavaScript
- Tailwind CSS
- responsive UI
- component architecture

### Data and backend integration

- PostgreSQL
- Supabase
- REST APIs
- server actions
- authentication
- webhooks

### Tooling

- Git
- GitHub
- Docker
- Vite
- Bun/npm/pnpm as applicable

### UI / workflow

- Figma implementation
- design systems
- accessibility
- responsive layouts
- debugging

Each competency can optionally include confidence/usage context, but avoid artificial percentage skill bars.

---

## 14. About Section

Section label:
`DOCUMENT // CURATOR_INFO`

Must include:

- short biography;
- current role;
- current technical focus;
- working style;
- interests that are appropriate for public portfolio context;
- optional photo.

A structured archive-card approach is preferred over a long unbroken biography.

Possible fields:

- Formal Name
- Handle
- Designation
- Location
- Primary Focus
- Current Stack
- Availability

---

## 15. Contact Section

Section label:
`TRANSMISSION // CHANNELS`

Required contact methods:

- email;
- GitHub;
- LinkedIn if used;
- résumé link.

Optional:

- contact form.

Contact form fields:

- Name
- Email
- Subject
- Message

Requirements:

- client-side validation;
- server-side validation if submitted to an API;
- visible sending, success, and error states;
- spam mitigation;
- no secrets exposed in frontend code.

Primary CTA:
`SEND TRANSMISSION` or a clearer accessible equivalent such as `Send Message`.

Archive-style labels may be decorative, but interaction labels must remain understandable.

---

## 16. Right Utility Rail

Desktop-only optional rail.

Can contain:

### Availability status

Example:
`STATUS: AVAILABLE`

Short text explaining the kind of work currently considered.

### Current stack

Compact tags.

### Local/system metadata

Examples:

- LOCATION: PH
- TIMEZONE: UTC+8
- MODE: FRONTEND
- LAST UPDATE: AUG 2026

### Current focus

Short list of current technical areas.

Avoid fake live telemetry unless clearly decorative.

---

## 17. Footer

Contents:

- copyright;
- name/handle;
- GitHub;
- LinkedIn;
- résumé;
- email;
- optional `Built with Next.js`.

Use actual current year programmatically.

---

## 18. Mobile Experience

At widths below the desktop rail breakpoint:

- hide left rail;
- hide right utility rail;
- expand content to viewport width;
- use 16px page margins;
- use 24px heading scale where required;
- convert multi-column cards into a single column;
- provide a compact bottom or top navigation;
- preserve at least 44×44px interactive target sizes where practical.

If using a fixed bottom navigation, add sufficient bottom padding so content is never covered.

---

## 19. Responsive Breakpoints

Recommended:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Behavior:

### < 768px

Single-column layout.

### 768–1023px

Left rail may appear; right utility rail remains hidden.

### >= 1024px

Full archival layout:
left rail + primary content + optional right utility rail.

---

## 20. Interaction Requirements

### Hover states

Interactive cards:

- border transitions from muted to foreground;
- image may scale by a maximum of 1.02;
- text links can use underline or inverse background treatment.

### Reveal animation

Content panels may fade and translate upward:

- initial: opacity 0, translateY(8–10px);
- final: opacity 1, translateY(0);
- duration: ~400ms;
- easing: `cubic-bezier(0.16, 1, 0.3, 1)`.

Must respect `prefers-reduced-motion`.

### Buttons

Primary:
black background / white text.

Hover:
foreground/background inversion or slight opacity adjustment.

Focus:
clear 2px focus ring.

### Links

Do not depend on color alone to communicate interactivity.

---

## 21. Theme Requirements

Support both light and dark mode.

Default may follow system preference.

Persist manual preference locally.

Light mode should remain close to the provided reference.

Dark mode recommendation:

- background: `#111212`
- surface: `#171818`
- elevated: `#1d1f1f`
- foreground: `#f1f1f1`
- secondary: `#b8b8b8`
- border: `#333535`
- primary action: `#f1f1f1`
- primary action text: `#111212`

No saturated accent color is required.

---

## 22. Accessibility Requirements

Target WCAG 2.2 AA where practical.

Required:

- semantic landmark elements;
- one logical H1 per page;
- heading hierarchy;
- keyboard-accessible navigation;
- visible focus states;
- alt text for meaningful images;
- decorative images use empty alt;
- accessible labels for icon-only controls;
- no hover-only critical information;
- sufficient contrast;
- reduced-motion support;
- forms expose errors programmatically;
- skip-to-content link.

Material/icon fonts should not be required for understanding controls. Pair icon-only buttons with `aria-label`.

---

## 23. SEO Requirements

Each page requires:

- unique title;
- meta description;
- canonical URL;
- Open Graph metadata;
- social image;
- appropriate robots directives.

Recommended structured data:

- `Person`;
- `WebSite`;
- `CreativeWork` or `SoftwareApplication` where appropriate for case studies.

Homepage title example:

`Erjhon Baldoza — Front-End Developer`

Description example:

`Front-end developer portfolio featuring React, Next.js, TypeScript, responsive interfaces, and selected web application projects.`

---

## 24. Performance Requirements

Target Lighthouse:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Core Web Vitals targets:

- LCP < 2.5s
- CLS < 0.1
- INP < 200ms

Implementation rules:

- use `next/image` for local/project imagery;
- optimize fonts with `next/font`;
- avoid unnecessary client components;
- lazy-load below-fold media;
- avoid large animation libraries unless justified;
- compress screenshots;
- statically render portfolio content where possible.

---

## 25. Recommended Technical Stack

### Core

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

### UI utilities

- shadcn/ui only where useful
- Lucide React for accessible icon components
- `clsx` + `tailwind-merge`
- optional `class-variance-authority`

### Animation

Prefer CSS + Intersection Observer.

If richer motion becomes necessary:
- Motion / Framer Motion

Do not introduce an animation dependency for simple fades.

### Content

MVP:
TypeScript data files.

Future:
MDX for project case studies.

### Forms

Options:
- React Hook Form
- Zod
- server action or API route
- Resend or equivalent transactional email provider if required

---

## 26. Suggested Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── experience/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── top-nav.tsx
│   │   ├── profile-rail.tsx
│   │   ├── utility-rail.tsx
│   │   ├── mobile-nav.tsx
│   │   └── site-footer.tsx
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── selected-projects.tsx
│   │   ├── experience-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── about-section.tsx
│   │   └── contact-section.tsx
│   └── ui/
│       ├── archive-panel.tsx
│       ├── archive-label.tsx
│       ├── status-badge.tsx
│       ├── project-card.tsx
│       └── tech-tag.tsx
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   └── skills.ts
├── lib/
│   ├── utils.ts
│   └── metadata.ts
└── types/
    └── portfolio.ts
```

---

## 27. Data Models

### Project

```ts
export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  role: string;
  year: number | string;
  status: "active" | "completed" | "archived";
  featured: boolean;
  technologies: string[];
  image: string;
  liveUrl?: string;
  repositoryUrl?: string;
  responsibilities: string[];
  challenges?: string[];
  outcomes?: string[];
};
```

### Experience

```ts
export type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  achievements: string[];
  technologies?: string[];
};
```

### Skill group

```ts
export type SkillGroup = {
  label: string;
  skills: string[];
};
```

---

## 28. Component Requirements

### `ArchivePanel`

Reusable content container.

Props:

- title;
- icon;
- eyebrow;
- children;
- interactive;
- className.

### `ProjectCard`

Supports:

- compact variant;
- featured variant;
- image;
- metadata;
- links.

### `StatusBadge`

Variants:

- active;
- completed;
- available;
- unavailable;
- experimental.

Do not use saturated colors unless needed for semantic meaning.

### `ArchiveLabel`

JetBrains Mono uppercase metadata.

Examples:

- `INDEX // 001`
- `STATUS // ACTIVE`
- `STACK // NEXT.JS`

---

## 29. Content Rules

1. Do not use filler copy in production.
2. Do not claim technologies not actually used.
3. Do not invent performance or business metrics.
4. Use first person selectively.
5. Project descriptions should focus on the problem, contribution, and technical implementation.
6. Keep homepage summaries concise; move deeper detail into case studies.
7. Use consistent date formatting.

Recommended archive date style:
`2026 — PRESENT`

---

## 30. Empty and Error States

Projects with no live URL should simply omit the `Live Site` action.

Projects with no public repository should show:
`SOURCE // PRIVATE`
only when useful.

Contact failure state must give the visitor an alternate email option.

404 page should match the archive concept:

`RECORD_NOT_FOUND // 404`

with a clear button back to the index.

---

## 31. Security and Privacy

- never expose API secrets;
- validate server-side form payloads;
- rate-limit contact submissions if implemented;
- sanitize or safely handle user input;
- use environment variables for service credentials;
- avoid publishing personal information that is not intended to be public.

---

## 32. Analytics

Optional privacy-conscious analytics:

- Vercel Analytics;
- Plausible;
- Umami.

Useful events:

- project case-study opened;
- résumé downloaded;
- GitHub clicked;
- contact initiated;
- live project opened.

Do not add analytics that meaningfully harms performance or privacy without a reason.

---

## 33. Acceptance Criteria

The MVP is complete when:

- homepage has a clear identity/role hero;
- at least three real selected projects are presented;
- project details include role and technologies;
- experience is displayed chronologically;
- skills are grouped;
- About and Contact sections are complete;
- navigation works on desktop and mobile;
- site supports light and dark modes;
- focus states and keyboard navigation work;
- layout remains usable at 320px width;
- project screenshots are optimized;
- metadata/SEO basics are configured;
- no placeholder lorem ipsum remains;
- no horizontal overflow is present;
- reduced-motion settings are respected;
- production build succeeds without TypeScript errors.

---

## 34. Future Enhancements

Possible later phases:

- MDX case-study system;
- project search/filtering;
- command palette;
- writing/blog section;
- GitHub activity integration;
- live development status;
- downloadable PDF résumé;
- CMS integration;
- dynamic project metadata;
- bilingual content;
- subtle cursor effects;
- project architecture diagrams.

Any enhancement must preserve performance and the archive identity.

---

## 35. MVP Build Order

### Phase 1 — Foundation

- initialize Next.js + TypeScript;
- configure fonts;
- implement `globals.css`;
- create page shell;
- implement responsive navigation;
- add theme support.

### Phase 2 — Core content

- hero;
- selected projects;
- experience;
- skills;
- about;
- contact;
- footer.

### Phase 3 — Project system

- structured project data;
- project listing;
- dynamic case-study route;
- screenshot gallery.

### Phase 4 — Polish

- reveal animations;
- hover states;
- reduced-motion support;
- SEO metadata;
- OG image;
- accessibility audit;
- responsive QA.

### Phase 5 — Launch

- production build;
- Lighthouse test;
- broken-link check;
- deploy;
- connect custom domain;
- final content review.

---

## 36. Definition of Success

A visitor should be able to answer these questions within roughly one minute:

- Who is this developer?
- What kind of frontend work do they do?
- What technologies do they use?
- What real projects have they worked on?
- What was their role in those projects?
- How can I contact them or see their code?

If those answers are obvious while the interface remains fast and memorable, the portfolio is succeeding.
