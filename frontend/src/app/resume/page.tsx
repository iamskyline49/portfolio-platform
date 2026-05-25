export default function ResumePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="mb-10 text-5xl font-black">Resume</h1>

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">
        <p className="mb-6 text-slate-400">Download my latest resume.</p>

        <a
          href="/resume.pdf"
          download
          className="rounded-2xl bg-blue-500 px-6 py-4 font-semibold transition hover:bg-blue-600"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
