"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Language = 'en' | 'ar' | 'es' | 'de' | 'ru' | 'fr';

interface Translations {
  nav: {
    home: string;
    work: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    about: string;
    contact: string;
    resume: string;
  };
  hero: {
    location: string;
    title: string;
    headline: string;
    description: string;
    cta_projects: string;
    cta_resume: string;
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
      frontend: string;
      backend: string;
      data: string;
      ai: string;
      cloud: string;
      observability: string;
      mobile: string;
      commerce: string;
      tools: string;
    };
  };
  projects: {
    title: string;
    moreCategories: string;
    learnMore: string;
    viewProjects: string;
    backToProjects: string;
    categoryTitles: Record<string, string>;
    categories: Array<{
      title: string;
      icon: string;
      slug: string;
      desc: string;
    }>;
    featuredTitle: string;
    selectedTitle: string;
    independentTitle: string;
    caseStudy: string;
    items: Array<{
      slug: string;
      title: string;
      description: string;
      longDescription: string;
      tech: string[];
      liveUrl?: string;
      videoUrl?: string;
      category?: string;
      featured?: boolean;
      organization?: string;
      role?: string;
      productCategory?: string;
      achievements?: string[];
      ctaLabel?: string;
      icon?: string;
      images?: Array<{
        src: string;
        desc: string;
      }>;
    }>;
  };
  education: {
    title: string;
    degree: string;
    school: string;
    period: string;
    cgpa: string;
    certificationsTitle: string;
    certifications: Array<{
      name: string;
      issuer: string;
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
    nav: { home: "Home", work: "Work", experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", about: "About", contact: "Contact", resume: "Resume" },
    hero: {
      location: "Selangor, Malaysia",
      title: "AI Full Stack Software Engineer",
      headline: "Building complex SaaS products from architecture to delivery.",
      description: "I independently develop frontend applications, backend systems, and AI-enabled workflows, combining product thinking with hands-on engineering. My recent work includes four software projects at Frequency Digital Group, alongside prior experience with CRM platforms, real-time applications, and scalable services.",
      cta_projects: "Explore My Work",
      cta_resume: "Download Resume",
      cta_contact: "Get in Touch"
    },
    about: {
      title: "About Me",
      subtitle: "Full product ownership across frontend, backend, and AI-enabled products",
      bio_title: "Professional Summary",
      bio_p1: "I am a full stack software engineer with experience across frontend development, backend architecture, AI-enabled product functionality, workflow automation, and mobile applications.",
      bio_p2: "At Frequency Digital Group, I am the sole developer of four distinct products, with responsibility spanning application architecture, product implementation, and ongoing improvements.",
      bio_p3: "My previous roles involved CRM platforms, real-time systems, microservices, data workflows, and reporting dashboards. I graduated from Universiti Teknologi Malaysia with a BSc in Software Engineering and a CGPA of 3.92.",
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
        { country: "Malaysia", countryCode: "MY", role: "Education, career, and current base" }
      ],
      languages_title: "Languages",
      languages: [
        { lang: "Arabic", level: "Native", code: "SA" },
        { lang: "English", level: "Professional", code: "US" },
        { lang: "Indonesian", level: "Beginner", code: "ID" }
      ]
    },
    skills: {
      title: "Skills",
      subtitle: "Engineering competencies grouped by specialty",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        data: "Data and real-time",
        ai: "AI and automation",
        cloud: "Cloud and delivery",
        observability: "Observability",
        mobile: "Mobile",
        commerce: "Commerce and business systems",
        tools: "Tools"
      }
    },
    projects: {
      title: "Featured Work",
      featuredTitle: "Frequency Digital Group",
      selectedTitle: "Selected Work",
      independentTitle: "Independent Projects",
      moreCategories: "More Categories",
      learnMore: "Learn More",
      caseStudy: "Case Study",
      viewProjects: "View Projects →",
      backToProjects: "← Back to Projects",
      categoryTitles: {
        "n8n-automations": "N8N Automations",
        "university-projects": "University Projects",
        "client-portfolios": "Client Portfolios",
        "selected-work": "Selected Work",
        "independent-projects": "Independent Projects",
      },
      categories: [
        { title: "Selected Work", icon: "🧩", slug: "selected-work", desc: "CRM, sales, and product work from earlier roles" },
        { title: "Independent Projects", icon: "🚀", slug: "independent-projects", desc: "Solo products built outside employment" },
        { title: "N8N Automations", icon: "🤖", slug: "n8n-automations", desc: "Automated workflows and integrations" },
        { title: "University Projects", icon: "🎓", slug: "university-projects", desc: "Academic research and assignments" },
        { title: "Client Portfolios", icon: "💼", slug: "client-portfolios", desc: "Portfolio websites made for customers" }
      ],
      items: [
        {
          slug: "review-revolution",
          title: "Review Revolution",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Sole full stack developer",
          productCategory: "AI-powered SaaS, customer experience, reputation management",
          description: "Independently developed a multi-module SaaS platform covering customer feedback, reputation operations, automated content workflows, analytics, and management dashboards, with ownership of frontend experiences, backend architecture, and AI-enabled functionality.",
          longDescription: "Designed frontend experiences, backend services, data models, and business workflows for a customer feedback and reputation intelligence platform. The product covers configurable feedback experiences, business profile management, AI-assisted workflows, automated publishing, analytics, and executive reporting.",
          achievements: [
            "Owns frontend, backend architecture, and AI-enabled functionality as the sole developer.",
            "Connects configurable feedback journeys with administration, analytics, and automation modules in one SaaS application."
          ],
          tech: ["Next.js", "TypeScript", "Backend APIs", "PostgreSQL", "AI workflows"],
          ctaLabel: "Case Study",
          liveUrl: "https://reviewrevolution.ai",
          icon: "/review-revolution/icon.png",
          images: [
            { src: "/review-revolution/homepage.png", desc: "Review Revolution homepage" },
            { src: "/review-revolution/features.png", desc: "Review Revolution reputation growth features" }
          ]
        },
        {
          slug: "daily-authority",
          title: "Daily Authority",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Sole full stack developer",
          productCategory: "Content and visibility product",
          description: "Independently owned product architecture, frontend and backend implementation, and publishing workflows for Review Revolution's content and visibility product.",
          longDescription: "Independently owned product architecture, frontend and backend implementation, application workflows, testing, deployment, and ongoing delivery. RR Daily Authority is the content and visibility product from Review Revolution. It plans a month of useful pages, then publishes one every day on a site the business owns so search engines and AI assistants have something real to quote.",
          achievements: [
            "Sole developer from architecture through deployment.",
            "Owns frontend, backend, workflows, testing, and ongoing delivery."
          ],
          tech: ["Full stack", "Product architecture", "Testing", "Deployment"],
          ctaLabel: "Case Study",
          liveUrl: "https://authority.reviewrevolution.ai",
          icon: "/daily-authority/icon.png",
          images: [
            { src: "/daily-authority/homepage.png", desc: "RR Daily Authority homepage" }
          ]
        },
        {
          slug: "art-by-mio",
          title: "Art By MIO",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Sole full stack developer",
          productCategory: "Cultural platform",
          description: "Solely developed and maintained user-facing application features, backend functionality, data handling, and ongoing product improvements for Art By MIO, a membership site covering people, places, and ideas shaping culture across Asia.",
          longDescription: "Solely developed and maintained user-facing application features, backend functionality, data handling, and ongoing product improvements. Art By MIO is a cultural platform with radar, experiences, magazine, and membership surfaces.",
          achievements: [
            "Sole developer of user-facing features and backend functionality.",
            "Owns data handling and ongoing product improvements."
          ],
          tech: ["Full stack", "UI", "Backend", "Data handling"],
          ctaLabel: "Case Study",
          liveUrl: "https://artbymio.com",
          icon: "/art-by-mio/icon.png",
          images: [
            { src: "/art-by-mio/homepage.png", desc: "Art By MIO homepage" }
          ]
        },
        {
          slug: "fdg-workspace",
          title: "FDG Workspace",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Sole full stack developer",
          productCategory: "Content calendar and social workspace",
          description: "Independently owned product architecture, frontend and backend implementation, and workflows for FDG Workspace, covering content creation, scheduling, approvals, channel publishing, automations, and video production on one calendar.",
          longDescription: "Independently owned product architecture, frontend and backend implementation, application workflows, testing, deployment, and ongoing delivery. FDG Workspace is the Frequency Digital Group workspace for client work: draft posts and media, run a smart scheduler across connected social channels, collect sign-off on preview links, connect APIs and internal tools, and keep shooting and editing aligned with the same publishing calendar.",
          achievements: [
            "Sole developer from architecture through deployment.",
            "Connects content, scheduling, approvals, automations, and production in one workspace."
          ],
          tech: ["Full stack", "Product architecture", "APIs", "Workflows"],
          ctaLabel: "Case Study",
          liveUrl: "https://workspace.frequencydigital.group/",
          icon: "/fdg-workspace/icon.png",
          images: [
            { src: "/fdg-workspace/homepage.png", desc: "FDG Workspace homepage" }
          ]
        },
        {
          slug: "mind-step-tutor",
          title: "Mind Step Tutor",
          category: "independent-projects",
          organization: "Independent",
          role: "Independent solo project",
          productCategory: "Education platform",
          description: "Independently developing a B2C and C2C platform connecting students with private tutors. Mar 2026 to Present.",
          longDescription: "Independent solo project (Mar 2026 to Present). A B2C and C2C platform connecting students with private tutors. This is not an employment role.",
          achievements: [
            "Independent product, not a company employment role.",
            "Designs the student and tutor relationship across B2C and C2C flows."
          ],
          tech: ["Product architecture", "Full stack"],
          ctaLabel: "Case Study"
        },
        {
          slug: "engages-ai",
          category: "selected-work",
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
          category: "selected-work",
          description: "Developed a frontend UI components for sales and service providers, optimizing SEO and user experience.",
          longDescription: "Core developer for the Salesmrkt ecosystem, focusing on automating the sales funnel for service providers. Developed centralized lead management tools and client engagement features that streamlined operations for hundreds of users.",
          tech: ["React", "Shopify", "N8N", "Calendly"],
          liveUrl: "https://salesmrkt.com",
          images: [{ src: "/salesmrkt/salesmrkt.com_.png", desc: "The main landing page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_campaigns-on-demand.png", desc: "The campaigns on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_schedule-growth-session.png", desc: "The sales, marketing and video production growth sessions on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_thank-you-ads.png", desc: "The thank you page that shows up when user books a session through N8N automation for Salesmrkt" }]
        },
        {
          slug: "gotryone",
          title: "GoTryOne",
          category: "selected-work",
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
          category: "university-projects",
          images: [
            {
              src: "/utmsir-university.png",
              desc: "UTMSIR - AI-enhanced web solution for international student accommodation with automated room assignments."
            }
          ]
        },
        {
          slug: "chatoo",
          title: "Chatoo",
          description: "Robust and intuitive solution for modern communication needs. By successfully implementing core real-time messaging features alongside a clean, user-friendly interface, this project bridges the gap between complex backend functionality and seamless frontend design.",
          longDescription: "Robust and intuitive solution for modern communication needs. By successfully implementing core real-time messaging features alongside a clean, user-friendly interface, this project bridges the gap between complex backend functionality and seamless frontend design. Whether used for personal connectivity or as a foundation for larger social applications, Chatoo demonstrates that reliable instant messaging can be both accessible and scalable. We hope this project serves as a valuable tool for users and a solid reference for developers exploring real-time architectures.",
          tech: ["MongoDB", "Express", "React", "Node.js"],
          category: "university-projects",
          images: [
            {
              src: "/chatoo-university.png",
              desc: "Chatoo - Robust and intuitive solution for modern communication needs."
            }
          ]
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
          longDescription: "This N8N automation integrates directly with Calendly. It listens for scheduling events and automatically processes them: handling appointments, sending necessary notifications, and updating records without any manual intervention.",
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
        },
        {
          slug: "food-bazaar-app",
          title: "Food Bazaar App",
          description: "Dedicated micro-restaurant application that allows individuals selling home-made food to reach customers more easily, add new meals, and deliver food faster with an easy-to-use UI and services provided by the Food Bazaar app.",
          longDescription: "Food Bazaar is a dedicated micro-restaurant application built with Flutter and Dart for cross-platform mobile development. It enables individual home-made food sellers to reach customers more easily, add new meals to their catalog, and deliver food faster through an intuitive user interface. The app features user authentication for both sellers and customers, a meal catalog with images and descriptions, order tracking and delivery management, and payment integration. GitHub repository: https://github.com/softtechforgeeks/Food-Bazaar-App",
          tech: ["Flutter", "Dart", "Mobile Development"],
          category: "university-projects",
          images: [
            {
              src: "/food-bazaar-university.png",
              desc: "Food Bazaar App - Micro-restaurant application interface"
            }
          ]
        }
      ]
    },
    education: {
      title: "Education and Certifications",
      degree: "Bachelor of Computer Science (Software Engineering)",
      school: "Universiti Teknologi Malaysia",
      period: "Mar 2020 – Feb 2024",
      cgpa: "CGPA: 3.92",
      certificationsTitle: "Certifications",
      certifications: [
        { name: "Web Development Nanodegree", issuer: "Udacity" },
        { name: "Applied Data Science with Python", issuer: "Cognitive Class.ai" }
      ]
    },
    experience: {
      title: "Work Experience",
      items: [
        {
          "company": "Frequency Digital Group",
          "role": "Sole AI Full Stack Developer",
          "period": "Jun 2026 – Present",
          "location": "Remote",
          "responsibilities": [
            "Sole developer for Review Revolution, Daily Authority, Art By MIO, and FDG Workspace under a Hong Kong-registered company.",
            "Owns application architecture, frontend and backend implementation, and ongoing product improvements."
          ],
          "tech": [
            "Next.js",
            "TypeScript",
            "Backend APIs",
            "PostgreSQL",
            "AI workflows"
          ]
        },
        {
          "company": "Salesmrkt",
          "role": "Full Stack Software Engineer",
          "period": "Sep 2025 – Mar 2026",
          "location": "Seattle, USA (Remote)",
          "responsibilities": [
            "Built and enhanced web applications and AI-enabled chat functionality, including a migration from React to Next.js.",
            "Delivered frontend and backend features, business workflows, e-commerce updates, payments, and cloud deployments.",
            "Developed an AI chatting system with recommendations and in-depth search, responding in 1.5s using Gemini."
          ],
          "tech": [
            "Next.js",
            "Tailwind CSS",
            "Firebase",
            "Shopify",
            "Stripe",
            "n8n"
          ]
        },
        {
          "company": "Engages AI",
          "role": "Full Stack Software Engineer",
          "period": "Jan 2024 – Aug 2025",
          "location": "Singapore (Remote)",
          "responsibilities": [
            "Developed CRM and real-time chat capabilities, backend microservices, AI-assisted chat functionality, data workflows, and reporting dashboards.",
            "Worked across frontend, backend, database design, automation, and production deployment."
          ],
          "tech": [
            "NestJS",
            "React",
            "PostgreSQL",
            "Redis",
            "RabbitMQ",
            "LangGraph",
            "Rasa"
          ]
        },
        {
          "company": "Engages AI",
          "role": "Software Engineer Intern",
          "period": "May 2023 – Dec 2023",
          "location": "Malaysia (Hybrid)",
          "responsibilities": [
            "Contributed to the Quickdesk CRM platform by building and enhancing its React frontend.",
            "Implemented backend services and AI chatbot capabilities for the application."
          ],
          "tech": [
            "React",
            "NestJS",
            "PostgreSQL",
            "Rasa"
          ]
        },
        {
          "company": "Universiti Sains Islam Malaysia",
          "role": "System Analyst",
          "period": "Oct 2022 – Apr 2023",
          "location": "Malaysia (Remote)",
          "responsibilities": [
            "Modernized legacy web and mobile interfaces by migrating to React and React Native.",
            "Enhanced the Laravel backend to improve maintainability and support cross-platform applications."
          ],
          "tech": [
            "React",
            "React Native",
            "Laravel"
          ]
        },
        {
          "company": "Google Developer Student Club, UTM",
          "role": "Technical Team Member",
          "period": "Nov 2021 – Oct 2022",
          "location": "Johor Bahru, Malaysia",
          "responsibilities": [
            "Supported computer vision and AI chatbot workshops using Azure."
          ],
          "tech": [
            "Python",
            "Azure",
            "Computer Vision"
          ]
        }
      ]
    },
    contact: {
      title: "Get in Touch",
      description: "Open to conversations about full stack product engineering, AI-enabled workflows, and software delivery.",
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
    nav: { home: "الرئيسية", work: "العمل", experience: "الخبرة", projects: "المشاريع", skills: "المهارات", education: "التعليم", about: "من أنا", contact: "اتصل بي", resume: "السيرة الذاتية" },
    hero: { location: "Selangor, Malaysia", title: "AI Full Stack Software Engineer", headline: "بناء منتجات SaaS معقدة من الهندسة حتى التسليم.", description: "أطور بشكل مستقل تطبيقات الواجهة الأمامية وأنظمة الخلفية وسير العمل المدعومة بالذكاء الاصطناعي. يشمل عملي الأخير أربعة مشاريع برمجية في Frequency Digital Group.", cta_projects: "استكشف أعمالي", cta_resume: "تحميل السيرة", cta_contact: "تواصل معي" },
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
        { country: "ماليزيا", countryCode: "MY", role: "التعليم والمسار المهني والقاعدة الحالية" }
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
        frontend: "الواجهة الأمامية", backend: "الواجهة الخلفية", data: "البيانات والوقت الفعلي", ai: "الذكاء الاصطناعي والأتمتة", cloud: "السحابة والتسليم", observability: "المراقبة", mobile: "الجوال", commerce: "التجارة وأنظمة الأعمال", tools: "الأدوات"
      }
    },
    projects: {
      title: "أبرز المشاريع",
      featuredTitle: "Frequency Digital Group",
      selectedTitle: "Selected Work",
      independentTitle: "Independent Projects",
      caseStudy: "Case Study",
      moreCategories: "المزيد من الفئات",
      learnMore: "اعرف المزيد",
      viewProjects: "عرض المشاريع ←",
      backToProjects: "← العودة إلى المشاريع",
      categoryTitles: {
        "n8n-automations": "أتمتة N8N",
        "university-projects": "مشاريع الجامعة",
        "selected-work": "أعمال مختارة",
        "independent-projects": "مشاريع مستقلة",
        "client-portfolios": "ملفات عملاء",
      },
      categories: [
        { title: "أعمال مختارة", icon: "🧩", slug: "selected-work", desc: "أعمال سابقة في CRM والمبيعات والمنتجات" },
        { title: "مشاريع مستقلة", icon: "🚀", slug: "independent-projects", desc: "منتجات فردية خارج التوظيف" },
        { title: "أتمتة N8N", icon: "🤖", slug: "n8n-automations", desc: "سير عمل وتكامل آلي" },
        { title: "مشاريع الجامعة", icon: "🎓", slug: "university-projects", desc: "أبحاث أكاديمية ومهام" },
        { title: "ملفات عملاء", icon: "💼", slug: "client-portfolios", desc: "مواقع محفظة تم إنشاؤها للعملاء" }
      ],
      items: [
                    
        {
          slug: "review-revolution",
          title: "Review Revolution",
          featured: true,
          organization: "Frequency Digital Group",
          role: "المطور الوحيد للمنتج الكامل",
          productCategory: "برمجيات كخدمة مدعومة بالذكاء الاصطناعي",
          description: "طورت بشكل مستقل منصة متعددة الوحدات تغطي ملاحظات العملاء وعمليات السمعة والأتمتة والتحليلات ولوحات الإدارة.",
          longDescription: "صممت الواجهة الأمامية والخلفية ونماذج البيانات وسير العمل لمنصة ملاحظات وذكاء السمعة.",
          achievements: ["المطور الوحيد للواجهة الأمامية وهندسة الخلفية ووظائف الذكاء الاصطناعي.", "يربط رحلات الملاحظات مع الإدارة والتحليلات والأتمتة في منتج واحد."],
          tech: ["Next.js", "TypeScript", "Backend APIs", "PostgreSQL", "AI workflows"],
          ctaLabel: "دراسة حالة",
          liveUrl: "https://reviewrevolution.ai",
          icon: "/review-revolution/icon.png",
          images: [
            { src: "/review-revolution/homepage.png", desc: "Review Revolution homepage" },
            { src: "/review-revolution/features.png", desc: "Review Revolution reputation growth features" }
          ]
        },
        {
          slug: "daily-authority",
          title: "Daily Authority",
          featured: true,
          organization: "Frequency Digital Group",
          role: "المطور الوحيد للمنتج الكامل",
          productCategory: "منتج محتوى وظهور",
          description: "ملكية مستقلة لهندسة المنتج والواجهة الأمامية والخلفية وسير النشر لمنتج المحتوى والظهور من Review Revolution.",
          longDescription: "ملكية مستقلة لهندسة المنتج والتنفيذ والاختبار والنشر. RR Daily Authority هو منتج المحتوى والظهور من Review Revolution. يخطط لشهر من الصفحات المفيدة ثم ينشر صفحة كل يوم على موقع يملكه النشاط.",
          achievements: ["المطور الوحيد من الهندسة حتى النشر.", "يملك الواجهة الأمامية والخلفية وسير العمل والاختبار والتسليم المستمر."],
          tech: ["Full stack", "Product architecture", "Testing", "Deployment"],
          ctaLabel: "دراسة حالة",
          liveUrl: "https://authority.reviewrevolution.ai",
          icon: "/daily-authority/icon.png",
          images: [
            { src: "/daily-authority/homepage.png", desc: "RR Daily Authority homepage" }
          ]
        },
        {
          slug: "art-by-mio",
          title: "Art By MIO",
          featured: true,
          organization: "Frequency Digital Group",
          role: "المطور الوحيد للمنتج الكامل",
          productCategory: "منصة ثقافية",
          description: "طورت وصنت وحدي ميزات المستخدم ووظائف الخلفية ومعالجة البيانات وتحسينات المنتج لموقع Art By MIO.",
          longDescription: "تطوير وصيانة فردية لميزات المستخدم والخلفية والبيانات. Art By MIO منصة ثقافية تغطي الرادار والتجارب والمجلة والعضوية.",
          achievements: ["المطور الوحيد لميزات المستخدم ووظائف الخلفية.", "يملك معالجة البيانات وتحسينات المنتج المستمرة."],
          tech: ["Full stack", "UI", "Backend", "Data handling"],
          ctaLabel: "دراسة حالة",
          liveUrl: "https://artbymio.com",
          icon: "/art-by-mio/icon.png",
          images: [
            { src: "/art-by-mio/homepage.png", desc: "Art By MIO homepage" }
          ]
        },
        {
          slug: "fdg-workspace",
          title: "FDG Workspace",
          featured: true,
          organization: "Frequency Digital Group",
          role: "المطور الوحيد للمنتج الكامل",
          productCategory: "مساحة عمل للمحتوى والتقويم والنشر",
          description: "ملكية مستقلة لهندسة المنتج والواجهة الأمامية والخلفية وسير العمل في FDG Workspace لإنشاء المحتوى والجدولة والموافقات والنشر والأتمتة والإنتاج على تقويم واحد.",
          longDescription: "ملكية مستقلة لهندسة المنتج والتنفيذ والاختبار والنشر. FDG Workspace مساحة عمل Frequency Digital Group لعمل العملاء: صياغة المنشورات والوسائط، وجدولة ذكية عبر القنوات المتصلة، وجمع الموافقات عبر روابط المعاينة، وربط واجهات برمجية وأدوات داخلية، ومواءمة التصوير والمونتاج مع تقويم النشر.",
          achievements: ["المطور الوحيد من الهندسة حتى النشر.", "يربط المحتوى والجدولة والموافقات والأتمتة والإنتاج في مساحة عمل واحدة."],
          tech: ["Full stack", "Product architecture", "APIs", "Workflows"],
          ctaLabel: "دراسة حالة",
          liveUrl: "https://workspace.frequencydigital.group/",
          icon: "/fdg-workspace/icon.png",
          images: [
            { src: "/fdg-workspace/homepage.png", desc: "FDG Workspace homepage" }
          ]
        },
        {
          slug: "mind-step-tutor",
          title: "Mind Step Tutor",
          category: "independent-projects",
          organization: "Independent",
          role: "مشروع مستقل فردي",
          productCategory: "منصة تعليم",
          description: "تطوير مستقل لمنصة B2C و C2C تربط الطلاب بالمدرسين الخصوصيين. Mar 2026 to Present.",
          longDescription: "مشروع مستقل فردي (Mar 2026 to Present). هذا ليس دوراً وظيفياً.",
          achievements: ["منتج مستقل، وليس دوراً وظيفياً.", "يصمم علاقة الطالب والمدرس عبر تدفقات B2C و C2C."],
          tech: ["Product architecture", "Full stack"],
          ctaLabel: "دراسة حالة"
        },
{
                      slug: "engages-ai",
                      category: "selected-work",
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
                      category: "selected-work",
                      title: "Salesmrkt",
                      description: "تطوير ميزات لمقدمي خدمات المبيعات والخدمات، وتحسين إدارة العملاء المحتملين وتفاعل المستخدمين.",
                      longDescription: "مطور أساسي للنظام البيئي لـ Salesmrkt، مع التركيز على أتمتة مسار المبيعات لمقدمي الخدمات. تطوير أدوات مركزية لإدارة العملاء المحتملين.",
                      tech: ["React", "Shopify", "N8N", "Calendly"],
                      liveUrl: "https://salesmrkt.com",
                      images: [{ src: "/salesmrkt/salesmrkt.com_.png", desc: "The main landing page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_campaigns-on-demand.png", desc: "The campaigns on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_schedule-growth-session.png", desc: "The sales, marketing and video production growth sessions on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_thank-you-ads.png", desc: "The thank you page that shows up when user books a session through N8N automation for Salesmrkt" }]
                    },
                    {
                      slug: "gotryone",
                      category: "selected-work",
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
                      category: "university-projects",
          images: [
            {
              src: "/utmsir-university.png",
              desc: "UTMSIR - حل ويب معزز بالذكاء الاصطناعي لسكن الطلاب الدوليين مع توزيع آلي للغرف."
            }
          ]
                    },
                    {
  slug: "food-bazaar-app",
  title: "تطبيق فود بازار (Food Bazaar)",
  description: "تطبيق مخصص للمطاعم الصغيرة يتيح للأفراد الذين يبيعون طعاماً منزلياً الوصول إلى العملاء بسهولة أكبر وإضافة وجبات جديدة وتوصيل الطعام بشكل أسرع.",
  longDescription: "Food Bazaar هو تطبيق مخصص للمطاعم الصغيرة تم بناؤه باستخدام Flutter و Dart. يُمكّن بائعي الأغذية المنزلية من الوصول إلى العملاء بسهولة، وإدارة كتالوج الوجبات، وتتبع الطلبات من خلال واجهة مستخدم سهلة. يتضمن التطبيق ميزات توثيق المستخدمين، وعرض الوجبات بالصور، وإدارة التوصيل، وتكامل الدفع.",
  tech: ["Flutter", "Dart", "Mobile Development"],
  category: "university-projects",
  images: [
    {
      src: "/food-bazaar-university.png",
      desc: "تطبيق فود بازار - واجهة تطبيق المطاعم الصغيرة"
    }
  ]
},{
  slug: "chatoo",
  title: "Chatoo",
  description: "حل قوي وبديهي لاحتياجات التواصل الحديثة. من خلال تنفيذ ميزات الرسائل الفورية الأساسية مع واجهة مستخدم نظيفة، يجمع هذا المشروع بين تعقيد الأنظمة الخلفية وسلاسة التصميم الأمامي.",
  longDescription: "حل قوي وبديهي لاحتياجات التواصل الحديثة. من خلال تنفيذ ميزات الرسائل الفورية الأساسية في الوقت الفعلي مع واجهة مستخدم نظيفة وسهلة الاستخدام، يسد هذا المشروع الفجوة بين وظائف الواجهة الخلفية المعقدة وتصميم الواجهة الأمامية السلس. سواء تم استخدامه للتواصل الشخصي أو كأساس لتطبيقات اجتماعية أكبر، يثبت Chatoo أن المراسلة الفورية الموثوقة يمكن أن تكون سهلة الوصول وقابلة للتوسع في نفس الوقت.",
  tech: ["MongoDB", "Express", "React", "Node.js"],
  category: "university-projects",
  images: [
    {
      src: "/chatoo-university.png",
      desc: "Chatoo - حل قوي وبديهي لاحتياجات التواصل الحديثة."
    }
  ]
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
    education: {
      title: "التعليم والشهادات",
      degree: "Bachelor of Computer Science (Software Engineering)",
      school: "Universiti Teknologi Malaysia",
      period: "Mar 2020 – Feb 2024",
      cgpa: "CGPA: 3.92",
      certificationsTitle: "الشهادات",
      certifications: [
        { name: "Web Development Nanodegree", issuer: "Udacity" },
        { name: "Applied Data Science with Python", issuer: "Cognitive Class.ai" }
      ]
    },
    experience: {
      title: "الخبرة المهنية",
      items: [
        {
          "company": "Frequency Digital Group",
          "role": "Sole AI Full Stack Developer",
          "period": "Jun 2026 – Present",
          "location": "Remote",
          "responsibilities": ["المطور الوحيد لـ Review Revolution و Daily Authority و Art By MIO و FDG Workspace ضمن شركة مسجلة في هونغ كونغ.", "أملك هندسة التطبيق وتنفيذ الواجهة الأمامية والخلفية وتحسينات المنتج المستمرة."],
          "tech": ["Next.js", "TypeScript", "Backend APIs", "PostgreSQL", "AI workflows"]
        },
        {
          "company": "Salesmrkt",
          "role": "Full Stack Software Engineer",
          "period": "Sep 2025 – Mar 2026",
          "location": "Seattle, USA (Remote)",
          "responsibilities": ["بنيت وحسّنت تطبيقات ويب ودردشة مدعومة بالذكاء الاصطناعي، بما في ذلك الانتقال من React إلى Next.js.", "قدمت ميزات الواجهة الأمامية والخلفية وسير العمل التجاري والمدفوعات والنشر السحابي.", "طورت نظام دردشة ذكاء اصطناعي مع توصيات وبحث متعمق، باستجابة 1.5s باستخدام Gemini."],
          "tech": ["Next.js", "Tailwind CSS", "Firebase", "Shopify", "Stripe", "n8n"]
        },
        {
          "company": "Engages AI",
          "role": "Full Stack Software Engineer",
          "period": "Jan 2024 – Aug 2025",
          "location": "Singapore (Remote)",
          "responsibilities": ["طورت قدرات CRM ودردشة فورية وخدمات مصغرة ووظائف دردشة بمساعدة الذكاء الاصطناعي وسير عمل البيانات ولوحات التقارير.", "عملت عبر الواجهة الأمامية والخلفية وتصميم قواعد البيانات والأتمتة والنشر الإنتاجي."],
          "tech": ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "LangGraph", "Rasa"]
        },
        {
          "company": "Engages AI",
          "role": "Software Engineer Intern",
          "period": "May 2023 – Dec 2023",
          "location": "Malaysia (Hybrid)",
          "responsibilities": ["ساهمت في منصة Quickdesk CRM عبر بناء وتحسين الواجهة الأمامية بـ React.", "نفذت خدمات الخلفية وقدرات روبوت الدردشة بالذكاء الاصطناعي للتطبيق."],
          "tech": ["React", "NestJS", "PostgreSQL", "Rasa"]
        },
        {
          "company": "Universiti Sains Islam Malaysia",
          "role": "System Analyst",
          "period": "Oct 2022 – Apr 2023",
          "location": "Malaysia (Remote)",
          "responsibilities": ["حدّثت واجهات الويب والجوال القديمة عبر الانتقال إلى React و React Native.", "حسّنت خلفية Laravel لزيادة قابلية الصيانة ودعم التطبيقات عبر المنصات."],
          "tech": ["React", "React Native", "Laravel"]
        },
        {
          "company": "Google Developer Student Club, UTM",
          "role": "Technical Team Member",
          "period": "Nov 2021 – Oct 2022",
          "location": "Johor Bahru, Malaysia",
          "responsibilities": ["دعمت ورش عمل الرؤية الحاسوبية وروبوتات الدردشة باستخدام Azure."],
          "tech": ["Python", "Azure", "Computer Vision"]
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
    nav: { home: "Inicio", work: "Trabajo", experience: "Experiencia", projects: "Proyectos", skills: "Habilidades", education: "Educación", about: "Sobre mí", contact: "Contacto", resume: "Currículum" },
    hero: { location: "Selangor, Malaysia", title: "AI Full Stack Software Engineer", headline: "Construyendo productos SaaS complejos desde la arquitectura hasta la entrega.", description: "Desarrollo de forma independiente frontend, backend y flujos con IA. Mi trabajo reciente incluye cuatro proyectos de software en Frequency Digital Group.", cta_projects: "Explorar mi trabajo", cta_resume: "Descargar currículum", cta_contact: "Contactar" },
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
        { country: "Malasia", countryCode: "MY", role: "Educación, carrera y base actual" }
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
        frontend: "Frontend", backend: "Backend", data: "Datos y tiempo real", ai: "IA y automatización", cloud: "Nube y entrega", observability: "Observabilidad", mobile: "Móvil", commerce: "Comercio y sistemas de negocio", tools: "Herramientas"
      }
    },
    projects: {
      title: "Proyectos Destacados",
      featuredTitle: "Frequency Digital Group",
      selectedTitle: "Selected Work",
      independentTitle: "Independent Projects",
      caseStudy: "Case Study",
      moreCategories: "Más Categorías",
      learnMore: "Saber Más",
      viewProjects: "Ver Proyectos →",
      backToProjects: "← Volver a Proyectos",
      categoryTitles: {
        "n8n-automations": "Automatización N8N",
        "university-projects": "Proyectos Universitarios",
        "selected-work": "Selected Work",
        "independent-projects": "Independent Projects",
        "client-portfolios": "Portafolios de Clientes",
      },
      categories: [
        { title: "Selected Work", icon: "🧩", slug: "selected-work", desc: "CRM, sales, and product work from earlier roles" },
        { title: "Independent Projects", icon: "🚀", slug: "independent-projects", desc: "Solo products built outside employment" },
        { title: "Automatización N8N", icon: "🤖", slug: "n8n-automations", desc: "Flujos de trabajo e integraciones automatizadas" },
        { title: "Proyectos Universitarios", icon: "🎓", slug: "university-projects", desc: "Investigación académica y asignaciones" },
        { title: "Portafolios de Clientes", icon: "💼", slug: "client-portfolios", desc: "Sitios web de portafolio creados para clientes" }
      ],
      items: [
                    
        {
          slug: "review-revolution",
          title: "Review Revolution",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Desarrollador full stack único",
          productCategory: "SaaS con IA, experiencia del cliente, gestión de reputación",
          description: "Desarrollé de forma independiente una plataforma SaaS multimódulo de comentarios, reputación, automatización, analítica y paneles.",
          longDescription: "Diseñé frontend, backend, modelos de datos y flujos para una plataforma de comentarios e inteligencia de reputación.",
          achievements: ["Único desarrollador del frontend, backend e IA.", "Conecta recorridos de feedback con administración, analítica y automatización."],
          tech: ["Next.js", "TypeScript", "Backend APIs", "PostgreSQL", "AI workflows"],
          ctaLabel: "Caso de estudio",
          liveUrl: "https://reviewrevolution.ai",
          icon: "/review-revolution/icon.png",
          images: [
            { src: "/review-revolution/homepage.png", desc: "Review Revolution homepage" },
            { src: "/review-revolution/features.png", desc: "Review Revolution reputation growth features" }
          ]
        },
        {
          slug: "daily-authority",
          title: "Daily Authority",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Desarrollador full stack único",
          productCategory: "Producto de contenido y visibilidad",
          description: "Propiedad independiente de arquitectura, frontend, backend y flujos de publicación del producto de contenido y visibilidad de Review Revolution.",
          longDescription: "Propiedad independiente de arquitectura, implementación, pruebas y despliegue. RR Daily Authority es el producto de contenido y visibilidad de Review Revolution. Planifica un mes de páginas útiles y publica una cada día en un sitio que posee el negocio.",
          achievements: ["Único desarrollador desde la arquitectura hasta el despliegue.", "Posee frontend, backend, flujos, pruebas y entrega."],
          tech: ["Full stack", "Product architecture", "Testing", "Deployment"],
          ctaLabel: "Caso de estudio",
          liveUrl: "https://authority.reviewrevolution.ai",
          icon: "/daily-authority/icon.png",
          images: [
            { src: "/daily-authority/homepage.png", desc: "RR Daily Authority homepage" }
          ]
        },
        {
          slug: "art-by-mio",
          title: "Art By MIO",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Desarrollador full stack único",
          productCategory: "Plataforma cultural",
          description: "Desarrollé y mantuve en solitario funciones de usuario, backend, datos y mejoras continuas para Art By MIO.",
          longDescription: "Desarrollo y mantenimiento en solitario de funciones de usuario, backend y datos. Art By MIO es una plataforma cultural con radar, experiencias, revista y membresía.",
          achievements: ["Único desarrollador de funciones de usuario y backend.", "Posee datos y mejoras continuas."],
          tech: ["Full stack", "UI", "Backend", "Data handling"],
          ctaLabel: "Caso de estudio",
          liveUrl: "https://artbymio.com",
          icon: "/art-by-mio/icon.png",
          images: [
            { src: "/art-by-mio/homepage.png", desc: "Art By MIO homepage" }
          ]
        },
        {
          slug: "fdg-workspace",
          title: "FDG Workspace",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Desarrollador full stack único",
          productCategory: "Espacio de contenido, calendario y redes",
          description: "Propiedad independiente de arquitectura, frontend, backend y flujos de FDG Workspace para creación de contenido, programación, aprobaciones, publicación, automatizaciones y producción en un mismo calendario.",
          longDescription: "Propiedad independiente de arquitectura, implementación, pruebas y despliegue. FDG Workspace es el espacio de Frequency Digital Group para trabajo con clientes: redactar publicaciones y medios, programar en canales sociales conectados, recoger aprobaciones con enlaces de vista previa, conectar APIs y herramientas internas, y alinear rodaje y edición con el mismo calendario de publicación.",
          achievements: ["Único desarrollador desde la arquitectura hasta el despliegue.", "Conecta contenido, programación, aprobaciones, automatizaciones y producción en un solo espacio."],
          tech: ["Full stack", "Product architecture", "APIs", "Workflows"],
          ctaLabel: "Caso de estudio",
          liveUrl: "https://workspace.frequencydigital.group/",
          icon: "/fdg-workspace/icon.png",
          images: [
            { src: "/fdg-workspace/homepage.png", desc: "FDG Workspace homepage" }
          ]
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
{
                      slug: "engages-ai",
                      category: "selected-work",
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
                      category: "selected-work",
                      title: "Salesmrkt",
                      description: "Desarrollo de componentes de interfaz de usuario frontend para proveedores de servicios y ventas.",
                      longDescription: "Desarrollador principal del ecosistema Salesmrkt, enfocado en automatizar el embudo de ventas para proveedores de servicios, con gestión centralizada de clientes potenciales.",
                      tech: ["React", "Shopify", "N8N", "Calendly"],
                      liveUrl: "https://salesmrkt.com",
                      images: [{ src: "/salesmrkt/salesmrkt.com_.png", desc: "The main landing page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_campaigns-on-demand.png", desc: "The campaigns on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_schedule-growth-session.png", desc: "The sales, marketing and video production growth sessions on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_thank-you-ads.png", desc: "The thank you page that shows up when user books a session through N8N automation for Salesmrkt" }]
                    },
                    {
                      slug: "gotryone",
                      category: "selected-work",
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
                      category: "university-projects",
          images: [
            {
              src: "/utmsir-university.png",
              desc: "UTMSIR - Solución web mejorada con IA para el alojamiento de estudiantes internacionales con asignación automática de habitaciones."
            }
          ]
                    },{
  slug: "food-bazaar-app",
  title: "Food Bazaar App",
  description: "Aplicación dedicada a microrrestaurantes que permite a personas que venden comida casera llegar a los clientes más fácilmente y gestionar pedidos.",
  longDescription: "Food Bazaar es una aplicación para microrrestaurantes construida con Flutter y Dart. Permite a los vendedores de comida casera llegar a más clientes, añadir nuevos platos al catálogo y entregar comida más rápido. Incluye autenticación, catálogo con imágenes, seguimiento de pedidos e integración de pagos.",
  tech: ["Flutter", "Dart", "Mobile Development"],
  category: "university-projects",
  images: [
    {
      src: "/food-bazaar-university.png",
      desc: "Food Bazaar App - Interfaz de la aplicación de microrrestaurantes"
    }
  ]
},{
  slug: "chatoo",
  title: "Chatoo",
  description: "Solución robusta e intuitiva para las necesidades de comunicación modernas. Al implementar funciones principales de mensajería en tiempo real con una interfaz limpia, este proyecto cierra la brecha entre la funcionalidad compleja del backend y el diseño fluido del frontend.",
  longDescription: "Solución robusta e intuitiva para las necesidades de comunicación modernas. Mediante la implementación exitosa de funciones de mensajería en tiempo real junto con una interfaz limpia y fácil de usar, este proyecto une la funcionalidad compleja del backend con un diseño frontend impecable. Chatoo demuestra que la mensajería instantánea confiable puede ser accesible y escalable al mismo tiempo.",
  tech: ["MongoDB", "Express", "React", "Node.js"],
  category: "university-projects",
  images: [
    {
      src: "/chatoo-university.png",
      desc: "Chatoo - Solución robusta e intuitiva para las necesidades de comunicación modernas."
    }
  ]
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
    education: {
      title: "Educación y certificaciones",
      degree: "Bachelor of Computer Science (Software Engineering)",
      school: "Universiti Teknologi Malaysia",
      period: "Mar 2020 – Feb 2024",
      cgpa: "CGPA: 3.92",
      certificationsTitle: "Certificaciones",
      certifications: [
        { name: "Web Development Nanodegree", issuer: "Udacity" },
        { name: "Applied Data Science with Python", issuer: "Cognitive Class.ai" }
      ]
    },
    experience: {
      title: "Experiencia laboral",
      items: [
        {
          "company": "Frequency Digital Group",
          "role": "Sole AI Full Stack Developer",
          "period": "Jun 2026 – Present",
          "location": "Remote",
          "responsibilities": ["Único desarrollador de Review Revolution, Daily Authority, Art By MIO y FDG Workspace en una empresa registrada en Hong Kong.", "Posee arquitectura, implementación frontend y backend, y mejoras continuas."],
          "tech": ["Next.js", "TypeScript", "Backend APIs", "PostgreSQL", "AI workflows"]
        },
        {
          "company": "Salesmrkt",
          "role": "Full Stack Software Engineer",
          "period": "Sep 2025 – Mar 2026",
          "location": "Seattle, USA (Remote)",
          "responsibilities": ["Construí y mejoré aplicaciones web y chat con IA, incluida una migración de React a Next.js.", "Entregué frontend, backend, flujos de negocio, pagos y despliegues en la nube.", "Desarrollé un sistema de chat IA con recomendaciones y búsqueda, respondiendo en 1.5s con Gemini."],
          "tech": ["Next.js", "Tailwind CSS", "Firebase", "Shopify", "Stripe", "n8n"]
        },
        {
          "company": "Engages AI",
          "role": "Full Stack Software Engineer",
          "period": "Jan 2024 – Aug 2025",
          "location": "Singapore (Remote)",
          "responsibilities": ["Desarrollé CRM y chat en tiempo real, microservicios, chat con IA, flujos de datos y paneles de informes.", "Trabajé en frontend, backend, bases de datos, automatización y despliegue en producción."],
          "tech": ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "LangGraph", "Rasa"]
        },
        {
          "company": "Engages AI",
          "role": "Software Engineer Intern",
          "period": "May 2023 – Dec 2023",
          "location": "Malaysia (Hybrid)",
          "responsibilities": ["Contribuí a Quickdesk CRM construyendo y mejorando su frontend en React.", "Implementé servicios backend y capacidades de chatbot de IA."],
          "tech": ["React", "NestJS", "PostgreSQL", "Rasa"]
        },
        {
          "company": "Universiti Sains Islam Malaysia",
          "role": "System Analyst",
          "period": "Oct 2022 – Apr 2023",
          "location": "Malaysia (Remote)",
          "responsibilities": ["Modernicé interfaces web y móviles heredadas migrando a React y React Native.", "Mejoré el backend Laravel para mantenibilidad y soporte multiplataforma."],
          "tech": ["React", "React Native", "Laravel"]
        },
        {
          "company": "Google Developer Student Club, UTM",
          "role": "Technical Team Member",
          "period": "Nov 2021 – Oct 2022",
          "location": "Johor Bahru, Malaysia",
          "responsibilities": ["Apoyé talleres de visión por computador y chatbots de IA usando Azure."],
          "tech": ["Python", "Azure", "Computer Vision"]
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
    nav: { home: "Startseite", work: "Arbeit", experience: "Erfahrung", projects: "Projekte", skills: "Skills", education: "Bildung", about: "Über mich", contact: "Kontakt", resume: "Lebenslauf" },
    hero: { location: "Selangor, Malaysia", title: "AI Full Stack Software Engineer", headline: "Komplexe SaaS-Produkte von der Architektur bis zur Auslieferung.", description: "Ich entwickle eigenständig Frontend, Backend und KI-Workflows. Zur jüngsten Arbeit gehören vier Softwareprojekte bei Frequency Digital Group.", cta_projects: "Arbeit ansehen", cta_resume: "Lebenslauf laden", cta_contact: "Kontakt" },
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
        { country: "Malaysia", countryCode: "MY", role: "Bildung, Karriere und aktueller Standort" }
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
        frontend: "Frontend", backend: "Backend", data: "Daten und Echtzeit", ai: "KI und Automatisierung", cloud: "Cloud und Delivery", observability: "Observability", mobile: "Mobile", commerce: "Commerce und Business-Systeme", tools: "Tools"
      }
    },
    projects: {
      title: "Vorgestellte Projekte",
      featuredTitle: "Frequency Digital Group",
      selectedTitle: "Selected Work",
      independentTitle: "Independent Projects",
      caseStudy: "Case Study",
      moreCategories: "Weitere Kategorien",
      learnMore: "Mehr Erfahren",
      viewProjects: "Projekte Ansehen →",
      backToProjects: "← Zurück zu Projekten",
      categoryTitles: {
        "n8n-automations": "N8N-Automatisierungen",
        "university-projects": "Universitätsprojekte",
        "selected-work": "Selected Work",
        "independent-projects": "Independent Projects",
        "client-portfolios": "Kundenportfolios",
      },
      categories: [
        { title: "Selected Work", icon: "🧩", slug: "selected-work", desc: "CRM, sales, and product work from earlier roles" },
        { title: "Independent Projects", icon: "🚀", slug: "independent-projects", desc: "Solo products built outside employment" },
        { title: "N8N-Automatisierungen", icon: "🤖", slug: "n8n-automations", desc: "Automatisierte Workflows und Integrationen" },
        { title: "Universitätsprojekte", icon: "🎓", slug: "university-projects", desc: "Akademische Forschung und Aufgaben" },
        { title: "Kundenportfolios", icon: "💼", slug: "client-portfolios", desc: "Portfolio-Websites für Kunden erstellt" }
      ],
      items: [
                    
        {
          slug: "review-revolution",
          title: "Review Revolution",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Alleiniger Full-Stack-Entwickler",
          productCategory: "KI-SaaS, Kundenerlebnis, Reputationsmanagement",
          description: "Eigenständige Entwicklung einer Multi-Modul-SaaS-Plattform für Feedback, Reputation, Automatisierung, Analytik und Dashboards.",
          longDescription: "Frontend, Backend, Datenmodelle und Workflows für eine Feedback- und Reputationsplattform.",
          achievements: ["Alleiniger Entwickler für Frontend, Backend-Architektur und KI.", "Verbindet Feedback-Journeys mit Admin, Analytik und Automatisierung."],
          tech: ["Next.js", "TypeScript", "Backend APIs", "PostgreSQL", "AI workflows"],
          ctaLabel: "Fallstudie",
          liveUrl: "https://reviewrevolution.ai",
          icon: "/review-revolution/icon.png",
          images: [
            { src: "/review-revolution/homepage.png", desc: "Review Revolution homepage" },
            { src: "/review-revolution/features.png", desc: "Review Revolution reputation growth features" }
          ]
        },
        {
          slug: "daily-authority",
          title: "Daily Authority",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Alleiniger Full-Stack-Entwickler",
          productCategory: "Content- und Sichtbarkeitsprodukt",
          description: "Eigenverantwortliche Architektur, Frontend, Backend und Publishing-Workflows für das Content- und Sichtbarkeitsprodukt von Review Revolution.",
          longDescription: "Eigenverantwortliche Architektur, Umsetzung, Tests und Deployment. RR Daily Authority ist das Content- und Sichtbarkeitsprodukt von Review Revolution. Es plant einen Monat nützlicher Seiten und veröffentlicht täglich eine auf einer Website des Unternehmens.",
          achievements: ["Alleiniger Entwickler von der Architektur bis zum Deployment.", "Verantwortet Frontend, Backend, Workflows, Tests und Lieferung."],
          tech: ["Full stack", "Product architecture", "Testing", "Deployment"],
          ctaLabel: "Fallstudie",
          liveUrl: "https://authority.reviewrevolution.ai",
          icon: "/daily-authority/icon.png",
          images: [
            { src: "/daily-authority/homepage.png", desc: "RR Daily Authority homepage" }
          ]
        },
        {
          slug: "art-by-mio",
          title: "Art By MIO",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Alleiniger Full-Stack-Entwickler",
          productCategory: "Kulturplattform",
          description: "Alleinige Entwicklung und Wartung von Nutzerfunktionen, Backend, Daten und Verbesserungen für Art By MIO.",
          longDescription: "Alleinige Entwicklung und Wartung von Nutzerfunktionen, Backend und Daten. Art By MIO ist eine Kulturplattform mit Radar, Erlebnissen, Magazin und Mitgliedschaft.",
          achievements: ["Alleiniger Entwickler der Nutzerfunktionen und des Backends.", "Verantwortet Datenhandling und Produktverbesserungen."],
          tech: ["Full stack", "UI", "Backend", "Data handling"],
          ctaLabel: "Fallstudie",
          liveUrl: "https://artbymio.com",
          icon: "/art-by-mio/icon.png",
          images: [
            { src: "/art-by-mio/homepage.png", desc: "Art By MIO homepage" }
          ]
        },
        {
          slug: "fdg-workspace",
          title: "FDG Workspace",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Alleiniger Full-Stack-Entwickler",
          productCategory: "Content-Kalender und Social Workspace",
          description: "Eigenverantwortliche Architektur, Frontend, Backend und Workflows für FDG Workspace: Content-Erstellung, Planung, Freigaben, Publishing, Automatisierung und Produktion auf einem Kalender.",
          longDescription: "Eigenverantwortliche Architektur, Umsetzung, Tests und Deployment. FDG Workspace ist der Frequency-Digital-Group-Workspace für Kundenarbeit: Beiträge und Medien erstellen, Smart Scheduler über verbundene Social-Kanäle, Freigaben über Preview-Links, APIs und interne Tools, sowie Dreh und Schnitt am selben Publishing-Kalender.",
          achievements: ["Alleiniger Entwickler von der Architektur bis zum Deployment.", "Verbindet Content, Planung, Freigaben, Automatisierung und Produktion in einem Workspace."],
          tech: ["Full stack", "Product architecture", "APIs", "Workflows"],
          ctaLabel: "Fallstudie",
          liveUrl: "https://workspace.frequencydigital.group/",
          icon: "/fdg-workspace/icon.png",
          images: [
            { src: "/fdg-workspace/homepage.png", desc: "FDG Workspace homepage" }
          ]
        },
        {
          slug: "mind-step-tutor",
          title: "Mind Step Tutor",
          category: "independent-projects",
          organization: "Independent",
          role: "Unabhängiges Solo-Projekt",
          productCategory: "Bildungsplattform",
          description: "Unabhängige Entwicklung einer B2C- und C2C-Plattform für Studierende und Privatlehrer. Mar 2026 to Present.",
          longDescription: "Unabhängiges Solo-Projekt (Mar 2026 to Present). Keine Anstellung.",
          achievements: ["Unabhängiges Produkt, keine Anstellung.", "Gestaltet die Beziehung zwischen Studierenden und Lehrkräften."],
          tech: ["Product architecture", "Full stack"],
          ctaLabel: "Fallstudie"
        },
{
                      slug: "engages-ai",
                      category: "selected-work",
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
                      category: "selected-work",
                      title: "Salesmrkt",
                      description: "Entwickelte Frontend-UI-Komponenten für Vertriebs- und Dienstleistungsanbieter.",
                      longDescription: "Kernentwickler für das Salesmrkt-Ökosystem mit Fokus auf die Automatisierung des Vertriebsprozesses für Dienstleister inklusive zentralisierter Lead-Management-Tools.",
                      tech: ["React", "Shopify", "N8N", "Calendly"],
                      liveUrl: "https://salesmrkt.com",
                      images: [{ src: "/salesmrkt/salesmrkt.com_.png", desc: "The main landing page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_campaigns-on-demand.png", desc: "The campaigns on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_schedule-growth-session.png", desc: "The sales, marketing and video production growth sessions on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_thank-you-ads.png", desc: "The thank you page that shows up when user books a session through N8N automation for Salesmrkt" }]
                    },
                    {
                      slug: "gotryone",
                      category: "selected-work",
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
                      category: "university-projects",
          images: [
            {
              src: "/utmsir-university.png",
              desc: "UTMSIR - KI-gestützte Weblösung für internationale Studentenunterkünfte mit automatischer Zimmerzuweisung."
            }
          ]
                    },{
  slug: "food-bazaar-app",
  title: "Food Bazaar App",
  description: "Spezialisierte Mikro-Restaurant-App, die es Privatpersonen ermöglicht, hausgemachtes Essen einfacher an Kunden zu verkaufen und zu liefern.",
  longDescription: "Food Bazaar ist eine Mikro-Restaurant-Anwendung, die mit Flutter und Dart entwickelt wurde. Sie ermöglicht es Verkäufern von hausgemachten Speisen, Kunden leichter zu erreichen und ihr Angebot effizient zu verwalten. Die App bietet Benutzerauthentifizierung, einen bebilderten Speisekatalog, Bestellverfolgung und Zahlungsverwaltung.",
  tech: ["Flutter", "Dart", "Mobile Development"],
  category: "university-projects",
  images: [
    {
      src: "/food-bazaar-university.png",
      desc: "Food Bazaar App - Benutzeroberfläche der Mikro-Restaurant-Anwendung"
    }
  ]
},{
  slug: "chatoo",
  title: "Chatoo",
  description: "Robuste und intuitive Lösung für moderne Kommunikationsbedürfnisse. Durch die Implementierung von Echtzeit-Messaging-Funktionen mit einer sauberen Benutzeroberfläche schließt dieses Projekt die Lücke zwischen komplexem Backend und nahtlosem Frontend-Design.",
  longDescription: "Eine robuste und intuitive Lösung für moderne Kommunikationsbedürfnisse. Durch die erfolgreiche Implementierung von Echtzeit-Messaging-Kernfunktionen zusammen mit einer sauberen Benutzeroberfläche verbindet dieses Projekt komplexe Backend-Funktionalität mit nahtlosem Frontend-Design. Chatoo zeigt, dass zuverlässiges Instant Messaging sowohl zugänglich als auch skalierbar sein kann.",
  tech: ["MongoDB", "Express", "React", "Node.js"],
  category: "university-projects",
  images: [
    {
      src: "/chatoo-university.png",
      desc: "Chatoo - Robuste und intuitive Lösung für moderne Kommunikationsbedürfnisse."
    }
  ]
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
    education: {
      title: "Ausbildung und Zertifikate",
      degree: "Bachelor of Computer Science (Software Engineering)",
      school: "Universiti Teknologi Malaysia",
      period: "Mar 2020 – Feb 2024",
      cgpa: "CGPA: 3.92",
      certificationsTitle: "Zertifikate",
      certifications: [
        { name: "Web Development Nanodegree", issuer: "Udacity" },
        { name: "Applied Data Science with Python", issuer: "Cognitive Class.ai" }
      ]
    },
    experience: {
      title: "Berufserfahrung",
      items: [
        {
          "company": "Frequency Digital Group",
          "role": "Sole AI Full Stack Developer",
          "period": "Jun 2026 – Present",
          "location": "Remote",
          "responsibilities": ["Alleiniger Entwickler von Review Revolution, Daily Authority, Art By MIO und FDG Workspace für ein in Hongkong registriertes Unternehmen.", "Verantwortet Architektur, Frontend, Backend und laufende Verbesserungen."],
          "tech": ["Next.js", "TypeScript", "Backend APIs", "PostgreSQL", "AI workflows"]
        },
        {
          "company": "Salesmrkt",
          "role": "Full Stack Software Engineer",
          "period": "Sep 2025 – Mar 2026",
          "location": "Seattle, USA (Remote)",
          "responsibilities": ["Webanwendungen und KI-Chat entwickelt, inklusive Migration von React zu Next.js.", "Frontend, Backend, Business-Workflows, Zahlungen und Cloud-Deployments geliefert.", "KI-Chat mit Empfehlungen und Suche, Antwortzeit 1.5s mit Gemini."],
          "tech": ["Next.js", "Tailwind CSS", "Firebase", "Shopify", "Stripe", "n8n"]
        },
        {
          "company": "Engages AI",
          "role": "Full Stack Software Engineer",
          "period": "Jan 2024 – Aug 2025",
          "location": "Singapore (Remote)",
          "responsibilities": ["CRM und Echtzeit-Chat, Microservices, KI-Chat, Daten-Workflows und Reporting-Dashboards entwickelt.", "Arbeit über Frontend, Backend, Datenbankdesign, Automatisierung und Produktion."],
          "tech": ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "LangGraph", "Rasa"]
        },
        {
          "company": "Engages AI",
          "role": "Software Engineer Intern",
          "period": "May 2023 – Dec 2023",
          "location": "Malaysia (Hybrid)",
          "responsibilities": ["Beitrag zur Quickdesk-CRM-Plattform durch Aufbau und Verbesserung des React-Frontends.", "Backend-Services und KI-Chatbot-Fähigkeiten implementiert."],
          "tech": ["React", "NestJS", "PostgreSQL", "Rasa"]
        },
        {
          "company": "Universiti Sains Islam Malaysia",
          "role": "System Analyst",
          "period": "Oct 2022 – Apr 2023",
          "location": "Malaysia (Remote)",
          "responsibilities": ["Legacy-Web- und Mobile-Oberflächen durch Migration auf React und React Native modernisiert.", "Laravel-Backend für Wartbarkeit und Cross-Platform-Support verbessert."],
          "tech": ["React", "React Native", "Laravel"]
        },
        {
          "company": "Google Developer Student Club, UTM",
          "role": "Technical Team Member",
          "period": "Nov 2021 – Oct 2022",
          "location": "Johor Bahru, Malaysia",
          "responsibilities": ["Workshops zu Computer Vision und KI-Chatbots mit Azure unterstützt."],
          "tech": ["Python", "Azure", "Computer Vision"]
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
    nav: { home: "Главная", work: "Работы", experience: "Опыт", projects: "Проекты", skills: "Навыки", education: "Образование", about: "Обо мне", contact: "Контакты", resume: "Резюме" },
    hero: { location: "Selangor, Malaysia", title: "AI Full Stack Software Engineer", headline: "Сложные SaaS-продукты от архитектуры до поставки.", description: "Самостоятельно разрабатываю frontend, backend и ИИ-процессы. Недавняя работа: четыре программных проекта в Frequency Digital Group.", cta_projects: "Смотреть работы", cta_resume: "Скачать резюме", cta_contact: "Связаться" },
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
        { country: "Малайзия", countryCode: "MY", role: "Образование, карьера и текущая база" }
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
        frontend: "Фронтенд", backend: "Бэкенд", data: "Данные и реальное время", ai: "ИИ и автоматизация", cloud: "Облако и поставка", observability: "Наблюдаемость", mobile: "Мобильная разработка", commerce: "Коммерция и бизнес-системы", tools: "Инструменты"
      }
    },
    projects: {
      title: "Проекты",
      featuredTitle: "Frequency Digital Group",
      selectedTitle: "Selected Work",
      independentTitle: "Independent Projects",
      caseStudy: "Case Study",
      moreCategories: "Больше Категорий",
      learnMore: "Узнать Больше",
      viewProjects: "Посмотреть Проекты →",
      backToProjects: "← Назад к Проектам",
      categoryTitles: {
        "n8n-automations": "Автоматизация N8N",
        "university-projects": "Университетские Проекты",
        "selected-work": "Selected Work",
        "independent-projects": "Independent Projects",
        "client-portfolios": "Портфолио Клиентов",
      },
      categories: [
        { title: "Selected Work", icon: "🧩", slug: "selected-work", desc: "CRM, sales, and product work from earlier roles" },
        { title: "Independent Projects", icon: "🚀", slug: "independent-projects", desc: "Solo products built outside employment" },
        { title: "Автоматизация N8N", icon: "🤖", slug: "n8n-automations", desc: "Автоматизированные рабочие процессы и интеграции" },
        { title: "Университетские Проекты", icon: "🎓", slug: "university-projects", desc: "Академические исследования и задания" },
        { title: "Портфолио Клиентов", icon: "💼", slug: "client-portfolios", desc: "Веб-сайты портфолио для клиентов" }
      ],
      items: [
                    
        {
          slug: "review-revolution",
          title: "Review Revolution",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Единственный full stack разработчик",
          productCategory: "SaaS с ИИ, клиентский опыт, управление репутацией",
          description: "Самостоятельно разработал мультимодульную SaaS-платформу для отзывов, репутации, автоматизации, аналитики и панелей.",
          longDescription: "Спроектировал frontend, backend, модели данных и процессы платформы обратной связи и репутации.",
          achievements: ["Единственный разработчик frontend, backend и ИИ.", "Связывает сценарии отзывов с админкой, аналитикой и автоматизацией."],
          tech: ["Next.js", "TypeScript", "Backend APIs", "PostgreSQL", "AI workflows"],
          ctaLabel: "Кейс",
          liveUrl: "https://reviewrevolution.ai",
          icon: "/review-revolution/icon.png",
          images: [
            { src: "/review-revolution/homepage.png", desc: "Review Revolution homepage" },
            { src: "/review-revolution/features.png", desc: "Review Revolution reputation growth features" }
          ]
        },
        {
          slug: "daily-authority",
          title: "Daily Authority",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Единственный full stack разработчик",
          productCategory: "Продукт контента и видимости",
          description: "Самостоятельная ответственность за архитектуру, frontend, backend и публикацию контент-продукта Review Revolution.",
          longDescription: "Самостоятельная архитектура, реализация, тесты и деплой. RR Daily Authority это продукт контента и видимости Review Revolution. Он планирует месяц полезных страниц и публикует одну каждый день на сайте бизнеса.",
          achievements: ["Единственный разработчик от архитектуры до деплоя.", "Владеет frontend, backend, процессами, тестами и поставкой."],
          tech: ["Full stack", "Product architecture", "Testing", "Deployment"],
          ctaLabel: "Кейс",
          liveUrl: "https://authority.reviewrevolution.ai",
          icon: "/daily-authority/icon.png",
          images: [
            { src: "/daily-authority/homepage.png", desc: "RR Daily Authority homepage" }
          ]
        },
        {
          slug: "art-by-mio",
          title: "Art By MIO",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Единственный full stack разработчик",
          productCategory: "Культурная платформа",
          description: "Самостоятельно разработал и поддерживал пользовательские функции, backend, данные и улучшения для Art By MIO.",
          longDescription: "Самостоятельная разработка и поддержка пользовательских функций, backend и данных. Art By MIO это культурная платформа с радаром, событиями, журналом и членством.",
          achievements: ["Единственный разработчик пользовательских функций и backend.", "Владеет данными и улучшениями продукта."],
          tech: ["Full stack", "UI", "Backend", "Data handling"],
          ctaLabel: "Кейс",
          liveUrl: "https://artbymio.com",
          icon: "/art-by-mio/icon.png",
          images: [
            { src: "/art-by-mio/homepage.png", desc: "Art By MIO homepage" }
          ]
        },
        {
          slug: "fdg-workspace",
          title: "FDG Workspace",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Единственный full stack разработчик",
          productCategory: "Контент, календарь и социальные публикации",
          description: "Самостоятельная архитектура, frontend, backend и процессы FDG Workspace для контента, планирования, согласований, публикаций, автоматизации и продакшена в одном календаре.",
          longDescription: "Самостоятельная архитектура, реализация, тесты и деплой. FDG Workspace это рабочее пространство Frequency Digital Group для клиентской работы: черновики постов и медиа, умный планировщик по подключенным соцканалам, согласования по preview-ссылкам, API и внутренние инструменты, съемка и монтаж в том же календаре публикаций.",
          achievements: ["Единственный разработчик от архитектуры до деплоя.", "Связывает контент, планирование, согласования, автоматизацию и продакшен в одном пространстве."],
          tech: ["Full stack", "Product architecture", "APIs", "Workflows"],
          ctaLabel: "Кейс",
          liveUrl: "https://workspace.frequencydigital.group/",
          icon: "/fdg-workspace/icon.png",
          images: [
            { src: "/fdg-workspace/homepage.png", desc: "FDG Workspace homepage" }
          ]
        },
        {
          slug: "mind-step-tutor",
          title: "Mind Step Tutor",
          category: "independent-projects",
          organization: "Independent",
          role: "Независимый соло-проект",
          productCategory: "Образовательная платформа",
          description: "Независимая разработка B2C и C2C платформы, соединяющей студентов с репетиторами. Mar 2026 to Present.",
          longDescription: "Независимый соло-проект (Mar 2026 to Present). Это не трудоустройство.",
          achievements: ["Независимый продукт, не должность.", "Проектирует связь студента и репетитора в B2C и C2C потоках."],
          tech: ["Product architecture", "Full stack"],
          ctaLabel: "Кейс"
        },
{
                      slug: "engages-ai",
                      category: "selected-work",
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
                      category: "selected-work",
                      title: "Salesmrkt",
                      description: "Платформа компонентов интерфейса для отделов продаж и поставщиков услуг.",
                      longDescription: "Ключевой разработчик экосистемы Salesmrkt, специализирующийся на автоматизации воронки продаж и централизованном управлении лидами.",
                      tech: ["React", "Shopify", "N8N", "Calendly"],
                      liveUrl: "https://salesmrkt.com",
                      images: [{ src: "/salesmrkt/salesmrkt.com_.png", desc: "The main landing page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_campaigns-on-demand.png", desc: "The campaigns on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_schedule-growth-session.png", desc: "The sales, marketing and video production growth sessions on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_thank-you-ads.png", desc: "The thank you page that shows up when user books a session through N8N automation for Salesmrkt" }]
                    },
                    {
                      slug: "gotryone",
                      category: "selected-work",
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
                      category: "university-projects",
          images: [
            {
              src: "/utmsir-university.png",
              desc: "UTMSIR - Веб-решение на базе ИИ для размещения иностранных студентов с автоматическим распределением комнат."
            }
          ]
                    },{
  slug: "food-bazaar-app",
  title: "Приложение Food Bazaar",
  description: "Приложение для микро-ресторанов, позволяющее частным лицам продавать домашнюю еду, расширять базу клиентов и управлять доставкой.",
  longDescription: "Food Bazaar is a Flutter mobile app for micro-restaurants. It helps home cooks find customers, add meals, and manage delivery, with authentication, a catalog, order tracking, and payments.",
  tech: ["Flutter", "Dart", "Mobile Development"],
  category: "university-projects",
  images: [
    {
      src: "/food-bazaar-university.png",
      desc: "Food Bazaar App - Интерфейс приложения для микро-ресторанов"
    }
  ]
},{
  slug: "chatoo",
  title: "Chatoo",
  description: "Надежное и интуитивно понятное решение для современных коммуникаций. Реализуя основные функции обмена сообщениями в реальном времени и чистый интерфейс, этот проект объединяет сложную серверную часть с плавным дизайном.",
  longDescription: "Надежное и интуитивно понятное решение для современных коммуникаций. Благодаря успешному внедрению функций обмена сообщениями в реальном времени и удобному интерфейсу, этот проект устраняет разрыв между сложной логикой бэкенда и безупречным фронтенд-дизайном. Chatoo доказывает, что надежный мессенджер может быть одновременно доступным и масштабируемым.",
  tech: ["MongoDB", "Express", "React", "Node.js"],
  category: "university-projects",
  images: [
    {
      src: "/chatoo-university.png",
      desc: "Chatoo - Надежное и интуитивно понятное решение для современных коммуникаций."
    }
  ]
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
    education: {
      title: "Образование и сертификаты",
      degree: "Bachelor of Computer Science (Software Engineering)",
      school: "Universiti Teknologi Malaysia",
      period: "Mar 2020 – Feb 2024",
      cgpa: "CGPA: 3.92",
      certificationsTitle: "Сертификаты",
      certifications: [
        { name: "Web Development Nanodegree", issuer: "Udacity" },
        { name: "Applied Data Science with Python", issuer: "Cognitive Class.ai" }
      ]
    },
    experience: {
      title: "Опыт работы",
      items: [
        {
          "company": "Frequency Digital Group",
          "role": "Sole AI Full Stack Developer",
          "period": "Jun 2026 – Present",
          "location": "Remote",
          "responsibilities": ["Единственный разработчик Review Revolution, Daily Authority, Art By MIO и FDG Workspace в компании, зарегистрированной в Гонконге.", "Владеет архитектурой, frontend, backend и улучшениями продукта."],
          "tech": ["Next.js", "TypeScript", "Backend APIs", "PostgreSQL", "AI workflows"]
        },
        {
          "company": "Salesmrkt",
          "role": "Full Stack Software Engineer",
          "period": "Sep 2025 – Mar 2026",
          "location": "Seattle, USA (Remote)",
          "responsibilities": ["Создавал веб-приложения и ИИ-чат, включая миграцию с React на Next.js.", "Поставлял frontend, backend, бизнес-процессы, платежи и облачные деплои.", "ИИ-чат с рекомендациями и поиском, ответ 1.5s на Gemini."],
          "tech": ["Next.js", "Tailwind CSS", "Firebase", "Shopify", "Stripe", "n8n"]
        },
        {
          "company": "Engages AI",
          "role": "Full Stack Software Engineer",
          "period": "Jan 2024 – Aug 2025",
          "location": "Singapore (Remote)",
          "responsibilities": ["Разрабатывал CRM и чат в реальном времени, микросервисы, ИИ-чат, процессы данных и дашборды.", "Работал с frontend, backend, базами данных, автоматизацией и продакшен-деплоем."],
          "tech": ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "LangGraph", "Rasa"]
        },
        {
          "company": "Engages AI",
          "role": "Software Engineer Intern",
          "period": "May 2023 – Dec 2023",
          "location": "Malaysia (Hybrid)",
          "responsibilities": ["Внёс вклад в Quickdesk CRM, развивая React-frontend.", "Реализовал backend-сервисы и возможности ИИ-чатбота."],
          "tech": ["React", "NestJS", "PostgreSQL", "Rasa"]
        },
        {
          "company": "Universiti Sains Islam Malaysia",
          "role": "System Analyst",
          "period": "Oct 2022 – Apr 2023",
          "location": "Malaysia (Remote)",
          "responsibilities": ["Обновил устаревшие веб- и мобильные интерфейсы, перейдя на React и React Native.", "Улучшил Laravel-backend для сопровождаемости и кроссплатформенности."],
          "tech": ["React", "React Native", "Laravel"]
        },
        {
          "company": "Google Developer Student Club, UTM",
          "role": "Technical Team Member",
          "period": "Nov 2021 – Oct 2022",
          "location": "Johor Bahru, Malaysia",
          "responsibilities": ["Поддерживал воркшопы по компьютерному зрению и ИИ-чатботам на Azure."],
          "tech": ["Python", "Azure", "Computer Vision"]
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
    nav: { home: "Accueil", work: "Travail", experience: "Expérience", projects: "Projets", skills: "Compétences", education: "Éducation", about: "À propos", contact: "Contact", resume: "CV" },
    hero: { location: "Selangor, Malaysia", title: "AI Full Stack Software Engineer", headline: "Des produits SaaS complexes, de l'architecture à la livraison.", description: "Je développe de façon indépendante le frontend, le backend et des workflows IA. Mon travail récent inclut quatre projets logiciels chez Frequency Digital Group.", cta_projects: "Voir mon travail", cta_resume: "Télécharger le CV", cta_contact: "Me contacter" },
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
        { country: "Malaisie", countryCode: "MY", role: "Éducation, carrière et base actuelle" }
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
        frontend: "Frontend", backend: "Backend", data: "Données et temps réel", ai: "IA et automatisation", cloud: "Cloud et livraison", observability: "Observabilité", mobile: "Mobile", commerce: "Commerce et systèmes métier", tools: "Outils"
      }
    },
    projects: {
      title: "Projets",
      featuredTitle: "Frequency Digital Group",
      selectedTitle: "Selected Work",
      independentTitle: "Independent Projects",
      caseStudy: "Case Study",
      moreCategories: "Plus de Catégories",
      learnMore: "En Savoir Plus",
      viewProjects: "Voir les Projets →",
      backToProjects: "← Retour aux Projets",
      categoryTitles: {
        "n8n-automations": "Automatisation N8N",
        "university-projects": "Projets Universitaires",
        "selected-work": "Selected Work",
        "independent-projects": "Independent Projects",
        "client-portfolios": "Portfolios Clients",
      },
      categories: [
        { title: "Selected Work", icon: "🧩", slug: "selected-work", desc: "CRM, sales, and product work from earlier roles" },
        { title: "Independent Projects", icon: "🚀", slug: "independent-projects", desc: "Solo products built outside employment" },
        { title: "Automatisation N8N", icon: "🤖", slug: "n8n-automations", desc: "Flux de travail et intégrations automatisés" },
        { title: "Projets Universitaires", icon: "🎓", slug: "university-projects", desc: "Recherche académique et devoirs" },
        { title: "Portfolios Clients", icon: "💼", slug: "client-portfolios", desc: "Sites web de portfolio créés pour les clients" }
      ],
      items: [
                    
        {
          slug: "review-revolution",
          title: "Review Revolution",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Développeur full stack unique",
          productCategory: "SaaS IA, expérience client, gestion de réputation",
          description: "Développement indépendant d'une plateforme SaaS multimodule couvrant avis, réputation, automatisation, analytique et tableaux de bord.",
          longDescription: "Conception du frontend, du backend, des modèles de données et des workflows pour une plateforme d'avis et d'intelligence de réputation.",
          achievements: ["Seul développeur du frontend, du backend et des fonctions IA.", "Relie des parcours d'avis à l'administration, l'analytique et l'automatisation."],
          tech: ["Next.js", "TypeScript", "Backend APIs", "PostgreSQL", "AI workflows"],
          ctaLabel: "Étude de cas",
          liveUrl: "https://reviewrevolution.ai",
          icon: "/review-revolution/icon.png",
          images: [
            { src: "/review-revolution/homepage.png", desc: "Review Revolution homepage" },
            { src: "/review-revolution/features.png", desc: "Review Revolution reputation growth features" }
          ]
        },
        {
          slug: "daily-authority",
          title: "Daily Authority",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Développeur full stack unique",
          productCategory: "Produit de contenu et de visibilité",
          description: "Propriété indépendante de l'architecture, du frontend, du backend et des flux de publication du produit de contenu et de visibilité de Review Revolution.",
          longDescription: "Propriété indépendante de l'architecture, de l'implémentation, des tests et du déploiement. RR Daily Authority est le produit de contenu et de visibilité de Review Revolution. Il planifie un mois de pages utiles, puis en publie une chaque jour sur un site appartenant à l'entreprise.",
          achievements: ["Seul développeur de l'architecture au déploiement.", "Possède le frontend, le backend, les workflows, les tests et la livraison."],
          tech: ["Full stack", "Product architecture", "Testing", "Deployment"],
          ctaLabel: "Étude de cas",
          liveUrl: "https://authority.reviewrevolution.ai",
          icon: "/daily-authority/icon.png",
          images: [
            { src: "/daily-authority/homepage.png", desc: "RR Daily Authority homepage" }
          ]
        },
        {
          slug: "art-by-mio",
          title: "Art By MIO",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Développeur full stack unique",
          productCategory: "Plateforme culturelle",
          description: "Développement et maintenance en solo des fonctions utilisateur, du backend, des données et des améliorations pour Art By MIO.",
          longDescription: "Développement et maintenance en solo des fonctions utilisateur, du backend et des données. Art By MIO est une plateforme culturelle avec radar, expériences, magazine et adhésion.",
          achievements: ["Seul développeur des fonctions utilisateur et du backend.", "Possède les données et les améliorations produit."],
          tech: ["Full stack", "UI", "Backend", "Data handling"],
          ctaLabel: "Étude de cas",
          liveUrl: "https://artbymio.com",
          icon: "/art-by-mio/icon.png",
          images: [
            { src: "/art-by-mio/homepage.png", desc: "Art By MIO homepage" }
          ]
        },
        {
          slug: "fdg-workspace",
          title: "FDG Workspace",
          featured: true,
          organization: "Frequency Digital Group",
          role: "Développeur full stack unique",
          productCategory: "Espace contenu, calendrier et réseaux",
          description: "Propriété indépendante de l'architecture, du frontend, du backend et des workflows de FDG Workspace pour la création de contenu, la planification, les validations, la publication, les automatisations et la production sur un même calendrier.",
          longDescription: "Propriété indépendante de l'architecture, de l'implémentation, des tests et du déploiement. FDG Workspace est l'espace Frequency Digital Group pour le travail client: rédiger posts et médias, planifier sur des canaux sociaux connectés, collecter des validations via des liens de prévisualisation, connecter des APIs et outils internes, et aligner tournage et montage sur le même calendrier de publication.",
          achievements: ["Seul développeur de l'architecture au déploiement.", "Relie contenu, planification, validations, automatisations et production dans un seul espace."],
          tech: ["Full stack", "Product architecture", "APIs", "Workflows"],
          ctaLabel: "Étude de cas",
          liveUrl: "https://workspace.frequencydigital.group/",
          icon: "/fdg-workspace/icon.png",
          images: [
            { src: "/fdg-workspace/homepage.png", desc: "FDG Workspace homepage" }
          ]
        },
        {
          slug: "mind-step-tutor",
          title: "Mind Step Tutor",
          category: "independent-projects",
          organization: "Independent",
          role: "Projet indépendant en solo",
          productCategory: "Plateforme éducative",
          description: "Développement indépendant d'une plateforme B2C et C2C reliant étudiants et tuteurs privés. Mar 2026 to Present.",
          longDescription: "Projet indépendant en solo (Mar 2026 to Present). Ce n'est pas un emploi.",
          achievements: ["Produit indépendant, pas un emploi.", "Conçoit la relation étudiant-tuteur dans des flux B2C et C2C."],
          tech: ["Product architecture", "Full stack"],
          ctaLabel: "Étude de cas"
        },
{
                      slug: "engages-ai",
                      category: "selected-work",
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
                      category: "selected-work",
                      title: "Salesmrkt",
                      description: "Développement d'interfaces utilisateur frontend pour la vente et le service.",
                      longDescription: "Développeur principal de l'écosystème Salesmrkt, spécialisé dans l'optimisation des tunnels de vente pour les fournisseurs de services via de nombreux outils de gestion.",
                      tech: ["React", "Shopify", "N8N", "Calendly"],
                      liveUrl: "https://salesmrkt.com",
                      images: [{ src: "/salesmrkt/salesmrkt.com_.png", desc: "The main landing page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_campaigns-on-demand.png", desc: "The campaigns on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_schedule-growth-session.png", desc: "The sales, marketing and video production growth sessions on demand page for Salesmrkt" }, { src: "/salesmrkt/salesmrkt.com_thank-you-ads.png", desc: "The thank you page that shows up when user books a session through N8N automation for Salesmrkt" }]
                    },
                    {
                      slug: "gotryone",
                      category: "selected-work",
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
                      category: "university-projects",
          images: [
            {
              src: "/utmsir-university.png",
              desc: "UTMSIR - Solution web optimisée par l'IA pour l'hébergement des étudiants internationaux avec attribution automatique des chambres."
            }
          ]
                    },{
  slug: "food-bazaar-app",
  title: "Application Food Bazaar",
  description: "Application dédiée aux micro-restaurants permettant aux particuliers vendant de la cuisine maison d'atteindre plus facilement les clients.",
  longDescription: "Food Bazaar est une application pour micro-restaurants construite avec Flutter et Dart. Elle permet aux vendeurs de repas faits maison d'élargir leur clientèle, d'ajouter des plats et de gérer les livraisons. L'app comprend l'authentification, un catalogue illustré, le suivi des commandes et le paiement intégré.",
  tech: ["Flutter", "Dart", "Mobile Development"],
  category: "university-projects",
  images: [
    {
      src: "/food-bazaar-university.png",
      desc: "Application Food Bazaar - Interface de l'application de micro-restauration"
    }
  ]
},{
  slug: "chatoo",
  title: "Chatoo",
  description: "Solution robuste et intuitive pour les besoins de communication modernes. En implémentant des fonctionnalités de messagerie en temps réel avec une interface épurée, ce projet comble le fossé entre la complexité du backend et la fluidité du frontend.",
  longDescription: "Solution robuste et intuitive pour les besoins de communication modernes. En implémentant avec succès les fonctionnalités de messagerie instantanée avec une interface utilisateur propre et conviviale, ce projet relie les fonctionnalités backend complexes à une conception frontend fluide. Chatoo démontre qu'une messagerie instantanée fiable peut être à la fois accessible et évolutive.",
  tech: ["MongoDB", "Express", "React", "Node.js"],
  category: "university-projects",
  images: [
    {
      src: "/chatoo-university.png",
      desc: "Chatoo - Solution robuste et intuitive pour les besoins de communication modernes."
    }
  ]
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
    education: {
      title: "Éducation et certifications",
      degree: "Bachelor of Computer Science (Software Engineering)",
      school: "Universiti Teknologi Malaysia",
      period: "Mar 2020 – Feb 2024",
      cgpa: "CGPA: 3.92",
      certificationsTitle: "Certifications",
      certifications: [
        { name: "Web Development Nanodegree", issuer: "Udacity" },
        { name: "Applied Data Science with Python", issuer: "Cognitive Class.ai" }
      ]
    },
    experience: {
      title: "Expérience professionnelle",
      items: [
        {
          "company": "Frequency Digital Group",
          "role": "Sole AI Full Stack Developer",
          "period": "Jun 2026 – Present",
          "location": "Remote",
          "responsibilities": ["Seul développeur de Review Revolution, Daily Authority, Art By MIO et FDG Workspace pour une société enregistrée à Hong Kong.", "Possède l'architecture, le frontend, le backend et les améliorations continues."],
          "tech": ["Next.js", "TypeScript", "Backend APIs", "PostgreSQL", "AI workflows"]
        },
        {
          "company": "Salesmrkt",
          "role": "Full Stack Software Engineer",
          "period": "Sep 2025 – Mar 2026",
          "location": "Seattle, USA (Remote)",
          "responsibilities": ["Applications web et chat IA, y compris une migration de React vers Next.js.", "Frontend, backend, workflows métier, paiements et déploiements cloud.", "Système de chat IA avec recommandations et recherche, réponse en 1.5s avec Gemini."],
          "tech": ["Next.js", "Tailwind CSS", "Firebase", "Shopify", "Stripe", "n8n"]
        },
        {
          "company": "Engages AI",
          "role": "Full Stack Software Engineer",
          "period": "Jan 2024 – Aug 2025",
          "location": "Singapore (Remote)",
          "responsibilities": ["CRM et chat temps réel, microservices, chat IA, workflows de données et tableaux de reporting.", "Travail sur frontend, backend, bases de données, automatisation et déploiement en production."],
          "tech": ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "LangGraph", "Rasa"]
        },
        {
          "company": "Engages AI",
          "role": "Software Engineer Intern",
          "period": "May 2023 – Dec 2023",
          "location": "Malaysia (Hybrid)",
          "responsibilities": ["Contribution à Quickdesk CRM en construisant et améliorant le frontend React.", "Services backend et capacités de chatbot IA."],
          "tech": ["React", "NestJS", "PostgreSQL", "Rasa"]
        },
        {
          "company": "Universiti Sains Islam Malaysia",
          "role": "System Analyst",
          "period": "Oct 2022 – Apr 2023",
          "location": "Malaysia (Remote)",
          "responsibilities": ["Modernisation des interfaces web et mobile héritées vers React et React Native.", "Amélioration du backend Laravel pour la maintenabilité et le support multiplateforme."],
          "tech": ["React", "React Native", "Laravel"]
        },
        {
          "company": "Google Developer Student Club, UTM",
          "role": "Technical Team Member",
          "period": "Nov 2021 – Oct 2022",
          "location": "Johor Bahru, Malaysia",
          "responsibilities": ["Ateliers de vision par ordinateur et de chatbots IA avec Azure."],
          "tech": ["Python", "Azure", "Computer Vision"]
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
