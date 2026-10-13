# CLAUDE.md — Premium Site Project

> Drop this file into the root of any Claude Code project. It tells Claude how to build websites that feel premium instead of generic.
>
> No setup needed. Claude reads it automatically every time you open the project.

---

## What this project builds

Modern, motion-driven websites with a premium agency feel. Think editorial typography, scroll-triggered animations, video-first heroes, restraint over decoration.

The output should look like a $2k+ client site, not a template.

## Default stack

- **Next.js (App Router)** for new projects, plain HTML+CSS+JS for one-pagers
- **Tailwind CSS** for styling
- **Motion** library for all animations (`npm install motion`)
- **TypeScript** when the project has more than 3 files
- **Vercel** for deployment

If the user explicitly asks for a different stack, follow them. Otherwise default to the above.

## Skills to use proactively

When relevant, use these skills. `frontend-design` ships in this repo; the rest are installed by `./setup.sh`.

- `frontend-design` for aesthetic direction and non-templated UI choices
- `design-taste-frontend` for the overall structure and mood of landing / intro pages (dials: VARIANCE, MOTION, DENSITY, 1-10)
- `emil-design-eng` for polish: spacing, press feel, popup direction, animation easing
- `impeccable` to catch "AI-looking" patterns. After building, run `npx --yes impeccable@latest detect <html file or folder>` (HTML, never a lone CSS file) and fix what it reports
- `ui-ux-pro-max` (optional plugin) for palettes, font pairings, product-type patterns

If a skill isn't installed, tell the user to run `./setup.sh`. Don't refuse to do the task without it.

## Verify before declaring done

Use the Playwright MCP (`.mcp.json`) to open the dev server, capture desktop (1440px) and mobile (390px) screenshots, and fix spacing, overflow, alignment and mobile-menu issues. Compare before/after. Never say "done" without having looked at both.

## Before you build

If the user gave no brief, ask once for: industry, audience, desired feeling, 1-2 reference sites, pages, brand colors/fonts. Point them to `BRIEF-TEMPLATE.md`. Reference sites matter more than any skill.
Skills don't supply taste, and first output is a draft: expect one or two fix rounds.

## Hero section guidelines

The hero is the first 100% of the viewport. It carries the entire feel of the site. Treat it accordingly.

**Default approach for hero:**

1. Use a video background (looped, muted, autoplay) when one is provided
2. If no video, use an animated gradient or a single high-quality image with subtle motion
3. Always add a 25-35% dark overlay between the background and the foreground text for readability
4. Headline should be 5 to 9 words max, large display font, tight letter spacing
5. One CTA button only, never two competing ones

**Video hero pattern (preferred):**

```jsx
<section className="relative h-screen overflow-hidden">
  <video
    autoPlay loop muted playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/hero.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/30" />
  <div className="relative z-10 flex h-full items-center justify-center">
    {/* headline + CTA */}
  </div>
</section>
```

If the user supplies a `.gif` instead of `.mp4`, use a `<picture>` or `<img>` tag and apply the same overlay.

## Motion guidelines

Use the **Motion** library (modern successor to Framer Motion). Import as `import { motion } from "motion/react"`.

**Default scroll-triggered fade-in for sections:**

```jsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  {/* section content */}
</motion.div>
```

**Rules for motion:**

- Subtle over loud. 24px translation max, 0.6-0.8s duration
- Always `viewport={{ once: true }}` so animations don't replay on scroll-back
- Add `prefers-reduced-motion` fallback (motion library handles this if you set the global option)
- Never animate layout properties on hover (use `transform` and `opacity` only, for performance)

**Patterns to reach for:**

- Slow camera push-in on hero video (handled in the video file itself, not in CSS)
- Letter-by-letter or word-by-word headline reveal on first paint (use the `motion` `whileInView` with `staggerChildren`)
- Parallax on hero background image (use `useScroll` + `useTransform`)
- Cursor follower for premium feel (small accent dot or blur, not loud)

## Typography

Default to one of these pairings (choose based on brand vibe, ask the user if unsure):

