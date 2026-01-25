import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ReactCountryFlag from "react-country-flag";
import { useI18n } from "@/lib/translations-context";

export default function About() {
  const { t, isRTL } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const stats = [
    { label: t.about.stats.cgpa, value: "3.92", icon: "🎓" },
    { label: t.about.stats.exp, value: "2+", icon: "💼" },
    { label: t.about.stats.projects, value: "10+", icon: "🚀" },
    { label: t.about.stats.tech, value: "20+", icon: "⚡" }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      style={{ 
        padding: "120px 10%",
        position: "relative",
        textAlign: isRTL ? 'right' : 'left'
      }}
    >
      {/* Background gradient */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: isRTL ? "auto" : "-10%",
        right: isRTL ? "-10%" : "auto",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(0, 209, 255, 0.15) 0%, transparent 70%)",
        filter: "blur(80px)",
        pointerEvents: "none"
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section Title */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8 }}
  style={{ textAlign: "center", marginBottom: "60px" }}
>
  <h2 
    className="gradient-text" 
    style={{ 
      fontSize: "clamp(2.5rem, 5vw, 4rem)", 
      marginBottom: "20px",
      fontWeight: 800
    }}
  >
    {t.about.title}
  </h2>
  <p style={{ 
    fontSize: "1.2rem", 
    color: "rgba(255,255,255,0.6)",
    maxWidth: "700px",
    margin: "0 auto"
  }}>
    {t.about.subtitle}
  </p>
</motion.div>

        {/* Main Content */}
        <div className="about-main-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "40px",
          marginBottom: "60px",
          direction: isRTL ? 'rtl' : 'ltr'
        }}>
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass"
            style={{
              padding: "40px",
              borderRadius: "16px",
              border: "1px solid var(--glass-border)",
              textAlign: isRTL ? "right" : "left"
            }}
          >
            <h3 style={{
              fontSize: "1.8rem",
              fontWeight: 700,
              marginBottom: "20px",
              color: "#00D1FF"
            }}>
              {t.about.bio_title}
            </h3>
            <p style={{ 
              fontSize: "1.1rem", 
              color: "rgba(255,255,255,0.8)", 
              lineHeight: 1.8,
              marginBottom: "20px"
            }}>
              {t.about.bio_p1}
            </p>
            <p style={{ 
              fontSize: "1.1rem", 
              color: "rgba(255,255,255,0.8)", 
              lineHeight: 1.8,
              marginBottom: "20px"
            }}>
              {t.about.bio_p2}
            </p>
            <p style={{ 
              fontSize: "1.1rem", 
              color: "rgba(255,255,255,0.8)", 
              lineHeight: 1.8
            }}>
              {t.about.bio_p3}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="stats-grid-container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px"
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass"
                style={{
                  padding: "25px",
                  borderRadius: "12px",
                  border: "1px solid var(--glass-border)",
                  textAlign: "center",
                  cursor: "pointer"
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
                  {stat.icon}
                </div>
                <div style={{ 
                  fontSize: "2rem", 
                  fontWeight: 800, 
                  color: "#00D1FF",
                  marginBottom: "5px"
                }}>
                  {stat.value}
                </div>
                <div style={{ 
                  fontSize: "0.9rem", 
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: 500
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass journey-container"
          style={{
            padding: "40px",
            borderRadius: "16px",
            border: "1px solid var(--glass-border)",
            position: "relative",
            overflow: "hidden",
            marginBottom: "40px"
          }}
        >
          <h3 style={{
            fontSize: "1.8rem",
            fontWeight: 700,
            marginBottom: "40px",
            color: "#9D4EDD",
            textAlign: "center"
          }}>
            {t.about.journey_title}
          </h3>
          
          <div className="journey-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "30px",
            position: "relative",
            direction: isRTL ? 'rtl' : 'ltr'
          }}>
            {/* Connection Line (Desktop Only) */}
            <div className="journey-line" />

            {t.about.journey.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="journey-item"
                style={{
                  textAlign: "center",
                  position: "relative",
                  zIndex: 1
                }}
              >
                <div className="journey-icon" style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "rgba(112, 0, 255, 0.2)",
                  border: "2px solid #7000FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "1.5rem"
                }}>
                  <ReactCountryFlag 
                    countryCode={location.countryCode} 
                    svg 
                    style={{
                      width: '1.5em',
                      height: '1.5em',
                    }}
                    title={location.country}
                  />
                </div>
                <div style={{ fontWeight: 800, fontSize: "1.5rem", marginBottom: "5px", color: "white" }}>
                  {location.countryCode}
                </div>
                <div style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.9)",
                  marginBottom: "5px"
                }}>
                  {location.country}
                </div>
                <div style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.5)"
                }}>
                  {location.role}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            marginTop: "40px",
            textAlign: "center"
          }}
        >
          <h3 style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "20px",
            color: "#FFB800"
          }}>
            {t.about.languages_title}
          </h3>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            direction: isRTL ? 'rtl' : 'ltr'
          }}>
            {t.about.languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="glass"
                style={{
                  padding: "15px 25px",
                  borderRadius: "10px",
                  border: "1px solid var(--glass-border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <ReactCountryFlag 
                  countryCode={language.code} 
                  svg 
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                  }}
                />
                <div style={{ textAlign: isRTL ? "right" : "left" }}>
                  <div style={{ fontWeight: 700, color: "white" }}>{language.lang}</div>
                  <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>{language.level}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
