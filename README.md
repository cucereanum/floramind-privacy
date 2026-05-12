# floramind-privacy

Privacy policy static site for the **FloraMind** mobile app, built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com). Deployed automatically to GitHub Pages on every push to `main`.

**Live URL:**

```
https://cucereanum.github.io/floramind-privacy/privacy-policy/
```

---

## Stack

| Tool                                    | Version | Notes                         |
| --------------------------------------- | ------- | ----------------------------- |
| [Astro](https://astro.build)            | 6.x     | Static output (`dist/`)       |
| [Tailwind CSS](https://tailwindcss.com) | 4.x     | Via `@tailwindcss/vite`       |
| GitHub Actions                          | —       | Auto-deploy on push to `main` |
| GitHub Pages                            | —       | Served from `dist/` artifact  |

---

## Local development

### Prerequisites

- Node.js 20 or later
- npm 10 or later

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/cucereanum/floramind-privacy.git
cd floramind-privacy

# 2. Install dependencies
npm install

# 3. Start the local dev server
npm run dev
# → http://localhost:4321/floramind-privacy/
# → http://localhost:4321/floramind-privacy/privacy-policy/
```

Other useful commands:

```bash
# Production build (output → dist/)
npm run build

# Preview the production build locally
npm run preview
```

---

## Deploying to GitHub Pages

### 1. Enable GitHub Pages in the repository

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Save. No branch or folder selection is needed — the workflow handles everything.

### 2. Push to `main`

```bash
git add .
git commit -m "chore: update privacy policy"
git push origin main
```

The workflow at `.github/workflows/deploy.yml` will automatically:

1. Check out the repository.
2. Configure the GitHub Pages environment (`actions/configure-pages`).
3. Install dependencies (`npm ci`).
4. Build the site (`npm run build` → `dist/`).
5. Upload `dist/` as a Pages artifact (`actions/upload-pages-artifact`).
6. Deploy the artifact to GitHub Pages (`actions/deploy-pages`).

The deployment typically completes in **under 2 minutes**. You can monitor progress under the **Actions** tab.

### 3. Access the live site

```
https://cucereanum.github.io/floramind-privacy/privacy-policy/
```

The root path (`/floramind-privacy/`) redirects automatically to `/floramind-privacy/privacy-policy/` via both a `<meta http-equiv="refresh">` tag and a `window.location.replace()` call.

---

## Project structure

```
floramind-privacy/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD pipeline
├── public/
│   ├── .nojekyll                   # Prevents GitHub Pages Jekyll processing
│   └── icon.png                    # App icon (favicon + apple-touch-icon)
├── src/
│   ├── layouts/
│   │   └── Layout.astro            # HTML shell: meta, OG tags, favicon
│   ├── pages/
│   │   ├── index.astro             # Redirects / → /privacy-policy/
│   │   └── privacy-policy.astro   # Full privacy policy page
│   └── styles/
│       └── global.css              # @import "tailwindcss"
├── astro.config.mjs                # output: static, site, base path
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

## Configuration reference

`astro.config.mjs` — the two values that matter for GitHub Pages:

```js
export default defineConfig({
  output: "static",
  site: "https://cucereanum.github.io", // your GitHub Pages domain
  base: "/floramind-privacy", // must match the repo name
});
```

`base` is prepended to all asset URLs automatically by Astro, so images,
CSS, and the favicon resolve correctly under the `/floramind-privacy` subpath.

---

## Updating the privacy policy

1. Edit `src/pages/privacy-policy.astro`.
2. Update the `effectiveDate` and `effectiveDateISO` constants at the top of the file.
3. Commit and push to `main` — the site redeploys automatically.

---

## Contact

Privacy enquiries: [mariuscucereanu99@gmail.com](mailto:mariuscucereanu99@gmail.com)
