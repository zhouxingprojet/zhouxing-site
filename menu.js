(() => {
  const style = document.createElement('style');
  style.textContent = "

/* Unified header language controls and footer */
.site-header .header-actions{display:flex;align-items:center;gap:12px;margin-left:auto}
.site-header .header-locale{display:flex;align-items:center;justify-content:flex-end;gap:4px;margin:0;color:var(--muted)}
.site-header .header-locale .lang-button{padding:5px 3px}
.site-header .header-actions .menu-toggle{order:0;margin:0}
.site-header.menu-open .header-actions{position:absolute;top:24px;right:48px;z-index:2;margin:0}
.site-header.menu-open .header-actions .header-locale{display:flex;color:var(--ink)}
.site-header.menu-open .header-actions .menu-toggle{position:static;top:auto;right:auto}
footer{align-items:center;gap:18px}
footer .footer-version{flex:1;text-align:left}
footer .footer-instagram{display:inline-flex;align-items:center;justify-content:flex-end;flex:0 0 auto;width:28px;color:var(--ink);text-decoration:none}
footer .footer-instagram .instagram-icon{display:block;width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
footer .footer-instagram .instagram-dot{fill:currentColor;stroke:none}
.site-header.menu-open .menu-footer .menu-instagram{justify-content:flex-end}
.site-header.menu-open .menu-footer .instagram-icon{width:17px;height:17px}
@media(max-width:850px){
  .site-header{display:grid;grid-template-columns:1fr auto;align-items:center}
  .site-header .identity{grid-column:1;grid-row:1}
  .site-header .header-actions{grid-column:2;grid-row:1;gap:8px}
  .site-header .header-locale{gap:2px}
  .site-header .header-locale .lang-button{font-size:8px;padding:5px 2px}
  .site-header.menu-open .header-actions{top:16px;right:16px}
  footer{flex-wrap:nowrap;gap:12px}
  footer .footer-instagram{width:24px}
}
";
  document.head.append(style);
  const header = document.querySelector('.site-header');
  const nav = header?.querySelector('nav');
  if (!header || !nav) return;
  header.querySelectorAll('.menu-toggle, .menu-footer').forEach(el => el.remove());

  const links = [
    ['index.html', 'Accueil'],
    ['portfolio.html', 'Œuvres'],
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

  let locale = header.querySelector(':scope > .locale');
  if (!locale) {
    locale = document.createElement('p');
    locale.className = 'locale header-locale';
    locale.textContent = 'FR / EN / 中文';
  } else {
    locale.classList.add('header-locale');
  }

  const actions = document.createElement('div');
  actions.className = 'header-actions';
  actions.append(locale);
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'menu-toggle';
  button.setAttribute('aria-controls', 'site-menu');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Menu');
  button.innerHTML = '<span></span><span></span><span></span>';
  actions.append(button);
  header.append(actions);

  const instagram = '<svg class="instagram-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4.25"></circle><circle class="instagram-dot" cx="17.5" cy="6.5" r=".85"></circle></svg>';
  const instagramLink = '<a class="footer-instagram" href="https://www.instagram.com/xingzhou.asia/" target="_blank" rel="noreferrer" aria-label="Instagram de Xing Zhou">' + instagram + '</a>';
  const footer = document.querySelector('footer');
  if (footer) footer.innerHTML = '<span class="footer-version">© 2026 · Xing Zhou</span>' + instagramLink;

  const menuFooter = document.createElement('div');
  menuFooter.className = 'menu-footer';
  menuFooter.setAttribute('aria-hidden', 'true');
  menuFooter.innerHTML = '<span class="menu-copyright">Xing Zhou · © 2026</span><a class="menu-instagram" href="https://www.instagram.com/xingzhou.asia/" target="_blank" rel="noreferrer" aria-label="Instagram de Xing Zhou">' + instagram + '</a>';
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
  nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('click', event => { if (!header.contains(event.target)) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { close(); button.focus(); } });
})();
