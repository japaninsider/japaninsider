# V53 QA — 2026-08-28

Built directly from the deployed v52 source on GitHub.

## Public screenshot findings fixed
- The Formspree honeypot field (`_gotcha`) was visible at the top of the inquiry form because its hide rule was still scoped to an older body class.
- The visible footer version number had not yet received the requested 2× font-size treatment.

## V53 changes
- Added a current-scope `.v53-home .hp-field` hide rule.
- Added a footer version selector that changes only the version number's font size to `2em`; inherited color and tone are unchanged.
- Migrated the consolidated homepage CSS scope from `.v52-home` to `.v53-home`.
- Carried the stable homepage JavaScript forward as `v53.js` without functional changes.
- Updated visible build/version markers to v53.

## Source-level checks
- Homepage loads `style.css` + `v53.css` and `v53.js`.
- Homepage body uses only `v53-home` as the current version scope.
- Honeypot remains in the form for spam protection but is positioned off-screen and transparent.
- Footer version remains linked to Version History / 変更履歴 and displays v53.
