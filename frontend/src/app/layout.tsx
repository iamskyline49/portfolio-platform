import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";

import ThemeProvider from "@/components/ThemeProvider";

import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Prottoy Sarker Diganto | Full Stack Developer",

  description: "AI Engineer, Researcher, and Full Stack Developer portfolio.",

  keywords: ["Next.js", "NestJS", "AI", "Portfolio", "Developer"],

  openGraph: {
    title: "Prottoy Portfolio",

    description: "Modern AI and Full Stack Developer Portfolio",

    url: "http://localhost:3000",

    siteName: "Bipro Portfolio",

    locale: "en_US",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />

          <main className="min-h-screen">{children}</main>

          <Footer />

          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
