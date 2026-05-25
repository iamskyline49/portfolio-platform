"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

import ProtectedRoute from "./admin/ProtectedRoute";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const logout = () => {
    document.cookie = "access_token=; Max-Age=0; path=/";

    router.push("/login");
  };

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        <aside className="w-72 border-r border-slate-800 bg-slate-950 p-6">
          <h2 className="mb-10 text-3xl font-black text-blue-400">Admin</h2>

          <nav className="space-y-4">
            <Link
              href="/admin"
              className="block rounded-xl p-3 transition hover:bg-slate-900"
            >
              Dashboard
            </Link>

            <Link
              href="/admin/skills"
              className="block rounded-xl p-3 transition hover:bg-slate-900"
            >
              Skills
            </Link>

            <Link
              href="/admin/projects"
              className="block rounded-xl p-3 transition hover:bg-slate-900"
            >
              Projects
            </Link>

            <Link
              href="/admin/research"
              className="block rounded-xl p-3 transition hover:bg-slate-900"
            >
              Research
            </Link>
          </nav>

          <button
            onClick={logout}
            className="mt-10 w-full rounded-xl bg-red-500 py-3 font-semibold transition hover:bg-red-600"
          >
            Logout
          </button>
        </aside>

        <main className="flex-1 p-10">{children}</main>
      </div>
    </ProtectedRoute>
  );
}
