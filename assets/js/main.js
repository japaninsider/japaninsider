const CONTACT_EMAIL = "replace-with-your-email@example.com";

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.querySelectorAll('[data-plan]').forEach(link => {
  link.addEventListener('click', () => {
    const select = document.getElementById('planSelect');
    if (select) select.value = link.dataset.plan;
  });
});

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form?.addEventListener('submit', e => {
  e.preventDefault();
  if (CONTACT_EMAIL.includes('replace-with-your-email')) {
    status.textContent = 'Site owner: add your real email address in assets/js/main.js before publishing.';
    return;
  }
  const data = new FormData(form);
  const subject = `Japan Insider inquiry — ${data.get('plan')}`;
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPlan: ${data.get('plan')}\n\nTrip details:\n${data.get('message')}`;
  window.location.href = `mailto:${encodeURIComponent(CONTACT_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = 'Your email app should open with the inquiry prepared.';
});

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
