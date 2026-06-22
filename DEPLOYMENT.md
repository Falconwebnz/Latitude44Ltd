# Latitude44 — Free Hosting on GitHub Pages

A step-by-step guide to ship `latitude44.co.nz` for **NZ$0/month** using
GitHub Pages + Porkbun DNS + Formspree (for the contact form).

> **TL;DR** — push to `main`, GitHub Actions builds the React frontend, GitHub
> Pages serves it on the apex domain, and Formspree handles contact-form
> submissions. No backend, no servers, no monthly bills.

---

## 0 · What's already wired up

These files are committed and ready — you don't have to touch them:

| File / folder | Purpose |
| --- | --- |
| `.github/workflows/deploy.yml` | GitHub Actions: builds `frontend/` on every push to `main` and deploys to Pages. |
| `frontend/public/CNAME` | Tells GitHub Pages to serve the site on `latitude44.co.nz`. |
| `frontend/public/404.html` | SPA fallback so deep links (e.g. `/work`, `/contact`) work after a hard refresh. |
| `frontend/public/robots.txt`, `sitemap.xml`, `og-image.jpg` | SEO essentials. |
| `frontend/.env.example` | Template listing the two build-time environment variables. |
| `frontend/src/components/ContactSection.js` | Contact form that auto-detects FastAPI vs Formspree. |

You only need to: create a GitHub repo, sign up for Formspree, add two
variables, and point Porkbun's DNS at GitHub.

---

## 1 · Push the code to GitHub

```bash
cd /app                       # or wherever you cloned this repo
git init                      # only if not already a git repo
git add -A
git commit -m "Initial Latitude44 site"

# Create an empty repo at https://github.com/new (e.g. "latitude44-site").
# Don't initialise it with a README — just take the URL it gives you.

git branch -M main
git remote add origin git@github.com:<your-username>/latitude44-site.git
git push -u origin main
```

> Tip: the repo can be **public or private** — GitHub Pages works for both
> on a personal account.

---

## 2 · Sign up for Formspree (free contact form backend)

The site has no live backend on GitHub Pages, so the contact form posts to
Formspree, which emails submissions to `latitude44@protonmail.com`.

1. Go to https://formspree.io → **Sign up** (free tier = 50 submissions/month).
2. Click **New form** → name it "Latitude44 Contact" → set the email to
   `latitude44@protonmail.com`.
3. Copy the 8-character **form ID** from the endpoint URL — it's the suffix
   in `https://formspree.io/f/xxxxxxxx`.

Keep that ID handy for the next step.

---

## 3 · Enable GitHub Pages + add build variables

In your GitHub repo:

