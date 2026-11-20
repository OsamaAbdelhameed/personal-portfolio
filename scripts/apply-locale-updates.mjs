import fs from "node:fs";

const file = new URL("../src/lib/translations-context.tsx", import.meta.url);
let src = fs.readFileSync(file, "utf8");

function uniqueReplace(text, needle, replacement, label) {
  const i = text.indexOf(needle);
  if (i === -1) throw new Error(`Missing: ${label}`);
  if (text.indexOf(needle, i + 1) !== -1) throw new Error(`Not unique: ${label}`);
  return text.slice(0, i) + replacement + text.slice(i + needle.length);
}

function replaceInRange(text, startMarker, endMarker, transform, label) {
  const s = text.indexOf(startMarker);
  const e = text.indexOf(endMarker);
  if (s === -1 || e === -1 || e <= s) throw new Error(`Range fail: ${label}`);
  return text.slice(0, s) + transform(text.slice(s, e)) + text.slice(e);
}

const fdg = {
  ar: `        {
          slug: "review-revolution",
          title: "Review Revolution",
          featured: true,
          organization: "Frequency Digital Group",
          role: "المطور الوحيد للمنتج الكامل",
          productCategory: "برمجيات كخدمة مدعومة بالذكاء الاصطناعي",
          description: "طورت بشكل مستقل منصة متعددة الوحدات تغطي ملاحظات العملاء وعمليات السمعة وسير عمل المحتوى الآلي والتحليلات ولوحات الإدارة.",
          longDescription: "صممت تجارب الواجهة الأمامية وخدمات الخلفية ونماذج البيانات وسير العمل التجاري لمنصة ذكاء السمعة وملاحظات العملاء. يغطي المنتج رحلات ملاحظات قابلة للتهيئة وإدارة ملفات الأعمال وسير عمل بمساعدة الذكاء الاصطناعي والنشر الآلي والتحليلات والتقارير التنفيذية.",
          achievements: ["المطور الوحيد للواجهة الأمامية وهندسة الخلفية ووظائف الذكاء الاصطناعي.", "يربط رحلات الملاحظات القابلة للتهيئة مع الإدارة والتحليلات والأتمتة في منتج واحد."],
          tech: ["Next.js", "TypeScript", "Backend APIs", "PostgreSQL", "AI workflows"],
          ctaLabel: "دراسة حالة"
        },
        {
          slug: "daily-authority",
          title: "Daily Authority",
          featured: true,
          organization: "Frequency Digital Group",
          role: "المطور الوحيد للمنتج الكامل",
          productCategory: "منتج برمجي",
          description: "ملكية مستقلة لهندسة المنتج وتنفيذ الواجهة الأمامية والخلفية وسير العمل والاختبار والنشر والتسليم المستمر.",
          longDescription: "ملكية مستقلة لهندسة المنتج وتنفيذ الواجهة الأمامية والخلفية وسير العمل والاختبار والنشر والتسليم المستمر. ستُضاف التفاصيل المتخصصة بعد التحقق.",
          achievements: ["المطور الوحيد من الهندسة حتى النشر.", "يملك الواجهة الأمامية والخلفية وسير العمل والاختبار والتسليم المستمر."],
          tech: ["Full stack", "Product architecture", "Testing", "Deployment"],
          ctaLabel: "دراسة حالة"
        },
        {
          slug: "art-by-mio",
          title: "Art By MIO",
          featured: true,
          organization: "Frequency Digital Group",
          role: "المطور الوحيد للمنتج الكامل",
          productCategory: "منتج برمجي",
          description: "طورت وصنت وحدي ميزات التطبيق المواجهة للمستخدم ووظائف الخلفية ومعالجة البيانات وتحسينات المنتج المستمرة.",
          longDescription: "طورت وصنت وحدي ميزات التطبيق المواجهة للمستخدم ووظائف الخلفية ومعالجة البيانات وتحسينات المنتج المستمرة. سيُضاف الغرض واللقطات بعد التحقق.",
          achievements: ["المطور الوحيد لميزات المستخدم ووظائف الخلفية.", "يملك معالجة البيانات وتحسينات المنتج المستمرة."],
          tech: ["Full stack", "UI", "Backend", "Data handling"],
          ctaLabel: "دراسة حالة"
        },
        {
          slug: "mind-step-tutor",
          title: "Mind Step Tutor",
          category: "independent-projects",
          organization: "Independent",
          role: "مشروع مستقل فردي",
          productCategory: "منصة تعليم",
          description: "تطوير مستقل لمنصة B2C و C2C تربط الطلاب بالمدرسين الخصوصيين. Mar 2026 to Present.",
          longDescription: "مشروع مستقل فردي (Mar 2026 to Present). منصة B2C و C2C تربط الطلاب بالمدرسين الخصوصيين. هذا ليس دوراً وظيفياً.",
          achievements: ["منتج مستقل، وليس دوراً وظيفياً.", "يصمم علاقة الطالب والمدرس عبر تدفقات B2C و C2C."],
          tech: ["Product architecture", "Full stack"],
          ctaLabel: "دراسة حالة"
        },
`,
  es: `        {
          slug: "review-revolution",
          title: "Review Revolution",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Desarrollador full stack único",
          productCategory: "SaaS con IA, experiencia del cliente, gestión de reputación",
          description: "Desarrollé de forma independiente una plataforma SaaS multimódulo de comentarios, reputación, automatización, analítica y paneles de gestión.",
          longDescription: "Diseñé frontend, backend, modelos de datos y flujos de negocio para una plataforma de comentarios e inteligencia de reputación, incluyendo recorridos configurables, perfiles, flujos con IA, publicación, analítica e informes.",
          achievements: ["Único desarrollador del frontend, la arquitectura backend y la funcionalidad de IA.", "Conecta recorridos de feedback con administración, analítica y automatización en una sola aplicación SaaS."],
          tech: ["Next.js", "TypeScript", "Backend APIs", "PostgreSQL", "AI workflows"],
          ctaLabel: "Caso de estudio"
        },
        {
          slug: "daily-authority",
          title: "Daily Authority",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Desarrollador full stack único",
          productCategory: "Producto de software",
          description: "Propiedad independiente de la arquitectura, frontend, backend, flujos, pruebas, despliegue y entrega continua.",
          longDescription: "Propiedad independiente de la arquitectura, frontend, backend, flujos, pruebas, despliegue y entrega continua. Los módulos de dominio se añadirán cuando puedan verificarse.",
          achievements: ["Único desarrollador desde la arquitectura hasta el despliegue.", "Posee frontend, backend, flujos, pruebas y entrega continua."],
          tech: ["Full stack", "Product architecture", "Testing", "Deployment"],
          ctaLabel: "Caso de estudio"
        },
        {
          slug: "art-by-mio",
          title: "Art By MIO",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Desarrollador full stack único",
          productCategory: "Producto de software",
          description: "Desarrollé y mantuve en solitario las funciones de usuario, el backend, los datos y las mejoras continuas.",
          longDescription: "Desarrollé y mantuve en solitario las funciones de usuario, el backend, los datos y las mejoras continuas. El propósito y las capturas se añadirán cuando puedan verificarse.",
          achievements: ["Único desarrollador de las funciones de usuario y del backend.", "Posee el manejo de datos y las mejoras continuas."],
          tech: ["Full stack", "UI", "Backend", "Data handling"],
          ctaLabel: "Caso de estudio"
        },
        {
          slug: "mind-step-tutor",
          title: "Mind Step Tutor",
          category: "independent-projects",
          organization: "Independent",
          role: "Proyecto independiente en solitario",
          productCategory: "Plataforma educativa",
          description: "Desarrollo independiente de una plataforma B2C y C2C que conecta estudiantes con tutores privados. Mar 2026 to Present.",
          longDescription: "Proyecto independiente en solitario (Mar 2026 to Present). No es un rol de empleo.",
          achievements: ["Producto independiente, no un rol de empleo.", "Diseña la relación estudiante-tutor en flujos B2C y C2C."],
          tech: ["Product architecture", "Full stack"],
          ctaLabel: "Caso de estudio"
        },
`,
};

