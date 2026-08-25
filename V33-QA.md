# Japan Insider v33 — customer-facing cleanup

Changes:
- Replaced the duplicate EN/JA Quick Help promo blocks with one translation-driven block.
- Launch language behavior is now EN/JA only; stale Spanish browser/localStorage preference falls back to English.
- Removed duplicated booking language under FAQ and cleaned FAQ wording.
- Corrected Japanese Premium badge to factual "plan + during-trip email support"; removed "most popular" and "chat support" wording.
- Made delivery timing FAQ more precise.
- Rebuilt Terms, Privacy and Commerce Disclosure as EN/JA-only toggle pages.
- Removed legacy legal carve-outs such as "unless explicitly changed in writing" / "unless otherwise agreed".
- Made the work-start confirmation email the objective research-start point in Terms and Commerce Disclosure.
- Added objective revision definition to Terms.
- Kept the direct-booking boundary explicit: customers book/contract/pay providers directly.
- Updated all public HTML build markers to v33.
- Stripe Payment Link is intentionally NOT fabricated or connected in this build; checkout remains a separate next step.

Static QA:
- no public v32 marker
- no visible Spanish panel/switcher on Terms/Privacy/Legal
- no "MOST POPULAR" / Japanese "一番人気"
- no "chat support" / Japanese "チャットサポート"
- no legacy legal carve-out phrases
- no mailto handler reintroduced
