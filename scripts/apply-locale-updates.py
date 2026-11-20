from pathlib import Path
import json
import re

path = Path("/home/osama/Desktop/personal-portfolio/src/lib/translations-context.tsx")
text = path.read_text()


def replace_once(old: str, new: str, label: str) -> None:
    global text
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{label}: expected 1 match, got {count}")
    text = text.replace(old, new, 1)


def js_list(items: list[str]) -> str:
    return json.dumps(items, ensure_ascii=False)


def fdg_block(role, cat, d1, d2, ach, soft, daily, daily2, daily_ach, art, art2, art_ach, indie, edu, mind, mind2, mind_ach, cta):
    return f'''        {{
          slug: "review-revolution",
          title: "Review Revolution",
          featured: true,
          organization: "Frequency Digital Group",
          role: {json.dumps(role, ensure_ascii=False)},
          productCategory: {json.dumps(cat, ensure_ascii=False)},
          description: {json.dumps(d1, ensure_ascii=False)},
          longDescription: {json.dumps(d2, ensure_ascii=False)},
          achievements: {js_list(ach)},
          tech: ["Next.js", "TypeScript", "Backend APIs", "PostgreSQL", "AI workflows"],
          ctaLabel: {json.dumps(cta, ensure_ascii=False)}
        }},
        {{
          slug: "daily-authority",
          title: "Daily Authority",
          featured: true,
          organization: "Frequency Digital Group",
          role: {json.dumps(role, ensure_ascii=False)},
          productCategory: {json.dumps(soft, ensure_ascii=False)},
          description: {json.dumps(daily, ensure_ascii=False)},
          longDescription: {json.dumps(daily2, ensure_ascii=False)},
          achievements: {js_list(daily_ach)},
          tech: ["Full stack", "Product architecture", "Testing", "Deployment"],
          ctaLabel: {json.dumps(cta, ensure_ascii=False)}
        }},
        {{
          slug: "art-by-mio",
          title: "Art By MIO",
          featured: true,
          organization: "Frequency Digital Group",
          role: {json.dumps(role, ensure_ascii=False)},
          productCategory: {json.dumps(soft, ensure_ascii=False)},
          description: {json.dumps(art, ensure_ascii=False)},
          longDescription: {json.dumps(art2, ensure_ascii=False)},
          achievements: {js_list(art_ach)},
          tech: ["Full stack", "UI", "Backend", "Data handling"],
          ctaLabel: {json.dumps(cta, ensure_ascii=False)}
        }},
        {{
          slug: "mind-step-tutor",
          title: "Mind Step Tutor",
          category: "independent-projects",
          organization: "Independent",
          role: {json.dumps(indie, ensure_ascii=False)},
          productCategory: {json.dumps(edu, ensure_ascii=False)},
          description: {json.dumps(mind, ensure_ascii=False)},
          longDescription: {json.dumps(mind2, ensure_ascii=False)},
          achievements: {js_list(mind_ach)},
          tech: ["Product architecture", "Full stack"],
          ctaLabel: {json.dumps(cta, ensure_ascii=False)}
        }},
'''


def experience_block(edu_title, cert_title, exp_title, fdg, sales, engages, intern, usim, gdsc):
    return f'''    education: {{
      title: {json.dumps(edu_title, ensure_ascii=False)},
      degree: "Bachelor of Computer Science (Software Engineering)",
      school: "Universiti Teknologi Malaysia",
      period: "Mar 2020 – Feb 2024",
      cgpa: "CGPA: 3.92",
      certificationsTitle: {json.dumps(cert_title, ensure_ascii=False)},
      certifications: [
        {{ name: "Web Development Nanodegree", issuer: "Udacity" }},
        {{ name: "Applied Data Science with Python", issuer: "Cognitive Class.ai" }}
      ]
    }},
    experience: {{
      title: {json.dumps(exp_title, ensure_ascii=False)},
      items: [
        {{
          "company": "Frequency Digital Group",
          "role": "Sole AI Full Stack Developer",
          "period": "Jun 2026 – Present",
          "location": "Remote",
          "responsibilities": {js_list(fdg)},
          "tech": ["Next.js", "TypeScript", "Backend APIs", "PostgreSQL", "AI workflows"]
        }},
        {{
          "company": "Salesmrkt",
          "role": "Full Stack Software Engineer",
          "period": "Sep 2025 – Mar 2026",
          "location": "Seattle, USA (Remote)",
          "responsibilities": {js_list(sales)},
          "tech": ["Next.js", "Tailwind CSS", "Firebase", "Shopify", "Stripe", "n8n"]
        }},
        {{
          "company": "Engages AI",
          "role": "Full Stack Software Engineer",
          "period": "Jan 2024 – Aug 2025",
          "location": "Singapore (Remote)",
          "responsibilities": {js_list(engages)},
          "tech": ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "LangGraph", "Rasa"]
        }},
        {{
          "company": "Engages AI",
          "role": "Software Engineer Intern",
          "period": "May 2023 – Dec 2023",
          "location": "Malaysia (Hybrid)",
          "responsibilities": {js_list(intern)},
          "tech": ["React", "NestJS", "PostgreSQL", "Rasa"]
        }},
        {{
          "company": "Universiti Sains Islam Malaysia",
          "role": "System Analyst",
          "period": "Oct 2022 – Apr 2023",
          "location": "Malaysia (Remote)",
          "responsibilities": {js_list(usim)},
          "tech": ["React", "React Native", "Laravel"]
        }},
        {{
          "company": "Google Developer Student Club, UTM",
          "role": "Technical Team Member",
          "period": "Nov 2021 – Oct 2022",
          "location": "Johor Bahru, Malaysia",
          "responsibilities": {js_list(gdsc)},
          "tech": ["Python", "Azure", "Computer Vision"]
        }}
      ]
    }},
'''


