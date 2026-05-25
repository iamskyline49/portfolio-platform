"use client";

export default function HobbiesPage() {
  const hobbies = [
    {
      title: "Coding",
      description:
        "Building full stack applications and experimenting with AI systems.",
    },
    {
      title: "Research",
      description:
        "Exploring cybersecurity and machine learning research topics.",
    },
    {
      title: "Open Source",
      description: "Learning from and contributing to developer communities.",
    },
    {
      title: "Problem Solving",
      description: "Practicing algorithms and logical thinking.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12">
        <p className="mb-2 text-blue-400">Personal</p>

        <h1 className="text-5xl font-black">Hobbies</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {hobbies.map((hobby) => (
          <div
            key={hobby.title}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
          >
            <h2 className="mb-4 text-2xl font-bold">{hobby.title}</h2>

            <p className="text-slate-400">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
