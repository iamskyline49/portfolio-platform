import { Research } from "@/types/research";

interface Props {
  research: Research;
}

export default function ResearchCard({ research }: Props) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-2xl font-bold">{research.title}</h2>

      <p className="mb-4 text-slate-400">{research.abstract}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {research.technologies.split(",").map((tech: string) => (
          <span
            key={tech}
            className="rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {research.githubUrl && (
          <a
            href={research.githubUrl}
            target="_blank"
            className="text-blue-400"
          >
            GitHub
          </a>
        )}

        {research.paperUrl && (
          <a
            href={research.paperUrl}
            target="_blank"
            className="text-green-400"
          >
            Paper
          </a>
        )}
      </div>
    </div>
  );
}
