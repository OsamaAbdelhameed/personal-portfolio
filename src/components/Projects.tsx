import { motion } from "framer-motion";
import { useI18n } from "@/lib/translations";

export default function Projects() {
  const { t, isRTL } = useI18n();

  return (
    <section 
      id="projects" 
      style={{ 
        padding: "120px 10%", 
        textAlign: isRTL ? 'right' : 'left' 
      }}
    >
      <h2 
        className="gradient-text" 
        style={{ 
          fontSize: "clamp(2.5rem, 5vw, 4rem)", 
          marginBottom: "50px", 
          textAlign: "center",
          fontWeight: 800
        }}
      >
        {t.projects.title}
      </h2>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(clamp(280px, 90%, 400px), 1fr))", 
        gap: "25px",
        direction: isRTL ? 'rtl' : 'ltr'
      }}>
        {t.projects.items.map((project, index) => (
          <motion.div
            key={index}
            className="glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            style={{ 
              padding: "30px", 
              border: "1px solid var(--glass-border)",
              display: "flex",
              flexDirection: "column",
              gap: "15px"
            }}
          >
            <h3 style={{ fontSize: "1.8rem", fontWeight: 700 }}>{project.title}</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
              {project.description}
            </p>
            <div style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: "10px", 
              marginTop: "auto",
              flexDirection: isRTL ? 'row-reverse' : 'row'
            }}>
              {["Next.js", "AI", "Cloud"].map((tech, i) => (
                <span key={i} style={{ 
                  fontSize: "0.8rem", 
                  padding: "4px 12px", 
                  background: "rgba(112, 0, 255, 0.1)", 
                  borderRadius: "20px",
                  border: "1px solid rgba(112, 0, 255, 0.3)",
                  color: "rgba(255,255,255,0.8)"
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
