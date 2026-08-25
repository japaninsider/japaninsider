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

Pricing is denominated in USD (€):
- Quick Help: $49
- Personal Plan: $199
- Premium: $499
- VIP: $999+

English, Japanese and Spanish pricing copy identifies EUR as the service currency.


## Language-specific display currencies

The site now changes the **display currency with the selected language**, while the actual checkout currency remains EUR.

- English: approximate USD — ≈$57 / ≈$233 / ≈$583 / ≈$1,168+
- 日本語: approximate JPY — 約¥9,100 / 約¥37,000 / 約¥92,700 / 約¥185,600+
- Español: EUR — $49 / $199 / $499 / $999+

The inquiry form keeps each plan's underlying value in USD so the business price remains unambiguous. USD and JPY are reference displays and should be reviewed periodically as exchange rates move.


## USD public pricing / USD checkout

The website now uses **USD as the public pricing basis in all three languages**:

- Quick Help: $49
- Personal Plan: $199
- Premium: $499
- VIP: $999+

The site explicitly explains that the actual payment/Stripe checkout is processed in **EUR**. The plan option values used internally remain USD-based.


## Japan / Stripe launch additions
Added `legal.html` (特定商取引法に基づく表記), a footer link, and cancellation/refund terms.
Public contact: `infojapaninsider@gmail.com`.
For privacy, operator name/address/phone use 「請求があった場合には遅滞なく開示いたします。」 on the public page. Keep the actual legal details available for Stripe and prompt disclosure.
Before payments: show the actual USD charge before final purchase; register `legal.html` in Stripe's commerce disclosure setting; confirm all policies match actual operations.


## Legal operator
販売事業者・運営責任者：脇濱正靖


## Complete Japan launch build — 2026-08-22

Included in this package:
- English / 日本語 / Español homepage language switching
- Public pricing basis: USD
- Intended checkout currency: USD via Stripe
- Real inquiry email configured: `infojapaninsider@gmail.com`
- Legal operator name: `脇濱正靖`
- `legal.html` — 特定商取引法に基づく表記
- Trilingual `privacy.html`
- Trilingual `terms.html`
- Cancellation/refund policy
- High-resolution replacement image for the WHY JAPAN INSIDER section
- GitHub Pages-ready static structure

### Private information
The owner's residential address, telephone number, bank details, identity documents, Stripe secret keys, and other sensitive credentials are intentionally NOT stored in this public website package or README.

The legal page uses the wording:
「請求があった場合には遅滞なく開示いたします。」
for address and telephone number.

### Stripe status
Stripe is not yet wired to live payment links in this build. When the Stripe account and EUR products are created, replace the inquiry/payment CTAs with Stripe Payment Links or Checkout URLs after testing them in Stripe test mode first.


## v2 footer/legal fix

This rebuild fixes the missing homepage footer link to `legal.html`.

The homepage footer now shows the legal link in all three languages:
- EN: Legal / Commerce disclosure
- 日本語: 特定商取引法に基づく表記
- ES: Información legal

Also added `legal.html` to the sitemap and added cross-navigation between policy pages.


## v3 — explicit USD sale prices

The legal disclosure now clearly distinguishes:
- USD on the website = reference display
- Actual sale/checkout currency = EUR

Current intended USD sale prices:
- Quick Help: $49
- Personal Plan: $199
- Premium: $499
- VIP: $999+ / individual quotation

The exact USD amount must be visible before the customer confirms payment.


## v4 — Client intake
Added `intake.html` with EN / 日本語 / ES and plan-specific questions for Quick, Personal, Premium and VIP. Added Stripe post-payment URLs and `ORDER-WORKFLOW.md`.


## v5 — USD unified pricing
CURRENT CONFIGURATION: Website, official sale prices, Terms, commerce disclosure and Stripe checkout are USD. Prices: $49 / $199 / $499 / $999+. This supersedes all earlier currency notes.


## v6 — sample deliverables
Added a homepage 'See what you'll receive' section, trilingual `samples.html` with Personal/Premium/VIP examples, and `DELIVERY-TEMPLATE.md` for real client fulfilment.

## v7 — sample language fix
The selected site language is now passed to `samples.html`.
Fixed labels inside the sample deliverables are translated for EN / 日本語 / ES.


## v8
Added Quick Help sample, sample links on every pricing card, and a prominent sample CTA immediately below pricing. Language and selected plan are preserved.


## v9 — Quick Help asynchronous workflow
Quick Help no longer includes video calls. Customers submit up to 3 focused questions through the online form and receive researched answers by email, usually within 2 business days. No appointment is required.

## v10 — pricing language cleanup
All text directly beneath the USD prices and all per-plan sample links are explicitly localized for EN / 日本語 / ES.


## v11 — full Japanese display audit
Reviewed the Japanese customer-facing display beyond pricing. Fixed stale Quick Help video-call wording, MOST POPULAR localization, Japanese plan labels, sample headings, and a pricing sentence typo.


## v12 — screenshot-confirmed Japanese fix
Fixed the two homepage sample-deliverable blocks identified in screenshots, including headings, descriptions and buttons, for EN/JA/ES.


## v13 — Japanese hero balance
Japanese hero is intentionally composed as two lines: 「あなたの日本を、」 / 「もっとあなたらしく。」, with navy/red emphasis.


## v14 — contact email
All contact email references changed to `infojapaninsider@gmail.com`.

## v15 — post-payment intake flow
Rebuilt `intake.html` around the actual operational workflow:
Stripe payment → plan-aware intake → payment confirmation → research → delivery.
Quick Help is explicitly asynchronous: up to 3 questions, no appointment/video call, usually delivered by email within 2 business days.

## v16 — trust / commercial readiness rebuild

Major changes:
- Replaced generic About copy with the real differentiating background: five-star hospitality, 10 years in the U.S., former Nikkei journalist, international-business-traveler planning experience.
- Added a clear “Who this is for” section.
- Added a plan comparison table and clearer sales CTAs.
- Quick Help remains asynchronous: up to 3 questions, usually within 2 business days.
- Personal/Premium/VIP CTAs are inquiry/availability/quote based until scope is confirmed.
- Removed visible GitHub/project-development branding from the footer.
- Rebuilt Commerce Disclosure to EN / 日本語 / ES and removed the old scheduled-consultation contradiction.
- Rebuilt Terms around the asynchronous Quick Help model and explicit third-party-booking boundary.
- Expanded Privacy Policy.
- Added `thank-you.html` for future Stripe redirect.
- Added `assets/js/payments.js`; paste the live Quick Help Stripe Payment Link in one place after approval.
- Added `LAUNCH-DECISIONS-NEEDED.md` listing business details still required before full commercial launch.

## v18
Public name: Masayasu Wakihama. Biography: 20+ years five-star hospitality including InterContinental; former Nikkei journalist; lived in Los Angeles, including Hollywood, for 10 years. Added conservative launch scopes for paid plans. No custom domain initially; headshot remains optional.

## v19 — conversion flow
Homepage reordered to Services → About → Who this is for → Pricing → How it works → FAQ → Contact, with a stronger $49 entry message and a more compact About headline.

## v20 — language QA
Fixed English-only customer-facing text introduced in v19. Launch service details and the $49 starter callout now switch correctly between English, Japanese and Spanish. Added LANGUAGE-QA-v20.md.

## v21 — footer language audit
Footer `Client Intake` now displays as `お申し込みフォーム` in Japanese and `Formulario de solicitud` in Spanish. Residual homepage English phrases were also given explicit language coverage.
