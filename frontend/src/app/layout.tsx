import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/Navbar";

import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Prottoy Sarker Diganto",

  description: "Full Stack Developer & Automation Tester",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <Toaster position="top-right" />

        {children}
      </body>
    </html>
  );
}
