import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="mb-5 h-56 w-full rounded-2xl object-cover"
        />
      )}
      <h2 className="mb-3 text-2xl font-bold">{project.title}</h2>

      <p className="mb-4 text-slate-400">{project.description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.techStack.split(",").map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" className="text-blue-400">
            GitHub
          </a>
        )}

        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" className="text-green-400">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
