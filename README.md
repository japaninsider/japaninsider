# LORUNEI

Static bilingual (English / Japanese) website for **LORUNEI**, a personal Japan trip-planning service by **Masayasu Wakihama**.

- Live site: https://japaninsider.github.io/japaninsider/
- Hosting: GitHub Pages
- Form delivery: Formspree
- Current build in this package: **v57b3**
- Public/base pricing currency: USD
- Primary audience: first-time U.S. travelers to Japan, led by couples in their 40s who value comfort, independent travel and clear choices

## Current services

- **Quick Help — $49**: one focused Japan travel topic, up to 3 closely related questions, with recommendation, reasoning, caution and next step.
- **Japan Answer — $99**: one connected decision evaluated as a Decision Brief, including alternatives and trade-offs.
- **Japan Research — $299**: defined-scope research with named options, comparison, shortlist and backups.
- **Private Japan Planning — from $999**: custom whole-journey planning, with scope, price and timing agreed in writing.

If Quick Help is clearly too narrow, LORUNEI tells the customer before deeper work begins. The customer may keep the $49 scope or apply the full $49 toward Japan Answer, leaving $50 due. No upgrade happens without approval.

## Purchase path

1. Visitor compares the four services or opens the matching sample.
2. Quick Help uses a Stripe Payment Link when a real link is configured. The other services begin with an inquiry and written scope confirmation.
3. Stripe returns the customer to `thank-you.html?plan=quick`.
4. The customer completes `intake.html?plan=quick`.
5. LORUNEI checks payment and required details, then sends a work-start confirmation email.
6. The promised delivery window begins as defined in the service terms.

## Key files

- `index.html` — bilingual homepage and inquiry form
- `samples.html` — interactive EN/JA samples for all four services
- `intake.html` — post-payment intake (`noindex`)
- `thank-you.html` — post-payment next step (`noindex`)
- `legal.html`, `terms.html`, `privacy.html` — commerce and policy pages
- `assets/js/v57b3.js` / `assets/css/v57b3.css` — current homepage behavior and consolidated visual layer
- `assets/js/samples-v57b3.js` / `assets/css/samples-v57b3.css` — current Samples behavior and visual layer
- `assets/js/payments.js` — Stripe Quick Help configuration

## Payment state

`STRIPE_QUICK_PAYMENT_LINK` is intentionally blank. Until the real Stripe URL is added, all Quick Help purchase buttons become inquiry buttons. This prevents a broken or fabricated checkout.

See `STRIPE-SETUP.md`, `ORDER-WORKFLOW.md`, `V57-QA.md`, `V57-REVISED-QA.md` and `V57-REVISED-2-QA.md` before launch.


## v57b3 technical cleanup
- Preserves all customer-facing content from v57 (Revised 2).
- Keeps Quick Help at $49 for one topic with up to 3 closely related questions.
- Consolidates the homepage v57 + Revised 2 CSS into `v57b3.css`.
- Externalizes Samples CSS/JS to one current source each; duplicate inline copies are removed.
- Retires `assets/js/main.js` as a harmless placeholder with no legacy $45 / Personal / Premium / VIP runtime.
- Makes the Japanese Commerce Disclosure explicitly state the Quick Help one-topic / up-to-3-related-questions scope.
- Keeps the real Quick Help Stripe Payment Link intentionally blank until a verified live URL is supplied.