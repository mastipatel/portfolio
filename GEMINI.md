# GEMINI.md

## Project Overview

This is a personal portfolio website for Masti Patel, a full-stack engineer. It is a single-page application built with [Next.js](https://nextjs.org/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). The content for the work experience and projects sections is dynamically loaded from a `copy.json` file located in the `public` directory.

The project is structured using the Next.js `app` directory convention. The main page is `app/page.tsx` and the main layout is `app/layout.tsx`. Reusable components like the header and footer are located in the `app/components` directory.

## Building and Running

To get started with this project, you need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server with Turbopack at `http://localhost:3000`.

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create an optimized production build of the application.

4.  **Start the production server:**
    ```bash
    npm run start
    ```
    This will start the production server.

5.  **Lint the code:**
    ```bash
    npm run lint
    ```
    This will run ESLint to check for any linting errors.

## Development Conventions

*   **TypeScript:** The project is written in TypeScript with strict mode enabled.
*   **ESLint:** ESLint is used for code quality and is configured to extend `next/core-web-vitals` and `next/typescript`. The configuration is in `eslint.config.mjs` and uses the new flat config format. Note that `ignoreDuringBuilds` is set to `true` in `next.config.ts`, so ESLint errors will not fail the production build.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) is used for styling. The configuration is in `tailwind.config.ts`.
*   **Components:** Reusable components are located in the `app/components` directory.
*   **Fonts:** The project uses `next/font` to load the "Geist" font family.
*   **Content:** The content for the work experience and projects sections is managed in the `public/copy.json` file.
