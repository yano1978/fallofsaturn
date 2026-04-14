# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Commands

```bash
# Start dev server
yarn dev

# Production build
yarn build

# Deploy to GitHub Pages
yarn deploy

# Preview production build locally
yarn preview
```

## Architecture

**Stack:** React 18 + Vite 4 + Tailwind CSS 3 + GSAP + Three.js. Deployed to GitHub Pages via `gh-pages`.

**Entry point:** `index.html` → `src/main.jsx` renders `<App />` which composes `<Home />` (all sections) and `<Layout />` (background gradient).

**Structure:**
- `src/components/` — shared UI: `Menu`, `Footer`, `Layout`, `Home`, `Modal`, `LogoIcon`, `PictoIcon`, `Wrapper`
- `src/sections/` — page sections: `Bio`, `Music`, `Pics`, `Contact`, `ImageCarousel` (unused), `Merch` (commented out)
- `src/plugins/` — custom Vite/Three.js plugins
- `static/` — images, textures, fonts served as static assets

**Styling:** Tailwind with a custom theme — brand colours are `red-dark`, `red-mid`, `red-light`, `firebrick`, `steelblue`. Font is `font-orbitron` (Orbitron). No `gray-*` or other default Tailwind colours available — only what's in `tailwind.config.js`.

**Path alias:** `@` maps to `src/` (configured in `vite.config.js`).

**Deployment:** `yarn deploy` runs `vite build` then pushes `dist/` to the `gh-pages` branch. The `CNAME` file sets the custom domain `fallofsaturn.com`.

## Known issues / TODOs

- `Merch` section is commented out in `Home.jsx` and `#merch` nav link is still present in `Menu.jsx`
- `ImageCarousel` section is unused/commented out
- `index.html` has malformed `og:description` and unquoted `og:image` content attribute
