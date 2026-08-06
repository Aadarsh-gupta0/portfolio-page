# Portfolio — Aadarsh Gupta

Personal portfolio site. Dark, violet-accented, and built so every project thumbnail is
generated SVG rather than a screenshot — nothing to re-export when a UI changes, and no
broken image links.

**Stack:** React 19 · Vite 8 · Tailwind CSS 4

## Run it

```bash
npm install
npm run dev
```

Opens on <http://localhost:5173/portfolio-page/> — note the `/portfolio-page/` base path,
which is set in `vite.config.js` so a production build works on GitHub Pages unchanged.

```bash
npm run build     # → dist/
npm run preview   # serve the built output locally
```

## Where things live

| Path | What's in it |
| :--- | :--- |
| `src/data/profile.js` | Name, bio, contact links, stats, skill groups. |
| `src/data/projects.js` | Every project card. `art` picks which SVG composition renders. |
| `src/components/art/ProjectArt.jsx` | The eight generated project covers. |
| `src/components/art/HeroArt.jsx` | Hero illustration — design canvas wired to a code editor. |
| `src/index.css` | Tailwind theme tokens, keyframes, and custom utilities. |

## Adding a project

1. Append an entry to `src/data/projects.js`.
2. Point `art` at an existing key in `ProjectArt.jsx`, or add a new composition to the
   `REGISTRY` there and reference it.
3. Set `featured: true` for the wide two-column treatment, `false` for the compact grid.

## Still to fill in

- `profile.linkedin` in `src/data/profile.js` is empty — the LinkedIn button stays hidden
  until it has a URL.
- `profile.resume` is unused so far; wire it to a hosted PDF if you want a résumé button.

## Deploy to GitHub Pages

```bash
npm install -D gh-pages
npm run deploy
```

Then set Pages to serve from the `gh-pages` branch in the repo settings.