pairs = [
    (
        '    nav: { home: "الرئيسية", about: "من أنا", projects: "المشاريع", contact: "اتصل بي", resume: "السيرة الذاتية" },\n    hero: { location: "دينباسار، بالي، إندونيسيا", title: "مهندس برمجيات و أخصائي ذكاء اصطناعي", description: "بناء حلول مدعومة بالذكاء الاصطناعي وتطبيقات ويب عالية الأداء.", cta_projects: "عرض المشاريع", cta_contact: "اتصل بي" },',
        '    nav: { home: "الرئيسية", work: "العمل", experience: "الخبرة", projects: "المشاريع", skills: "المهارات", education: "التعليم", about: "من أنا", contact: "اتصل بي", resume: "السيرة الذاتية" },\n    hero: { location: "Selangor, Malaysia", title: "AI Full Stack Software Engineer", headline: "بناء منتجات SaaS معقدة من الهندسة حتى التسليم.", description: "أطور بشكل مستقل تطبيقات الواجهة الأمامية وأنظمة الخلفية وسير العمل المدعومة بالذكاء الاصطناعي. يشمل عملي الأخير ثلاثة مشاريع برمجية في Frequency Digital Group.", cta_projects: "استكشف أعمالي", cta_resume: "تحميل السيرة", cta_contact: "تواصل معي" },',
        "ar nav",
    ),
    (
        '    nav: { home: "Inicio", about: "Sobre mí", projects: "Proyectos", contact: "Contacto", resume: "Currículum" },\n    hero: { location: "Denpasar, Bali, Indonesia", title: "Ingeniero Full Stack y Especialista en IA", description: "Creando soluciones escalables impulsadas por IA y aplicaciones web de alto rendimiento.", cta_projects: "Ver Proyectos", cta_contact: "Contáctame" },',
        '    nav: { home: "Inicio", work: "Trabajo", experience: "Experiencia", projects: "Proyectos", skills: "Habilidades", education: "Educación", about: "Sobre mí", contact: "Contacto", resume: "Currículum" },\n    hero: { location: "Selangor, Malaysia", title: "AI Full Stack Software Engineer", headline: "Construyendo productos SaaS complejos desde la arquitectura hasta la entrega.", description: "Desarrollo de forma independiente frontend, backend y flujos con IA. Mi trabajo reciente incluye tres proyectos de software en Frequency Digital Group.", cta_projects: "Explorar mi trabajo", cta_resume: "Descargar currículum", cta_contact: "Contactar" },',
        "es nav",
    ),
    (
        '    nav: { home: "Startseite", about: "Über mich", projects: "Projekte", contact: "Kontakt", resume: "Lebenslauf" },\n    hero: { location: "Denpasar, Bali, Indien", title: "Full-Stack-Softwareentwickler & KI-Spezialist", description: "Entwicklung skalierbarer KI-gestützter Lösungen und Webanwendungen.", cta_projects: "Projekte ansehen", cta_contact: "Kontaktieren Sie mich" },',
        '    nav: { home: "Startseite", work: "Arbeit", experience: "Erfahrung", projects: "Projekte", skills: "Skills", education: "Bildung", about: "Über mich", contact: "Kontakt", resume: "Lebenslauf" },\n    hero: { location: "Selangor, Malaysia", title: "AI Full Stack Software Engineer", headline: "Komplexe SaaS-Produkte von der Architektur bis zur Auslieferung.", description: "Ich entwickle eigenständig Frontend, Backend und KI-Workflows. Zur jüngsten Arbeit gehören drei Softwareprojekte bei Frequency Digital Group.", cta_projects: "Arbeit ansehen", cta_resume: "Lebenslauf laden", cta_contact: "Kontakt" },',
        "de nav",
    ),
    (
        '    nav: { home: "Главная", about: "Обо мне", projects: "Проекты", contact: "Контакты", resume: "Резюме" },\n    hero: { location: "Денпасар, Бали, Индонезия", title: "Full Stack разработчик и специалист по ИИ", description: "Создание масштабируемых ИИ-решений и высокопроизводительных веб-приложений.", cta_projects: "Посмотреть проекты", cta_contact: "Связаться со мной" },',
        '    nav: { home: "Главная", work: "Работы", experience: "Опыт", projects: "Проекты", skills: "Навыки", education: "Образование", about: "Обо мне", contact: "Контакты", resume: "Резюме" },\n    hero: { location: "Selangor, Malaysia", title: "AI Full Stack Software Engineer", headline: "Сложные SaaS-продукты от архитектуры до поставки.", description: "Самостоятельно разрабатываю frontend, backend и ИИ-процессы. Недавняя работа: три программных проекта в Frequency Digital Group.", cta_projects: "Смотреть работы", cta_resume: "Скачать резюме", cta_contact: "Связаться" },',
        "ru nav",
    ),
    (
        '    nav: { home: "Accueil", about: "À propos", projects: "Projets", contact: "Contact", resume: "CV" },\n    hero: { location: "Denpasar, Bali, Indonésie", title: "Ingénieur Full Stack & Spécialiste IA", description: "Création de solutions IA évolutives et d\'applications web performantes.", cta_projects: "Voir les Projets", cta_contact: "Contactez-moi" },',
        '    nav: { home: "Accueil", work: "Travail", experience: "Expérience", projects: "Projets", skills: "Compétences", education: "Éducation", about: "À propos", contact: "Contact", resume: "CV" },\n    hero: { location: "Selangor, Malaysia", title: "AI Full Stack Software Engineer", headline: "Des produits SaaS complexes, de l\'architecture à la livraison.", description: "Je développe de façon indépendante le frontend, le backend et des workflows IA. Mon travail récent inclut trois projets logiciels chez Frequency Digital Group.", cta_projects: "Voir mon travail", cta_resume: "Télécharger le CV", cta_contact: "Me contacter" },',
        "fr nav",
    ),
    (
        '{ country: "ماليزيا", countryCode: "MY", role: "بداية التعليم والمسار المهني" },\n        { country: "إندونيسيا", countryCode: "ID", role: "القاعدة الحالية" }',
        '{ country: "ماليزيا", countryCode: "MY", role: "التعليم والمسار المهني والقاعدة الحالية" }',
        "ar journey",
    ),
    (
        '{ country: "Malasia", countryCode: "MY", role: "Educación e Inicio de Carrera" },\n        { country: "Indonesia", countryCode: "ID", role: "Base Actual" }',
        '{ country: "Malasia", countryCode: "MY", role: "Educación, carrera y base actual" }',
        "es journey",
    ),
    (
        '{ country: "Malaysia", countryCode: "MY", role: "Ausbildung & Karrierestart" },\n        { country: "Indonesien", countryCode: "ID", role: "Aktueller Standort" }',
        '{ country: "Malaysia", countryCode: "MY", role: "Bildung, Karriere und aktueller Standort" }',
        "de journey",
    ),
    (
        '{ country: "Малайзия", countryCode: "MY", role: "Образование и старт карьеры" },\n        { country: "Индонезия", countryCode: "ID", role: "Текущая база" }',
        '{ country: "Малайзия", countryCode: "MY", role: "Образование, карьера и текущая база" }',
        "ru journey",
    ),
    (
        '{ country: "Malaisie", countryCode: "MY", role: "Études et Début de Carrière" },\n        { country: "Indonésie", countryCode: "ID", role: "Base Actuelle" }',
        '{ country: "Malaisie", countryCode: "MY", role: "Éducation, carrière et base actuelle" }',
        "fr journey",
    ),
    (
        'languages: "اللغات", frontend: "الواجهة الأمامية", backend: "الواجهة الخلفية", ai: "الذكاء الاصطناعي", db: "قواعد البيانات", devops: "ديف أوبس", tools: "الأدوات والمنصات", core: "المفاهيم الأساسية"',
        'frontend: "الواجهة الأمامية", backend: "الواجهة الخلفية", data: "البيانات والوقت الفعلي", ai: "الذكاء الاصطناعي والأتمتة", cloud: "السحابة والتسليم", observability: "المراقبة", mobile: "الجوال", commerce: "التجارة وأنظمة الأعمال", tools: "الأدوات"',
        "ar skills",
    ),
    (
        'languages: "Idiomas", frontend: "Frontend", backend: "Backend", ai: "IA y ML", db: "Bases de Datos", devops: "DevOps", tools: "Herramientas", core: "Conceptos Principales"',
        'frontend: "Frontend", backend: "Backend", data: "Datos y tiempo real", ai: "IA y automatización", cloud: "Nube y entrega", observability: "Observabilidad", mobile: "Móvil", commerce: "Comercio y sistemas de negocio", tools: "Herramientas"',
        "es skills",
    ),
    (
        'languages: "Sprachen", frontend: "Frontend", backend: "Backend", ai: "KI & ML", db: "Datenbanken", devops: "DevOps", tools: "Tools", core: "Kernkonzepte"',
        'frontend: "Frontend", backend: "Backend", data: "Daten und Echtzeit", ai: "KI und Automatisierung", cloud: "Cloud und Delivery", observability: "Observability", mobile: "Mobile", commerce: "Commerce und Business-Systeme", tools: "Tools"',
        "de skills",
    ),
    (
        'languages: "Языки", frontend: "Фронтенд", backend: "Бэкенд", ai: "ИИ и МО", db: "Базы данных", devops: "DevOps", tools: "Инструменты", core: "Основные концепции"',
        'frontend: "Фронтенд", backend: "Бэкенд", data: "Данные и реальное время", ai: "ИИ и автоматизация", cloud: "Облако и поставка", observability: "Наблюдаемость", mobile: "Мобильная разработка", commerce: "Коммерция и бизнес-системы", tools: "Инструменты"',
        "ru skills",
    ),
    (
        'languages: "Langages", frontend: "Frontend", backend: "Backend", ai: "IA & ML", db: "Bases de données", devops: "DevOps", tools: "Outils", core: "Concepts Clés"',
        'frontend: "Frontend", backend: "Backend", data: "Données et temps réel", ai: "IA et automatisation", cloud: "Cloud et livraison", observability: "Observabilité", mobile: "Mobile", commerce: "Commerce et systèmes métier", tools: "Outils"',
        "fr skills",
    ),
]

