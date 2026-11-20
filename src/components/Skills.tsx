"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "@/lib/translations-context";
import { skillCategories as skillData } from "@/data/skills";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Skills() {
  const { t, isRTL } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const skillCategories = skillData.map((category) => ({
    title: t.skills.categories[category.titleKey as keyof typeof t.skills.categories],
    icon: category.icon,
    skills: category.skills,
    color: category.color,
  }));

  useEffect(() => {
    if (isInView && titleRef.current) {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        }
      });
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      style={{ 
        padding: "120px 10%",
        position: "relative",
        overflow: "hidden",
        textAlign: isRTL ? 'right' : 'left'
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <h2 
            ref={titleRef}
            className="gradient-text" 
            style={{ 
              fontSize: "clamp(2.5rem, 5vw, 4rem)", 
              marginBottom: "20px",
              fontWeight: 800
            }}
          >
            {t.skills.title}
          </h2>
          <p style={{ 
            fontSize: "1.2rem", 
            color: "rgba(255,255,255,0.6)",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            {t.skills.subtitle}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(clamp(250px, 45%, 400px), 1fr))",
          gap: "20px",
          marginBottom: "40px",
          direction: isRTL ? 'rtl' : 'ltr'
        }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass"
              style={{
                padding: "30px",
                borderRadius: "16px",
                border: "1px solid var(--glass-border)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{category.icon}</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "20px", color: category.color }}>
                {category.title}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: isRTL ? 'flex-end' : 'flex-start' }}>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "6px 12px",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      borderRadius: "6px",
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid ${category.color}40`,
                      color: "rgba(255,255,255,0.9)"
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .glass:hover .card-glow {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
