// LORUNEI payment configuration
// Paste the real Stripe Payment Link URL below after Stripe setup.
// Do not use a placeholder or fabricated URL.
const STRIPE_QUICK_PAYMENT_LINK = "";

(function(){
  const buttons = [
    document.getElementById("quickCheckoutButton"),
    document.getElementById("quickCheckoutButtonHero")
  ].filter(Boolean);

  if (!buttons.length) return;

  function currentLang(){
    const value = localStorage.getItem("japanInsiderLang") || document.documentElement.lang || "en";
    return value === "ja" ? "ja" : "en";
  }

  function applyCheckoutState(){
    const lang = currentLang();
    buttons.forEach(btn => {
      if (STRIPE_QUICK_PAYMENT_LINK) {
        btn.href = STRIPE_QUICK_PAYMENT_LINK;
        btn.target = "_blank";
        btn.rel = "noopener";
        btn.textContent = lang === "ja" ? "Quick Helpを購入 — $49" : "Get Quick Help — $49";
      } else {
        btn.href = "#inquiry";
        btn.removeAttribute("target");
        btn.removeAttribute("rel");
        btn.textContent = lang === "ja" ? "Quick Helpを依頼 — $49" : "Request Quick Help — $49";
      }
    });
  }

  applyCheckoutState();
  document.addEventListener("click", e => {
    if (e.target.closest && e.target.closest("[data-lang]")) setTimeout(applyCheckoutState, 20);
  });
})();