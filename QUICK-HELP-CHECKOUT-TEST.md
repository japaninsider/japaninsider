# Quick Help $49 — Stripe test-mode simulation

## Test customer
John & Susan Miller — U.S. couple, first Japan trip, 8 nights, Tokyo + Kyoto.

## Three questions
1. Marunouchi or Shinjuku for easy transportation, quieter evenings and comfortable hotels?
2. Is four nights Tokyo + four nights Kyoto a sensible split?
3. Simplest Tokyo-to-Kyoto transfer with two medium suitcases?

## End-to-end test
1. Open the English homepage and choose Quick Help $49.
2. Confirm Stripe Checkout opens in TEST MODE and shows Japan Insider / Quick Help / $49.
3. Complete a Stripe test payment.
4. Confirm return to `thank-you.html`.
5. Open `intake.html?plan=quick`.
6. Submit the three questions and trip details.
7. Verify the acknowledgement and customer email.
8. Record the written “research has started” acknowledgement.
9. Prepare the answer using the delivery template.
10. Deliver within the promised service window and preserve payment/intake/delivery records.

## Pass criteria
- No appointment or video call is implied.
- No booking on the customer's behalf is promised.
- Quick Help is $49 USD everywhere.
- Premium is email support, not live chat.
- Personal target delivery: 5 business days after required information is received.
- Premium target delivery: 7 business days after required information is received.
- Customer makes and pays third-party reservations directly.

## Stripe setup
Use the actual Stripe TEST-mode Quick Help Payment Link in `assets/js/payments.js`. Do not invent a URL. After the complete flow passes and the account is ready, replace it with the LIVE Payment Link.
