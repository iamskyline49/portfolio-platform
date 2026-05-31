"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-20">
      <div className="mx-auto grid max-w-7xl gap-20 md:grid-cols-2">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Full Stack Developer • Automation Tester
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Building reliable
            <br />
            digital products.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            Passionate about building scalable web applications, automation
            workflows, and clean user experiences.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:scale-[1.02]"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-zinc-800 px-8 py-4 text-sm text-white transition hover:border-zinc-600"
            >
              Contact
            </Link>

            <a
              href="/CV_ProttoySarkerDiganto_Updated.pdf"
              download
              className="rounded-full border border-zinc-800 px-8 py-4 text-sm text-white transition hover:border-zinc-600"
            >
              Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* REPLACE THIS IMAGE */}
          <img
            src="/images/prp.png"
            alt="Profile"
            className="h-650px w-full rounded-[40px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
