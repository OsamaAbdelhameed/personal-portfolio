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
      category?: string;
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
          images: [{ src: "/engages-ai/chat.engages.ai_.png", desc: "Dashboard page for Engages AI staff" }, { src: "/engages-ai/chat.engages.ai_ (1).png", desc: "Dashboard page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (2).png", desc: "Contact / Leads page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (3).png", desc: "Broadcast Campaigns page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (4).png", desc: "Flow-based Rasa chatbot page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (5).png", desc: "Gen AI GPT chatbot page for Engages AI client for automated self-updated chatbots" }, { src: "/engages-ai/chat.engages.ai_ (6).png", desc: "Subscription page for Engages AI client for automated self-updated chatbots" }, { src: "/engages-ai/chat.engages.ai_ (7).png", desc: "Channels page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (8).png", desc: "Teams page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (9).png", desc: "Automation Workflow page - Builder component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (10).png", desc: "Automation Workflow page - Triggers component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (11).png", desc: "Automation Workflow page - Actions component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (12).png", desc: "Automation Workflow page - Webhook Action component for Engages AI client" },]
        },
        {
          slug: "salesmrkt",
          title: "Salesmrkt",
          description: "Developed a frontend UI components for sales and service providers, optimizing SEO and user experience.",
          longDescription: "Core developer for the Salesmrkt ecosystem, focusing on automating the sales funnel for service providers. Developed centralized lead management tools and client engagement features that streamlined operations for hundreds of users.",
          tech: ["React", "Shopify", "N8N", "Calendly"],
          liveUrl: "https://salesmrkt.com",
          images: [{ src: "/salesmrkt/salesmrkt.com_.png", desc: "The main landing page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_campaigns-on-demand.png", desc: "The campaigns on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_schedule-growth-session.png", desc: "The sales, marketing and video production growth sessions on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_thank-you-ads.png", desc: "The thank you page that shows up when user books a session through N8N automation for Salesmrkt" }]
        },
        {
          slug: "gotryone",
          title: "GoTryOne",
          description: "A specialized platform for service providers to manage bookings and trials efficiently.",
          longDescription: "Built a specialized booking and trial management platform within the Salesbox ecosystem. Integrated with QuickBooks and Stripe for seamless financial operations and used Algolia for high-performance search capabilities.",
          tech: ["NextJS", "Firebase", "Algolia", "Zustand", "Stripe", "QuickBooks"],
          liveUrl: "https://gotryone.com",
          images: [{ src: "/gotryone/gotryone.com_.png", desc: "The main landing page for GoTryOne" }, { src: "/gotryone/gotryone.com_build.png", desc: "The inital page for AI Conversation chatbot in GoTryOne" }, { src: "/gotryone/gotryone.com_build (1).png", desc: "The AI Conversation chatbot in GoTryOne when user clicks on one of the options on the right" }, { src: "/gotryone/gotryone.com_build (2).png", desc: "The AI Conversation chatbot in GoTryOne when user clicks on one on the service name in the message then on see more button" }, { src: "/gotryone/gotryone.com_build (3).png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions using suggested answers" }, { src: "/gotryone/gotryone.com_build (3).png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions and gets a more details analysis to his business" }, { src: "/gotryone/gotryone.com_build_conversation_UlWX8rZYYAGENieuWiu9.png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions and gets a bundle service discount to his business" }, { src: "/gotryone/gotryone.com_build_conversation_UlWX8rZYYAGENieuWiu9.png", desc: "The AI Conversation chatbot in GoTryOne when user gets a deep research insights about his business" }, { src: "/gotryone/gotryone.com_profile.png", desc: "The profile page for GoTryOne" }]
        },
        {
          slug: "utmsir",
          title: "UTMSIR",
          description: "AI-enhanced web solution for international student accommodation with automated room assignments.",
          longDescription: "Final Year Project at UTM. Developed a web-based residence management system for international students. Features include an AI-driven recommendation engine for roommate matching and automated room assignments based on student preferences.",
          tech: ["MongoDB", "Express", "React", "Node.js", "Python", "AI Recommendation"],
          category: "university-projects"
        },
        {
          slug: "quickbooks-n8n",
          title: "QuickBooks N8N Automation",
          description: "QuickBooks automation with 2 webhook requests: creating invoices and sending invoice emails to the client for payment.",
          longDescription: "This QuickBooks N8N automation is used to create customers and items in the account if they aren't created before. It features two main webhook requests: the first one creates invoices seamlessly, and the second one sends invoice emails directly to the client to request payment.",
          tech: ["N8N", "QuickBooks", "Webhooks", "Automation"],
          category: "n8n-automations",
          images: [
            {
              src: "/quickbooks-n8n.png",
              desc: "Quickbooks with 2 webhook requests: the first one to create invoices and the second one to send invoice emails to the client for payment."
            },
            {
              src: "/quickbooks-n8n2.png",
              desc: "Used to create customers and items in the account if they aren't created before."
            }
          ]
        },
        {
          slug: "calendly-n8n",
          title: "Calendly N8N Automation",
          description: "Automated workflow triggered by Calendly events to seamlessly manage bookings and synchronize data.",
          longDescription: "This N8N automation integrates directly with Calendly. It listens for scheduling events and automatically processes them—handling appointments, sending necessary notifications, and updating records without any manual intervention.",
          tech: ["N8N", "Calendly", "Webhooks", "Automation"],
          category: "n8n-automations",
          images: [
            {
              src: "/calendly-n8n.png",
              desc: "Overview of the Calendly automation workflow in N8N handling new appointments."
            }
          ]
        },
        {
          slug: "ai-audit-report-n8n",
          title: "AI Pipeline for Audit Reports",
          description: "N8N automation that acts as an AI pipeline to automatically process audit report forms.",
          longDescription: "This N8N workflow automates the handling of audit report forms through a sophisticated AI pipeline. It intelligently processes form submissions, extracts and summarizes key information using advanced language models, and outputs structured audit reports to save hours of manual data entry.",
          tech: ["N8N", "AI Pipeline", "Automation", "GPT-4"],
          category: "n8n-automations",
          images: [
            {
              src: "/ai-pipeline-for-audit-report-form-n8n.png",
              desc: "Overview of the AI pipeline N8N automation for audit report form processing."
            }
          ]
        },
        {
          slug: "slack-captured-lead-n8n",
          title: "Slack Lead Capture Automation",
          description: "N8N automation that captures incoming leads and instantly routes structured notifications to Slack.",
          longDescription: "This N8N workflow is designed to instantly process incoming leads. It automatically retrieves lead details, structures the vital information, and dispatches a comprehensive notification directly to dedicated Slack channels. This ensures the team is instantly alerted and aligned on new prospective clients without missing a beat.",
          tech: ["N8N", "Slack", "Webhooks", "Lead Generation"],
          category: "n8n-automations",
          images: [
            {
              src: "/slack-captured-lead-n8n.png",
              desc: "First part of the Slack lead capture workflow in N8N."
            },
            {
              src: "/slack-captured-lead-n8n2.png",
              desc: "Detail of the routing and message formatting before dispatching to Slack."
            }
          ]
        },
        {
          slug: "zack-thompson-portfolio",
          title: "Zack Thompson Portfolio",
          description: "A modern, high-performance portfolio website developed for Zack Thompson. Live at: https://zackthompson.com/",
          longDescription: "Designed and developed a comprehensive digital portfolio for Zack Thompson to showcase his impressive work and professional brand. The platform features dynamic interactions, a clean aesthetic, and seamless responsiveness across devices. You can view the live website at https://zackthompson.com/.",
          liveUrl: "https://zackthompson.com/",
          tech: ["NextJS", "React", "Web Design", "UI/UX"],
          category: "client-portfolios",
          images: [
            {
              src: "/zack-website-portfolio.png",
              desc: "Landing page view of Zack Thompson's portfolio website"
            }
          ]
        },
        {
          slug: "meetjoegreco-portfolio",
          title: "Joe Greco Portfolio",
          description: "A professional portfolio website designed and developed for Joe Greco. Live at: https://meetjoegreco.com/",
          longDescription: "Created a premium digital portfolio for Joseph Greco, CEO at Salesmrkt. The website serves as a central hub for his professional brand, featuring modern layouts, smooth animations, and optimized performance to clearly communicate his expertise and leadership. You can explore the live site at https://meetjoegreco.com/.",
          liveUrl: "https://meetjoegreco.com/",
          tech: ["NextJS", "React", "Web Design", "UI/UX"],
          category: "client-portfolios",
          images: [
            {
              src: "/meetjoegreco-website-portfolio.png",
              desc: "Landing page view of Joe Greco's portfolio website"
            }
          ]
        },
        {
          slug: "joe-website-portfolio",
          title: "Joe Website Portfolio",
          description: "A tailored digital portfolio and landing page designed for comprehensive brand presentation.",
          longDescription: "Developed a specialized portfolio and landing page to elevate Joe's digital presence. The website focuses heavily on conversion-driven design, cleanly communicating core services while maintaining a sleek and fast-loading user interface.",
          tech: ["NextJS", "React", "Web Design", "UI/UX"],
          category: "client-portfolios",
          images: [
            {
              src: "/joe-website-portfolio.png",
              desc: "Landing page view of the Joe Website Portfolio"
            }
          ]
        },
        {
          slug: "grn-shoreline-portfolio",
          title: "GRN Shoreline Website",
          description: "A tailored digital footprint and robust company website developed for GRN Shoreline.",
          longDescription: "Designed and developed a comprehensive website for GRN Shoreline, working closely with founder Matthew Curran. The platform was built from the ground up to perfectly capture his vision, delivering a highly responsive, fast, and targeted online presence that precisely meets their business needs.",
          tech: ["NextJS", "React", "Web Design", "UI/UX"],
          category: "client-portfolios",
          images: [
            {
              src: "/grn-shoreline-website-portfolio.png",
              desc: "Landing page view of the GRN Shoreline website"
            }
          ]
        }
      ]
    },
    experience: {
      title: "Work Experience",
      items: [
        {
          "company": "Mind Step Tutor",
          "role": "Founder",
          "period": "Mar 2026 – Present",
          "location": "United Arab Emirates",
          "responsibilities": [
            "Organizing the relationship between Students and Private Tutors in a B2C and C2C platform."
          ],
          "tech": [
            "Business Strategy",
            "Platform Architecture"
          ]
        },
        {
          "company": "Salesmrkt",
          "role": "AI FullStack Software Engineer",
          "period": "Sept 2025 – Mar 2026",
          "location": "Seattle, WA",
          "responsibilities": [
            "Converted a React project to NextJS for enhanced security and flexibility.",
            "Developed an AI chatting system with recommendations and in-depth search, responding in 1.5s using Gemini.",
            "Engaged directly with clients for update requests and technical support.",
            "Updated Shopify store with new template UI and configurations.",
            "Managed and developed features for service providers: Salesbox, Salesmrkt, and GoTryOne using NextJS, Tailwind, Firebase, Algolia, and Zustand.",
            "Utilized QuickBooks and Stripe to handle complex payments and invoicing.",
            "Used N8N to handle complex process automation outside the main system."
          ],
          "tech": [
            "NextJS",
            "Tailwind",
            "Firebase",
            "Algolia",
            "Zustand",
            "QuickBooks",
            "Stripe",
            "N8N"
          ]
        },
        {
          "company": "Engages AI",
          "role": "Fullstack Software Engineer",
          "period": "Jan 2024 – Aug 2025",
          "location": "Singapore",
          "responsibilities": [
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
          "tech": [
            "NestJS",
            "React",
            "PostgreSQL",
            "Redis",
            "RabbitMQ",
            "AWS Lambda",
            "GPT-4",
            "LangGraph",
            "PeerDB",
            "socket.io"
          ]
        },
        {
          "company": "QuickDesk",
          "role": "Software Engineer Intern",
          "period": "May 2023 – Dec 2023",
          "location": "WP, Kuala Lumpur",
          "responsibilities": [
            "Contributed to CRM web application development; developed frontend in React.",
            "Implemented backend using NestJS, PostgreSQL, Redis, and Alibaba ChatApp.",
            "Developed AI chatbots using the Rasa framework."
          ],
          "tech": [
            "React",
            "NestJS",
            "PostgreSQL",
            "Redis",
            "Rasa",
            "Alibaba ChatApp"
          ]
        },
        {
          "company": "Universiti Sains Islam Malaysia",
          "role": "System Analyst",
          "period": "Oct 2022 – Apr 2023",
          "location": "Nilai, Malaysia",
          "responsibilities": [
            "Modernized legacy university systems by migrating from PHP and Kotlin to React and React Native.",
            "Significantly improved system performance, maintainability, and user experience.",
            "Supported cross-platform mobile applications for student management."
          ],
          "tech": [
            "React",
            "React Native",
            "PHP",
            "Kotlin"
          ]
        },
        {
          "company": "Developer Student Club - UTM",
          "role": "Technical Team Member",
          "period": "Nov 2021 – Oct 2022",
          "location": "Johor Bahru, Malaysia",
          "responsibilities": [
            "Explored machine learning and deep learning fields in AI to learn and participate in hands-on workshops."
          ],
          "tech": [
            "Python",
            "Machine Learning",
            "Deep Learning"
          ]
        },
        {
          "company": "Freelancer.com",
          "role": "Frontend Web Developer",
          "period": "Nov 2021 – Nov 2021",
          "location": "Remote",
          "responsibilities": [
            "Developed a weather journal website connected to a weather API using HTML forms and Express.js to facilitate interactive data requests."
          ],
          "tech": [
            "HTML",
            "Express.js",
            "JavaScript",
            "Weather API"
          ]
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
                      longDescription: "قدت تطوير منصة CRM وروبوت دردشة مدعوم بالذكاء الاصطناعي. تتضمن الميزات التواصل في الوقت الفعلي، وتجميع جهات الاتصال الآلي للبث، ومسارات عمل معقدة لإدارة العملاء المحتملين.",
                      tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "GPT-4", "socket.io"],
                      liveUrl: "https://chat.engages.ai",
                      videoUrl: "/engages-ai.mp4",
                      images: [{ src: "/engages-ai/chat.engages.ai_.png", desc: "Dashboard page for Engages AI staff" }, { src: "/engages-ai/chat.engages.ai_ (1).png", desc: "Dashboard page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (2).png", desc: "Contact / Leads page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (3).png", desc: "Broadcast Campaigns page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (4).png", desc: "Flow-based Rasa chatbot page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (5).png", desc: "Gen AI GPT chatbot page for Engages AI client for automated self-updated chatbots" }, { src: "/engages-ai/chat.engages.ai_ (6).png", desc: "Subscription page for Engages AI client for automated self-updated chatbots" }, { src: "/engages-ai/chat.engages.ai_ (7).png", desc: "Channels page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (8).png", desc: "Teams page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (9).png", desc: "Automation Workflow page - Builder component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (10).png", desc: "Automation Workflow page - Triggers component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (11).png", desc: "Automation Workflow page - Actions component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (12).png", desc: "Automation Workflow page - Webhook Action component for Engages AI client" },]
                    },
                    {
                      slug: "salesmrkt",
                      title: "Salesmrkt",
                      description: "تطوير ميزات لمقدمي خدمات المبيعات والخدمات، وتحسين إدارة العملاء المحتملين وتفاعل المستخدمين.",
                      longDescription: "مطور أساسي للنظام البيئي لـ Salesmrkt، مع التركيز على أتمتة مسار المبيعات لمقدمي الخدمات. تطوير أدوات مركزية لإدارة العملاء المحتملين.",
                      tech: ["React", "Shopify", "N8N", "Calendly"],
                      liveUrl: "https://salesmrkt.com",
                      images: [{ src: "/salesmrkt/salesmrkt.com_.png", desc: "The main landing page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_campaigns-on-demand.png", desc: "The campaigns on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_schedule-growth-session.png", desc: "The sales, marketing and video production growth sessions on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_thank-you-ads.png", desc: "The thank you page that shows up when user books a session through N8N automation for Salesmrkt" }]
                    },
                    {
                      slug: "gotryone",
                      title: "GoTryOne",
                      description: "منصة متخصصة لمقدمي الخدمات لإدارة الحجوزات والتجارب بكفاءة.",
                      longDescription: "بناء منصة متخصصة لإدارة الحجوزات والتجارب ضمن نظام Salesbox. التكامل مع QuickBooks و Stripe للعمليات المالية السلسة.",
                      tech: ["NextJS", "Firebase", "Algolia", "Zustand", "Stripe", "QuickBooks"],
                      liveUrl: "https://gotryone.com",
                      images: [{ src: "/gotryone/gotryone.com_.png", desc: "The main landing page for GoTryOne" }, { src: "/gotryone/gotryone.com_build.png", desc: "The inital page for AI Conversation chatbot in GoTryOne" }, { src: "/gotryone/gotryone.com_build (1).png", desc: "The AI Conversation chatbot in GoTryOne when user clicks on one of the options on the right" }, { src: "/gotryone/gotryone.com_build (2).png", desc: "The AI Conversation chatbot in GoTryOne when user clicks on one on the service name in the message then on see more button" }, { src: "/gotryone/gotryone.com_build (3).png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions using suggested answers" }, { src: "/gotryone/gotryone.com_build (3).png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions and gets a more details analysis to his business" }, { src: "/gotryone/gotryone.com_build_conversation_UlWX8rZYYAGENieuWiu9.png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions and gets a bundle service discount to his business" }, { src: "/gotryone/gotryone.com_build_conversation_UlWX8rZYYAGENieuWiu9.png", desc: "The AI Conversation chatbot in GoTryOne when user gets a deep research insights about his business" }, { src: "/gotryone/gotryone.com_profile.png", desc: "The profile page for GoTryOne" }]
                    },
                    {
                      slug: "utmsir",
                      title: "UTMSIR",
                      description: "حل ويب معزز بالذكاء الاصطناعي لسكن الطلاب الدوليين مع مهام غرف آلية.",
                      longDescription: "مشروع السنة النهائية في جامعة UTM. تطوير نظام إدارة سكن يعتمد على الويب للطلاب الدوليين. يتضمن محرك توصية يعتمد على الذكاء الاصطناعي لتنسيق الغرف.",
                      tech: ["MongoDB", "Express", "React", "Node.js", "Python", "AI Recommendation"],
                      category: "university-projects"
                    },
                    {
                      slug: "quickbooks-n8n",
                      title: "أتمتة QuickBooks مع N8N",
                      description: "أتمتة QuickBooks مع استدعاءين webhook: لإنشاء الفواتير وإرسال رسائل بريد إلكتروني للعملاء من أجل الدفع.",
                      longDescription: "تُستخدم هذه الأتمتة لإنشاء عملاء وعناصر في الحساب إذا لم تكن موجودة. تتضمن إنشاء فواتير بسلاسة وإرسالها بالبريد الإلكتروني للعملاء لطلب الدفع.",
                      tech: ["N8N", "QuickBooks", "Webhooks", "Automation"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/quickbooks-n8n.png",
                          desc: "Quickbooks with 2 webhook requests: the first one to create invoices and the second one to send invoice emails to the client for payment."
                        },
                        {
                          src: "/quickbooks-n8n2.png",
                          desc: "Used to create customers and items in the account if they aren't created before."
                        }
                      ]
                    },
                    {
                      slug: "calendly-n8n",
                      title: "أتمتة Calendly مع N8N",
                      description: "سير عمل مؤتمت بالكامل يعتمد على أحداث Calendly لإدارة الحجوزات ومزامنة البيانات بسلاسة.",
                      longDescription: "يتم دمج أتمتة N8N هذه مباشرة مع Calendly لتلقي المواعيد وإدارتها، بالإضافة إلى إرسال الإشعارات وتحديث السجلات دون أي تدخل يدوي.",
                      tech: ["N8N", "Calendly", "Webhooks", "Automation"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/calendly-n8n.png",
                          desc: "Overview of the Calendly automation workflow in N8N handling new appointments."
                        }
                      ]
                    },
                    {
                      slug: "ai-audit-report-n8n",
                      title: "خط أنابيب ذكاء اصطناعي لتقارير التدقيق",
                      description: "أتمتة N8N تعمل كمسار للذكاء الاصطناعي لمعالجة نماذج تقارير التدقيق تلقائيًا.",
                      longDescription: "يعمل هذا النظام على أتمتة التعامل مع نماذج تقارير التدقيق. يعالج التقديمات بذكاء، ويستخرج المعلومات الرئيسية ويلخصها باستخدام نماذج اللغات لتوفير تقارير تدقيق منظمة وتخفيف العمل اليدوي.",
                      tech: ["N8N", "AI Pipeline", "Automation", "GPT-4"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/ai-pipeline-for-audit-report-form-n8n.png",
                          desc: "Overview of the AI pipeline N8N automation for audit report form processing."
                        }
                      ]
                    },
                    {
                      slug: "slack-captured-lead-n8n",
                      title: "أتمتة التقاط العملاء وتوجيههم لـ Slack",
                      description: "أتمتة N8N تلتقط العملاء المحتملين الجدد وتوجه إشعارات منظمة فورية إلى قنوات Slack.",
                      longDescription: "صُمم هذا النظام لمعالجة العملاء المحتملين الواردين بشكل فوري. يسترد تفاصيل العميل، وينظم المعلومات، ويطلق إشعارات شاملة ومباشرة لقنوات Slack المخصصة.",
                      tech: ["N8N", "Slack", "Webhooks", "Lead Generation"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/slack-captured-lead-n8n.png",
                          desc: "First part of the Slack lead capture workflow in N8N."
                        },
                        {
                          src: "/slack-captured-lead-n8n2.png",
                          desc: "Detail of the routing and message formatting before dispatching to Slack."
                        }
                      ]
                    },
                    {
                      slug: "zack-thompson-portfolio",
                      title: "معرض أعمال Zack Thompson",
                      description: "موقع ويب احترافي وحديث لعرض الأعمال تم تطويره لـ Zack Thompson. متاح على: https://zackthompson.com/",
                      longDescription: "تصميم وتطوير محفظة رقمية شاملة لـ Zack Thompson لعرض أعماله وعلامته التجارية. يوفر الموقع تفاعلات ديناميكية، وتصميماً نظيفاً، وتجربة سلسة عبر الأجهزة. يمكنك زيارته عبر https://zackthompson.com/.",
                      liveUrl: "https://zackthompson.com/",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/zack-website-portfolio.png",
                          desc: "Landing page view of Zack Thompson's portfolio website"
                        }
                      ]
                    },
                    {
                      slug: "meetjoegreco-portfolio",
                      title: "معرض أعمال Joe Greco",
                      description: "موقع محفظة احترافي مصمم ومطور لـ Joe Greco. متاح على: https://meetjoegreco.com/",
                      longDescription: "بناء محفظة رقمية فاخرة لـ Joseph Greco، الرئيس التنفيذي في Salesmrkt. تعمل كمركز رئيسي لعلامته التجارية مع تخطيطات حديثة، حركات سلسة وأداء محسن يعكس خبرته וقيادته. متاح عبر https://meetjoegreco.com/.",
                      liveUrl: "https://meetjoegreco.com/",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/meetjoegreco-website-portfolio.png",
                          desc: "Landing page view of Joe Greco's portfolio website"
                        }
                      ]
                    },
                    {
                      slug: "joe-website-portfolio",
                      title: "معرض أعمال موقع Joe",
                      description: "محفظة رقمية مفصلة وصفحة هبوط مصممة لعرض شامل للعلامة التجارية.",
                      longDescription: "تطوير محفظة رقمية مخصصة وصفحة هبوط لرفع التواجد الرقمي لـ Joe. يركز الموقع بشكل كبير على التصميم المدفوع بالتحويلات والسرعة وسلاسة الاستخدام.",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/joe-website-portfolio.png",
                          desc: "Landing page view of the Joe Website Portfolio"
                        }
                      ]
                    },
                    {
                      slug: "grn-shoreline-portfolio",
                      title: "موقع GRN Shoreline",
                      description: "موقع ويب مخصص للشركات تم تطويره بخبراء لـ GRN Shoreline لتعزيز تواجدها الرقمي.",
                      longDescription: "تصميم وتطوير موقع إلكتروني شامل لـ GRN Shoreline بالتعاون المباشر مع مؤسسها Matthew Curran. بُنيت المنصة من الصفر لالتقاط رؤيته بدقة وتقديم واجهة سريعة الاستجابة وملبية لاحتياجات الشركة.",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/grn-shoreline-website-portfolio.png",
                          desc: "Landing page view of the GRN Shoreline website"
                        }
                      ]
                    }
                  ]
    },
    experience: {
      title: "الخبرة المهنية",
      items: [
        {
          "company": "Mind Step Tutor",
          "role": "مؤسس",
          "period": "مارس 2026 – الحاضر",
          "location": "الإمارات العربية المتحدة",
          "responsibilities": [
            "تنظيم العلاقة بين الطلاب والمدرسين الخصوصيين في منصة B2C و C2C."
          ],
          "tech": [
            "استراتيجية الأعمال",
            "هندسة المنصة"
          ]
        },
        {
          "company": "Salesmrkt",
          "role": "مهندس برمجيات ذكاء اصطناعي شامل",
          "period": "سبتمبر 2025 – مارس 2026",
          "location": "سياتل، واشنطن",
          "responsibilities": [
            "تحويل مشروع React إلى NextJS لتعزيز الأمان والمرونة.",
            "تطوير نظام دردشة ذكاء اصطناعي بقدرة على تقديم توصيات وبحث متعمق، مع استجابة في 1.5 ثانية باستخدام Gemini.",
            "التواصل المباشر مع العملاء لتنفيذ طلبات التحديث والدعم الفني.",
            "تحديث متجر Shopify بقالب واجهة مستخدم وتكوينات جديدة.",
            "إدارة وتطوير الميزات لمزودي الخدمات: Salesbox و Salesmrkt و GoTryOne باستخدام NextJS و Tailwind و Firebase و Algolia و Zustand.",
            "استخدام QuickBooks و Stripe لمعالجة المدفوعات والفواتير المعقدة.",
            "استخدام N8N لمعالجة أتمتة العمليات المعقدة خارج النظام الأساسي."
          ],
          "tech": [
            "NextJS",
            "Tailwind",
            "Firebase",
            "Algolia",
            "Zustand",
            "QuickBooks",
            "Stripe",
            "N8N"
          ]
        },
        {
          "company": "Engages AI",
          "role": "مهندس برمجيات شامل",
          "period": "يناير 2024 – أغسطس 2025",
          "location": "سنغافورة",
          "responsibilities": [
            "تطوير تطبيق محادثة CRM كامل الميزات مع قدرات روبوت دردشة متكاملة بالذكاء الاصطناعي.",
            "تحسين ميزات الواجهة الأمامية باستخدام MUI و React و Redux و socket.io و RabbitMQ وودجات الويب.",
            "استبدال Webpack بـ Vite في الواجهة الأمامية، مما حقق سرعة بناء أفضل بنسبة 50%.",
            "بناء خدمات مصغرة قابلة للتوسع باستخدام NestJS، مع الاعتماد على PostgreSQL و Redis و RabbitMQ.",
            "دمج مكونات ذكاء اصطناعي متقدمة: Python و RASA و GPT-4 و GPT Assistants و LangGraph.",
            "إدارة النشر السحابي على مثيلات Alibaba Ubuntu ووظائف AWS Lambda السحابية.",
            "تطوير لوحات معلومات شاملة وسير عمل أتمتة لإدارة العملاء المحتملين.",
            "تنفيذ أنظمة تجميع جهات الاتصال ورسائل البث الجماعية.",
            "تحسين أداء الواجهة الخلفية بنقل المنطق إلى وظائف قاعدة البيانات واللقطات المحدثة.",
            "استخدام PeerDB (CDC) للمزامنة في الوقت الفعلي بين مصادر بيانات متعددة.",
            "تطوير وظيفة زاحف סერۆווערלעס لتحديث مخزن المتجهات الخاص بـ GPT Assistant تلقائيًا.",
            "ضمان جودة البرمجيات وموثوقيتها من خلال اختبارات الوحدة باستخدام Jest."
          ],
          "tech": [
            "NestJS",
            "React",
            "PostgreSQL",
            "Redis",
            "RabbitMQ",
            "AWS Lambda",
            "GPT-4",
            "LangGraph",
            "PeerDB",
            "socket.io"
          ]
        },
        {
          "company": "QuickDesk",
          "role": "متدرب مهندس برمجيات",
          "period": "مايو 2023 – ديسمبر 2023",
          "location": "كوالالمبور، ماليزيا",
          "responsibilities": [
            "المساهمة في تطوير تطبيق CRM للويب؛ تطوير الواجهة الأمامية باستخدام React.",
            "تنفيذ الواجهة الخلفية باستخدام NestJS و PostgreSQL و Redis و Alibaba ChatApp.",
            "تطوير روبوتات دردشة تعمل بالذكاء الاصطناعي باستخدام إطار عمل Rasa."
          ],
          "tech": [
            "React",
            "NestJS",
            "PostgreSQL",
            "Redis",
            "Rasa",
            "Alibaba ChatApp"
          ]
        },
        {
          "company": "Universiti Sains Islam Malaysia",
          "role": "محلل أنظمة",
          "period": "أكتوبر 2022 – أبريل 2023",
          "location": "نيلاي، ماليزيا",
          "responsibilities": [
            "تحديث أنظمة الجامعة القديمة من خلال الانتقال من PHP و Kotlin إلى React و React Native.",
            "تحسين أداء النظام وقابلية صيانته وتجربة المستخدم بشكل كبير.",
            "دعم تطبيقات الهاتف المحمول عبر المنصات لإدارة الطلاب."
          ],
          "tech": [
            "React",
            "React Native",
            "PHP",
            "Kotlin"
          ]
        },
        {
          "company": "Developer Student Club - UTM",
          "role": "عضو الفريق التقني",
          "period": "نوفمبر 2021 – أكتوبر 2022",
          "location": "جوهور بهرو، ماليزيا",
          "responsibilities": [
            "استكشاف مجالات التعلم الآلي والتعلم العميق في الذكاء الاصطناعي للتعلم والمشاركة في ورش العمل العملية."
          ],
          "tech": [
            "Python",
            "Machine Learning",
            "Deep Learning"
          ]
        },
        {
          "company": "Freelancer.com",
          "role": "مطور واجهة أمامية للويب",
          "period": "نوفمبر 2021 – نوفمبر 2021",
          "location": "عن بعد",
          "responsibilities": [
            "تطوير موقع دفتر يوميات الطقس متصل بـ Weather API باستخدام نماذج HTML و Express.js لتسهيل طلبات البيانات التفاعلية."
          ],
          "tech": [
            "HTML",
            "Express.js",
            "JavaScript",
            "Weather API"
          ]
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
                      description: "Se construyó una aplicación de chat CRM con capacidades integradas de chatbot de IA.",
                      longDescription: "Lideró el desarrollo de una plataforma CRM y un chatbot impulsado por IA. Se implementó la comunicación en tiempo real y flujos de gestión de clientes potenciales.",
                      tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "GPT-4", "socket.io"],
                      liveUrl: "https://chat.engages.ai",
                      videoUrl: "/engages-ai.mp4",
                      images: [{ src: "/engages-ai/chat.engages.ai_.png", desc: "Dashboard page for Engages AI staff" }, { src: "/engages-ai/chat.engages.ai_ (1).png", desc: "Dashboard page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (2).png", desc: "Contact / Leads page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (3).png", desc: "Broadcast Campaigns page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (4).png", desc: "Flow-based Rasa chatbot page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (5).png", desc: "Gen AI GPT chatbot page for Engages AI client for automated self-updated chatbots" }, { src: "/engages-ai/chat.engages.ai_ (6).png", desc: "Subscription page for Engages AI client for automated self-updated chatbots" }, { src: "/engages-ai/chat.engages.ai_ (7).png", desc: "Channels page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (8).png", desc: "Teams page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (9).png", desc: "Automation Workflow page - Builder component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (10).png", desc: "Automation Workflow page - Triggers component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (11).png", desc: "Automation Workflow page - Actions component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (12).png", desc: "Automation Workflow page - Webhook Action component for Engages AI client" },]
                    },
                    {
                      slug: "salesmrkt",
                      title: "Salesmrkt",
                      description: "Desarrollo de componentes de interfaz de usuario frontend para proveedores de servicios y ventas.",
                      longDescription: "Desarrollador principal del ecosistema Salesmrkt, enfocado en automatizar el embudo de ventas para proveedores de servicios, con gestión centralizada de clientes potenciales.",
                      tech: ["React", "Shopify", "N8N", "Calendly"],
                      liveUrl: "https://salesmrkt.com",
                      images: [{ src: "/salesmrkt/salesmrkt.com_.png", desc: "The main landing page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_campaigns-on-demand.png", desc: "The campaigns on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_schedule-growth-session.png", desc: "The sales, marketing and video production growth sessions on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_thank-you-ads.png", desc: "The thank you page that shows up when user books a session through N8N automation for Salesmrkt" }]
                    },
                    {
                      slug: "gotryone",
                      title: "GoTryOne",
                      description: "Una plataforma especializada para que los proveedores gestionen reservas eficientemente.",
                      longDescription: "Construyó una plataforma de reservas y pruebas dentro del ecosistema Salesbox, integrada con QuickBooks y Stripe.",
                      tech: ["NextJS", "Firebase", "Algolia", "Zustand", "Stripe", "QuickBooks"],
                      liveUrl: "https://gotryone.com",
                      images: [{ src: "/gotryone/gotryone.com_.png", desc: "The main landing page for GoTryOne" }, { src: "/gotryone/gotryone.com_build.png", desc: "The inital page for AI Conversation chatbot in GoTryOne" }, { src: "/gotryone/gotryone.com_build (1).png", desc: "The AI Conversation chatbot in GoTryOne when user clicks on one of the options on the right" }, { src: "/gotryone/gotryone.com_build (2).png", desc: "The AI Conversation chatbot in GoTryOne when user clicks on one on the service name in the message then on see more button" }, { src: "/gotryone/gotryone.com_build (3).png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions using suggested answers" }, { src: "/gotryone/gotryone.com_build (3).png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions and gets a more details analysis to his business" }, { src: "/gotryone/gotryone.com_build_conversation_UlWX8rZYYAGENieuWiu9.png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions and gets a bundle service discount to his business" }, { src: "/gotryone/gotryone.com_build_conversation_UlWX8rZYYAGENieuWiu9.png", desc: "The AI Conversation chatbot in GoTryOne when user gets a deep research insights about his business" }, { src: "/gotryone/gotryone.com_profile.png", desc: "The profile page for GoTryOne" }]
                    },
                    {
                      slug: "utmsir",
                      title: "UTMSIR",
                      description: "Solución web mejorada con IA para alojamiento internacional de estudiantes.",
                      longDescription: "Desarrolló un sistema web de gestión de residencias para estudiantes internacionales con un motor de recomendaciones por IA para emparejamiento.",
                      tech: ["MongoDB", "Express", "React", "Node.js", "Python", "AI Recommendation"],
                      category: "university-projects"
                    },
                    {
                      slug: "quickbooks-n8n",
                      title: "Automatización de QuickBooks",
                      description: "Integración de N8N y QuickBooks con peticiones webhook para facturas.",
                      longDescription: "Automatización utilizada para crear facturas y clientes en la cuenta y mandar correos electrónicos para el pago automáticamente.",
                      tech: ["N8N", "QuickBooks", "Webhooks", "Automation"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/quickbooks-n8n.png",
                          desc: "Quickbooks with 2 webhook requests: the first one to create invoices and the second one to send invoice emails to the client for payment."
                        },
                        {
                          src: "/quickbooks-n8n2.png",
                          desc: "Used to create customers and items in the account if they aren't created before."
                        }
                      ]
                    },
                    {
                      slug: "calendly-n8n",
                      title: "Automatización Calendly N8N",
                      description: "Flujo de trabajo automatizado para sincronización de datos de Calendly.",
                      longDescription: "Se integra directamente con Calendly para procesar citas, mandar notificaciones y actualizar CRM basándose en eventos programados o modificados.",
                      tech: ["N8N", "Calendly", "Webhooks", "Automation"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/calendly-n8n.png",
                          desc: "Overview of the Calendly automation workflow in N8N handling new appointments."
                        }
                      ]
                    },
                    {
                      slug: "ai-audit-report-n8n",
                      title: "Pipeline de IA para Auditorías",
                      description: "Pipeline de IA automatizado en N8N para informes de auditoría.",
                      longDescription: "Extrae de forma inteligente información mediante modelos avanzados, resumiendo hallazgos clave de auditorías y generando reportes estructurados.",
                      tech: ["N8N", "AI Pipeline", "Automation", "GPT-4"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/ai-pipeline-for-audit-report-form-n8n.png",
                          desc: "Overview of the AI pipeline N8N automation for audit report form processing."
                        }
                      ]
                    },
                    {
                      slug: "slack-captured-lead-n8n",
                      title: "Captura de Clientes vía Slack",
                      description: "Automatización que enruta nuevos clientes calificados de N8N hacia Slack.",
                      longDescription: "Obtiene los detalles del cliente calificado y formula mensajes exhaustivos hacia canales específicos de Slack para alertar al equipo en vivo.",
                      tech: ["N8N", "Slack", "Webhooks", "Lead Generation"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/slack-captured-lead-n8n.png",
                          desc: "First part of the Slack lead capture workflow in N8N."
                        },
                        {
                          src: "/slack-captured-lead-n8n2.png",
                          desc: "Detail of the routing and message formatting before dispatching to Slack."
                        }
                      ]
                    },
                    {
                      slug: "zack-thompson-portfolio",
                      title: "Portafolio Zack Thompson",
                      description: "Un portafolio web de alto rendimiento para Zack Thompson a zackthompson.com.",
                      longDescription: "Desarrollo y diseño del portafolio digital de Zack, incluyendo interacciones dinámicas. Disponible a través de https://zackthompson.com/.",
                      liveUrl: "https://zackthompson.com/",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/zack-website-portfolio.png",
                          desc: "Landing page view of Zack Thompson's portfolio website"
                        }
                      ]
                    },
                    {
                      slug: "meetjoegreco-portfolio",
                      title: "Portafolio Joe Greco",
                      description: "Un portafolio profesional para Joe Greco, visitable en meetjoegreco.com",
                      longDescription: "Plataforma premium para Joseph Greco, CEO de Salesmrkt, enfocada en consolidar su marca como emprendedor, construida con React y rendimiento óptimo.",
                      liveUrl: "https://meetjoegreco.com/",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/meetjoegreco-website-portfolio.png",
                          desc: "Landing page view of Joe Greco's portfolio website"
                        }
                      ]
                    },
                    {
                      slug: "joe-website-portfolio",
                      title: "Página Web Joe",
                      description: "Portafolio digital dinámico enfocado en conversiones para elevadas presencias B2B.",
                      longDescription: "Desarrolló un landing page y portfolio centrado fuertemente en conducir más prospectos manteniendo un diseño moderno.",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/joe-website-portfolio.png",
                          desc: "Landing page view of the Joe Website Portfolio"
                        }
                      ]
                    },
                    {
                      slug: "grn-shoreline-portfolio",
                      title: "Web corporativa GRN Shoreline",
                      description: "Sitio web completo personalizado apoyando la visión de GRN Shoreline empresarial.",
                      longDescription: "Colaboró minuciosamente con el fundador Matthew Curran para crear la experiencia digital impecable y responsiva que resuelva el crecimiento de Shoreline GRN.",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/grn-shoreline-website-portfolio.png",
                          desc: "Landing page view of the GRN Shoreline website"
                        }
                      ]
                    }
                  ]
    },
    experience: {
      title: "Experiencia Laboral",
      items: [
        {
          "company": "Mind Step Tutor",
          "role": "Fundador",
          "period": "Mar 2026 – Presente",
          "location": "Emiratos Árabes Unidos",
          "responsibilities": [
            "Organizando la relación entre estudiantes y tutores privados en una plataforma B2C y C2C."
          ],
          "tech": [
            "Estrategia de Negocios",
            "Arquitectura de Plataformas"
          ]
        },
        {
          "company": "Salesmrkt",
          "role": "Ingeniero de Software FullStack de IA",
          "period": "Sept 2025 – Mar 2026",
          "location": "Seattle, WA",
          "responsibilities": [
            "Convirtió un proyecto React a NextJS para mayor seguridad y flexibilidad.",
            "Desarrolló un sistema de chat con IA con recomendaciones y búsqueda profunda, respondiendo en 1.5s usando Gemini.",
            "Se relacionó directamente con clientes para solicitudes de actualización y soporte técnico.",
            "Actualizó la tienda Shopify con una nueva interfaz de usuario y configuraciones.",
            "Gestionó y desarrolló funciones para proveedores de servicios: Salesbox, Salesmrkt y GoTryOne usando NextJS, Tailwind, Firebase, Algolia y Zustand.",
            "Utilizó QuickBooks y Stripe para gestionar pagos y facturación complejos.",
            "Usó N8N para manejar la automatización de procesos complejos fuera del sistema principal."
          ],
          "tech": [
            "NextJS",
            "Tailwind",
            "Firebase",
            "Algolia",
            "Zustand",
            "QuickBooks",
            "Stripe",
            "N8N"
          ]
        },
        {
          "company": "Engages AI",
          "role": "Ingeniero de Software Fullstack",
          "period": "Ene 2024 – Ago 2025",
          "location": "Singapur",
          "responsibilities": [
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
          "tech": [
            "NestJS",
            "React",
            "PostgreSQL",
            "Redis",
            "RabbitMQ",
            "AWS Lambda",
            "GPT-4",
            "LangGraph",
            "PeerDB",
            "socket.io"
          ]
        },
        {
          "company": "QuickDesk",
          "role": "Pasante de Ingeniero de Software",
          "period": "Mayo 2023 – Dic 2023",
          "location": "WP, Kuala Lumpur",
          "responsibilities": [
            "Contribuyó al desarrollo de aplicaciones web CRM; desarrolló frontend en React.",
            "Implementó el backend utilizando NestJS, PostgreSQL, Redis y Alibaba ChatApp.",
            "Desarrolló chatbots de IA utilizando el marco Rasa."
          ],
          "tech": [
            "React",
            "NestJS",
            "PostgreSQL",
            "Redis",
            "Rasa",
            "Alibaba ChatApp"
          ]
        },
        {
          "company": "Universiti Sains Islam Malaysia",
          "role": "Analista de Sistemas",
          "period": "Oct 2022 – Abr 2023",
          "location": "Nilai, Malasia",
          "responsibilities": [
            "Modernizó los sistemas universitarios heredados migrando de PHP y Kotlin a React y React Native.",
            "Mejoró significativamente el rendimiento del sistema, la mantenibilidad y la experiencia del usuario.",
            "Apoyó aplicaciones móviles multiplataforma para la gestión de estudiantes."
          ],
          "tech": [
            "React",
            "React Native",
            "PHP",
            "Kotlin"
          ]
        },
        {
          "company": "Developer Student Club - UTM",
          "role": "Miembro del Equipo Técnico",
          "period": "Nov 2021 – Oct 2022",
          "location": "Johor Bahru, Malasia",
          "responsibilities": [
            "Exploró los campos de aprendizaje automático y aprendizaje profundo en IA para aprender y participar en talleres prácticos."
          ],
          "tech": [
            "Python",
            "Machine Learning",
            "Deep Learning"
          ]
        },
        {
          "company": "Freelancer.com",
          "role": "Desarrollador Web Frontend",
          "period": "Nov 2021 – Nov 2021",
          "location": "Remoto",
          "responsibilities": [
            "Desarrolló un sitio web de diario del clima conectado a una API del clima usando formularios HTML y Express.js para facilitar solicitudes interactivas de datos."
          ],
          "tech": [
            "HTML",
            "Express.js",
            "JavaScript",
            "Weather API"
          ]
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
                      description: "Entwicklung einer CRM-Chat-Applikation mit integrierten KI-Chatbot-Fähigkeiten.",
                      longDescription: "Leitete die Entwicklung einer CRM- und KI-gesteuerten Chatbot-Plattform. Implementierte Echtzeit-Kommunikation und automatisierte Kontaktgruppierung sowie Lead-Management-Workflows.",
                      tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "GPT-4", "socket.io"],
                      liveUrl: "https://chat.engages.ai",
                      videoUrl: "/engages-ai.mp4",
                      images: [{ src: "/engages-ai/chat.engages.ai_.png", desc: "Dashboard page for Engages AI staff" }, { src: "/engages-ai/chat.engages.ai_ (1).png", desc: "Dashboard page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (2).png", desc: "Contact / Leads page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (3).png", desc: "Broadcast Campaigns page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (4).png", desc: "Flow-based Rasa chatbot page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (5).png", desc: "Gen AI GPT chatbot page for Engages AI client for automated self-updated chatbots" }, { src: "/engages-ai/chat.engages.ai_ (6).png", desc: "Subscription page for Engages AI client for automated self-updated chatbots" }, { src: "/engages-ai/chat.engages.ai_ (7).png", desc: "Channels page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (8).png", desc: "Teams page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (9).png", desc: "Automation Workflow page - Builder component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (10).png", desc: "Automation Workflow page - Triggers component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (11).png", desc: "Automation Workflow page - Actions component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (12).png", desc: "Automation Workflow page - Webhook Action component for Engages AI client" },]
                    },
                    {
                      slug: "salesmrkt",
                      title: "Salesmrkt",
                      description: "Entwickelte Frontend-UI-Komponenten für Vertriebs- und Dienstleistungsanbieter.",
                      longDescription: "Kernentwickler für das Salesmrkt-Ökosystem mit Fokus auf die Automatisierung des Vertriebsprozesses für Dienstleister inklusive zentralisierter Lead-Management-Tools.",
                      tech: ["React", "Shopify", "N8N", "Calendly"],
                      liveUrl: "https://salesmrkt.com",
                      images: [{ src: "/salesmrkt/salesmrkt.com_.png", desc: "The main landing page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_campaigns-on-demand.png", desc: "The campaigns on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_schedule-growth-session.png", desc: "The sales, marketing and video production growth sessions on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_thank-you-ads.png", desc: "The thank you page that shows up when user books a session through N8N automation for Salesmrkt" }]
                    },
                    {
                      slug: "gotryone",
                      title: "GoTryOne",
                      description: "Spezialisierte Plattform für Dienstleister zur effizienten Verwaltung von Buchungen.",
                      longDescription: "Aufbau einer Buchungs- und Testmanagement-Plattform innerhalb des Salesbox-Ökosystems. Integriert mit QuickBooks und Stripe für nahtlose Finanzprozesse.",
                      tech: ["NextJS", "Firebase", "Algolia", "Zustand", "Stripe", "QuickBooks"],
                      liveUrl: "https://gotryone.com",
                      images: [{ src: "/gotryone/gotryone.com_.png", desc: "The main landing page for GoTryOne" }, { src: "/gotryone/gotryone.com_build.png", desc: "The inital page for AI Conversation chatbot in GoTryOne" }, { src: "/gotryone/gotryone.com_build (1).png", desc: "The AI Conversation chatbot in GoTryOne when user clicks on one of the options on the right" }, { src: "/gotryone/gotryone.com_build (2).png", desc: "The AI Conversation chatbot in GoTryOne when user clicks on one on the service name in the message then on see more button" }, { src: "/gotryone/gotryone.com_build (3).png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions using suggested answers" }, { src: "/gotryone/gotryone.com_build (3).png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions and gets a more details analysis to his business" }, { src: "/gotryone/gotryone.com_build_conversation_UlWX8rZYYAGENieuWiu9.png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions and gets a bundle service discount to his business" }, { src: "/gotryone/gotryone.com_build_conversation_UlWX8rZYYAGENieuWiu9.png", desc: "The AI Conversation chatbot in GoTryOne when user gets a deep research insights about his business" }, { src: "/gotryone/gotryone.com_profile.png", desc: "The profile page for GoTryOne" }]
                    },
                    {
                      slug: "utmsir",
                      title: "UTMSIR",
                      description: "KI-gestützte Web-Lösung für internationale Studentenunterkünfte mit automatischer Zimmerzuweisung.",
                      longDescription: "Abschlussprojekt an der UTM. Entwicklung eines webbasierten Wohnheim-Verwaltungssystems für internationale Studenten. Enthält eine KI-Empfehlungs-Engine für die Zimmerzuweisung.",
                      tech: ["MongoDB", "Express", "React", "Node.js", "Python", "AI Recommendation"],
                      category: "university-projects"
                    },
                    {
                      slug: "quickbooks-n8n",
                      title: "QuickBooks N8N-Automatisierung",
                      description: "Robuste Integration zur Rechnungs- und Kundenerstellung per Webhook.",
                      longDescription: "Wird zur automatischen Erstellung von Rechnungen und Kunden verwendet. Im zweiten Verlauf werden Rechnungen direkt per E-Mail angefordert.",
                      tech: ["N8N", "QuickBooks", "Webhooks", "Automation"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/quickbooks-n8n.png",
                          desc: "Quickbooks with 2 webhook requests: the first one to create invoices and the second one to send invoice emails to the client for payment."
                        },
                        {
                          src: "/quickbooks-n8n2.png",
                          desc: "Used to create customers and items in the account if they aren't created before."
                        }
                      ]
                    },
                    {
                      slug: "calendly-n8n",
                      title: "Calendly Automatisierung",
                      description: "Automatisierter Workflow zur Synchronisierung von Calendly Terminen.",
                      longDescription: "Dieses System wartet auf Calendly-Hooks und steuert dann Benachrichtigungen, Aktualisierungen und mehr automatisch durch.",
                      tech: ["N8N", "Calendly", "Webhooks", "Automation"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/calendly-n8n.png",
                          desc: "Overview of the Calendly automation workflow in N8N handling new appointments."
                        }
                      ]
                    },
                    {
                      slug: "ai-audit-report-n8n",
                      title: "KI Audit Pipeline",
                      description: "Eine N8N Automatisierung, welche Audits generiert und verwaltet.",
                      longDescription: "Die Formulare fließen in LLMs ein, um strukturierte Schlussfolgerungen und Berichte automatisch zusammenzufügen. Das senkt massiv Arbeitsstunden ab.",
                      tech: ["N8N", "AI Pipeline", "Automation", "GPT-4"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/ai-pipeline-for-audit-report-form-n8n.png",
                          desc: "Overview of the AI pipeline N8N automation for audit report form processing."
                        }
                      ]
                    },
                    {
                      slug: "slack-captured-lead-n8n",
                      title: "Slack Leads Integration",
                      description: "Sobald ein Lead eingeht, meldet N8N alle Metriken an definierte Slack Kanäle.",
                      longDescription: "Führt Daten an einem Ort zusammen, formatiert sie schön auf und sendet Benachrichtigungsfeuer ab, um dem Sales-Team im Auge zu helfen, sobald das Lead-Form gedrückt wird.",
                      tech: ["N8N", "Slack", "Webhooks", "Lead Generation"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/slack-captured-lead-n8n.png",
                          desc: "First part of the Slack lead capture workflow in N8N."
                        },
                        {
                          src: "/slack-captured-lead-n8n2.png",
                          desc: "Detail of the routing and message formatting before dispatching to Slack."
                        }
                      ]
                    },
                    {
                      slug: "zack-thompson-portfolio",
                      title: "Zack Thompson Webseite",
                      description: "Eine sehr performante Webseite für Zack Thompson (zackthompson.com).",
                      longDescription: "Umfassendes Portfolio System inklusive schneller Architektur mit React, um die Personal Brand und Skills im besten Licht zu präsentieren.",
                      liveUrl: "https://zackthompson.com/",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/zack-website-portfolio.png",
                          desc: "Landing page view of Zack Thompson's portfolio website"
                        }
                      ]
                    },
                    {
                      slug: "meetjoegreco-portfolio",
                      title: "Joe Greco Web-Präsenz",
                      description: "Digitale Marke auf meetjoegreco.com für einen bekannten Experten.",
                      longDescription: "Zeichnet sich durch moderne Web Standards aus. Die Performance der Site, UI/UX, wurden komplett optimiert um Leaderhip Fähigkeiten klar zu zeigen.",
                      liveUrl: "https://meetjoegreco.com/",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/meetjoegreco-website-portfolio.png",
                          desc: "Landing page view of Joe Greco's portfolio website"
                        }
                      ]
                    },
                    {
                      slug: "joe-website-portfolio",
                      title: "Joe Portfolio & Sales Site",
                      description: "Ein dedizierter Sales-Kanal inklusive Portfolio-Architektur.",
                      longDescription: "Design und Entwicklung zur Conversion-Optimierung, wodurch sich Besucherzahlen in Anfragen umwandeln dank toller UI/UX Gestaltung.",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/joe-website-portfolio.png",
                          desc: "Landing page view of the Joe Website Portfolio"
                        }
                      ]
                    },
                    {
                      slug: "grn-shoreline-portfolio",
                      title: "GRN Shoreline Webseite",
                      description: "Unternehmenswebseite aufgebaut auf Vorgabe durch Matthew Curran.",
                      longDescription: "Volles Projekt von Zero zur Fertigstellung. Die GRN Präsenz hat jetzt schnelle Ladezeiten und erfüllt den digitalen Unternehmensbedarf mit modernem Styling.",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/grn-shoreline-website-portfolio.png",
                          desc: "Landing page view of the GRN Shoreline website"
                        }
                      ]
                    }
                  ]
    },
    experience: {
      title: "Berufserfahrung",
      items: [
        {
          "company": "Mind Step Tutor",
          "role": "Gründer",
          "period": "März 2026 – Heute",
          "location": "Vereinigte Arabische Emirate",
          "responsibilities": [
            "Organisation der Beziehung zwischen Studenten und Privatlehrern auf einer B2C- und C2C-Plattform."
          ],
          "tech": [
            "Geschäftsstrategie",
            "Plattformarchitektur"
          ]
        },
        {
          "company": "Salesmrkt",
          "role": "AI FullStack Software Entwickler",
          "period": "Sept 2025 – März 2026",
          "location": "Seattle, WA",
          "responsibilities": [
            "Konvertierte ein React-Projekt zu NextJS für verbesserte Sicherheit und Flexibilität.",
            "Entwickelte ein KI-Chat-System mit Empfehlungen und Tiefensuche, das mit Gemini in 1,5s antwortet.",
            "Direkte Zusammenarbeit mit Kunden für Update-Anfragen und technischen Support.",
            "Aktualisierte den Shopify-Store mit neuem Template-UI und Konfigurationen.",
            "Verwaltete und entwickelte Funktionen für Dienstanbieter: Salesbox, Salesmrkt und GoTryOne mit NextJS, Tailwind, Firebase, Algolia und Zustand.",
            "Nutzte QuickBooks und Stripe für komplexe Zahlungen und Rechnungsstellung.",
            "Verwendete N8N für komplexe Prozessautomatisierung außerhalb des Hauptsystems."
          ],
          "tech": [
            "NextJS",
            "Tailwind",
            "Firebase",
            "Algolia",
            "Zustand",
            "QuickBooks",
            "Stripe",
            "N8N"
          ]
        },
        {
          "company": "Engages AI",
          "role": "Fullstack Software Entwickler",
          "period": "Jan 2024 – Aug 2025",
          "location": "Singapur",
          "responsibilities": [
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
          "tech": [
            "NestJS",
            "React",
            "PostgreSQL",
            "Redis",
            "RabbitMQ",
            "AWS Lambda",
            "GPT-4",
            "LangGraph",
            "PeerDB",
            "socket.io"
          ]
        },
        {
          "company": "QuickDesk",
          "role": "Software Entwickler Praktikant",
          "period": "Mai 2023 – Dez 2023",
          "location": "WP, Kuala Lumpur",
          "responsibilities": [
            "Trug zur Entwicklung von CRM-Webanwendungen bei; entwickelte das Frontend in React.",
            "Implementierte das Backend mit NestJS, PostgreSQL, Redis und Alibaba ChatApp.",
            "Entwickelte KI-Chatbots mit dem Rasa-Framework."
          ],
          "tech": [
            "React",
            "NestJS",
            "PostgreSQL",
            "Redis",
            "Rasa",
            "Alibaba ChatApp"
          ]
        },
        {
          "company": "Universiti Sains Islam Malaysia",
          "role": "Systemanalytiker",
          "period": "Okt 2022 – Apr 2023",
          "location": "Nilai, Malaysia",
          "responsibilities": [
            "Modernisierte veraltete Universitätssysteme durch Migration von PHP und Kotlin zu React und React Native.",
            "Verbesserte die Systemleistung, Wartbarkeit und Benutzererfahrung erheblich.",
            "Unterstützte plattformübergreifende mobile Anwendungen für das Studentenmanagement."
          ],
          "tech": [
            "React",
            "React Native",
            "PHP",
            "Kotlin"
          ]
        },
        {
          "company": "Developer Student Club - UTM",
          "role": "Technisches Teammitglied",
          "period": "Nov 2021 – Okt 2022",
          "location": "Johor Bahru, Malaysia",
          "responsibilities": [
            "Erforschte die Bereiche maschinelles Lernen und Deep Learning in KI, um zu lernen und an praktischen Workshops teilzunehmen."
          ],
          "tech": [
            "Python",
            "Machine Learning",
            "Deep Learning"
          ]
        },
        {
          "company": "Freelancer.com",
          "role": "Frontend Web Entwickler",
          "period": "Nov 2021 – Nov 2021",
          "location": "Remote",
          "responsibilities": [
            "Entwickelte eine Wetter-Journal-Website, die mit einer Wetter-API verbunden ist, unter Verwendung von HTML-Formularen und Express.js, um interaktive Datenanforderungen zu erleichtern."
          ],
          "tech": [
            "HTML",
            "Express.js",
            "JavaScript",
            "Weather API"
          ]
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
                      description: "CRM-чат-приложение с интегрированными возможностями искусственного интеллекта.",
                      longDescription: "Руководил разработкой CRM и платформы ИИ-чат-ботов. Внедрил коммуникацию в реальном времени и автоматизацию рабочих процессов для управления лидами.",
                      tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "GPT-4", "socket.io"],
                      liveUrl: "https://chat.engages.ai",
                      videoUrl: "/engages-ai.mp4",
                      images: [{ src: "/engages-ai/chat.engages.ai_.png", desc: "Dashboard page for Engages AI staff" }, { src: "/engages-ai/chat.engages.ai_ (1).png", desc: "Dashboard page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (2).png", desc: "Contact / Leads page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (3).png", desc: "Broadcast Campaigns page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (4).png", desc: "Flow-based Rasa chatbot page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (5).png", desc: "Gen AI GPT chatbot page for Engages AI client for automated self-updated chatbots" }, { src: "/engages-ai/chat.engages.ai_ (6).png", desc: "Subscription page for Engages AI client for automated self-updated chatbots" }, { src: "/engages-ai/chat.engages.ai_ (7).png", desc: "Channels page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (8).png", desc: "Teams page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (9).png", desc: "Automation Workflow page - Builder component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (10).png", desc: "Automation Workflow page - Triggers component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (11).png", desc: "Automation Workflow page - Actions component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (12).png", desc: "Automation Workflow page - Webhook Action component for Engages AI client" },]
                    },
                    {
                      slug: "salesmrkt",
                      title: "Salesmrkt",
                      description: "Платформа компонентов интерфейса для отделов продаж и поставщиков услуг.",
                      longDescription: "Ключевой разработчик экосистемы Salesmrkt, специализирующийся на автоматизации воронки продаж и централизованном управлении лидами.",
                      tech: ["React", "Shopify", "N8N", "Calendly"],
                      liveUrl: "https://salesmrkt.com",
                      images: [{ src: "/salesmrkt/salesmrkt.com_.png", desc: "The main landing page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_campaigns-on-demand.png", desc: "The campaigns on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_schedule-growth-session.png", desc: "The sales, marketing and video production growth sessions on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_thank-you-ads.png", desc: "The thank you page that shows up when user books a session through N8N automation for Salesmrkt" }]
                    },
                    {
                      slug: "gotryone",
                      title: "GoTryOne",
                      description: "Специализированная платформа для поставщиков услуг для управления бронированием.",
                      longDescription: "Создал платформу бронирования в экосистеме Salesbox с интеграцией QuickBooks и Stripe.",
                      tech: ["NextJS", "Firebase", "Algolia", "Zustand", "Stripe", "QuickBooks"],
                      liveUrl: "https://gotryone.com",
                      images: [{ src: "/gotryone/gotryone.com_.png", desc: "The main landing page for GoTryOne" }, { src: "/gotryone/gotryone.com_build.png", desc: "The inital page for AI Conversation chatbot in GoTryOne" }, { src: "/gotryone/gotryone.com_build (1).png", desc: "The AI Conversation chatbot in GoTryOne when user clicks on one of the options on the right" }, { src: "/gotryone/gotryone.com_build (2).png", desc: "The AI Conversation chatbot in GoTryOne when user clicks on one on the service name in the message then on see more button" }, { src: "/gotryone/gotryone.com_build (3).png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions using suggested answers" }, { src: "/gotryone/gotryone.com_build (3).png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions and gets a more details analysis to his business" }, { src: "/gotryone/gotryone.com_build_conversation_UlWX8rZYYAGENieuWiu9.png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions and gets a bundle service discount to his business" }, { src: "/gotryone/gotryone.com_build_conversation_UlWX8rZYYAGENieuWiu9.png", desc: "The AI Conversation chatbot in GoTryOne when user gets a deep research insights about his business" }, { src: "/gotryone/gotryone.com_profile.png", desc: "The profile page for GoTryOne" }]
                    },
                    {
                      slug: "utmsir",
                      title: "UTMSIR",
                      description: "Веб-решение с поддержкой ИИ для размещения иностранных студентов.",
                      longDescription: "Разработал систему управления общежитиями для студентов с алгоритмами ИИ для подбора соседей и комнат.",
                      tech: ["MongoDB", "Express", "React", "Node.js", "Python", "AI Recommendation"],
                      category: "university-projects"
                    },
                    {
                      slug: "quickbooks-n8n",
                      title: "Интеграция QuickBooks & N8N",
                      description: "Автоматизация вебхуков для QuickBooks, создание клиентов и отправка счет-фактур.",
                      longDescription: "Создает счета для QuickBooks в фоновом режиме, генерируя автоматические счета к оплате и транслируя уведомления клиентам.",
                      tech: ["N8N", "QuickBooks", "Webhooks", "Automation"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/quickbooks-n8n.png",
                          desc: "Quickbooks with 2 webhook requests: the first one to create invoices and the second one to send invoice emails to the client for payment."
                        },
                        {
                          src: "/quickbooks-n8n2.png",
                          desc: "Used to create customers and items in the account if they aren't created before."
                        }
                      ]
                    },
                    {
                      slug: "calendly-n8n",
                      title: "Связка Calendly & N8N",
                      description: "Автоматизированная синхронизация встреч из Calendly в корпоративные системы.",
                      longDescription: "Непрерывно прислушивается к событиям Calendly и автоматически рассылает обновления команде и синхронизирует встречи в БД.",
                      tech: ["N8N", "Calendly", "Webhooks", "Automation"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/calendly-n8n.png",
                          desc: "Overview of the Calendly automation workflow in N8N handling new appointments."
                        }
                      ]
                    },
                    {
                      slug: "ai-audit-report-n8n",
                      title: "ИИ обработчик отчетов",
                      description: "Сеть N8N по генерации отчетов автоматического аудита через нейросети.",
                      longDescription: "Пайплайн на основе глубоких ИИ-алгоритмов автоматически переводит формы отчетности в структурированные документы с бизнес-аналитикой.",
                      tech: ["N8N", "AI Pipeline", "Automation", "GPT-4"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/ai-pipeline-for-audit-report-form-n8n.png",
                          desc: "Overview of the AI pipeline N8N automation for audit report form processing."
                        }
                      ]
                    },
                    {
                      slug: "slack-captured-lead-n8n",
                      title: "Генератор лидов в Slack",
                      description: "Система маршрутизации данных о потенциальных клиентах сразу в Slack.",
                      longDescription: "Как только данные клиента получены, скрипт форматирует сообщение и доставляет его сотрудникам для мгновенного ответа.",
                      tech: ["N8N", "Slack", "Webhooks", "Lead Generation"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/slack-captured-lead-n8n.png",
                          desc: "First part of the Slack lead capture workflow in N8N."
                        },
                        {
                          src: "/slack-captured-lead-n8n2.png",
                          desc: "Detail of the routing and message formatting before dispatching to Slack."
                        }
                      ]
                    },
                    {
                      slug: "zack-thompson-portfolio",
                      title: "Сайт Zack Thompson",
                      description: "Сайт-портфолио, построенный для представления бренда Зак Томпсон.",
                      longDescription: "Полная инфраструктура веб-портфолио на NextJS. Обладает высочайшим показателем производительности и дизайна.",
                      liveUrl: "https://zackthompson.com/",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/zack-website-portfolio.png",
                          desc: "Landing page view of Zack Thompson's portfolio website"
                        }
                      ]
                    },
                    {
                      slug: "meetjoegreco-portfolio",
                      title: "Сайт Джо Греко",
                      description: "Профессиональный веб-сайт-визитка для топ-менеджера (meetjoegreco.com).",
                      longDescription: "Дорогая платформа для CEO Джо Греко, нацеленная на современный дизайн и высокую скорость работы приложения.",
                      liveUrl: "https://meetjoegreco.com/",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/meetjoegreco-website-portfolio.png",
                          desc: "Landing page view of Joe Greco's portfolio website"
                        }
                      ]
                    },
                    {
                      slug: "joe-website-portfolio",
                      title: "Joe Landing Page",
                      description: "Цифровой профиль и конверсионный лендинг",
                      longDescription: "Качественная верстка и функциональный NextJS лендинг для эффективной презентации бизнеса потенциальным клиентам.",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/joe-website-portfolio.png",
                          desc: "Landing page view of the Joe Website Portfolio"
                        }
                      ]
                    },
                    {
                      slug: "grn-shoreline-portfolio",
                      title: "Сайт компании GRN Shoreline",
                      description: "Улучшенное присутствие компании в сети, разработанное специально под нужды основателя Matthew Curran.",
                      longDescription: "Был разработан с нуля с поддержкой самых современных технологий, обеспечивая быстрый охват и великолепную оптимизацию для корпоративных целей.",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/grn-shoreline-website-portfolio.png",
                          desc: "Landing page view of the GRN Shoreline website"
                        }
                      ]
                    }
                  ]
    },
    experience: {
      title: "Опыт работы",
      items: [
        {
          "company": "Mind Step Tutor",
          "role": "Основатель",
          "period": "Март 2026 – Настоящее время",
          "location": "ОАЭ",
          "responsibilities": [
            "Организация отношений между студентами и частными репетиторами на платформе B2C и C2C."
          ],
          "tech": [
            "Business Strategy",
            "Platform Architecture"
          ]
        },
        {
          "company": "Salesmrkt",
          "role": "AI FullStack Software Engineer",
          "period": "Сент 2025 – Март 2026",
          "location": "Сиэтл, США",
          "responsibilities": [
            "Перевел проект с React на NextJS для повышения безопасности и гибкости.",
            "Разработал систему чата с ИИ с рекомендациями и глубоким поиском, отвечающую за 1,5 сек с использованием Gemini.",
            "Напрямую взаимодействовал с клиентами по вопросам обновления и технической поддержки.",
            "Обновил магазин Shopify с новым пользовательским интерфейсом и конфигурациями.",
            "Управлял и разрабатывал функции для поставщиков услуг: Salesbox, Salesmrkt и GoTryOne с использованием NextJS, Tailwind, Firebase, Algolia и Zustand.",
            "Использовал QuickBooks и Stripe для обработки сложных платежей и выставления счетов.",
            "Использовал N8N для автоматизации сложных процессов вне основной системы."
          ],
          "tech": [
            "NextJS",
            "Tailwind",
            "Firebase",
            "Algolia",
            "Zustand",
            "QuickBooks",
            "Stripe",
            "N8N"
          ]
        },
        {
          "company": "Engages AI",
          "role": "Fullstack Software Engineer",
          "period": "Янв 2024 – Авг 2025",
          "location": "Сингапур",
          "responsibilities": [
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
          "tech": [
            "NestJS",
            "React",
            "PostgreSQL",
            "Redis",
            "RabbitMQ",
            "AWS Lambda",
            "GPT-4",
            "LangGraph",
            "PeerDB",
            "socket.io"
          ]
        },
        {
          "company": "QuickDesk",
          "role": "Инженер-стажер по программному обеспечению",
          "period": "Май 2023 – Дек 2023",
          "location": "Куала-Лумпур",
          "responsibilities": [
            "Внес вклад в разработку веб-приложения CRM; разработал фронтенд на React.",
            "Реализовал бэкенд с использованием NestJS, PostgreSQL, Redis и Alibaba ChatApp.",
            "Разработал ИИ-чат-ботов с использованием фреймворка Rasa."
          ],
          "tech": [
            "React",
            "NestJS",
            "PostgreSQL",
            "Redis",
            "Rasa",
            "Alibaba ChatApp"
          ]
        },
        {
          "company": "Universiti Sains Islam Malaysia",
          "role": "Системный аналитик",
          "period": "Окт 2022 – Апр 2023",
          "location": "Малайзия",
          "responsibilities": [
            "Модернизировал устаревшие университетские системы, перейдя с PHP и Kotlin на React и React Native.",
            "Значительно улучшил производительность системы, удобство обслуживания и пользовательский опыт.",
            "Разрабатывал и поддерживал кроссплатформенные мобильные приложения для управления студентами."
          ],
          "tech": [
            "React",
            "React Native",
            "PHP",
            "Kotlin"
          ]
        },
        {
          "company": "Developer Student Club - UTM",
          "role": "Член технической команды",
          "period": "Ноя 2021 – Окт 2022",
          "location": "Джохор-Бару, Малайзия",
          "responsibilities": [
            "Изучал машинное обучение и глубокое обучение в области ИИ для участия в практических семинарах."
          ],
          "tech": [
            "Python",
            "Machine Learning",
            "Deep Learning"
          ]
        },
        {
          "company": "Freelancer.com",
          "role": "Frontend Web Разработчик",
          "period": "Ноя 2021 – Ноя 2021",
          "location": "Удаленно",
          "responsibilities": [
            "Разработал веб-сайт журнала погоды, подключенный к API погоды с использованием HTML-форм и Express.js."
          ],
          "tech": [
            "HTML",
            "Express.js",
            "JavaScript",
            "Weather API"
          ]
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
                      description: "Application de chat CRM intégrée à des capacités de chatbot IA.",
                      longDescription: "A dirigé le développement de la plateforme CRM avec une communication en temps réel et des flux de gestion des pistes complexes via des chatbots.",
                      tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "GPT-4", "socket.io"],
                      liveUrl: "https://chat.engages.ai",
                      videoUrl: "/engages-ai.mp4",
                      images: [{ src: "/engages-ai/chat.engages.ai_.png", desc: "Dashboard page for Engages AI staff" }, { src: "/engages-ai/chat.engages.ai_ (1).png", desc: "Dashboard page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (2).png", desc: "Contact / Leads page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (3).png", desc: "Broadcast Campaigns page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (4).png", desc: "Flow-based Rasa chatbot page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (5).png", desc: "Gen AI GPT chatbot page for Engages AI client for automated self-updated chatbots" }, { src: "/engages-ai/chat.engages.ai_ (6).png", desc: "Subscription page for Engages AI client for automated self-updated chatbots" }, { src: "/engages-ai/chat.engages.ai_ (7).png", desc: "Channels page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (8).png", desc: "Teams page for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (9).png", desc: "Automation Workflow page - Builder component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (10).png", desc: "Automation Workflow page - Triggers component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (11).png", desc: "Automation Workflow page - Actions component for Engages AI client" }, { src: "/engages-ai/chat.engages.ai_ (12).png", desc: "Automation Workflow page - Webhook Action component for Engages AI client" },]
                    },
                    {
                      slug: "salesmrkt",
                      title: "Salesmrkt",
                      description: "Développement d'interfaces utilisateur frontend pour la vente et le service.",
                      longDescription: "Développeur principal de l'écosystème Salesmrkt, spécialisé dans l'optimisation des tunnels de vente pour les fournisseurs de services via de nombreux outils de gestion.",
                      tech: ["React", "Shopify", "N8N", "Calendly"],
                      liveUrl: "https://salesmrkt.com",
                      images: [{ src: "/salesmrkt/salesmrkt.com_.png", desc: "The main landing page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_campaigns-on-demand.png", desc: "The campaigns on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_schedule-growth-session.png", desc: "The sales, marketing and video production growth sessions on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_thank-you-ads.png", desc: "The thank you page that shows up when user books a session through N8N automation for Salesmrkt" }]
                    },
                    {
                      slug: "gotryone",
                      title: "GoTryOne",
                      description: "Plateforme spécialisée de réservation et d'essais pour les fournisseurs.",
                      longDescription: "Mise en place d'une plateforme de réservation au sein de l'écosystème Salesbox, intégrée avec des modules comme QuickBooks et Stripe.",
                      tech: ["NextJS", "Firebase", "Algolia", "Zustand", "Stripe", "QuickBooks"],
                      liveUrl: "https://gotryone.com",
                      images: [{ src: "/gotryone/gotryone.com_.png", desc: "The main landing page for GoTryOne" }, { src: "/gotryone/gotryone.com_build.png", desc: "The inital page for AI Conversation chatbot in GoTryOne" }, { src: "/gotryone/gotryone.com_build (1).png", desc: "The AI Conversation chatbot in GoTryOne when user clicks on one of the options on the right" }, { src: "/gotryone/gotryone.com_build (2).png", desc: "The AI Conversation chatbot in GoTryOne when user clicks on one on the service name in the message then on see more button" }, { src: "/gotryone/gotryone.com_build (3).png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions using suggested answers" }, { src: "/gotryone/gotryone.com_build (3).png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions and gets a more details analysis to his business" }, { src: "/gotryone/gotryone.com_build_conversation_UlWX8rZYYAGENieuWiu9.png", desc: "The AI Conversation chatbot in GoTryOne when user answers more questions and gets a bundle service discount to his business" }, { src: "/gotryone/gotryone.com_build_conversation_UlWX8rZYYAGENieuWiu9.png", desc: "The AI Conversation chatbot in GoTryOne when user gets a deep research insights about his business" }, { src: "/gotryone/gotryone.com_profile.png", desc: "The profile page for GoTryOne" }]
                    },
                    {
                      slug: "utmsir",
                      title: "UTMSIR",
                      description: "Solution web améliorée par l'IA pour l'hébergement d'étudiants internationaux.",
                      longDescription: "Système de gestion web d'attributions de chambres et un moteur d'IA de correspondance développé pour le projet final à l'université UTM.",
                      tech: ["MongoDB", "Express", "React", "Node.js", "Python", "AI Recommendation"],
                      category: "university-projects"
                    },
                    {
                      slug: "quickbooks-n8n",
                      title: "Automatisation de QuickBooks",
                      description: "Flux automatique N8N qui crée des factures de QuickBooks et des demandes de paiement",
                      longDescription: "Deux processus webhook qui servent à émettre les données automatiquement vers QuickBooks puis à relayer l'état pour les courriels clients.",
                      tech: ["N8N", "QuickBooks", "Webhooks", "Automation"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/quickbooks-n8n.png",
                          desc: "Quickbooks with 2 webhook requests: the first one to create invoices and the second one to send invoice emails to the client for payment."
                        },
                        {
                          src: "/quickbooks-n8n2.png",
                          desc: "Used to create customers and items in the account if they aren't created before."
                        }
                      ]
                    },
                    {
                      slug: "calendly-n8n",
                      title: "Automatisation de Calendly",
                      description: "Flux de données automatisé depuis Calendly qui synchronise rendez-vous.",
                      longDescription: "Le workflow connecte Calendly à nos systèmes en traitant l'acheminement des données pour notifications, réservations, actions consécutives etc.",
                      tech: ["N8N", "Calendly", "Webhooks", "Automation"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/calendly-n8n.png",
                          desc: "Overview of the Calendly automation workflow in N8N handling new appointments."
                        }
                      ]
                    },
                    {
                      slug: "ai-audit-report-n8n",
                      title: "Pipeline IA des audits",
                      description: "Automatisation de récupération et rapport généré par l'IA.",
                      longDescription: "Traite avec ingéniosité des formulaires, en tirant parti des LLM (modèles de langage IA) pour concevoir et extraire un audit formel.",
                      tech: ["N8N", "AI Pipeline", "Automation", "GPT-4"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/ai-pipeline-for-audit-report-form-n8n.png",
                          desc: "Overview of the AI pipeline N8N automation for audit report form processing."
                        }
                      ]
                    },
                    {
                      slug: "slack-captured-lead-n8n",
                      title: "Slack Alerte du Client",
                      description: "Un flux web automatisé recevant des requêtes clients redirigées vers un canal Slack",
                      longDescription: "Structure instantanément et achemine en un temps record chaque piste client en enrichissant le message mis dans Slack afin d'agir vit.",
                      tech: ["N8N", "Slack", "Webhooks", "Lead Generation"],
                      category: "n8n-automations",
                      images: [
                        {
                          src: "/slack-captured-lead-n8n.png",
                          desc: "First part of the Slack lead capture workflow in N8N."
                        },
                        {
                          src: "/slack-captured-lead-n8n2.png",
                          desc: "Detail of the routing and message formatting before dispatching to Slack."
                        }
                      ]
                    },
                    {
                      slug: "zack-thompson-portfolio",
                      title: "Portfolio de Zack Thompson",
                      description: "Un site web complet moderne axé sur les performances et construit pour zackthompson.com",
                      longDescription: "Le portfolio offre des interactions dynamiques et témoigne d'un style irréprochable et épuré. Réalisé avec NextJS.",
                      liveUrl: "https://zackthompson.com/",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/zack-website-portfolio.png",
                          desc: "Landing page view of Zack Thompson's portfolio website"
                        }
                      ]
                    },
                    {
                      slug: "meetjoegreco-portfolio",
                      title: "Site du CEO Joe Greco",
                      description: "Site web prestigieux pour un dirigeant qui se présente comme un hub central.",
                      longDescription: "Portfolio premium propulsé à haute disponibilité. Transmet une clarté et un dynamisme absolu par animations modernes.",
                      liveUrl: "https://meetjoegreco.com/",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/meetjoegreco-website-portfolio.png",
                          desc: "Landing page view of Joe Greco's portfolio website"
                        }
                      ]
                    },
                    {
                      slug: "joe-website-portfolio",
                      title: "Page de destination de Joe",
                      description: "Un portail en ligne favorisant la conversion et la vente ciblée.",
                      longDescription: "Rendu du site Web de Joe avec un accent tout particulier sur la rétention du client à travers un design interactif et fluide.",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/joe-website-portfolio.png",
                          desc: "Landing page view of the Joe Website Portfolio"
                        }
                      ]
                    },
                    {
                      slug: "grn-shoreline-portfolio",
                      title: "Site web de GRN Shoreline",
                      description: "Plateforme robuste créée avec soin afin de positionner fortement l'entreprise.",
                      longDescription: "Développement d'un projet clé avec M. Matthew Curran avec tous les réglages et architectures pour assurer de longues heures d'exposition digitale fiable.",
                      tech: ["NextJS", "React", "Web Design", "UI/UX"],
                      category: "client-portfolios",
                      images: [
                        {
                          src: "/grn-shoreline-website-portfolio.png",
                          desc: "Landing page view of the GRN Shoreline website"
                        }
                      ]
                    }
                  ]
    },
    experience: {
      title: "Expérience Professionnelle",
      items: [
        {
          "company": "Mind Step Tutor",
          "role": "Fondateur",
          "period": "Mars 2026 – Présent",
          "location": "Émirats Arabes Unis",
          "responsibilities": [
            "Organisation de la relation entre les étudiants et les tuteurs privés dans une plateforme B2C et C2C."
          ],
          "tech": [
            "Stratégie d'Entreprise",
            "Architecture de Plateforme"
          ]
        },
        {
          "company": "Salesmrkt",
          "role": "Ingénieur Logiciel IA FullStack",
          "period": "Sept 2025 – Mars 2026",
          "location": "Seattle, WA",
          "responsibilities": [
            "Converti un projet React en NextJS pour une sécurité et une flexibilité accrues.",
            "Développé un système de chat IA avec recommandations et recherche approfondie, répondant en 1,5 s via Gemini.",
            "Interagi directement avec les clients pour les demandes de mise à jour et le support technique.",
            "Mis à jour la boutique Shopify avec une nouvelle interface utilisateur et des configurations.",
            "Géré et développé des fonctionnalités pour les prestataires de services : Salesbox, Salesmrkt et GoTryOne en utilisant NextJS, Tailwind, Firebase, Algolia et Zustand.",
            "Utilisé QuickBooks et Stripe pour gérer les paiements et la facturation complexes.",
            "Utilisé N8N pour gérer l'automatisation de processus complexes en dehors du système principal."
          ],
          "tech": [
            "NextJS",
            "Tailwind",
            "Firebase",
            "Algolia",
            "Zustand",
            "QuickBooks",
            "Stripe",
            "N8N"
          ]
        },
        {
          "company": "Engages AI",
          "role": "Ingénieur Logiciel Full Stack",
          "period": "Jan 2024 – Août 2025",
          "location": "Singapour",
          "responsibilities": [
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
          "tech": [
            "NestJS",
            "React",
            "PostgreSQL",
            "Redis",
            "RabbitMQ",
            "AWS Lambda",
            "GPT-4",
            "LangGraph",
            "PeerDB",
            "socket.io"
          ]
        },
        {
          "company": "QuickDesk",
          "role": "Stagiaire Ingénieur Logiciel",
          "period": "Mai 2023 – Déc 2023",
          "location": "WP, Kuala Lumpur",
          "responsibilities": [
            "A contribué au développement d'applications Web CRM ; a développé le frontend en React.",
            "Realisé le backend à l'aide de NestJS, PostgreSQL, Redis et Alibaba ChatApp.",
            "Développé des chatbots IA à l'aide du framework Rasa."
          ],
          "tech": [
            "React",
            "NestJS",
            "PostgreSQL",
            "Redis",
            "Rasa",
            "Alibaba ChatApp"
          ]
        },
        {
          "company": "Universiti Sains Islam Malaysia",
          "role": "Analyste Système",
          "period": "Oct 2022 – Avr 2023",
          "location": "Nilai, Malaisie",
          "responsibilities": [
            "Modernisé les systèmes universitaires existants en migrant de PHP et Kotlin vers React et React Native.",
            "Amélioré considérablement les performances du système, la maintenabilité et l'expérience utilisateur.",
            "Soutenu des applications mobiles multiplateformes pour la gestion des étudiants."
          ],
          "tech": [
            "React",
            "React Native",
            "PHP",
            "Kotlin"
          ]
        },
        {
          "company": "Developer Student Club - UTM",
          "role": "Membre de l'équipe technique",
          "period": "Nov 2021 – Oct 2022",
          "location": "Johor Bahru, Malaisie",
          "responsibilities": [
            "A exploré les domaines du machine learning et du deep learning en IA pour apprendre et participer à des ateliers pratiques."
          ],
          "tech": [
            "Python",
            "Machine Learning",
            "Deep Learning"
          ]
        },
        {
          "company": "Freelancer.com",
          "role": "Développeur Web Frontend",
          "period": "Nov 2021 – Nov 2021",
          "location": "À distance",
          "responsibilities": [
            "Développé un site Web de journal météo connecté à une API météo à l'aide de formulaires HTML et d'Express.js."
          ],
          "tech": [
            "HTML",
            "Express.js",
            "JavaScript",
            "Weather API"
          ]
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
