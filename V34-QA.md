# Japan Insider v34 — sales-readiness cleanup

Implemented from the strict v33 customer audit:
- EN/JA language switcher cleanup; no dangling slash.
- Homepage contact-form labels now translate correctly.
- Japanese submit text now says direct submission, not “prepare email”.
- Japanese booking FAQ now matches the direct-booking boundary.
- Intake page is EN/JA only; Spanish launch UI removed.
- Intake success copy now accurately says the details were received.
- Intake and general inquiry receipts can be saved as .txt or copied.
- General inquiry receipt now includes the submitted customer content, not only reference/time.
- Intake and thank-you pages are noindex/nofollow and removed from sitemap.
- Added homepage canonical URL, absolute OG image/URL, Twitter card and Organization structured data.
- Homepage title/description now distinguish Japan Insider with Masayasu Wakihama.
- Replaced “concierge” wording in key EN/JA buying areas with research/advisory/email-support wording so customers do not assume booking-agency services.
- Added a public InterContinental management-response link as third-party hospitality evidence.
- Replaced the torii image in the sample-deliverable sales section with a deliverable-style visual mockup.
- Strengthened Premium/VIP samples with concrete comparison/timeline structure while clearly marking them illustrative.
- Quick Help CTAs remain “Request” while Stripe URL is blank; payments.js upgrades both to “Get/購入” only when a real Stripe Payment Link is configured.
- All public build markers updated to v34.

Not included:
- No Stripe Payment Link was fabricated. STRIPE_QUICK_PAYMENT_LINK remains blank until the real link is supplied.
- No customer login portal was added. Customers can intentionally save/copy their own submission receipt instead.
