# Liam Earl — Portfolio Site

My personal portfolio, built as a single continuously-scrolling page rather than separate routed
pages. Home, About, and Projects sit side by side and you move between them by scrolling,
clicking the arrow buttons on either side of the screen, or using the header nav — all three stay
in sync with the URL.

## Features

- **Horizontal scroll-snap layout** — Home, About, and Projects are laid out side by side in one
  scrollable strip instead of swapping out on route change
- **Three ways to navigate, one source of truth** — the header links, the left/right arrow
  buttons, and native scrolling/swiping all update the same URL, so `/about` and `/projects` stay
  bookmarkable and browser back/forward works as expected
- **Project grid** — each project gets an image, a short description, and a link to its repo
- **Light/dark theme** — colors follow the OS-level `prefers-color-scheme` automatically

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and bundling
- [react-router-dom](https://reactrouter.com/) for URL/history sync
- [oxlint](https://oxc.rs/) for linting

## Getting Started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # type-check (tsc -b) and build for production
npm run preview  # preview the production build locally
npm run lint      # run oxlint
```

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx           # header + scroll container + prev/next arrow buttons
│   ├── HorizontalScroll.tsx # scroll-snap container, syncs scroll position <-> active index
│   ├── Header.tsx           # site title + nav links
│   └── Skills.tsx           # skill pills grouped by category, used on the About page
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   └── Projects.tsx         # project grid: image, title/link, description
├── assets/                  # images and project screenshots
└── App.tsx                  # single wildcard route rendering Layout
```
