export default function Booking({ ai, business }) {
  const booking = ai.booking || {}

  return (
    <section id="booking" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Book Now
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">{booking.title || 'Schedule Your Visit'}</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">{booking.description || 'Ready to experience our services? Book your appointment today.'}</p>
        </div>

        <div className="glass-strong p-8 md:p-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/60 text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/60 text-sm font-medium mb-2">Preferred Date</label>
                <input
                  type="date"
                  className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm font-medium mb-2">Service</label>
                <select className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all">
                  <option value="" className="bg-gray-900">Select a service</option>
                  {(ai.services || []).map((s, i) => (
                    <option key={i} value={s.title} className="bg-gray-900">{s.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white/60 text-sm font-medium mb-2">Message (Optional)</label>
              <textarea
                rows={4}
                placeholder="Any special requests..."
                className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-[1.02]"
            >
              Book Appointment
            </button>
          </form>

          {business.phone && (
            <p className="text-center text-white/40 text-sm mt-6">
              Or call us directly: <a href={`tel:${business.phone.replace(/[^+\d]/g, '')}`} className="text-primary hover:underline">{business.phone}</a>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
