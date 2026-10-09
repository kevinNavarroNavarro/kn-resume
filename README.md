# Kevin Navarro · Interactive Resume

A bilingual resume website built with Vue 3. It shows my experience, skills,
certificates and personal projects in English and Spanish, in a dark or light theme.

**Live site:** https://resume-kevin-navarro.netlify.app/

## Features

- **English and Spanish.** All text switches with one button, including the page's `lang` attribute.
- **Dark and light themes.** The chosen theme and language are saved in the browser and applied before the page renders, so there is no flash on load.
- **Collapsible sections.** Every section opens and closes from its heading. Personal Projects starts collapsed.
- **Experience timeline.** Roles are grouped by company, so several roles at one employer sit under one header.
- **Content kept as data.** Jobs, education, certificates and projects are plain lists in the locale files, rendered with `v-for`. Adding a job never means copying markup.
- **Accessible.** Section toggles are real buttons with `aria-expanded`, icon buttons have labels, keyboard focus is visible, and animations turn off for visitors who ask for reduced motion.
- **Ready to share.** The page has a meta description plus Open Graph and Twitter tags, so links show a preview card with the profile photo.
- **Print friendly.** Printing gives a clean black-on-white copy with every section expanded, whatever theme or collapse state is active.
- **Responsive.** The two-card layout stacks into one column on phones with no sideways scrolling.

## Tech stack

- Vue 3 (Options API) with Vue CLI 5, Webpack and Babel
- Bootstrap 5 grid, Font Awesome icons, Inter and Poppins fonts
- CSS custom properties for both themes
- Netlify for hosting and pull request previews

## Run locally

You need Node.js and npm. The app lives in the `kn-resume/` folder.

```bash
cd kn-resume
npm ci          # install the exact versions in package-lock.json
npm run serve   # dev server with hot reload at http://localhost:8080
```

Other scripts:

```bash
npm run lint    # ESLint
npm run build   # production build into kn-resume/dist
```

The dev server polls for file changes, so hot reload also works from WSL and network drives.

## Update the content

All resume content lives in three files under `kn-resume/src/`:

| File | What it holds |
|---|---|
| `locales/en.js` | Every English string: profile summary, experience, education, certificates, projects and UI labels |
| `locales/es.js` | The same keys in Spanish. Keep both files in the same shape. |
| `data/profile.js` | Things that don't change with language: contact details, links, the PDF resume link and the skill lists |

To add a job, add an entry to `experience` in both locale files. A company with several roles takes several entries in its `roles` list, and a role with `current: true` shows the "Current" badge. Projects, certificates and education work the same way.

The profile photo is `kn-resume/public/profile.jpeg`, which is also the favicon and the preview image.

## Project structure

```
kn-resume/
├── public/
│   ├── index.html                # meta tags, theme bootstrap script
│   └── profile.jpeg
└── src/
    ├── App.vue                   # theme and language state, global styles
    ├── components/
    │   ├── Resume.vue            # the resume layout
    │   └── CollapsibleSection.vue
    ├── data/profile.js
    └── locales/                  # en.js, es.js, index.js
```

## Deployment

Netlify publishes the live site and builds a deploy preview for every pull request, so each change can be checked on a real URL before it merges.
