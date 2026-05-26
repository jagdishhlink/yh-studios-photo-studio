export default function Team({ ai }) {
  const members = ai.team?.members || []
  if (members.length === 0) return null

  return (
    <section id="team" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Meet The Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">{ai.team?.title || 'Our Experts'}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <div key={i} className="glass-strong p-6 text-center group hover:bg-white/5 transition-all">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform">
                {member.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)}
              </div>
              <h3 className="font-semibold text-white text-lg">{member.name}</h3>
              <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
              <p className="text-white/50 text-xs mt-3 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
