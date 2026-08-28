# V52 QA — 2026-08-28

Source of truth: `lorunei-v51-complete-footer-legal.zip`.
V52 was built directly from the complete v51 package; no older differential ZIP was used as the base.

## What changed
- Consolidated the current hero pronunciation rules, navy header / responsive navigation rules, Japanese containment rules, and the v51 five-column footer into `assets/css/v52.css` under a single `.v52-home` scope.
- Homepage now loads `style.css` + `v52.css` only. Historical version CSS files remain in the package but are not active on the homepage.
- Replaced the duplicate `main.js` + `v48.js` homepage controllers with a single `assets/js/v52.js` controller to prevent double hamburger toggling.
- Language controls remain EN / 日本語 only.
- Formspree remains an in-page form at `https://formspree.io/f/xeajbpvn`; `_replyto` is synchronized from the guest email field. Guest autoresponse still depends on the Formspree dashboard setting.
- Only the currently visible language version of the service `<select>` is enabled for Formspree submission, preventing duplicate `service` fields.
- Fixed localized footer link groups so Services / Company / Resources / Connect links stack vertically instead of running together.
- Updated Terms and post-payment Intake from the obsolete Personal / Premium / VIP model to the current Quick Help / Japan Answer / Japan Research / Private Japan Planning model.
- Removed stale `japaninsider.github.io/japaninsider` canonical tags from Privacy and Terms rather than inventing a new canonical URL.

## Four-layout homepage rendering QA
Automated Chromium layout checks were run at 1440×1000 (PC) and 390×844 (mobile).

| Case | Horizontal overflow | Header | Hero pronunciation | Current prices | Footer | Mobile menu | JS errors |
|---|---|---|---|---|---|---|---|
| PC EN | PASS | Navy, LORUNEI visible | `lor-OO-nay` | $45 / $99 / $299 / from $999 | 5-column desktop structure | n/a | 0 |
| PC JA | PASS | Navy, LORUNEI visible | `ロルーネイ` | $45 / $99 / $299 / $999〜 | 5-column desktop structure | n/a | 0 |
| Mobile EN | PASS | Navy, LORUNEI visible | `lor-OO-nay` | $45 / $99 / $299 / from $999 | 1-column mobile stack | opens/closes correctly | 0 |
| Mobile JA | PASS | Navy, LORUNEI visible | `ロルーネイ` | $45 / $99 / $299 / $999〜 | 1-column mobile stack | opens/closes correctly | 0 |

Measured scroll width matched viewport width in all four cases (no page-level horizontal overflow).

## Content / structural checks
- Header contains symbol-left + `LORUNEI` name; no pronunciation in header.
- Hero contains EN `lor-OO-nay` and JA `ロルーネイ`.
- Footer groups are Brand / Services / Company / Resources / Connect.
- EN shows Commerce Disclosure; JA shows 特定商取引法に基づく表記.
- Homepage service form contains current options only: $45 / $99 / $299 / $999+.
- Public HTML contains no `$199`, `$459`, `Personal Plan`, `Premium`, or `Japan VIP` remnants.
- Public HTML exposes no Spanish language switch.
- All local HTML `href` / `src` references resolve to files present in the package.

## Environment limitation
The QA harness could execute the actual HTML/CSS/JS in Chromium, but direct navigation to localhost / file URLs was blocked by the environment. Layout screenshots therefore used the real CSS/JS with image URLs replaced by placeholders; image-file presence and local references were checked separately. Final GitHub Pages QA should still verify actual image loading, relative paths, cache, and 404 behavior after deployment.
