# Japan Insider --- Project Backup / Handover

**Backup date:** 2026-08-22\
**Project:** Japan Insider\
**GitHub repository:** `github.com/japaninsider/japaninsider`

## 1. Project concept

Japan Insider is a multilingual, personalized Japan travel research and
concierge-style service for international travelers.

Core positioning: - Personalized rather than generic itineraries -
Japan-based/local-perspective research - Travel planning, food and
experiences, shopping support, stay/area advice, and concierge-style
support - The current service is positioned as research, information,
consultation, and concierge-style assistance rather than selling
transportation or accommodation as a travel agency

Brand direction: - Name: **Japan Insider** - Tagline currently used:
**Your Japan, Better.** - Visual direction: boutique Japan concierge
rather than a conventional mass-market travel agency - Main palette:
navy, white, and Japanese red

## 2. Website

The website is designed as a static site that can be hosted on GitHub
Pages.

Main structure: - `index.html` - `404.html` - `privacy.html` -
`terms.html` - `README.md` - `assets/css/style.css` -
`assets/js/main.js` - `assets/images/`

GitHub repository: `japaninsider/japaninsider`

Expected GitHub Pages URL:
`https://japaninsider.github.io/japaninsider/`

Deployment: GitHub repository → Settings → Pages → Deploy from a branch
→ `main` → `/ (root)`.

## 3. Languages

The homepage supports three languages:

-   **EN** --- English
-   **日本語** --- Japanese
-   **ES** --- Spanish

A language switcher appears in the header.

Behavior: - Japanese browser language → Japanese on first visit -
Spanish browser language → Spanish on first visit - Other browser
languages → English - The visitor's selection is remembered using
browser `localStorage`

The language switch changes the homepage copy, navigation, services,
pricing explanation, FAQ, contact form, and related interface text.

Note: Privacy Policy and Terms were still starter pages and should be
reviewed and fully localized before commercial launch.

## 4. Current pricing decision

The latest agreed public pricing basis is **USD**.

Public-facing prices:

  Plan                    Public price
  --------------------- --------------
  Japan Quick Help                \$49
  Japan Personal Plan            \$199
  Japan Premium                  \$499
  Japan VIP                     \$999+

All three languages should use USD as the main displayed/reference
price.

### Actual payment currency

The intended Stripe checkout/payment currency is **EUR**, even though
the website's public price basis is USD.

Current internal EUR plan values used in the latest site build:

  Plan                    Internal EUR value
  --------------------- --------------------
  Japan Quick Help                       €49
  Japan Personal Plan                   €199
  Japan Premium                         €499
  Japan VIP                            €999+

Important: before Stripe goes live, decide whether these EUR values
remain fixed or are recalculated to preserve the intended USD economics.
Stripe prices should be treated as the authoritative charge amounts once
configured.

The website should clearly tell customers: - Prices are displayed in
USD. - Actual checkout/payment is processed in EUR.

## 5. Service tiers

### Japan Quick Help --- \$49

-   30-minute video or chat consultation
-   Up to 3 focused questions
-   Practical recommendations

### Japan Personal Plan --- \$199

-   Personalized itinerary ideas
-   Area, food, and activity research
-   Shareable travel plan

### Japan Premium --- \$499

-   Everything in Personal Plan
-   7 days of travel chat support
-   Extra research and updates

### Japan VIP --- \$999+

-   Fully customized support
-   Priority research
-   Scope built around the customer's trip

## 6. Website sections

Current homepage concept includes:

1.  Hero
2.  Trust/value indicators
3.  Services
4.  Pricing
5.  How it works
6.  Why Japan Insider
7.  FAQ
8.  Contact/inquiry
9.  Footer with Privacy / Terms / project links

The "WHY JAPAN INSIDER" section uses a torii-gate visual.

## 7. Image history / important warning

An earlier torii-gate image used in the "WHY JAPAN INSIDER" section was
visibly low resolution/rough.

A newer, higher-quality torii-gate image was generated afterward. It
shows: - A winding stone path - Dense vermilion torii gates - Black
lower sections - A warm traditional lantern on the right - Strong
depth/perspective - No people - High-resolution photographic appearance

When updating the site, **do not accidentally restore the older blurry
torii image**.

Recommended filename: `assets/images/about-japan.jpg`

