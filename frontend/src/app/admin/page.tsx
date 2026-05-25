"use client";

import AdminLayout from "@/components/AdminLayout";

export default function AdminPage() {
  return (
    <AdminLayout>
      <div>
        <p className="mb-2 text-blue-400">Welcome Back</p>

        <h1 className="mb-10 text-6xl font-black">Dashboard</h1>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-3xl font-black">Skills</h2>

            <p className="mt-2 text-slate-400">Manage portfolio skills</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-3xl font-black">Projects</h2>

            <p className="mt-2 text-slate-400">Manage projects</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-3xl font-black">Research</h2>

            <p className="mt-2 text-slate-400">Manage research</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
