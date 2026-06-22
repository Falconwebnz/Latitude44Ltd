# Latitude44 corporate site

Digital Solutions. Precision. Performance. — Engineered in New Zealand.

- **Live:** https://latitude44.co.nz
- **Product:** https://latitude44.app (Claude Learn)
- **Contact:** latitude44@protonmail.com

## Stack

- **Frontend** (in `frontend/`): React 19, React Router 7, Tailwind CSS, shadcn/ui, Framer Motion, Swiper, lucide-react
- **Backend** (in `backend/`, optional): FastAPI + Motor + SendGrid for the contact form
- **Build target:** GitHub Pages (static) on the apex domain `latitude44.co.nz`

## Local development

```bash
# Frontend
cd frontend
yarn install
yarn start          # http://localhost:3000

# Backend (optional, only if running the FastAPI contact API locally)
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8001
```

## Production build

```bash
cd frontend
yarn build          # outputs to frontend/build/
```

## Deploy to GitHub Pages

**Full step-by-step walkthrough:** see [`DEPLOYMENT.md`](./DEPLOYMENT.md) for
the complete guide covering the GitHub repo, Formspree signup, Porkbun DNS,
HTTPS enforcement and day-2 operations.

Quick summary:

A GitHub Actions workflow at `.github/workflows/deploy.yml` builds and publishes
to Pages on every push to `main`. To wire it up:

1. Push this repo to GitHub (any name; e.g. `latitude44-site`).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Go to **Settings → Secrets and variables → Actions → Variables**, add:
   - `REACT_APP_FORMSPREE_ID` — your Formspree form ID (signup at https://formspree.io)
   - `REACT_APP_BACKEND_URL` — only if you also host the FastAPI backend
4. Push to `main`. Within ~2 minutes the site is live at `https://<your-user>.github.io/<repo>`.

## Custom domain (latitude44.co.nz on Porkbun)

- `frontend/public/CNAME` already contains `latitude44.co.nz` so GitHub Pages remembers it on every deploy.
- Add these DNS records at Porkbun (Domain Management → DNS Records):

  | Type  | Host  | Answer                                                | TTL |
  | ----- | ----- | ----------------------------------------------------- | --- |
  | A     | (blank or `@`) | `185.199.108.153`                            | 600 |
  | A     | (blank or `@`) | `185.199.109.153`                            | 600 |
  | A     | (blank or `@`) | `185.199.110.153`                            | 600 |
  | A     | (blank or `@`) | `185.199.111.153`                            | 600 |
  | CNAME | `www`           | `<your-github-username>.github.io.`         | 600 |

- In the GitHub repo, **Settings → Pages → Custom domain**, enter `latitude44.co.nz`, save, then tick **Enforce HTTPS** once DNS has propagated (usually 5–15 minutes).

## Contact form

The contact form lives in `frontend/src/components/ContactSection.js`. It auto-detects which backend to use:

1. **FastAPI backend** (`REACT_APP_BACKEND_URL` set) — posts to `/api/contact`, stores in MongoDB, optionally emails via SendGrid.
2. **Formspree** (`REACT_APP_FORMSPREE_ID` set, no backend) — posts directly to Formspree which forwards to `latitude44@protonmail.com`.
3. **Disabled** (neither set) — form shows a friendly message asking visitors to email instead.

For GitHub Pages hosting we recommend option 2 (Formspree) — 100% free for up to 50 submissions/month and no backend needed.

## License & copyright

© Latitude44 (NZ) Limited. All rights reserved.
