# Repository Guidelines

## Project Structure & Module Organization
- `app/` holds the Next.js App Router pages, layouts, and components (main page: `app/page.tsx`, layout: `app/layout.tsx`).
- `app/components/` contains shared UI pieces like headers and footers.
- `public/` stores static assets and the content source `public/copy.json` used for work experience and projects.
- `assets/` contains design assets referenced by the site.
- Configuration lives in `next.config.ts`, `tailwind.config.ts`, `eslint.config.mjs`, and `tsconfig.json`.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the dev server with Turbopack at `http://localhost:3000`.
- `npm run build` creates a production build.
- `npm run start` runs the production server from the build output.
- `npm run lint` runs ESLint (note: lint errors do not fail builds per `next.config.ts`).

## Coding Style & Naming Conventions
- TypeScript is enabled; keep types explicit where inference is unclear.
- Follow the App Router pattern for file naming: `page.tsx`, `layout.tsx`, and component files in `app/components/`.
- Styling uses Tailwind CSS; prefer utility classes over custom CSS. Keep class lists readable and grouped by layout, spacing, and typography.
- ESLint extends `next/core-web-vitals` and `next/typescript` via the flat config in `eslint.config.mjs`.

## Testing Guidelines
- No test framework is configured yet. If adding tests, document the chosen framework and add a `npm run test` script.

## Commit & Pull Request Guidelines
- Recent commits use short, lowercase, imperative-style messages (e.g., "update titles", "projects update"). Match that tone unless the team agrees otherwise.
- PRs should include a concise summary, screenshots for UI changes, and a note if `public/copy.json` content was updated.

## Configuration Tips
- `public/copy.json` is the source of truth for portfolio content; keep it in sync with UI sections.