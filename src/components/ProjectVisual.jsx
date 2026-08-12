export default function ProjectVisual({ gradient, title }) {
  return (
    <div className="relative h-48 overflow-hidden rounded-t-2xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute -right-16 -top-16 h-24 w-24 rounded-full bg-white/20 blur-3xl" />

      <div className="relative flex h-full flex-col p-5 sm:p-7">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
        </div>

        <div className="mt-4 grid flex-1 gap-4 sm:grid-cols-[0.8fr_1.2fr]">
          <div className="hidden flex-col gap-3 sm:flex">
            <div className="h-2.5 w-3/4 rounded-full bg-white/40" />
            <div className="h-2.5 w-1/2 rounded-full bg-white/25" />
            <div className="mt-4 h-16 rounded-xl bg-white/15" />
            <div className="h-16 rounded-xl bg-white/10" />
          </div>

          <div className="flex flex-col gap-3">
            <div className="h-4 w-2/3 rounded-lg bg-white/50" />
            <div className="h-2.5 w-full rounded-full bg-white/25" />
            <div className="h-2.5 w-5/6 rounded-full bg-white/25" />
            <div className="mt-2 flex items-center justify-between gap-3 rounded-xl bg-white/15 p-3 sm:p-4">
              <div className="flex flex-col gap-2">
                <div className="h-2 w-16 rounded-full bg-white/45" />
                <div className="h-2 w-24 rounded-full bg-white/30" />
              </div>
              <div className="h-8 w-8 rounded-full bg-white/35" />
            </div>
            <div className="mt-auto hidden grid-cols-3 gap-2 sm:grid">
              <div className="h-12 rounded-lg bg-white/10" />
              <div className="h-12 rounded-lg bg-white/10" />
              <div className="h-12 rounded-lg bg-white/10" />
            </div>
          </div>
        </div>

        <span className="pointer-events-none absolute bottom-2 right-6 hidden text-xs font-bold uppercase tracking-[0.2em] text-white/60 sm:block">
          {title}
        </span>
      </div>
    </div>
  );
}