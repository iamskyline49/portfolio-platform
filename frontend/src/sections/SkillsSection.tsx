"use client";

import { useEffect, useState } from "react";

import SkillCard from "@/components/SkillCard";

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

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12">
        <p className="mb-2 text-blue-400">Expertise</p>

        <h2 className="text-5xl font-black">Skills & Technologies</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
