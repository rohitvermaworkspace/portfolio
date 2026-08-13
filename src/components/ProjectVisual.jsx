export default function ProjectVisual({ gradient, title }) {
  return (
    <div className="relative h-48 overflow-hidden rounded-t-2xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute -right-16 -top-16 h-24 w-24 rounded-full bg-white/20 blur-3xl" />

      <div className="absolute inset-x-0 top-0 transition-transform duration-[1500ms] ease-in-out group-hover:-translate-y-1/2">
        <div className="flex h-48 flex-col p-5 sm:p-7">
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
        </div>

        <div className="flex h-48 flex-col gap-4 p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-24 rounded-full bg-white/40" />
            <div className="h-2.5 w-14 rounded-full bg-white/25" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="flex h-16 flex-col justify-center gap-2 rounded-xl bg-white/10 p-3">
              <div className="h-2 w-10 rounded-full bg-white/45" />
              <div className="h-2 w-14 rounded-full bg-white/25" />
            </div>
            <div className="flex h-16 flex-col justify-center gap-2 rounded-xl bg-white/10 p-3">
              <div className="h-2 w-10 rounded-full bg-white/45" />
              <div className="h-2 w-14 rounded-full bg-white/25" />
            </div>
            <div className="flex h-16 flex-col justify-center gap-2 rounded-xl bg-white/10 p-3">
              <div className="h-2 w-10 rounded-full bg-white/45" />
              <div className="h-2 w-14 rounded-full bg-white/25" />
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between gap-3 rounded-xl bg-white/15 p-4">
            <div className="flex flex-col gap-2">
              <div className="h-2 w-20 rounded-full bg-white/45" />
              <div className="h-2 w-32 rounded-full bg-white/30" />
            </div>
            <div className="rounded-lg bg-white/30 px-4 py-2 text-[9px] font-bold uppercase tracking-widest text-white/70">
              View
            </div>
          </div>
        </div>
      </div>

      <span className="pointer-events-none absolute bottom-2 right-6 hidden text-xs font-bold uppercase tracking-[0.2em] text-white/60 sm:block">
        {title}
      </span>
    </div>
  );
}
