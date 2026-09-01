import React, { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="Contact" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-violet-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-violet-500 dark:text-[#e0c0fd] text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 bg-violet-500/10 rounded-full border border-violet-500/20">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-gray-900 tracking-tight">
            Let's Build Something <span className="text-violet-500 dark:text-[#e0c0fd]">Great Together</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Have a project in mind or an opportunity? Feel free to drop a message or connect directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Side (4 Columns) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Title Badge Card */}
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="w-5 h-5 text-violet-500 dark:text-[#e0c0fd]" />
                <h3 className="text-lg font-bold dark:text-white text-gray-900">Let's Chat</h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                I'm always open to discussing web development projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Email Card */}
            <div className="group p-5 rounded-2xl bg-gray-50 dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-all duration-300 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-500 dark:text-[#e0c0fd] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Email Me</span>
                  <a href="mailto:bassant.farag.dev@gmail.com" className="text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-violet-500 dark:hover:text-[#e0c0fd] transition-colors truncate block">
                    bassanttfarag28@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group p-5 rounded-2xl bg-gray-50 dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-all duration-300 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-500 dark:text-[#e0c0fd] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Location</span>
                  <span className="text-sm font-bold text-gray-800 dark:text-gray-200 block">
                    Alexandria, Egypt
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Form Side (7 Columns) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-gray-50/80 dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-slate-950/80 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-slate-950/80 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Project Inquiry / Opportunity"
                  className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-slate-950/80 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell me about your project or details..."
                  className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-slate-950/80 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-violet-600 hover:bg-violet-500 text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] active:scale-[0.99] cursor-pointer"
              >
                {submitted ? (
                  <>
                    <span>Message Sent Successfully!</span>
                    <CheckCircle className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact