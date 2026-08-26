# Japan Insider v36 — pre-Stripe TEST cleanup

## Scope
v36 is a small pre-checkout cleanup based on v35. It does not add a Stripe URL and does not change the core service scope or pricing.

## Changes
- `intake.html`: clarified that individualized research begins only when Japan Insider sends the work-start confirmation email.
- `intake.html`: customer saved/copied receipt now excludes disabled fields from non-selected plans.
- `index.html`, `assets/js/main.js`, `legal.html`: prices remain listed/base-priced in USD, while wording allows Stripe to display localized currency at checkout where supported.
- `SITE-QA.md`, `ORDER-WORKFLOW.md`, `QUICK-HELP-CHECKOUT-TEST.md`, `STRIPE-SETUP.md`: updated to match the same checkout and work-start rules.
- All visible HTML build labels standardized to `v36`.
- `assets/js/payments.js`: Stripe Quick Help Payment Link intentionally remains blank.

## Required next test
Create a real Stripe TEST/Sandbox Payment Link for Quick Help, configure the post-payment redirect to `thank-you.html`, place the actual TEST link in `assets/js/payments.js`, then test:

`Homepage → Stripe TEST Checkout → thank-you.html → intake.html?plan=quick → 3 questions → Formspree → reference number → save/copy receipt → payment/details verification → work-start confirmation email → delivery`

## Pass rule
Do not send the work-start confirmation email until payment and the information needed to begin have been verified. The act of sending that email is the defined start of individualized research.
