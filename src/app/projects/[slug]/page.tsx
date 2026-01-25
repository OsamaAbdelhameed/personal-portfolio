"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useI18n } from "@/lib/translations-context";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Experience3D from "@/components/Experience3D";

export default function ProjectPage() {
  const { slug } = useParams();
  const { t, isRTL } = useI18n();
  const router = useRouter();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const project = t.projects.items.find((p: any) => p.slug === slug);

  if (!project) {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
        <h1>Project Not Found</h1>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null && project.images) {
      setSelectedImageIndex((selectedImageIndex + 1) % project.images.length);
      setIsZoomed(false);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null && project.images) {
      setSelectedImageIndex((selectedImageIndex - 1 + project.images.length) % project.images.length);
      setIsZoomed(false);
    }
  };

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
              {project.videoUrl ? (
                <video 
                  src={project.videoUrl} 
                  controls 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <span style={{ color: "rgba(255,255,255,0.2)" }}>
                  Project Image Gallery Placeholder
                </span>
              )}
            </div>

            {/* Image Gallery Grid */}
            {project.images && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                {project.images.map((img: { src: string; desc: string }, idx: number) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass"
                    onClick={() => {
                      setSelectedImageIndex(idx);
                      setIsZoomed(false);
                    }}
                    style={{ 
                      aspectRatio: "4/3", 
                      borderRadius: "20px", 
                      border: "1px solid var(--glass-border)", 
                      background: "rgba(255,255,255,0.05)",
                      cursor: "pointer",
                      overflow: "hidden",
                      position: "relative"
                    }}
                  >
                     <img 
                       src={img.src} 
                       alt={img.desc} 
                       style={{ width: "100%", height: "100%", objectFit: "cover" }}
                     />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && project.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.9)",
              backdropFilter: "blur(10px)",
              zIndex: 1000,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px"
            }}
          >
            {/* Left Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              style={{
                position: "absolute",
                left: "30px",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                color: "white",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1001,
              }}
            >
              ←
            </motion.button>

            {/* Right Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              style={{
                position: "absolute",
                right: "30px",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                color: "white",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1001,
              }}
            >
               →
            </motion.button>

            <motion.div
              key={selectedImageIndex} // Key forces re-render for smooth transition
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isZoomed ? 1.5 : 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
              style={{
                position: "relative",
                maxWidth: "90%",
                maxHeight: "80%",
                cursor: isZoomed ? "zoom-out" : "zoom-in",
                overflow: isZoomed ? "visible" : "hidden",
                borderRadius: "20px",
                boxShadow: "0 0 50px rgba(0,0,0,0.5)"
              }}
            >
              <img 
                src={project.images[selectedImageIndex].src} 
                alt={project.images[selectedImageIndex].desc} 
                style={{ 
                  width: "auto", 
                  height: "auto", 
                  maxWidth: "100%", 
                  maxHeight: "80vh",
                  borderRadius: "20px",
                  objectFit: "contain"
                }} 
              />
            </motion.div>
            
            <motion.p
              key={`desc-${selectedImageIndex}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              style={{
                marginTop: "20px",
                color: "white",
                fontSize: "1.1rem",
                textAlign: "center",
                maxWidth: "600px",
                background: "rgba(0,0,0,0.5)",
                padding: "10px 20px",
                borderRadius: "30px"
              }}
            >
              {project.images[selectedImageIndex].desc}
            </motion.p>
            
            <button
               onClick={() => setSelectedImageIndex(null)}
               style={{
                 position: "absolute",
                 top: "30px",
                 right: "30px",
                 background: "rgba(255,255,255,0.1)",
                 border: "none",
                 color: "white",
                 width: "40px",
                 height: "40px",
                 borderRadius: "50%",
                 cursor: "pointer",
                 fontSize: "20px",
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 transition: "background 0.3s",
                 zIndex: 1002
               }}
               onMouseOver={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
               onMouseOut={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
