# GitHub Commit — v57b2

## Commit message
Clean v57 package and preserve three-question Quick Help

## Extended description
- Build directly from the revised v57 package supplied by the user.
- Preserve Quick Help at $49 for one focused Japan travel topic with up to 3 closely related questions.
- Externalize Samples CSS and JS so there is one source of truth instead of duplicated inline code.
- Retire the unused legacy main.js runtime and remove stale $45 / old Japan Insider plan constants from that file.
- Keep the real Stripe Quick Help Payment Link unset until an actual production URL is supplied; retain safe inquiry fallback.
- Standardize visible current build markers to v57b2.
- Preserve current Terms, Commerce Disclosure, Intake, Formspree flow and $49-to-$99 upgrade credit behavior.

- Correct the v57b2 homepage selector scope so current styles apply to `v57b2-home`.