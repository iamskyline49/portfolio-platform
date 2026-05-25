"use client";

import { motion } from "framer-motion";

import { Skill } from "@/types/skill";

interface Props {
  skill: Skill;
}

export default function SkillCard({ skill }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur"
    >
      <h2 className="mb-2 text-2xl font-bold">{skill.name}</h2>

      <p className="mb-4 text-slate-400">{skill.category}</p>

      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: `${skill.proficiency}%`,
          }}
          transition={{
            duration: 1,
          }}
          className="h-full rounded-full bg-linear-to-r from-blue-500 to-purple-500"
        />
      </div>

      <p className="mt-3 text-sm text-slate-400">{skill.proficiency}%</p>
    </motion.div>
  );
}