for old, new, label in pairs:
    replace_once(old, new, label)

headers = [
    'title: "أبرز المشاريع"',
    'title: "Proyectos Destacados"',
    'title: "Vorgestellte Projekte"',
    'title: "Проекты"',
    'title: "Projets"',
]
extra = '''      featuredTitle: "Frequency Digital Group",
      selectedTitle: "Selected Work",
      independentTitle: "Independent Projects",
      caseStudy: "Case Study",'''
for title in headers:
    replace_once(
        f"      {title},\n      moreCategories:",
        f"      {title},\n{extra}\n      moreCategories:",
        f"header {title}",
    )

cats = [
    ('"university-projects": "مشاريع الجامعة",', '"university-projects": "مشاريع الجامعة",\n        "selected-work": "أعمال مختارة",\n        "independent-projects": "مشاريع مستقلة",'),
    ('"university-projects": "Proyectos Universitarios",', '"university-projects": "Proyectos Universitarios",\n        "selected-work": "Selected Work",\n        "independent-projects": "Independent Projects",'),
    ('"university-projects": "Universitätsprojekte",', '"university-projects": "Universitätsprojekte",\n        "selected-work": "Selected Work",\n        "independent-projects": "Independent Projects",'),
    ('"university-projects": "Университетские Проекты",', '"university-projects": "Университетские Проекты",\n        "selected-work": "Selected Work",\n        "independent-projects": "Independent Projects",'),
    ('"university-projects": "Projets Universitaires",', '"university-projects": "Projets Universitaires",\n        "selected-work": "Selected Work",\n        "independent-projects": "Independent Projects",'),
]
for old, new in cats:
    replace_once(old, new, old)

