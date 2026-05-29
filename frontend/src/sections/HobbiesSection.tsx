"use client";

import { motion } from "framer-motion";

export default function HobbiesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="mb-16">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Beyond Work
        </p>

        <h2 className="text-5xl font-semibold tracking-tight">
          Life Outside Code
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Photography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[40px] border border-zinc-900 bg-[#111111]"
        >
          <img
            src="/images/photography.jpg"
            alt="Photography"
            className="h-450px w-full object-cover"
          />

          <div className="p-8">
            <h3 className="text-2xl font-semibold">Photography</h3>

            <p className="mt-4 leading-relaxed text-zinc-400">
              Passionate about capturing stories, environments, and moments
              through visual composition and photography.
            </p>
          </div>
        </motion.div>

        {/* Cricket */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="overflow-hidden rounded-[40px] border border-zinc-900 bg-[#111111]"
        >
          <img
            src="/images/cricket.jpg"
            alt="Cricket"
            className="h-450px w-full object-cover"
          />

          <div className="p-8">
            <h3 className="text-2xl font-semibold">Cricket</h3>

            <p className="mt-4 leading-relaxed text-zinc-400">
              Played competitive cricket representing Dhaka Division North and
              participating in university tournaments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
