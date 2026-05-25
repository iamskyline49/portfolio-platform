"use client";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import ProjectCard from "@/components/ProjectCard";

import SkeletonCard from "@/components/SkeletonCard";

import { getProjects } from "@/services/projects";

import { Project } from "@/types/project";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();

        setProjects(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);

        toast.error("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <p className="mb-2 text-blue-400">Portfolio</p>

        <h1 className="text-5xl font-black">Projects</h1>
      </div>

      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-10 w-full rounded-2xl border border-slate-800 bg-slate-900 p-4 outline-none transition focus:border-blue-500"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {loading
          ? Array.from({
              length: 4,
            }).map((_, index) => <SkeletonCard key={index} />)
          : filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
      </div>

      {!loading && filteredProjects.length === 0 && (
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold">No Projects Found</h2>

          <p className="mt-3 text-slate-400">
            Try searching with a different keyword.
          </p>
        </div>
      )}
    </div>
  );
}
