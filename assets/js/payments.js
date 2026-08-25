// Japan Insider payment configuration
// Paste the live Stripe Payment Link URL below after Stripe approval.
// Example: const STRIPE_QUICK_PAYMENT_LINK = "https://buy.stripe.com/...";
const STRIPE_QUICK_PAYMENT_LINK = "";

(function(){
  const btn = document.getElementById("quickCheckoutButton");
  if (!btn) return;
  if (STRIPE_QUICK_PAYMENT_LINK) {
    btn.href = STRIPE_QUICK_PAYMENT_LINK;
    btn.target = "_blank";
    btn.rel = "noopener";
    btn.textContent = "Get Quick Help — $49";
  }
})();