# Add selected-work category to remaining Engages / Salesmrkt / GoTryOne cards
old_eng = '''slug: "engages-ai",
                      title: "Engages AI",'''
new_eng = '''slug: "engages-ai",
                      category: "selected-work",
                      title: "Engages AI",'''
if text.count(old_eng) != 5:
    raise SystemExit(f"engages indent count {text.count(old_eng)}")
text = text.replace(old_eng, new_eng)

old_sales = '''slug: "salesmrkt",
                      title: "Salesmrkt",'''
new_sales = '''slug: "salesmrkt",
                      category: "selected-work",
                      title: "Salesmrkt",'''
if text.count(old_sales) != 5:
    raise SystemExit(f"sales indent count {text.count(old_sales)}")
text = text.replace(old_sales, new_sales)

old_go = '''slug: "gotryone",
                      title: "GoTryOne",'''
new_go = '''slug: "gotryone",
                      category: "selected-work",
                      title: "GoTryOne",'''
if text.count(old_go) != 5:
    raise SystemExit(f"gotryone indent count {text.count(old_go)}")
text = text.replace(old_go, new_go)

# Insert FDG projects before each remaining Engages card
blocks = {
    "بناء تطبيق محادثة CRM مع قدرات روبوت الدردشة بالذكاء الاصطناعي، يتميز بالرسائل في الوقت الفعلي والخدمات المصغرة القابلة للتوسع.": dict(
        role="المطور الوحيد للمنتج الكامل",
        cat="برمجيات كخدمة مدعومة بالذكاء الاصطناعي",
        d1="طورت بشكل مستقل منصة متعددة الوحدات تغطي ملاحظات العملاء وعمليات السمعة والأتمتة والتحليلات ولوحات الإدارة.",
        d2="صممت الواجهة الأمامية والخلفية ونماذج البيانات وسير العمل لمنصة ملاحظات وذكاء السمعة.",
        ach=["المطور الوحيد للواجهة الأمامية وهندسة الخلفية ووظائف الذكاء الاصطناعي.", "يربط رحلات الملاحظات مع الإدارة والتحليلات والأتمتة في منتج واحد."],
        soft="منتج برمجي",
        daily="ملكية مستقلة لهندسة المنتج والواجهة الأمامية والخلفية وسير العمل والاختبار والنشر والتسليم المستمر.",
        daily2="ملكية مستقلة لهندسة المنتج والتنفيذ والاختبار والنشر. ستُضاف التفاصيل المتخصصة بعد التحقق.",
        daily_ach=["المطور الوحيد من الهندسة حتى النشر.", "يملك الواجهة الأمامية والخلفية وسير العمل والاختبار والتسليم المستمر."],
        art="طورت وصنت وحدي ميزات المستخدم ووظائف الخلفية ومعالجة البيانات وتحسينات المنتج.",
        art2="تطوير وصيانة فردية لميزات المستخدم والخلفية والبيانات. سيُضاف الغرض بعد التحقق.",
        art_ach=["المطور الوحيد لميزات المستخدم ووظائف الخلفية.", "يملك معالجة البيانات وتحسينات المنتج المستمرة."],
        indie="مشروع مستقل فردي",
        edu="منصة تعليم",
        mind="تطوير مستقل لمنصة B2C و C2C تربط الطلاب بالمدرسين الخصوصيين. Mar 2026 to Present.",
        mind2="مشروع مستقل فردي (Mar 2026 to Present). هذا ليس دوراً وظيفياً.",
        mind_ach=["منتج مستقل، وليس دوراً وظيفياً.", "يصمم علاقة الطالب والمدرس عبر تدفقات B2C و C2C."],
        cta="دراسة حالة",
    ),
    "Se construyó una aplicación de chat CRM con capacidades integradas de chatbot de IA.": dict(
        role="Desarrollador full stack único",
        cat="SaaS con IA, experiencia del cliente, gestión de reputación",
        d1="Desarrollé de forma independiente una plataforma SaaS multimódulo de comentarios, reputación, automatización, analítica y paneles.",
        d2="Diseñé frontend, backend, modelos de datos y flujos para una plataforma de comentarios e inteligencia de reputación.",
        ach=["Único desarrollador del frontend, backend e IA.", "Conecta recorridos de feedback con administración, analítica y automatización."],
        soft="Producto de software",
        daily="Propiedad independiente de arquitectura, frontend, backend, flujos, pruebas, despliegue y entrega.",
        daily2="Propiedad independiente de arquitectura e implementación. Los módulos de dominio se añadirán cuando puedan verificarse.",
        daily_ach=["Único desarrollador desde la arquitectura hasta el despliegue.", "Posee frontend, backend, flujos, pruebas y entrega."],
        art="Desarrollé y mantuve en solitario funciones de usuario, backend, datos y mejoras continuas.",
        art2="Desarrollo y mantenimiento en solitario. El propósito se añadirá cuando pueda verificarse.",
        art_ach=["Único desarrollador de funciones de usuario y backend.", "Posee datos y mejoras continuas."],
        indie="Proyecto independiente en solitario",
        edu="Plataforma educativa",
        mind="Desarrollo independiente de una plataforma B2C y C2C que conecta estudiantes con tutores privados. Mar 2026 to Present.",
        mind2="Proyecto independiente en solitario (Mar 2026 to Present). No es un rol de empleo.",
        mind_ach=["Producto independiente, no un rol de empleo.", "Diseña la relación estudiante-tutor en flujos B2C y C2C."],
        cta="Caso de estudio",
    ),
    "Entwicklung einer CRM-Chat-Applikation mit integrierten KI-Chatbot-Fähigkeiten.": dict(
        role="Alleiniger Full-Stack-Entwickler",
        cat="KI-SaaS, Kundenerlebnis, Reputationsmanagement",
        d1="Eigenständige Entwicklung einer Multi-Modul-SaaS-Plattform für Feedback, Reputation, Automatisierung, Analytik und Dashboards.",
        d2="Frontend, Backend, Datenmodelle und Workflows für eine Feedback- und Reputationsplattform.",
        ach=["Alleiniger Entwickler für Frontend, Backend-Architektur und KI.", "Verbindet Feedback-Journeys mit Admin, Analytik und Automatisierung."],
        soft="Softwareprodukt",
        daily="Eigenverantwortliche Architektur, Frontend, Backend, Workflows, Tests, Deployment und Lieferung.",
        daily2="Eigenverantwortliche Architektur und Umsetzung. Fachliche Module folgen nach Verifikation.",
        daily_ach=["Alleiniger Entwickler von der Architektur bis zum Deployment.", "Verantwortet Frontend, Backend, Workflows, Tests und Lieferung."],
        art="Alleinige Entwicklung und Wartung von Nutzerfunktionen, Backend, Daten und Verbesserungen.",
        art2="Alleinige Entwicklung und Wartung. Zweck folgt nach Verifikation.",
        art_ach=["Alleiniger Entwickler der Nutzerfunktionen und des Backends.", "Verantwortet Datenhandling und Produktverbesserungen."],
        indie="Unabhängiges Solo-Projekt",
        edu="Bildungsplattform",
        mind="Unabhängige Entwicklung einer B2C- und C2C-Plattform für Studierende und Privatlehrer. Mar 2026 to Present.",
        mind2="Unabhängiges Solo-Projekt (Mar 2026 to Present). Keine Anstellung.",
        mind_ach=["Unabhängiges Produkt, keine Anstellung.", "Gestaltet die Beziehung zwischen Studierenden und Lehrkräften."],
        cta="Fallstudie",
    ),
    "CRM-чат-приложение с интегрированными возможностями искусственного интеллекта.": dict(
        role="Единственный full stack разработчик",
        cat="SaaS с ИИ, клиентский опыт, управление репутацией",
        d1="Самостоятельно разработал мультимодульную SaaS-платформу для отзывов, репутации, автоматизации, аналитики и панелей.",
        d2="Спроектировал frontend, backend, модели данных и процессы платформы обратной связи и репутации.",
        ach=["Единственный разработчик frontend, backend и ИИ.", "Связывает сценарии отзывов с админкой, аналитикой и автоматизацией."],
        soft="Программный продукт",
        daily="Самостоятельная ответственность за архитектуру, frontend, backend, процессы, тесты, деплой и поставку.",
        daily2="Самостоятельная архитектура и реализация. Предметные модули будут добавлены после проверки.",
        daily_ach=["Единственный разработчик от архитектуры до деплоя.", "Владеет frontend, backend, процессами, тестами и поставкой."],
        art="Самостоятельно разработал и поддерживал пользовательские функции, backend, данные и улучшения.",
        art2="Самостоятельная разработка и поддержка. Назначение будет добавлено после проверки.",
        art_ach=["Единственный разработчик пользовательских функций и backend.", "Владеет данными и улучшениями продукта."],
        indie="Независимый соло-проект",
        edu="Образовательная платформа",
        mind="Независимая разработка B2C и C2C платформы, соединяющей студентов с репетиторами. Mar 2026 to Present.",
        mind2="Независимый соло-проект (Mar 2026 to Present). Это не трудоустройство.",
        mind_ach=["Независимый продукт, не должность.", "Проектирует связь студента и репетитора в B2C и C2C потоках."],
        cta="Кейс",
    ),
    "Application de chat CRM intégrée à des capacités de chatbot IA.": dict(
        role="Développeur full stack unique",
        cat="SaaS IA, expérience client, gestion de réputation",
        d1="Développement indépendant d'une plateforme SaaS multimodule couvrant avis, réputation, automatisation, analytique et tableaux de bord.",
        d2="Conception du frontend, du backend, des modèles de données et des workflows pour une plateforme d'avis et d'intelligence de réputation.",
        ach=["Seul développeur du frontend, du backend et des fonctions IA.", "Relie des parcours d'avis à l'administration, l'analytique et l'automatisation."],
        soft="Produit logiciel",
        daily="Propriété indépendante de l'architecture, du frontend, du backend, des workflows, des tests, du déploiement et de la livraison.",
        daily2="Propriété indépendante de l'architecture et de l'implémentation. Les modules métier seront ajoutés une fois vérifiés.",
        daily_ach=["Seul développeur de l'architecture au déploiement.", "Possède le frontend, le backend, les workflows, les tests et la livraison."],
        art="Développement et maintenance en solo des fonctions utilisateur, du backend, des données et des améliorations.",
        art2="Développement et maintenance en solo. L'objet sera ajouté une fois vérifié.",
        art_ach=["Seul développeur des fonctions utilisateur et du backend.", "Possède les données et les améliorations produit."],
        indie="Projet indépendant en solo",
        edu="Plateforme éducative",
        mind="Développement indépendant d'une plateforme B2C et C2C reliant étudiants et tuteurs privés. Mar 2026 to Present.",
        mind2="Projet indépendant en solo (Mar 2026 to Present). Ce n'est pas un emploi.",
        mind_ach=["Produit indépendant, pas un emploi.", "Conçoit la relation étudiant-tuteur dans des flux B2C et C2C."],
        cta="Étude de cas",
    ),
}

