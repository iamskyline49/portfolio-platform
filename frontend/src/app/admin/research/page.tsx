"use client";

import { useEffect, useState } from "react";

import AdminLayout from "@/components/AdminLayout";

import { authApi } from "@/lib/auth-api";

import { Research } from "@/types/research";

export default function AdminResearchPage() {
  const [research, setResearch] = useState<Research[]>([]);

  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState({
    title: "",
    abstract: "",
    technologies: "",
    githubUrl: "",
    paperUrl: "",
  });

  const fetchResearch = async () => {
    try {
      const res = await authApi.get("/research");

      setResearch(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchResearch();
  }, []);

  const resetForm = () => {
    setEditingId(null);

    setForm({
      title: "",
      abstract: "",
      technologies: "",
      githubUrl: "",
      paperUrl: "",
    });
  };

  const submitResearch = async () => {
    try {
      if (editingId) {
        await authApi.patch(`/research/${editingId}`, form);
      } else {
        await authApi.post("/research", form);
      }

      resetForm();

      fetchResearch();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteResearch = async (id: number) => {
    try {
      await authApi.delete(`/research/${id}`);

      fetchResearch();
    } catch (error) {
      console.error(error);
    }
  };

  const editResearch = (item: Research) => {
    setEditingId(item.id);

    setForm({
      title: item.title,
      abstract: item.abstract,
      technologies: item.technologies,
      githubUrl: item.githubUrl || "",
      paperUrl: item.paperUrl || "",
    });
  };

  return (
    <AdminLayout>
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-5xl font-black">Research Manager</h1>

        <div className="mb-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="grid gap-4">
            <input
              placeholder="Research Title"
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
              rows={6}
              placeholder="Abstract"
              value={form.abstract}
              onChange={(e) =>
                setForm({
                  ...form,
                  abstract: e.target.value,
                })
              }
              className="rounded-xl border border-slate-700 bg-slate-950 p-4"
            />

            <input
              placeholder="Technologies"
              value={form.technologies}
              onChange={(e) =>
                setForm({
                  ...form,
                  technologies: e.target.value,
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
              placeholder="Paper URL"
              value={form.paperUrl}
              onChange={(e) =>
                setForm({
                  ...form,
                  paperUrl: e.target.value,
                })
              }
              className="rounded-xl border border-slate-700 bg-slate-950 p-4"
            />

            <button
              onClick={submitResearch}
              className="rounded-xl bg-blue-500 py-4 font-semibold"
            >
              {editingId ? "Update Research" : "Add Research"}
            </button>
          </div>
        </div>

        <div className="space-y-5">
          {research.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="mb-2 text-2xl font-black">{item.title}</h2>

                  <p className="mb-4 text-slate-400">{item.abstract}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.split(",").map((tech: string) => (
                      <span
                        key={tech}
                        className="rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => editResearch(item)}
                    className="rounded-lg bg-yellow-500 px-4 py-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteResearch(item.id)}
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
