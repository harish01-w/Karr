import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import WelcomeSection from '../components/WelcomeSection'
import KarrCholaiSection from '../components/KarrCholaiSection'
import ServicesSection from '../components/ServicesSection'
import WhyChooseUs from '../components/WhyChooseUs'
import HighlightsSection from '../components/HighlightsSection'
import BlogSection from '../components/BlogSection'
import VideoShowcase from '../components/VideoShowcase'
import QualityShowcase from '../components/QualityShowcase'
import FootprintMapSection from '../components/FootprintMapSection'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Marquee ticker items
const ticker = [
  '✦ Residential Construction',
  '✦ Project Management',
  '✦ 12+ Years Experience',
  '✦ Quality Workmanship',
  '✦ Transparent Pricing',
  '✦ Tamil Nadu, India',
  '✦ Sustainable Living',
  '✦ Karrcholai Construction',
]

const Home = () => {
  return (
    <div className="font-sans text-dark min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section id="home">
        <HeroSection />
      </section>

      {/* ── Marquee Ticker ── */}
      <div className="relative overflow-hidden bg-secondary py-4 z-10">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="text-white font-bold text-xs tracking-[0.25em] uppercase mx-8 flex-shrink-0">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Welcome / About intro ── */}
      <section id="about">
        <WelcomeSection />
      </section>

      {/* ── Video Showcase ── */}
      <VideoShowcase />

      {/* ── Services ── */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* ── Karr & Cholai split ── */}
      <section id="karr-cholai">
        <KarrCholaiSection />
      </section>

      <FootprintMapSection />

      {/* ── Why Choose Us ── */}
      <section id="why-us">
        <WhyChooseUs />
      </section>

      {/* ── Quality Showcase Video ── */}
      <QualityShowcase />

      {/* ── Highlights ── */}
      <section id="projects">
        <HighlightsSection />
      </section>



      {/* ── Blog / Insights ── */}
      <BlogSection />

      {/* ── Compact Sleek CTA ── */}
      <section className="bg-white py-20 border-y border-dark/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-24">
            
            {/* Left: Content */}
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-10 h-[1px] bg-secondary" />
                <span className="text-secondary font-black text-[10px] tracking-[0.4em] uppercase">Let's Collaborate</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-dark font-serif leading-tight mb-4"
              >
                Ready to build your <span className="italic text-primary">vision?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-dark/50 text-sm md:text-base font-light leading-relaxed"
              >
                Transforming complex ideas into structured reality. Join us for a 
                strategic consultation to map out your project's future.
              </motion.p>
            </div>

            {/* Right: Actions */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link to="/contact">
                <button className="px-8 py-4 bg-dark text-white text-[11px] font-black tracking-[0.2em] uppercase hover:bg-secondary transition-all duration-300">
                  Book Consultation
                </button>
              </Link>
              
              <Link to="/services">
                <button className="group flex items-center gap-4 text-dark hover:text-secondary transition-colors py-2">
                  <span className="text-[11px] font-black tracking-[0.2em] uppercase">Our Approach</span>
                  <div className="w-10 h-10 rounded-full border border-dark/10 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary/5 transition-all">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 13L13 1M13 1H1M13 1V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Professional Footer ── */}
      <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 overflow-hidden relative">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Column 1: Branding */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block mb-8">
                <span className="text-3xl font-bold tracking-tighter">
                  KARR<span className="text-secondary italic">CHOLAI</span>
                </span>
              </Link>
              <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
                Crafting exceptional living spaces with a fusion of traditional 
                architectural integrity and modern sustainable innovation.
              </p>
              <div className="flex gap-4">
                {['Instagram', 'LinkedIn', 'Facebook', 'Twitter'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all duration-300"
                    aria-label={social}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-tighter">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-8">Company</h4>
              <ul className="space-y-4">
                {['Home', 'About Us', 'Our Projects', 'Our Services', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`} className="text-white/40 hover:text-white text-sm transition-colors duration-300">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-8">Services</h4>
              <ul className="space-y-4">
                {[
                  'Residential Construction',
                  'Project Management',
                  'Landscape Design',
                  'Solar Integration',
                  'Quality Consulting'
                ].map((service) => (
                  <li key={service}>
                    <a href="#services" className="text-white/40 hover:text-white text-sm transition-colors duration-300">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-8">Newsletter</h4>
              <p className="text-white/40 text-sm mb-6">
                Subscribe to receive updates on our latest projects and sustainable building tips.
              </p>
              <form className="relative" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm text-white focus:outline-none focus:border-secondary transition-colors"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-secondary text-white px-6 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all duration-300"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
            
            <p className="text-white/20 text-[10px] font-bold tracking-[0.2em] uppercase">
              © {new Date().getFullYear()} KARRCHOLAI CONSTRUCTION. BUILT WITH DISCIPLINE.
            </p>

            <div className="flex items-center gap-2 text-white/30 text-[10px] font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Service Status: Active
            </div>
          </div>
        </div>
      </footer>

      {/* ── Decorative gradient orbs ── */}
      <div className="fixed bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="fixed top-[20%] left-[-10%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10" />
    </div>
  )
}

export default Home
