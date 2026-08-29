# LORUNEI site QA — v57

## Release blockers

- [ ] Replace the blank `STRIPE_QUICK_PAYMENT_LINK` in `assets/js/payments.js` with the real production Payment Link.
- [ ] Configure Stripe success redirect to `thank-you.html?plan=quick`.
- [ ] Complete an end-to-end Stripe → thank-you → intake → Formspree test.
- [ ] Confirm the legal business name, address/phone disclosure method and support email are launch-ready.
- [ ] Replace the legacy `infojapaninsider@gmail.com` address with a LORUNEI-branded address when available, then update Terms and Privacy together.
- [ ] Plan migration from the legacy `japaninsider.github.io` URL to a LORUNEI domain; keep the old URL only as a redirect after migration.

## Homepage

- [ ] EN and 日本語 switch without mixed-language sections.
- [ ] Desktop and mobile navigation work.
- [ ] Each of four service cards explains a distinct problem size.
- [ ] Each sample link opens the matching tab through `?plan=`.
- [ ] Quick Help CTAs all behave identically.
- [ ] Inquiry plan selector follows the clicked service.
- [ ] Form success receipt displays and can be copied/printed.

## Samples

- [ ] Only one of four samples is open at a time.
- [ ] Direct links open Quick / Answer / Research / Private correctly.
- [ ] $299 named options are marked illustrative and time-sensitive.
- [ ] $999 itinerary uses Tokyo 4 → Hakone 1 → Kyoto 5 and does not promise bookings.
- [ ] Mobile comparison table and day list remain readable.

## Checkout and intake

- [ ] Quick Help Stripe amount is $49 USD.
- [ ] Thank-you page preserves the plan and language.
- [ ] Intake preselects the plan.
- [ ] First-visit field and plan-specific questions submit correctly.
- [ ] Intake reference begins with `LOR-`.

## Policy and operations

- [ ] Terms, privacy and commerce disclosure links resolve.
- [ ] $49 upgrade credit wording is consistent and requires approval.
- [ ] No page says LORUNEI books or pays third-party suppliers.
- [ ] `robots.txt` and `sitemap.xml` match the final public URL.