for desc, kwargs in blocks.items():
    needle = f'description: "{desc}"'
    idx = text.find(needle)
    if idx == -1:
        raise SystemExit(f"missing description: {desc[:60]}")
    obj_start = text.rfind("{", 0, idx)
    text = text[:obj_start] + "\n" + fdg_block(**kwargs) + text[obj_start:]

# Replace experience blocks in non-English locales (those still starting with Mind Step Tutor)
exps = {
    "ar": experience_block(
        "التعليم والشهادات", "الشهادات", "الخبرة المهنية",
        ["المطور الوحيد لـ Review Revolution و Daily Authority و Art By MIO ضمن شركة مسجلة في هونغ كونغ.", "أملك هندسة التطبيق وتنفيذ الواجهة الأمامية والخلفية وتحسينات المنتج المستمرة."],
        ["بنيت وحسّنت تطبيقات ويب ودردشة مدعومة بالذكاء الاصطناعي، بما في ذلك الانتقال من React إلى Next.js.", "قدمت ميزات الواجهة الأمامية والخلفية وسير العمل التجاري والمدفوعات والنشر السحابي.", "طورت نظام دردشة ذكاء اصطناعي مع توصيات وبحث متعمق، باستجابة 1.5s باستخدام Gemini."],
        ["طورت قدرات CRM ودردشة فورية وخدمات مصغرة ووظائف دردشة بمساعدة الذكاء الاصطناعي وسير عمل البيانات ولوحات التقارير.", "عملت عبر الواجهة الأمامية والخلفية وتصميم قواعد البيانات والأتمتة والنشر الإنتاجي."],
        ["ساهمت في منصة Quickdesk CRM عبر بناء وتحسين الواجهة الأمامية بـ React.", "نفذت خدمات الخلفية وقدرات روبوت الدردشة بالذكاء الاصطناعي للتطبيق."],
        ["حدّثت واجهات الويب والجوال القديمة عبر الانتقال إلى React و React Native.", "حسّنت خلفية Laravel لزيادة قابلية الصيانة ودعم التطبيقات عبر المنصات."],
        ["دعمت ورش عمل الرؤية الحاسوبية وروبوتات الدردشة باستخدام Azure."],
    ),
    "es": experience_block(
        "Educación y certificaciones", "Certificaciones", "Experiencia laboral",
        ["Único desarrollador de Review Revolution, Daily Authority y Art By MIO en una empresa registrada en Hong Kong.", "Posee arquitectura, implementación frontend y backend, y mejoras continuas."],
        ["Construí y mejoré aplicaciones web y chat con IA, incluida una migración de React a Next.js.", "Entregué frontend, backend, flujos de negocio, pagos y despliegues en la nube.", "Desarrollé un sistema de chat IA con recomendaciones y búsqueda, respondiendo en 1.5s con Gemini."],
        ["Desarrollé CRM y chat en tiempo real, microservicios, chat con IA, flujos de datos y paneles de informes.", "Trabajé en frontend, backend, bases de datos, automatización y despliegue en producción."],
        ["Contribuí a Quickdesk CRM construyendo y mejorando su frontend en React.", "Implementé servicios backend y capacidades de chatbot de IA."],
        ["Modernicé interfaces web y móviles heredadas migrando a React y React Native.", "Mejoré el backend Laravel para mantenibilidad y soporte multiplataforma."],
        ["Apoyé talleres de visión por computador y chatbots de IA usando Azure."],
    ),
    "de": experience_block(
        "Ausbildung und Zertifikate", "Zertifikate", "Berufserfahrung",
        ["Alleiniger Entwickler von Review Revolution, Daily Authority und Art By MIO für ein in Hongkong registriertes Unternehmen.", "Verantwortet Architektur, Frontend, Backend und laufende Verbesserungen."],
        ["Webanwendungen und KI-Chat entwickelt, inklusive Migration von React zu Next.js.", "Frontend, Backend, Business-Workflows, Zahlungen und Cloud-Deployments geliefert.", "KI-Chat mit Empfehlungen und Suche, Antwortzeit 1.5s mit Gemini."],
        ["CRM und Echtzeit-Chat, Microservices, KI-Chat, Daten-Workflows und Reporting-Dashboards entwickelt.", "Arbeit über Frontend, Backend, Datenbankdesign, Automatisierung und Produktion."],
        ["Beitrag zur Quickdesk-CRM-Plattform durch Aufbau und Verbesserung des React-Frontends.", "Backend-Services und KI-Chatbot-Fähigkeiten implementiert."],
        ["Legacy-Web- und Mobile-Oberflächen durch Migration auf React und React Native modernisiert.", "Laravel-Backend für Wartbarkeit und Cross-Platform-Support verbessert."],
        ["Workshops zu Computer Vision und KI-Chatbots mit Azure unterstützt."],
    ),
    "ru": experience_block(
        "Образование и сертификаты", "Сертификаты", "Опыт работы",
        ["Единственный разработчик Review Revolution, Daily Authority и Art By MIO в компании, зарегистрированной в Гонконге.", "Владеет архитектурой, frontend, backend и улучшениями продукта."],
        ["Создавал веб-приложения и ИИ-чат, включая миграцию с React на Next.js.", "Поставлял frontend, backend, бизнес-процессы, платежи и облачные деплои.", "ИИ-чат с рекомендациями и поиском, ответ 1.5s на Gemini."],
        ["Разрабатывал CRM и чат в реальном времени, микросервисы, ИИ-чат, процессы данных и дашборды.", "Работал с frontend, backend, базами данных, автоматизацией и продакшен-деплоем."],
        ["Внёс вклад в Quickdesk CRM, развивая React-frontend.", "Реализовал backend-сервисы и возможности ИИ-чатбота."],
        ["Обновил устаревшие веб- и мобильные интерфейсы, перейдя на React и React Native.", "Улучшил Laravel-backend для сопровождаемости и кроссплатформенности."],
        ["Поддерживал воркшопы по компьютерному зрению и ИИ-чатботам на Azure."],
    ),
    "fr": experience_block(
        "Éducation et certifications", "Certifications", "Expérience professionnelle",
        ["Seul développeur de Review Revolution, Daily Authority et Art By MIO pour une société enregistrée à Hong Kong.", "Possède l'architecture, le frontend, le backend et les améliorations continues."],
        ["Applications web et chat IA, y compris une migration de React vers Next.js.", "Frontend, backend, workflows métier, paiements et déploiements cloud.", "Système de chat IA avec recommandations et recherche, réponse en 1.5s avec Gemini."],
        ["CRM et chat temps réel, microservices, chat IA, workflows de données et tableaux de reporting.", "Travail sur frontend, backend, bases de données, automatisation et déploiement en production."],
        ["Contribution à Quickdesk CRM en construisant et améliorant le frontend React.", "Services backend et capacités de chatbot IA."],
        ["Modernisation des interfaces web et mobile héritées vers React et React Native.", "Amélioration du backend Laravel pour la maintenabilité et le support multiplateforme."],
        ["Ateliers de vision par ordinateur et de chatbots IA avec Azure."],
    ),
}

# Replace remaining experience sections that still contain Mind Step Tutor as Founder
pattern = re.compile(
    r"    experience: \{\n      title: .*?\n      items: \[\n        \{\n          \"company\": \"Mind Step Tutor\",[\s\S]*?\n    \},",
    re.M,
)
matches = list(pattern.finditer(text))
if len(matches) != 5:
    raise SystemExit(f"expected 5 leftover experience blocks, got {len(matches)}")

order = ["ar", "es", "de", "ru", "fr"]
for match, lang in zip(reversed(matches), reversed(order)):
    text = text[: match.start()] + exps[lang].rstrip() + text[match.end() :]

if "Frequency Digital Group placeholder" in text:
    raise SystemExit("placeholder still present")
rr = text.count('slug: "review-revolution"')
if rr != 6:
    raise SystemExit(f"review-revolution count {rr}")

path.write_text(text)
print("locale updates applied")
