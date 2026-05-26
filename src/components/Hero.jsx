export default function Hero({ business, ai, layout }) {
  if (layout === 'split') return <HeroSplit business={business} ai={ai} />
  if (layout === 'minimal') return <HeroMinimal business={business} ai={ai} />
  if (layout === 'bold') return <HeroBold business={business} ai={ai} />
  if (layout === 'cinematic') return <HeroCinematic business={business} ai={ai} />
  return <HeroDefault business={business} ai={ai} />
}

function RatingBadge({ business }) {
  if (!business.rating) return null
  return (
    <div className="inline-flex items-center gap-3 glass px-6 py-3 mt-8">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className={`w-4 h-4 ${i < Math.round(parseFloat(business.rating)) ? 'text-yellow-400' : 'text-white/20'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-white font-bold text-sm">{business.rating}</span>
      {business.reviewsCount && <span className="text-white/50 text-xs">({business.reviewsCount} reviews)</span>}
    </div>
  )
}

// Layout 1: Default centered
function HeroDefault({ business, ai }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
          <span className="text-sm font-medium text-white/80">{business.category}</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-slide-up">
          <span className="gradient-text">{business.name}</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/60 font-light mb-4">{ai.tagline}</p>
        <p className="max-w-2xl mx-auto text-base text-white/50 mb-10">{ai.heroDescription}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105">
            {ai.ctaButtonText || 'Get Started'}
          </a>
          <a href="#services" className="px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all">
            Explore Services
          </a>
        </div>
        <RatingBadge business={business} />
      </div>
    </section>
  )
}

// Layout 2: Split left-right
function HeroSplit({ business, ai }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            {business.category}
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            {business.name}
          </h1>
          <p className="text-xl text-white/60 mb-2 font-light">{ai.tagline}</p>
          <p className="text-white/40 mb-8 max-w-lg">{ai.heroDescription}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-xl hover:shadow-primary/20 transition-all hover:scale-105">
              {ai.ctaButtonText || 'Contact Us'}
            </a>
            <a href="#about" className="px-7 py-3.5 rounded-2xl border border-white/10 text-white font-medium hover:bg-white/5 transition-all">
              Learn More
            </a>
          </div>
          <RatingBadge business={business} />
        </div>
        <div className="hidden lg:flex flex-col gap-4 items-center">
          <div className="glass-strong p-8 w-full max-w-sm rotate-2 hover:rotate-0 transition-transform">
            <div className="text-5xl mb-4">📍</div>
            <p className="text-white/70 text-sm">{business.address}</p>
          </div>
          <div className="glass-strong p-8 w-full max-w-sm -rotate-1 hover:rotate-0 transition-transform">
            <div className="text-5xl mb-4">⭐</div>
            <p className="text-white/70 text-sm">{business.rating ? `Rated ${business.rating}/5` : 'Top Rated'} — Trusted by hundreds</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Layout 3: Minimal / clean
function HeroMinimal({ business, ai }) {
  return (
    <section className="relative min-h-screen flex items-end pb-24 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-dark" />
      <div className="absolute top-20 right-20 w-40 h-40 border border-white/5 rounded-full" />
      <div className="absolute bottom-40 left-20 w-24 h-24 border border-white/5 rounded-full" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <p className="text-primary font-mono text-sm mb-4 tracking-wider">{business.category}</p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none tracking-tight">
          {business.name}
        </h1>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="max-w-md text-white/50 text-lg">{ai.heroDescription}</p>
          <div className="flex gap-3">
            <a href="#contact" className="px-6 py-3 rounded-full bg-white text-dark font-semibold hover:bg-white/90 transition-all">
              {ai.ctaButtonText || 'Get in Touch'}
            </a>
            <a href="#services" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all">
              Services
            </a>
          </div>
        </div>
        <RatingBadge business={business} />
      </div>
    </section>
  )
}

// Layout 4: Bold / brutalist
function HeroBold({ business, ai }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
        <div className="absolute top-1/3 left-0 w-2/3 h-px bg-white/5" />
        <div className="absolute top-2/3 right-0 w-1/2 h-px bg-white/5" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span className="text-white/60 uppercase tracking-widest text-xs">{business.category}</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
              {business.name}
            </h1>
            <p className="text-2xl text-white/40 font-light italic mb-8">{ai.tagline}</p>
            <p className="text-white/50 max-w-xl mb-10">{ai.heroDescription}</p>
            <a href="#contact" className="inline-block px-10 py-5 bg-primary text-white font-bold text-lg uppercase tracking-wide hover:bg-primary/80 transition-colors">
              {ai.ctaButtonText || 'Contact Now'}
            </a>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center gap-6">
            {business.rating && (
              <div className="border-l-2 border-primary pl-6">
                <div className="text-4xl font-display font-black text-white">{business.rating}</div>
                <div className="text-white/40 text-sm">Rating</div>
              </div>
            )}
            {business.reviewsCount && (
              <div className="border-l-2 border-secondary pl-6">
                <div className="text-4xl font-display font-black text-white">{business.reviewsCount}</div>
                <div className="text-white/40 text-sm">Reviews</div>
              </div>
            )}
            <div className="border-l-2 border-accent pl-6">
              <div className="text-4xl font-display font-black text-white">5★</div>
              <div className="text-white/40 text-sm">Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Layout 5: Cinematic / immersive
function HeroCinematic({ business, ai }) {
  const bgImage = business.images?.[0]
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {bgImage && (
        <div className="absolute inset-0">
          <img src={bgImage} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/60" />
        </div>
      )}
      {!bgImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark to-secondary/10" />
      )}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl text-white font-bold shadow-2xl shadow-primary/30">
          {business.name?.charAt(0)}
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">{business.name}</h1>
        <p className="text-primary text-lg font-medium mb-2">{ai.tagline}</p>
        <p className="text-white/50 max-w-2xl mx-auto mb-10">{ai.heroDescription}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold hover:bg-white/20 transition-all">
            {ai.ctaButtonText || 'Explore'}
          </a>
          {business.phone && (
            <a href={`tel:${business.phone.replace(/[^+\d]/g, '')}`} className="px-8 py-4 rounded-2xl bg-primary text-white font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all">
              Call Now
            </a>
          )}
        </div>
        <RatingBadge business={business} />
      </div>
    </section>
  )
}
