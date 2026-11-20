import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    id: "frequency-digital-group",
    organization: "Frequency Digital Group",
    title: "Sole AI Full Stack Developer",
    start: "2026-06",
    current: true,
    location: "Remote",
    engagement: "employment",
    highlights: [
      "Sole developer for Review Revolution, Daily Authority, Art By MIO, and FDG Workspace, covering product architecture, frontend, backend, and ongoing delivery.",
      "Hong Kong-registered company. Full product ownership without team-management or founder claims.",
    ],
    tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "AI workflows"],
  },
  {
    id: "salesmrkt",
    organization: "Salesmrkt",
    title: "Full Stack Software Engineer",
    start: "2025-09",
    end: "2026-03",
    location: "Seattle, USA (Remote)",
    engagement: "employment",
    highlights: [
      "Built and enhanced web applications and AI-enabled chat functionality, including a migration from React to Next.js.",
      "Delivered frontend and backend features, business workflows, e-commerce updates, payments, and cloud deployments.",
      "Developed an AI chatting system with recommendations and in-depth search, responding in 1.5s using Gemini.",
    ],
    tech: ["Next.js", "Tailwind CSS", "Firebase", "Algolia", "Zustand", "Shopify", "Stripe", "n8n"],
  },
  {
    id: "engages-ai",
    organization: "Engages AI",
    title: "Full Stack Software Engineer",
    start: "2024-01",
    end: "2025-08",
    location: "Singapore (Remote)",
    engagement: "employment",
    highlights: [
      "Developed CRM and real-time chat capabilities, backend microservices, AI-assisted chat functionality, data workflows, and reporting dashboards.",
      "Worked across frontend, backend, database design, automation, and production deployment.",
    ],
    tech: ["NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "LangGraph", "Rasa"],
  },
  {
    id: "engages-ai-intern",
    organization: "Engages AI",
    title: "Software Engineer Intern",
    start: "2023-05",
    end: "2023-12",
    location: "Malaysia (Hybrid)",
    engagement: "internship",
    highlights: [
      "Contributed to the Quickdesk CRM platform by building and enhancing its React frontend.",
      "Implemented backend services and AI chatbot capabilities for the application.",
    ],
    tech: ["React", "NestJS", "PostgreSQL", "Rasa"],
  },
  {
    id: "usim",
    organization: "Universiti Sains Islam Malaysia",
    title: "System Analyst",
    start: "2022-10",
    end: "2023-04",
    location: "Malaysia (Remote)",
    engagement: "employment",
    highlights: [
      "Modernized legacy web and mobile interfaces by migrating to React and React Native.",
      "Enhanced the Laravel backend to improve maintainability and support cross-platform applications.",
    ],
    tech: ["React", "React Native", "Laravel"],
  },
  {
    id: "gdsc-utm",
    organization: "Google Developer Student Club, UTM",
    title: "Technical Team Member",
    start: "2021-11",
    end: "2022-10",
    location: "Johor Bahru, Malaysia",
    engagement: "volunteering",
    highlights: [
      "Supported computer vision and AI chatbot workshops using Azure as a student club instructor.",
    ],
    tech: ["Python", "Azure", "Computer Vision"],
  },
];

export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

export function formatMonthYear(iso: string): string {
  const [year, month] = iso.split("-").map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}

export function formatPeriod(item: ExperienceItem): string {
  const start = formatMonthYear(item.start);
  if (item.current) return `${start} – Present`;
  if (!item.end) return start;
  return `${start} – ${formatMonthYear(item.end)}`;
}