fdg.de = fdg.es.replaceAll("Desarrollé de forma independiente una plataforma SaaS multimódulo de comentarios, reputación, automatización, analítica y paneles de gestión.", "Eigenständige Entwicklung einer Multi-Modul-SaaS-Plattform für Feedback, Reputation, Automatisierung, Analytik und Dashboards.")
  .replaceAll("Desarrollador full stack único", "Alleiniger Full-Stack-Entwickler")
  .replaceAll("SaaS con IA, experiencia del cliente, gestión de reputación", "KI-SaaS, Kundenerlebnis, Reputationsmanagement")
  .replaceAll("Producto de software", "Softwareprodukt")
  .replaceAll("Caso de estudio", "Fallstudie")
  .replaceAll("Proyecto independiente en solitario", "Unabhängiges Solo-Projekt")
  .replaceAll("Plataforma educativa", "Bildungsplattform")
  .replaceAll("Único desarrollador del frontend, la arquitectura backend y la funcionalidad de IA.", "Alleiniger Entwickler für Frontend, Backend-Architektur und KI-Funktionen.")
  .replaceAll("Conecta recorridos de feedback con administración, analítica y automatización en una sola aplicación SaaS.", "Verbindet konfigurierbare Feedback-Journeys mit Admin, Analytik und Automatisierung in einer SaaS-Anwendung.")
  .replaceAll("Propiedad independiente de la arquitectura, frontend, backend, flujos, pruebas, despliegue y entrega continua.", "Eigenverantwortliche Produktarchitektur, Frontend, Backend, Workflows, Tests, Deployment und laufende Lieferung.")
  .replaceAll("Los módulos de dominio se añadirán cuando puedan verificarse.", "Fachliche Module werden ergänzt, sobald sie verifiziert sind.")
  .replaceAll("Único desarrollador desde la arquitectura hasta el despliegue.", "Alleiniger Entwickler von der Architektur bis zum Deployment.")
  .replaceAll("Posee frontend, backend, flujos, pruebas y entrega continua.", "Verantwortet Frontend, Backend, Workflows, Tests und laufende Lieferung.")
  .replaceAll("Desarrollé y mantuve en solitario las funciones de usuario, el backend, los datos y las mejoras continuas.", "Alleinige Entwicklung und Wartung von Nutzerfunktionen, Backend, Datenhandling und laufenden Verbesserungen.")
  .replaceAll("El propósito y las capturas se añadirán cuando puedan verificarse.", "Zweck und Screenshots werden ergänzt, sobald sie verifiziert sind.")
  .replaceAll("Único desarrollador de las funciones de usuario y del backend.", "Alleiniger Entwickler der Nutzerfunktionen und des Backends.")
  .replaceAll("Posee el manejo de datos y las mejoras continuas.", "Verantwortet Datenhandling und laufende Produktverbesserungen.")
  .replaceAll("Desarrollo independiente de una plataforma B2C y C2C que conecta estudiantes con tutores privados. Mar 2026 to Present.", "Unabhängige Entwicklung einer B2C- und C2C-Plattform, die Studierende mit Privatlehrern verbindet. Mar 2026 to Present.")
  .replaceAll("Proyecto independiente en solitario (Mar 2026 to Present). No es un rol de empleo.", "Unabhängiges Solo-Projekt (Mar 2026 to Present). Keine Anstellung.")
  .replaceAll("Producto independiente, no un rol de empleo.", "Unabhängiges Produkt, keine Anstellung.")
  .replaceAll("Diseña la relación estudiante-tutor en flujos B2C y C2C.", "Gestaltet die Beziehung zwischen Studierenden und Lehrkräften in B2C- und C2C-Abläufen.")
  .replaceAll("Diseñé frontend, backend, modelos de datos y flujos de negocio para una plataforma de comentarios e inteligencia de reputación, incluyendo recorridos configurables, perfiles, flujos con IA, publicación, analítica e informes.", "Frontend, Backend, Datenmodelle und Geschäftsabläufe für eine Feedback- und Reputationsplattform, inklusive konfigurierbarer Journeys, Profile, KI-Workflows, Publishing, Analytik und Reporting.");

fdg.ru = fdg.es
  .replaceAll("Desarrollador full stack único", "Единственный full stack разработчик")
  .replaceAll("SaaS con IA, experiencia del cliente, gestión de reputación", "SaaS с ИИ, клиентский опыт, управление репутацией")
  .replaceAll("Producto de software", "Программный продукт")
  .replaceAll("Caso de estudio", "Кейс")
  .replaceAll("Proyecto independiente en solitario", "Независимый соло-проект")
  .replaceAll("Plataforma educativa", "Образовательная платформа")
  .replaceAll("Desarrollé de forma independiente una plataforma SaaS multimódulo de comentarios, reputación, automatización, analítica y paneles de gestión.", "Самостоятельно разработал мультимодульную SaaS-платформу для отзывов, репутации, автоматизации, аналитики и панелей управления.")
  .replaceAll("Diseñé frontend, backend, modelos de datos y flujos de negocio para una plataforma de comentarios e inteligencia de reputación, incluyendo recorridos configurables, perfiles, flujos con IA, publicación, analítica e informes.", "Спроектировал frontend, backend, модели данных и бизнес-процессы платформы обратной связи и репутации.")
  .replaceAll("Único desarrollador del frontend, la arquitectura backend y la funcionalidad de IA.", "Единственный разработчик frontend, backend-архитектуры и ИИ-функций.")
  .replaceAll("Conecta recorridos de feedback con administración, analítica y automatización в una sola aplicación SaaS.", "Связывает настраиваемые сценарии отзывов с админкой, аналитикой и автоматизацией в одном SaaS.")
  .replaceAll("Propiedad independiente de la arquitectura, frontend, backend, flujos, pruebas, despliegue y entrega continua.", "Самостоятельная ответственность за архитектуру, frontend, backend, процессы, тесты, деплой и поставку.")
  .replaceAll("Los módulos de dominio se añadirán cuando puedan verificarse.", "Предметные модули будут добавлены после проверки.")
  .replaceAll("Único desarrollador desde la arquitectura hasta el despliegue.", "Единственный разработчик от архитектуры до деплоя.")
  .replaceAll("Posee frontend, backend, flujos, pruebas y entrega continua.", "Владеет frontend, backend, процессами, тестами и поставкой.")
  .replaceAll("Desarrollé y mantuve en solitario las funciones de usuario, el backend, los datos y las mejoras continuas.", "Самостоятельно разработал и поддерживал пользовательские функции, backend, данные и улучшения продукта.")
  .replaceAll("El propósito y las capturas se añadirán cuando puedan verificarse.", "Назначение и скриншоты будут добавлены после проверки.")
  .replaceAll("Único desarrollador de las funciones de usuario y del backend.", "Единственный разработчик пользовательских функций и backend.")
  .replaceAll("Posee el manejo de datos y las mejoras continuas.", "Владеет обработкой данных и улучшениями продукта.")
  .replaceAll("Desarrollo independiente de una plataforma B2C y C2C que conecta estudiantes с tutores privados. Mar 2026 to Present.", "Независимая разработка B2C и C2C платформы, соединяющей студентов с репетиторами. Mar 2026 to Present.")
  .replaceAll("Proyecto independiente en solitario (Mar 2026 to Present). No es un rol de empleo.", "Независимый соло-проект (Mar 2026 to Present). Это не трудоустройство.")
  .replaceAll("Producto independiente, no un rol de empleo.", "Независимый продукт, не должность.")
  .replaceAll("Diseña la relación estudiante-tutor en flujos B2C y C2C.", "Проектирует связь студента и репетитора в B2C и C2C потоках.");

fdg.fr = fdg.es
  .replaceAll("Desarrollador full stack único", "Développeur full stack unique")
  .replaceAll("SaaS con IA, experiencia del cliente, gestión de reputación", "SaaS IA, expérience client, gestion de réputation")
  .replaceAll("Producto de software", "Produit logiciel")
  .replaceAll("Caso de estudio", "Étude de cas")
  .replaceAll("Proyecto independiente en solitario", "Projet indépendant en solo")
  .replaceAll("Plataforma educativa", "Plateforme éducative")
  .replaceAll("Desarrollé de forma independiente una plataforma SaaS multimódulo de comentarios, reputación, automatización, analítica y paneles de gestión.", "Développement indépendant d'une plateforme SaaS multimodule couvrant avis, réputation, automatisation, analytique et tableaux de bord.")
  .replaceAll("Diseñé frontend, backend, modelos de datos y flujos de negocio para una plataforma de comentarios e inteligencia de reputación, incluyendo recorridos configurables, perfiles, flujos con IA, publicación, analítica e informes.", "Conception du frontend, du backend, des modèles de données et des workflows pour une plateforme d'avis et d'intelligence de réputation.")
  .replaceAll("Único desarrollador del frontend, la arquitectura backend y la funcionalidad de IA.", "Seul développeur du frontend, de l'architecture backend et des fonctions IA.")
  .replaceAll("Conecta recorridos de feedback con administración, analítica y automatización en una sola aplicación SaaS.", "Relie des parcours d'avis configurables à l'administration, l'analytique et l'automatisation dans une seule application SaaS.")
  .replaceAll("Propiedad independiente de la arquitectura, frontend, backend, flujos, pruebas, despliegue y entrega continua.", "Propriété indépendante de l'architecture, du frontend, du backend, des workflows, des tests, du déploiement et de la livraison.")
  .replaceAll("Los módulos de dominio se añadirán cuando puedan verificarse.", "Les modules métier seront ajoutés une fois vérifiés.")
  .replaceAll("Único desarrollador desde la arquitectura hasta el despliegue.", "Seul développeur de l'architecture au déploiement.")
  .replaceAll("Posee frontend, backend, flujos, pruebas y entrega continua.", "Possède le frontend, le backend, les workflows, les tests et la livraison.")
  .replaceAll("Desarrollé y mantuve en solitario las funciones de usuario, el backend, los datos y las mejoras continuas.", "Développement et maintenance en solo des fonctions utilisateur, du backend, des données et des améliorations.")
  .replaceAll("El propósito y las capturas se añadirán cuando puedan verificarse.", "L'objet et les captures seront ajoutés une fois vérifiés.")
  .replaceAll("Único desarrollador de las funciones de usuario y del backend.", "Seul développeur des fonctions utilisateur et du backend.")
  .replaceAll("Posee el manejo de datos y las mejoras continuas.", "Possède le traitement des données et les améliorations produit.")
  .replaceAll("Desarrollo independiente de una plataforma B2C y C2C que conecta estudiantes con tutores privados. Mar 2026 to Present.", "Développement indépendant d'une plateforme B2C et C2C reliant étudiants et tuteurs privés. Mar 2026 to Present.")
  .replaceAll("Proyecto independiente en solitario (Mar 2026 to Present). No es un rol de empleo.", "Projet indépendant en solo (Mar 2026 to Present). Ce n'est pas un emploi.")
  .replaceAll("Producto independiente, no un rol de empleo.", "Produit indépendant, pas un emploi.")
  .replaceAll("Diseña la relación estudiante-tutor en flujos B2C y C2C.", "Conçoit la relation étudiant-tuteur dans des flux B2C et C2C.");

const sharedExperience = (highlights) => `    education: {
      title: "${highlights.eduTitle}",
      degree: "Bachelor of Computer Science (Software Engineering)",
      school: "Universiti Teknologi Malaysia",
      period: "Mar 2020 – Feb 2024",
      cgpa: "CGPA: 3.92",
      certificationsTitle: "${highlights.certTitle}",
      certifications: [
        { name: "Web Development Nanodegree", issuer: "Udacity" },
        { name: "Applied Data Science with Python", issuer: "Cognitive Class.ai" }
      ]
    },
    experience: {
      title: "${highlights.expTitle}",
      items: [
        {
          "company": "Frequency Digital Group",
          "role": "Sole AI Full Stack Developer",
          "period": "Jun 2026 – Present",
          "location": "Remote",
          "responsibilities": ${JSON.stringify(highlights.fdg, null, 10).replace(/\n/g, "\n          ")},
          "tech": ["Next.js", "TypeScript", "Backend APIs", "PostgreSQL", "AI workflows"]
        },
        {
          "company": "Salesmrkt",
          "role": "Full Stack Software Engineer",
          "period": "Sep 2025 – Mar 2026",
          "location": "Seattle, USA (Remote)",
          "responsibilities": ${JSON.stringify(highlights.sales, null, 10).replace(/\n/g, "\n          ")},
          "tech": ["Next.js", "Tailwind CSS", "Firebase", "Shopify", "Stripe", "n8n"]
        },
        {
          "company": "Engages AI",
          "role": "Full Stack Software Engineer",
          "period": "Jan 2024 – Aug 2025",
          "location": "Singapore (Remote)",
          "responsibilities": ${JSON.stringify(highlights.engages, null, 10).replace(/\n/g, "\n          ")},
          "tech": ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "LangGraph", "Rasa"]
        },
        {
          "company": "Engages AI",
          "role": "Software Engineer Intern",
          "period": "May 2023 – Dec 2023",
          "location": "Malaysia (Hybrid)",
          "responsibilities": ${JSON.stringify(highlights.intern, null, 10).replace(/\n/g, "\n          ")},
          "tech": ["React", "NestJS", "PostgreSQL", "Rasa"]
        },
        {
          "company": "Universiti Sains Islam Malaysia",
          "role": "System Analyst",
          "period": "Oct 2022 – Apr 2023",
          "location": "Malaysia (Remote)",
          "responsibilities": ${JSON.stringify(highlights.usim, null, 10).replace(/\n/g, "\n          ")},
          "tech": ["React", "React Native", "Laravel"]
        },
        {
          "company": "Google Developer Student Club, UTM",
          "role": "Technical Team Member",
          "period": "Nov 2021 – Oct 2022",
          "location": "Johor Bahru, Malaysia",
          "responsibilities": ${JSON.stringify(highlights.gdsc, null, 10).replace(/\n/g, "\n          ")},
          "tech": ["Python", "Azure", "Computer Vision"]
        }
      ]
    },`;

const locales = [
  {
    id: "ar",
    start: "  ar: {",
    end: "  es: {",
    navHeroOld: `    nav: { home: "الرئيسية", about: "من أنا", projects: "المشاريع", contact: "اتصل بي", resume: "السيرة الذاتية" },
    hero: { location: "دينباسار، بالي، إندونيسيا", title: "مهندس برمجيات و أخصائي ذكاء اصطناعي", description: "بناء حلول مدعومة بالذكاء الاصطناعي وتطبيقات ويب عالية الأداء.", cta_projects: "عرض المشاريع", cta_contact: "اتصل بي" },`,
    navHeroNew: `    nav: { home: "الرئيسية", work: "العمل", experience: "الخبرة", projects: "المشاريع", skills: "المهارات", education: "التعليم", about: "من أنا", contact: "اتصل بي", resume: "السيرة الذاتية" },
    hero: { location: "Selangor, Malaysia", title: "AI Full Stack Software Engineer", headline: "بناء منتجات SaaS معقدة من الهندسة حتى التسليم.", description: "أطور بشكل مستقل تطبيقات الواجهة الأمامية وأنظمة الخلفية وسير العمل المدعومة بالذكاء الاصطناعي. يشمل عملي الأخير ثلاثة مشاريع برمجية في Frequency Digital Group.", cta_projects: "استكشف أعمالي", cta_resume: "تحميل السيرة", cta_contact: "تواصل معي" },`,
    journeyOld: `{ country: "ماليزيا", countryCode: "MY", role: "بداية التعليم والمسار المهني" },
        { country: "إندونيسيا", countryCode: "ID", role: "القاعدة الحالية" }`,
    journeyNew: `{ country: "ماليزيا", countryCode: "MY", role: "التعليم والمسار المهني والقاعدة الحالية" }`,
    skillsOld: `languages: "اللغات", frontend: "الواجهة الأمامية", backend: "الواجهة الخلفية", ai: "الذكاء الاصطناعي", db: "قواعد البيانات", devops: "ديف أوبس", tools: "الأدوات والمنصات", core: "المفاهيم الأساسية"`,
    skillsNew: `frontend: "الواجهة الأمامية", backend: "الواجهة الخلفية", data: "البيانات والوقت الفعلي", ai: "الذكاء الاصطناعي والأتمتة", cloud: "السحابة والتسليم", observability: "المراقبة", mobile: "الجوال", commerce: "التجارة وأنظمة الأعمال", tools: "الأدوات"`,
    exp: {
      eduTitle: "التعليم والشهادات",
      certTitle: "الشهادات",
      expTitle: "الخبرة المهنية",
      fdg: ["المطور الوحيد لـ Review Revolution و Daily Authority و Art By MIO ضمن شركة مسجلة في هونغ كونغ.", "أملك هندسة التطبيق وتنفيذ الواجهة الأمامية والخلفية وتحسينات المنتج المستمرة."],
      sales: ["بنيت وحسّنت تطبيقات ويب ودردشة مدعومة بالذكاء الاصطناعي، بما في ذلك الانتقال من React إلى Next.js.", "قدمت ميزات الواجهة الأمامية والخلفية وسير العمل التجاري والمدفوعات والنشر السحابي.", "طورت نظام دردشة ذكاء اصطناعي مع توصيات وبحث متعمق، باستجابة 1.5s باستخدام Gemini."],
      engages: ["طورت قدرات CRM ودردشة فورية وخدمات مصغرة ووظائف دردشة بمساعدة الذكاء الاصطناعي وسير عمل البيانات ولوحات التقارير.", "عملت عبر الواجهة الأمامية والخلفية وتصميم قواعد البيانات والأتمتة والنشر الإنتاجي."],
      intern: ["ساهمت في منصة Quickdesk CRM عبر بناء وتحسين الواجهة الأمامية بـ React.", "نفذت خدمات الخلفية وقدرات روبوت الدردشة بالذكاء الاصطناعي للتطبيق."],
      usim: ["حدّثت واجهات الويب والجوال القديمة عبر الانتقال إلى React و React Native.", "حسّنت خلفية Laravel لزيادة قابلية الصيانة ودعم التطبيقات عبر المنصات."],
      gdsc: ["دعمت ورش عمل الرؤية الحاسوبية وروبوتات الدردشة باستخدام Azure."],
    },
  },
];

function patchSlice(slice, locale) {
  let s = slice;
  s = uniqueReplace(s, locale.navHeroOld, locale.navHeroNew, `${locale.id} nav/hero`);
  if (locale.journeyOld) s = uniqueReplace(s, locale.journeyOld, locale.journeyNew, `${locale.id} journey`);
  s = uniqueReplace(s, locale.skillsOld, locale.skillsNew, `${locale.id} skills`);

  if (!s.includes('featuredTitle:')) {
    s = s.replace(
      /projects: \{\s*title: "[^"]+",\s*moreCategories:/,
      `projects: {\n      title: "Featured Work",\n      featuredTitle: "Frequency Digital Group",\n      selectedTitle: "Selected Work",\n      independentTitle: "Independent Projects",\n      moreCategories:`
    );
    if (!s.includes("caseStudy:")) {
      s = s.replace("learnMore:", "caseStudy: \"Case Study\",\n      learnMore:");
    }
    s = s.replace(
      `"client-portfolios":`,
      `"client-portfolios": "Client Portfolios",\n        "selected-work": "Selected Work",\n        "independent-projects": "Independent Projects",\n        "client-portfolios-keep":`
    );
    // undo botched key if needed - do cleaner later
  }

  if (!s.includes('slug: "review-revolution"')) {
    const marker = s.indexOf('slug: "engages-ai"');
    if (marker === -1) throw new Error(`${locale.id} missing engages`);
    s = s.slice(0, marker) + `slug: "review-revolution-placeholder",\n` + s.slice(marker);
    s = s.replace('slug: "review-revolution-placeholder",\n', "");
    const insertAt = s.lastIndexOf("{", marker);
    // find items array start near projects
    const itemsIdx = s.indexOf("items: [");
    const brace = s.indexOf("{", itemsIdx);
    s = s.slice(0, brace) + "\n" + fdg[locale.id] + s.slice(brace);
  }

  s = s.replace('slug: "engages-ai",\n                      title: "Engages AI"', 'slug: "engages-ai",\n                      category: "selected-work",\n                      title: "Engages AI"');
  s = s.replace('slug: "salesmrkt",\n                      title: "Salesmrkt"', 'slug: "salesmrkt",\n                      category: "selected-work",\n                      title: "Salesmrkt"');
  s = s.replace('slug: "gotryone",\n                      title: "GoTryOne"', 'slug: "gotryone",\n                      category: "selected-work",\n                      title: "GoTryOne"');

  const expStart = s.indexOf("    experience: {");
  const contactStart = s.indexOf("    contact: {");
  if (expStart === -1 || contactStart === -1) throw new Error(`${locale.id} exp/contact`);
  s = s.slice(0, expStart) + sharedExperience(locale.exp) + "\n" + s.slice(contactStart);
  return s;
}

// Only run Arabic first as test via ranges
src = replaceInRange(src, "  ar: {", "  es: {", (slice) => patchSlice(slice, locales[0]), "ar");

fs.writeFileSync(file, src);
console.log("Patched ar");
