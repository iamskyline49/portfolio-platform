export default function GithubSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12">
        <p className="mb-2 text-blue-400">GitHub</p>

        <h2 className="text-5xl font-black">Open Source Activity</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <img
          src="https://github-readme-stats.vercel.app/api?username=iamskyline49&show_icons=true&theme=tokyonight"
          alt="GitHub Stats"
          className="w-full rounded-3xl"
        />

        <img
          src="https://streak-stats.demolab.com?user=iamskyline49&theme=tokyonight"
          alt="GitHub Streak"
          className="w-full rounded-3xl"
        />
      </div>
    </section>
  );
}
