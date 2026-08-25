# v31 QA
Root cause fixed: assets/js/main.js still contained the legacy contact-form submit listener that redirected to `mailto:`. It ran before the new Formspree handler and opened the mail app.

Changes:
- Removed the legacy `mailto:` submit handler from main.js.
- Kept the Formspree direct-submit handler.
- Removed obsolete “email app will open” customer-facing copy.
- Updated intake wording to direct submission.
- Updated discreet build marker to v31.
- Static QA confirms no `mailto:` remains in public HTML/JS.
