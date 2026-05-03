"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/translations-context";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Experience3D from "@/components/Experience3D";

export default function CategoryPage() {
    const params = useParams();
    const slug = params?.slug as string | string[];
    const categorySlug = Array.isArray(slug) ? slug[0] : slug;
    const { t, isRTL } = useI18n();

    // Try to find projects of this category from our translation items
    // Since translations might not have 'category' property added yet, we type cast it as any
    const allProjects = t.projects.items || [];
    let categoryProjects = allProjects.filter((p: any) => p.category === categorySlug);

    // If no projects exist for this category, provide a placeholder for demonstration
    if (categoryProjects.length === 0) {
        categoryProjects = [
            {
                slug: `sample-project-for-${categorySlug}`,
                title: `Sample ${categorySlug} Project`,
                description: "A short description of this project showing its features.",
                longDescription: "A more detailed description of the sample project.",
                tech: ["React", "Next.js"],
                category: categorySlug,
                images: [{ src: "", desc: "First placeholder image" }]
            }
        ];
    }

    return (
        <main style={{ minHeight: "100vh", background: "#050505", color: "white" }}>
            <Navbar />
            <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
                <Experience3D />
            </div>

            <div style={{ position: "relative", zIndex: 1, padding: "150px 10% 100px" }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: "40px" }}
                >
                    <Link href="/#projects" style={{
                        textDecoration: "none",
                        color: "var(--accent-primary)",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "1.1rem"
                    }}>
                        {t.projects.backToProjects}
                    </Link>
                </motion.div>

                <motion.h1
                    className="gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", marginBottom: "60px", textAlign: "center" }}
                >
                    {t.projects.categoryTitles[categorySlug] || categorySlug}
                </motion.h1>

                <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
                    {categoryProjects.map((project: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="glass"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                                gap: "40px",
                                padding: "40px",
                                borderRadius: "30px",
                                border: "1px solid var(--glass-border)",
                                alignItems: "center"
                            }}
                        >
                            <div style={{
                                width: "100%",
                                aspectRatio: "16/9",
                                borderRadius: "20px",
                                overflow: "hidden",
                                background: "rgba(255,255,255,0.05)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid rgba(255,255,255,0.1)"
                            }}>
                                {project.videoUrl ? (
                                    <video
                                        src={project.videoUrl}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                ) : project.images && project.images.length > 0 && project.images[0].src !== "" ? (
                                    <img
                                        src={project.images[0].src}
                                        alt={project.images[0].desc}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                ) : (
                                    <span style={{ fontSize: "4rem" }}>{project.slug === 'engages-ai' ? "💬" : "🖼️"}</span>
                                )}
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <h2 style={{ fontSize: "2.5rem", marginBottom: "15px", color: "white" }}>{project.title}</h2>
                                <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", marginBottom: "30px" }}>
                                    {project.description}
                                </p>

                                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "30px" }}>
                                    {project.tech && project.tech.map((skill: string, i: number) => (
                                        <span key={i} style={{
                                            padding: "6px 16px",
                                            borderRadius: "15px",
                                            fontSize: "0.85rem",
                                            background: "rgba(0,180,216,0.1)",
                                            color: "var(--accent-primary)",
                                            border: "1px solid rgba(0,180,216,0.2)"
                                        }}>{skill}</span>
                                    ))}
                                </div>

                                <Link href={`/projects/${project.slug}`} className="btn-glow" style={{ alignSelf: "flex-start", textDecoration: "none", padding: "12px 30px" }}>
                                    {t.projects.learnMore}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
