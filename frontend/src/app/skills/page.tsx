"use client";

import { useEffect, useState } from "react";

import SkillCard from "@/components/SkillCard";

import { getSkills } from "@/services/skills";

import { Skill } from "@/types/skill";

export default function SkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills();

        setSkills(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="mb-10 text-5xl font-bold">Skills</h1>

      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}
