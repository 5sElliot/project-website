document.addEventListener('DOMContentLoaded', async () => {
  const includes = document.querySelectorAll('[data-include]');
  for (const el of includes) {
    const file = el.getAttribute('data-include');
    try {
      const res = await fetch(file, { cache: 'no-cache' });
      const html = await res.text();
      el.outerHTML = html;
    } catch (err) {
      console.error('Include failed:', file, err);
    }
  }
    setTimeout(() => {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(a => {
      if (a.getAttribute('href') === current) {
        a.setAttribute('aria-current', 'page');
      }
    });
  }, 150);
});