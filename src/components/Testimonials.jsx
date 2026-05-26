export default function Testimonials({ ai, layout }) {
  const testimonials = ai.testimonials || []
  if (testimonials.length === 0) return null

  if (layout === 'minimal') return <TestimonialsMinimal testimonials={testimonials} />
  if (layout === 'bold') return <TestimonialsBold testimonials={testimonials} />
  return <TestimonialsDefault testimonials={testimonials} />
}

function TestimonialsDefault({ testimonials }) {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-widest text-primary mb-4">What People Say</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Customer Reviews</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-strong p-8 hover:bg-white/5 transition-all duration-300 flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating || 5 }).map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                  {(t.name || 'U').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role || 'Customer'}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsMinimal({ testimonials }) {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">Testimonials</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-16">Kind Words</h2>
        <div className="space-y-12">
          {testimonials.map((t, i) => (
            <div key={i} className="border-l border-white/10 pl-8">
              <p className="text-xl text-white/70 italic leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">{t.name}</span>
                <span className="text-white/30">—</span>
                <span className="text-white/50 text-sm">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsBold({ testimonials }) {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-3 h-3 bg-secondary rounded-full" />
          <span className="text-white/60 uppercase tracking-widest text-xs">Reviews</span>
        </div>
        <div className="grid md:grid-cols-3 gap-0 border border-white/5 rounded-2xl overflow-hidden">
          {testimonials.map((t, i) => (
            <div key={i} className={`p-8 ${i < testimonials.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/5' : ''}`}>
              <div className="text-5xl font-display font-black text-primary/20 mb-4">"</div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">{t.text}</p>
              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-white/40 text-xs mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
