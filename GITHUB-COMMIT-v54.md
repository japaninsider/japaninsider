# GitHub Commit — v54

## Commit message
Add inquiry submission receipts and refine footer version

## Extended description
Built directly from the deployed v53 source.

- Adds a successful-submission receipt containing a shared LORUNEI reference number, JST timestamp, sender details, selected service, and inquiry message.
- Sends the same reference number, timestamp, and page language to Formspree so LORUNEI can reconcile the sender's receipt with the backend submission record.
- Adds Copy receipt and Print / Save PDF actions, avoiding dependence on Formspree autoresponse email for the sender's record.
- Keeps detailed inquiry text out of browser persistence after the visitor leaves the page.
- Preserves the existing hidden Formspree honeypot and Reply-To behavior.
- Returns the footer version number to approximately the same size and weight as the surrounding Version history / 変更履歴 text.
- Updates visible version markers and version history to v54.
