(() => {
  const dictionaries = {
    fr: {
      'BODY / GARMENT': 'CORPS / VÊTEMENT', 'PERFORMANCE · TEXTILE · PHOTOGRAPHY': 'Performance · Textile · Photographie', 'VOIR LE PROJET →': 'VOIR LE PROJET →', 'FAIRE DÉFILER': 'FAIRE DÉFILER', 'FAIRE DÉFILER ↓': 'FAIRE DÉFILER ↓',
      'SELECTED PROJECTS · 2023—2026': 'PROJETS SÉLECTIONNÉS · 2023—2026', 'Works': 'Œuvres', 'A SOFT': 'UN DOUX', 'REFUSAL': 'REFUS', 'GENERATIVE IMAGE & SOUND': 'IMAGE GÉNÉRATIVE & SON', 'INTERACTIVE WORK · SOUND ON': 'ŒUVRE INTERACTIVE · SON ACTIVÉ', '01 / GENERATIVE IMAGE & SOUND': '01 / IMAGE GÉNÉRATIVE & SON', 'A Soft Refusal': 'Un doux refus', '2026 · P5.JS · WEB AUDIO · 82 SECONDS': '2026 · P5.JS · WEB AUDIO · 82 SECONDES', 'Discover the work': 'Découvrir l’œuvre', 'WORKS': 'ŒUVRES', 'Projects': 'Projets',
      'Fashion and Death': 'La mode et la mort', '2023 · INSTALLATION · EXHIBITION VIEW': '2023 · INSTALLATION · VUE D’EXPOSITION', 'Body / Garment': 'Corps / Vêtement', 'Clothing leaves its everyday function to become shelter, constraint, and a second architecture. The body partly disappears beneath the material, allowing an ambiguous form to emerge.': 'Le vêtement quitte sa fonction quotidienne pour devenir abri, contrainte et seconde architecture. Le corps disparaît partiellement sous la matière et laisse émerger une forme ambiguë.', 'Blue Loops I': 'Boucles bleues I', '2026 · ACRYLIC ON PAPER · 60 × 80 CM': '2026 · Acrylique sur papier · 60 × 80 cm', 'Black Resonance': 'Résonance noire', '2026 · ACRYLIQUE SUR PAPIER · 1148 × 1536 PX': '2026 · Acrylique sur papier · 1148 × 1536 px',
      'GRAPHIC DESIGN': 'DESIGN GRAPHIQUE', 'Graphic design': 'Design graphique', 'Graphic Design': 'Design graphique', 'SELECTED WORK · 2026': 'ŒUVRE SÉLECTIONNÉE · 2026', '平面设计': 'Design graphique', 'PHYEL Brand Book 2026': 'PHYEL Brand Book 2026', 'Identité de marque · Design éditorial · Publication numérique': 'Identité de marque · Design éditorial · Publication numérique', '品牌识别 · 编辑设计 · 数字出版': 'Identité de marque · Design éditorial · Publication numérique',
      'PLATEFORME DE RECHERCHE ARTISTIQUE': 'PLATEFORME DE RECHERCHE ARTISTIQUE', 'X-ART Lab.': 'X-ART Lab.', 'Une plateforme trilingue pour lire des recherches sur l’art contemporain, retrouver vos articles et accéder aux contenus réservés aux abonnés.': 'Une plateforme pour lire des recherches sur l’art contemporain, retrouver vos articles et accéder aux contenus réservés aux abonnés.', 'OUVRIR L’APPLICATION': 'OUVRIR L’APPLICATION', 'TÉLÉCHARGER L’APPLICATION': 'TÉLÉCHARGER L’APPLICATION', 'Lire': 'Lire', 'Rechercher': 'Rechercher', 'Conserver': 'Conserver', 'Abonnement': 'Abonnement', 'MENSUEL': 'MENSUEL', 'ANNUEL': 'ANNUEL', 'Télécharger': 'Télécharger', 'TÉLÉCHARGER POUR ANDROID': 'TÉLÉCHARGER POUR ANDROID', 'INSTALLER SUR IPHONE': 'INSTALLER SUR IPHONE',
      'EXPERIENCE': 'EXPÉRIENCE', 'EDUCATION': 'FORMATION', 'RESEARCH & EXHIBITIONS': 'RECHERCHE & EXPOSITIONS', 'Fashion designer': 'Styliste', 'Director': 'Directeur', 'Assistant designer': 'Assistant styliste', 'MA Visual Arts': 'Master Arts plastiques', 'BA Visual Arts': 'Licence Arts plastiques', 'BA Information and Communication': 'Licence Information et communication', 'BA Fashion Design': 'Licence Design de vêtement', 'Research project': 'Projet de recherche', 'Garment art and performance': 'L’art vestimentaire et performance', 'Garment and installation': 'Vêtement et installation', 'Pékin': 'Pékin', 'Beijing': 'Pékin', 'Chine': 'Chine',
      'CONTACT': 'CONTACT', 'Collaborations,\nexhibitions & projects.': 'Collaborations,\nexpositions & projets.', 'EMAIL': 'E-MAIL', 'PHONE': 'TÉLÉPHONE', 'LOCATION': 'LIEU', 'ÉCRIVEZ-MOI': 'ÉCRIVEZ-MOI', 'NOM': 'NOM', 'VOTRE E-MAIL': 'VOTRE E-MAIL', 'SUJET': 'SUJET', 'MESSAGE': 'MESSAGE', 'ENVOYER LE MESSAGE': 'ENVOYER LE MESSAGE',
      'DIGITAL EDITIONS': 'ÉDITIONS NUMÉRIQUES', 'Shop': 'Boutique', '2 WORKS': '2 ŒUVRES', 'BLUE LOOPS I': 'BOUCLES BLEUES I', 'ORIGINAL PAINTING': 'PEINTURE ORIGINALE', 'PURCHASE': 'ACHETER', '← Back to shop': '← Retour à la boutique', 'AVAILABLE WORK': 'ŒUVRE DISPONIBLE', 'Continue to payment': 'Continuer vers le paiement', 'Secure payment via Stripe. The payment page will open after this step.': 'Paiement sécurisé via Stripe. La page de paiement s’ouvrira après cette étape.'
      ,
      'Performance · Textile · Photography': 'Performance · Textile · Photographie', 'Voir le projet': 'Voir le projet', 'Faire défiler': 'Faire défiler', '01 / Generative image & sound': '01 / Image générative & son', '2026 · p5.js · Web Audio · 82 seconds': '2026 · p5.js · Web Audio · 82 secondes', 'A six-movement experience about the poor image, the capture of attention, and the possibility of recovering a space for decision. Movement feeds the system; stillness introduces friction.': 'Une expérience en six mouvements sur l’image pauvre, la captation de l’attention et la possibilité de retrouver un espace de décision. Le mouvement alimente le système ; l’immobilité introduit une friction.', 'Selected work · 2026': 'Œuvre sélectionnée · 2026', 'Ouvrir l’application': 'Ouvrir l’application', 'Télécharger l’application': 'Télécharger l’application', 'Mensuel': 'Mensuel', 'Annuel': 'Annuel', 'par mois': 'par mois', 'par an': 'par an', 'Télécharger pour Android': 'Télécharger pour Android', 'Installer sur iPhone': 'Installer sur iPhone', 'Email': 'E-mail', 'Écrivez-moi': 'Écrivez-moi', 'Envoyer le message': 'Envoyer le message', 'Paris, France': 'Paris, France', 'Retour à la boutique': 'Retour à la boutique', 'Œuvre disponible': 'Œuvre disponible', 'Passer au paiement': 'Passer au paiement', 'Paiement sécurisé via Stripe. La page de paiement s’ouvrira après cette étape.': 'Paiement sécurisé via Stripe. La page de paiement s’ouvrira après cette étape.'

    },
    en: {
      'Accueil': 'Home', 'Contact': 'Contact', 'Boutique': 'Shop', 'Design graphique': 'Graphic design', 'X-ART Lab': 'X-ART Lab', 'Éditions numériques': 'Digital editions', 'Produits numériques': 'Digital products', 'Peinture': 'Painting', 'Peinture originale': 'Original painting', 'Boucles bleues I': 'Blue Loops I', 'Résonance noire': 'Black Resonance', 'Bientôt disponible': 'Coming soon', 'Aucune œuvre disponible.': 'No works available.', 'Acheter': 'Purchase', 'Épuisé': 'Sold out',
      'Des gestes noirs superposés forment un champ d’anneaux en rotation, explorant la tension entre le corps, le mouvement et l’espace.': 'Overlapping black gestures form a field of rotating rings, exploring the tension between body, movement, and space.',


      'Œuvres': 'Works', 'Projets': 'Projects', 'Biographie / CV': 'Biography / CV', 'À propos / CV': 'About / CV',
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
      'BODY / GARMENT': 'BODY / GARMENT', 'PERFORMANCE · TEXTILE · PHOTOGRAPHY': 'Performance · Textile · Photography', 'VOIR LE PROJET →': 'VIEW PROJECT →', 'FAIRE DÉFILER': 'SCROLL', 'FAIRE DÉFILER ↓': 'SCROLL ↓',
      'SELECTED PROJECTS · 2023—2026': 'SELECTED PROJECTS · 2023—2026', 'Works': 'Works', 'A SOFT': 'A SOFT', 'REFUSAL': 'REFUSAL', 'GENERATIVE IMAGE & SOUND': 'GENERATIVE IMAGE & SOUND', 'INTERACTIVE WORK · SOUND ON': 'INTERACTIVE WORK · SOUND ON', '01 / GENERATIVE IMAGE & SOUND': '01 / GENERATIVE IMAGE & SOUND', 'A Soft Refusal': 'A Soft Refusal', '2026 · P5.JS · WEB AUDIO · 82 SECONDS': '2026 · P5.JS · WEB AUDIO · 82 SECONDS', 'Discover the work': 'Discover the work', 'WORKS': 'WORKS', 'Projects': 'Projects',
      'Fashion and Death': 'Fashion and Death', '2023 · INSTALLATION · EXHIBITION VIEW': '2023 · INSTALLATION · EXHIBITION VIEW', 'Body / Garment': 'Body / Garment', 'Clothing leaves its everyday function to become shelter, constraint, and a second architecture. The body partly disappears beneath the material, allowing an ambiguous form to emerge.': 'Clothing leaves its everyday function to become shelter, constraint, and a second architecture. The body partly disappears beneath the material, allowing an ambiguous form to emerge.', 'Blue Loops I': 'Blue Loops I', '2026 · ACRYLIC ON PAPER · 60 × 80 CM': '2026 · ACRYLIC ON PAPER · 60 × 80 CM', 'Black Resonance': 'Black Resonance', '2026 · ACRYLIQUE SUR PAPIER · 1148 × 1536 PX': '2026 · ACRYLIC ON PAPER · 1148 × 1536 PX',
      'GRAPHIC DESIGN': 'GRAPHIC DESIGN', 'Graphic design': 'Graphic design', 'Graphic Design': 'Graphic Design', 'SELECTED WORK · 2026': 'SELECTED WORK · 2026', '平面设计': 'Graphic design', 'Identité de marque · Design éditorial · Publication numérique': 'Brand identity · Editorial design · Digital publication', '品牌识别 · 编辑设计 · 数字出版': 'Brand identity · Editorial design · Digital publication',
      'PLATEFORME DE RECHERCHE ARTISTIQUE': 'ART RESEARCH PLATFORM', 'X-ART Lab.': 'X-ART Lab.', 'Une plateforme trilingue pour lire des recherches sur l’art contemporain, retrouver vos articles et accéder aux contenus réservés aux abonnés.': 'A trilingual platform for reading contemporary art research, finding your articles, and accessing subscriber-only content.', 'OUVRIR L’APPLICATION': 'OPEN THE APP', 'TÉLÉCHARGER L’APPLICATION': 'DOWNLOAD THE APP', 'Fonctionne sur iPhone, iPad, Android et ordinateur. Les contenus publiés depuis le tableau de bord sont synchronisés automatiquement.': 'Works on iPhone, iPad, Android, and desktop. Content published from the dashboard syncs automatically.', 'Lire': 'Read', 'Consultez des articles de recherche en français, anglais et chinois.': 'Read research articles in French, English, and Chinese.', 'Rechercher': 'Search', 'Trouvez rapidement un article par titre, résumé ou catégorie.': 'Find an article quickly by title, summary, or category.', 'Conserver': 'Save', 'Lisez et téléchargez vos articles depuis votre espace personnel.': 'Read and download your articles from your personal space.', 'Abonnement': 'Subscription', 'MENSUEL': 'MONTHLY', 'ANNUEL': 'ANNUAL', 'Paiement sécurisé par Stripe. L’abonnement se renouvelle automatiquement et peut être annulé à tout moment.': 'Secure payment via Stripe. The subscription renews automatically and can be cancelled at any time.', 'Télécharger': 'Download', 'Choisissez votre téléphone. Sur Android, téléchargez le fichier APK. Sur iPhone, ouvrez l’application dans Safari puis choisissez « Ajouter à l’écran d’accueil ».': 'Choose your phone. On Android, download the APK file. On iPhone, open the app in Safari and choose “Add to Home Screen”.', 'TÉLÉCHARGER POUR ANDROID': 'DOWNLOAD FOR ANDROID', 'INSTALLER SUR IPHONE': 'INSTALL ON IPHONE', 'Android · APK signé · Version 1.0': 'Android · Signed APK · Version 1.0',
      'EXPERIENCE': 'EXPERIENCE', 'EDUCATION': 'EDUCATION', 'RESEARCH & EXHIBITIONS': 'RESEARCH & EXHIBITIONS', 'Fashion designer': 'Fashion designer', 'Director': 'Director', 'Assistant designer': 'Assistant designer', 'MA Visual Arts': 'MA Visual Arts', 'BA Visual Arts': 'BA Visual Arts', 'BA Information and Communication': 'BA Information and Communication', 'BA Fashion Design': 'BA Fashion Design', 'Research project': 'Research project', 'L’art vestimentaire et performance': 'Garment art and performance', 'Vêtement et installation': 'Garment and installation', 'Pékin': 'Beijing', 'Chine': 'China', 'Comme des Loups, Paris': 'Comme des Loups, Paris', 'Qin Zhen, Pékin': 'Qin Zhen, Beijing', 'SindyFlower, Pékin': 'SindyFlower, Beijing', 'Su Evan Liu, Pékin': 'Su Evan Liu, Beijing',
      'CONTACT': 'CONTACT', 'Collaborations,\nexpositions & projets.': 'Collaborations,\nexhibitions & projects.', 'Collaborations,\nexhibitions & projects.': 'Collaborations,\nexhibitions & projects.', 'EMAIL': 'EMAIL', 'PHONE': 'PHONE', 'LOCATION': 'LOCATION', 'ÉCRIVEZ-MOI': 'WRITE TO ME', 'NOM': 'NAME', 'VOTRE E-MAIL': 'YOUR EMAIL', 'SUJET': 'SUBJECT', 'MESSAGE': 'MESSAGE', 'ENVOYER LE MESSAGE': 'SEND MESSAGE', 'For professional enquiries, exhibition proposals, or collaborations, please contact me directly.': 'For professional enquiries, exhibition proposals, or collaborations, please contact me directly.',
      'DIGITAL EDITIONS': 'DIGITAL EDITIONS', 'Shop': 'Shop', '2 WORKS': '2 WORKS', 'BLUE LOOPS I': 'BLUE LOOPS I', 'ORIGINAL PAINTING': 'ORIGINAL PAINTING', 'PURCHASE': 'PURCHASE', '← Back to shop': '← Back to shop', 'AVAILABLE WORK': 'AVAILABLE WORK', 'Continue to payment': 'Continue to payment', 'Secure payment via Stripe. The payment page will open after this step.': 'Secure payment via Stripe. The payment page will open after this step.',
      'Téléphone': 'Phone', 'Lieu': 'Location'
      ,
      'Performance · Textile · Photography': 'Performance · Textile · Photography', 'Voir le projet': 'View the project', 'Faire défiler': 'Scroll', '01 / Generative image & sound': '01 / Generative image & sound', '2026 · p5.js · Web Audio · 82 seconds': '2026 · p5.js · Web Audio · 82 seconds', 'A six-movement experience about the poor image, the capture of attention, and the possibility of recovering a space for decision. Movement feeds the system; stillness introduces friction.': 'A six-movement experience about the poor image, the capture of attention, and the possibility of recovering a space for decision. Movement feeds the system; stillness introduces friction.', 'Selected work · 2026': 'Selected work · 2026', 'Ouvrir l’application': 'Open the app', 'Télécharger l’application': 'Download the app', 'Mensuel': 'Monthly', 'Annuel': 'Annual', 'par mois': 'per month', 'par an': 'per year', 'Télécharger pour Android': 'Download for Android', 'Installer sur iPhone': 'Install on iPhone', 'Email': 'Email', 'Écrivez-moi': 'Write to me', 'Envoyer le message': 'Send message', 'Paris, France': 'Paris, France', 'Retour à la boutique': 'Back to shop', 'Œuvre disponible': 'Available work', 'Passer au paiement': 'Continue to payment', 'Paiement sécurisé via Stripe. La page de paiement s’ouvrira après cette étape.': 'Secure payment via Stripe. The payment page will open after this step.'

    },
    zh: {
      'Accueil': '首页', 'Contact': '联系', 'Boutique': '商店', 'Design graphique': '平面设计', 'X-ART Lab': '当代艺术文库', 'Éditions numériques': '数字作品', 'Produits numériques': '数字作品', 'Original painting': '原创绘画', 'Peinture': '绘画', 'Peinture originale': '原创绘画', 'Boucles bleues I': '蓝色回旋 I', 'Blue Loops I': '蓝色回旋 I', 'Résonance noire': '黑色回响', 'Black Resonance': '黑色回响', 'Bientôt disponible': '即将上线', 'Aucune œuvre disponible.': '暂无可购买作品。', 'Acheter': '购买', 'Épuisé': '已售罄',
      'Des gestes noirs superposés forment un champ d’anneaux en rotation, explorant la tension entre le corps, le mouvement et l’espace.': '黑色笔触彼此交叠成旋转的环形结构，探索身体、动作与空间之间的张力。',


      'Œuvres': '作品集', 'Projets': '项目', 'Biographie / CV': '简介 / 履历', 'À propos / CV': '关于 / 简历', 'Contact': '联系',
      'Art · Vêtement · Corps · Mémoire': '艺术 · 服装 · 身体 · 记忆',
      'Une pratique entre le vêtement, l’installation et la peinture.': '游走于服装、装置与绘画之间的艺术实践。',
      'Formé entre la Chine et la France, Xing Zhou explore l’identité culturelle, la mémoire et les tensions entre tradition et modernité.': 'Xing Zhou 在中国与法国接受教育，创作聚焦文化身份、记忆，以及传统与现代之间的张力。',
      'La mode et la mort': '时尚与死亡', 'Corps / Vêtement': '身体 / 服装',
      'Performance · Photographie': '行为 · 摄影', 'Acrylique sur papier': '纸本丙烯',
      'Projets sélectionnés · 2023—2026': '精选项目 · 2023—2026', 'Œuvres': '作品集',
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
      'BODY / GARMENT': '身体 / 服装', 'PERFORMANCE · TEXTILE · PHOTOGRAPHY': '行为 · 纺织 · 摄影', 'VOIR LE PROJET →': '查看项目 →', 'FAIRE DÉFILER': '向下滚动', 'FAIRE DÉFILER ↓': '向下滚动 ↓',
      'SELECTED PROJECTS · 2023—2026': '精选项目 · 2023—2026', 'Works': '作品', 'A SOFT': '一种温和的', 'REFUSAL': '拒绝', 'GENERATIVE IMAGE & SOUND': '生成图像与声音', 'INTERACTIVE WORK · SOUND ON': '互动作品 · 请开启声音', '01 / GENERATIVE IMAGE & SOUND': '01 / 生成图像与声音', 'A Soft Refusal': '一种温和的拒绝', '2026 · P5.JS · WEB AUDIO · 82 SECONDS': '2026 · P5.JS · WEB AUDIO · 82 秒', 'Discover the work': '探索作品', 'WORKS': '作品', 'Projects': '项目',
      'Fashion and Death': '时尚与死亡', '2023 · INSTALLATION · EXHIBITION VIEW': '2023 · 装置 · 展览现场', 'Body / Garment': '身体 / 服装', 'Clothing leaves its everyday function to become shelter, constraint, and a second architecture. The body partly disappears beneath the material, allowing an ambiguous form to emerge.': '服装脱离日常功能，成为庇护、束缚与第二层建筑。身体部分隐没于材料之下，一种暧昧的形态由此浮现。', 'Blue Loops I': '蓝色回旋 I', '2026 · ACRYLIC ON PAPER · 60 × 80 CM': '2026 · 纸本丙烯 · 60 × 80 厘米', 'Black Resonance': '黑色回响', '2026 · ACRYLIQUE SUR PAPIER · 1148 × 1536 PX': '2026 · 纸本丙烯 · 1148 × 1536 像素',
      'GRAPHIC DESIGN': '平面设计', 'Graphic design': '平面设计', 'Graphic Design': '平面设计', 'SELECTED WORK · 2026': '精选作品 · 2026', '平面设计': '平面设计', 'Identité de marque · Design éditorial · Publication numérique': '品牌识别 · 编辑设计 · 数字出版', '品牌识别 · 编辑设计 · 数字出版': '品牌识别 · 编辑设计 · 数字出版',
      'PLATEFORME DE RECHERCHE ARTISTIQUE': '艺术研究平台', 'X-ART Lab.': 'X-ART Lab.', 'Une plateforme trilingue pour lire des recherches sur l’art contemporain, retrouver vos articles et accéder aux contenus réservés aux abonnés.': '一个用于阅读当代艺术研究、查找文章并访问订阅内容的三语平台。', 'OUVRIR L’APPLICATION': '打开应用', 'TÉLÉCHARGER L’APPLICATION': '下载应用', 'Fonctionne sur iPhone, iPad, Android et ordinateur. Les contenus publiés depuis le tableau de bord sont synchronisés automatiquement.': '支持 iPhone、iPad、Android 和电脑。通过后台发布的内容会自动同步。', 'Lire': '阅读', 'Consultez des articles de recherche en français, anglais et chinois.': '阅读法语、英语和中文的艺术研究文章。', 'Rechercher': '搜索', 'Trouvez rapidement un article par titre, résumé ou catégorie.': '按标题、摘要或分类快速找到文章。', 'Conserver': '保存', 'Lisez et téléchargez vos articles depuis votre espace personnel.': '在个人空间中阅读并下载文章。', 'Abonnement': '订阅', 'MENSUEL': '按月', 'ANNUEL': '按年', 'Paiement sécurisé par Stripe. L’abonnement se renouvelle automatiquement et peut être annulé à tout moment.': '通过 Stripe 安全支付。订阅会自动续费，也可随时取消。', 'Télécharger': '下载', 'Choisissez votre téléphone. Sur Android, téléchargez le fichier APK. Sur iPhone, ouvrez l’application dans Safari puis choisissez « Ajouter à l’écran d’accueil ».': '选择你的设备。在 Android 上下载 APK 文件；在 iPhone 上用 Safari 打开应用，然后选择“添加到主屏幕”。', 'TÉLÉCHARGER POUR ANDROID': '下载 Android 版', 'INSTALLER SUR IPHONE': '在 iPhone 上安装', 'Android · APK signé · Version 1.0': 'Android · 已签名 APK · 版本 1.0',
      'EXPERIENCE': '工作经历', 'EDUCATION': '教育经历', 'RESEARCH & EXHIBITIONS': '研究与展览', 'Fashion designer': '服装设计师', 'Director': '负责人', 'Assistant designer': '助理设计师', 'MA Visual Arts': '视觉艺术硕士', 'BA Visual Arts': '视觉艺术学士', 'BA Information and Communication': '信息与传播学学士', 'BA Fashion Design': '服装设计学士', 'Research project': '研究项目', 'L’art vestimentaire et performance': '服装艺术与行为', 'Vêtement et installation': '服装与装置', 'Pékin': '北京', 'Chine': '中国', 'Comme des Loups, Paris': 'Comme des Loups，巴黎', 'Qin Zhen, Pékin': 'Qin Zhen，北京', 'SindyFlower, Pékin': 'SindyFlower，北京', 'Su Evan Liu, Pékin': 'Su Evan Liu，北京',
      'CONTACT': '联系', 'Collaborations,\nexpositions & projets.': '合作、展览与项目。', 'Collaborations,\nexhibitions & projects.': '合作、展览与项目。', 'EMAIL': '电子邮箱', 'PHONE': '电话', 'LOCATION': '地点', 'ÉCRIVEZ-MOI': '给我留言', 'NOM': '姓名', 'VOTRE E-MAIL': '你的邮箱', 'SUJET': '主题', 'MESSAGE': '留言', 'ENVOYER LE MESSAGE': '发送留言', 'For professional enquiries, exhibition proposals, or collaborations, please contact me directly.': '如有专业咨询、展览提案或合作邀请，请直接与我联系。',
      'DIGITAL EDITIONS': '数字作品', 'Shop': '商店', '2 WORKS': '2 件作品', 'BLUE LOOPS I': '蓝色回旋 I', 'ORIGINAL PAINTING': '原创绘画', 'PURCHASE': '购买', '← Back to shop': '← 返回商店', 'AVAILABLE WORK': '可购买作品', 'Continue to payment': '继续付款', 'Secure payment via Stripe. The payment page will open after this step.': '通过 Stripe 安全支付。完成这一步后将打开付款页面。',
      'Téléphone': '电话', 'Lieu': '地点'
      ,
      'Performance · Textile · Photography': '行为 · 纺织 · 摄影', 'Voir le projet': '查看项目', 'Faire défiler': '向下滚动', '01 / Generative image & sound': '01 / 生成图像与声音', '2026 · p5.js · Web Audio · 82 seconds': '2026 · p5.js · Web Audio · 82 秒', 'A six-movement experience about the poor image, the capture of attention, and the possibility of recovering a space for decision. Movement feeds the system; stillness introduces friction.': '一段由六个动作组成的体验，讨论低质图像、注意力的捕获，以及重新找回决策空间的可能。运动为系统提供能量；静止则引入摩擦。', 'Selected work · 2026': '精选作品 · 2026', 'Ouvrir l’application': '打开应用', 'Télécharger l’application': '下载应用', 'Mensuel': '按月', 'Annuel': '按年', '€3,59': '€3,59', 'par mois': '每月', '€38,18': '€38,18', 'par an': '每年', 'Télécharger pour Android': '下载 Android 版', 'Installer sur iPhone': '在 iPhone 上安装', 'Email': '电子邮箱', 'Écrivez-moi': '给我留言', 'Envoyer le message': '发送留言', 'Paris, France': '法国巴黎', 'Retour à la boutique': '返回商店', 'Œuvre disponible': '可购买作品', 'Passer au paiement': '继续付款', 'Paiement sécurisé via Stripe. La page de paiement s’ouvrira après cette étape.': '通过 Stripe 安全支付。完成这一步后将打开付款页面。'

    }
  };

  Object.assign(dictionaries.en, {
    'Art · Vêtement ·': 'Art · Garment ·',
    'Corps · Mémoire': 'Body · Memory',
    'Œuvre sélectionnée · 01': 'Selected work · 01',
    'Explorer': 'Explore',
    'Trois entrées dans le travail': 'Three ways into the work',
    'Le vêtement devient abri, contrainte et seconde architecture. Le corps disparaît partiellement sous la matière et laisse émerger une forme ambiguë.': 'Clothing becomes shelter, constraint, and a second architecture. The body partly disappears beneath the material, allowing an ambiguous form to emerge.',
    'Une pratique en mouvement': 'A practice in motion',
    'À travers les matières, les gestes et les images, j’explore les déplacements de l’identité culturelle entre la Chine et la France.': 'Through materials, gestures, and images, I explore the shifting forms of cultural identity between China and France.',
    '2026 · Acrylique sur papier · 1148 × 1536 px': '2026 · Acrylic on paper · 1148 × 1536 px',
    'Plateforme de recherche artistique': 'Art research platform',
    'Ouvrir l’application': 'Open the app',
    'Télécharger l’application': 'Download the app',
    'Mensuel': 'Monthly',
    'Annuel': 'Annual',
    'par mois': 'per month',
    'par an': 'per year',
    'Télécharger pour Android': 'Download for Android',
    'Installer sur iPhone': 'Install on iPhone',
    'Nom': 'Name',
    'Votre e-mail': 'Your email',
    'À propos': 'About',
    'Biographie': 'Biography',
    'CV': 'CV',
    'Déclaration de l’artiste': 'Artist statement',
    'Ma pratique se situe à la croisée du vêtement, de l’installation, de la performance et de la peinture. Je travaille avec le corps comme un espace de mémoire, de transformation et de tension.': 'My practice sits at the intersection of garment, installation, performance, and painting. I work with the body as a space of memory, transformation, and tension.',
    'À travers les matières, les gestes et les images, j’explore les déplacements de l’identité culturelle entre la Chine et la France. Mes projets cherchent des formes ouvertes, où le vêtement devient architecture, protection, contrainte ou récit.': 'Through materials, gestures, and images, I explore the shifting forms of cultural identity between China and France. My projects seek open forms in which clothing becomes architecture, protection, constraint, or narrative.',
    'Sujet': 'Subject',
    'Message': 'Message',
    'Envoyer le message': 'Send message',
    'Tous les projets': 'All works',
    'Œuvres interactives': 'Interactive works',
    'Arts visuels': 'Visual art',
    'Présentation de la plateforme': 'Platform overview',
    'Recherche': 'Research',
    'Archives d’artistes': 'Artist archives',
    'Accéder à la plateforme': 'Open the platform',
    'Architecture de la plateforme': 'Platform architecture',
    'Une bibliothèque en mouvement': 'A living library',
    'Articles de recherche': 'Research articles',
    'Des textes pour comprendre les œuvres, les pratiques et les questions qui traversent l’art contemporain.': 'Texts for understanding the works, practices, and questions that shape contemporary art.',
    'Des dossiers pour relier les œuvres, les parcours, les références et les gestes de création.': 'Files connecting works, practices, references, and gestures of making.',
    'Lectures thématiques': 'Thematic readings',
    'Des parcours éditoriaux pour lire autrement les images, les matières, les corps et les espaces.': 'Editorial paths for reading images, materials, bodies, and spaces differently.'
  });

  Object.assign(dictionaries.zh, {
    'Art · Vêtement ·': '艺术 · 服装 ·',
    'Corps · Mémoire': '身体 · 记忆',
    'Œuvre sélectionnée · 01': '精选作品 · 01',
    'Explorer': '探索',
    'Trois entrées dans le travail': '进入创作的三个入口',
    'Le vêtement devient abri, contrainte et seconde architecture. Le corps disparaît partiellement sous la matière et laisse émerger une forme ambiguë.': '服装成为庇护、束缚与第二层建筑。身体部分隐没于材料之下，一种暧昧的形态由此浮现。',
    'Une pratique en mouvement': '持续运动的创作实践',
    'À travers les matières, les gestes et les images, j’explore les déplacements de l’identité culturelle entre la Chine et la France.': '我通过材料、动作与图像，探索中国与法国之间不断变化的文化身份。',
    '2026 · Acrylique sur papier · 1148 × 1536 px': '2026 · 纸本丙烯 · 1148 × 1536 像素',
    'Plateforme de recherche artistique': '艺术研究平台',
    'Ouvrir l’application': '打开应用',
    'Télécharger l’application': '下载应用',
    'Mensuel': '按月',
    'Annuel': '按年',
    'par mois': '每月',
    'par an': '每年',
    'Télécharger pour Android': '下载 Android 版',
    'Installer sur iPhone': '在 iPhone 上安装',
    'Nom': '姓名',
    'Votre e-mail': '你的邮箱',
    'À propos': '关于',
    'Biographie': '简介',
    'CV': '简历',
    'Déclaration de l’artiste': '艺术家陈述',
    'Ma pratique se situe à la croisée du vêtement, de l’installation, de la performance et de la peinture. Je travaille avec le corps comme un espace de mémoire, de transformation et de tension.': '我的创作位于服装、装置、行为与绘画的交汇处。我把身体视为记忆、转化与张力发生的空间。',
    'À travers les matières, les gestes et les images, j’explore les déplacements de l’identité culturelle entre la Chine et la France. Mes projets cherchent des formes ouvertes, où le vêtement devient architecture, protection, contrainte ou récit.': '我通过材料、动作与图像，探索中国与法国之间不断变化的文化身份。我的项目寻找开放的形式，让服装成为建筑、保护、束缚或叙事。',
    'Sujet': '主题',
    'Message': '留言',
    'Envoyer le message': '发送留言',
    'Tous les projets': '全部作品',
    'Œuvres interactives': '互动作品',
    'Arts visuels': '视觉艺术',
    'Présentation de la plateforme': '平台介绍',
    'Recherche': '研究文章',
    'Archives d’artistes': '艺术家档案',
    'Accéder à la plateforme': '进入平台',
    'Architecture de la plateforme': '平台架构',
    'Une bibliothèque en mouvement': '一座持续生长的文库',
    'Articles de recherche': '研究文章',
    'Des textes pour comprendre les œuvres, les pratiques et les questions qui traversent l’art contemporain.': '帮助理解当代艺术作品、实践与问题的研究文章。',
    'Des dossiers pour relier les œuvres, les parcours, les références et les gestes de création.': '连接作品、艺术家经历、参考资料与创作行动的档案。',
    'Lectures thématiques': '主题阅读',
    'Des parcours éditoriaux pour lire autrement les images, les matières, les corps et les espaces.': '通过编辑策划的阅读路径，重新理解图像、材料、身体与空间。'
  });




  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement && !['SCRIPT', 'STYLE'].includes(node.parentElement.tagName) && node.textContent.trim()
        ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!node.__xingSource) node.__xingSource = node.textContent.trim();
    node.__source = node.__xingSource;
    textNodes.push(node);
  }




  const locale = document.querySelector('.header-locale, .locale');
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
    const homeTitle = document.querySelector('#home-title');
    const homeTitleParts = {
      fr: ['Art · Vêtement ·', 'Corps · Mémoire'],
      en: ['Art · Garment ·', 'Body · Memory'],
      zh: ['艺术 · 服装 ·', '身体 · 记忆']
    }[language];
    if (homeTitle && homeTitleParts) {
      homeTitle.querySelectorAll('span').forEach((part, index) => {
        if (homeTitleParts[index]) part.textContent = homeTitleParts[index];
      });
    }
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
    document.querySelectorAll('.lang-button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === language));
    });
    localStorage.setItem('xing-language', language);
    window.dispatchEvent(new CustomEvent('xing-language-change', { detail: { language } }));
  }




  setLanguage(localStorage.getItem('xing-language') || 'fr');
})();