1. **Settings → Pages**
   - **Source:** `GitHub Actions` (don't pick "Deploy from a branch").

2. **Settings → Secrets and variables → Actions → Variables → New repository variable**
   Add these two **variables** (not secrets — they're build-time, not runtime):

   | Name | Value |
   | --- | --- |
   | `REACT_APP_FORMSPREE_ID` | the 8-char ID from Step 2 |
   | `REACT_APP_BACKEND_URL` | **leave empty** (no FastAPI backend on Pages) |

3. **Actions tab → Build & Deploy Latitude44 to GitHub Pages → Run workflow** (or just push another commit).

After ~2 minutes you'll see a green check, and the site is live at
`https://<your-username>.github.io/<repo-name>` (we'll move it to
`latitude44.co.nz` next).

---

## 4 · Point `latitude44.co.nz` (Porkbun) at GitHub Pages

GitHub's documented apex IPs (don't change these):

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

In **Porkbun → Domain Management → DNS Records** for `latitude44.co.nz`:

1. **Delete** any existing `A`, `ALIAS` or `CNAME` records on the root (`@`)
   and on `www`. Keep your `MX` / `TXT` records intact (those handle email).

2. **Add** these records:

   | Type  | Host  | Answer | TTL |
   | ----- | ----- | ------ | --- |
   | `A`     | `@` *(or blank)* | `185.199.108.153` | 600 |
   | `A`     | `@` | `185.199.109.153` | 600 |
   | `A`     | `@` | `185.199.110.153` | 600 |
   | `A`     | `@` | `185.199.111.153` | 600 |
   | `CNAME` | `www` | `<your-username>.github.io.` *(trailing dot included)* | 600 |

3. Wait for DNS to propagate. Check with:

   ```bash
   dig +short latitude44.co.nz
   # Should return the four 185.199.x.153 addresses.
   ```

   Most Porkbun changes show up in 2–10 minutes.

---

## 5 · Lock in the custom domain + HTTPS

Back in the GitHub repo:

1. **Settings → Pages → Custom domain** → enter `latitude44.co.nz` → **Save**.
2. GitHub will run a DNS check. Once it shows ✓ DNS check successful…
3. Tick **Enforce HTTPS**. (Greyed out at first — wait 5–15 min for the
   Let's Encrypt cert to provision, then refresh and tick it.)

You're live on `https://latitude44.co.nz` 🚀

---

## 6 · Day-2 operations

### Deploy new changes

```bash
git add -A
git commit -m "Tweak hero copy"
git push
```

GitHub Actions rebuilds and republishes within ~2 minutes. No manual steps.

### Roll back

```bash
git revert <commit-sha>
git push
```

Or open the Actions tab and re-run a previous successful workflow run.

### Manual deploy without a code change

GitHub repo → **Actions** → "Build & Deploy Latitude44 to GitHub Pages" →
**Run workflow** → branch `main` → **Run workflow** button.

### Local preview of the production build

```bash
cd frontend
yarn install
yarn build
npx serve -s build      # http://localhost:3000
```

---

## 7 · Troubleshooting

| Symptom | Fix |
| --- | --- |
| Build fails on the `yarn build` step | Check the Actions log — usually a typo in JSX or a missing import. The repo passes lint locally; re-run after fixing. |
| Site loads but `/work`, `/services`, `/contact` 404 on refresh | Ensure `frontend/public/404.html` is in the build output. It is committed; if you removed it, restore it from git. |
| Contact form returns "Contact form isn't configured yet" | The `REACT_APP_FORMSPREE_ID` variable isn't set, or it's set as a **secret** instead of a **variable**. Recreate it under **Variables**. |
| Contact form submits but no email arrives | Check the Formspree dashboard → the first-ever submission requires you to click a verification link sent to your email. |
| Custom domain shows "DNS check unsuccessful" | DNS hasn't propagated yet. Re-run the check after 10 minutes. Verify with `dig latitude44.co.nz`. |
| HTTPS toggle still greyed out after an hour | Remove the custom domain, save, re-add it. This forces a fresh cert request. |
| Site shows old version after push | Hard refresh (`Cmd/Ctrl + Shift + R`). GitHub Pages caches aggressively for ~10 min. |

---

## 8 · Optional: also run the FastAPI backend

You only need this if you want to **store submissions in MongoDB** in
addition to (or instead of) Formspree. Recommended hosts on a free tier:

- **Render.com** (web service) + **MongoDB Atlas** (free 512 MB)
- **Railway.app** + MongoDB Atlas
- **Fly.io** + MongoDB Atlas

Then set `REACT_APP_BACKEND_URL` in GitHub variables to your backend's
public URL (e.g. `https://api.latitude44.co.nz`). The frontend will prefer
the FastAPI backend whenever the variable is present.

---

## 9 · Costs summary

| Item | Cost |
| --- | --- |
| GitHub Pages hosting | **Free** (unlimited bandwidth on the apex domain) |
| GitHub Actions build minutes | **Free** for public repos; 2000 min/month free for private |
| Formspree (50 submissions / month) | **Free** |
| `.co.nz` domain on Porkbun | ~NZ$25 / year |
| **Total recurring** | **~NZ$2 / month** (just the domain) |

---

**Maintainer:** latitude44@protonmail.com
**Source:** `https://github.com/<your-username>/latitude44-site`
