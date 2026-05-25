'use client';

import { useEffect, useState } from 'react';

import ResearchCard from '@/components/ResearchCard';

import { getResearch } from '@/services/research';

import { Research } from '@/types/research';

export default function ResearchSection() {
  const [research, setResearch] =
    useState<Research[]>([]);

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const data =
          await getResearch();

        setResearch(
          Array.isArray(data)
            ? data
            : [],
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchResearch();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12">
        <p className="mb-2 text-purple-400">
          Research
        </p>

        <h2 className="text-5xl font-black">
          Research Work
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {research.map((item) => (
          <ResearchCard
            key={item.id}
            research={item}
          />
        ))}
      </div>
    </section>
  );
}