| Vibe | Heading font | Body font |
|---|---|---|
| Modern tech | Geist | Inter |
| Editorial | GT Sectra / Tiempos | Söhne |
| Vintage / heritage | GT America Extended | Söhne |
| Minimalist Swiss | Helvetica Now | Inter |
| Playful brand | Migra / Migra Italic | Inter |

Always load fonts via `next/font` if Next.js, or via the official font CDN if vanilla. Never load 6 weights when 2 will do (it slows the page).

**Default sizes:**

- Display headline: 72-96px on desktop, 40-48px mobile
- Section heading: 40-56px desktop, 28-32px mobile
- Body: 16-18px desktop, 16px mobile, line-height 1.55-1.65

## Color palette

If the user doesn't specify, default to a **dark mode premium palette**:

- Background: `#0A0A0F` (near-black, never pure black)
- Surface: `#13131A`
- Text primary: `#F5F5F0` (warm white)
- Text muted: `#9C9CA8`
- Accent: pick ONE saturated accent based on brand (cyan, magenta, lime, amber). Never two competing accents.

For light mode premium:

- Background: `#F8F7F4` (warm off-white, never pure white)
- Surface: `#FFFFFF`
- Text primary: `#0A0A0F`
- Text muted: `#5A5A66`

## Components

Prefer importing components over building from scratch. Default registries:

- **21st.dev** ([21st.dev](https://21st.dev)) for premium React/Tailwind components
- **Magic UI** ([magicui.design](https://magicui.design)) for free motion-first accents (animated counters, marquees, aurora backgrounds)

Workflow when the user asks for a form, a marquee, a footer, a pricing table:

1. Suggest pulling from 21st.dev or Magic UI first
2. Restyle the imported component to match the project's color and font palette
3. Don't rebuild from scratch unless the registries don't have it

## Anti-patterns (don't do these)

- ❌ Bootstrap, Material UI, jQuery
- ❌ Generic Tailwind starter templates copied wholesale
- ❌ Stock photo backgrounds (use AI-generated or branded illustrations)
- ❌ Two competing CTAs in the hero
- ❌ Carousels with auto-play (kill conversion, also accessibility nightmare)
- ❌ Pop-ups before the user has scrolled
- ❌ Loading spinners longer than 1 second (precompute or skeleton-load)
- ❌ Animations on every element (signal of trying too hard)
- ❌ More than 3 fonts on a single page
- ❌ Hero text smaller than 40px on desktop
- ❌ Pure black `#000000` or pure white `#FFFFFF` backgrounds (always slightly off)

## File structure (Next.js App Router default)

```
project/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── hero.tsx
│   ├── about.tsx
│   ├── footer.tsx
│   └── ui/        ← imported from 21st.dev or Magic UI
├── public/
│   ├── hero.mp4
│   └── og-image.jpg
├── tailwind.config.ts
└── package.json
```

Keep components small. One file per section. If a section grows past 80 lines, split it.

## Build process recommendation

Ask the user to follow the **3-round pattern** when starting a new build:

1. Round 1: structure only (sections, typography, no animations)
2. Round 2: add the video hero + scroll-triggered fade-ins
3. Round 3: polish (button hovers, spacing tweaks, micro-details from references)

Do NOT try to do all three in one massive prompt. The result is always worse.

## When the user shows you a reference site

If the user pastes a screenshot or URL of a reference site they like:

1. Identify 3 specific things you can replicate (the hero motion, the typography stack, the section spacing)
2. Confirm with the user which 3 they want copied
3. Build only those 3, not a 1:1 replica (legal + brand reasons)

## When asked about pricing or business

If the user asks how much to charge for the site you're building, redirect to the documentation they have. Don't give pricing advice in code.

If asked about deploying or making money, redirect to the workflow PDF or external resources. This file is about building, not selling.

## Tone for code comments

- Short. One line max per comment.
- Only when the WHY isn't obvious from the code itself.
- Never explain WHAT the code does (the code already does that).

## Updates to this file

This config evolves. If you want to update it, edit `CLAUDE.md` directly and commit. Claude reads the latest version each time the project opens.

---

*This config is licensed for personal and client use. Redistribute freely.*
