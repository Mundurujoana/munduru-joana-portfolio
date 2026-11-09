export default function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] animate-drift rounded-full bg-cyan-400/30 blur-[110px] dark:bg-cyan-500/25" />
      <div className="absolute -right-24 top-40 h-[26rem] w-[26rem] animate-drift rounded-full bg-emerald-400/25 blur-[110px] [animation-delay:-5s] dark:bg-emerald-500/20" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] animate-drift rounded-full bg-indigo-400/25 blur-[110px] [animation-delay:-9s] dark:bg-indigo-500/20" />
    </div>
  );
}
