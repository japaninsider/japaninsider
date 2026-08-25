# STRIPE-SETUP.md

## Current commercial model
Japan Insider sells travel research, comparison, information and consultation. Customers book and pay hotels, transportation, restaurants and other travel providers directly.

## Official prices
- Quick Help — $49
- Personal Plan — $199
- Premium — $499
- VIP — $999+

## Quick Help product description for Stripe
“Online Japan travel research service for international travelers. Customers submit up to three specific Japan travel questions through an online form and receive individualized researched answers by email, usually within two business days. No hotel, transportation or package-tour booking is sold.”

## Business description for Stripe
“Japan Insider provides personalized Japan travel research, itinerary guidance, restaurant/neighborhood/shopping research and online consultation for international travelers. Customers contract and pay directly with hotels, airlines, rail operators, restaurants and other third-party providers. Japan Insider does not sell package travel, transportation or accommodation.”

## Before applying / going live
- Use the operator’s exact legal identity and private address/phone in Stripe.
- Website URL, operator information and business description must match the actual business.
- Add `legal.html` as the Commerce Disclosure URL.
- Add `privacy.html` and `terms.html`.
- Use `JAPAN INSIDER` as a candidate statement descriptor, subject to Stripe’s current rules.
- Configure the Quick Help product in USD 49.
- Create a Stripe Payment Link.
- Paste the live Payment Link into `assets/js/payments.js`.
- Configure post-payment redirect to:
  `https://japaninsider.github.io/japaninsider/thank-you.html`
  (replace with the custom domain later).
- Test successful payment, failed payment, receipt and refund.

## Do not store in GitHub
Do not commit Stripe secret keys, bank account numbers, identity documents, passwords or other private credentials.
