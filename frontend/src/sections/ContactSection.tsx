"use client";

import { useState } from "react";

import { api } from "@/lib/api";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/contact", form);

      alert("Message sent");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="mb-2 text-blue-400">Contact</p>

        <h2 className="text-5xl font-black">Let&apos;s Work Together</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-4 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-4 outline-none"
        />

        <textarea
          rows={6}
          placeholder="Message"
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
          className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-4 outline-none"
        />

        <button
          disabled={loading}
          className="rounded-2xl bg-blue-500 px-8 py-4 font-semibold transition hover:bg-blue-600"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
