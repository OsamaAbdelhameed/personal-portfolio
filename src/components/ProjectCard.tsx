"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/translations-context";

const THUMBNAILS: Record<string, string> = {
  "review-revolution": "RR",
  "daily-authority": "DA",
  "art-by-mio": "AM",
  "mind-step-tutor": "MS",
  "engages-ai": "💬",
  salesmrkt: "🚀",
  gotryone: "🧪",
  utmsir: "🎓",
};

type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  role?: string;
  productCategory?: string;
  organization?: string;
  achievements?: string[];
  ctaLabel?: string;
  featured?: boolean;
  liveUrl?: string;
  icon?: string;
  images?: Array<{ src: string; desc: string }>;
};

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const { t } = useI18n();
  const thumb = THUMBNAILS[project.slug] ?? project.title.slice(0, 2).toUpperCase();
  const cover = project.images?.[0];
  const icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass"
      style={{
        padding: "30px",
        borderRadius: "30px",
        border: "1px solid var(--glass-border)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "160px",
          background: "linear-gradient(135deg, rgba(112,0,255,0.25), rgba(0,209,255,0.15))",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: thumb.length <= 2 ? "2.4rem" : "3rem",
          fontWeight: 800,
          color: "white",
          letterSpacing: "0.04em",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {cover ? (
          <img
            src={cover.src}
            alt={cover.desc || project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : icon ? (
          <img
            src={icon}
            alt=""
            style={{ width: "88px", height: "88px", objectFit: "contain" }}
          />
        ) : (
          thumb
        )}
        {icon && cover && (
          <img
            src={icon}
            alt=""
            style={{
              position: "absolute",
              left: "12px",
              bottom: "12px",
              width: "48px",
              height: "48px",
              objectFit: "contain",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.95)",
              padding: "4px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
            }}
          />
        )}
      </div>

      {project.productCategory && (
        <p style={{ color: "var(--accent-primary)", fontSize: "0.8rem", margin: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>
          {project.productCategory}
        </p>
      )}
      <h3 style={{ fontSize: "1.6rem", color: "white", margin: 0, display: "flex", alignItems: "center", gap: "10px" }}>
        {icon && (
          <img
            src={icon}
            alt=""
            style={{
              width: "32px",
              height: "32px",
              objectFit: "contain",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.95)",
              flexShrink: 0,
            }}
          />
        )}
        {project.title}
      </h3>
      {project.role && (
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", margin: 0 }}>{project.role}</p>
      )}
      <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.6", flexGrow: 1, margin: 0 }}>
        {project.description}
      </p>
      {project.achievements && project.achievements.length > 0 && (
        <ul style={{ margin: 0, paddingLeft: "18px", color: "rgba(255,255,255,0.75)", display: "flex", flexDirection: "column", gap: "8px" }}>
          {project.achievements.slice(0, 2).map((item) => (
            <li key={item} style={{ lineHeight: 1.5 }}>{item}</li>
          ))}
        </ul>
      )}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {project.tech.slice(0, 5).map((skill) => (
          <span
            key={skill}
            style={{
              padding: "4px 12px",
              borderRadius: "12px",
              fontSize: "0.75rem",
              background: "rgba(0,180,216,0.1)",
              color: "var(--accent-primary)",
              border: "1px solid rgba(0,180,216,0.2)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
        <Link
          href={`/projects/${project.slug}`}
          className="btn-glow"
          style={{
            textAlign: "center",
            textDecoration: "none",
            flex: "1 1 140px",
          }}
        >
          {project.ctaLabel || t.projects.caseStudy || t.projects.learnMore}
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow"
            style={{
              textAlign: "center",
              textDecoration: "none",
              flex: "1 1 140px",
            }}
          >
            Visit Live Site
          </a>
        )}
      </div>
    </motion.div>
  );
}
