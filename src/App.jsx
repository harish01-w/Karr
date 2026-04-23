import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Services from './pages/Services'
import Karr from './pages/Karr'
import ScrollToTop from './components/ScrollToTop'
import AIAssistant from './components/AIAssistant'
import Preloader from './components/Preloader'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/karr" element={<Karr />} />
          </Routes>
          <AIAssistant />
        </>
      )}
    </Router>
  )
}



export default App

