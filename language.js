(() => {
  const dictionaries = {
    en: {
      'Retour au site': 'Back to website',
      'Administration unifiée': 'Unified administration',
      'Gérez ici les articles de X-ART Lab, les produits de la boutique, les clients, les commandes et les fichiers du site. Chaque service assure sa propre connexion sécurisée ; aucun mot de passe n’est conservé sur cette page.': 'Manage X-ART Lab articles, shop products, customers, orders, and website files here. Each service handles its own secure sign-in; no password is stored on this page.',
      'Publication des articles': 'Article publishing',
      'Ajouter, modifier et supprimer les articles de X-ART Lab en français, anglais et chinois': 'Add, edit, and delete X-ART Lab articles in French, English, and Chinese',
      'Site et produits de la boutique': 'Website and shop products',
      'Images, titres, descriptions, prix, disponibilité et liens de paiement': 'Images, titles, descriptions, prices, availability, and payment links',
      'Clients, abonnements et commandes': 'Customers, subscriptions, and orders',
      'Paiements, abonnements, informations clients, commandes et remboursements': 'Payments, subscriptions, customer details, orders, and refunds',
      'Fichiers du site': 'Website files',
      'Dépôt GitHub, historique des versions et état du déploiement': 'GitHub repository, version history, and deployment status',
      'Ne communiquez jamais vos mots de passe ni vos codes de vérification pour l’administration, GitHub ou Stripe.': 'Never share your administration, GitHub, or Stripe passwords or verification codes.',
      'Accueil': 'Home', 'Voir le projet': 'View project', 'Faire défiler': 'Scroll', 'Œuvres sélectionnées': 'Selected works', 'Installation, performance, textile et peinture.': 'Installation, performance, textile and painting.',
      'Œuvres': 'Works', 'Boutique': 'Shop', 'Projets': 'Projects', 'Biographie / CV': 'Biography / CV',
      'Application web créative': 'Creative web application',
      'Plateforme de recherche artistique': 'Art research platform',
      'Une plateforme trilingue pour lire des recherches sur l’art contemporain, retrouver vos articles et accéder aux contenus réservés aux abonnés.': 'A trilingual platform for reading contemporary art research, finding your articles, and accessing subscriber-only content.',
      'Fonctionne sur iPhone, iPad, Android et ordinateur. Les contenus publiés depuis le tableau de bord sont synchronisés automatiquement.': 'Works on iPhone, iPad, Android, and desktop. Content published from the dashboard is synchronized automatically.',
      'Lire': 'Read', 'Consultez des articles de recherche en français, anglais et chinois.': 'Read research articles in French, English, and Chinese.',
      'Rechercher': 'Search', 'Trouvez rapidement un article par titre, résumé ou catégorie.': 'Quickly find an article by title, summary, or category.',
      'Conserver': 'Save', 'Lisez et téléchargez vos articles depuis votre espace personnel.': 'Read and download articles from your personal space.',
      'Paiement sécurisé par Stripe. L’abonnement se renouvelle automatiquement et peut être annulé à tout moment.': 'Secure payment by Stripe. The subscription renews automatically and can be cancelled at any time.',
      'Un espace numérique pour observer, collecter et transformer les détails du quotidien en matière créative.': 'A digital space for observing, collecting, and transforming everyday details into creative material.',
      'Ouvrir l’application': 'Open the app', 'Installer sur votre appareil': 'Install on your device',
      'Fonctionne sur iPhone, Android et ordinateur — aucune boutique d’applications requise.': 'Works on iPhone, Android, and desktop — no app store required.',
      'Observer': 'Observe', 'Capturez les formes, matières et idées qui attirent votre attention.': 'Capture the forms, materials, and ideas that catch your attention.',
      'Organiser': 'Organize', 'Rassemblez vos recherches visuelles dans un espace personnel et accessible.': 'Gather your visual research in a personal, accessible space.',
      'Créer': 'Create', 'Transformez vos observations en pistes de création et en nouveaux projets.': 'Turn your observations into creative directions and new projects.',
      'Abonnement': 'Subscription', 'Mensuel': 'Monthly', 'Annuel': 'Yearly', 'par mois': 'per month', 'par an': 'per year',
      'L’abonnement se renouvelle automatiquement et peut être annulé à tout moment.': 'The subscription renews automatically and can be cancelled at any time.',
      'Comment installer': 'How to install',
      'Ouvrez l’application dans Safari ou Chrome, puis choisissez « Ajouter à l’écran d’accueil ».': 'Open the app in Safari or Chrome, then choose “Add to Home Screen”.',
      'Art · Vêtement · Corps · Mémoire': 'Art · Garment · Body · Memory',
      'Une pratique entre le vêtement, l’installation et la peinture.': 'A practice spanning garment, installation and painting.',
      'Formé entre la Chine et la France, Xing Zhou explore l’identité culturelle, la mémoire et les tensions entre tradition et modernité.': 'Educated in China and France, Xing Zhou explores cultural identity, memory, and the tensions between tradition and modernity.',
      'La mode et la mort': 'Fashion and Death', 'Corps / Vêtement': 'Body / Garment',
      'Performance · Photographie': 'Performance · Photography', 'Acrylique sur papier': 'Acrylic on paper',
      'Projets sélectionnés · 2023—2026': 'Selected projects · 2023—2026',
      '2023 · Installation · Vue d’exposition': '2023 · Installation · Exhibition view',
      'Inspiré du Dialogue de la Mode et de la Mort de Giacomo Leopardi, le projet observe le vêtement comme forme passagère, image sociale et enveloppe du corps. L’installation met en tension l’apparence, la mélancolie et la mortalité.': 'Inspired by Giacomo Leopardi’s Dialogue between Fashion and Death, the project considers clothing as a transient form, a social image, and an envelope for the body. The installation brings appearance, melancholy, and mortality into tension.',
      'Performance · Textile · Photographie': 'Performance · Textile · Photography',
      'Le vêtement quitte sa fonction quotidienne pour devenir abri, contrainte et seconde architecture. Le corps disparaît partiellement sous la matière et laisse émerger une forme ambiguë.': 'Clothing leaves its everyday function to become shelter, constraint, and a second architecture. The body partly disappears beneath the material, allowing an ambiguous form to emerge.',
      '2026 · Acrylique sur papier · 60 × 80 cm': '2026 · Acrylic on paper · 60 × 80 cm',
      'Des gestes bleus se croisent et reviennent sur eux-mêmes. La répétition construit un espace ouvert où mouvement, rythme et énergie silencieuse restent visibles.': 'Blue gestures cross and fold back on themselves. Repetition builds an open space where movement, rhythm, and quiet energy remain visible.',
      'Styliste et artiste plasticien basé en région parisienne, Xing Zhou développe une pratique à la croisée de la mode et de l’art contemporain. Formé entre la Chine et la France, il conçoit des collections et des projets visuels mêlant textile, photographie, vidéo et peinture. Son travail explore l’identité culturelle, la mémoire et le dialogue entre tradition et modernité.': 'A fashion designer and visual artist based near Paris, Xing Zhou develops a practice at the intersection of fashion and contemporary art. Educated in China and France, he creates collections and visual projects combining textile, photography, video, and painting. His work explores cultural identity, memory, and the dialogue between tradition and modernity.',
      'Expériences': 'Experience', 'Formation': 'Education', 'Recherche & expositions': 'Research & exhibitions',
      'Styliste': 'Fashion designer', 'Directeur': 'Director', 'Assistant styliste': 'Assistant designer',
      'Master Arts plastiques': 'MA Visual Arts', 'Licence Arts plastiques': 'BA Visual Arts',
      'Licence Information et communication': 'BA Information and Communication', 'Licence Design de vêtement': 'BA Fashion Design',
      'Projet de recherche': 'Research project',
      'Co-création avec Monia, « 60 ans d’écart », La Maison Jaune et Résidence Dionysia, Saint-Denis': 'Co-created with Monia for “60 Years Apart”, La Maison Jaune and Résidence Dionysia, Saint-Denis',
      'Collaborations,': 'Collaborations,', 'expositions & projets.': 'exhibitions & projects.',
      'Collaborations,\nexpositions & projets.': 'Collaborations,\nexhibitions & projects.',
      'Pour toute demande professionnelle, proposition d’exposition ou collaboration, écrivez-moi directement.': 'For professional enquiries, exhibition proposals, or collaborations, please contact me directly.',
      'Téléphone': 'Phone', 'Lieu': 'Location', 'Écrivez-moi': 'Write to me', 'Nom': 'Name', 'Votre e-mail': 'Your email', 'Sujet': 'Subject', 'Message': 'Message', 'Envoyer le message': 'Send message'
    },
    zh: {
      'Retour au site': '返回网站',
      'Administration unifiée': '统一后台管理',
      'Gérez ici les articles de X-ART Lab, les produits de la boutique, les clients, les commandes et les fichiers du site. Chaque service assure sa propre connexion sécurisée ; aucun mot de passe n’est conservé sur cette page.': '从这里统一管理 X-ART Lab 文章、商店商品、客户订单和官网文件。各项登录验证由对应的安全后台完成，本页面不保存密码。',
      'Publication des articles': '文章发布',
      'Ajouter, modifier et supprimer les articles de X-ART Lab en français, anglais et chinois': '添加、编辑和删除 X-ART Lab 的法语、英语及中文文章',
      'Site et produits de la boutique': '网站与商店商品',
      'Images, titres, descriptions, prix, disponibilité et liens de paiement': '图片、名称、介绍、价格、销售状态和付款链接',
      'Clients, abonnements et commandes': '客户、订阅与订单',
      'Paiements, abonnements, informations clients, commandes et remboursements': '付款、订阅、客户资料、订单和退款',
      'Fichiers du site': '网站文件',
      'Dépôt GitHub, historique des versions et état du déploiement': 'GitHub 仓库、版本记录和部署状态',
      'Ne communiquez jamais vos mots de passe ni vos codes de vérification pour l’administration, GitHub ou Stripe.': '请勿向任何人透露后台、GitHub 或 Stripe 密码及验证码。',
      'Accueil': '首页', 'Voir le projet': '查看项目', 'Faire défiler': '向下浏览', 'Œuvres sélectionnées': '精选作品', 'Installation, performance, textile et peinture.': '装置、行为、纺织与绘画。',
      'Œuvres': '作品', 'Boutique': '商店', 'Projets': '项目', 'Biographie / CV': '简介 / 履历', 'Contact': '联系',
      'Application web créative': '创意网页应用',
      'Plateforme de recherche artistique': '艺术研究平台',
      'Une plateforme trilingue pour lire des recherches sur l’art contemporain, retrouver vos articles et accéder aux contenus réservés aux abonnés.': '一个三语当代艺术研究平台，可阅读文章、查找内容并访问订阅专享资料。',
      'Fonctionne sur iPhone, iPad, Android et ordinateur. Les contenus publiés depuis le tableau de bord sont synchronisés automatiquement.': '支持 iPhone、iPad、Android 和电脑，后台发布的内容会自动同步。',
      'Lire': '阅读', 'Consultez des articles de recherche en français, anglais et chinois.': '阅读中文、法文和英文艺术研究文章。',
      'Rechercher': '搜索', 'Trouvez rapidement un article par titre, résumé ou catégorie.': '按标题、摘要或分类快速查找文章。',
      'Conserver': '收藏', 'Lisez et téléchargez vos articles depuis votre espace personnel.': '在“我的空间”中阅读和下载文章。',
      'Paiement sécurisé par Stripe. L’abonnement se renouvelle automatiquement et peut être annulé à tout moment.': '使用 Stripe 安全支付，订阅自动续费并可随时取消。',
      'Un espace numérique pour observer, collecter et transformer les détails du quotidien en matière créative.': '一个用于观察、收集，并将日常细节转化为创作素材的数字空间。',
      'Ouvrir l’application': '打开应用', 'Installer sur votre appareil': '安装到设备',
      'Fonctionne sur iPhone, Android et ordinateur — aucune boutique d’applications requise.': '支持 iPhone、Android 和电脑，无需通过应用商店。',
      'Observer': '观察', 'Capturez les formes, matières et idées qui attirent votre attention.': '记录吸引你的形态、材质与想法。',
      'Organiser': '整理', 'Rassemblez vos recherches visuelles dans un espace personnel et accessible.': '把视觉研究集中整理在一个随时可访问的个人空间。',
      'Créer': '创作', 'Transformez vos observations en pistes de création et en nouveaux projets.': '将观察转化为创作方向与新的项目。',
      'Abonnement': '订阅', 'Mensuel': '月费', 'Annuel': '年费', 'par mois': '每月', 'par an': '每年',
      'L’abonnement se renouvelle automatiquement et peut être annulé à tout moment.': '订阅将自动续费，并可随时取消。',
      'Comment installer': '如何安装',
      'Ouvrez l’application dans Safari ou Chrome, puis choisissez « Ajouter à l’écran d’accueil ».': '请在 Safari 或 Chrome 中打开应用，然后选择“添加到主屏幕”。',
      'Art · Vêtement · Corps · Mémoire': '艺术 · 服装 · 身体 · 记忆',
      'Une pratique entre le vêtement, l’installation et la peinture.': '游走于服装、装置与绘画之间的艺术实践。',
      'Formé entre la Chine et la France, Xing Zhou explore l’identité culturelle, la mémoire et les tensions entre tradition et modernité.': 'Xing Zhou 在中国与法国接受教育，创作聚焦文化身份、记忆，以及传统与现代之间的张力。',
      'La mode et la mort': '时尚与死亡', 'Corps / Vêtement': '身体 / 服装',
      'Performance · Photographie': '行为 · 摄影', 'Acrylique sur papier': '纸本丙烯',
      'Projets sélectionnés · 2023—2026': '精选项目 · 2023—2026', 'Œuvres': '作品',
      '2023 · Installation · Vue d’exposition': '2023 · 装置 · 展览现场',
      'Inspiré du Dialogue de la Mode et de la Mort de Giacomo Leopardi, le projet observe le vêtement comme forme passagère, image sociale et enveloppe du corps. L’installation met en tension l’apparence, la mélancolie et la mortalité.': '项目灵感来自贾科莫·莱奥帕尔迪的《时尚与死亡的对话》，将服装视为短暂的形式、社会形象与身体的外壳。装置把外表、忧郁与死亡置于彼此拉扯的关系中。',
      'Performance · Textile · Photographie': '行为 · 纺织 · 摄影',
      'Le vêtement quitte sa fonction quotidienne pour devenir abri, contrainte et seconde architecture. Le corps disparaît partiellement sous la matière et laisse émerger une forme ambiguë.': '服装脱离日常功能，成为庇护、束缚与第二层建筑。身体部分隐没于材料之下，一种暧昧的形态由此浮现。',
      '2026 · Acrylique sur papier · 60 × 80 cm': '2026 · 纸本丙烯 · 60 × 80 厘米',
      'Des gestes bleus se croisent et reviennent sur eux-mêmes. La répétition construit un espace ouvert où mouvement, rythme et énergie silencieuse restent visibles.': '蓝色笔触交错并回到自身。重复构成一个开放空间，让运动、节奏与安静的能量持续可见。',
      'Styliste et artiste plasticien basé en région parisienne, Xing Zhou développe une pratique à la croisée de la mode et de l’art contemporain. Formé entre la Chine et la France, il conçoit des collections et des projets visuels mêlant textile, photographie, vidéo et peinture. Son travail explore l’identité culturelle, la mémoire et le dialogue entre tradition et modernité.': 'Xing Zhou 是居住在巴黎地区的服装设计师与视觉艺术家，创作位于时尚和当代艺术的交汇处。他曾在中国和法国学习，以纺织、摄影、影像和绘画创作系列及视觉项目，探索文化身份、记忆以及传统与现代之间的对话。',
      'Expériences': '工作经历', 'Formation': '教育经历', 'Recherche & expositions': '研究与展览',
      'Styliste': '服装设计师', 'Directeur': '负责人', 'Assistant styliste': '助理设计师',
      'Master Arts plastiques': '视觉艺术硕士', 'Licence Arts plastiques': '视觉艺术学士',
      'Licence Information et communication': '信息与传播学学士', 'Licence Design de vêtement': '服装设计学士',
      'Projet de recherche': '研究项目',
      'Co-création avec Monia, « 60 ans d’écart », La Maison Jaune et Résidence Dionysia, Saint-Denis': '与 Monia 共同创作，参加“相差 60 年”，La Maison Jaune 与 Résidence Dionysia，圣但尼',
      'Collaborations,': '合作、', 'expositions & projets.': '展览与项目。',
      'Collaborations,\nexpositions & projets.': '合作、展览\n与项目。',
      'Pour toute demande professionnelle, proposition d’exposition ou collaboration, écrivez-moi directement.': '如有专业咨询、展览提案或合作邀请，请直接与我联系。',
      'Téléphone': '电话', 'Lieu': '地点', 'Écrivez-moi': '给我留言', 'Nom': '姓名', 'Votre e-mail': '您的邮箱', 'Sujet': '主题', 'Message': '留言', 'Envoyer le message': '发送留言'
    }
  };

  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement && !['SCRIPT', 'STYLE'].includes(node.parentElement.tagName) && node.textContent.trim()
        ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    node.__source = node.textContent.trim();
    textNodes.push(node);
  }

  const locale = document.querySelector('.locale');
  if (!locale) return;
  const footer = document.querySelector('footer');
  if (footer) footer.append(locale);
  locale.textContent = '';
  ['fr', 'en', 'zh'].forEach((language, index) => {
    if (index) {
      const separator = document.createElement('span');
      separator.className = 'lang-separator';
      separator.textContent = '/';
      locale.append(separator);
    }
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'lang-button';
    button.dataset.lang = language;
    button.textContent = language === 'zh' ? '中文' : language.toUpperCase();
    button.setAttribute('aria-label', language === 'fr' ? 'Français' : language === 'en' ? 'English' : '中文');
    button.addEventListener('click', () => setLanguage(language));
    locale.append(button);
  });

  function setLanguage(language) {
    const dictionary = dictionaries[language] || {};
    textNodes.forEach(node => {
      const leading = node.textContent.match(/^\s*/)[0];
      const trailing = node.textContent.match(/\s*$/)[0];
      node.textContent = leading + (dictionary[node.__source] || node.__source) + trailing;
    });
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
    document.querySelectorAll('.lang-button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === language));
    });
    localStorage.setItem('xing-language', language);
    window.dispatchEvent(new CustomEvent('xing-language-change', { detail: { language } }));
  }

  setLanguage(localStorage.getItem('xing-language') || 'fr');
})();
