import { motion } from 'framer-motion'
import prj1 from '../../assets/pic3.png'
import prj2 from '../../assets/pic4.png'
import prj3 from '../../assets/pic5.png'

const ProjectsSection = () => {
  const projects = [
    { title: 'Project One', image: prj1 },
    { title: 'Project Two', image: prj2 },
    { title: 'Project Three', image: prj3 },
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full lg:w-2/3 flex flex-col items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col bg-white overflow-hidden shadow-2xl group cursor-pointer border border-gray-100"
          >
            <div className="h-56 overflow-hidden relative">
               <motion.img 
                 whileHover={{ scale: 1.1 }}
                 transition={{ duration: 0.6 }}
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover" 
               />
               <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-4 bg-white text-center">
              <span className="font-bold text-dark text-xs tracking-[0.2em] uppercase">{project.title}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button 
        whileHover={{ scale: 1.05, backgroundColor: "#b56932" }}
        whileTap={{ scale: 0.95 }}
        className="bg-secondary text-white px-10 py-3.5 rounded text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-lg flex items-center gap-3"
      >
        View All Projects
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </motion.button>
    </motion.div>
  )
}

export default ProjectsSection
