import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-xl border border-slate-200 bg-white/60 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
      <div className="relative grid gap-6 lg:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Stream anime you love
          </h1>
          <p className="mt-3 max-w-prose text-slate-600 dark:text-slate-300">
            Discover popular series, fresh episodes, and hidden gems. Enjoy a sleek, responsive experience with light, dark, and system themes.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#popular" className="rounded-md bg-orange-500 px-5 py-2 text-sm font-medium text-white shadow hover:bg-orange-600">Start Watching</a>
            <a href="#new" className="rounded-md border border-slate-200 bg-white/70 px-5 py-2 text-sm hover:bg-slate-100/80 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:bg-slate-800/70">Browse New</a>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-80 md:h-96 lg:h-full">
          <Spline scene="https://prod.spline.design/7t8TqQGzx4nvuH2d/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/70 via-transparent to-orange-100/30 dark:from-[#0b0e14]/70 dark:via-transparent dark:to-orange-500/10" />
        </div>
      </div>
    </section>
  );
}
