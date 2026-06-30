# Portfolio & CMS Monorepo

This repository is organized as a decoupled monorepo, splitting the Astro web frontend from the Sanity CMS Studio.

## Structure

```
Portfolio/
├── portfolio-web/          # Astro Web Frontend (Pure Astro + Tailwind CSS)
│   ├── src/                # Frontend source code
│   │   ├── sanity/         # Client & image helpers for fetching data
│   │   └── pages/          # Astro pages (index, blog, blog/[slug])
│   ├── astro.config.mjs    # Astro configuration
│   ├── package.json        # Frontend dependencies (only @sanity/client for queries)
│   └── tsconfig.json       # TypeScript configuration
│
└── portfolio-cms/          # Standalone Sanity CMS Studio
    ├── schemaTypes/        # Content models (Profile, Projects, Skills, Posts)
    ├── sanity.config.ts    # Studio configurations
    ├── sanity.cli.ts       # CLI credentials setup
    ├── package.json        # Studio dependencies (sanity, react, styled-components)
    └── tsconfig.json       # TypeScript configuration
```

---

## Getting Started

You can run development or build scripts for both directories directly from the root directory using the configured npm workspaces:

### 1. Run the CMS Studio (Sanity)
To run the CMS Studio locally without changing directories:

```bash
npm run cms:dev
```
*   **Studio URL:** `http://localhost:3333`
*   Open the URL to sign in and input your Profile details, Projects, Skills, and Blog Posts.

### 2. Run the Web Frontend (Astro)
To run the web frontend locally:

```bash
npm run web:dev
```
*   **Web URL:** `http://localhost:4321`
*   The website automatically falls back to loading content from your GitHub Gist if the Sanity dataset is empty.

---

## Workspace Scripts Summary

*   `npm run web:dev` - Run frontend dev server
*   `npm run web:build` - Build frontend static files
*   `npm run cms:dev` - Run Sanity Studio locally
*   `npm run cms:build` - Build Sanity Studio locally

---

## Deployment

1.  **Frontend (`portfolio-web`):** Deploy to Vercel, Netlify, or any static provider.
2.  **CMS Studio (`portfolio-cms`):** Deploy the hosted Studio to Sanity Cloud:
    ```bash
    cd portfolio-cms
    npx sanity deploy
    ```

