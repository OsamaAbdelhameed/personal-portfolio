"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/translations-context";

export default function WorkExperience() {
  const { t, isRTL } = useI18n();

  return (
    <section id="experience" style={{ padding: "100px 10%", position: "relative" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
        <h2 className="gradient-text" style={{ fontSize: "3rem", marginBottom: "20px" }}>
          {t.experience.title}
        </h2>
      </motion.div>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        maxWidth: "900px",
        margin: "0 auto",
        position: "relative"
      }}>
        {/* Vertical Line */}
        <div style={{
          position: "absolute",
          left: isRTL ? "auto" : "20px",
          right: isRTL ? "20px" : "auto",
          top: 0,
          bottom: 0,
          width: "2px",
          background: "linear-gradient(to bottom, transparent, var(--accent-primary), transparent)",
          opacity: 0.3
        }} />

        {t.experience.items.map((item: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass"
            style={{
              padding: "40px",
              marginLeft: isRTL ? "0" : "60px",
              marginRight: isRTL ? "60px" : "0",
              position: "relative",
              border: "1px solid var(--glass-border)",
              borderRadius: "20px"
            }}
          >
            {/* Timeline Dot */}
            <div style={{
              position: "absolute",
              left: isRTL ? "auto" : "-52px",
              right: isRTL ? "-52px" : "auto",
              top: "45px",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "var(--accent-primary)",
              boxShadow: "0 0 15px var(--accent-primary)",
              border: "4px solid rgba(0,0,0,0.5)"
            }} />

            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
              <div>
                <h3 style={{ fontSize: "1.5rem", color: "white", marginBottom: "5px" }}>{item.role}</h3>
                <h4 className="gradient-text" style={{ fontSize: "1.2rem" }}>{item.company}</h4>
              </div>
              <div style={{ textAlign: isRTL ? "left" : "right" }}>
                <p style={{ color: "var(--accent-primary)", fontWeight: "bold" }}>{item.period}</p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>{item.location}</p>
              </div>
            </div>

            <ul style={{ 
              listStyle: "none", 
              padding: 0, 
              display: "flex", 
              flexDirection: "column", 
              gap: "10px",
              marginBottom: "30px"
            }}>
              {item.responsibilities.map((resp: string, i: number) => (
                <li key={i} style={{ 
                  color: "rgba(255,255,255,0.8)", 
                  lineHeight: "1.6",
                  paddingLeft: isRTL ? "0" : "20px",
                  paddingRight: isRTL ? "20px" : "0",
                  position: "relative"
                }}>
                  <span style={{ 
                    position: "absolute", 
                    left: isRTL ? "auto" : "0", 
                    right: isRTL ? "0" : "auto", 
                    color: "var(--accent-primary)" 
                  }}>▹</span>
                  {resp}
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {item.tech.map((skill: string, i: number) => (
                <span key={i} className="glass" style={{
                  padding: "5px 12px",
                  borderRadius: "15px",
                  fontSize: "0.8rem",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)"
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
