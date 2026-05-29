"use client";

import { useEffect, useState } from "react";

import AdminLayout from "@/components/AdminLayout";

import ImageUpload from "@/components/ImageUpload";

import { authApi } from "@/lib/auth-api";

import { Project } from "@/types/project";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    techStack: "",
    githubUrl: "",
    liveUrl: "",
    image: "",
    image2: "",
    image3: "",
    featured: false,
  });

  const fetchProjects = async () => {
    try {
      const res = await authApi.get("/projects");

      setProjects(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const resetForm = () => {
    setEditingId(null);

    setForm({
      title: "",
      description: "",
      techStack: "",
      githubUrl: "",
      liveUrl: "",
      image: "",
      image2: "",
      image3: "",
      featured: false,
    });
  };

  const submitProject = async () => {
    try {
      if (editingId) {
        await authApi.patch(`/projects/${editingId}`, form);
      } else {
        await authApi.post("/projects", form);
      }

      resetForm();

      fetchProjects();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProject = async (id: number) => {
    try {
      await authApi.delete(`/projects/${id}`);

      fetchProjects();
    } catch (error) {
      console.error(error);
    }
  };

  const editProject = (project: Project) => {
    setEditingId(project.id);

    setForm({
      title: project.title,
      description: project.description,
      techStack: project.techStack,
      githubUrl: project.githubUrl || "",
      liveUrl: project.liveUrl || "",
      image: project.image || "",
      image2: project.image2 || "",
      image3: project.image3 || "",
      featured: project.featured ?? false,
    });
  };

  return (
    <AdminLayout>
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-5xl font-black">Projects Manager</h1>

        <div className="mb-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="grid gap-4">
            <input
              placeholder="Project Title"
              value={form.title}
              onChange={(e) =>
                setForm({
                  ...form,
                  title: e.target.value,
                })
              }
              className="rounded-xl border border-slate-700 bg-slate-950 p-4"
            />

            <textarea
              rows={5}
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
              className="rounded-xl border border-slate-700 bg-slate-950 p-4"
            />

            <input
              placeholder="Tech Stack"
              value={form.techStack}
              onChange={(e) =>
                setForm({
                  ...form,
                  techStack: e.target.value,
                })
              }
              className="rounded-xl border border-slate-700 bg-slate-950 p-4"
            />

            <input
              placeholder="GitHub URL"
              value={form.githubUrl}
              onChange={(e) =>
                setForm({
                  ...form,
                  githubUrl: e.target.value,
                })
              }
              className="rounded-xl border border-slate-700 bg-slate-950 p-4"
            />

            <input
              placeholder="Live URL"
              value={form.liveUrl}
              onChange={(e) =>
                setForm({
                  ...form,
                  liveUrl: e.target.value,
                })
              }
              className="rounded-xl border border-slate-700 bg-slate-950 p-4"
            />

            <div className="space-y-3">
              <p className="text-sm text-slate-400">Project Image</p>

              <ImageUpload
                onUploaded={(url) =>
                  setForm({
                    ...form,
                    image: url,
                  })
                }
              />
              <ImageUpload
                onUploaded={(url) =>
                  setForm({
                    ...form,
                    image2: url,
                  })
                }
              />

              <ImageUpload
                onUploaded={(url) =>
                  setForm({
                    ...form,
                    image3: url,
                  })
                }
              />

              {form.image && (
                <img
                  src={form.image}
                  alt="Preview"
                  className="h-40 w-full rounded-2xl object-cover"
                />
              )}
            </div>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) =>
                  setForm({
                    ...form,
                    featured: e.target.checked,
                  })
                }
              />
              Featured Project
            </label>

            <button
              onClick={submitProject}
              className="rounded-xl bg-blue-500 py-4 font-semibold"
            >
              {editingId ? "Update Project" : "Add Project"}
            </button>
          </div>
        </div>

        <div className="space-y-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-5 h-64 w-full rounded-2xl object-cover"
                />
              )}

              <div className="flex items-start justify-between">
                <div>
                  <h2 className="mb-2 text-2xl font-black">{project.title}</h2>

                  <p className="mb-3 text-slate-400">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.split(",").map((tech: string) => (
                      <span
                        key={tech}
                        className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-blue-400"
                      >
                        GitHub
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className="text-green-400"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => editProject(project)}
                    className="rounded-lg bg-yellow-500 px-4 py-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProject(project.id)}
                    className="rounded-lg bg-red-500 px-4 py-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
