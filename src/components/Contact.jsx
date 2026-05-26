export default function Contact({ business, ai }) {
  const phoneClean = (business.phone || '').replace(/[^+\d]/g, '')

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Card */}
        <div className="glass-strong p-12 md:p-16 text-center mb-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              {ai.ctaTitle}
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              {ai.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {business.phone && (
                <a
                  href={`tel:${phoneClean}`}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                >
                  Call Now
                </a>
              )}
              {business.mapUrl && (
                <a
                  href={business.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all duration-300"
                >
                  Get Directions
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Contact section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact cards */}
          <div className="space-y-4">
            {business.address && (
              <a
                href={business.mapUrl || `https://www.google.com/maps?q=${encodeURIComponent(business.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-strong p-6 flex items-center gap-4 hover:bg-white/5 transition-all duration-300 group block"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-0.5">Visit Us</h3>
                  <p className="text-white/60 text-sm">{business.address}</p>
                </div>
              </a>
            )}

            {business.phone && (
              <a
                href={`tel:${phoneClean}`}
                className="glass-strong p-6 flex items-center gap-4 hover:bg-white/5 transition-all duration-300 group block"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  📞
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-0.5">Call Us</h3>
                  <p className="text-white/60 text-sm">{business.phone}</p>
                </div>
              </a>
            )}

            {business.email && (
              <a
                href={`mailto:${business.email}`}
                className="glass-strong p-6 flex items-center gap-4 hover:bg-white/5 transition-all duration-300 group block"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  ✉️
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-0.5">Email Us</h3>
                  <p className="text-white/60 text-sm">{business.email}</p>
                </div>
              </a>
            )}

            {business.website && (
              <a
                href={business.website}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-strong p-6 flex items-center gap-4 hover:bg-white/5 transition-all duration-300 group block"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  🌐
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-0.5">Website</h3>
                  <p className="text-white/60 text-sm">{business.website}</p>
                </div>
              </a>
            )}
          </div>

          {/* Map embed */}
          <div className="glass-strong overflow-hidden h-[400px]">
            {business.address ? (
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Business Location"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/30">
                <span>Map not available</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
