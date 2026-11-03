# Portfolio & Blog

Fast, minimal portfolio and blog site built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

## Features

- **Blazing Fast**: Static Site Generation (SSG) with 0 kB client-side JavaScript by default.
- **Multi-Page Architecture**: Distinct routes for About (`/`), Projects (`/projects`), and Blog (`/blog`).
- **Local Content**: Content and projects stored in local JSON files and Markdown collections.
- **Asset Optimization**: Built-in WebP image optimization and link prefetching.
- **Zero Third-Party Runtime Dependencies**: No external CMS, no API rate limits, works 100% offline.

## Project Structure

```text
├── public/               # Static assets (favicons, icons)
├── src/
│   ├── assets/           # Local images processed & optimized by Astro
│   ├── components/       # UI components (Header, Footer)
│   ├── content/          # Markdown blog articles
│   │   └── blog/
│   ├── data/             # Profile and projects data
│   │   ├── profile.json
│   │   └── projects.json
│   ├── layouts/          # Base layout template
│   ├── pages/            # Page routes (/, /projects, /blog, /blog/[slug])
│   ├── content.config.ts # Content collections schema
│   └── input.css         # Tailwind CSS entry & custom styles
├── astro.config.mjs      # Astro configuration
├── package.json          # Project dependencies & scripts
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Development
Start the local development server:

```bash
npm run dev
```

Open `http://localhost:4321` in your browser.

### Build
Generate static HTML/CSS ready for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Managing Content

- **Profile & Bio**: Edit [`src/data/profile.json`](src/data/profile.json)
- **Projects**: Edit [`src/data/projects.json`](src/data/projects.json)
- **Blog Articles**: Add or edit `.md` files in [`src/content/blog/`](src/content/blog/)

## Deployment

Deploy directly to Vercel, Netlify, Cloudflare Pages, or GitHub Pages. The build output is located in `dist/`.
