"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/translations-context";

export default function Education() {
  const { t } = useI18n();

  return (
    <section id="education" style={{ padding: "100px 10%" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "50px" }}
      >
        <h2 className="gradient-text" style={{ fontSize: "clamp(2.2rem, 5vw, 3rem)" }}>
          {t.education.title}
        </h2>
      </motion.div>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gap: "24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass"
          style={{ padding: "32px", borderRadius: "20px", border: "1px solid var(--glass-border)" }}
        >
          <h3 style={{ fontSize: "1.4rem", color: "white", marginBottom: "8px" }}>{t.education.degree}</h3>
          <p className="gradient-text" style={{ fontSize: "1.1rem", marginBottom: "8px" }}>{t.education.school}</p>
          <p style={{ color: "rgba(255,255,255,0.65)" }}>{t.education.period} · {t.education.cgpa}</p>
        </motion.div>
        <div>
          <h3 style={{ color: "white", marginBottom: "16px", fontSize: "1.2rem" }}>{t.education.certificationsTitle}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "16px" }}>
            {t.education.certifications.map((cert) => (
              <div
                key={cert.name}
                className="glass"
                style={{ padding: "20px", borderRadius: "16px", border: "1px solid var(--glass-border)" }}
              >
                <p style={{ color: "white", fontWeight: 600, marginBottom: "6px" }}>{cert.name}</p>
                <p style={{ color: "rgba(255,255,255,0.6)", margin: 0 }}>{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
