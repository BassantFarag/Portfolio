import React, { useRef } from 'react'
import Flower_shop from '../asset/Flower_shop.jpg'
import Agency from '../asset/Agency.jpg'
import Digital from '../asset/Digital.png'
import AlexZoo from '../asset/AlexZoo.jpg'
import admindashboard from '../asset/admindashboard.png'
const Projects = ({ theme, setTheme }) => {

  const scrollRef = useRef(null)

  const ProjectData = [
    {
      id: 1,
      title: "Flower-shop",
      image: Flower_shop,
      desc: "A modern and responsive flower shop website built with HTML, Tailwind CSS, and JavaScript.",
      category: "Javascript",
      tags: ["Javascript", "tailwind Css", "HTML"]
    },
    {
      id: 2,
      title: "Agency-ai",
      image: Agency,
      desc: "Modern responsive agency website built with React & Tailwind CSS, featuring smooth animations powered by Framer Motion.",
      category: "React",
      tags: ["React", "tailwind Css"]
    },
    {
      id: 3,
      title: "Digital solution",
      image: Digital,
      desc: "Website for Digital Solutions company built with HTML5 & CSS3",
      category: "HTML&CSS",
      tags: ["HTML", "Css"]
    },
    {
      id: 4,
      title: "Alex Zoo",
      image: AlexZoo,
      desc: "A modern, responsive E-commerce Pet Shop front-end website called Alex Zoo",
      category: "Javascript",
      tags: ["Javascript", "tailwind Css", "HTML"]
    },
    {
      id: 5,
      title: "Dental-Clinic",
      image: "",
      desc: "Responsive Dental Clinic with Tailwind CSS",
      category: "tailwind Css",
      tags: ["tailwind Css", "HTML"]
    },
    
    {
      id: 6,
      title: "Watches shop",
      image: "",
      desc: "Luxury Timepieces: A sleek, modern front-end project showcasing premium watch collections",
      category: "HTML&CSS",
      tags: ["HTML", "Css"]
    },
    {
      id: 7,
      title: "Admin-dashboard",
      image: admindashboard,
      desc: "Responsive Admin Dashboard with React and Tailwind CSS, featuring dynamic charts and user management.",
      category: "React",
      tags: ["React", "tailwind Css"]
    },
  ]

  const inFinitProjects = [
    ...ProjectData,
    ...ProjectData,
    ...ProjectData
  ]

  // Handle scroll
  const handle_scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount = clientWidth

      const targetScroll =
        direction === 'left'
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount

      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      })

      setTimeout(() => {
        if (scrollRef.current) {
          const maxScroll = scrollRef.current.scrollWidth / 3

          if (scrollRef.current.scrollLeft <= 0) {
            scrollRef.current.scrollLeft = maxScroll
          }

          if (scrollRef.current.scrollLeft >= maxScroll * 2) {
            scrollRef.current.scrollLeft = maxScroll
          }
        }
      }, 400)
    }
  }

  return (
    <section id="Projects" className="py-20 px-4 sm:px-6 overflow-hidden">

      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="inline-block text-violet-500 dark:text-[#e0c0fd] text-sm font-semibold tracking-wider uppercase mb-2">
          My Work
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900">
          My <span className="text-violet-500 dark:text-[#e0c0fd]">Projects</span>
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-base">
          Here are some of the projects I have worked on using different technologies.
        </p>
      </div>

      {/* Projects Container */}
      <div className="relative max-w-6xl mx-auto">

        {/* Left Button */}
        <button
          onClick={() => handle_scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 rounded-full bg-violet-500 text-white
          flex items-center justify-center shadow-lg
          hover:bg-violet-600 transition hover:scale-105"
        >
          ←
        </button>

        {/* Projects Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden px-12 scroll-smooth py-4"
        >
          {inFinitProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="min-w-[300px] md:min-w-[350px] rounded-2xl overflow-hidden 
              border border-gray-100 dark:border-white/10
              bg-gray-50 dark:bg-white/5 
              hover:bg-gray-100 dark:hover:bg-white/10 
              transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="h-52 bg-gray-200 dark:bg-white/10 overflow-hidden relative">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-500 hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500 text-sm">
                      Project Image
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold dark:text-white text-gray-900">
                    {project.title}
                  </h3>

                  <span className="text-xs px-3 py-1 rounded-full 
                    bg-violet-500/10 text-violet-500 dark:text-[#e0c0fd] font-medium">
                    {project.category}
                  </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed line-clamp-2">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full 
                      bg-gray-200/60 dark:bg-white/10 text-gray-600 dark:text-gray-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => handle_scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 rounded-full bg-violet-500 text-white
          flex items-center justify-center shadow-lg
          hover:bg-violet-600 transition hover:scale-105"
        >
          →
        </button>

      </div>

    </section>
  )
}

export default Projects