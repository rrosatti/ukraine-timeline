# Ukraine History Timeline

An interactive timeline exploring 1,000+ years of Ukrainian history, culture, and resilience — from the foundational era of Kyivan Rus' to the modern journey toward a democratic European future.

**[View live site](https://rgalvao.github.io/ukraine-timeline/)**

## What's inside

A curated collection of historical events spanning five key eras, including:

- **👑 Leaders** — From Princess Olga to Mykhailo Hrushevsky
- **🎨 Culture** — National literature, academic foundations, and UNESCO heritage
- **📜 Milestones** — Turning points in sovereignty and international integration
- **⚔️ Conflicts** — Struggles for independence and the power of national unity

Each event is interactive, expanding to reveal historical context, key stats, and verified source links from academic and international portals like UNESCO, Encyclopedia of Ukraine, and Britannica.

## Tech stack

- **React 18 + TypeScript**
- **Vite 5**
- **Google Fonts** (Cinzel for headings, Lora for body)
- **Pure CSS** — Custom implementation with categorical tinting and responsive layout
- **No external UI libraries** — Designed for speed, accessibility, and high visual impact

## Getting started

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

The dev server runs at `http://localhost:5173/ukraine-timeline/`.

## Deploying to GitHub Pages

The project is configured for automated deployment:

```bash
yarn deploy
```

This builds the project and publishes the `dist/` folder to the `release` branch using the `gh-pages` utility.

## Project structure

```
src/
├── main.tsx              # Application entry point
├── App.tsx               # Root component & state management
├── App.css               # Premium historical styling & mobile optimizations
├── assets/
│   └── ukrainian-trident.png # Official trident asset
├── components/
│   ├── Hero.tsx           # Header with trident and meta-stats
│   ├── FilterBar.tsx      # Category-based filtering (Leaders, Culture, etc.)
│   ├── Timeline.tsx       # Core layout with era-based grouping
│   ├── EraBlock.tsx       # Era headers and grouped events
│   ├── EventCard.tsx      # Interactive, expandable event rows with sources
│   ├── EraJumpNav.tsx     # Quick navigation between historical periods
│   └── ChevronIcon.tsx    # Custom UI indicators
└── data/
    └── events.ts          # Historical data schema and verified content
```

## Resilience & Future

This project serves as a tribute to the unbreakable spirit of the Ukrainian nation. Through times of conflict and revival, the timeline highlights the intellectual depth and cultural uniqueness that stay stronger than ever.

_Slava Ukraini — Glory to Ukraine_
