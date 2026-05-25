"use client";

import { useEffect, useState } from "react";

import ResearchCard from "@/components/ResearchCard";

import { getResearch } from "@/services/research";

import { Research } from "@/types/research";

export default function ResearchPage() {
  const [research, setResearch] = useState<Research[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const data = await getResearch();

        setResearch(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchResearch();
  }, []);

  if (loading) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="mb-10 text-5xl font-black">Research</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {research.map((item) => (
          <ResearchCard key={item.id} research={item} />
        ))}
      </div>
    </div>
  );
}
