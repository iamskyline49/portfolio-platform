import { Research } from "@/types/research";

interface Props {
  research: Research;
}

export default function ResearchCard({ research }: Props) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-700">
      <h2 className="mb-4 text-2xl font-bold">{research.title}</h2>

      <p className="mb-4 text-slate-400">{research.description}</p>

      {research.technologies && (
        <div className="mb-6 flex flex-wrap gap-2">
          {research.technologies.split(",").map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-300"
            >
              {tech.trim()}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-3">
        {research.githubUrl && (
          <a
            href={research.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800"
          >
            GitHub
          </a>
        )}

        {research.link && (
          <a
            href={research.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
          >
            Research Link
          </a>
        )}
      </div>
    </div>
  );
}
