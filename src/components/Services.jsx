export default function Services({ ai, layout }) {
  if (layout === 'split') return <ServicesGrid ai={ai} variant="cards-alt" />
  if (layout === 'minimal') return <ServicesGrid ai={ai} variant="list" />
  if (layout === 'bold') return <ServicesGrid ai={ai} variant="numbered" />
  if (layout === 'cinematic') return <ServicesGrid ai={ai} variant="horizontal" />
  return <ServicesGrid ai={ai} variant="cards" />
}

function ServicesGrid({ ai, variant }) {
  const services = ai.services || []
  const whyUs = ai.whyChooseUs || []

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Our Services</h2>
        </div>

        {variant === 'cards' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="glass-strong p-8 group hover:bg-white/5 transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        )}

        {variant === 'cards-alt' && (
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i} className="glass p-6 flex items-start gap-5 group hover:bg-white/5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary/20 transition-colors">{s.icon}</div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1">{s.title}</h3>
                  <p className="text-white/50 text-sm">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {variant === 'list' && (
          <div className="max-w-3xl mx-auto divide-y divide-white/5">
            {services.map((s, i) => (
              <div key={i} className="py-8 flex items-center gap-6 group hover:pl-4 transition-all">
                <span className="text-3xl">{s.icon}</span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="text-white/40 text-sm mt-1">{s.description}</p>
                </div>
                <svg className="w-5 h-5 text-white/20 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        )}

        {variant === 'numbered' && (
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="text-4xl font-display font-black text-primary/30 group-hover:text-primary transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="border-l border-white/10 pl-5">
                  <h3 className="font-display text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-white/50 text-sm">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {variant === 'horizontal' && (
          <div className="flex flex-col gap-4">
            {services.map((s, i) => (
              <div key={i} className="glass-strong p-6 flex flex-col md:flex-row md:items-center gap-4 group hover:bg-white/5 transition-all">
                <div className="text-3xl w-12">{s.icon}</div>
                <h3 className="font-semibold text-white text-lg md:w-48 shrink-0">{s.title}</h3>
                <p className="text-white/50 text-sm flex-1">{s.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Why Choose Us */}
        {whyUs.length > 0 && (
          <div className="mt-24">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-widest text-secondary mb-4">
                Our Promise
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Why Choose Us</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, i) => (
                <div key={i} className="glass p-6 text-center group hover:bg-white/5 transition-all">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{item.icon}</div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-white/50 text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
