"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { api } from "@/lib/api";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/auth/login", form);
      toast.success("Login successful");
      router.push("/admin");
    } catch (error) {
      console.error(error);

      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-10"
      >
        <div>
          <p className="mb-2 text-blue-400">Portfolio CMS</p>

          <h1 className="text-4xl font-black">Admin Login</h1>
        </div>

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
          className="w-full rounded-2xl border border-slate-800 bg-slate-950 p-4 outline-none transition focus:border-blue-500"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
          className="w-full rounded-2xl border border-slate-800 bg-slate-950 p-4 outline-none transition focus:border-blue-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-blue-500 py-4 font-semibold transition hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
