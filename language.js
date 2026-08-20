(() => {
  const dictionaries = {
    en: {
      'Œuvres': 'Works', 'Projets': 'Projects', 'Biographie / CV': 'Biography / CV',
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
      'Téléphone': 'Phone', 'Lieu': 'Location'
    },
    zh: {
      'Œuvres': '作品', 'Projets': '项目', 'Biographie / CV': '简介 / 履历', 'Contact': '联系',
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
      'Téléphone': '电话', 'Lieu': '地点'
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
  }

  setLanguage(localStorage.getItem('xing-language') || 'fr');
})();
