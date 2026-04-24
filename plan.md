# Latitude44 Landing Page — Implementation Plan

## Overview
Premium, dark-themed landing page for **Latitude44** — a New Zealand tech consultancy (domain: latitude44.co.nz).

## Business Context
**Latitude44** provides:
1. Front-end web development
2. App development
3. AI integration tools and methods
4. Consulting
5. Education
6. Product sales
7. Hardware support
8. Data recovery (3.5" floppy disks, Super8, VHS, hard drives, troubleshooting upgrades)

## Contact
- **Email:** admin@latitude44.co.nz
- **Address:** 1 Terrace Road, Leithfield, Canterbury, New Zealand

## Brand Identity (Option 2 of provided image)
- **Logo:** Stylized falcon head facing right with integrated gold lightning-bolt/mountain below; wordmark `LATITUDE44` (44 in gold)
- **Tagline:** _Digital Solutions. Precision. Performance._
- **Color Palette:**
  - Navy `#0A1A2A`
  - Gold `#C8A25A`
  - Light Gray `#E6E6E6`
  - White `#FFFFFF`
- **Typography:** Montserrat — Extra Light / Medium / Semi Bold

## Design Direction
- Dark background, minimal, classy, corporate feel
- Video background (NZ falcon/mountains) on hero
- 3-image slider (services imagery)
- Minimal contact form
- SVG favicon derived from falcon + lightning logo
- SEO meta tags targeted at NZ customers (Canterbury, Leithfield)

## Page Structure
1. **Hero** — full-viewport video background, logo, tagline, CTA
2. **Image Slider** — 3 rotating images (web/app code, AI integration, hardware/data recovery)
3. **Services** — 7 cards with icons + descriptions
4. **Contact** — minimal form (Name, Email, Subject, Message) + address + email link
5. **Footer** — logo, address, email, copyright

## User Choices (Confirmed)
1. **Contact form:** SendGrid email to `admin@latitude44.co.nz` + store in MongoDB as backup
2. **Video background:** Royalty-free Pexels NZ mountains clip
3. **Slider images:** Services-focused (code, AI, hardware repair)
4. **Services:** 7 individual cards (icon + description)
5. **Sections:** Hero → Slider → Services → Contact

## Tech Stack
- **Backend:** FastAPI + MongoDB + SendGrid (via `sendgrid` SDK)
- **Frontend:** React + shadcn/ui + Tailwind CSS + Framer Motion + Swiper
- **Fonts:** Montserrat (Google Fonts)

## Phases
### Phase 1 — POC
**SKIPPED.** This is a static landing page with a single well-understood integration (SendGrid). No complex core workflow to prove in isolation.

### Phase 2 — Full Build
**Backend:**
- `POST /api/contact` — validate, store in Mongo, send via SendGrid
- `GET /api/contact-submissions` (admin — basic token guard) — list submissions
- `GET /api/` — health check

**Frontend:**
- `index.html` — SEO meta, Open Graph, Twitter card, SVG favicon, Montserrat font
- `App.js` — single-page scrollable layout
- Components: `Navbar`, `Hero` (video bg), `Slider` (Swiper), `Services` (7 cards), `Contact` (form), `Footer`, `Logo` (inline SVG)
- Assets: SVG logo, SVG favicon, service images (Unsplash), background video (Pexels)
- Responsive + mobile-friendly
- Toast feedback on form submit

### Phase 3 — Testing & Polish
- Backend testing via `testing_agent_v3` (contact endpoint, validation, Mongo storage)
- Frontend testing via `testing_agent_v3` (navigation, slider, form UX, responsive)
- Bug fixes
- Final screenshot + delivery

## User Stories
- **US1:** As a NZ visitor, I land on a dark, premium hero with a NZ-themed video background and immediately understand what Latitude44 does.
- **US2:** As a visitor, I can scroll and see a rotating slider of service imagery.
- **US3:** As a potential client, I can view all 7 services clearly laid out in individual cards.
- **US4:** As a lead, I can submit a contact form and receive confirmation; admin@latitude44.co.nz receives the message.
- **US5:** As an admin, every submission is stored in MongoDB as a backup.
- **US6:** As a search engine, I find well-structured meta tags targeting NZ local SEO keywords.
- **US7:** As a user on mobile, the site is fully responsive and legible.
- **US8:** As a user, I see the SVG favicon (falcon) in the browser tab.

## SEO Targeting
Primary keywords: "web development Canterbury NZ", "app development New Zealand", "AI integration NZ", "data recovery Canterbury", "Leithfield tech services", "VHS transfer NZ", "floppy disk recovery NZ", "Super8 digitisation NZ".

Meta tags required:
- `<title>` — Latitude44 | Digital Solutions, Precision, Performance | Canterbury NZ
- `<meta name="description">` — optimised for NZ local SEO
- `<meta name="keywords">`
- Open Graph + Twitter cards
- `<link rel="canonical">` to https://latitude44.co.nz
- Structured data (JSON-LD LocalBusiness)

## Status
- [x] Requirements gathered
- [x] Plan created
- [ ] Phase 2 — Full build
- [ ] Phase 3 — Testing & delivery
