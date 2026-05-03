"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/translations-context";
import Link from "next/link";

export default function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" style={{ padding: "100px 10%" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
        <h2 className="gradient-text" style={{ fontSize: "3.5rem", marginBottom: "20px" }}>
          {t.projects.title}
        </h2>
      </motion.div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "30px"
      }}>
        {t.projects.items.filter((p: any) => !p.category).map((project: any, index: number) => (
          <motion.div
            key={index}
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
              gap: "20px",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{
              width: "100%",
              height: "200px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem"
            }}>
              {project.slug === 'engages-ai' && "💬"}
              {project.slug === 'salesmrkt' && "🚀"}
              {project.slug === 'gotryone' && "🧪"}
              {project.slug === 'utmsir' && "🎓"}
            </div>

            <h3 style={{ fontSize: "1.8rem", color: "white" }}>{project.title}</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.6", flexGrow: 1 }}>
              {project.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.tech.map((skill: string, i: number) => (
                <span key={i} style={{
                  padding: "4px 12px",
                  borderRadius: "12px",
                  fontSize: "0.75rem",
                  background: "rgba(0,180,216,0.1)",
                  color: "var(--accent-primary)",
                  border: "1px solid rgba(0,180,216,0.2)"
                }}>
                  {skill}
                </span>
              ))}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="btn-glow"
              style={{
                textAlign: "center",
                textDecoration: "none",
                marginTop: "10px"
              }}
            >
              Learn More
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginTop: "100px", marginBottom: "40px" }}
      >
        <h3 className="gradient-text" style={{ fontSize: "2.5rem" }}>
          More Categories
        </h3>
      </motion.div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "30px",
        marginTop: "20px"
      }}>
        {[
          { title: "N8N Automations", icon: "🤖", slug: "n8n-automations", desc: "Automated workflows and integrations" },
          { title: "University Projects", icon: "🎓", slug: "university-projects", desc: "Academic research and assignments" },
          { title: "Client Portfolios", icon: "💼", slug: "client-portfolios", desc: "Portfolio websites made for customers" }
        ].map((folder, index) => (
          <Link href={`/projects/category/${folder.slug}`} key={index} style={{ textDecoration: "none" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                position: "relative",
                cursor: "pointer"
              }}
            >
              {/* Folder Tab */}
              <div style={{
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
                zIndex: 1
              }} />
              {/* Folder Body */}
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
                  zIndex: 2
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "10px" }}>{folder.icon}</div>
                <h4 style={{ color: "white", fontSize: "1.5rem", margin: 0 }}>{folder.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", margin: 0, lineHeight: "1.5" }}>{folder.desc}</p>
                <span style={{
                  fontSize: "0.9rem",
                  color: "var(--accent-primary)",
                  marginTop: "10px",
                  fontWeight: 600
                }}>
                  View Projects →
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
