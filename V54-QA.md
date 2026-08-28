# V54 QA — 2026-08-28

Built directly from the deployed v53 source on GitHub.

## Requested changes
1. Give the sender a reliable record after a successful inquiry submission.
2. Reduce the footer build/version number so it is approximately the same size as the adjacent version-history text.

## Submission receipt behavior
- A reference in the form `LOR-YYYYMMDD-XXXXXX` is generated immediately before submission.
- The same `submission_reference`, `submitted_at_jst`, and `page_language` values are included in the Formspree POST.
- The receipt is shown only after Formspree returns an HTTP success response.
- The receipt contains reference, JST submission time, name, email, service, and the submitted message.
- The sender can copy the complete receipt or use the browser Print / Save PDF flow.
- The detailed message is not persisted to localStorage after the visitor leaves the page.

## Privacy / failure behavior
- No receipt is shown if Formspree returns an error.
- No automatic test submission was sent during deployment.
- Existing honeypot protection remains enabled and hidden.
- Reply-To continues to mirror the submitted email address.

## Footer
- The version number remains in the Version history / 変更履歴 link.
- V54 explicitly resets the version number to `1em` and inherits the surrounding font weight, removing the oversized v53 presentation.

## Source-level checks
- Homepage uses `v54-home`, `assets/css/v54.css`, and `assets/js/v54.js`.
- Form contains hidden Formspree fields for the shared reference, JST timestamp, and page language.
- Receipt controls are type=button and cannot accidentally resubmit the form.
- Print CSS isolates the receipt for a clean paper/PDF record.
