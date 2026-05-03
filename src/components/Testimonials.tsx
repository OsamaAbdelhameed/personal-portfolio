"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Joseph Greco",
    role: "CEO at Salesmrkt",
    text: "Osama is an exceptional engineer. His AI integrations transformed our CRM workflow and significantly boosted efficiency.",
    image: "/joe.png"
  },
  {
    name: "Matthew Curran",
    role: "Founder at GRN Shoreline",
    text: "Osama is very responsive, quick, on-target and patient. I'm not a web designer in any way, yet he was able to translate my suggestions into exactly what I needed. He is very good.",
    image: "/matthew.png"
  },
  {
    name: "Ismail AL.Mahdy",
    role: "Team Lead Engineer at Engages.ai",
    text: "I’ve had the pleasure of managing Osama directly during his time at Engages.ai, and I can confidently say he is one of the most driven and reliable engineers I’ve worked with. Osama played a pivotal role in building and scaling our AI-powered CRM chat system from the ground up, contributing across the stack—from frontend interfaces using React and MUI to backend microservices with NestJS, PostgreSQL, and Redis....",
    image: "/ismail.jpeg"
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
            <img src={testimonials[index].image} style={{ width: "60px", height: "60px", borderRadius: "50%" }} />
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
