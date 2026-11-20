"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/translations-context";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  category?: string;
  featured?: boolean;
  role?: string;
  productCategory?: string;
  organization?: string;
  achievements?: string[];
  ctaLabel?: string;
  liveUrl?: string;
  icon?: string;
  images?: Array<{ src: string; desc: string }>;
};

export function FeaturedWork() {
  const { t } = useI18n();
  const featured = (t.projects.items as ProjectItem[]).filter((p) => p.featured);

  return (
    <section id="work" style={{ padding: "100px 10%" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "24px" }}
      >
        <h2 className="gradient-text" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", marginBottom: "12px" }}>
          {t.projects.title}
        </h2>
        <p style={{ color: "rgba(255,255,255,0.6)" }}>{t.projects.featuredTitle}</p>
      </motion.div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "30px",
        }}
      >
        {featured.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default function Projects() {
  const { t } = useI18n();
  const items = t.projects.items as ProjectItem[];
  const independent = items.filter((p) => p.category === "independent-projects");
  const selected = items.filter((p) => p.category === "selected-work");

  return (
    <section id="projects" style={{ padding: "60px 10% 100px" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        <h2 className="gradient-text" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
          {t.projects.independentTitle}
        </h2>
      </motion.div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "30px",
          marginBottom: "80px",
        }}
      >
        {independent.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        <h3 className="gradient-text" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
          {t.projects.selectedTitle}
        </h3>
      </motion.div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "30px",
        }}
      >
        {selected.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginTop: "100px", marginBottom: "40px" }}
      >
        <h3 className="gradient-text" style={{ fontSize: "2.5rem" }}>
          {t.projects.moreCategories}
        </h3>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: "30px",
          marginTop: "20px",
        }}
      >
        {t.projects.categories.map((folder, index) => (
          <Link href={`/projects/category/${folder.slug}`} key={folder.slug} style={{ textDecoration: "none" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ position: "relative", cursor: "pointer" }}
            >
              <div
                style={{
                  width: "40%",
                  height: "25px",
                  background: "rgba(255,255,255,0.05)",
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                  border: "1px solid var(--glass-border)",
                  borderBottom: "none",
                  marginLeft: "20px",
                  position: "relative",
                  top: "1px",
                  zIndex: 1,
                }}
              />
              <div
                className="glass"
                style={{
                  padding: "40px 30px",
                  borderRadius: "20px",
                  borderTopLeftRadius: "5px",
                  border: "1px solid var(--glass-border)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "15px",
                  background: "rgba(255,255,255,0.03)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "10px" }}>{folder.icon}</div>
                <h4 style={{ color: "white", fontSize: "1.5rem", margin: 0 }}>{folder.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", margin: 0, lineHeight: "1.5" }}>
                  {folder.desc}
                </p>
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--accent-primary)",
                    marginTop: "10px",
                    fontWeight: 600,
                  }}
                >
                  {t.projects.viewProjects}
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
