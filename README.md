# Pushpendra Singh — Portfolio

Personal portfolio site. Plain HTML/CSS/JS, no build step — works as-is on GitHub Pages or any static host.

## Structure

```
index.html                                    Page markup (all sections)
assets/css/styles.css                         All styling (design tokens at the top)
assets/js/main.js                             Mobile nav, project rendering, contact form, resume fallback
assets/img/                                   Photo + favicon
assets/resume/Pushpendra-Singh-Resume.pdf     Resume (generated from the resume content provided)
```

## One thing left to add

**Project GitHub links** — open `assets/js/main.js` and find the `PROJECTS` array near
the top. `github` is blank for QuickDine, JalRide and PrepWave; fill each in with the
repo URL to turn the greyed "Source" button into a working link. `live` demo links and
`tech` badges are already filled in from the resume.

## Keeping the resume in sync

The PDF at `assets/resume/Pushpendra-Singh-Resume.pdf` was generated from the resume
content supplied for this redesign. If you update your resume later, either replace this
file directly (keep the exact filename) or edit `index.html` / `assets/js/main.js` to
match and regenerate the PDF.

## Running locally

No build tools needed — just open `index.html` in a browser, or serve the folder locally:

```
npx serve .
```

## Deploying

This repo already deploys from GitHub Pages (see the existing project link). Push to the
branch Pages is configured to serve from (usually `main`) and it updates automatically.
