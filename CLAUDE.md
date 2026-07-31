@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A UI-only marketing site for a fictional Bengaluru photography/videography studio ("VP Films"). No backend, no auth, no database — the contact form is client-side only (`src/components/site/contact-form.tsx`) and doesn't submit anywhere. All content (services, packages, portfolio items, testimonials, FAQs, team) is hardcoded in `src/lib/data.ts`. Images are Indian wedding/event photography sourced from Unsplash, grouped by category and resolved through `src/lib/images.ts`.

## Commands

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build (also runs the TypeScript check)
- `npm run lint` — ESLint
- `npx tsc --noEmit` — type-check only

There is no test suite.

## Stack and version-specific gotchas

This project pulls in bleeding-edge major versions of several libraries, each with breaking changes relative to what's commonly documented/trained on. Don't assume older-version APIs for these:

- **Next.js 16** (App Router, Turbopack is the default bundler for both `dev` and `build`). `params` and `searchParams` in `page.js`/`layout.js` are `Promise`s and must be `await`ed — see `src/app/services/[slug]/page.tsx` for the pattern (`generateStaticParams` + async `generateMetadata`/page component).
- **Tailwind CSS v4** — no `tailwind.config.ts`. Theme tokens (colors, fonts, radii) are defined with `@theme inline` in `src/app/globals.css`. The gold accent is `--color-gold` / `text-gold` / `bg-gold`; a heading font (`Bricolage Grotesque`) is wired up as `--font-heading` → `font-heading` utility.
- **shadcn/ui `base-nova` style, built on `@base-ui/react`, not Radix.** Composition uses a `render` prop instead of `asChild`:
  ```tsx
  // Wrong (Radix pattern) — silently breaks navigation, logs a console error
  <Button asChild><Link href="/contact">Book</Link></Button>
  // Right (Base UI pattern)
  <Button render={<Link href="/contact" />} nativeButton={false}>Book</Button>
  ```
  `nativeButton={false}` is required whenever `render` points at a non-`<button>` element (e.g. `Link`) — Base UI's `Button`/`SheetClose`/etc. assume a native button by default and log an accessibility warning otherwise.
- **lucide-react v1.x dropped all brand/social icons** (Instagram, Facebook, YouTube, etc. don't exist as exports). Hand-rolled replacements live in `src/components/icons/social.tsx` — add more there if new social icons are needed rather than importing from `lucide-react`.
- **Scroll-reveal is a plain `IntersectionObserver` + CSS transition** (`src/components/motion/reveal.tsx`: `Reveal`, `RevealGroup`, `RevealItem`), not framer-motion's `whileInView`. On this stack, `whileInView` combined with `variants`/stagger/delay only ever animated the first element in a set — every later sibling froze mid-transition. If you reach for scroll animations elsewhere, prefer extending `Reveal` rather than reintroducing `whileInView`.

## Layout architecture

The navbar (`src/components/layout/navbar.tsx`) is `position: fixed` (not `sticky`) so it can sit transparently over full-bleed hero images and turn opaque on scroll. Because of that:
- `<main>` in `src/app/layout.tsx` has `pt-16 md:pt-20` (navbar height) so normal page content isn't hidden underneath it.
- Any section meant to bleed edge-to-edge behind the transparent navbar (the home `Hero`, and `PageHero` when given an `imageSrc`) cancels that padding with `-mt-16 md:-mt-20`.

## Content model

Everything content-driven — services, packages, portfolio items, testimonials, FAQs, nav links, site config, team, stats — is centralized in `src/lib/data.ts`. Page components map over this data rather than hardcoding copy, so adding/editing a service, package tier, or testimonial only requires editing that file. `src/app/services/[slug]/page.tsx` derives one static page per entry in `services` via `generateStaticParams`, using a shared template (Overview / What's Included / Ideal For / Sample Gallery / Package Options / FAQs / CTA).

Images are never linked directly to raw Unsplash URLs; `categoryImage(category, index, opts)` and `portraitImage(genderCategory, index, size)` in `src/lib/images.ts` index into category-scoped pools of Unsplash photo IDs (wedding, haldi, mehendi, prewedding, reception, engagement, baby, maternity, housewarming, corporate, product, drone, cinematic, birthday, reels, bride, groom, headshotWoman, headshotMan — all confirmed to resolve with a 200 before being added). Reuse these helpers and pick the pool matching the subject rather than adding fresh Unsplash URLs, unless you first verify the photo ID actually resolves.

## Directory layout

- `src/components/ui/` — shadcn primitives (generated; prefer `npx shadcn add <component>` over hand-writing new ones)
- `src/components/layout/` — `Navbar`, `Footer`
- `src/components/home/` — home-page-only sections (currently just `Hero`)
- `src/components/site/` — reusable page-building blocks used across routes (`PageHero`, `SectionHeading`, `ServiceCard`, `PackageCard`, `TestimonialCard`, `PortfolioGrid`, `FaqAccordion`, `CtaSection`, `ContactForm`, `ThemeToggle`)
- `src/components/motion/` — the `Reveal`/`RevealGroup`/`RevealItem` scroll-reveal system
- `src/components/icons/` — hand-rolled icons missing from lucide-react
