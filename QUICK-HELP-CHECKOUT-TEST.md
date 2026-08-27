# Quick Help $45 — Stripe test-mode simulation

## Test customer
John & Susan Miller — U.S. couple, first Japan trip, 8 nights, Tokyo + Kyoto.

## Three questions
1. Marunouchi or Shinjuku for easy transportation, quieter evenings and comfortable hotels?
2. Is four nights Tokyo + four nights Kyoto a sensible split?
3. Simplest Tokyo-to-Kyoto transfer with two medium suitcases?

## End-to-end test
1. Open the English homepage and choose Quick Help $45.
2. Confirm Stripe Checkout opens in TEST MODE and shows Japan Insider / Quick Help / $45.
3. Complete a Stripe test payment.
4. Confirm return to `thank-you.html`.
5. Open `intake.html?plan=quick`.
6. Submit the three questions and trip details.
7. Verify the on-page acknowledgement, reference number, Formspree submission, and saved/copied customer receipt.
8. After payment and required details are verified, send and record the written work-start confirmation email. Research begins when that email is sent.
9. Prepare the answer using the delivery template.
10. Deliver within the promised service window and preserve payment/intake/delivery records.

## Pass criteria
- No appointment or video call is implied.
- No booking on the customer's behalf is promised.
- Quick Help is listed at $45 USD; Stripe may display a localized checkout currency where supported, with the final amount and currency shown before payment.
- Premium is email support, not live chat.
- Personal target delivery: 5 business days after required information is received.
- Premium target delivery: 7 business days after required information is received.
- Customer makes and pays third-party reservations directly.

## Stripe setup
Use the actual Stripe TEST-mode Quick Help Payment Link in `assets/js/payments.js`. Do not invent a URL. After the complete flow passes and the account is ready, replace it with the LIVE Payment Link.
