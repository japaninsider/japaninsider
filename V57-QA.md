# LORUNEI v57 — change and QA record

Date: 2026-08-29

## Customer-path changes

- Reframed the homepage for first-time U.S. travelers, led by affluent couples in their 40s.
- Replaced “more content = higher price” with four clearly different problem sizes: one topic, one decision, a named shortlist and the whole trip.
- Added one shared traveler profile so the four prices can be compared without four unrelated stories.
- Rebuilt `samples.html` as an interactive one-panel-at-a-time comparison in English and Japanese.
- Added concrete $299 named-option research and a complete $999+ ten-night journey outline.
- Connected every Quick Help CTA to the same payment configuration and safe inquiry fallback.
- Clarified the post-payment sequence and added first-visit status to the intake.

## Consistency decisions

- Tokyo 4 → Hakone 1 → Kyoto 5 is the recommended $99 / $999 route for the sample couple.
- Hakone is chosen for ryokan, onsen and pacing—not as a guaranteed Mount Fuji viewing stop.
- Shinkansen is not treated as a Kyoto-only benefit; the recommendation is based on trip rhythm and stay experience.
- Named hotels, prices and availability in samples are explicitly illustrative and rechecked during real paid research.
- LORUNEI remains a planning and research service; customers book and pay third parties directly.

## Before public launch

The real Stripe Payment Link, Stripe success redirect and legal business particulars remain owner-supplied launch items. See `SITE-QA.md` and `STRIPE-SETUP.md`.