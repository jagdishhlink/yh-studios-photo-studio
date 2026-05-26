import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Booking from './components/Booking'
import Events from './components/Events'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { businessData, aiContent, siteConfig } from './data'

export default function App() {
  const layout = siteConfig.layout || 'default'
  const sections = siteConfig.sections || []

  return (
    <div className="noise">
      <div className="mesh-gradient" />
      <Navbar business={businessData} sections={sections} />
      <Hero business={businessData} ai={aiContent} layout={layout} />

      {sections.includes('about') && <About business={businessData} ai={aiContent} layout={layout} />}
      {sections.includes('services') && <Services ai={aiContent} layout={layout} />}
      {sections.includes('portfolio') && <Portfolio ai={aiContent} business={businessData} />}
      {sections.includes('gallery') && <Gallery business={businessData} />}
      {sections.includes('pricing') && <Pricing ai={aiContent} />}
      {sections.includes('team') && <Team ai={aiContent} />}
      {sections.includes('events') && <Events ai={aiContent} />}
      {sections.includes('booking') && <Booking ai={aiContent} business={businessData} />}
      {sections.includes('faq') && <FAQ ai={aiContent} />}
      {sections.includes('testimonials') && <Testimonials ai={aiContent} layout={layout} />}
      {sections.includes('contact') && <Contact business={businessData} ai={aiContent} />}

      <Footer business={businessData} ai={aiContent} />
    </div>
  )
}
