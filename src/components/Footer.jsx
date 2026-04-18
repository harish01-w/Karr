import { motion } from 'framer-motion'

const Footer = () => {
  const links = ['Home', 'About', 'Karr', 'Cholai', 'Projects', 'Careers', 'Contact']

  return (
    <footer className="bg-secondary text-dark py-12 relative overflow-hidden">
      {/* Subtle paper texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay paper-texture pointer-events-none"></div>

      <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-xs font-bold uppercase tracking-[0.2em]">
          {links.map((link, idx) => (
            <motion.li key={idx} className="relative group flex items-center">
              <span className="cursor-pointer hover:text-white transition-colors">{link}</span>
              {idx < links.length - 1 && (
                <span className="hidden sm:inline-block ml-8 text-dark/20 text-xl font-light">|</span>
              )}
            </motion.li>
          ))}
        </ul>

        <div className="w-full max-w-4xl h-[1px] bg-dark/10 mb-8"></div>

        <div className="text-[10px] md:text-sm font-bold text-dark/60 tracking-[0.3em] uppercase">
          © 2024 Karrcholai Construction; All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
