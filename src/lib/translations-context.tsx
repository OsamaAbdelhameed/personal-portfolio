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
      slug: string;
      title: string;
      description: string;
      longDescription: string;
      tech: string[];
      liveUrl?: string;
        videoUrl?: string; // YouTube ID
      images?: Array<{
        src: string;
        desc: string;
      }>;
    }>;
  };
  experience: {
    title: string;
    items: Array<{
      company: string;
      role: string;
      period: string;
      location: string;
      responsibilities: string[];
      tech: string[];
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
        { 
          slug: "engages-ai",
          title: "Engages AI", 
          description: "Built a CRM chat application with AI chatbot capabilities, featuring real-time messaging and scalable microservices.",
          longDescription: "Led the development of a comprehensive CRM and AI-powered chatbot platform. Implemented real-time communication features, automated contact grouping for broadcasts, and complex lead management workflows. Migrated frontend to Vite for 50% faster builds and built out reporting dashboards for data-driven insights.",
          tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "GPT-4", "socket.io"],
          liveUrl: "https://chat.engages.ai",
          videoUrl: "/engages-ai.mp4",
          images: [{src: "/engages-ai/chat.engages.ai_.png", desc: "Dashboard page for Engages AI staff"}, {src: "/engages-ai/chat.engages.ai_ (1).png", desc: "Dashboard page for Engages AI client"}, {src: "/engages-ai/chat.engages.ai_ (2).png", desc: "Contact / Leads page for Engages AI client"}, {src: "/engages-ai/chat.engages.ai_ (3).png", desc: "Broadcast Campaigns page for Engages AI client"}, {src: "/engages-ai/chat.engages.ai_ (4).png", desc: "Flow-based Rasa chatbot page for Engages AI client"}, {src: "/engages-ai/chat.engages.ai_ (5).png", desc: "Gen AI GPT chatbot page for Engages AI client for automated self-updated chatbots"}, {src: "/engages-ai/chat.engages.ai_ (6).png", desc: "Subscription page for Engages AI client for automated self-updated chatbots"}, {src: "/engages-ai/chat.engages.ai_ (7).png", desc: "Channels page for Engages AI client"}, {src: "/engages-ai/chat.engages.ai_ (8).png", desc: "Teams page for Engages AI client"}, {src: "/engages-ai/chat.engages.ai_ (9).png", desc: "Automation Workflow page - Builder component for Engages AI client"}, {src: "/engages-ai/chat.engages.ai_ (10).png", desc: "Automation Workflow page - Triggers component for Engages AI client"}, {src: "/engages-ai/chat.engages.ai_ (11).png", desc: "Automation Workflow page - Actions component for Engages AI client"}, {src: "/engages-ai/chat.engages.ai_ (12).png", desc: "Automation Workflow page - Webhook Action component for Engages AI client"},]
        },
        { 
          slug: "salesmrkt",
          title: "Salesmrkt", 
          description: "Developed a frontend UI components for sales and service providers, optimizing SEO and user experience.",
          longDescription: "Core developer for the Salesmrkt ecosystem, focusing on automating the sales funnel for service providers. Developed centralized lead management tools and client engagement features that streamlined operations for hundreds of users.",
          tech: ["React", "Shopify", "N8N", "Calendly"],
          liveUrl: "https://salesmrkt.com",
          images: [{src: "/salesmrkt/salesmrkt.com_.png", desc: "The main landing page for Salesmrkt"}, {src: "/salesmrkt/salesmrkt.com_campaigns-on-demand.png", desc: "The campaigns on demand page for Salesmrkt"}, {src: "/salesmrkt/salesmrkt.com_schedule-growth-session.png", desc: "The sales, marketing and video production growth sessions on demand page for Salesmrkt"}, {src: "/salesmrkt/salesmrkt.com_thank-you-ads.png", desc: "The thank you page that shows up when user books a session through N8N automation for Salesmrkt"}]
        },
        { 
          slug: "gotryone",
          title: "GoTryOne", 
          description: "A specialized platform for service providers to manage bookings and trials efficiently.",
          longDescription: "Built a specialized booking and trial management platform within the Salesbox ecosystem. Integrated with QuickBooks and Stripe for seamless financial operations and used Algolia for high-performance search capabilities.",
          tech: ["NextJS", "Firebase", "Algolia", "Zustand", "Stripe", "QuickBooks"],
          liveUrl: "https://gotryone.com",
          images: [{src: "/gotryone/gotryone.com_.png", desc: "The main landing page for GoTryOne"}, {src: "/gotryone/gotryone.com_build.png", desc: "The inital page for AI Conversation chatbot in GoTryOne"}, {src: "/gotryone/gotryone.com_build (1).png", desc: "The AI Conversation chatbot in GoTryOne when user clicks on one of the options on the right"}, {src: "/gotryone/gotryone.com_build (2).png", desc: "The AI Conversation chatbot in GoTryOne when user clicks on one on the service name in the message then on see more button"}, {src: "/gotryone/gotryone.com_build (3).png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions using suggested answers"}, {src: "/gotryone/gotryone.com_build (3).png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions and gets a more details analysis to his business"}, {src: "/gotryone/gotryone.com_build_conversation_UlWX8rZYYAGENieuWiu9.png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions and gets a bundle service discount to his business"}, {src: "/gotryone/gotryone.com_build_conversation_UlWX8rZYYAGENieuWiu9.png", desc: "The AI Conversation chatbot in GoTryOne when user gets a deep research insights about his business"}, {src: "/gotryone/gotryone.com_profile.png", desc: "The profile page for GoTryOne"}]
        },
        { 
          slug: "utmsir",
          title: "UTMSIR", 
          description: "AI-enhanced web solution for international student accommodation with automated room assignments.",
          longDescription: "Final Year Project at UTM. Developed a web-based residence management system for international students. Features include an AI-driven recommendation engine for roommate matching and automated room assignments based on student preferences.",
          tech: ["MongoDB", "Express", "React", "Node.js", "Python", "AI Recommendation"],
        }
      ]
    },
    experience: {
      title: "Work Experience",
      items: [
        {
          company: "Salesmrkt",
          role: "Full Stack Vibe Coder",
          period: "Sept 2025 – Present",
          location: "Remote, Seattle, USA",
          responsibilities: [
            "Converted a React project to NextJS for enhanced security and flexibility.",
            "Developed an AI chatting system with recommendations and in-depth search, responding in 1.5s using Gemini.",
            "Engaged directly with clients for update requests and technical support.",
            "Updated Shopify store with new template UI and configurations.",
            "Managed and developed features for service providers: Salesbox, Salesmrkt, and GoTryOne using NextJS, Tailwind, Firebase, Algolia, and Zustand.",
            "Utilized QuickBooks and Stripe to handle complex payments and invoicing.",
            "Used N8N to handle complex process automation outside the main system."
          ],
          tech: ["NextJS", "Tailwind", "Firebase", "Algolia", "Zustand", "QuickBooks", "Stripe", "N8N"]
        },
        {
          company: "Engages AI",
          role: "Full Stack Software Engineer",
          period: "March 2024 – Aug 2025",
          location: "Remote, Singapore",
          responsibilities: [
            "Developed a full-featured CRM chat application with integrated AI chatbot capabilities.",
            "Enhanced Frontend features using MUI, React, Redux, socket.io, RabbitMQ, and custom web widgets.",
            "Replaced Webpack with Vite in the Frontend, achieving 50% faster build times.",
            "Built scalable backend microservices with NestJS, leveraging PostgreSQL, Redis, and RabbitMQ.",
            "Integrated advanced AI components: Python, RASA models, GPT-4, GPT assistants, and LangGraph.",
            "Managed cloud deployment on Alibaba Ubuntu instances and serverless AWS Lambda functions.",
            "Developed comprehensive reporting dashboards and automation workflows for lead management.",
            "Implemented contact grouping and broadcast messaging systems.",
            "Optimized backend performance by migrating logic to database functions and materialized views.",
            "Used PeerDB (CDC) for real-time synchronization between multiple data sources.",
            "Developed a serverless crawler function to automatically update the GPT assistant vector store.",
            "Ensured code quality and reliability through unit testing with Jest."
          ],
          tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "GPT-4", "LangGraph", "PeerDB", "socket.io"]
        },
        {
          company: "Universiti Sains Islam Malaysia",
          role: "System Analyst Intern",
          period: "Feb 2023 – April 2023",
          location: "Remote, Malaysia",
          responsibilities: [
            "Modernized legacy university systems by migrating from PHP and Kotlin to React and React Native.",
            "Significantly improved system performance, maintainability, and user experience.",
            "Developed and supported cross-platform mobile applications for student management."
          ],
          tech: ["React", "React Native", "PHP", "Kotlin"]
        }
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
      text: "Osama Abdelnasser. Built with Next.js & Three.js"
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
        { 
          slug: "engages-ai",
          title: "Engages AI", 
          description: "بناء تطبيق محادثة CRM مع قدرات روبوت الدردشة بالذكاء الاصطناعي، يتميز بالرسائل في الوقت الفعلي والخدمات المصغرة القابلة للتوسع.",
          longDescription: "قدت تطوير منصة CRM وروبوت دردشة مدعوم بالذكاء الاصطناعي. تنفيذ ميزات التواصل في الوقت الفعلي، وتجميع جهات الاتصال الآلي للبث، وسير عمل معقد لإدارة العملاء المحتملين.",
          tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "GPT-4", "socket.io"],
          liveUrl: "https://chat.engages.ai"
        },
        { 
          slug: "salesmrkt",
          title: "Salesmrkt", 
          description: "تطوير ميزات لمقدمي خدمات المبيعات والخدمات، وتحسين إدارة العملاء المحتملين وتفاعل المستخدمين.",
          longDescription: "مطور أساسي للنظام البيئي لـ Salesmrkt، مع التركيز على أتمتة مسار المبيعات لمقدمي الخدمات. تطوير أدوات مركزية لإدارة العملاء المحتملين.",
          tech: ["NextJS", "Firebase", "Algolia", "Stripe", "N8N", "TailwindCSS"],
          liveUrl: "https://salesmrkt.com"
        },
        { 
          slug: "gotryone",
          title: "GoTryOne", 
          description: "منصة متخصصة لمقدمي الخدمات لإدارة الحجوزات والتجارب بكفاءة.",
          longDescription: "بناء منصة متخصصة لإدارة الحجوزات والتجارب ضمن نظام Salesbox. التكامل مع QuickBooks و Stripe للعمليات المالية السلسة.",
          tech: ["NextJS", "Firebase", "Algolia", "Zustand", "Stripe", "QuickBooks"],
          liveUrl: "https://gotryone.com"
        },
        { 
          slug: "utmsir",
          title: "UTMSIR", 
          description: "حل ويب معزز بالذكاء الاصطناعي لسكن الطلاب الدوليين مع مهام غرف آلية.",
          longDescription: "مشروع السنة النهائية في جامعة UTM. تطوير نظام إدارة سكن يعتمد على الويب للطلاب الدوليين. يتضمن محرك توصية يعتمد على الذكاء الاصطناعي لتنسيق الغرف.",
          tech: ["MongoDB", "Express", "React", "Node.js", "Python", "AI Recommendation"],
        }
      ]
    },
    experience: {
      title: "الخبرة المهنية",
      items: [
        {
          company: "Salesmrkt",
          role: "Full Stack Vibe Coder",
          period: "سبتمبر 2025 – الحاضر",
          location: "عن بعد، سياتل، الولايات المتحدة",
          responsibilities: [
            "تحويل مشروع React إلى NextJS لتعزيز الأمان والمرونة.",
            "تطوير نظام دردشة ذكاء اصطناعي بقدرة على تقديم توصيات وبحث متعمق، مع استجابة في 1.5 ثانية باستخدام Gemini.",
            "التواصل المباشر مع العملاء لتنفيذ طلبات التحديث والدعم الفني.",
            "تحديث متجر Shopify بقالب واجهة مستخدم وتكوينات جديدة.",
            "إدارة وتطوير الميزات لمزودي الخدمات: Salesbox و Salesmrkt و GoTryOne باستخدام NextJS و Tailwind و Firebase و Algolia و Zustand.",
            "استخدام QuickBooks و Stripe لمعالجة المدفوعات والفواتير المعقدة.",
            "استخدام N8N لمعالجة أتمتة العمليات المعقدة خارج النظام الأساسي."
          ],
          tech: ["NextJS", "Tailwind", "Firebase", "Algolia", "Zustand", "QuickBooks", "Stripe", "N8N"]
        },
        {
          company: "Engages AI",
          role: "Full Stack Software Engineer",
          period: "مارس 2024 – أغسطس 2025",
          location: "عن بعد، سنغافورة",
          responsibilities: [
            "تطوير تطبيق محادثة CRM كامل الميزات مع قدرات روبوت دردشة متكاملة بالذكاء الاصطناعي.",
            "تحسين ميزات الواجهة الأمامية باستخدام MUI و React و Redux و socket.io و RabbitMQ وودجات الويب.",
            "استبدال Webpack بـ Vite في الواجهة الأمامية، مما حقق سرعة بناء أفضل بنسبة 50%.",
            "بناء خدمات مصغرة قابلة للتوسع باستخدام NestJS، مع الاعتماد على PostgreSQL و Redis و RabbitMQ.",
            "دمج مكونات ذكاء اصطناعي متقدمة: Python و RASA و GPT-4 و GPT Assistants و LangGraph.",
            "إدارة النشر السحابي على مثيلات Alibaba Ubuntu ووظائف AWS Lambda السحابية.",
            "تطوير لوحات معلومات شاملة وسير عمل أتمتة لإدارة العملاء المحتملين.",
            "تنفيذ أنظمة تجميع جهات الاتصال ورسائل البث الجماعية.",
            "تحسين أداء الواجهة الخلفية بنقل المنطق إلى وظائف قاعدة البيانات واللقطات المحدثة (Materialized Views).",
            "استخدام PeerDB (CDC) للمزامنة في الوقت الفعلي بين مصادر بيانات متعددة.",
            "تطوير وظيفة زاحف (Crawler) سحابية لتحديث مخزن المتجهات الخاص بـ GPT Assistant تلقائيًا.",
            "ضمان جودة البرمجيات وموثوقيتها من خلال اختبارات الوحدة باستخدام Jest."
          ],
          tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "GPT-4", "LangGraph", "PeerDB", "socket.io"]
        },
        {
          company: "Universiti Sains Islam Malaysia",
          role: "متدرب محلل أنظمة",
          period: "فبراير 2023 – أبريل 2023",
          location: "عن بعد، ماليزيا",
          responsibilities: [
            "تحديث أنظمة الجامعة القديمة من خلال الانتقال من PHP و Kotlin إلى React و React Native.",
            "تحسين أداء النظام وقابلية صيانته وتجربة المستخدم بشكل كبير.",
            "تطوير ودعم تطبيقات الهاتف المحمول عبر المنصات لإدارة الطلاب."
          ],
          tech: ["React", "React Native", "PHP", "Kotlin"]
        }
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
      text: "أسامة عبدالناصر. تم بناؤه باستخدام Next.js و Three.js"
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
        { 
          slug: "engages-ai",
          title: "Engages AI", 
          description: "Desarrollo de una aplicación de chat CRM con capacidades de chatbot de IA, mensajería en tiempo real y microservicios escalables.",
          longDescription: "Lideré el desarrollo de una plataforma completa de CRM y chatbot impulsada por IA. Implementé funciones de comunicación en tiempo real, agrupación automática de contactos para difusiones y flujos de trabajo complejos de gestión de leads.",
          tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "GPT-4", "socket.io"],
          liveUrl: "https://chat.engages.ai"
        },
        { 
          slug: "salesmrkt",
          title: "Salesmrkt", 
          description: "Desarrollo de funciones para proveedores de ventas y servicios, optimizando la gestión de leads y el compromiso del usuario.",
          longDescription: "Desarrollador principal del ecosistema Salesmrkt, centrado en la automatización del embudo de ventas para proveedores de servicios. Desarrollé herramientas centralizadas de gestión de leads.",
          tech: ["NextJS", "Firebase", "Algolia", "Stripe", "N8N", "TailwindCSS"],
          liveUrl: "https://salesmrkt.com"
        },
        { 
          slug: "gotryone",
          title: "GoTryOne", 
          description: "Una plataforma especializada para que los proveedores de servicios gestionen reservas y pruebas de manera eficiente.",
          longDescription: "Construí una plataforma especializada de gestión de reservas y pruebas dentro del ecosistema Salesbox. Integración con QuickBooks y Stripe para operaciones financieras fluidas.",
          tech: ["NextJS", "Firebase", "Algolia", "Zustand", "Stripe", "QuickBooks"],
          liveUrl: "https://gotryone.com"
        },
        { 
          slug: "utmsir",
          title: "UTMSIR", 
          description: "Solución web mejorada con IA para alojamiento de estudiantes internacionales con asignación automática de habitaciones.",
          longDescription: "Proyecto de fin de carrera en UTM. Desarrollo de un sistema de gestión de residencias basado en la web para estudiantes internacionales. Incluye un motor de recomendación impulsado por IA.",
          tech: ["MongoDB", "Express", "React", "Node.js", "Python", "IA Recomendación"],
        }
      ]
    },
    experience: {
      title: "Experiencia Laboral",
      items: [
        {
          company: "Salesmrkt",
          role: "Full Stack Vibe Coder",
          period: "Sept 2025 – Presente",
          location: "Remoto, Seattle, EE. UU.",
          responsibilities: [
            "Convirtió un proyecto React a NextJS para mayor seguridad y flexibilidad.",
            "Desarrolló un sistema de chat con IA con recomendaciones y búsqueda profunda, respondiendo en 1.5s usando Gemini.",
            "Se relacionó directamente con clientes para solicitudes de actualización y soporte técnico.",
            "Actualizó la tienda Shopify con una nueva interfaz de usuario y configuraciones.",
            "Gestionó y desarrolló funciones para proveedores de servicios: Salesbox, Salesmrkt y GoTryOne usando NextJS, Tailwind, Firebase, Algolia y Zustand.",
            "Utilizó QuickBooks y Stripe para gestionar pagos y facturación complejos.",
            "Usó N8N para manejar la automatización de procesos complejos fuera del sistema principal."
          ],
          tech: ["NextJS", "Tailwind", "Firebase", "Algolia", "Zustand", "QuickBooks", "Stripe", "N8N"]
        },
        {
          company: "Engages AI",
          role: "Ingeniero de Software Full Stack",
          period: "Marzo 2024 – Agosto 2025",
          location: "Remoto, Singapur",
          responsibilities: [
            "Desarrolló una aplicación de chat CRM completa con capacidades integradas de chatbot de IA.",
            "Mejoró las funciones del frontend utilizando MUI, React, Redux, socket.io, RabbitMQ y widgets web personalizados.",
            "Reemplazó Webpack con Vite en el frontend, logrando tiempos de compilación un 50% más rápidos.",
            "Construyó microservicios backend escalables con NestJS, aprovechando PostgreSQL, Redis y RabbitMQ.",
            "Integró componentes de IA avanzados: Python, modelos RASA, GPT-4, asistentes GPT y LangGraph.",
            "Gestionó el despliegue en la nube en instancias de Alibaba Ubuntu y funciones AWS Lambda sin servidor.",
            "Desarrolló cuadros de mando de informes completos y flujos de trabajo de automatización para la gestión de leads.",
            "Implementó sistemas de agrupación de contactos y mensajería de difusión.",
            "Optimizó el rendimiento del backend migrando la lógica a funciones de base de datos y vistas materializadas.",
            "Usó PeerDB (CDC) para la sincronización en tiempo real entre múltiples fuentes de datos.",
            "Desarrolló una función de rastreador sin servidor para actualizar automáticamente el almacén de vectores del asistente GPT.",
            "Garantizó la calidad y fiabilidad del código mediante pruebas unitarias con Jest."
          ],
          tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "GPT-4", "LangGraph", "PeerDB", "socket.io"]
        },
        {
          company: "Universiti Sains Islam Malaysia",
          role: "Pasante de Analista de Sistemas",
          period: "Feb 2023 – Abril 2023",
          location: "Remoto, Malasia",
          responsibilities: [
            "Modernizó los sistemas universitarios heredados migrando de PHP y Kotlin a React y React Native.",
            "Mejoró significativamente el rendimiento del sistema, la mantenibilidad y la experiencia del usuario.",
            "Desarrolló y apoyó aplicaciones móviles multiplataforma para la gestión de estudiantes."
          ],
          tech: ["React", "React Native", "PHP", "Kotlin"]
        }
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
      title: "Vorgestellte Projekte",
      items: [
        { 
          slug: "engages-ai",
          title: "Engages AI", 
          description: "Erstellung einer CRM-Chat-Anwendung mit KI-Chatbot-Funktionen, Echtzeit-Messaging und skalierbaren Mikroservices.",
          longDescription: "Leitete die Entwicklung einer umfassenden CRM- und KI-gestützten Chatbot-Plattform. Implementierte Echtzeit-Kommunikationsfunktionen, automatisierte Kontaktgruppierung für Broadcasts und komplexe Lead-Management-Workflows.",
          tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "GPT-4", "socket.io"],
          liveUrl: "https://chat.engages.ai"
        },
        { 
          slug: "salesmrkt",
          title: "Salesmrkt", 
          description: "Entwicklung von Funktionen für Vertriebs- und Dienstleister, Optimierung des Lead-Managements und der Nutzerbindung.",
          longDescription: "Kernentwickler für das Salesmrkt-Ökosystem, Schwerpunkt auf der Automatisierung des Verkaufstrichters für Dienstleister.",
          tech: ["NextJS", "Firebase", "Algolia", "Stripe", "N8N", "TailwindCSS"],
          liveUrl: "https://salesmrkt.com"
        },
        { 
          slug: "gotryone",
          title: "GoTryOne", 
          description: "Eine spezialisierte Plattform für Dienstleister zur effizienten Verwaltung von Buchungen und Testberichten.",
          longDescription: "Aufbau einer spezialisierten Buchungs- und Testmanagement-Plattform innerhalb des Salesbox-Ökosystems.",
          tech: ["NextJS", "Firebase", "Algolia", "Zustand", "Stripe", "QuickBooks"],
          liveUrl: "https://gotryone.com"
        },
        { 
          slug: "utmsir",
          title: "UTMSIR", 
          description: "KI-gestützte Web-Lösung für die Unterbringung internationaler Studenten mit automatischer Zimmerzuweisung.",
          longDescription: "Abschlussprojekt an der UTM. Entwicklung eines webbasierten Wohnheim-Managementsystems für internationale Studenten.",
          tech: ["MongoDB", "Express", "React", "Node.js", "Python", "KI-Empfehlung"],
        }
      ]
    },
    experience: {
      title: "Berufserfahrung",
      items: [
        {
          company: "Salesmrkt",
          role: "Full Stack Vibe Coder",
          period: "Sept 2025 – Heute",
          location: "Remote, Seattle, USA",
          responsibilities: [
            "Konvertierte ein React-Projekt zu NextJS für verbesserte Sicherheit und Flexibilität.",
            "Entwickelte ein KI-Chat-System mit Empfehlungen und Tiefensuche, das mit Gemini in 1,5s antwortet.",
            "Direkte Zusammenarbeit mit Kunden für Update-Anfragen und technischen Support.",
            "Aktualisierte den Shopify-Store mit neuem Template-UI und Konfigurationen.",
            "Verwaltete und entwickelte Funktionen für Dienstanbieter: Salesbox, Salesmrkt und GoTryOne mit NextJS, Tailwind, Firebase, Algolia und Zustand.",
            "Nutzte QuickBooks und Stripe für komplexe Zahlungen und Rechnungsstellung.",
            "Verwendete N8N für komplexe Prozessautomatisierung außerhalb des Hauptsystems."
          ],
          tech: ["NextJS", "Tailwind", "Firebase", "Algolia", "Zustand", "QuickBooks", "Stripe", "N8N"]
        },
        {
          company: "Engages AI",
          role: "Full Stack Softwareentwickler",
          period: "März 2024 – Aug 2025",
          location: "Remote, Singapur",
          responsibilities: [
            "Entwickelte eine voll funktionsfähige CRM-Chat-Anwendung mit integrierten KI-Chatbot-Funktionen.",
            "Verbesserte Frontend-Funktionen mit MUI, React, Redux, socket.io, RabbitMQ und benutzerdefinierten Web-Widgets.",
            "Ersetzte Webpack durch Vite im Frontend und erreichte 50% schnellere Build-Zeiten.",
            "Baute skalierbare Backend-Microservices mit NestJS unter Nutzung von PostgreSQL, Redis und RabbitMQ.",
            "Integrierte fortschrittliche KI-Komponenten: Python, RASA-Modelle, GPT-4, GPT-Assistenten und LangGraph.",
            "Verwaltete Cloud-Deployment auf Alibaba Ubuntu-Instanzen und serverlosen AWS Lambda-Funktionen.",
            "Entwickelte umfassende Reporting-Dashboards und Automatisierungs-Workflows für das Lead-Management.",
            "Implementierte Kontaktgruppierungs- und Broadcast-Messaging-Systeme.",
            "Optimierte die Backend-Performance durch Migration der Logik in Datenbankfunktionen und Materialized Views.",
            "Nutzte PeerDB (CDC) für die Echtzeitsynchronisation zwischen mehreren Datenquellen.",
            "Entwickelte eine serverlose Crawler-Funktion zur automatischen Aktualisierung des Vektorspeichers des GPT-Assistenten.",
            "Sicherte die Codequalität und Zuverlässigkeit durch Unit-Tests mit Jest."
          ],
          tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "GPT-4", "LangGraph", "PeerDB", "socket.io"]
        },
        {
          company: "Universiti Sains Islam Malaysia",
          role: "Systemanalytiker Praktikant",
          period: "Feb 2023 – April 2023",
          location: "Remote, Malaysia",
          responsibilities: [
            "Modernisierte veraltete Universitätssysteme durch Migration von PHP und Kotlin zu React und React Native.",
            "Verbesserte die Systemleistung, Wartbarkeit und Benutzererfahrung erheblich.",
            "Entwickelte und unterstützte plattformübergreifende mobile Anwendungen für das Studentenmanagement."
          ],
          tech: ["React", "React Native", "PHP", "Kotlin"]
        }
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
        { 
          slug: "engages-ai",
          title: "Engages AI", 
          description: "Создание CRM-чата с возможностями ИИ-чатбота, обменом сообщениями в реальном времени и масштабируемыми микросервисами.",
          longDescription: "Руководил разработкой комплексной платформы CRM и чат-бота на базе ИИ. Внедрил функции связи в реальном времени, автоматическую группировку контактов и сложные рабочие процессы управления лидами.",
          tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "GPT-4", "socket.io"],
          liveUrl: "https://chat.engages.ai"
        },
        { 
          slug: "salesmrkt",
          title: "Salesmrkt", 
          description: "Разработка функций для отделов продаж и поставщиков услуг, оптимизация управления лидами.",
          longDescription: "Ведущий разработчик экосистемы Salesmrkt, специализирующийся на автоматизации воронки продаж для поставщиков услуг.",
          tech: ["NextJS", "Firebase", "Algolia", "Stripe", "N8N", "TailwindCSS"],
          liveUrl: "https://salesmrkt.com"
        },
        { 
          slug: "gotryone",
          title: "GoTryOne", 
          description: "Специализированная платформа для поставщиков услуг для эффективного управления бронированиями и испытаниями.",
          longDescription: "Построил специализированную платформу управления бронированием и испытаниями в экосистеме Salesbox.",
          tech: ["NextJS", "Firebase", "Algolia", "Zustand", "Stripe", "QuickBooks"],
          liveUrl: "https://gotryone.com"
        },
        { 
          slug: "utmsir",
          title: "UTMSIR", 
          description: "Веб-решение на базе ИИ для размещения иностранных студентов с автоматическим распределением комнат.",
          longDescription: "Дипломный проект в UTM. Разработал систему управления проживанием для иностранных студентов на базе веб-технологий.",
          tech: ["MongoDB", "Express", "React", "Node.js", "Python", "ИИ-рекомендации"],
        }
      ]
    },
    experience: {
      title: "Опыт работы",
      items: [
        {
          company: "Salesmrkt",
          role: "Full Stack Vibe Coder",
          period: "Сент 2025 – Настоящее время",
          location: "Удаленно, Сиэтл, США",
          responsibilities: [
            "Перевел проект с React на NextJS для повышения безопасности и гибкости.",
            "Разработал систему чата с ИИ с рекомендациями и глубоким поиском, отвечающую за 1,5 сек с использованием Gemini.",
            "Напрямую взаимодействовал с клиентами по вопросам обновления и технической поддержки.",
            "Обновил магазин Shopify с новым пользовательским интерфейсом и конфигурациями.",
            "Управлял и разрабатывал функции для поставщиков услуг: Salesbox, Salesmrkt и GoTryOne с использованием NextJS, Tailwind, Firebase, Algolia и Zustand.",
            "Использовал QuickBooks и Stripe для обработки сложных платежей и выставления счетов.",
            "Использовал N8N для автоматизации сложных процессов вне основной системы."
          ],
          tech: ["NextJS", "Tailwind", "Firebase", "Algolia", "Zustand", "QuickBooks", "Stripe", "N8N"]
        },
        {
          company: "Engages AI",
          role: "Full Stack Software Engineer",
          period: "Март 2024 – Авг 2025",
          location: "Удаленно, Сингапур",
          responsibilities: [
            "Разработал полнофункциональное CRM-чат-приложение с интегрированными возможностями ИИ-чат-бота.",
            "Улучшил функции фронтенда с использованием MUI, React, Redux, socket.io, RabbitMQ и пользовательских веб-виджетов.",
            "Заменил Webpack на Vite во фронтенде, добившись ускорения сборки на 50%.",
            "Построил масштабируемые серверные микросервисы на NestJS, используя PostgreSQL, Redis и RabbitMQ.",
            "Интегрировал передовые ИИ-компоненты: Python, модели RASA, GPT-4, ассистенты GPT и LangGraph.",
            "Управлял облачным развертыванием на инстансах Alibaba Ubuntu и бессерверных функциях AWS Lambda.",
            "Разработал комплексные дашборды отчетности и рабочие процессы автоматизации для управления лидами.",
            "Реализовал системы группировки контактов и рассылки сообщений.",
            "Оптимизировал производительность бэкенда, перенеся логику в функции базы данных и материализованные представления.",
            "Использовал PeerDB (CDC) для синхронизации в реальном времени между несколькими источниками данных.",
            "Разработал бессерверную функцию краулера для автоматического обновления векторного хранилища ассистента GPT.",
            "Обеспечил качество и надежность кода с помощью модульного тестирования на Jest."
          ],
          tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "GPT-4", "LangGraph", "PeerDB", "socket.io"]
        },
        {
          company: "Universiti Sains Islam Malaysia",
          role: "Стажер-системный аналитик",
          period: "Фев 2023 – Апр 2023",
          location: "Удаленно, Малайзия",
          responsibilities: [
            "Модернизировал устаревшие университетские системы, перейдя с PHP и Kotlin на React и React Native.",
            "Значительно улучшил производительность системы, удобство обслуживания и пользовательский опыт.",
            "Разрабатывал и поддерживал кроссплатформенные мобильные приложения для управления студентами."
          ],
          tech: ["React", "React Native", "PHP", "Kotlin"]
        }
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
        { 
          slug: "engages-ai",
          title: "Engages AI", 
          description: "Création d'une application de chat CRM avec des capacités de chatbot IA, messagerie en tempo réel et microservices évolutifs.",
          longDescription: "Direction du développement d'une plateforme complète de CRM et de chatbot alimentée par l'IA. Mise en œuvre de fonctionnalités de communication en temps réel, regroupement automatique des contacts pour les diffusions et flux de travail complexes de gestion des leads.",
          tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "GPT-4", "socket.io"],
          liveUrl: "https://chat.engages.ai"
        },
        { 
          slug: "salesmrkt",
          title: "Salesmrkt", 
          description: "Développement de fonctionnalités pour les prestataires de services et de ventes, optimisant la gestion des leads.",
          longDescription: "Développeur principal pour l'écosystème Salesmrkt, se concentrant sur l'automatisation de l'entonnoir de vente pour les prestataires de services.",
          tech: ["NextJS", "Firebase", "Algolia", "Stripe", "N8N", "TailwindCSS"],
          liveUrl: "https://salesmrkt.com"
        },
        { 
          slug: "gotryone",
          title: "GoTryOne", 
          description: "Une plateforme spécialisée permettant aux prestataires de services de gérer efficacement les réservations et les essais.",
          longDescription: "Construction d'une plateforme spécialisée de gestion des réservations et des essais au sein de l'écosystème Salesbox.",
          tech: ["NextJS", "Firebase", "Algolia", "Zustand", "Stripe", "QuickBooks"],
          liveUrl: "https://gotryone.com"
        },
        { 
          slug: "utmsir",
          title: "UTMSIR", 
          description: "Solution web améliorée par l'IA pour l'hébergement d'étudiants internationaux avec attribution automatique des chambres.",
          longDescription: "Projet de fin d'études à l'UTM. Développement d'un système de gestion de résidence basé sur le Web pour les étudiants internationaux.",
          tech: ["MongoDB", "Express", "React", "Node.js", "Python", "Recommandation IA"],
        }
      ]
    },
    experience: {
      title: "Expérience Professionnelle",
      items: [
        {
          company: "Salesmrkt",
          role: "Full Stack Vibe Coder",
          period: "Sept 2025 – Présent",
          location: "À distance, Seattle, États-Unis",
          responsibilities: [
            "Converti un projet React en NextJS pour une sécurité et une flexibilité accrues.",
            "Développé un système de chat IA avec recommandations et recherche approfondie, répondant en 1,5 s via Gemini.",
            "Interagi directement avec les clients pour les demandes de mise à jour et le support technique.",
            "Mis à jour la boutique Shopify avec une nouvelle interface utilisateur et des configurations.",
            "Géré et développé des fonctionnalités pour les prestataires de services : Salesbox, Salesmrkt et GoTryOne en utilisant NextJS, Tailwind, Firebase, Algolia et Zustand.",
            "Utilisé QuickBooks et Stripe pour gérer les paiements et la facturation complexes.",
            "Utilisé N8N pour gérer l'automatisation de processus complexes en dehors du système principal."
          ],
          tech: ["NextJS", "Tailwind", "Firebase", "Algolia", "Zustand", "QuickBooks", "Stripe", "N8N"]
        },
        {
          company: "Engages AI",
          role: "Ingénieur Logiciel Full Stack",
          period: "Mars 2024 – Août 2025",
          location: "À distance, Singapour",
          responsibilities: [
            "Développé une application de chat CRM complète avec des capacités de chatbot IA intégrées.",
            "Amélioré les fonctionnalités Frontend en utilisant MUI, React, Redux, socket.io, RabbitMQ et des widgets web personnalisés.",
            "Remplacé Webpack par Vite dans le Frontend, multipliant par deux la vitesse de build.",
            "Construit des microservices backend évolutifs avec NestJS, en exploitant PostgreSQL, Redis et RabbitMQ.",
            "Intégré des composants IA avancés : Python, modèles RASA, GPT-4, assistants GPT et LangGraph.",
            "Géré le déploiement cloud sur des instances Alibaba Ubuntu et des fonctions AWS Lambda sans serveur.",
            "Développé des tableaux de bord de reporting complets et des flux de travail d'automatisation pour la gestion des leads.",
            "Mis en œuvre des systèmes de regroupement de contacts et de messagerie de diffusion.",
            "Optimisé les performances backend en migrant la logique vers des fonctions de base de données et des vues matérialisées.",
            "Utilisé PeerDB (CDC) pour la synchronisation en temps réel entre plusieurs sources de données.",
            "Développé une fonction de crawler sans serveur pour mettre à jour automatiquement le magasin de vecteurs de l'assistant GPT.",
            "Assuré la qualité et la fiabilité du code grâce à des tests unitaires avec Jest."
          ],
          tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "GPT-4", "LangGraph", "PeerDB", "socket.io"]
        },
        {
          company: "Universiti Sains Islam Malaysia",
          role: "Stagiaire Analyste Système",
          period: "Fév 2023 – Avril 2023",
          location: "À distance, Malaisie",
          responsibilities: [
            "Modernisé les systèmes universitaires existants en migrant de PHP et Kotlin vers React et React Native.",
            "Amélioré considérablement les performances du système, la maintenabilité et l'expérience utilisateur.",
            "Développé et soutenu des applications mobiles multiplateformes pour la gestion des étudiants."
          ],
          tech: ["React", "React Native", "PHP", "Kotlin"]
        }
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

export function LanguageProvider({ children }: { children: ReactNode }): React.ReactElement {
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
