---
name: bryl-minimal-design
description: Apply the bryl-minimal design language to any web UI or frontend restyle. Use this whenever the user wants a monochrome, editorial, terminal-inspired, typography-first, minimal interface, mentions bryl-minimal, says something should look like bryllim.com, or asks for a clean black-and-white design system for a site, app, dashboard, blog, portfolio, docs page, or component.
---

# bryl-minimal-design

Use this skill to design or restyle interfaces in the bryl-minimal visual language: monochrome, typography-led, spacious, quiet, and deliberate. Keep the user's current stack and structure. Translate the aesthetic into the implementation that already exists instead of introducing a new framework.

## What success looks like

The result should feel like a technical zine:

- monochrome instead of accent-driven;
- highly legible with strong type hierarchy;
- spacious rather than dense;
- understated but intentional in motion;
- minimal without becoming empty or generic.

If a screen feels too colorful, too rounded, too shadow-heavy, too glassy, or too decorative, pull it back toward restraint.

## Working approach

Apply the system in this order:

1. Collapse the palette to bryl-minimal tokens.
2. Recast hierarchy through font roles, casing, and tracking.
3. Simplify borders, radii, fills, and shadows.
4. Rework spacing and layout into a narrower, calmer structure.
5. Add theme support with semantic token remapping.
6. Add restrained motion and one halftone accent if it helps.

Preserve the product's usability and information hierarchy while changing the visual language.

## Core rules

### 1. Color

Use a strict monochrome system.

- No accent color.
- Use inversion, typography, or texture for emphasis.
- Use semantic tokens rather than hardcoded colors.
- Light theme:
  - background `#ffffff`
  - ink `#0a0a0a`
  - gray-50 `#fafafa`
  - gray-100 `#f5f5f5`
  - gray-200 `#e9e9e9`
  - gray-300 `#d4d4d4`
  - gray-400 `#a3a3a3`
  - gray-500 `#737373`
- Dark theme:
  - background `#0c0c0f`
  - ink `#f4f4f5`
  - gray-50 `#18181b`
  - gray-100 `#1e1e22`
  - gray-200 `#2a2a30`
  - gray-300 `#3a3a42`
  - gray-400 `#8a8a92`
  - gray-500 `#a0a0a8`

Use these rules:

- body text uses ink;
- secondary text uses gray-500;
- tertiary labels use gray-400;
- borders and dividers use 1px gray-200;
- filled surfaces are rare and subtle;
- the loudest emphasis on a screen is usually an inverted chip or pill.

### 2. Typography

Use four clear font roles whenever the stack allows it:

- body/UI: `Geist`, fallback `system-ui, sans-serif`
- technical labels: `Geist Mono`, fallback `ui-monospace, monospace`
- display: `Geist Pixel`, fallback `Geist Mono, monospace`
- long-form text only: `Source Serif 4`, fallback `Georgia, serif`

Hierarchy comes from font choice and casing more than huge size jumps.

- UI body text: `15px`
- small UI text: `13px`
- micro-labels: `9px` to `11px`, uppercase mono, wide tracking
- page titles: around `3rem`, pixel font, line-height `1`
- article headings: compact and controlled, around `1.1rem` to `1.6rem`

Use lowercase for page titles and most standalone labels. Reserve uppercase for mono metadata and micro-labels.

### 3. Layout and spacing

Favor narrow, readable layouts.

- reading width: around `42rem`
- broader content pages: up to `56rem`
- desktop sidebar width: around `14rem`
- mobile padding: `1rem`
- desktop padding: `1.5rem`
- card padding: `1.25rem`
- section spacing: generous, around `3.5rem`
- internal component gaps: around `0.75rem`

Use hairline rules as separators instead of large filled blocks. Grids should feel tidy and modest, not like a SaaS dashboard kit.

### 4. Components

Use a restrained component recipe:

- borders: `1px` gray-200
- radii:
  - large cards `16px`
  - medium cards `12px`
  - small elements `8px`
  - inputs `6px`
  - pills fully rounded
- shadows:
  - soft, black, low-alpha
  - much weaker in dark mode

Specific guidance:

- tags and pills use mono micro-label styling;
- primary buttons can invert to black-on-white or white-on-black;
- cards may use subtle gray-50 fills and optional inset framing;
- images can scale slightly on hover, up to about `1.04`;
- inputs stay minimal and quiet.

### 5. Motion

Motion should feel brief and settled.

- micro-interactions: about `200ms`
- card hover transitions: `350ms` to `420ms`
- page entrances: fade up from about `12px` below over `700ms`
- stagger list/section entrances by around `70ms`
- theme transitions: around `500ms`

Use a strong ease-out curve such as `cubic-bezier(0.16, 1, 0.3, 1)`.

Always honor `prefers-reduced-motion`. The UI must still feel complete with motion disabled.

### 6. Halftone texture

Use the dot texture as a restrained signature, not wallpaper.

- tiny round dots on about a `9px` grid
- optionally denser at `6px` or `5px`
- light theme dots: near-black with high transparency
- dark theme dots: off-white with moderate transparency

Fade the texture out with masks so it dissolves softly. Use it in one or two places per page at most.

## Accessibility and quality floor

Do not sacrifice usability for aesthetic purity.

- keep semantic landmarks intact;
- maintain readable contrast;
- ensure keyboard access and visible focus states;
- honor both color-scheme and reduced-motion preferences;
- keep labels understandable, even when stylized;
- do not make important actions rely on texture or subtlety alone.

## Restyling an existing project

When the user asks for a redesign or polish pass:

1. Inspect the existing structure first.
2. Keep the information architecture and interaction model unless the user asks for structural change.
3. Replace color, type, spacing, borders, radii, and shadows with bryl-minimal equivalents.
4. Reduce visual noise before adding flourishes.
5. Add at most one memorable texture or display-type moment per major view.

If the result starts to feel like a generic Tailwind layout, it is drifting away from the skill.

## Output guidance

When applying this skill:

- explain the chosen design direction briefly;
- implement the changes directly in code when possible;
- prefer semantic tokens or CSS variables for theme values;
- keep the solution maintainable and reusable;
- match the project's existing framework and conventions.

## Quick checks before finishing

Before you stop, verify:

- the page is still readable at mobile widths;
- black-and-white contrast remains strong in both themes;
- labels, buttons, and cards share one coherent system;
- the design feels quieter and more editorial than before;
- the halftone motif, if used, is subtle.
