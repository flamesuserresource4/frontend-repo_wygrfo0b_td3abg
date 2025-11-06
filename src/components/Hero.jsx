import React from 'react'

export default function Hero({ onStart }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-100 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">
              New season now streaming
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Stream anime you love. Anywhere. Anytime.
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Explore simulcasts, classics, and hidden gems — all in one place with crisp UI and zero clutter.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onStart} className="px-5 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow">
                Start Watching
              </button>
              <a href="#popular" className="px-5 py-3 rounded-md border border-gray-200 hover:bg-gray-50 font-semibold">
                Browse Popular
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <img className="h-7 w-7 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=1"/>
                <img className="h-7 w-7 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=2"/>
                <img className="h-7 w-7 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=3"/>
              </div>
              <span>Trusted by anime fans worldwide</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=2070&auto=format&fit=crop" alt="Anime collage" className="h-full w-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
