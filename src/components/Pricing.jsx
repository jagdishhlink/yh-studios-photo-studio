export default function Pricing({ ai }) {
  const packages = ai.pricing?.packages || []
  if (packages.length === 0) return null

  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Pricing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Our Packages</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">{ai.pricing?.description || ''}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative glass-strong p-8 flex flex-col ${
                pkg.popular ? 'border-primary/50 scale-105 shadow-2xl shadow-primary/10' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-bold text-white">
                  Most Popular
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-white mb-2">{pkg.name}</h3>
              <p className="text-white/50 text-sm mb-6">{pkg.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-display font-black gradient-text">{pkg.price}</span>
                {pkg.period && <span className="text-white/40 text-sm ml-2">{pkg.period}</span>}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {(pkg.features || []).map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-semibold transition-all hover:scale-105 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30'
                    : 'glass text-white hover:bg-white/10'
                }`}
              >
                {pkg.cta || 'Get Started'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
