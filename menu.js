(() => {
  const header = document.querySelector('.site-header');
  const nav = header?.querySelector('nav');
  if (!header || !nav) return;

  const links = [
    ['index.html', 'Accueil'],
    ['works.html', 'Œuvres'],
    ['shop.html', 'Boutique'],
    ['portfolio.html', 'Projets'],
    ['Cv.html', 'Biographie / CV'],
    ['Contact.html', 'Contact']
  ];
  const current = location.pathname.split('/').pop() || 'index.html';
  nav.innerHTML = links.map(([href, label]) => `<a href="${href}"${current === href ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  nav.id = 'site-menu';

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'menu-toggle';
  button.setAttribute('aria-controls', 'site-menu');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Menu');
  button.innerHTML = '<span></span><span></span><span></span>';
  header.append(button);

  const close = () => {
    header.classList.remove('menu-open');
    button.setAttribute('aria-expanded', 'false');
  };
  button.addEventListener('click', () => {
    const open = !header.classList.contains('menu-open');
    header.classList.toggle('menu-open', open);
    button.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { close(); button.focus(); }
  });
})();
