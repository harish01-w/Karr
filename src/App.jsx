import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Services from './pages/Services'
import ScrollToTop from './components/ScrollToTop'
import AIAssistant from './components/AIAssistant'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <AIAssistant />
    </Router>
  )
}



export default App

