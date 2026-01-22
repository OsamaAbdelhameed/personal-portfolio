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
  };
  about: {
    title: string;
    bio_title: string;
    bio_p1: string;
    bio_p2: string;
    bio_p3: string;
    stats_cgpa: string;
    stats_exp: string;
    stats_projects: string;
    stats_tech: string;
    journey_title: string;
    languages_title: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact", resume: "Resume" },
    hero: { location: "Denpasar, Bali, Indonesia", title: "Full Stack Software Engineer & AI Specialist", description: "Crafting scalable AI-driven solutions and high-performance web applications." },
    about: {
      title: "About Me",
      bio_title: "Professional Summary",
      bio_p1: "Highly skilled Full Stack Software Engineer with hands-on experience building AI-driven CRM systems.",
      bio_p2: "Led the development of scalable microservices, real-time features, and AI chatbot integrations.",
      bio_p3: "Strong foundation in software engineering with a 3.92 CGPA from Universiti Teknologi Malaysia.",
      stats_cgpa: "3.92 CGPA",
      stats_exp: "Years Experience",
      stats_projects: "Projects Completed",
      stats_tech: "Technologies",
      journey_title: "Global Journey",
      languages_title: "Languages"
    },
    skills: { title: "Tech Arsenal", subtitle: "A comprehensive toolkit for building modern, scalable applications" },
    projects: { title: "Featured Projects" }
  },
  ar: {
    nav: { home: "الرئيسية", about: "من أنا", projects: "المشاريع", contact: "اتصل بي", resume: "السيرة الذاتية" },
    hero: { location: "دينباسار، بالي، إندونيسيا", title: "مهندس برمجيات و أخصائي ذكاء اصطناعي", description: "بناء حلول مدعومة بالذكاء الاصطناعي وتطبيقات ويب عالية الأداء." },
    about: {
      title: "عني",
      bio_title: "ملخص مهني",
      bio_p1: "مهندس برمجيات ذو مهارات عالية مع خبرة عملية في بناء أنظمة إدارة علاقات العملاء المدفوعة بالذكاء الاصطناعي.",
      bio_p2: "قدت تطوير خدمات مصغرة قابلة للتوسع، وميزات في الوقت الفعلي، وتكامل روبوتات الدردشة المدعومة بالذكاء الاصطناعي.",
      bio_p3: "أساس قوي في هندسة البرمجيات بمعدل تراكمي 3.92 من جامعة ماليزيا التكنولوجية.",
      stats_cgpa: "3.92 معدل تراكمي",
      stats_exp: "سنة خبرة",
      stats_projects: "مشروع مكتمل",
      stats_tech: "تقنيات",
      journey_title: "رحلتي العالمية",
      languages_title: "اللغات"
    },
    skills: { title: "ترسانة التقنيات", subtitle: "مجموعة أدوات شاملة لبناء تطبيقات حديثة وقابلة للتوسع" },
    projects: { title: "أبرز المشاريع" }
  },
  es: {
    nav: { home: "Inicio", about: "Sobre mí", projects: "Proyectos", contact: "Contacto", resume: "Currículum" },
    hero: { location: "Denpasar, Bali, Indonesia", title: "Ingeniero Full Stack y Especialista en IA", description: "Creando soluciones escalables impulsadas por IA y aplicaciones web de alto rendimiento." },
    about: {
      title: "Sobre Mí",
      bio_title: "Resumen Profesional",
      bio_p1: "Ingeniero de software calificado con experiencia en la creación de sistemas CRM impulsados por IA.",
      bio_p2: "Lideré el desarrollo de microservicios escalables e integraciones de chatbots de IA.",
      bio_p3: "Sólida base en ingeniería de software con un promedio de 3.92 de la Universiti Teknologi Malaysia.",
      stats_cgpa: "3.92 Promedio",
      stats_exp: "Años de Experiencia",
      stats_projects: "Proyectos Completados",
      stats_tech: "Tecnologías",
      journey_title: "Viaje Global",
      languages_title: "Idiomas"
    },
    skills: { title: "Arsenal Tecnológico", subtitle: "Un conjunto de herramientas para crear aplicaciones modernas" },
    projects: { title: "Proyectos Destacados" }
  },
  de: {
    nav: { home: "Startseite", about: "Über mich", projects: "Projekte", contact: "Kontakt", resume: "Lebenslauf" },
    hero: { location: "Denpasar, Bali, Indonesien", title: "Full-Stack-Softwareentwickler & KI-Spezialist", description: "Entwicklung skalierbarer KI-gestützter Lösungen und Webanwendungen." },
    about: {
      title: "Über Mich",
      bio_title: "Zusammenfassung",
      bio_p1: "Erfahrener Softwareentwickler mit Projekten im Bereich KI-CRM-Systeme.",
      bio_p2: "Leitung der Entwicklung skalierbarer Microservices und KI-Chatbots.",
      bio_p3: "Starkes Fundament in Softwareentwicklung mit 3.92 Notenschnitt (UTM).",
      stats_cgpa: "3.92 Schnitt",
      stats_exp: "Jahre Erfahrung",
      stats_projects: "Projekte",
      stats_tech: "Technologien",
      journey_title: "Globale Reise",
      languages_title: "Sprachen"
    },
    skills: { title: "Technologie-Arsenal", subtitle: "Umfassende Werkzeuge für moderne Anwendungen" },
    projects: { title: "Ausgewählte Projekte" }
  },
  ru: {
    nav: { home: "Главная", about: "Обо мне", projects: "Проекты", contact: "Контакты", resume: "Резюме" },
    hero: { location: "Денпасар, Бали, Индонезия", title: "Full Stack разработчик и специалист по ИИ", description: "Создание масштабируемых ИИ-решений и высокопроизводительных веб-приложений." },
    about: {
      title: "Обо мне",
      bio_title: "Профессиональное резюме",
      bio_p1: "Высококвалифицированный инженер со стажем в разработке ИИ-CRM систем.",
      bio_p2: "Руководил созданием микросервисов и интеграцией чат-ботов.",
      bio_p3: "Прочная база с отличием (3.92 CGPA) из Технологического Университета Малайзии.",
      stats_cgpa: "3.92 Балл",
      stats_exp: "Лет опыта",
      stats_projects: "Проектов",
      stats_tech: "Технологий",
      journey_title: "Путешествие",
      languages_title: "Языки"
    },
    skills: { title: "Тех-Арсенал", subtitle: "Набор инструментов для современных веб-приложений" },
    projects: { title: "Проекты" }
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", projects: "Projets", contact: "Contact", resume: "CV" },
    hero: { location: "Denpasar, Bali, Indonésie", title: "Ingénieur Full Stack & Spécialiste IA", description: "Création de solutions IA évolutives et d'applications web performantes." },
    about: {
      title: "À Propos",
      bio_title: "Résumé Professionnel",
      bio_p1: "Ingénieur logiciel hautement qualifié avec une expertise dans les systèmes CRM IA.",
      bio_p2: "Direction du développement de microservices et intégrations de chatbots IA.",
      bio_p3: "Solide base en ingénierie logicielle avec un CGPA de 3.92 de l'UTM.",
      stats_cgpa: "3.92 CGPA",
      stats_exp: "Années d'Expérience",
      stats_projects: "Projets Complétés",
      stats_tech: "Technologies",
      journey_title: "Voyage Global",
      languages_title: "Langues"
    },
    skills: { title: "Arsenal Tech", subtitle: "Outils complets pour applications modernes" },
    projects: { title: "Projets" }
  }
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
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
