import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import WelcomeSection from '../components/WelcomeSection'
import KarrCholaiSection from '../components/KarrCholaiSection'
import ServicesSection from '../components/ServicesSection'
import WhyChooseUs from '../components/WhyChooseUs'
import ProjectsSection from '../components/ProjectsSection'
import HighlightsSection from '../components/HighlightsSection'
import VideoShowcase from '../components/VideoShowcase'
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

      {/* ── Why Choose Us ── */}
      <section id="why-us">
        <WhyChooseUs />
      </section>

      {/* ── Highlights ── */}
      <section id="highlights">
        <HighlightsSection />
      </section>

      {/* ── Projects ── */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* ── CTA Band ── */}
      <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: '#41634A' }}>
        <div className="absolute inset-0 stone-texture opacity-15 pointer-events-none" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(219,127,80,0.15) 0%, transparent 60%)'
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-secondary" />
            <span className="text-secondary font-bold text-xs tracking-[0.3em] uppercase">Let's Build Together</span>
            <div className="h-px w-10 bg-secondary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white font-serif leading-tight mb-6"
          >
            Ready to Build Your<br />
            <span className="text-secondary">Dream Home?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/65 text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light"
          >
            Get a free consultation with our experts. We'll walk you through every step of your
            construction journey — from planning to possession.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-sm tracking-[0.15em] uppercase"
              >
                Get a Free Consultation
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline text-sm tracking-[0.15em] uppercase"
              >
                View Our Services
              </motion.button>
            </Link>
          </motion.div>
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
                <span className="text-2xl font-bold tracking-tighter">
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
