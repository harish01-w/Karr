import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import WelcomeSection from '../components/WelcomeSection'
import KarrCholaiSection from '../components/KarrCholaiSection'
import ServicesSection from '../components/ServicesSection'
import WhyChooseUs from '../components/WhyChooseUs'
import ProjectsSection from '../components/ProjectsSection'
import UnifiedFooter from '../components/UnifiedFooter'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="font-sans text-dark min-h-screen selection:bg-secondary selection:text-white">
      <Navbar />
      
      <main>
        {/* Sections with unique IDs for navigation */}
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <WelcomeSection />
        </section>

        <section id="karr-cholai">
          <KarrCholaiSection />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="projects" className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 paper-texture opacity-20 pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <WhyChooseUs />
              <ProjectsSection />
            </div>
          </div>
        </section>

        {/* Unified Footer Section with your provided background image */}
        <section id="contact-info">
          <UnifiedFooter />
        </section>
      </main>

      {/* Decorative Gradient Blob */}
      <div className="fixed bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="fixed top-[20%] left-[-10%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
    </div>
  )
}

export default Home

