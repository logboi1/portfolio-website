# Ibraheem Ogundele Portfolio

Personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Local Development

```bash
npm install
npm run dev
```

The app runs locally at `http://localhost:3000`.

## Production Build

```bash
npm run lint
npm run build
```

## GitHub Pages Deployment

This repository is configured for GitHub Pages deployment through GitHub Actions.

Expected live URL:

```text
https://logboi1.github.io/portfolio-website/
```

To publish:

1. Push the latest code to the `main` branch.
2. Open the repository on GitHub.
3. Go to `Settings > Pages`.
4. Set the source to `GitHub Actions` if it is not already selected.
5. Wait for the `Deploy Portfolio to GitHub Pages` workflow to finish.

After deployment completes, GitHub Pages will serve the exported static build automatically.
