import React from 'react'

const demoAnime = [
  { id: 1, title: 'Jujutsu Kaisen', image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2070&auto=format&fit=crop', badge: 'Simulcast' },
  { id: 2, title: 'Demon Slayer', image: 'https://images.unsplash.com/photo-1722573783415-a2eda4cfcd0f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxKdWp1dHN1JTIwS2Fpc2VufGVufDB8MHx8fDE3NjI0NDI5NDF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', badge: 'New' },
  { id: 3, title: 'One Piece', image: 'https://images.unsplash.com/photo-1722573783415-a2eda4cfcd0f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxKdWp1dHN1JTIwS2Fpc2VufGVufDB8MHx8fDE3NjI0NDI5NDF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', badge: 'Trending' },
  { id: 4, title: 'Spy x Family', image: 'https://images.unsplash.com/photo-1722573783415-a2eda4cfcd0f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxKdWp1dHN1JTIwS2Fpc2VufGVufDB8MHx8fDE3NjI0NDI5NDF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', badge: 'Dub' },
  { id: 5, title: 'Attack on Titan', image: 'https://images.unsplash.com/photo-1722573783415-a2eda4cfcd0f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxKdWp1dHN1JTIwS2Fpc2VufGVufDB8MHx8fDE3NjI0NDI5NDF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', badge: 'Popular' },
  { id: 6, title: 'My Hero Academia', image: 'https://images.unsplash.com/photo-1722573783415-a2eda4cfcd0f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxKdWp1dHN1JTIwS2Fpc2VufGVufDB8MHx8fDE3NjI0NDI5NDF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', badge: 'Season 6' },
]

export default function AnimeGrid({ sectionId = 'popular', title = 'Popular Now' }) {
  return (
    <section id={sectionId} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <a href="#" className="text-sm font-semibold text-orange-600 hover:text-orange-700">View all</a>
      </div>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {demoAnime.map((item) => (
          <article key={item.id} className="group">
            <div className="relative aspect-[2/3] overflow-hidden rounded-xl ring-1 ring-black/5 shadow-sm">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              <span className="absolute top-2 left-2 text-[10px] uppercase tracking-wide bg-black/80 text-white px-2 py-0.5 rounded">
                {item.badge}
              </span>
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="px-3 py-1.5 rounded-md bg-orange-500 text-white text-sm font-semibold shadow">Play</span>
              </button>
            </div>
            <h3 className="mt-2 text-sm font-semibold line-clamp-2">{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
