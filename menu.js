(() => {
  const header = document.querySelector('.site-header');
  const nav = header?.querySelector('nav');
  if (!header || !nav) return;

  const links = [
    ['index.html', 'Accueil'],
    ['works.html', 'Œuvres'],
    ['portfolio.html', 'Projets'],
    ['graphic-design.html', 'Design graphique'],
    ['x-art-lab.html', 'X-ART Lab'],
    ['Cv.html', 'À propos / CV'],
    ['Contact.html', 'Contact'],
    ['shop.html', 'Boutique']
  ];
  const current = location.pathname.split('/').pop() || 'index.html';
  nav.innerHTML = links.map(([href, label]) => '<a href="' + href + '"' + (current === href ? ' aria-current="page"' : '') + '>' + label + '</a>').join('');
  nav.id = 'site-menu';
  nav.setAttribute('aria-label', 'Navigation principale');

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'menu-toggle';
  button.setAttribute('aria-controls', 'site-menu');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Menu');
  button.innerHTML = '<span></span><span></span><span></span>';
  header.append(button);

  const menuFooter = document.createElement('div');
  menuFooter.className = 'menu-footer';
  menuFooter.setAttribute('aria-hidden', 'true');
  menuFooter.innerHTML = '<span class="menu-copyright">© Xing Zhou 2026</span><a class="menu-instagram" href="https://www.instagram.com/xingzhou.asia/" target="_blank" rel="noreferrer" aria-label="Instagram de Xing Zhou"><svg class="instagram-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4.25"></circle><circle class="instagram-dot" cx="17.5" cy="6.5" r=".85"></circle></svg><span>Instagram</span></a><p class="locale">FR / EN / 中文</p>';
  header.append(menuFooter);

  const close = () => {
    header.classList.remove('menu-open');
    document.body.classList.remove('menu-is-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Menu');
    menuFooter.setAttribute('aria-hidden', 'true');
  };
  button.addEventListener('click', () => {
    const open = !header.classList.contains('menu-open');
    header.classList.toggle('menu-open', open);
    document.body.classList.toggle('menu-is-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Fermer le menu' : 'Menu');
    menuFooter.setAttribute('aria-hidden', String(!open));
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) close();
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { close(); button.focus(); }
  });
})();
