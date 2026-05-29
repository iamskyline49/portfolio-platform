export default function ContactSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-32 text-center">
      <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Contact
      </p>

      <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
        Let’s build something meaningful.
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
        Available for collaboration, development projects, and software
        engineering opportunities.
      </p>

      <div className="mt-12 flex justify-center gap-4">
        <a
          href="mailto:prottoysarkerdiganto@gmail.com"
          className="rounded-full bg-white px-8 py-4 text-black"
        >
          Email Me
        </a>

        <a
          href="https://github.com/iamskyline49"
          target="_blank"
          className="rounded-full border border-zinc-800 px-8 py-4 text-white"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
