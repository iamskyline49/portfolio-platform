"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a,transparent_50%)]" />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative z-10 max-w-5xl text-center"
      >
        <p className="mb-4 text-blue-400">Full Stack Developer</p>

        <h1 className="mb-6 text-6xl font-black leading-tight md:text-8xl">
          Building Modern
          <span className="block bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI Powered Apps
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
          CS Student, AI/ML Enthusiast, Researcher, and Full Stack Developer
          building scalable web applications and intelligent systems.
        </p>

        <div className="flex justify-center gap-4">
          <button className="rounded-2xl bg-blue-500 px-8 py-4 font-semibold transition hover:bg-blue-600">
            View Projects
          </button>

          <button className="rounded-2xl border border-slate-700 px-8 py-4 transition hover:border-blue-400">
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  );
}
