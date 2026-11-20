import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    titleKey: "frontend",
    icon: "🎨",
    color: "#00D1FF",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "MUI", "Redux Toolkit", "Zustand"],
  },
  {
    id: "backend",
    titleKey: "backend",
    icon: "⚙️",
    color: "#9D4EDD",
    skills: ["NestJS", "FastAPI", "Node.js", "APIs", "Microservices", "Architecture", "Design patterns"],
  },
  {
    id: "data",
    titleKey: "data",
    icon: "🗄️",
    color: "#0066FF",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "RabbitMQ", "Socket.io"],
  },
  {
    id: "ai",
    titleKey: "ai",
    icon: "🤖",
    color: "#00F5FF",
    skills: ["Python", "Rasa", "AI chatbots", "LangGraph", "n8n"],
  },
  {
    id: "cloud",
    titleKey: "cloud",
    icon: "☁️",
    color: "#FF6B9D",
    skills: ["Docker", "Kubernetes", "Helm", "Terraform", "GitHub Actions", "AWS", "Google Cloud", "Alibaba Cloud", "Netlify", "Heroku", "Firebase"],
  },
  {
    id: "observability",
    titleKey: "observability",
    icon: "📈",
    color: "#4ADE80",
    skills: ["Grafana", "Prometheus", "OpenTelemetry"],
  },
  {
    id: "mobile",
    titleKey: "mobile",
    icon: "📱",
    color: "#7000FF",
    skills: ["Flutter", "React Native"],
  },
  {
    id: "commerce",
    titleKey: "commerce",
    icon: "💳",
    color: "#F59E0B",
    skills: ["Shopify", "Stripe", "QuickBooks"],
  },
  {
    id: "tools",
    titleKey: "tools",
    icon: "🛠️",
    color: "#FFB800",
    skills: ["Cursor", "GPT Plus"],
  },
];
