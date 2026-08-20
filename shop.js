(() => {
  const grid = document.querySelector('#product-grid');
  const count = document.querySelector('#shop-count');
  if (!grid || !count) return;

  let products = [];
  const copy = {
    fr: { count: n => `${n} œuvres`, buy: 'Acheter', soon: 'Bientôt disponible', sold: 'Épuisé', empty: 'Aucune œuvre disponible.' },
    en: { count: n => `${n} works`, buy: 'Purchase', soon: 'Coming soon', sold: 'Sold out', empty: 'No works available.' },
    zh: { count: n => `${n} 件作品`, buy: '购买', soon: '即将上线', sold: '已售罄', empty: '暂无可购买作品。' }
  };

  let currentLanguage = localStorage.getItem('xing-language') || 'fr';
  const safe = value => String(value ?? '').replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
  const localized = (product, field, lang) => product[`${field}_${lang}`] || product[`${field}_fr`] || '';

  function render(nextLanguage) {
    currentLanguage = nextLanguage || currentLanguage;
    const lang = currentLanguage;
    const labels = copy[lang] || copy.fr;
    const visible = products.filter(product => product.published !== false).sort((a, b) => (a.order || 999) - (b.order || 999));
    count.textContent = labels.count(visible.length);
    if (!visible.length) {
      grid.innerHTML = `<p class="shop-empty">${labels.empty}</p>`;
      return;
    }
    grid.innerHTML = visible.map(product => {
      const title = localized(product, 'title', lang);
      const description = localized(product, 'description', lang);
      const status = product.status || 'coming-soon';
      const available = status === 'available' && product.checkout_url;
      const button = available ? labels.buy : status === 'sold-out' ? labels.sold : labels.soon;
      const badge = status === 'sold-out' ? `<span class="product-badge">${labels.sold}</span>` : '';
      return `<article class="product-card">
        <div class="product-image"><img src="${safe(product.cover || '1.jpg')}" alt="${safe(title)}" loading="lazy">${badge}</div>
        <div class="product-info">
          <div class="product-heading"><h2>${safe(title)}</h2><span class="product-price">${safe(product.price || '')}</span></div>
          <p class="product-meta">${safe(product.format || 'Digital edition')}</p>
          <p class="product-description">${safe(description)}</p>
          <a class="buy-button" href="${available ? safe(product.checkout_url) : '#'}" ${available ? 'target="_blank" rel="noopener"' : 'aria-disabled="true"'}>${button}</a>
        </div>
      </article>`;
    }).join('');
  }

  fetch('data/products.json', { cache: 'no-store' })
    .then(response => {
      if (!response.ok) throw new Error('Products could not be loaded');
      return response.json();
    })
    .then(data => { products = Array.isArray(data) ? data : []; render(); })
    .catch(() => { products = []; render(); });

  window.addEventListener('xing-language-change', event => render(event.detail?.language));
})();
