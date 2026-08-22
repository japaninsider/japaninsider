# Japan Insider

Responsive, static landing site for **Japan Insider — Travel & Concierge**.

## Included
- Responsive homepage
- Service and pricing sections
- FAQ + about section
- Contact form that prepares a local email (no backend required)
- Privacy / Terms starter pages
- 404 page
- SEO / Open Graph metadata
- Local logo, hero, preview and OG images
- GitHub Pages compatible structure

## Before launch
1. Open `assets/js/main.js` and replace `replace-with-your-email@example.com` with your real business email.
2. Review all pricing and service wording.
3. Replace the starter Privacy Policy and Terms with legally reviewed versions before taking payments.
4. If you add Stripe, Formspree, analytics or cookies, update the Privacy Policy accordingly.

## GitHub Pages deployment
Repository: `https://github.com/japaninsider/japaninsider`

1. Copy all files in this folder to the repository root.
2. Commit and push to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/(root)`, then save.
6. Your project site should become available at:
   `https://japaninsider.github.io/japaninsider/`

If you later create a repository named `japaninsider.github.io`, that can be used as the account-level Pages site.

## File structure
```
.
├── index.html
├── privacy.html
├── terms.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── .nojekyll
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
│       ├── logo.png
│       ├── hero.jpg
│       ├── about.jpg
│       ├── og-image.jpg
│       └── site-preview.png
└── README.md
```


## Bilingual language switch

The home page now supports English and Japanese with an **EN / 日本語** switch in the header. The selected language is stored in the browser using `localStorage`. First-time visitors whose browser language is Japanese are shown Japanese automatically.


## Trilingual language switch

The homepage supports **English / 日本語 / Español**.

- Japanese browser → Japanese on first visit
- Spanish browser → Spanish on first visit
- Other languages → English
- The visitor's selected language is remembered in `localStorage`

## Pricing currency

Pricing is denominated in EUR (€):
- Quick Help: €49
- Personal Plan: €199
- Premium: €499
- VIP: €999+

English, Japanese and Spanish pricing copy identifies EUR as the service currency.


## Language-specific display currencies

The site now changes the **display currency with the selected language**, while the actual checkout currency remains EUR.

- English: approximate USD — ≈$57 / ≈$233 / ≈$583 / ≈$1,168+
- 日本語: approximate JPY — 約¥9,100 / 約¥37,000 / 約¥92,700 / 約¥185,600+
- Español: EUR — €49 / €199 / €499 / €999+

The inquiry form keeps each plan's underlying value in EUR so the business price remains unambiguous. USD and JPY are reference displays and should be reviewed periodically as exchange rates move.
