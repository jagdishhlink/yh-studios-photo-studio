export default function About({ business, ai, layout }) {
  if (layout === 'minimal') return <AboutMinimal business={business} ai={ai} />
  if (layout === 'bold') return <AboutBold business={business} ai={ai} />
  return <AboutDefault business={business} ai={ai} />
}

function AboutDefault({ business, ai }) {
  const stats = [
    { value: business.rating || '5.0', label: 'Rating' },
    { value: business.reviewsCount || '100+', label: 'Reviews' },
    { value: '5★', label: 'Service' },
  ]

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-widest text-primary mb-4">Who We Are</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">{ai.aboutTitle}</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-white/60 leading-relaxed mb-8">{ai.aboutText}</p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="glass p-5 text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {business.address && (
              <InfoCard icon="📍" title="Location" text={business.address} />
            )}
            {business.phone && (
              <InfoCard icon="📞" title="Phone" text={business.phone} />
            )}
            {business.website && (
              <InfoCard icon="🌐" title="Website" text={business.website} link={business.website} />
            )}
            {business.openingHours && (
              <InfoCard icon="🕐" title="Hours" text={business.openingHours} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutMinimal({ business, ai }) {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">About</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">{ai.aboutTitle}</h2>
          <p className="text-xl text-white/50 leading-relaxed">{ai.aboutText}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {business.address && (
            <div className="p-8 bg-dark">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Location</p>
              <p className="text-white">{business.address}</p>
            </div>
          )}
          {business.phone && (
            <div className="p-8 bg-dark">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Phone</p>
              <p className="text-white">{business.phone}</p>
            </div>
          )}
          {business.rating && (
            <div className="p-8 bg-dark">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Rating</p>
              <p className="text-white text-3xl font-display font-bold">{business.rating}<span className="text-white/30 text-lg">/5</span></p>
            </div>
          )}
          {business.openingHours && (
            <div className="p-8 bg-dark">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Hours</p>
              <p className="text-white text-sm">{business.openingHours}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function AboutBold({ business, ai }) {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="w-3 h-3 bg-primary rounded-full mb-6" />
              <h2 className="font-display text-5xl font-black text-white uppercase tracking-tight mb-4">{ai.aboutTitle}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xl text-white/60 leading-relaxed mb-12">{ai.aboutText}</p>
            <div className="space-y-6">
              {business.address && (
                <div className="flex items-start gap-4 border-l-2 border-primary/30 pl-6">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Address</p>
                    <p className="text-white">{business.address}</p>
                  </div>
                </div>
              )}
              {business.phone && (
                <div className="flex items-start gap-4 border-l-2 border-secondary/30 pl-6">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-white">{business.phone}</p>
                  </div>
                </div>
              )}
              {business.website && (
                <div className="flex items-start gap-4 border-l-2 border-accent/30 pl-6">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Website</p>
                    <a href={business.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{business.website}</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, title, text, link }) {
  return (
    <div className="glass-strong p-6 flex items-start gap-4 hover:bg-white/5 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">{text}</a>
        ) : (
          <p className="text-white/60 text-sm">{text}</p>
        )}
      </div>
    </div>
  )
}
