# Japan Insider — Order Workflow

1. Customer chooses a plan.
2. Stripe shows the exact checkout amount and currency. Site prices are listed in USD; Stripe may display a localized currency where supported.
3. After payment, send the customer to the matching intake URL.
4. Customer submits travel details.
5. Confirm payment, any missing information, and the delivery timing.
6. Send the work-start confirmation email. Individualized research begins when this email is sent.
7. Research and prepare the deliverable.
8. Quality-check date-sensitive facts, links, opening hours, travel times, and prices.
9. Deliver in the customer's preferred language.

## Deliverables
- Quick Help: up to 3 focused researched answers.
- Personal: personalized itinerary + area/food/activity research.
- Premium: detailed plan + extra research + 7 days of travel support.
- VIP: fully customized high-touch planning + priority research + concierge-style support.

Do not request passport numbers, card details, passwords, or other sensitive credentials through the intake form.


## Quick Help service standard
- No video call or appointment.
- Customer submits up to 3 focused questions through the intake form.
- Research the questions and reply by email, usually within 2 business days.
- If a question requires clarification, ask by email before completing the answer.

## v15 — Quick Help operational flow

1. Customer pays $49 in Stripe.
2. Customer is redirected to `intake.html?plan=quick`.
3. Customer enters basic trip details and up to 3 focused questions.
4. Japan Insider confirms the Stripe payment.
5. If necessary, only missing information is requested by email.
6. Japan Insider sends the work-start confirmation email once payment and the information needed to begin are verified.
7. Individualized research begins when the work-start confirmation email is sent.
8. A concise researched answer is delivered to the customer's email, usually within 2 business days after the information needed to begin is received.

No appointment or video call is required for Quick Help.
