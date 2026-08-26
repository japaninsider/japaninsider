# SITE-QA.md

## Japan Insider site QA — v36 / 2026-08-26

Verified in this package:

- Public site languages are English / Japanese only. No Spanish selector is shown at launch.
- `index.html` contains visible footer links to `privacy.html`, `terms.html`, and `legal.html`.
- Footer legal label changes by language: EN `Legal / Commerce disclosure`; 日本語 `特定商取引法に基づく表記`.
- `legal.html`, `privacy.html`, and `terms.html` exist in the repository root.
- `legal.html` is included in `sitemap.xml`.
- `intake.html` and `thank-you.html` are `noindex,nofollow` and are excluded from `sitemap.xml`.
- Contact email is configured as `infojapaninsider@gmail.com`.
- Public operator/advisor name is Masayasu Wakihama.
- Listed/base prices are USD: Quick Help $49 / Personal $199 / Premium $499 / VIP $999+.
- Site copy states that Stripe may display a localized checkout currency where supported and that the exact amount and currency are shown before payment.
- Individualized research begins when Japan Insider sends the work-start confirmation email.
- Customers make, contract, and pay third-party travel reservations directly with the relevant provider.
- Form submissions use Formspree and do not open a local mail application.
- Successful intake submissions generate a reference number and allow the customer to save/copy a text receipt.
- Disabled fields from non-selected intake plans are excluded from both Formspree submission and the saved/copied receipt.
- `assets/js/payments.js` contains no fabricated Stripe URL; the Quick Help Payment Link remains blank until an actual TEST/Sandbox link is supplied.
- Visible site build labels are `v36`.
- No residential address, phone number, bank account number, password, Stripe secret key, or identity document is included in this public package.

## Required browser QA after GitHub upload

1. Hard-refresh the homepage and confirm the visible build is v36.
2. Switch EN / 日本語 and confirm no ES selector appears.
3. Open `legal.html`, `terms.html`, and `privacy.html` directly in a private/incognito window and confirm EN/JA-only current copy.
4. With the Stripe link still blank, confirm Quick Help CTA falls back to the inquiry form.
5. After a real Stripe TEST/Sandbox Payment Link is added, run `QUICK-HELP-CHECKOUT-TEST.md` end to end.
