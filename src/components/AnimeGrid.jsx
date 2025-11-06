const demo = [
  { id: 1, title: 'Attack on Titan', image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Demon Slayer', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Jujutsu Kaisen', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'My Hero Academia', image: 'https://images.unsplash.com/photo-1557343133-b5cf261ace6b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdHRhY2slMjBvbiUyMFRpdGFufGVufDB8MHx8fDE3NjI0NDUyNjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 5, title: 'One Piece', image: 'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Spy x Family', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop' },
];

export default function AnimeGrid({ title, id }) {
  return (
    <section id={id} className="mt-10">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
        <a href="#" className="text-sm text-orange-600 hover:text-orange-700">View all</a>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {demo.map((item) => (
          <article key={item.id} className="group overflow-hidden rounded-lg border border-slate-200 bg-white/70 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 ring-0 ring-orange-500/0 transition group-hover:ring-4 group-hover:ring-orange-500/20" />
            </div>
            <div className="p-3">
              <h3 className="line-clamp-1 text-sm font-medium">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
