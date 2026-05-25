"use client";

import { useEffect, useState } from "react";

import AdminLayout from "@/components/AdminLayout";

import { authApi } from "@/lib/auth-api";

import { Skill } from "@/types/skill";

export default function AdminSkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([]);

  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState({
    name: "",
    category: "",
    proficiency: 50,
  });

  const fetchSkills = async () => {
    try {
      const res = await authApi.get("/skills");

      setSkills(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const resetForm = () => {
    setForm({
      name: "",
      category: "",
      proficiency: 50,
    });

    setEditingId(null);
  };

  const submitSkill = async () => {
    try {
      if (editingId) {
        await authApi.patch(`/skills/${editingId}`, form);
      } else {
        await authApi.post("/skills", form);
      }

      resetForm();

      fetchSkills();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteSkill = async (id: number) => {
    try {
      await authApi.delete(`/skills/${id}`);

      fetchSkills();
    } catch (error) {
      console.error(error);
    }
  };

  const editSkill = (skill: Skill) => {
    setEditingId(skill.id);

    setForm({
      name: skill.name,
      category: skill.category,
      proficiency: skill.proficiency,
    });
  };

  return (
    <AdminLayout>
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-5xl font-black">Skills Manager</h1>

        <div className="mb-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="grid gap-4">
            <input
              placeholder="Skill Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="rounded-xl border border-slate-700 bg-slate-950 p-4"
            />

            <input
              placeholder="Category"
              value={form.category}
              onChange={(e) =>
                setForm({
                  ...form,
                  category: e.target.value,
                })
              }
              className="rounded-xl border border-slate-700 bg-slate-950 p-4"
            />

            <input
              type="number"
              placeholder="Proficiency"
              value={form.proficiency}
              onChange={(e) =>
                setForm({
                  ...form,
                  proficiency: Number(e.target.value),
                })
              }
              className="rounded-xl border border-slate-700 bg-slate-950 p-4"
            />

            <button
              onClick={submitSkill}
              className="rounded-xl bg-blue-500 py-4 font-semibold"
            >
              {editingId ? "Update Skill" : "Add Skill"}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-5"
            >
              <div>
                <h2 className="text-xl font-bold">{skill.name}</h2>

                <p className="text-slate-400">{skill.category}</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => editSkill(skill)}
                  className="rounded-lg bg-yellow-500 px-4 py-2"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteSkill(skill.id)}
                  className="rounded-lg bg-red-500 px-4 py-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
