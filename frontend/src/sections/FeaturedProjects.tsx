"use client";

import { useEffect, useState } from "react";

import ProjectCard from "@/components/ProjectCard";

import { getProjects } from "@/services/projects";

import { Project } from "@/types/project";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();

        setProjects(
          Array.isArray(data) ? data.filter((project) => project.featured) : [],
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12">
        <p className="mb-2 text-blue-400">Portfolio</p>

        <h2 className="text-5xl font-black">Featured Projects</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
