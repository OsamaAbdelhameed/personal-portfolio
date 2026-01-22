"use client";

import Experience3D from "@/components/Experience3D";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";
import { useI18n } from "@/lib/translations";

export default function Home() {
  const { t } = useI18n();
  return (
    <main className="main-container">
      <Navbar />
      <Experience3D />
      
      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <Skills />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <section id="contact" style={{ padding: "100px 10%", textAlign: "center" }}>
        <div className="glass" style={{ padding: "60px", maxWidth: "600px", margin: "0 auto" }}>
          <h2 className="gradient-text" style={{ fontSize: "2.5rem", marginBottom: "30px" }}>{t.contact.title}</h2>
          <p style={{ marginBottom: "40px", color: "rgba(255,255,255,0.7)" }}>
            {t.contact.description}
          </p>
          <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <input type="text" placeholder={t.contact.name_placeholder} className="glass" style={{ padding: "15px", border: "1px solid var(--glass-border)", color: "white" }} />
            <input type="email" placeholder={t.contact.email_placeholder} className="glass" style={{ padding: "15px", border: "1px solid var(--glass-border)", color: "white" }} />
            <textarea placeholder={t.contact.message_placeholder} className="glass" style={{ padding: "15px", border: "1px solid var(--glass-border)", color: "white", minHeight: "150px" }} />
            <button type="submit" className="btn-glow">{t.contact.submit_button}</button>
          </form>
        </div>
      </section>

      <footer style={{ padding: "50px 10%", textAlign: "center", borderTop: "1px solid var(--glass-border)", marginTop: "100px" }}>
        <p style={{ color: "rgba(255,255,255,0.5)" }}>&copy; {new Date().getFullYear()} {t.footer.text}</p>
      </footer>
    </main>
  );
}
