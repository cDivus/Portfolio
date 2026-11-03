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

