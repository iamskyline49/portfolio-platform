"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { getProjects } from "@/services/projects";

import { Project } from "@/types/project";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();

        setProjects(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="px-6 py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-32">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
            Selected Work
          </p>

          <h2 className="text-6xl font-semibold tracking-tight md:text-8xl">
            Projects
          </h2>
        </div>

        <div className="space-y-40">
          {projects.map((project) => (
            <div key={project.id} className="grid gap-16">
              {/* TEXT */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="grid gap-12 md:grid-cols-2"
              >
                <div>
                  <h3 className="text-4xl font-semibold tracking-tight md:text-6xl">
                    {project.title}
                  </h3>
                </div>

                <div>
                  <p className="text-lg leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.techStack?.split(",").map((tech) => (
                      <div
                        key={tech}
                        className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-500"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="rounded-full border border-zinc-800 px-6 py-3 text-sm text-white transition hover:border-zinc-500"
                      >
                        GitHub
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className="rounded-full bg-white px-6 py-3 text-sm text-black transition hover:scale-[1.03]"
                      >
                        Live Site
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* IMAGES */}
              <div className="grid gap-6 md:grid-cols-3">
                {[project.image, project.image2, project.image3]
                  .filter(Boolean)
                  .map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      initial={{
                        opacity: 0,
                        y: 40,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: imageIndex * 0.1,
                      }}
                      className="overflow-hidden rounded-32px"
                    >
                      <img
                        src={image}
                        alt="Project"
                        className="h- 500px w-full object-cover transition duration-700 hover:scale-105"
                      />
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
