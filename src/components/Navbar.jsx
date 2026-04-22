import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logoImg from '../../assets/KARRCHOLAI LOGO.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Karr', path: '/#karr-cholai' },
    { name: 'Cholai', path: '/#karr-cholai' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Contact', path: '/contact' }
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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white/95 shadow-lg backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105">
          <div className="h-14 md:h-20 transition-all duration-500 flex items-center">
             <img 
               src={logoImg} 
               alt="KARRCHOLAI Logo" 
               className="h-full w-auto object-contain"
             />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path.startsWith('/#') && location.hash === link.path.split('/')[1])
            
            return (
              <div 
                key={link.name} 
                className="relative cursor-pointer group px-2 py-1"
                onClick={() => handleNavClick(link.path)}
              >
                <span className={`text-[11px] md:text-[12px] font-black tracking-[0.3em] uppercase transition-all duration-300 ${
                  isActive 
                    ? (scrolled ? 'text-primary' : 'text-secondary') 
                    : (scrolled ? 'text-dark/80 hover:text-primary' : 'text-white hover:text-secondary')
                }`}>
                  {link.name}
                </span>
                
                {/* Unique animated underline */}
                <motion.div 
                  className={`absolute bottom-0 left-2 right-2 h-[2px] bg-secondary origin-left`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                />
              </div>
            )
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <motion.div 
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-4xl cursor-pointer" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX className="text-primary" /> : <FiMenu className={scrolled ? "text-primary" : "text-white"} />}
        </motion.div>
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

