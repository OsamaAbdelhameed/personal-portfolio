import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useI18n, Language } from "@/lib/translations";
import ReactCountryFlag from "react-country-flag";

export default function Navbar() {
  const { t, language, setLanguage, isRTL } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const languages = [
    { code: 'en' as Language, label: 'English', flag: '🇺🇸' },
    { code: 'ar' as Language, label: 'العربية', flag: '🇸🇦' },
    { code: 'es' as Language, label: 'Español', flag: '🇪🇸' },
    { code: 'de' as Language, label: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru' as Language, label: 'Русский', flag: '🇷🇺' },
    { code: 'fr' as Language, label: 'Français', flag: '🇫🇷' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        className="glass"
        style={{ 
          position: "fixed", 
          top: "20px", 
          left: "50%", 
          width: "95%",
          maxWidth: "1200px",
          height: "auto",
          minHeight: "60px",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          border: "1px solid var(--glass-border)",
          flexWrap: "nowrap",
          flexDirection: isRTL ? 'row-reverse' : 'row'
        }}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: 800 }} className="gradient-text">
          OA.
        </div>

        {/* Desktop Links */}
        <div className="nav-links-desktop" style={{ 
          display: "flex", 
          gap: "30px",
          flexDirection: isRTL ? 'row-reverse' : 'row'
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              style={{ 
                color: "rgba(255,255,255,0.7)", 
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "0.95rem",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00D1FF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "15px",
          flexDirection: isRTL ? 'row-reverse' : 'row'
        }}>
          {/* Language Switcher */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--glass-border)",
                color: "white",
                padding: "6px 12px",
                borderRadius: "20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.85rem"
              }}
            >
              <ReactCountryFlag 
                countryCode={language === 'ar' ? 'SA' : language === 'en' ? 'US' : language.toUpperCase()} 
                svg 
                style={{ width: '1.2em', height: '1.2em' }} 
              />
              <span style={{ textTransform: "uppercase" }}>{language}</span>
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="glass"
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: isRTL ? "auto" : "0",
                    left: isRTL ? "0" : "auto",
                    marginTop: "10px",
                    padding: "8px",
                    borderRadius: "12px",
                    border: "1px solid var(--glass-border)",
                    minWidth: "140px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px"
                  }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      style={{
                        background: language === lang.code ? "rgba(112, 0, 255, 0.2)" : "transparent",
                        border: "none",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        textAlign: "left",
                        width: "100%",
                        fontSize: "0.9rem"
                      }}
                    >
                      <ReactCountryFlag 
                        countryCode={lang.code === 'ar' ? 'SA' : lang.code === 'en' ? 'US' : lang.code.toUpperCase()} 
                        svg 
                        style={{ width: '1.2em', height: '1.2em' }} 
                      />
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            className="btn-glow"
            style={{ 
              padding: "10px 24px", 
              borderRadius: "30px", 
              background: "var(--primary)",
              color: "white",
              border: "none",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "0.9rem"
            }}
          >
            {t.nav.resume}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer",
              display: "none"
            }}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass mobile-menu-overlay"
            style={{
              position: "fixed",
              top: "90px",
              left: "2.5%",
              width: "95%",
              zIndex: 99,
              padding: "20px",
              borderRadius: "16px",
              border: "1px solid var(--glass-border)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center"
            }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  color: "white", 
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "1.1rem"
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
