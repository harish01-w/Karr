import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/KARRCHOLAI LOGO.png'

const UnifiedFooter = () => {
  return (
    <footer className="relative bg-primary text-white pt-16 pb-8 overflow-hidden font-sans border-t border-white/5">
      {/* Background Enhancements */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />
      
      {/* Dynamic Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Elegant Top Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Branding */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center justify-center mb-6 group bg-white overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
              <img 
                src={logoImg} 
                alt="KARRCHOLAI" 
                className="h-24 md:h-32 w-auto object-contain transition-all duration-500 group-hover:scale-[1.05]"
              />
            </Link>
            <p className="text-white/60 text-xs leading-relaxed mb-6 max-w-xs font-light">
              Crafting exceptional living spaces with a fusion of traditional 
              architectural integrity and modern sustainable innovation.
            </p>
            <div className="flex gap-3">
              {['Instagram', 'LinkedIn', 'Facebook', 'Twitter'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-secondary hover:bg-secondary/20 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-[9px] font-bold uppercase tracking-widest">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[9px] font-black tracking-[0.4em] uppercase text-secondary mb-6 brightness-110">Company</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Projects', 'Our Services', 'Manaiyadi', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : link === 'Manaiyadi' ? '/manaiyadi' : `/${link.toLowerCase().replace(' ', '')}`} className="text-white/50 hover:text-white text-xs transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-secondary group-hover:w-3 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-[9px] font-black tracking-[0.4em] uppercase text-secondary mb-6 brightness-110">Services</h4>
            <ul className="space-y-3">
              {[
                'Residential Construction',
                'Manaiyadi Sastram',
                'Project Management',
                'Landscape Design',
                'Solar Integration',
                'Quality Consulting'
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/50 hover:text-white text-xs transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-secondary group-hover:w-3 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-[9px] font-black tracking-[0.4em] uppercase text-secondary mb-6 brightness-110">Newsletter</h4>
            <p className="text-white/50 text-xs mb-6 font-light leading-relaxed">
              Updates on our latest projects and building tips.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/10 border border-white/10 rounded-lg py-3 px-4 text-xs text-white focus:outline-none focus:border-secondary transition-all placeholder:text-white/30"
              />
              <button 
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-secondary text-white px-5 rounded-md text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-500"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-[8px] font-black tracking-[0.3em] uppercase text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          
          <p className="text-white/30 text-[8px] font-black tracking-[0.3em] uppercase text-center md:text-left">
            © {new Date().getFullYear()} KARRCHOLAI CONSTRUCTION.
          </p>

          <div className="flex items-center justify-center gap-2 text-white/40 text-[8px] font-black tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            Status: Live
          </div>
        </div>
      </div>
    </footer>
  )
}

export default UnifiedFooter