If the HTML points to another filename such as
`assets/images/about.jpg`, either replace that exact file or update the
`<img src>` path consistently.

## 8. Contact form

The starter site uses an email-based inquiry flow rather than a backend
database.

The JavaScript contains a placeholder similar to:

`const CONTACT_EMAIL = "replace-with-your-email@example.com";`

Only the email address inside the quotation marks should be replaced
with the real business contact email.

Do not change `const CONTACT_EMAIL`.

Before public launch, verify: - Real business email is configured -
Inquiry works on desktop and mobile - Japanese/English/Spanish form text
is correct - Spam handling is considered

## 9. Payments / business infrastructure direction

Planned direction: - Website: GitHub Pages initially - Card payments:
Stripe - Stripe settlement/checkout basis: EUR - Public website pricing:
USD - Multi-currency/business money management may use an appropriate
business account such as Wise Business, subject to eligibility and
current terms - A Spanish bank account may be added after
relocation/business setup in Spain

Important tax/legal principle: The country of the receiving bank account
alone does not determine where business income is taxable. Residence,
business structure, VAT/IVA, social-security obligations, and
cross-border tax rules should be reviewed when moving from Japan to
Spain.

## 10. GitHub workflow

For simple browser-based updates:

1.  Open `japaninsider/japaninsider`.
2.  Upload the contents of the latest website ZIP --- not the ZIP
    itself.
3.  Allow changed files to replace/update the previous version.
4.  Commit the changes.
5.  GitHub Pages redeploys automatically.

For ongoing development, GitHub Desktop is preferable: - Clone the
repository - Copy the new site files into the local repository - Review
changed files - Commit - Push origin

Recommended commit messages: - `Add Japanese and Spanish support` -
`Set public pricing to USD` - `Keep Stripe checkout in EUR` -
`Replace Why Japan Insider image` - `Add Stripe checkout`

Git commit history should be treated as part of the project's backup
strategy.

## 11. Latest generated website package

Latest agreed website specification:

**Three languages + USD public pricing + EUR internal/Stripe basis.**

Previously generated package name:
`japaninsider-trilingual-usd-display-eur-stripe.zip`

When continuing development, use the newest working GitHub version as
the source of truth, because later manual edits may have been made after
a ZIP was generated.

## 12. Outstanding work

Before taking real customer payments, priority items are:

-   Replace the old blurry "WHY JAPAN INSIDER" image with the newer
    high-resolution torii image
-   Configure the real business email
-   Add Stripe checkout
-   Decide exact fixed EUR Stripe amounts corresponding to the USD
    public prices
-   Fully review Privacy Policy and Terms
-   Localize Privacy/Terms into EN / Japanese / Spanish if desired
-   Add a custom domain
-   Set up a business email on the custom domain
-   Test mobile layout
-   Test all three languages
-   Test contact flow
-   Add SEO metadata / multilingual SEO
-   Add analytics only after deciding on privacy/cookie requirements
-   Review Spanish/Japanese business, tax, travel-service, consumer, and
    VAT requirements before commercial operation

## 13. Backup strategy

Keep three independent layers:

**A. ChatGPT data export**\
Use ChatGPT Settings → Data Controls → Export Data for a broader
conversation/account archive.

**B. GitHub**\
Commit every meaningful website change. Git history provides version
history and rollback capability.

**C. This project handover file**\
Keep `JAPAN-INSIDER-PROJECT.md` in the repository root. Update it
whenever a major business or technical decision changes.

A future ChatGPT conversation can use this file as a handover document
to quickly reconstruct the project's context.

## 14. Key decisions at a glance

-   Brand: **Japan Insider**
-   GitHub: **japaninsider/japaninsider**
-   Languages: **English / Japanese / Spanish**
-   Public pricing currency: **USD**
-   Public tiers: **\$49 / \$199 / \$499 / \$999+**
-   Intended Stripe/payment currency: **EUR**
-   Hosting: **GitHub Pages**
-   Contact flow initially: **email**
-   Style: **boutique Japan concierge**
-   Critical image: **use the newer high-resolution torii visual, not
    the old blurry version**

------------------------------------------------------------------------

### Maintenance note

Whenever the project changes, add a dated note below.

**2026-08-22:** Created consolidated project backup/handover. Current
pricing decision is USD public display with EUR payment processing.
