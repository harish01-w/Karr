import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Karr', path: '/#karr-cholai' },
    { name: 'Cholai', path: '/#karr-cholai' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Blog', path: '/' },
    { name: 'Careers', path: '/' },
    { name: 'Contact', path: '/#contact-info' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (path) => {
    setMobileMenuOpen(false)
    if (path.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const id = path.split('#')[1]
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const id = path.split('#')[1]
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(path)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="flex items-center">
             <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="25" height="60" fill="#c9783b" rx="2" />
                <rect x="55" y="20" width="25" height="60" fill="#2f4f3e" rx="2" />
                <path d="M10 40L50 10L90 40" stroke="#2f4f3e" strokeWidth="6" strokeLinecap="round" />
             </svg>
          </div>
          <span className="text-2xl font-black tracking-tight text-dark font-sans ml-1">
            KARRCHOLAI
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group cursor-pointer" onClick={() => handleNavClick(link.path)}>
              <span className={`text-[15px] font-medium transition-colors ${
                (location.pathname === link.path) ? 'text-primary border-b-2 border-primary pb-1' : 'text-dark/70 hover:text-primary'
              }`}>
                {link.name}
              </span>
            </div>
          ))}
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer hover:bg-primary/90 transition-all ml-2">
            <FiPhone className="text-lg" />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden text-primary text-3xl cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col justify-center items-center gap-8"
          >
            <div className="absolute top-6 right-8 text-primary text-4xl cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
              <FiX />
            </div>
            {navLinks.map((link, i) => (
              <motion.span 
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handleNavClick(link.path)}
                className="text-2xl font-bold font-serif text-dark hover:text-secondary cursor-pointer"
              >
                {link.name}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

