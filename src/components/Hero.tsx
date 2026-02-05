"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useI18n } from "@/lib/translations-context";

export default function Hero() {
  const { t, isRTL } = useI18n();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.5")
    .from(ctaRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.4");
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      style={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        padding: "120px 10% 60px",
        position: "relative",
        zIndex: 2,
        textAlign: isRTL ? 'right' : 'left'
      }}
    >
      <div style={{ maxWidth: "900px", margin: isRTL ? '0 0 0 auto' : '0' }}>
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            background: "rgba(112, 0, 255, 0.1)",
            border: "1px solid rgba(112, 0, 255, 0.3)",
            borderRadius: "20px",
            marginBottom: "30px",
            fontSize: "0.9rem",
            color: "rgba(255,255,255,0.8)",
            marginTop: "20px",
            flexDirection: isRTL ? 'row-reverse' : 'row'
          }}
        >
          <span>📍</span>
          <span>{t.hero.location}</span>
        </motion.div>

        {/* Main Title */}
        <h1 
          ref={titleRef}
          style={{ 
            fontSize: "clamp(3rem, 8vw, 6rem)", 
            fontWeight: 800, 
            lineHeight: 1.1,
            marginBottom: "20px"
          }}
        >
          Osama <br />
          <span className="gradient-text">Abdelnasser</span>
        </h1>

        {/* Subtitle */}
        <div ref={subtitleRef}>
          <p 
            style={{ 
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)", 
              marginTop: "20px", 
              color: "rgba(255,255,255,0.7)",
              maxWidth: "700px",
              lineHeight: 1.5
            }}
          >
            {t.hero.title}
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", marginTop: "10px" }}>
            {t.hero.description}
          </p>
        </div>

        {/* Tech Stack Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginTop: "30px",
            marginBottom: "40px",
            flexDirection: isRTL ? 'row-reverse' : 'row'
          }}
        >
          {["Next.js", "NestJS", "React", "AI/ML", "PostgreSQL", "TypeScript"].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              className="glass"
              style={{
                padding: "6px 12px",
                fontSize: "min(0.85rem, 3.5vw)",
                fontWeight: 500,
                borderRadius: "6px",
                border: "1px solid var(--glass-border)",
                color: "rgba(255,255,255,0.8)"
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        
        {/* CTA Buttons */}
        <div 
          ref={ctaRef}
          style={{ 
            display: "flex", 
            gap: "20px",
            flexWrap: "wrap",
            flexDirection: isRTL ? 'row-reverse' : 'row'
          }}
        >
          <button 
            className="btn-glow"
            onClick={() => scrollToSection("projects")}
            style={{
              padding: "14px 32px",
              fontSize: "1rem",
              fontWeight: 600
            }}
          >
            {t.hero.cta_projects}
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            style={{ 
              padding: "14px 32px", 
              background: "transparent", 
              border: "1px solid var(--glass-border)",
              borderRadius: "8px",
              color: "white",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "1rem",
              transition: "all 0.3s ease"
            }} 
            className="glass"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#00D1FF";
              e.currentTarget.style.boxShadow = "0 0 209px rgba(0, 209, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--glass-border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {t.hero.cta_contact}
          </button>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "40px",
            flexDirection: isRTL ? 'row-reverse' : 'row'
          }}
        >
          <a 
            href="https://www.linkedin.com/in/osama-abdelhameed/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "color 0.3s ease"
            }}
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/OsamaAbdelhameed" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "color 0.3s ease"
            }}
          >
            GitHub
          </a>
          <a 
            href="mailto:osamaabdelhameed41@gmail.com"
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "color 0.3s ease"
            }}
          >
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
