export default function Events({ ai }) {
  const events = ai.events?.items || []
  if (events.length === 0) return null

  return (
    <section id="events" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Events
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">{ai.events?.title || 'Upcoming Events'}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div key={i} className="glass-strong p-6 group hover:bg-white/5 transition-all flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-xl">{event.icon || '📅'}</span>
                </div>
                {event.date && (
                  <span className="text-xs text-primary font-mono">{event.date}</span>
                )}
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">{event.title}</h3>
              <p className="text-white/50 text-sm flex-1">{event.description}</p>
              {event.price && (
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-primary font-bold">{event.price}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
