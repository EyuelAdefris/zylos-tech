
# Zylos Tech — full marketing site

A premium dark-themed site for a software engineering company. Built on the project's actual stack (TanStack Start + React 19 + Tailwind v4 + Framer Motion + Lucide). The end result matches the Next.js spec 1:1 visually and behaviorally.

## Routes (file-based, `src/routes/`)

```
__root.tsx        global shell — sticky blur Navbar, animated background orbs, Footer
index.tsx         /            Home
about.tsx         /about       About + animated values timeline
services.tsx     /services    8 service cards with hover lift+glow
portfolio.tsx     /portfolio   6 project cards w/ AI-generated mockups
technologies.tsx  /technologies Frontend/Backend/DB/Cloud stack grid
why-us.tsx        /why-us      6 animated feature cards
contact.tsx       /contact     Form + info + map placeholder
sitemap[.]xml.ts  /sitemap.xml dynamic sitemap server route
api/contact.ts    POST handler — validates + sends email
```

Each route gets its own `head()` (title, description, og:title/description, canonical on leaf). JSON-LD `Organization` on root, `ContactPage` on `/contact`.

## Design system (`src/styles.css`)

Dark by default — `<html class="dark">` set in __root.tsx. Tokens in oklch:

- `--background` ≈ #0B1320 (Deep Navy)
- `--foreground` near-white
- `--primary` ≈ #2563EB (Electric Blue) + `--primary-glow` ≈ #60A5FA
- `--card` slightly lifted navy with 1px subtle blue border
- `--gradient-hero` radial navy→blue
- `--gradient-primary` linear primary→primary-glow
- `--shadow-glow` blue-tinted elevation for hover states
- Font: Inter (variable) via Google Fonts link in root head

Light-mode tokens kept but the site stays dark unless toggled.

## Shared components (`src/components/`)

- `Navbar.tsx` — sticky, backdrop-blur on scroll, animated underline on links, mobile drawer
- `Footer.tsx` — logo + quick links + services + socials + copyright
- `AnimatedBackground.tsx` — fixed layer: floating orbs, subtle grid pattern, geometric shapes (Framer Motion `animate` loops)
- `SectionHeading.tsx` — eyebrow + heading + subhead with scroll-reveal
- `ServiceCard.tsx` — icon, title, desc, hover lift + glow ring
- `ProjectCard.tsx` — image, tech chips, overlay-on-hover
- `TechIcon.tsx` — animated tech logo tile
- `TestimonialCarousel.tsx` — Embla carousel + fade transitions, 5 realistic placeholder quotes
- `Reveal.tsx` — wrapper using `whileInView` for staggered scroll reveals
- `MotionButton.tsx` — primary/ghost with arrow-slide hover

All components consume design tokens — no hardcoded colors.

## Page contents

**Home** — Hero (animated headline split, subhead, two CTAs, AI-generated dashboard image floating with parallax + framer wobble), 4 highlight stats, services preview (4 of 8 cards), portfolio preview (3 cards), why-us strip, testimonials carousel, CTA band.

**About** — Who we are, mission card, vision card, animated values timeline (Innovation / Excellence / Reliability / Transparency / Client Success).

**Services** — 8 cards in responsive grid (Web, E-commerce, Enterprise, SaaS, UI/UX, API, Database, Cloud).

**Portfolio** — 6 projects (ERP, Hotel Mgmt, Rental Mgmt, Tourism, E-commerce, SaaS) with AI-generated mockup images, tech badges, hover overlay.

**Technologies** — Four grouped grids (Frontend, Backend, DB, Cloud) with Lucide/SVG tech icons + hover glow.

**Why Choose Us** — 6 feature cards (Fast Delivery, Scalable Architecture, Secure Dev, Modern Tech, Long-Term Support, Global Standards).

**Contact** — Two-column: form (Name, Email, Company, Service select, Message; Zod-validated; toast feedback) on the left; contact info (email, phone, Addis Ababa location), embedded map iframe placeholder on the right.

## Contact form → email

1. Enable Lovable Cloud (required for email).
2. Set up Lovable's built-in email domain (user clicks Set up email domain — one-time DNS step).
3. Scaffold app email infra + a `contact-form-notification.tsx` React Email template.
4. Server route `src/routes/api/contact.ts` (POST): Zod validates body, then internally calls the transactional send route to deliver the notification to a configured recipient (asked at build time — default `hello@zylostech.com`).
5. Client posts via fetch, shows sonner toast on success/failure.

## Imagery

Generated with AI image gen and saved under `src/assets/`:

- `hero-dashboard.png` — premium dark SaaS dashboard mock, blue accents
- `project-erp.jpg`, `project-hotel.jpg`, `project-rental.jpg`, `project-tourism.jpg`, `project-ecommerce.jpg`, `project-saas.jpg`
- `og-default.jpg` — 1200×630 brand share image

## Animations (Framer Motion)

- Hero: word-by-word fade+rise, floating dashboard with infinite y-bob, gradient shimmer on headline
- Buttons: arrow translate-x on hover, color crossfade
- Cards: `whileHover` lift (-6px) + box-shadow glow, scale 1.02
- Sections: `whileInView` with stagger children (0.08s)
- Navbar: scroll-Y listener swaps blur+border classes
- Background: 3 orbs with looping x/y/scale, slow rotation on geometric shapes
- Page transitions: AnimatePresence fade between routes via __root.tsx

## SEO

- Per-route `head()` with unique title/description/og
- Canonical on leaves only
- JSON-LD: Organization (root), ContactPoint (contact), ItemList (portfolio)
- `public/robots.txt` (Allow all)
- Dynamic `sitemap.xml` server route listing all 7 pages
- Keywords woven into copy: "Web Development Ethiopia", "Software Development Ethiopia", "SaaS Development", "Enterprise Software Solutions"

## Dependencies to add

- `framer-motion`
- `embla-carousel-react` (for testimonials; already may exist via shadcn)
- `zod` (likely present) + `react-hook-form` + `@hookform/resolvers`

## Tech / scope notes

- Stack confirmed: TanStack Start (not Next.js). All Next-spec items (App Router, `metadata` export, `app/sitemap.ts`, `next/image`) translated to TanStack equivalents (`createFileRoute`, per-route `head()`, server route sitemap, plain `<img>` with imported assets — Vite hashes & optimizes them).
- Lighthouse 90+ targeted via SSR, hashed assets, lazy-loaded non-hero images, no heavy third-party scripts.
- "Embedded Google Map" rendered as an `<iframe>` to Google Maps embed for Addis Ababa (no API key needed).

## Out of scope unless requested

- Auth, blog/CMS, multi-language, analytics integration.
- Custom domain / DNS for email (user completes setup dialog).

---

Once approved, I'll enable Cloud, kick off the email-domain setup, generate images in parallel with scaffolding routes/components, wire the form, and add SEO + sitemap.
