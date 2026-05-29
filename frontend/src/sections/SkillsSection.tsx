"use client";

import { useEffect, useState } from "react";

import { getSkills } from "@/services/skills";

import { Skill } from "@/types/skill";

export default function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills();

        setSkills(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSkills();
  }, []);

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }

      acc[skill.category].push(skill);

      return acc;
    },
    {} as Record<string, Skill[]>,
  );

  const categoryOrder = [
    "Testing & Quality Assurance",
    "Full Stack Development",
    "Database & Backend",
    "DevOps & Deployment",
    "IoT & Embedded Systems",
    "Programming Languages",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-40">
      <div className="mb-24">
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
          Capabilities
        </p>

        <h2 className="text-6xl font-semibold tracking-tight md:text-8xl">
          Technologies
          <br />& Expertise.
        </h2>

        <p className="mt-8 max-w-2xl text-lg text-zinc-400">
          A collection of technologies, tools, and practices I use to build
          reliable software, automate workflows, and deliver scalable digital
          products.
        </p>
      </div>

      <div className="space-y-20">
        {categoryOrder.map((category) => {
          const categorySkills = groupedSkills[category];

          if (!categorySkills || categorySkills.length === 0) {
            return null;
          }

          return (
            <div key={category} className="border-t border-zinc-900 pt-10">
              <h3 className="mb-8 text-2xl font-semibold">{category}</h3>

              <div className="flex flex-wrap gap-4">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="rounded-full border border-zinc-800 px-5 py-3 text-sm text-zinc-300 transition hover:border-zinc-500"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
