# Japan Insider — Order Workflow

1. Customer chooses a plan.
2. Stripe shows the exact USD checkout amount.
3. After payment, send the customer to the matching intake URL.
4. Customer submits travel details.
5. Confirm any missing information and the delivery date.
6. Research and prepare the deliverable.
7. Quality-check date-sensitive facts, links, opening hours, travel times, and prices.
8. Deliver in the customer's preferred language.

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
6. Research begins.
7. A concise researched answer is delivered to the customer's email, usually within 2 business days.

No appointment or video call is required for Quick Help.
