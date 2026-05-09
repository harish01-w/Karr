import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiCheck, FiX, FiMinus, FiArrowRight, FiActivity, FiArrowUp } from 'react-icons/fi'
import { measurementEffects, wallHeightEffects } from '../../data/manaiyadiData'
import staircase from '../../assets/minimalist_luxury_staircase.png'

const MeasurementTable = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [activeHeight, setActiveHeight] = useState(10)

  const measurements = Object.entries(measurementEffects).map(([ft, data]) => ({
    ft: parseInt(ft),
    ...data
  }))

  const filteredMeasurements = measurements.filter(m => {
    const matchesSearch = m.ft.toString().includes(search)
    const matchesFilter = filter === 'all' || m.status === filter
    return matchesSearch && matchesFilter
  })

  const StatusIcon = ({ status }) => {
    if (status === 'favorable') return <FiCheck className="text-primary" />
    if (status === 'unfavorable') return <FiX className="text-secondary" />
    return <FiMinus className="text-dark/20" />
  }

  return (
    <div className="space-y-48">
      {/* 01. Comprehensive Dimension Guide - Compact & Clean */}
      <section className="px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-16">
          <div className="max-w-xl">
            <h3 className="text-secondary font-black tracking-[0.5em] uppercase text-[10px] mb-4">Registry 01</h3>
            <h2 className="text-4xl md:text-7xl font-black text-dark leading-[0.9] tracking-tighter uppercase">
              The Master <br /> <span className="text-transparent stroke-text-dark italic font-serif">Registry.</span>
            </h2>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
             <div className="relative group">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/20 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Find feet..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 pr-6 py-4 bg-white border border-dark/5 rounded-full text-sm focus:outline-none focus:border-primary w-full sm:w-64 transition-all shadow-sm"
              />
            </div>
            <div className="flex bg-white p-1 rounded-full border border-dark/5 shadow-sm">
              {['all', 'favorable', 'unfavorable'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === f ? 'bg-dark text-white shadow-lg' : 'text-dark/40 hover:text-dark'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[3rem] border border-dark/5 shadow-2xl overflow-hidden">
          <div className="max-h-[600px] overflow-y-auto hide-scrollbar">
            <table className="w-full border-collapse">
              <thead className="sticky top-0 z-10 bg-dark text-white">
                <tr>
                  <th className="px-10 py-6 text-left text-[10px] font-black uppercase tracking-[0.3em]">Dimension</th>
                  <th className="px-10 py-6 text-left text-[10px] font-black uppercase tracking-[0.3em]">Effect / Result</th>
                  <th className="px-10 py-6 text-right text-[10px] font-black uppercase tracking-[0.3em]">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark/5">
                <AnimatePresence mode="popLayout">
                  {filteredMeasurements.map((item) => (
                    <motion.tr 
                      key={item.ft}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="group hover:bg-cream/50 transition-colors"
                    >
                      <td className="px-10 py-8">
                        <span className="text-3xl font-black text-dark group-hover:text-primary transition-colors">{item.ft}<span className="text-sm ml-1 text-dark/20 group-hover:text-primary/30">ft</span></span>
                      </td>
                      <td className="px-10 py-8">
                        <p className="text-sm font-medium text-dark/60 leading-relaxed max-w-md">{item.effect}</p>
                      </td>
                      <td className="px-10 py-8 text-right">
                        <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border ${item.status === 'favorable' ? 'bg-primary/5 border-primary/20 text-primary' : item.status === 'unfavorable' ? 'bg-secondary/5 border-secondary/20 text-secondary' : 'bg-dark/5 border-dark/10 text-dark/40'}`}>
                          <StatusIcon status={item.status} />
                          <span className="text-[10px] font-black uppercase tracking-widest">{item.status}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 02. DEEP REDESIGN: INTERACTIVE VERTICAL ELEVATION */}
      <section className="relative px-4 py-32 overflow-hidden rounded-[4rem]">
        {/* Atmospheric Background Image */}
        <div className="absolute inset-0 z-0">
           <img src={staircase} alt="" className="w-full h-full object-cover opacity-10 blur-xl" />
           <div className="absolute inset-0 bg-gradient-to-b from-[#fdfbf7] via-transparent to-[#fdfbf7]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
             <h3 className="text-secondary font-black tracking-[0.5em] uppercase text-[10px] mb-4">Analysis 02</h3>
             <h2 className="text-4xl md:text-7xl font-black text-dark tracking-tighter uppercase leading-none">
                Vertical <span className="text-primary italic font-serif">Elevation.</span>
             </h2>
             <p className="mt-6 text-dark/40 text-lg font-light max-w-2xl mx-auto italic">
                A structural deep-dive into how wall heights dictate the vertical Prana of a sanctuary.
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Interactive Height Selector (The "Ruler") */}
            <div className="lg:col-span-4 bg-dark rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden grain shadow-2xl">
              <div className="relative z-10">
                <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-12">Height Selector</h4>
                <div className="flex flex-wrap gap-3">
                  {Object.keys(wallHeightEffects).map((ft) => (
                    <button
                      key={ft}
                      onMouseEnter={() => setActiveHeight(ft)}
                      onClick={() => setActiveHeight(ft)}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black transition-all duration-300 border ${activeHeight == ft ? 'bg-primary border-primary text-white scale-110 shadow-lg shadow-primary/20' : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30 hover:text-white'}`}
                    >
                      {ft}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mt-16 relative z-10 pt-12 border-t border-white/5">
                <div className="flex items-center gap-4 text-white/20 mb-6">
                   <FiActivity size={24} />
                   <span className="text-[9px] font-black uppercase tracking-[0.3em]">Vertical Dynamics</span>
                </div>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Wall height is as critical as the floor plan. It dictates the vertical volume of life energy.
                </p>
              </div>

              {/* Background Accent */}
              <div className="absolute bottom-0 right-0 p-12 opacity-5 text-white"><FiArrowUp size={200} /></div>
            </div>

            {/* Right Column: Detailed Outcome Showcase (The "Compact Reveal") */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* 1. Main Display Card */}
               <div className="md:col-span-2 bg-white rounded-[3rem] border border-dark/5 p-12 flex flex-col md:flex-row items-center gap-12 shadow-xl relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-64 h-64 -mr-32 -mt-32 rounded-full blur-[100px] opacity-10 transition-colors duration-1000 ${wallHeightEffects[activeHeight].status === 'favorable' ? 'bg-primary' : wallHeightEffects[activeHeight].status === 'unfavorable' ? 'bg-secondary' : 'bg-dark'}`} />
                  
                  <div className="relative z-10 text-center md:text-left">
                    <span className="text-[12rem] font-black text-dark/5 leading-none tracking-tighter absolute -left-4 -top-8 select-none">{activeHeight}</span>
                    <div className="relative pt-8">
                       <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border mb-8 ${wallHeightEffects[activeHeight].status === 'favorable' ? 'bg-primary/5 border-primary/20 text-primary' : wallHeightEffects[activeHeight].status === 'unfavorable' ? 'bg-secondary/5 border-secondary/20 text-secondary' : 'bg-dark/5 border-dark/10 text-dark/40'}`}>
                          <StatusIcon status={wallHeightEffects[activeHeight].status} />
                          <span className="text-[10px] font-black uppercase tracking-widest">{wallHeightEffects[activeHeight].status}</span>
                       </div>
                       <h3 className="text-4xl md:text-6xl font-black text-dark tracking-tighter uppercase mb-6">{activeHeight} Feet <span className="text-primary italic font-serif">Height.</span></h3>
                       <p className="text-xl text-dark/60 font-light leading-relaxed max-w-xl italic">
                         "{wallHeightEffects[activeHeight].effect}"
                       </p>
                    </div>
                  </div>
               </div>

               {/* 2. Top Recommendations (Static) */}
               {[10, 16, 22].map((ft) => (
                  <div key={ft} className="bg-white rounded-[3rem] border border-dark/5 p-10 flex flex-col justify-between hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl group">
                     <div className="flex justify-between items-start mb-8">
                        <span className="text-4xl font-black text-dark tracking-tighter group-hover:text-primary transition-colors">{ft}ft</span>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><FiCheck size={16} /></div>
                     </div>
                     <div>
                        <p className="text-[9px] font-black text-dark/20 uppercase tracking-widest mb-2">Ideal Choice</p>
                        <p className="text-sm font-bold text-dark/60 leading-snug">{wallHeightEffects[ft].effect}</p>
                     </div>
                  </div>
               ))}
               
               {/* 3. Cautionary Note */}
               <div className="bg-secondary/5 border border-secondary/10 rounded-[3rem] p-10 flex flex-col justify-between text-secondary">
                  <div className="flex justify-between items-start mb-8">
                     <span className="text-4xl font-black tracking-tighter italic">Warning.</span>
                     <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center"><FiX size={16} /></div>
                  </div>
                  <div>
                     <p className="text-[9px] font-black text-secondary/40 uppercase tracking-widest mb-2">Avoid these heights</p>
                     <p className="text-xs font-bold leading-relaxed">Heights of 7, 9, 15, 18, 19, 23, 24, and 26 feet are associated with desolate conditions and lack of peace.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MeasurementTable
