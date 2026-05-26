export default function Footer({ business, ai }) {
  const year = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            {business.logo ? (
              <img src={business.logo} alt={business.name} className="h-10 w-auto object-contain" />
            ) : (
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                {business.name?.charAt(0) || 'B'}
              </div>
            )}
            <div>
              <span className="font-display font-bold text-white">{business.name}</span>
              <p className="text-white/40 text-xs">{ai.tagline}</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-white/50">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            {business.mapUrl && (
              <a href={business.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Google Maps
              </a>
            )}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-white/30 text-sm">
            &copy; {year} {business.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
