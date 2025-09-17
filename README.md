# FastMove Carpenters – Static Site

A simple, static marketing site for a carpentry business. Built with Tailwind CDN and small enhancements via AOS and Feather Icons.

## Structure

```
assets/
  css/
    main.css          # Shared styles (nav, hero helpers, components)
  js/
    main.js           # AOS + feather init, mobile menu, accordion
  img/
    hero-*.svg        # Hero placeholders – replace with your images
    before.svg        # Before/after placeholders
    after.svg
    og-cover.svg      # Social sharing image
index.html
about.html
services.html
contact.html
quote.html
portfolio.html
pricing.html
```

## Swap images
Place your real images in `assets/img/` and update file names if needed. Common hero helpers map to:
- Home: `assets/img/hero-home.svg`
- About: `assets/img/hero-about.svg`
- Services: `assets/img/hero-services.svg`
- Contact: `assets/img/hero-contact.svg`
- Quote: `assets/img/hero-quote.svg`

The home before/after demo uses `assets/img/before.svg` and `assets/img/after.svg`.

## Local development
Open any HTML file directly in a browser (no build required).

## Deploy to GitHub Pages
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   ```
2. Create a new GitHub repo and add it as remote:
   ```bash
   git remote add origin <your_repo_url>
   git branch -M main
   git push -u origin main
   ```
3. In GitHub → Settings → Pages:
   - Source: Deploy from a branch
   - Branch: `main` / root
4. Your site will be available at `https://<username>.github.io/<repo>/`.

If you publish to a user/organization site (root domain), set canonical URL and links accordingly.

## Notes
- Tailwind is loaded via CDN. For production hardening or custom design tokens, consider a proper Tailwind build.
- All navigation and footers are consistent across pages.
- OpenGraph image: `assets/img/og-cover.svg`.
