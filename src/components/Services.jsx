import React from 'react'
import { Code2, Layout, Smartphone, Zap, BarChart3, ShoppingBag } from 'lucide-react'

const Services = () => {
  return (
    <section id="Services" className="py-32 px-4 relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        
        {/* Header */}
        <span className="inline-block text-violet-500 dark:text-[#e0c0fd] text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 bg-violet-500/10 rounded-full border border-violet-500/20">
          Services
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold dark:text-white text-gray-900 mb-20">
          What I <span className="text-violet-500 dark:text-[#e0c0fd]">Can Do</span>
        </h2>

        {/* Outer Hub Container */}
        <div className="relative w-full max-w-3xl h-[500px] mx-auto flex items-center justify-center my-8">
          
          {/* SVG Connecting Lines for 5 Nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {/* Top Center */}
            <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
            {/* Top Right */}
            <line x1="50%" y1="50%" x2="88%" y2="28%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
            {/* Bottom Right */}
            <line x1="50%" y1="50%" x2="78%" y2="82%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
            {/* Bottom Left */}
            <line x1="50%" y1="50%" x2="22%" y2="82%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
            {/* Top Left */}
            <line x1="50%" y1="50%" x2="12%" y2="28%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
          </svg>

          {/* Central Logo Circle */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-violet-600 via-purple-500 to-indigo-600 p-1 shadow-[0_0_60px_rgba(139,92,246,0.6)] z-20 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-4">
              <Code2 className="w-10 h-10 text-violet-400 mb-1 animate-pulse" />
              <span className="text-xs font-bold text-white tracking-widest uppercase">FRONTEND</span>
            </div>
          </div>

          {/* 1. Top Center Card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-50/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xl hover:border-violet-500 transition-all duration-300">
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-500 dark:text-[#e0c0fd] flex items-center justify-center">
              <Layout className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold dark:text-white text-gray-800">Figma to React</span>
          </div>

          {/* 2. Top Right Card */}
          <div className="absolute top-[22%] right-0 sm:right-4 z-30 flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-50/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xl hover:border-violet-500 transition-all duration-300">
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-500 dark:text-[#e0c0fd] flex items-center justify-center">
              <BarChart3 className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold dark:text-white text-gray-800">Dashboards</span>
          </div>

          {/* 3. Bottom Right Card */}
          <div className="absolute bottom-[8%] right-[5%] sm:right-[10%] z-30 flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-50/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xl hover:border-violet-500 transition-all duration-300">
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-500 dark:text-[#e0c0fd] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold dark:text-white text-gray-800">E-Commerce</span>
          </div>

          {/* 4. Bottom Left Card */}
          <div className="absolute bottom-[8%] left-[5%] sm:left-[10%] z-30 flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-50/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xl hover:border-violet-500 transition-all duration-300">
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-500 dark:text-[#e0c0fd] flex items-center justify-center">
              <Smartphone className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold dark:text-white text-gray-800">Responsive UI</span>
          </div>

          {/* 5. Top Left Card */}
          <div className="absolute top-[22%] left-0 sm:left-4 z-30 flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-50/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xl hover:border-violet-500 transition-all duration-300">
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-500 dark:text-[#e0c0fd] flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold dark:text-white text-gray-800">API Integration</span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Services