export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-4 h-8 w-1/2 rounded bg-slate-800" />

      <div className="mb-2 h-4 rounded bg-slate-800" />

      <div className="mb-6 h-4 w-2/3 rounded bg-slate-800" />

      <div className="flex gap-2">
        <div className="h-8 w-20 rounded-full bg-slate-800" />

        <div className="h-8 w-20 rounded-full bg-slate-800" />
      </div>
    </div>
  );
}
