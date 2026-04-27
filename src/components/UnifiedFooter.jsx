import React from 'react'
import { Link } from 'react-router-dom'

const UnifiedFooter = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 overflow-hidden relative font-sans">
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
          
          <p className="text-white/20 text-[10px] font-bold tracking-[0.2em] uppercase text-center md:text-left">
            © {new Date().getFullYear()} KARRCHOLAI CONSTRUCTION. BUILT WITH DISCIPLINE.
          </p>

          <div className="flex items-center justify-center gap-2 text-white/30 text-[10px] font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Service Status: Active
          </div>
        </div>
      </div>
    </footer>
  )
}

export default UnifiedFooter
