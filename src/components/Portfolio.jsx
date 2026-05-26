import { useState } from 'react'

export default function Portfolio({ ai, business }) {
  const categories = ai.portfolio?.categories || []
  const [active, setActive] = useState('all')

  const allItems = categories.flatMap((cat) =>
    (cat.items || []).map((item) => ({ ...item, category: cat.name }))
  )

  const filtered = active === 'all' ? allItems : allItems.filter((i) => i.category === active)

  if (categories.length === 0) return null

  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Portfolio</h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActive('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              active === 'all' ? 'bg-primary text-white' : 'glass text-white/60 hover:text-white'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat.name ? 'bg-primary text-white' : 'glass text-white/60 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[4/3] glass-strong">
              {item.image ? (
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-4xl">{item.icon || '📸'}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{item.description}</p>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full bg-white/10 text-xs text-white/80">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
