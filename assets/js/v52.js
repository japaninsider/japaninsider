(() => {
  const root = document.documentElement;
  const nav = document.querySelector('.main-nav');
  const menuButton = document.querySelector('.menu-toggle');
  const form = document.getElementById('loruneiInquiry');
  const selectEn = document.getElementById('planSelectEn');
  const selectJa = document.getElementById('planSelectJa');

  const TITLES = {
    en: 'LORUNEI — Personal Japan Trip Planning',
    ja: 'LORUNEI — 日本旅行のパーソナル・プランニング'
  };

  function normalizeLang(value) {
    return value === 'ja' ? 'ja' : 'en';
  }

  function syncServiceSelects(lang) {
    if (!selectEn || !selectJa) return;
    const active = lang === 'ja' ? selectJa : selectEn;
    const inactive = lang === 'ja' ? selectEn : selectJa;
    if (inactive.value !== active.value && active.value) inactive.value = active.value;
    active.disabled = false;
    inactive.disabled = true;
  }

  function syncInternalLinks(lang) {
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || /^(https?:|mailto:|tel:|javascript:)/i.test(href)) return;
      if (!/\.html(?:[?#]|$)/i.test(href)) return;
      try {
        const u = new URL(href, location.href);
        u.searchParams.set('lang', lang);
        a.setAttribute('href', u.pathname.split('/').pop() + u.search + u.hash);
      } catch (_) {}
    });
  }

  function setLanguage(value) {
    const lang = normalizeLang(value);
    root.lang = lang;
    document.title = TITLES[lang];
    try {
      localStorage.setItem('loruneiLang', lang);
      // Read compatibility for visitors who used an older build.
      localStorage.setItem('japanInsiderLang', lang);
    } catch (_) {}

    document.querySelectorAll('[data-lang]').forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    syncServiceSelects(lang);
    syncInternalLinks(lang);
  }

  let initial = new URLSearchParams(location.search).get('lang');
  try {
    initial = initial || localStorage.getItem('loruneiLang') || localStorage.getItem('japanInsiderLang');
  } catch (_) {}
  initial = initial || ((navigator.language || '').toLowerCase().startsWith('ja') ? 'ja' : 'en');
  setLanguage(initial);

  document.addEventListener('click', event => {
    const langButton = event.target.closest('[data-lang]');
    if (langButton) {
      setLanguage(langButton.dataset.lang);
      return;
    }

    const planLink = event.target.closest('[data-plan]');
    if (planLink) {
      const plan = planLink.dataset.plan;
      if (selectEn) selectEn.value = plan;
      if (selectJa) selectJa.value = plan;
    }

    if (event.target.closest('.main-nav a') && window.innerWidth <= 900) {
      nav?.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
    }
  });

  menuButton?.addEventListener('click', () => {
    const open = !nav?.classList.contains('open');
    nav?.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      nav?.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
    }
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }

  if (form) {
    const emailInput = form.querySelector('input[name="email"]');
    const replyTo = document.getElementById('replyToField');
    const status = document.getElementById('formStatus');

    emailInput?.addEventListener('input', () => {
      if (replyTo) replyTo.value = emailInput.value.trim();
    });

    form.addEventListener('submit', async event => {
      event.preventDefault();
      const ja = root.lang === 'ja';
      if (replyTo && emailInput) replyTo.value = emailInput.value.trim();
      if (status) status.textContent = ja ? '送信しています…' : 'Sending…';
      const button = form.querySelector(ja ? 'button[type="submit"].lang-ja' : 'button[type="submit"].lang-en');
      if (button) button.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (!response.ok) throw new Error('Formspree submit failed');
        form.reset();
        syncServiceSelects(root.lang);
        if (replyTo) replyTo.value = '';
        if (status) status.textContent = ja
          ? '送信しました。Formspreeの自動返信が有効な場合、入力したメールアドレスに確認メールが届きます。'
          : 'Sent. If Formspree guest autoresponse is enabled, a confirmation email will arrive at the address you entered.';
      } catch (_) {
        if (status) status.textContent = ja
          ? '送信できませんでした。時間をおいてもう一度お試しください。'
          : 'We could not send your inquiry. Please try again in a moment.';
      } finally {
        if (button) button.disabled = false;
      }
    });
  }
})();
