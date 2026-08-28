# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences reach oldgrammar.com:

- **App users** looking for support or a policy document for a shipped app. They arrive from an app store listing or an in-app link, usually with a problem or a question, and expect a real human address, not a form that disappears.
- **App store reviewers** verifying that a published app exposes a working support contact. They check that the link resolves and that the route back to the developer is unambiguous.
- **Visitors curious about the studio**, arriving at the root domain to see what Old Grammar is and what it has made.

## Product Purpose

oldgrammar.com is the public face of Old Grammar, LLC: it says what the studio is, lists its projects, and carries the support and legal surfaces those projects are required to publish. Success is a visitor reaching the right project page, the right policy, or the right inbox without a detour.

## Positioning

An independent studio working since 2016 across fashion, hip hop, and tech, shipping its own projects under one name. The site is the studio's own record, not a services pitch.

## Operating Context

- Projects shipped to date: **Two, Tree** (a private daily journal for iOS and Android; no account, data stays on the device) and **Maybe Brunch** (maybebrunch.ing, offsite).
- Each project owns a route under `/projects/<project>/` and may carry its own visual world scoped to that route. Two, Tree carries the app's own light laurel palette and platform type in a `.tt`-scoped layout; it must not leak to the rest of the site.
- Apple's App Store Review Guidelines require a reachable support contact for a published app. The support inbox for every project is `support@oldgrammar.com`.

## Capabilities and Constraints

- Astro 7 with `output: "server"`, deployed as a Cloudflare Worker via `@astrojs/cloudflare`. Custom domain `oldgrammar.com`.
- Content pages set `export const prerender = true`; only routes that need a request handler run on the server.
- Tailwind CSS v4 via `@tailwindcss/vite`, tokens declared in `@theme` in `src/styles/global.css`. Adobe Typekit supplies `museo-sans-rounded` and `museo-slab`.
- Biome formats and lints. pnpm is the package manager.
- `/projects/index.astro` exists but is empty — an unbuilt route.
- Outbound email uses Cloudflare Email Service through a Worker binding. Spam protection uses Cloudflare Turnstile with server-side siteverify.

## Brand Commitments

- Name: **Old Grammar** (legal entity Old Grammar, LLC).
- Site palette: `primary` red ramp (`#ea3924` at 600) and `accent` blue ramp, on a `#231c1c` ground. Serif display is `museo-slab` in uppercase; body is `museo-sans-rounded`.
- Standing line on the home page: "Fashion / Hip Hop / Tech", "Since 2016", "Working on a new perspective for 2026."
- Voice is plain and unsold. The Two, Tree pages set the register: short declaratives, no marketing adjectives, no exclamation.
- Logo assets: `src/assets/Old-Grammar-dark.png`, `public/Old-Grammar-logo.png`, `public/favicon.png`.

## Evidence on Hand

- Real: the Two, Tree Terms of Use and Privacy Policy (`content/two-tree/tou-and-privacy.md`), the Two, Tree laurel marks (`src/components/TwoTreeMarks.astro`), the logo files, the Maybe Brunch link.
- Absent, and not to be invented: user counts, download numbers, testimonials, press, awards, client lists, revenue, team size, and app store URLs. The Two, Tree store links are still `"#"` placeholders.

## Product Principles

1. **Every project keeps its own world.** A project page may look like its app; the tokens stay scoped to that route.
2. **State facts, sell nothing.** The site's register is a record, not a pitch.
3. **The support path must never dead-end.** Any surface a store listing points to must resolve and must name a reachable human address.
4. **Do not invent proof.** Numbers, quotes, and credentials appear only when they exist.

## Accessibility & Inclusion

No product-specific standard has been established. The incumbent code already sets visible focus rings, honors `min-height: 44px` touch targets, and keeps decoration out of the accessibility tree; new work matches that floor.
