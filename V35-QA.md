# Japan Insider v35 — final cleanup before Stripe

Customer-facing fixes:
- Main homepage JS consolidated into one EN/JA system.
- Removed runtime Spanish dictionaries and stacked historical translation patches.
- Quick Help sample wording no longer gets overwritten by old v12 code.
- Premium support wording is consistently “7-day email support”.
- About explains Nikkei more clearly for international visitors.
- Main document structure corrected.
- Homepage brand is visually differentiated with “by Masayasu Wakihama”.
- About image lazy-loaded; image dimensions added; image payload reduced.

Post-payment fixes:
- Hidden Quick Help `required` field no longer blocks Personal / Premium / VIP intake submissions.
- Inactive plan sections are disabled and excluded from submitted FormData.
- Selected plan, rather than only URL query, determines the reference prefix.
- Thank-you page is EN/JA.
- Intake and thank-you remain noindex.

Repository:
- README rewritten to match the current Formspree, EN/JA, USD, GitHub Pages and Stripe-ready implementation.

Stripe:
- `STRIPE_QUICK_PAYMENT_LINK` remains intentionally blank.
