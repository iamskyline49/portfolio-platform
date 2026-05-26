"use client";

import { motion } from "framer-motion";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group rounded-32px border border-slate-800 bg-slate-900/70 p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="mb-6 h-64 w-full rounded-3xl object-cover"
        />
      )}

      <h3 className="mb-4 text-3xl font-black tracking-tight">
        {project.title}
      </h3>

      <p className="mb-6 text-slate-400">{project.description}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.techStack.split(",").map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            className="rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            GitHub
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            className="rounded-full border border-slate-700 px-5 py-3 text-sm text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
