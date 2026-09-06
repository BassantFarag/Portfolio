import React from 'react'
import {
  Smartphone,
  Palette,
  Zap,
  TrendingUp,
  Code2
} from 'lucide-react'

const WhyWorkWithMe = () => {

  const solutions = [
    {
      icon: Smartphone,
      title: "Responsive Websites",
      desc: "Websites that look and work great on mobile, tablet, and desktop."
    },
    {
      icon: Palette,
      title: "Figma to React",
      desc: "I turn your designs and ideas into clean, interactive websites."
    },
    {
      icon: Zap,
      title: "Modern & Fast",
      desc: "Clean interfaces with smooth interactions and attention to performance."
    },
    {
      icon: TrendingUp,
      title: "Business-Focused",
      desc: "I build websites with your business goals and your customers in mind."
    },
    {
      icon: Code2,
      title: "Clean & Maintainable Code",
      desc: "Reusable React components that make your website easier to maintain and grow."
    }
  ]

  return (
    <section
      id="WhyWorkWithMe"
      className="min-h-screen flex items-center px-4 py-20 sm:px-6 overflow-hidden"
    >

      <div className="max-w-6xl mx-auto w-full">

        {/* Section Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-14"
          data-aos="fade-up"
        >

          <span className="inline-block text-violet-500 dark:text-[#e0c0fd] text-sm font-semibold tracking-wider uppercase mb-3">
            Why Work With Me
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900 mb-5">
            More Than Just
            <span className="text-violet-500 dark:text-[#e0c0fd]">
              {" "}A Website
            </span>
          </h2>

          <p className="text-base lg:text-lg leading-relaxed dark:text-gray-300 text-gray-600">
            I don't just build websites. I focus on solving real problems
            and creating digital experiences that help businesses connect
            with their customers.
          </p>

        </div>


        {/* Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {solutions.map((item, index) => {

            const Icon = item.icon

            return (
              <div
                key={index}
                className="group p-6 rounded-2xl
                dark:bg-white/5 bg-gray-50
                border border-transparent
                hover:border-violet-500/30
                hover:bg-gray-100 dark:hover:bg-white/10
                transition-all duration-300
                hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl
                  bg-violet-500/10
                  flex items-center justify-center
                  mb-5
                  group-hover:bg-violet-500
                  transition-all duration-300"
                >
                  <Icon
                    className="w-6 h-6 text-violet-500
                    group-hover:text-white
                    transition-colors duration-300"
                  />
                </div>


                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 dark:text-white text-gray-900">
                  {item.title}
                </h3>


                {/* Description */}
                <p className="text-sm leading-relaxed dark:text-gray-400 text-gray-600">
                  {item.desc}
                </p>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default WhyWorkWithMe