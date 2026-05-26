import { Skill } from "@/types/skill";

interface Props {
  skill: Skill;
}

export default function SkillCard({ skill }: Props) {
  return (
    <div className="group rounded-32px border border-slate-800 bg-slate-900/70 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl font-black">{skill.name}</h3>

        <span className="text-sm text-blue-400">{skill.proficiency}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
        <div
          style={{
            width: `${skill.proficiency}%`,
          }}
          className="h-full rounded-full bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
        />
      </div>
    </div>
  );
}
