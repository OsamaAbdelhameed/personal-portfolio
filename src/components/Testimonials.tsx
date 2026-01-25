"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Joseph Greco",
    role: "CEO at Salesmrkt",
    text: "Osama is an exceptional engineer. His AI integrations transformed our CRM workflow and significantly boosted efficiency.",
    image: "/placeholder-user1.jpg"
  },
  {
    name: "Jan Smith",
    role: "Product Manager",
    text: "The UTMSIR project was a huge success thanks to Osama's ability to simplify complex automated assignments.",
    image: "/placeholder-user2.jpg"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section style={{ padding: "100px 10%", textAlign: "center" }}>
      <h2 className="gradient-text" style={{ fontSize: "3rem", marginBottom: "50px" }}>Testimonials</h2>
      <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
        <motion.div
          key={index}
          className="glass"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ padding: "50px", border: "1px solid var(--glass-border)" }}
        >
          <p style={{ fontSize: "1.5rem", fontStyle: "italic", marginBottom: "30px", lineHeight: 1.6 }}>
            "{testimonials[index].text}"
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
            <div style={{ 
              width: "60px", 
              height: "60px", 
              borderRadius: "50%", 
              background: "var(--primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              fontWeight: 800
            }}>
              {testimonials[index].name[0]}
            </div>
            <div style={{ textAlign: "left" }}>
              <h4 style={{ fontSize: "1.2rem" }}>{testimonials[index].name}</h4>
              <p style={{ color: "rgba(255,255,255,0.6)" }}>{testimonials[index].role}</p>
            </div>
          </div>
        </motion.div>
        
        <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "20px" }}>
          <button onClick={prev} className="glass" style={{ padding: "10px 20px", cursor: "pointer", color: "white" }}>Prev</button>
          <button onClick={next} className="glass" style={{ padding: "10px 20px", cursor: "pointer", color: "white" }}>Next</button>
        </div>
      </div>
    </section>
  );
}
