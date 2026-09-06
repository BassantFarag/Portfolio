import React from 'react'
import { Mail, Heart, ArrowUp, Code, Share2 } from 'lucide-react'

const Footer = ({ theme }) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const navLinks = [
    { name: 'Home', href: '#Home' },
    { name: 'About', href: '#About' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Contact', href: '#Contact' },
  ]

  const socialLinks = [
    { 
      icon: <Code className="w-5 h-5" />, 
      href: 'https://github.com/BassantFarag', 
      label: 'GitHub' 
    },
    { 
      icon: <Share2 className="w-5 h-5" />, 
      href: 'https://linkedin.com/in/bassantfarag', 
      label: 'LinkedIn' 
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: 'mailto:bassanttfarag28@gmail.com', 
      label: 'Email' 
    },
  ]

  return (
    <footer className="relative border-t border-gray-200 dark:border-white/10 pt-16 pb-8 px-4 sm:px-6 transition-colors duration-300 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-gray-200 dark:border-white/10">
          
          {/* Column 1: Personal Brand */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold dark:text-white text-gray-900 tracking-tight">
              Bassant <span className="text-violet-500 dark:text-[#e0c0fd]">Farag</span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed mx-auto md:mx-0">
              Front-End Web Developer passionate about crafting clean, modern, and interactive user experiences with React & Tailwind CSS.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="text-center">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-violet-500 dark:text-[#e0c0fd] mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-violet-500 dark:hover:text-[#e0c0fd] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Links & Scroll Top */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-violet-500 dark:text-[#e0c0fd]">
              Follow Me
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-violet-500 hover:text-white dark:hover:bg-violet-500 dark:hover:text-white text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <span>Designed & Built with</span>
            <Heart className="w-3.5 h-3.5 text-violet-500 fill-violet-500 inline" />
            <span>by Bassant Farag</span>
          </div>

          <p>© {new Date().getFullYear()} All rights reserved.</p>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-violet-500 dark:text-[#e0c0fd] hover:underline font-medium cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer