"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Language = 'en' | 'ar' | 'es' | 'de' | 'ru' | 'fr';

interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    resume: string;
  };
  hero: {
    location: string;
    title: string;
    description: string;
    cta_projects: string;
    cta_contact: string;
  };
  about: {
    title: string;
    subtitle: string;
    bio_title: string;
    bio_p1: string;
    bio_p2: string;
    bio_p3: string;
    stats: {
      cgpa: string;
      exp: string;
      projects: string;
      tech: string;
    };
    journey_title: string;
    journey: Array<{
      country: string;
      countryCode: string;
      role: string;
    }>;
    languages_title: string;
    languages: Array<{
      lang: string;
      level: string;
      code: string;
    }>;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      languages: string;
      frontend: string;
      backend: string;
      ai: string;
      db: string;
      devops: string;
      tools: string;
      core: string;
    };
  };
  projects: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    title: string;
    description: string;
    name_placeholder: string;
    email_placeholder: string;
    message_placeholder: string;
    submit_button: string;
  };
  footer: {
    text: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact", resume: "Resume" },
    hero: { location: "Denpasar, Bali, Indonesia", title: "Full Stack Software Engineer & AI Specialist", description: "Crafting scalable AI-driven solutions and high-performance web applications.", cta_projects: "View Projects", cta_contact: "Contact Me" },
    about: {
      title: "About Me",
      subtitle: "Full Stack Engineer with a passion for AI and scalable systems",
      bio_title: "Professional Summary",
      bio_p1: "Highly skilled Full Stack Software Engineer with hands-on experience building AI-driven CRM systems.",
      bio_p2: "Led the development of scalable microservices, real-time features, and AI chatbot integrations.",
      bio_p3: "Strong foundation in software engineering with a 3.92 CGPA from Universiti Teknologi Malaysia.",
      stats: {
        cgpa: "3.92 CGPA",
        exp: "Years Experience",
        projects: "Projects Completed",
        tech: "Technologies"
      },
      journey_title: "Global Journey",
      journey: [
        { country: "Egypt", countryCode: "EG", role: "Origin" },
        { country: "Saudi Arabia", countryCode: "SA", role: "Early Years" },
        { country: "Malaysia", countryCode: "MY", role: "Education & Career Start" },
        { country: "Indonesia", countryCode: "ID", role: "Current Base" }
      ],
      languages_title: "Languages",
      languages: [
        { lang: "Arabic", level: "Native", code: "SA" },
        { lang: "English", level: "Professional", code: "US" },
        { lang: "Indonesian", level: "Beginner", code: "ID" }
      ]
    },
    skills: { 
      title: "Tech Arsenal", 
      subtitle: "A comprehensive toolkit for building modern, scalable applications",
      categories: {
        languages: "Languages", frontend: "Frontend", backend: "Backend", ai: "AI & ML", db: "Databases", devops: "DevOps & Cloud", tools: "Tools & Platforms", core: "Core Concepts"
      }
    },
    projects: { 
      title: "Featured Projects",
      items: [
        { title: "Engages AI", description: "Built a CRM chat application with AI chatbot capabilities, featuring real-time messaging and scalable microservices." },
        { title: "Salesbox", description: "Developed features for sales and service providers, optimizing lead management and user engagement." },
        { title: "UTMSIR", description: "AI-enhanced web solution for international student accommodation with automated room assignments." }
      ]
    },
    contact: {
      title: "Work Together",
      description: "Looking for a technical partner or engineer to bring your AI ideas to life? Let's connect.",
      name_placeholder: "Name",
      email_placeholder: "Email",
      message_placeholder: "Message",
      submit_button: "Send Message"
    },
    footer: {
      text: "Osama A. Abdelnasser. Built with Next.js & Three.js"
    }
  },
  ar: {
    nav: { home: "الرئيسية", about: "من أنا", projects: "المشاريع", contact: "اتصل بي", resume: "السيرة الذاتية" },
    hero: { location: "دينباسار، بالي، إندونيسيا", title: "مهندس برمجيات و أخصائي ذكاء اصطناعي", description: "بناء حلول مدعومة بالذكاء الاصطناعي وتطبيقات ويب عالية الأداء.", cta_projects: "عرض المشاريع", cta_contact: "اتصل بي" },
    about: {
      title: "عني",
      subtitle: "مهندس واجهات برمجية شاملة مع شغف بالذكاء الاصطناعي والأنظمة القابلة للتوسع",
      bio_title: "ملخص مهني",
      bio_p1: "مهندس برمجيات ذو مهارات عالية مع خبرة عملية في بناء أنظمة إدارة علاقات العملاء المدفوعة بالذكاء الاصطناعي.",
      bio_p2: "قدت تطوير خدمات مصغرة قابلة للتوسع، وميزات في الوقت الفعلي، وتكامل روبوتات الدردشة المدعومة بالذكاء الاصطناعي.",
      bio_p3: "أساس قوي في هندسة البرمجيات بمعدل تراكمي 3.92 من جامعة ماليزيا التكنولوجية.",
      stats: {
        cgpa: "3.92 معدل تراكمي",
        exp: "سنة خبرة",
        projects: "مشروع مكتمل",
        tech: "تقنيات"
      },
      journey_title: "رحلتي العالمية",
      journey: [
        { country: "مصر", countryCode: "EG", role: "الأصل" },
        { country: "المملكة العربية السعودية", countryCode: "SA", role: "السنوات الأولى" },
        { country: "ماليزيا", countryCode: "MY", role: "بداية التعليم والمسار المهني" },
        { country: "إندونيسيا", countryCode: "ID", role: "القاعدة الحالية" }
      ],
      languages_title: "اللغات",
      languages: [
        { lang: "العربية", level: "اللغة الأم", code: "SA" },
        { lang: "الإنجليزية", level: "احترافي", code: "US" },
        { lang: "الإندونيسية", level: "مبتدئ", code: "ID" }
      ]
    },
    skills: { 
      title: "ترسانة التقنيات", 
      subtitle: "مجموعة أدوات شاملة لبناء تطبيقات حديثة وقابلة للتوسع",
      categories: {
        languages: "اللغات", frontend: "الواجهة الأمامية", backend: "الواجهة الخلفية", ai: "الذكاء الاصطناعي", db: "قواعد البيانات", devops: "ديف أوبس", tools: "الأدوات والمنصات", core: "المفاهيم الأساسية"
      }
    },
    projects: { 
      title: "أبرز المشاريع",
      items: [
        { title: "Engages AI", description: "بناء تطبيق محادثة CRM مع قدرات روبوت الدردشة بالذكاء الاصطناعي، يتميز بالرسائل في الوقت الفعلي والخدمات المصغرة القابلة للتوسع." },
        { title: "Salesbox", description: "تطوير ميزات لمقدمي خدمات المبيعات والخدمات، وتحسين إدارة العملاء المحتملين وتفاعل المستخدمين." },
        { title: "UTMSIR", description: "حل ويب معزز بالذكاء الاصطناعي لسكن الطلاب الدوليين مع مهام غرف آلية." }
      ]
    },
    contact: {
      title: "لنعمل معاً",
      description: "هل تبحث عن شريك تقني أو مهندس لتحويل أفكار الذكاء الاصطناعي الخاصة بك إلى واقع؟ دعنا نتواصل.",
      name_placeholder: "الاسم",
      email_placeholder: "البريد الإلكتروني",
      message_placeholder: "الرسالة",
      submit_button: "إرسال الرسالة"
    },
    footer: {
      text: "أسامة أ. عبدالناصر. تم بناؤه باستخدام Next.js و Three.js"
    }
  },
  es: {
    nav: { home: "Inicio", about: "Sobre mí", projects: "Proyectos", contact: "Contacto", resume: "Currículum" },
    hero: { location: "Denpasar, Bali, Indonesia", title: "Ingeniero Full Stack y Especialista en IA", description: "Creando soluciones escalables impulsadas por IA y aplicaciones web de alto rendimiento.", cta_projects: "Ver Proyectos", cta_contact: "Contáctame" },
    about: {
      title: "Sobre Mí",
      subtitle: "Ingeniero Full Stack con pasión por la IA y los sistemas escalables",
      bio_title: "Resumen Profesional",
      bio_p1: "Ingeniero de software calificado con experiencia en la creación de sistemas CRM impulsados por IA.",
      bio_p2: "Lideré el desarrollo de microservicios escalables e integraciones de chatbots de IA.",
      bio_p3: "Sólida base en ingeniería de software con un promedio de 3.92 de la Universiti Teknologi Malaysia.",
      stats: {
        cgpa: "3.92 Promedio",
        exp: "Años de Experiencia",
        projects: "Proyectos Completados",
        tech: "Tecnologías"
      },
      journey_title: "Viaje Global",
      journey: [
        { country: "Egipto", countryCode: "EG", role: "Origen" },
        { country: "Arabia Saudita", countryCode: "SA", role: "Primeros Años" },
        { country: "Malasia", countryCode: "MY", role: "Educación e Inicio de Carrera" },
        { country: "Indonesia", countryCode: "ID", role: "Base Actual" }
      ],
      languages_title: "Idiomas",
      languages: [
        { lang: "Árabe", level: "Nativo", code: "SA" },
        { lang: "Inglés", level: "Profesional", code: "US" },
        { lang: "Indonesio", level: "Principiante", code: "ID" }
      ]
    },
    skills: { 
      title: "Arsenal Tecnológico", 
      subtitle: "Un conjunto de herramientas para crear aplicaciones modernas",
      categories: {
        languages: "Idiomas", frontend: "Frontend", backend: "Backend", ai: "IA y ML", db: "Bases de Datos", devops: "DevOps", tools: "Herramientas", core: "Conceptos Principales"
      }
    },
    projects: { 
      title: "Proyectos Destacados",
      items: [
        { title: "Engages AI", description: "Creación de una aplicación de chat CRM con capacidades de chatbot de IA, con mensajería en tiempo real y microservicios escalables." },
        { title: "Salesbox", description: "Desarrollo de funciones para proveedores de ventas y servicios, optimizando la gestión de clientes potenciales." },
        { title: "UTMSIR", description: "Solución web mejorada con IA para alojamiento de estudiantes internacionales con asignación automática de habitaciones." }
      ]
    },
    contact: {
      title: "Trabajemos Juntos",
      description: "¿Buscas un socio técnico o ingeniero para dar vida a tus ideas de IA? Conectemos.",
      name_placeholder: "Nombre",
      email_placeholder: "Correo electrónico",
      message_placeholder: "Mensaje",
      submit_button: "Enviar Mensaje"
    },
    footer: {
      text: "Osama A. Abdelnasser. Construido con Next.js y Three.js"
    }
  },
  de: {
    nav: { home: "Startseite", about: "Über mich", projects: "Projekte", contact: "Kontakt", resume: "Lebenslauf" },
    hero: { location: "Denpasar, Bali, Indien", title: "Full-Stack-Softwareentwickler & KI-Spezialist", description: "Entwicklung skalierbarer KI-gestützter Lösungen und Webanwendungen.", cta_projects: "Projekte ansehen", cta_contact: "Kontaktieren Sie mich" },
    about: {
      title: "Über Mich",
      subtitle: "Full-Stack-Engineer mit einer Leidenschaft für KI und skalierbare Systeme",
      bio_title: "Zusammenfassung",
      bio_p1: "Erfahrener Softwareentwickler mit Projekten im Bereich KI-CRM-Systeme.",
      bio_p2: "Leitung der Entwicklung skalierbarer Microservices und KI-Chatbots.",
      bio_p3: "Starkes Fundament in Softwareentwicklung mit 3.92 Notenschnitt (UTM).",
      stats: {
        cgpa: "3.92 Schnitt",
        exp: "Jahre Erfahrung",
        projects: "Projekte",
        tech: "Technologien"
      },
      journey_title: "Globale Reise",
      journey: [
        { country: "Ägypten", countryCode: "EG", role: "Ursprung" },
        { country: "Saudi-Arabien", countryCode: "SA", role: "Frühe Jahre" },
        { country: "Malaysia", countryCode: "MY", role: "Ausbildung & Karrierestart" },
        { country: "Indonesien", countryCode: "ID", role: "Aktueller Standort" }
      ],
      languages_title: "Sprachen",
      languages: [
        { lang: "Arabisch", level: "Muttersprache", code: "SA" },
        { lang: "Englisch", level: "Professionell", code: "US" },
        { lang: "Indonesisch", level: "Anfänger", code: "ID" }
      ]
    },
    skills: { 
      title: "Technologie-Arsenal", 
      subtitle: "Umfassende Werkzeuge für moderne Anwendungen",
      categories: {
        languages: "Sprachen", frontend: "Frontend", backend: "Backend", ai: "KI & ML", db: "Datenbanken", devops: "DevOps", tools: "Tools", core: "Kernkonzepte"
      }
    },
    projects: { 
      title: "Ausgewählte Projekte",
      items: [
        { title: "Engages AI", description: "Erstellung einer CRM-Chat-Anwendung mit KI-Chatbot-Funktionen, Echtzeit-Messaging und skalierbaren Microservices." },
        { title: "Salesbox", description: "Entwicklung von Funktionen für Vertriebs- und Dienstleister, Optimierung des Lead-Managements." },
        { title: "UTMSIR", description: "KI-gestützte Weblösung für internationale Studentenunterkünfte mit automatischer Zimmerzuweisung." }
      ]
    },
    contact: {
      title: "Zusammenarbeiten",
      description: "Suchen Sie einen technischen Partner oder Ingenieur, um Ihre KI-Ideen zum Leben zu erwecken? Lassen Sie uns in Kontakt treten.",
      name_placeholder: "Name",
      email_placeholder: "E-Mail",
      message_placeholder: "Nachricht",
      submit_button: "Nachricht senden"
    },
    footer: {
      text: "Osama A. Abdelnasser. Erstellt mit Next.js & Three.js"
    }
  },
  ru: {
    nav: { home: "Главная", about: "Обо мне", projects: "Проекты", contact: "Контакты", resume: "Резюме" },
    hero: { location: "Денпасар, Бали, Индонезия", title: "Full Stack разработчик и специалист по ИИ", description: "Создание масштабируемых ИИ-решений и высокопроизводительных веб-приложений.", cta_projects: "Посмотреть проекты", cta_contact: "Связаться со мной" },
    about: {
      title: "Обо мне",
      subtitle: "Full Stack инженер со страстью к ИИ и масштабируемым системам",
      bio_title: "Профессиональное резюме",
      bio_p1: "Высококвалифицированный инженер со стажем в разработке ИИ-CRM систем.",
      bio_p2: "Руководил созданием микросервисов и интеграцией чат-ботов.",
      bio_p3: "Прочная база с отличием (3.92 CGPA) из Технологического Университета Малайзии.",
      stats: {
        cgpa: "3.92 Балл",
        exp: "Лет опыта",
        projects: "Проектов",
        tech: "Технологий"
      },
      journey_title: "Путешествие",
      journey: [
        { country: "Египет", countryCode: "EG", role: "Происхождение" },
        { country: "Саудовская Аравия", countryCode: "SA", role: "Ранние годы" },
        { country: "Малайзия", countryCode: "MY", role: "Образование и старт карьеры" },
        { country: "Индонезия", countryCode: "ID", role: "Текущая база" }
      ],
      languages_title: "Языки",
      languages: [
        { lang: "Арабский", level: "Родной", code: "SA" },
        { lang: "Английский", level: "Профессиональный", code: "US" },
        { lang: "Индонезийский", level: "Начинающий", code: "ID" }
      ]
    },
    skills: { 
      title: "Тех-Арсенал", 
      subtitle: "Набор инструментов для современных веб-приложений",
      categories: {
        languages: "Языки", frontend: "Фронтенд", backend: "Бэкенд", ai: "ИИ и МО", db: "Базы данных", devops: "DevOps", tools: "Инструменты", core: "Основные концепции"
      }
    },
    projects: { 
      title: "Проекты",
      items: [
        { title: "Engages AI", description: "Создание CRM-чата с возможностями ИИ-чатбота, обменом сообщениями в реальном времени и масштабируемыми микросервисами." },
        { title: "Salesbox", description: "Разработка функций для отделов продаж и поставщиков услуг, оптимизация управления лидами." },
        { title: "UTMSIR", description: "Веб-решение на базе ИИ для размещения иностранных студентов с автоматическим распределением комнат." }
      ]
    },
    contact: {
      title: "Работать вместе",
      description: "Ищете технического партнера или инженера для воплощения ваших идей в области ИИ? Давайте свяжемся.",
      name_placeholder: "Имя",
      email_placeholder: "Электронная почта",
      message_placeholder: "Сообщение",
      submit_button: "Отправить сообщение"
    },
    footer: {
      text: "Усама А. Абдельнассер. Создано на Next.js и Three.js"
    }
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", projects: "Projets", contact: "Contact", resume: "CV" },
    hero: { location: "Denpasar, Bali, Indonésie", title: "Ingénieur Full Stack & Spécialiste IA", description: "Création de solutions IA évolutives et d'applications web performantes.", cta_projects: "Voir les Projets", cta_contact: "Contactez-moi" },
    about: {
      title: "À Propos",
      subtitle: "Ingénieur Full Stack passionné par l'IA et les systèmes évolutifs",
      bio_title: "Résumé Professionnel",
      bio_p1: "Ingénieur logiciel hautement qualifié avec une expertise dans les systèmes CRM IA.",
      bio_p2: "Direction du développement de microservices et intégrations de chatbots IA.",
      bio_p3: "Solide base en ingénierie logicielle avec un CGPA de 3.92 de l'UTM.",
      stats: {
        cgpa: "3.92 CGPA",
        exp: "Années d'Expérience",
        projects: "Projets Complétés",
        tech: "Technologies"
      },
      journey_title: "Voyage Global",
      journey: [
        { country: "Égypte", countryCode: "EG", role: "Origine" },
        { country: "Arabie Saoudite", countryCode: "SA", role: "Premières Années" },
        { country: "Malaisie", countryCode: "MY", role: "Études et Début de Carrière" },
        { country: "Indonésie", countryCode: "ID", role: "Base Actuelle" }
      ],
      languages_title: "Langues",
      languages: [
        { lang: "Arabe", level: "Natal", code: "SA" },
        { lang: "Anglais", level: "Professionnel", code: "US" },
        { lang: "Indonésien", level: "Débutant", code: "ID" }
      ]
    },
    skills: { 
      title: "Arsenal Tech", 
      subtitle: "Outils complets pour applications modernes",
      categories: {
        languages: "Langages", frontend: "Frontend", backend: "Backend", ai: "IA & ML", db: "Bases de données", devops: "DevOps", tools: "Outils", core: "Concepts Clés"
      }
    },
    projects: { 
      title: "Projets",
      items: [
        { title: "Engages AI", description: "Création d'une application de chat CRM avec des capacités de chatbot IA, messagerie en tempo réel et microservices évolutifs." },
        { title: "Salesbox", description: "Développement de fonctionnalités pour les prestataires de services et de ventes, optimisant la gestion des leads." },
        { title: "UTMSIR", description: "Solution web améliorée par l'IA pour l'hébergement d'étudiants internationaux avec attribution automatique des chambres." }
      ]
    },
    contact: {
      title: "Travaillons Ensemble",
      description: "Vous cherchez un partenaire technique ou un ingénieur pour donner vie à vos idées d'IA ? Connectons-nous.",
      name_placeholder: "Nom",
      email_placeholder: "E-mail",
      message_placeholder: "Message",
      submit_button: "Envoyer le Message"
    },
    footer: {
      text: "Osama A. Abdelnasser. Construit avec Next.js & Three.js"
    }
  }
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }): JSX.Element {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && translations[saved]) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations[language], isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useI18n must be used within LanguageProvider");
  return context;
}
