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
  title: "Osama Abdelnasser | AI Full Stack Software Engineer",
  description: "AI full stack software engineer and sole developer of Review Revolution, Daily Authority, Art By MIO, and FDG Workspace at Frequency Digital Group.",
  keywords: ["AI", "Full Stack", "Osama Abdelnasser", "Software Engineer", "Frequency Digital Group", "Review Revolution"],
  authors: [{ name: "Osama Abdelnasser" }],
  creator: "Osama Abdelnasser",
  publisher: "Osama Abdelnasser",
  metadataBase: new URL("https://osamaabdelnasser.netlify.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Osama Abdelnasser | AI Full Stack Software Engineer",
    description: "Building complex SaaS products from architecture to delivery. Sole AI full stack developer at Frequency Digital Group.",
    type: "website",
    locale: "en_US",
    siteName: "Osama Abdelnasser",
    url: "https://osamaabdelnasser.netlify.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osama Abdelnasser | AI Full Stack Software Engineer",
    description: "Building complex SaaS products from architecture to delivery.",
    creator: "@OsamaAbdelnasser",
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
