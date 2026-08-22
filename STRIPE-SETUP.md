# STRIPE-SETUP.md

## Japan Insider Stripe setup checklist

Business type: Individual / sole proprietor (Japan)
Business / service name: Japan Insider
Legal operator: 脇濱正靖
Contact email: honeytoraesp@gmail.com

Public website pricing:
- Quick Help — $49
- Personal Plan — $199
- Premium — $499
- VIP — $999+

Intended actual checkout currency: EUR

Before going live:
1. Complete Stripe identity/business verification using the operator's real private information.
2. Add a payout account accepted by the Japanese Stripe account.
3. Create the four EUR products/prices.
4. Configure statement descriptor and customer support details.
5. Add website URLs:
   - Homepage
   - Privacy Policy
   - Terms of Service
   - 特定商取引法に基づく表記
6. Test successful payment, failed payment, refund, and customer receipt.
7. Confirm the exact EUR charge is shown before the customer confirms payment.
8. Never commit Stripe secret keys or identity/bank details to GitHub.

This file intentionally contains no bank account numbers, residential address, phone number, password, or API secret.


## Exact EUR prices to create in Stripe

- Japan Quick Help — EUR 49
- Japan Personal Plan — EUR 199
- Japan Premium — EUR 499
- Japan VIP — from EUR 999 (individual quotation / custom payment link as appropriate)

Keep the website's USD figures as reference prices only. The final Stripe Checkout page must show the exact EUR amount before payment.
