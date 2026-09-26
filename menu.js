(() => {
  const style = document.createElement('style');
  style.textContent = [
    '.site-header .header-actions{display:flex;align-items:center;gap:12px;margin-left:auto}',
    '.site-header .header-locale{display:flex;align-items:center;justify-content:flex-end;gap:4px;margin:0;color:var(--muted)}',
    '.site-header .header-locale .lang-button{padding:5px 3px}',
    '.site-header .header-actions .menu-toggle{order:0;margin:0}',
    '.site-header.menu-open .header-actions{position:absolute;top:24px;right:48px;z-index:2;margin:0}',
    '.site-header.menu-open .header-actions .header-locale{display:flex;color:var(--ink)}',
    '.site-header.menu-open .header-actions .menu-toggle{position:static;top:auto;right:auto}',
    'footer{align-items:center;gap:18px}',
    'footer .footer-version{flex:1;text-align:left}',
    'footer .footer-instagram{display:inline-flex;align-items:center;justify-content:flex-end;flex:0 0 auto;width:28px;color:var(--ink);text-decoration:none}',
    'footer .footer-instagram .instagram-icon{display:block;width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}',
    'footer .footer-instagram .instagram-dot{fill:currentColor;stroke:none}',
    '.site-header.menu-open .menu-footer .menu-instagram{justify-content:flex-end}',
    '.site-header.menu-open .menu-footer .instagram-icon{width:17px;height:17px}',
    '.site-header.menu-open nav .menu-list{display:flex;flex-direction:column;align-items:center;gap:clamp(14px,2.2vh,28px);width:min(920px,100%);margin:0;padding:0;list-style:none}',
    '.site-header.menu-open nav .menu-item,.site-header.menu-open nav .menu-group{display:flex;flex-direction:column;align-items:center;width:100%;margin:0;padding:0}',
    '.site-header.menu-open nav .menu-parent-row{display:flex;align-items:center;justify-content:center;width:100%}',
    '.site-header.menu-open nav .menu-parent{appearance:none;border:0;background:transparent;color:var(--ink);font:inherit;cursor:pointer;margin:0;padding:0;text-align:center}',
    '.site-header.menu-open nav .menu-parent::after{content:"+";display:inline-block;margin-left:10px;color:var(--muted);font-size:.75em;font-weight:400}',
    '.site-header.menu-open nav .menu-group.is-expanded>.menu-parent-row .menu-parent::after{content:"−"}',
    '.site-header.menu-open nav .menu-submenu{display:none;flex-wrap:wrap;justify-content:center;gap:5px 22px;width:100%;max-width:760px;margin:4px 0 0;padding:11px 0 0;border-top:1px solid var(--line);list-style:none}',
    '.site-header.menu-open nav .menu-group.is-expanded>.menu-submenu{display:flex}',
    '.site-header.menu-open nav .menu-submenu a{padding:3px 6px;color:var(--muted);font-size:clamp(12px,1.45vw,20px);font-weight:400;line-height:1.15;letter-spacing:-.01em;white-space:nowrap}',
    '.site-header.menu-open nav .menu-submenu .menu-submenu{width:auto;max-width:none;margin:3px 0 0;padding:3px 0 0;border-top:0;gap:4px 16px}',
    '.site-header.menu-open nav .menu-submenu .menu-group{width:auto;align-items:center}',
    '.site-header.menu-open nav .menu-submenu .menu-group>.menu-parent-row .menu-parent{font-size:clamp(15px,1.8vw,25px);color:var(--ink)}',
    '.site-header.menu-open nav .menu-submenu .menu-group>.menu-submenu{flex-direction:column;align-items:center;gap:2px}',
    '.site-header.menu-open nav .menu-submenu .menu-group>.menu-submenu a{font-size:clamp(11px,1.2vw,16px)}',
    '@media(max-width:850px){.site-header{display:grid;grid-template-columns:1fr auto;align-items:center}.site-header .identity{grid-column:1;grid-row:1}.site-header .header-actions{grid-column:2;grid-row:1;gap:8px}.site-header .header-locale{gap:2px}.site-header .header-locale .lang-button{font-size:8px;padding:5px 2px}.site-header.menu-open .header-actions{top:16px;right:16px}footer{flex-wrap:nowrap;gap:12px}footer .footer-instagram{width:24px}.site-header.menu-open nav .menu-list{gap:13px}.site-header.menu-open nav .menu-submenu{gap:4px 13px;padding-top:8px}.site-header.menu-open nav .menu-submenu a{font-size:clamp(11px,3.4vw,16px)}.site-header.menu-open nav .menu-submenu .menu-group>.menu-parent-row .menu-parent{font-size:clamp(14px,4.5vw,21px)}.site-header.menu-open nav .menu-submenu .menu-group>.menu-submenu a{font-size:clamp(10px,3vw,14px)}}'
  ].join('');
  document.head.append(style);
  const header = document.querySelector('.site-header');
  const nav = header?.querySelector('nav');
  if (!header || !nav) return;
  header.querySelectorAll('.menu-toggle, .menu-footer').forEach(el => el.remove());

  const links = [
    {
      href: 'portfolio.html',
      label: 'Œuvres',
      children: [
        ['portfolio.html', 'Tous les projets'],
        ['portfolio.html#interactive-works', 'Œuvres interactives'],
        ['portfolio.html#visual-art', 'Arts visuels'],
        ['portfolio.html#graphic-design', 'Design graphique']
      ]
    },
    {
      href: 'x-art-lab.html',
      label: 'X-ART Lab',
      children: [
        ['x-art-lab.html#presentation', 'Présentation de la plateforme'],
        ['x-art-lab.html#research', 'Recherche'],
        ['x-art-lab.html#artist-archives', 'Archives d’artistes'],
        ['https://x-art-lab.pages.dev/', 'Accéder à la plateforme', true]
      ]
    },
    {
      href: 'Cv.html#bio',
      label: 'À propos',
      children: [
        ['Cv.html#bio', 'Biographie'],
        ['Cv.html#cv', 'CV'],
        ['Cv.html#statement', 'Déclaration de l’artiste']
      ]
    },
    ['index.html', 'Accueil'],
    ['Contact.html', 'Contact'],
    ['shop.html', 'Boutique']
  ];
  const current = location.pathname.split('/').pop() || 'index.html';
  const isCurrent = href => {
    const target = href.split('#')[0];
    return target.startsWith('http') ? false : current === (target || 'index.html');
  };
  let groupCounter = 0;
  const renderItem = item => {
    if (Array.isArray(item)) {
      const [href, label, external] = item;
      return '<li class="menu-item"><a href="' + href + '"' + (external ? ' target="_blank" rel="noopener"' : '') + (isCurrent(href) ? ' aria-current="page"' : '') + '>' + label + '</a></li>';
    }
    const groupId = 'menu-submenu-' + (++groupCounter);
    const currentGroup = isCurrent(item.href) || item.children.some(child => isCurrent(Array.isArray(child) ? child[0] : child.href));
    return '<li class="menu-group' + (currentGroup ? ' is-current' : '') + '"><div class="menu-parent-row"><button type="button" class="menu-parent" aria-expanded="false" aria-controls="' + groupId + '">' + item.label + '</button></div><ul class="menu-submenu" id="' + groupId + '">' + item.children.map(renderItem).join('') + '</ul></li>';
  };
  nav.innerHTML = '<ul class="menu-list">' + links.map(renderItem).join('') + '</ul>';
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

  const collapseGroups = except => {
    nav.querySelectorAll('.menu-group.is-expanded').forEach(group => {
      if (group !== except) {
        group.classList.remove('is-expanded');
        const parent = group.querySelector(':scope > .menu-parent-row > .menu-parent');
        if (parent) parent.setAttribute('aria-expanded', 'false');
      }
    });
  };
  const close = () => {
    header.classList.remove('menu-open');
    document.body.classList.remove('menu-is-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Menu');
    menuFooter.setAttribute('aria-hidden', 'true');
    collapseGroups(null);
  };
  button.addEventListener('click', () => {
    const open = !header.classList.contains('menu-open');
    header.classList.toggle('menu-open', open);
    document.body.classList.toggle('menu-is-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Fermer le menu' : 'Menu');
    menuFooter.setAttribute('aria-hidden', String(!open));
    if (!open) collapseGroups(null);
  });
  nav.addEventListener('click', event => {
    const parent = event.target.closest('.menu-group > .menu-parent-row > .menu-parent');
    if (parent) {
      event.preventDefault();
      const group = parent.closest('.menu-group');
      const expanded = !group.classList.contains('is-expanded');
      collapseGroups(group);
      group.classList.toggle('is-expanded', expanded);
      parent.setAttribute('aria-expanded', String(expanded));
      return;
    }
    if (event.target.closest('a')) close();
  });
  document.addEventListener('click', event => { if (!header.contains(event.target)) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { close(); button.focus(); } });
})();
