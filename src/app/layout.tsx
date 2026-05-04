import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Osama Abdelnasser | AI Fullstack Developer",
  description: "4 years of working experience in AI Automation, Frontend, Backend and DevOps",
  keywords: ["AI", "Automation", "Frontend", "Backend", "DevOps", "Osama Abdelnasser", "Software Engineer", "AI Specialist"],
  authors: [{ name: "Osama Abdelnasser" }],
  creator: "Osama Abdelnasser",
  publisher: "Osama Abdelnasser",
  openGraph: {
    title: "Osama Abdelnasser | AI Fullstack Developer",
    description: "4 years of working experience in AI Automation, Frontend, Backend and DevOps",
    type: "website",
    locale: "en_US",
    siteName: "Osama Abdelnasser",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osama Abdelnasser | AI Fullstack Developer",
    description: "4 years of working experience in AI Automation, Frontend, Backend and DevOps",
    creator: "@OsamaAbdelnasser",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/osama.jpg"
  }
};

import { LanguageProvider } from "@/lib/translations-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
