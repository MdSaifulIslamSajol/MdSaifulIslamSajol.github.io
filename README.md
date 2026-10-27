# mdsaifulislamsajol.github.io

Personal academic website of **Md Saiful Islam Sajol**, Ph.D. student in Computer Science and Engineering at Louisiana State University.

Live site: <https://mdsaifulislamsajol.github.io>

Built with [al-folio](https://github.com/alshedivat/al-folio) (Jekyll, MIT license), customized so the home page is one long, scrollable page: the navbar links scroll to each section (news, projects, publications, awards, CV, blog) and highlight the section currently in view. Every section also keeps its own standalone page.

## How to update the content

| What you want to change | Edit this file |
| --- | --- |
| Bio, headline numbers, research interest chips | `_pages/about.md` |
| Publications (title, authors, DOI, code, abstract, awards) | `_bibliography/papers.bib` |
| News items | add a file to `_news/` (copy an existing one) |
| Research projects | `_projects/*.md` (one file per project) |
| Awards (home page and /awards/) | `_data/awards.yml` |
| Photos in the "Moments" section | `_data/gallery.yml` and the image in `assets/img/` |
| CV page and the Experience/Education timeline | `_data/cv.yml` |
| Blog posts | add a file to `_posts/` named `YYYY-MM-DD-title.md` |
| Email, Scholar, GitHub, LinkedIn links | `_data/socials.yml` |
| Site title, description, theme options | `_config.yml` |

To highlight a paper on the home page, add `selected = {true},` to its BibTeX entry.

## Customizations on top of al-folio

These files override files from the `al_folio_core` theme gem (version 1.0.15). If you update that gem in the `Gemfile`, compare them with the new upstream versions.

- `_layouts/about.liquid`: the single-page home layout with all sections.
- `_includes/header.liquid`: navbar items with `nav_section:` in their front matter link to `/#section`.
- `_includes/news.liquid`: news dates show month and year.
- `assets/custom/sections.css` and `assets/custom/sections.js`: styling (light and dark), smooth scrolling, active-section highlighting, and fade-in on scroll.

## Publishing

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to the `gh-pages` branch. One-time setup in the repository on GitHub:

1. **Settings > Actions > General > Workflow permissions**: choose **Read and write permissions**, then Save.
2. Push to `main` and wait for the **Deploy site** workflow (Actions tab) to finish. It creates the `gh-pages` branch.
3. **Settings > Pages > Build and deployment**: Source **Deploy from a branch**, Branch **gh-pages**, folder **/(root)**, then Save.

## Local preview (optional)

Requires Ruby 3.3 and Bundler:

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## License

The theme code is MIT-licensed by the al-folio authors (see `LICENSE`). Text, photos, and figures on this site belong to Md Saiful Islam Sajol and co-authors.
