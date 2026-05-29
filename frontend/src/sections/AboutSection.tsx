"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
          About
        </p>

        <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Focused on building scalable systems, reliable software, and
          meaningful digital experiences.
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-zinc-400">
            Computer Science undergraduate with experience in full-stack
            development, backend systems, testing workflows, and deployment
            pipelines.
          </p>

          <p className="text-lg leading-relaxed text-zinc-400">
            Interested in modern web technologies, automation testing, software
            architecture, and building maintainable applications.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
