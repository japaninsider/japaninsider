
(() => {
  const root = document.documentElement;
  const menu = document.querySelector('.main-nav');
  const toggle = document.querySelector('.menu-toggle');

  function normalizeLang(value){
    return value === 'ja' ? 'ja' : 'en';
  }
  function updateButtons(lang){
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });
  }
  function updateLinks(lang){
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if(!href || href.startsWith('#') || /^(https?:|mailto:|tel:|javascript:)/i.test(href)) return;
      if(!/\.html(?:[?#]|$)/i.test(href)) return;
      try{
        const u = new URL(href, location.href);
        u.searchParams.set('lang', lang);
        a.setAttribute('href', u.pathname.split('/').pop() + u.search + u.hash);
      }catch(e){}
    });
  }
  function setLang(lang){
    lang = normalizeLang(lang);
    root.lang = lang;
    try{ localStorage.setItem('japanInsiderLang', lang); }catch(e){}
    updateButtons(lang);
    updateLinks(lang);
  }

  let initial = new URLSearchParams(location.search).get('lang');
  try{ initial = initial || localStorage.getItem('japanInsiderLang'); }catch(e){}
  initial = initial || ((navigator.language || '').toLowerCase().startsWith('ja') ? 'ja' : 'en');
  setLang(initial);

  document.addEventListener('click', e => {
    const lb = e.target.closest('[data-lang]');
    if(lb){
      setLang(lb.dataset.lang);
      return;
    }
    if(e.target.closest('.main-nav a') && window.innerWidth <= 900){
      menu?.classList.remove('open');
      toggle?.setAttribute('aria-expanded','false');
    }
  });

  toggle?.addEventListener('click', () => {
    const open = !menu?.classList.contains('open');
    menu?.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  window.addEventListener('resize', () => {
    if(window.innerWidth > 900){
      menu?.classList.remove('open');
      toggle?.setAttribute('aria-expanded','false');
    }
  });
})();
