# SITE-QA.md

## Japan Insider site QA — 2026-08-22

Verified in this package:

- `index.html` contains a visible footer link to `legal.html`
- Footer legal label changes by language:
  - EN: Legal / Commerce disclosure
  - 日本語: 特定商取引法に基づく表記
  - ES: Información legal
- `legal.html` exists in the repository root
- `privacy.html` exists
- `terms.html` exists
- `legal.html` is included in `sitemap.xml`
- Contact email is configured as `infojapaninsider@gmail.com`
- Operator name is `脇濱正靖`
- Home page supports EN / 日本語 / ES
- Public pricing is USD
- Site copy states that actual checkout is processed in USD
- High-resolution `assets/images/about.jpg` is included
- No residential address, phone number, bank account number, password, or Stripe secret key is included in this public package

Expected GitHub Pages URL for legal page:

`https://japaninsider.github.io/japaninsider/legal.html`

After uploading to GitHub, open the homepage, scroll to the footer, and confirm that the Legal / 特商法 link opens the page above.


## v7 language QA
Verified sample page supports explicit `?lang=en`, `?lang=ja`, `?lang=es` and fixed sample headings have translations.


## v10 pricing QA
Verified Japanese pricing labels include 最大3つの質問 / 通常2営業日以内にメールで回答 / 予約・ビデオ通話不要 / 1回払い, with Spanish and English equivalents.
