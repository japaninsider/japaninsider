# Japan Insider

Static bilingual website for **Japan Insider**, a Japan travel research and advisory service by **Masayasu Wakihama**.

- Live site: https://japaninsider.github.io/japaninsider/
- Public languages at launch: English / Japanese
- Public listed/base pricing currency: USD (Stripe may display localized checkout currency where supported)
- Current build: **v36**
- Hosting: GitHub Pages
- Form delivery: Formspree
- Payment integration: Stripe Payment Link prepared in `assets/js/payments.js` but intentionally blank until a real link is supplied.

## Launch services

- **Quick Help — $45**: up to 3 focused questions, asynchronous email delivery, usually within 2 business days after required information is received.
- **Personal Plan — $199**: up to 7 days / 2 main cities or regions, target 5 business days, 1 reasonable revision.
- **Premium — $459**: up to 14 days / 4 main cities or regions, target 7 business days, 2 revisions, plus one 7-day email support window.
- **VIP — $999+**: custom quote and written scope.

Japan Insider provides research, comparisons, information, recommendations and booking guidance. Customers book, contract and pay hotels, transport providers, restaurants and other third parties directly.

## Key files

- `index.html` — public homepage
- `samples.html` — EN/JA delivery samples
- `intake.html` — post-payment intake form (`noindex`)
- `thank-you.html` — post-payment next-step page (`noindex`)
- `legal.html` — Commerce Disclosure / 特定商取引法に基づく表記
- `terms.html` — Terms of Service
- `privacy.html` — Privacy Policy
- `assets/js/main.js` — consolidated EN/JA homepage behavior
- `assets/js/payments.js` — Stripe Payment Link configuration
- `assets/css/style.css` — site styles

## Form submission

General inquiry and intake forms submit directly to Formspree:

`https://formspree.io/f/xeajbpvn`

The forms do **not** open a local mail application. Successful submissions receive a Japan Insider reference number. Customers can save or copy a text receipt of what they submitted.

## Stripe setup

Do not fabricate a Stripe URL. When a real Quick Help Payment Link is available, paste it into:

```js
const STRIPE_QUICK_PAYMENT_LINK = "";
```

in `assets/js/payments.js`.

With the field blank, Quick Help buttons say **Request Quick Help — $45** and go to the inquiry form. With a real link configured, they change to the purchase CTA and open Stripe.

The intended Quick Help path is:

`Homepage → Stripe → thank-you.html → intake.html?plan=quick → Formspree → work-start confirmation → email delivery`

## GitHub Pages deployment

Upload the **contents** of the release folder/ZIP to the repository root and overwrite files with the same paths.

Repository:

https://github.com/japaninsider/japaninsider

Pages URL:

https://japaninsider.github.io/japaninsider/

After committing, wait for GitHub Pages deployment and hard-refresh if an older cached build is still visible.

## v36 notes

- Aligned `intake.html` with the legal refund/start rule: individualized research begins when Japan Insider sends the work-start confirmation email.
- Updated USD/checkout wording for Stripe localized currency display while keeping Japan Insider's listed/base prices in USD.
- Fixed the saved/copied intake receipt so disabled fields from non-selected plans are excluded.
- Updated Stripe checkout testing and workflow documentation to match the current Formspree flow and work-start confirmation process.
- Standardized visible site build labels to **v36**.
- Stripe Payment Link remains intentionally blank until an actual TEST/Sandbox link is created.

## v37 — LORUNEI brand rebuild
- EN / Japanese only.
- LORUNEI hero and pronunciation guide.
- Pricing rebuilt to $99 / $299 / From $999.
- No generated founder/person imagery.
