import { Skill } from "@/types/skill";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="rounded-full border border-zinc-800 px-5 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900">
      {skill.name}
    </div>
  );
}
