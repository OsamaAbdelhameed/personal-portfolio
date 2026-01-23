"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/translations";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Experience3D from "@/components/Experience3D";

export default function ProjectPage() {
  const { slug } = useParams();
  const { t, isRTL } = useI18n();
  const router = useRouter();

  const project = t.projects.items.find((p: any) => p.slug === slug);

  if (!project) {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
        <h1>Project Not Found</h1>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "#050505", color: "white" }}>
      <Navbar />
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
        <Experience3D />
      </div>

      <div style={{ position: "relative", zIndex: 1, padding: "150px 10% 100px" }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "40px" }}
        >
          <Link href="/#projects" style={{ 
            color: "var(--accent-primary)", 
            textDecoration: "none", 
            display: "flex", 
            alignItems: "center", 
            gap: "10px",
            fontSize: "1.1rem"
          }}>
            {isRTL ? "← العودة إلى المشاريع" : "← Back to Projects"}
          </Link>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="gradient-text" style={{ fontSize: "clamp(3rem, 8vw, 5rem)", marginBottom: "20px" }}>
              {project.title}
            </h1>
            <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", marginBottom: "40px", lineHeight: "1.8" }}>
              {project.longDescription}
            </p>

            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Tech Stack</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {project.tech.map((skill: string, i: number) => (
                  <span key={i} className="glass" style={{
                    padding: "8px 20px",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.05)"
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-glow"
                style={{ display: "inline-block", textDecoration: "none", padding: "15px 40px" }}
              >
                Visit Live Site
              </a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass" style={{ 
              width: "100%", 
              aspectRatio: "16/9", 
              borderRadius: "30px", 
              border: "1px solid var(--glass-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              background: "rgba(255,255,255,0.02)",
              marginBottom: "30px"
            }}>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>
                {project.videoUrl ? "Video Player Placeholder" : "Project Image Gallery Placeholder"}
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div className="glass" style={{ aspectRatio: "4/3", borderRadius: "20px", border: "1px solid var(--glass-border)", background: "rgba(255,255,255,0.05)" }}></div>
              <div className="glass" style={{ aspectRatio: "4/3", borderRadius: "20px", border: "1px solid var(--glass-border)", background: "rgba(255,255,255,0.05)" }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
