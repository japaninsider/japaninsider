# Japan Insider — Stripe Setup

## Official sale currency
Website prices, official sale prices and Stripe checkout are all USD.

- Quick Help — $49
- Personal Plan — $199
- Premium — $499
- VIP — $999+ / individual quotation

Customers must see the exact USD amount before confirming payment.

Business type: Individual / sole proprietor (Japan)
Service name: Japan Insider
Legal operator: 脇濱正靖
Contact: honeytoraesp@gmail.com

Create all Stripe products/prices in USD. Add the homepage, Privacy, Terms and 特定商取引法 URLs, and test payment/refund flows before launch.

Post-payment intake:
- Quick: `https://japaninsider.github.io/japaninsider/intake.html?plan=quick`
- Personal: `https://japaninsider.github.io/japaninsider/intake.html?plan=personal`
- Premium: `https://japaninsider.github.io/japaninsider/intake.html?plan=premium`
- VIP: `https://japaninsider.github.io/japaninsider/intake.html?plan=vip`

Never commit secret keys, bank details or identity documents to GitHub.
