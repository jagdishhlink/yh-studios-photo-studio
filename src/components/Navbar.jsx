import { useState, useEffect } from 'react'

const SECTION_LABELS = {
  about: 'About',
  services: 'Services',
  portfolio: 'Portfolio',
  gallery: 'Gallery',
  pricing: 'Pricing',
  team: 'Team',
  events: 'Events',
  booking: 'Book Now',
  faq: 'FAQ',
  testimonials: 'Reviews',
  contact: 'Contact',
}

export default function Navbar({ business, sections = [] }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Build nav links from active sections
  const navLinks = sections
    .filter((s) => SECTION_LABELS[s])
    .slice(0, 6)
    .map((s) => ({ href: `#${s}`, label: SECTION_LABELS[s] }))

  const ctaSection = sections.includes('booking') ? 'booking' : 'contact'
  const ctaLabel = sections.includes('booking') ? 'Book Now' : 'Contact Us'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass-strong py-3 shadow-2xl' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          {business.logo ? (
            <img src={business.logo} alt={business.name} className="h-10 w-auto object-contain group-hover:scale-110 transition-transform" />
          ) : (
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
              {business.name?.charAt(0) || 'B'}
            </div>
          )}
          <span className="font-display font-bold text-lg text-white hidden sm:block">
            {business.name}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a
              href={`#${ctaSection}`}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              {ctaLabel}
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-strong mt-3 mx-4 p-6 rounded-2xl animate-slide-up">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-white/80 hover:text-white font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`#${ctaSection}`}
            onClick={() => setMenuOpen(false)}
            className="block mt-4 text-center px-5 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </nav>
  )
}
