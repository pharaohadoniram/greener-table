# The Greener Table website

Static site for The Greener Table, published to GitHub Pages and edited through Pages CMS.

## How it fits together

- `content/home.json`: all home page text and photos
- `content/recipes/*.json`: one file per recipe
- `templates/index.html`: the home page layout (text comes from `content/home.json`)
- `site/`: everything else served as-is (styles, recipe page template, photos, logo, PDFs)
- `build/build.js`: combines the above into the finished site in `_site/`
- `.pages.yml`: the forms shown in Pages CMS
- `.github/workflows/deploy.yml`: rebuilds and publishes on every push to `main`

## Editing

Stacy edits through Pages CMS (app.pagescms.org). Every save commits to this repository, and GitHub publishes the site about a minute later.

To work locally: `node build/build.js`, then serve `_site/` (for example `python3 -m http.server -d _site`).

## Settings

`content/settings.json` holds the site address. It is not editable in Pages CMS. Inquiries come in by email (the Get in touch section links to Stacy’s address).
