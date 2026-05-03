import { Project, SyntaxKind } from "ts-morph";

const translationsDict = {
  ar: {
    "engages-ai": { title: "Engages AI", description: "بناء تطبيق محادثة CRM مع قدرات روبوت الدردشة بالذكاء الاصطناعي، يتميز بالرسائل في الوقت الفعلي والخدمات المصغرة القابلة للتوسع.", longDescription: "قدت تطوير منصة CRM وروبوت دردشة مدعوم بالذكاء الاصطناعي. تتضمن الميزات التواصل في الوقت الفعلي، وتجميع جهات الاتصال الآلي للبث، ومسارات عمل معقدة لإدارة العملاء المحتملين." },
    "salesmrkt": { title: "Salesmrkt", description: "تطوير ميزات لمقدمي خدمات المبيعات والخدمات، وتحسين إدارة العملاء المحتملين وتفاعل المستخدمين.", longDescription: "مطور أساسي للنظام البيئي لـ Salesmrkt، مع التركيز على أتمتة مسار المبيعات لمقدمي الخدمات. تطوير أدوات مركزية لإدارة العملاء المحتملين." },
    "gotryone": { title: "GoTryOne", description: "منصة متخصصة لمقدمي الخدمات لإدارة الحجوزات والتجارب بكفاءة.", longDescription: "بناء منصة متخصصة لإدارة الحجوزات والتجارب ضمن نظام Salesbox. التكامل مع QuickBooks و Stripe للعمليات المالية السلسة." },
    "utmsir": { title: "UTMSIR", description: "حل ويب معزز بالذكاء الاصطناعي لسكن الطلاب الدوليين مع مهام غرف آلية.", longDescription: "مشروع السنة النهائية في جامعة UTM. تطوير نظام إدارة سكن يعتمد على الويب للطلاب الدوليين. يتضمن محرك توصية يعتمد على الذكاء الاصطناعي لتنسيق الغرف." },
    "quickbooks-n8n": { title: "أتمتة QuickBooks مع N8N", description: "أتمتة QuickBooks مع استدعاءين webhook: لإنشاء الفواتير وإرسال رسائل بريد إلكتروني للعملاء من أجل الدفع.", longDescription: "تُستخدم هذه الأتمتة لإنشاء عملاء وعناصر في الحساب إذا لم تكن موجودة. تتضمن إنشاء فواتير بسلاسة وإرسالها بالبريد الإلكتروني للعملاء لطلب الدفع." },
    "calendly-n8n": { title: "أتمتة Calendly مع N8N", description: "سير عمل مؤتمت بالكامل يعتمد على أحداث Calendly لإدارة الحجوزات ومزامنة البيانات بسلاسة.", longDescription: "يتم دمج أتمتة N8N هذه مباشرة مع Calendly لتلقي المواعيد وإدارتها، بالإضافة إلى إرسال الإشعارات وتحديث السجلات دون أي تدخل يدوي." },
    "ai-audit-report-n8n": { title: "خط أنابيب ذكاء اصطناعي لتقارير التدقيق", description: "أتمتة N8N تعمل كمسار للذكاء الاصطناعي لمعالجة نماذج تقارير التدقيق تلقائيًا.", longDescription: "يعمل هذا النظام على أتمتة التعامل مع نماذج تقارير التدقيق. يعالج التقديمات بذكاء، ويستخرج المعلومات الرئيسية ويلخصها باستخدام نماذج اللغات لتوفير تقارير تدقيق منظمة وتخفيف العمل اليدوي." },
    "slack-captured-lead-n8n": { title: "أتمتة التقاط العملاء وتوجيههم لـ Slack", description: "أتمتة N8N تلتقط العملاء المحتملين الجدد وتوجه إشعارات منظمة فورية إلى قنوات Slack.", longDescription: "صُمم هذا النظام لمعالجة العملاء المحتملين الواردين بشكل فوري. يسترد تفاصيل العميل، وينظم المعلومات، ويطلق إشعارات شاملة ومباشرة لقنوات Slack المخصصة." },
    "zack-thompson-portfolio": { title: "معرض أعمال Zack Thompson", description: "موقع ويب احترافي وحديث لعرض الأعمال تم تطويره لـ Zack Thompson. متاح على: https://zackthompson.com/", longDescription: "تصميم وتطوير محفظة رقمية شاملة لـ Zack Thompson لعرض أعماله وعلامته التجارية. يوفر الموقع تفاعلات ديناميكية، وتصميماً نظيفاً، وتجربة سلسة عبر الأجهزة. يمكنك زيارته عبر https://zackthompson.com/." },
    "meetjoegreco-portfolio": { title: "معرض أعمال Joe Greco", description: "موقع محفظة احترافي مصمم ومطور لـ Joe Greco. متاح على: https://meetjoegreco.com/", longDescription: "بناء محفظة رقمية فاخرة لـ Joseph Greco، الرئيس التنفيذي في Salesmrkt. تعمل كمركز رئيسي لعلامته التجارية مع تخطيطات حديثة، حركات سلسة وأداء محسن يعكس خبرته וقيادته. متاح عبر https://meetjoegreco.com/." },
    "joe-website-portfolio": { title: "معرض أعمال موقع Joe", description: "محفظة رقمية مفصلة وصفحة هبوط مصممة لعرض شامل للعلامة التجارية.", longDescription: "تطوير محفظة رقمية مخصصة وصفحة هبوط لرفع التواجد الرقمي لـ Joe. يركز الموقع بشكل كبير على التصميم المدفوع بالتحويلات والسرعة وسلاسة الاستخدام." },
    "grn-shoreline-portfolio": { title: "موقع GRN Shoreline", description: "موقع ويب مخصص للشركات تم تطويره بخبراء لـ GRN Shoreline لتعزيز تواجدها الرقمي.", longDescription: "تصميم وتطوير موقع إلكتروني شامل لـ GRN Shoreline بالتعاون المباشر مع مؤسسها Matthew Curran. بُنيت المنصة من الصفر لالتقاط رؤيته بدقة وتقديم واجهة سريعة الاستجابة وملبية لاحتياجات الشركة." }
  },
  es: {
    "engages-ai": { title: "Engages AI", description: "Se construyó una aplicación de chat CRM con capacidades integradas de chatbot de IA.", longDescription: "Lideró el desarrollo de una plataforma CRM y un chatbot impulsado por IA. Se implementó la comunicación en tiempo real y flujos de gestión de clientes potenciales." },
    "salesmrkt": { title: "Salesmrkt", description: "Desarrollo de componentes de interfaz de usuario frontend para proveedores de servicios y ventas.", longDescription: "Desarrollador principal del ecosistema Salesmrkt, enfocado en automatizar el embudo de ventas para proveedores de servicios, con gestión centralizada de clientes potenciales." },
    "gotryone": { title: "GoTryOne", description: "Una plataforma especializada para que los proveedores gestionen reservas eficientemente.", longDescription: "Construyó una plataforma de reservas y pruebas dentro del ecosistema Salesbox, integrada con QuickBooks y Stripe." },
    "utmsir": { title: "UTMSIR", description: "Solución web mejorada con IA para alojamiento internacional de estudiantes.", longDescription: "Desarrolló un sistema web de gestión de residencias para estudiantes internacionales con un motor de recomendaciones por IA para emparejamiento." },
    "quickbooks-n8n": { title: "Automatización de QuickBooks", description: "Integración de N8N y QuickBooks con peticiones webhook para facturas.", longDescription: "Automatización utilizada para crear facturas y clientes en la cuenta y mandar correos electrónicos para el pago automáticamente." },
    "calendly-n8n": { title: "Automatización Calendly N8N", description: "Flujo de trabajo automatizado para sincronización de datos de Calendly.", longDescription: "Se integra directamente con Calendly para procesar citas, mandar notificaciones y actualizar CRM basándose en eventos programados o modificados." },
    "ai-audit-report-n8n": { title: "Pipeline de IA para Auditorías", description: "Pipeline de IA automatizado en N8N para informes de auditoría.", longDescription: "Extrae de forma inteligente información mediante modelos avanzados, resumiendo hallazgos clave de auditorías y generando reportes estructurados." },
    "slack-captured-lead-n8n": { title: "Captura de Clientes vía Slack", description: "Automatización que enruta nuevos clientes calificados de N8N hacia Slack.", longDescription: "Obtiene los detalles del cliente calificado y formula mensajes exhaustivos hacia canales específicos de Slack para alertar al equipo en vivo." },
    "zack-thompson-portfolio": { title: "Portafolio Zack Thompson", description: "Un portafolio web de alto rendimiento para Zack Thompson a zackthompson.com.", longDescription: "Desarrollo y diseño del portafolio digital de Zack, incluyendo interacciones dinámicas. Disponible a través de https://zackthompson.com/." },
    "meetjoegreco-portfolio": { title: "Portafolio Joe Greco", description: "Un portafolio profesional para Joe Greco, visitable en meetjoegreco.com", longDescription: "Plataforma premium para Joseph Greco, CEO de Salesmrkt, enfocada en consolidar su marca como emprendedor, construida con React y rendimiento óptimo." },
    "joe-website-portfolio": { title: "Página Web Joe", description: "Portafolio digital dinámico enfocado en conversiones para elevadas presencias B2B.", longDescription: "Desarrolló un landing page y portfolio centrado fuertemente en conducir más prospectos manteniendo un diseño moderno." },
    "grn-shoreline-portfolio": { title: "Web corporativa GRN Shoreline", description: "Sitio web completo personalizado apoyando la visión de GRN Shoreline empresarial.", longDescription: "Colaboró minuciosamente con el fundador Matthew Curran para crear la experiencia digital impecable y responsiva que resuelva el crecimiento de Shoreline GRN." }
  },
  de: {
    "engages-ai": { title: "Engages AI", description: "Entwicklung einer CRM-Chat-Applikation mit integrierten KI-Chatbot-Fähigkeiten.", longDescription: "Leitete die Entwicklung einer CRM- und KI-gesteuerten Chatbot-Plattform. Implementierte Echtzeit-Kommunikation und automatisierte Kontaktgruppierung sowie Lead-Management-Workflows." },
    "salesmrkt": { title: "Salesmrkt", description: "Entwickelte Frontend-UI-Komponenten für Vertriebs- und Dienstleistungsanbieter.", longDescription: "Kernentwickler für das Salesmrkt-Ökosystem mit Fokus auf die Automatisierung des Vertriebsprozesses für Dienstleister inklusive zentralisierter Lead-Management-Tools." },
    "gotryone": { title: "GoTryOne", description: "Spezialisierte Plattform für Dienstleister zur effizienten Verwaltung von Buchungen.", longDescription: "Aufbau einer Buchungs- und Testmanagement-Plattform innerhalb des Salesbox-Ökosystems. Integriert mit QuickBooks und Stripe für nahtlose Finanzprozesse." },
    "utmsir": { title: "UTMSIR", description: "KI-gestützte Web-Lösung für internationale Studentenunterkünfte mit automatischer Zimmerzuweisung.", longDescription: "Abschlussprojekt an der UTM. Entwicklung eines webbasierten Wohnheim-Verwaltungssystems für internationale Studenten. Enthält eine KI-Empfehlungs-Engine für die Zimmerzuweisung." },
    "quickbooks-n8n": { title: "QuickBooks N8N-Automatisierung", description: "Robuste Integration zur Rechnungs- und Kundenerstellung per Webhook.", longDescription: "Wird zur automatischen Erstellung von Rechnungen und Kunden verwendet. Im zweiten Verlauf werden Rechnungen direkt per E-Mail angefordert." },
    "calendly-n8n": { title: "Calendly Automatisierung", description: "Automatisierter Workflow zur Synchronisierung von Calendly Terminen.", longDescription: "Dieses System wartet auf Calendly-Hooks und steuert dann Benachrichtigungen, Aktualisierungen und mehr automatisch durch." },
    "ai-audit-report-n8n": { title: "KI Audit Pipeline", description: "Eine N8N Automatisierung, welche Audits generiert und verwaltet.", longDescription: "Die Formulare fließen in LLMs ein, um strukturierte Schlussfolgerungen und Berichte automatisch zusammenzufügen. Das senkt massiv Arbeitsstunden ab." },
    "slack-captured-lead-n8n": { title: "Slack Leads Integration", description: "Sobald ein Lead eingeht, meldet N8N alle Metriken an definierte Slack Kanäle.", longDescription: "Führt Daten an einem Ort zusammen, formatiert sie schön auf und sendet Benachrichtigungsfeuer ab, um dem Sales-Team im Auge zu helfen, sobald das Lead-Form gedrückt wird." },
    "zack-thompson-portfolio": { title: "Zack Thompson Webseite", description: "Eine sehr performante Webseite für Zack Thompson (zackthompson.com).", longDescription: "Umfassendes Portfolio System inklusive schneller Architektur mit React, um die Personal Brand und Skills im besten Licht zu präsentieren." },
    "meetjoegreco-portfolio": { title: "Joe Greco Web-Präsenz", description: "Digitale Marke auf meetjoegreco.com für einen bekannten Experten.", longDescription: "Zeichnet sich durch moderne Web Standards aus. Die Performance der Site, UI/UX, wurden komplett optimiert um Leaderhip Fähigkeiten klar zu zeigen." },
    "joe-website-portfolio": { title: "Joe Portfolio & Sales Site", description: "Ein dedizierter Sales-Kanal inklusive Portfolio-Architektur.", longDescription: "Design und Entwicklung zur Conversion-Optimierung, wodurch sich Besucherzahlen in Anfragen umwandeln dank toller UI/UX Gestaltung." },
    "grn-shoreline-portfolio": { title: "GRN Shoreline Webseite", description: "Unternehmenswebseite aufgebaut auf Vorgabe durch Matthew Curran.", longDescription: "Volles Projekt von Zero zur Fertigstellung. Die GRN Präsenz hat jetzt schnelle Ladezeiten und erfüllt den digitalen Unternehmensbedarf mit modernem Styling." }
  },
  ru: {
    "engages-ai": { title: "Engages AI", description: "CRM-чат-приложение с интегрированными возможностями искусственного интеллекта.", longDescription: "Руководил разработкой CRM и платформы ИИ-чат-ботов. Внедрил коммуникацию в реальном времени и автоматизацию рабочих процессов для управления лидами." },
    "salesmrkt": { title: "Salesmrkt", description: "Платформа компонентов интерфейса для отделов продаж и поставщиков услуг.", longDescription: "Ключевой разработчик экосистемы Salesmrkt, специализирующийся на автоматизации воронки продаж и централизованном управлении лидами." },
    "gotryone": { title: "GoTryOne", description: "Специализированная платформа для поставщиков услуг для управления бронированием.", longDescription: "Создал платформу бронирования в экосистеме Salesbox с интеграцией QuickBooks и Stripe." },
    "utmsir": { title: "UTMSIR", description: "Веб-решение с поддержкой ИИ для размещения иностранных студентов.", longDescription: "Разработал систему управления общежитиями для студентов с алгоритмами ИИ для подбора соседей и комнат." },
    "quickbooks-n8n": { title: "Интеграция QuickBooks & N8N", description: "Автоматизация вебхуков для QuickBooks, создание клиентов и отправка счет-фактур.", longDescription: "Создает счета для QuickBooks в фоновом режиме, генерируя автоматические счета к оплате и транслируя уведомления клиентам." },
    "calendly-n8n": { title: "Связка Calendly & N8N", description: "Автоматизированная синхронизация встреч из Calendly в корпоративные системы.", longDescription: "Непрерывно прислушивается к событиям Calendly и автоматически рассылает обновления команде и синхронизирует встречи в БД." },
    "ai-audit-report-n8n": { title: "ИИ обработчик отчетов", description: "Сеть N8N по генерации отчетов автоматического аудита через нейросети.", longDescription: "Пайплайн на основе глубоких ИИ-алгоритмов автоматически переводит формы отчетности в структурированные документы с бизнес-аналитикой." },
    "slack-captured-lead-n8n": { title: "Генератор лидов в Slack", description: "Система маршрутизации данных о потенциальных клиентах сразу в Slack.", longDescription: "Как только данные клиента получены, скрипт форматирует сообщение и доставляет его сотрудникам для мгновенного ответа." },
    "zack-thompson-portfolio": { title: "Сайт Zack Thompson", description: "Сайт-портфолио, построенный для представления бренда Зак Томпсон.", longDescription: "Полная инфраструктура веб-портфолио на NextJS. Обладает высочайшим показателем производительности и дизайна." },
    "meetjoegreco-portfolio": { title: "Сайт Джо Греко", description: "Профессиональный веб-сайт-визитка для топ-менеджера (meetjoegreco.com).", longDescription: "Дорогая платформа для CEO Джо Греко, нацеленная на современный дизайн и высокую скорость работы приложения." },
    "joe-website-portfolio": { title: "Joe Landing Page", description: "Цифровой профиль и конверсионный лендинг", longDescription: "Качественная верстка и функциональный NextJS лендинг для эффективной презентации бизнеса потенциальным клиентам." },
    "grn-shoreline-portfolio": { title: "Сайт компании GRN Shoreline", description: "Улучшенное присутствие компании в сети, разработанное специально под нужды основателя Matthew Curran.", longDescription: "Был разработан с нуля с поддержкой самых современных технологий, обеспечивая быстрый охват и великолепную оптимизацию для корпоративных целей." }
  },
  fr: {
    "engages-ai": { title: "Engages AI", description: "Application de chat CRM intégrée à des capacités de chatbot IA.", longDescription: "A dirigé le développement de la plateforme CRM avec une communication en temps réel et des flux de gestion des pistes complexes via des chatbots." },
    "salesmrkt": { title: "Salesmrkt", description: "Développement d'interfaces utilisateur frontend pour la vente et le service.", longDescription: "Développeur principal de l'écosystème Salesmrkt, spécialisé dans l'optimisation des tunnels de vente pour les fournisseurs de services via de nombreux outils de gestion." },
    "gotryone": { title: "GoTryOne", description: "Plateforme spécialisée de réservation et d'essais pour les fournisseurs.", longDescription: "Mise en place d'une plateforme de réservation au sein de l'écosystème Salesbox, intégrée avec des modules comme QuickBooks et Stripe." },
    "utmsir": { title: "UTMSIR", description: "Solution web améliorée par l'IA pour l'hébergement d'étudiants internationaux.", longDescription: "Système de gestion web d'attributions de chambres et un moteur d'IA de correspondance développé pour le projet final à l'université UTM." },
    "quickbooks-n8n": { title: "Automatisation de QuickBooks", description: "Flux automatique N8N qui crée des factures de QuickBooks et des demandes de paiement", longDescription: "Deux processus webhook qui servent à émettre les données automatiquement vers QuickBooks puis à relayer l'état pour les courriels clients." },
    "calendly-n8n": { title: "Automatisation de Calendly", description: "Flux de données automatisé depuis Calendly qui synchronise rendez-vous.", longDescription: "Le workflow connecte Calendly à nos systèmes en traitant l'acheminement des données pour notifications, réservations, actions consécutives etc." },
    "ai-audit-report-n8n": { title: "Pipeline IA des audits", description: "Automatisation de récupération et rapport généré par l'IA.", longDescription: "Traite avec ingéniosité des formulaires, en tirant parti des LLM (modèles de langage IA) pour concevoir et extraire un audit formel." },
    "slack-captured-lead-n8n": { title: "Slack Alerte du Client", description: "Un flux web automatisé recevant des requêtes clients redirigées vers un canal Slack", longDescription: "Structure instantanément et achemine en un temps record chaque piste client en enrichissant le message mis dans Slack afin d'agir vit." },
    "zack-thompson-portfolio": { title: "Portfolio de Zack Thompson", description: "Un site web complet moderne axé sur les performances et construit pour zackthompson.com", longDescription: "Le portfolio offre des interactions dynamiques et témoigne d'un style irréprochable et épuré. Réalisé avec NextJS." },
    "meetjoegreco-portfolio": { title: "Site du CEO Joe Greco", description: "Site web prestigieux pour un dirigeant qui se présente comme un hub central.", longDescription: "Portfolio premium propulsé à haute disponibilité. Transmet une clarté et un dynamisme absolu par animations modernes." },
    "joe-website-portfolio": { title: "Page de destination de Joe", description: "Un portail en ligne favorisant la conversion et la vente ciblée.", longDescription: "Rendu du site Web de Joe avec un accent tout particulier sur la rétention du client à travers un design interactif et fluide." },
    "grn-shoreline-portfolio": { title: "Site web de GRN Shoreline", description: "Plateforme robuste créée avec soin afin de positionner fortement l'entreprise.", longDescription: "Développement d'un projet clé avec M. Matthew Curran avec tous les réglages et architectures pour assurer de longues heures d'exposition digitale fiable." }
  }
};

