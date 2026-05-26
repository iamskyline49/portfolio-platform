"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#2563eb22,transparent_40%)]" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,#9333ea22,transparent_35%)]" />

      {/* Noise Overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] mix-blend-soft-light" />

      <div className="mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-sm uppercase tracking-[0.3em] text-blue-400"
        >
          Full Stack Developer • Automation Tester
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-linear-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-6xl font-black leading-tight tracking-tight text-transparent md:text-8xl"
        >
          Building Modern
          <br />
          Digital Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-slate-400 md:text-xl"
        >
          Passionate Full Stack Developer and Automation Tester focused on
          scalable web applications, clean user experiences, and reliable
          software systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <Link
            href="/projects"
            className="rounded-full bg-linear-to-r from-blue-500 to-cyan-400 px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.4)] transition hover:scale-105"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 text-white backdrop-blur transition hover:border-blue-400 hover:bg-slate-800"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {[
            "Next.js",
            "NestJS",
            "PostgreSQL",
            "Prisma",
            "Playwright",
            "Selenium",
            "Cypress",
            "TypeScript",
          ].map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-900/50 px-5 py-2 text-sm text-slate-300 backdrop-blur"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
