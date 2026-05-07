"use client";

import { useState } from "react";
import Experience3D from "@/components/Experience3D";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";
import { useI18n } from "@/lib/translations-context";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://n8n.mindsteptutor.com/webhook/new-personal-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className="main-container">
      <Navbar />
      <Experience3D />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Work Experience Section */}
      <WorkExperience />

      {/* Skills Section */}
      <Skills />

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
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contact.name_placeholder} 
              className="glass" 
              style={{ padding: "15px", border: "1px solidvar(--glass-border)", color: "white" }} 
              required 
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.contact.email_placeholder} 
              className="glass" 
              style={{ padding: "15px", border: "1px solidvar(--glass-border)", color: "white" }} 
              required 
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.contact.message_placeholder} 
              className="glass" 
              style={{ padding: "15px", border: "1px solidvar(--glass-border)", color: "white", minHeight: "150px" }} 
              required 
            />
            <button type="submit" className="btn-glow" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : t.contact.submit_button}
            </button>
            {submitStatus === "success" && (
              <p style={{ color: "#4ade80", marginTop: "10px" }}>Message sent successfully!</p>
            )}
            {submitStatus === "error" && (
              <p style={{ color: "#f87171", marginTop: "10px" }}>Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </section>

      <footer style={{ padding: "50px 10%", textAlign: "center", borderTop: "1px solid var(--glass-border)", marginTop: "100px" }}>
        <p style={{ color: "rgba(255,255,255,0.5)" }}>&copy; {new Date().getFullYear()} {t.footer.text}</p>
      </footer>
    </main>
  );
}
