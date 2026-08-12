export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="animate-aurora absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[120px] dark:bg-cyan/10" />
      <div className="animate-aurora absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[120px] [animation-delay:-6s] dark:bg-blue-600/10" />
      <div className="animate-aurora absolute -bottom-40 left-10 h-[380px] w-[380px] rounded-full bg-sky-500/10 blur-[120px] [animation-delay:-12s] dark:bg-sky-500/[0.07]" />
    </div>
  );
}
