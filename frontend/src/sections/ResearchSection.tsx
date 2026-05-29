"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { getResearch } from "@/services/research";

import { Research } from "@/types/research";

export default function ResearchSection() {
  const [research, setResearch] = useState<Research[]>([]);

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const data = await getResearch();

        setResearch(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResearch();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-40">
      <div className="mb-24">
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
          Research
        </p>

        <h2 className="text-6xl font-semibold tracking-tight md:text-8xl">
          Exploration
          <br />& Research.
        </h2>
      </div>

      <div className="space-y-12">
        {research.map((item) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="grid gap-10 border-t border-zinc-900 py-12 md:grid-cols-2"
          >
            <div>
              <h3 className="text-3xl font-semibold tracking-tight">
                {item.title}
              </h3>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-zinc-400">
                {item.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    className="rounded-full border border-zinc-800 px-6 py-3 text-sm text-white transition hover:border-zinc-500"
                  >
                    GitHub
                  </a>
                )}

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    className="rounded-full bg-white px-6 py-3 text-sm text-black transition hover:scale-[1.03]"
                  >
                    Research Link
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
