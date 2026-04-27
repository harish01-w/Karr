import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logoImg from '../../assets/KARRCHOLAI LOGO.png'

const navLinks = [
  { name: 'Home',     path: '/' },
  { name: 'About',    path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Karr',     path: '/karr' },
  { name: 'Cholai',   path: '/cholai' },
  { name: 'Projects', path: '/projects' },
  { name: 'Insights', path: '/#insights' },
  { name: 'Contact',  path: '/contact' },
]

// Pages where navbar is always solid white
const SOLID_PAGES = ['/projects', '/about', '/contact', '/services', '/karr', '/cholai']

const Navbar = () => {
  const [scrolled, setScrolled]       = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()

  const isSolid = scrolled || SOLID_PAGES.includes(location.pathname)

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close menu on route change
  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  const handleNavClick = (path) => {
    setMobileOpen(false)
    if (path.startsWith('/#')) {
      const id = path.split('#')[1]
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 120)
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(path)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-400 ${
          isSolid ? 'bg-white/96 shadow-md backdrop-blur-md py-2' : 'bg-transparent py-3 md:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
            <img
              src={logoImg}
              alt="KARRCHOLAI"
              className={`w-auto object-contain transition-all duration-400 drop-shadow-lg ${isSolid ? 'h-12 md:h-20' : 'h-16 md:h-28'}`}
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className="relative group px-1 py-1 cursor-pointer"
                >
                  <span className={`text-[11px] font-black tracking-[0.3em] uppercase transition-colors duration-300 ${
                    isActive
                      ? (isSolid ? 'text-primary' : 'text-secondary')
                      : (isSolid ? 'text-dark/75 hover:text-primary' : 'text-white/90 hover:text-secondary')
                  }`}>
                    {link.name}
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: 'circOut' }}
                  />
                </button>
              )
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-200"
            style={{ color: isSolid ? '#1C1C1A' : '#fff' }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen
                ? <motion.span key="x"    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><FiX size={24} /></motion.span>
                : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }}  animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><FiMenu size={24} /></motion.span>
              }
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[98] bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="fixed top-0 right-0 bottom-0 z-[99] w-[75vw] max-w-[320px] bg-white flex flex-col lg:hidden shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-dark/8">
                <img src={logoImg} alt="KARRCHOLAI" className="h-14 w-auto object-contain" />
                <button onClick={() => setMobileOpen(false)} className="text-dark/60 hover:text-primary transition-colors">
                  <FiX size={22} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.path
                  return (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      onClick={() => handleNavClick(link.path)}
                      className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-bold tracking-[0.2em] uppercase transition-all duration-200 ${
                        isActive
                          ? 'bg-primary/8 text-primary'
                          : 'text-dark/70 hover:bg-dark/5 hover:text-dark'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />}
                        {link.name}
                      </span>
                    </motion.button>
                  )
                })}
              </nav>

              {/* Drawer footer CTA */}
              <div className="px-6 py-6 border-t border-dark/8">
                <button
                  onClick={() => handleNavClick('/contact')}
                  className="w-full py-3.5 rounded-xl text-sm font-black tracking-[0.2em] uppercase text-white transition-all duration-200 hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #3F5F4A, #C9754A)' }}
                >
                  Get a Free Quote
                </button>
                <p className="text-center text-[10px] text-dark/30 tracking-widest uppercase mt-4">
                  Karrcholai · Stone Grove
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
