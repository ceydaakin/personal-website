# Ceyda Akın, personal website

One-page portfolio built with [Astro](https://astro.build) and Tailwind CSS v4, deployed on Vercel at https://ceydaakin.vercel.app.

Based on [RyanFitzgerald/devportfolio](https://github.com/RyanFitzgerald/devportfolio) (MIT, see `LICENSE-TEMPLATE.md`).

## Edit content

All text lives in `src/config.ts` (about, skills, projects, experience, education). Removing a section's array hides that section.

## Commands

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

Deploy with `npx vercel deploy --prod` (the Vercel project is not connected to GitHub, so a push does not deploy). `vercel.json` sets the Astro framework preset.