const project = new Project();
project.addSourceFileAtPath("src/lib/translations-context.tsx");
const file = project.getSourceFileOrThrow("src/lib/translations-context.tsx");

const translationsDefault = file.getVariableDeclarationOrThrow("translations");
const objectLiteral = translationsDefault.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

// 1. Get properties of en
const enProperty = objectLiteral.getPropertyOrThrow("en");
const enObject = enProperty.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);
const enProjectsArrayText = enObject.getPropertyOrThrow("projects")
  .getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression)
  .getPropertyOrThrow("items")
  .getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression)
  .getText();

// Languages to process
const langs = ["ar", "es", "de", "ru", "fr"];

for (const lang of langs) {
  const langProperty = objectLiteral.getPropertyOrThrow(lang);
  const langObject = langProperty.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);
  
  const projectsProperty = langObject.getPropertyOrThrow("projects");
  const projectsObject = projectsProperty.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);
  
  const itemsProperty = projectsObject.getPropertyOrThrow("items");
  
  // Replace the AST node of `items` array entirely with English array first
  itemsProperty.setInitializer(enProjectsArrayText);
  
  // Now retrieve the newly replaced array literal
  const newItemsArray = projectsObject.getPropertyOrThrow("items").getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
  
  // Iterate through all objects inside the array
  const elements = newItemsArray.getElements();
  for (const element of elements) {
    if (element.getKind() === SyntaxKind.ObjectLiteralExpression) {
      const obj = element;
      const slugProp = obj.getProperty("slug");
      if (slugProp && slugProp.getKind() === SyntaxKind.PropertyAssignment) {
        const slugValue = slugProp.getInitializerIfKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
        
        // Translating fields based on our dictionary
        const dict = translationsDict[lang];
        if (dict && dict[slugValue]) {
          const tinfo = dict[slugValue];
          
          // Title
          const titleProp = obj.getProperty("title");
          if (titleProp) titleProp.getInitializerIfKindOrThrow(SyntaxKind.StringLiteral).setLiteralValue(tinfo.title);
          
          // Description
          const descProp = obj.getProperty("description");
          if (descProp) descProp.getInitializerIfKindOrThrow(SyntaxKind.StringLiteral).setLiteralValue(tinfo.description);
          
          // LongDescription
          const longDescProp = obj.getProperty("longDescription");
          if (longDescProp) longDescProp.getInitializerIfKindOrThrow(SyntaxKind.StringLiteral).setLiteralValue(tinfo.longDescription);
        }
      }
    }
  }
}

file.saveSync();
console.log("Translations successfully updated.");
