# v32
- Adds a unique reference number to each general inquiry and intake submission.
- Adds ISO submission timestamp and reference to Formspree payload.
- Shows reference number and submission time to the customer after successful submit.
- Intake page also shows an on-screen copy of submitted fields until page reload/navigation.
- Uses `email` field already present for Formspree Reply-To.
- Customer autoresponse email is NOT silently enabled in code: Formspree's autoresponse is a dashboard Workflow feature and currently requires Professional/Business. Formspree also states that including submitted form data in the autoresponse requires a custom domain, so v32 does not promise emailed copies.
- Build marker updated to v32.
