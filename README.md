# GTC Prime website

A responsive Next.js App Router website using JavaScript (no TypeScript application files), Tailwind CSS, Motion for React and Font Awesome. Six page types are available in English and Arabic, with right-to-left support.

## Run locally

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

The production site is statically exported to `out/`. `npm run dev` runs the local Next.js app on port 4173. `next start` is not used for static exports; serve `out/` with a static host.

## Design settings

- `tailwind.config.js`: primary `#293b93`, secondary `#b68756`, black text, shared `display` and `h1`–`h6` sizes, font families.
- `app/globals.css`: base heading rules, shared components, responsive breakpoints.
- `lib/content.js`: English and Arabic dictionaries, with matching structure. Poppins is self-hosted; Noto Sans Arabic covers Arabic characters.
- `components/Website.js`: shared page components, mobile navigation, market tabs, audience disclosures, Motion fade-up animations.
- `app/[...segments]/page.js`: static localized routes.

## Content and integrations

The first version uses edited content based on the public GTC Prime site. Existing numerical commercial claims and historical event promotions were not carried into the new copy. Institutional descriptions and regulatory text require the company's review before a public domain migration. Arabic is an initial translation for review.

The contact form validates inputs and prepares an email draft to the existing `support@gtcprime.com` address. It does not submit or store enquiries on a server, connect a CRM, or claim a message has been sent. The client portal and company profile link to the existing services. No WordPress backend connection has been added.

Current route paths preserve `/about/`, `/liquidity/`, `/connectivity/`, and `/risk-management/`. Both `/contact/` and the existing `/contact-us/` path are supported. English starts at `/`; Arabic starts at `/ar/`.

## Hosting

This project is configured for a private static Sites preview. The original `gtcprime.com` domain has not been modified. Source is synced with the Site repository.

## Assets

- GTC Prime logo: https://gtcprime.com/wp-content/uploads/2025/10/20251024-193458.webp (rendered in monochrome for the light theme).
- Hero sculpture: generated original asset, edited to remove the backdrop with a true alpha channel.
- The hero artwork has a continuous 9-second float/tilt animation. It stops when offscreen and respects reduced-motion preferences.
- Company profile: https://gtcprime.com/wp-content/uploads/2023/04/GTC-Prime-Profile-.pdf

## Checks

The production build verifies compilation and generates every English/Arabic route. Automated static checks verify route links, bundled assets, theme tokens and translation-key parity. A visual browser QA pass is still recommended before public launch.
