# V55 QA — 2026-08-28

Built directly from the deployed v54 complete package.

## Requested product / conversion changes
- Quick Help current price unified to **$49**.
- Quick Help repositioned as **one focused travel issue** and the easiest way to try LORUNEI.
- Added concrete, same-question deliverable previews for **Quick Help $49** and **Japan Answer $99**.
- Japan Answer explicitly positioned as a **Decision Brief**, not two Quick Help answers combined.
- Added an upgrade-credit rule: if the request is identified before deeper individualized work begins as clearly better suited to Japan Answer, the customer may keep Quick Help scope or apply the full $49 to Japan Answer, leaving $50 due. No upgrade charge without customer approval.

## Browser rendering QA performed
Actual homepage DOM/CSS/JS was rendered in Chromium at 1440×1000 and 390×844 for EN and JA. The environment blocks direct localhost navigation, so local image URLs were replaced with placeholders for layout QA; asset presence was checked separately.

- PC EN: PASS — no horizontal overflow, $49, EN comparison only, 0 JS errors.
- PC JA: PASS — no horizontal overflow, localized comparison only, 0 JS errors.
- Mobile EN: PASS — no horizontal overflow, menu open/close, $49, 0 JS errors.
- Mobile JA: PASS — no horizontal overflow, menu open/close, localized comparison, 0 JS errors.
- Samples Mobile EN/JA: PASS — no horizontal overflow.
- Mocked-success form regression: receipt displayed after success, LOR reference generated, service recorded as Quick Help — $49, 0 JS errors.
- Footer regression: Version history link and v55 computed at the same font size.

Historical QA/version-history files intentionally retain older prices when documenting older releases.
