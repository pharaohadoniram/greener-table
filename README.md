# The Greener Table website

Static site for The Greener Table, published from the `site/` folder on Netlify.

- `site/index.html`: home page
- `site/recipe.html`: the recipe page template (shows `recipe.html?r=<slug>`)
- `site/recipes.html`: list of all recipes
- `site/recipes/recipes.js`: all recipe content; add new recipes here
- `site/brand/`: logo files (SVG and PNG)
- `logo-source/`: script that generates the logo files (`node build.js`, then `swift png.swift` for PNGs)

Booking inquiries come in through Netlify Forms.
