# LORUNEI v57b2 QA

## Source
Built from the user-supplied `LORUNEI-v57-kai-github-ready.zip`.

## Product definition preserved
- Quick Help remains **USD 49**.
- Scope remains **one focused Japan travel topic with up to 3 closely related questions**.
- Intake keeps one main question plus two optional related-question fields.
- Japan Answer remains **USD 99** and is positioned as one connected Decision Brief, not as two Quick Helps.

## Cleanup completed
- Homepage now uses `v57b2.css` and `v57b2.js`.
- Samples page no longer duplicates CSS and JS inline.
- Samples now uses `samples-v57b2.css` and `samples-v57b2.js`.
- Unused `assets/js/main.js` is retired and no longer contains stale $45 / legacy Japan Insider plan constants.
- Current public build markers are standardized to `v57b2`.

## Stripe
- `STRIPE_QUICK_PAYMENT_LINK` remains blank because no real production Payment Link was supplied.
- Quick Help CTAs safely fall back to the inquiry form.
- No fabricated checkout URL was added.

## Static validation
- No current public page uses the old “one question” Quick Help wording.
- Current product prices remain $49 / $99 / $299 / $999+.
- Terms and Commerce Disclosure retain the $49 → $99 credit policy with $50 remaining and customer approval required.

## Additional technical checks
- JavaScript syntax check passed for `v57b2.js`, `samples-v57b2.js` and `payments.js`.
- Local HTML `href` / `src` reference scan found no missing files.
- Homepage Formspree endpoint remains `xeajbpvn`; the existing `_gotcha` honeypot remains present on the homepage inquiry form.
- Active current pages contain no `$45` price.
- Active current pages contain no old “one focused question” / 「1つの質問から始める」 Quick Help wording.
- Samples page contains no inline `<style>` block and no inline sample-controller IIFE.

## Rendering note
- A local browser-render attempt was made, but this environment blocks browser navigation to local/file URLs (`ERR_BLOCKED_BY_ADMINISTRATOR`).
- Therefore this QA does **not** claim final pixel-level PC/mobile rendering. After deployment, public EN/JA desktop/mobile screenshots should still be checked.

## CSS scope correction
- Corrected an accidental `v57b2b2-home` selector prefix to `v57b2-home` so the current homepage body class matches the v57b2 stylesheet.