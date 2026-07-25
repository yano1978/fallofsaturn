# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Commands

```bash
# Start dev server
yarn dev

# Production build
yarn build

# Preview production build locally
yarn preview
```

## Architecture

**Stack:** React 18 + Vite 4 + Tailwind CSS 3 + GSAP + Three.js. Deployed to GitHub Pages via GitHub Actions.

**Entry point:** `index.html` → `src/main.jsx` renders `<App />` which composes `<Home />` (all sections) and `<Layout />` (background gradient).

**Structure:**
- `src/components/` — shared UI: `Menu`, `Footer`, `Layout`, `Home`, `Modal`, `LogoIcon`, `PictoIcon`, `Wrapper`
- `src/sections/` — page sections: `Bio`, `Music`, `Pics`, `Contact`, `ImageCarousel` (unused), `Merch` (commented out)
- `src/plugins/` — custom Vite/Three.js plugins
- `static/` — images, textures, fonts served as static assets

**Styling:** Tailwind with a custom theme — brand colours are `red-dark`, `red-mid`, `red-light`, `firebrick`, `steelblue`. Font is `font-orbitron` (Orbitron). No `gray-*` or other default Tailwind colours available — only what's in `tailwind.config.js`.

**Path alias:** `@` maps to `src/` (configured in `vite.config.js`).

**Deployment:** `.github/workflows/main.yml` builds and deploys automatically via GitHub Actions on every push to `main` (GitHub Pages source is set to "GitHub Actions"). `public/CNAME` sets the custom domain `fallofsaturn.com` and is copied into `dist/` on build.

## Known issues / TODOs

- `Merch` section is commented out in `Home.jsx` and `#merch` nav link is still present in `Menu.jsx`
- `ImageCarousel` section is unused/commented out
- `index.html` has malformed `og:description` and unquoted `og:image` content attribute
