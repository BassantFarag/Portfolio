import React from 'react'
import about from '../asset/about.png'
import { ArrowRight } from 'lucide-react'
const About = ({theme , setTheme}) => {

  const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '5+', label: 'Technologies' },
  { value: '10+', label: 'Projects' },
]

  return (
    <section id="About" className='min-h-screen flex items-center px-4 py-20 sm:px-6 overflow-hidden'>
        
      <div className='max-w-6xl m-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'> 

        {/* start right part (image) */}
        <div className='relative order-2 lg:order-1 '
        data-aos='fade-right'>

          
          <div className='relative w-full max-w-sm mx-auto lg:mx-0'>

              <div className='absolute inset-0 bg-linear-to-tr from-violet-500 to-transparent
              rounded-[40%_60%_60%/40%_60%_70%] transform rotate-3 '> 
              </div>

              <img  src={about} 
              alt="bassant image"
              className='relative rounded-[40%_60%_60%/40%_60%_70%]
                         shadow-2xl w-full h-auto object-cover transform rotate-3'/>

              <div className='absolute -bottom-4 -right-4 w-20 h-20 bg-violet-500/20 rounded-full blur-2xl'></div>

            
          </div>

        </div>
          {/* end right part (image)*/}


          {/* start left part (about) */}
          <div className='order-1 lg:order-2'
          data-aos="fade-left">
              <span className='inline-block text-violet-500 dark:text-[#e0c0fd] text-sm font-semibold tracking-wider uppercase
              mb-3 '>About me</span>

              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold 
              mb-6 dark:text-white text-gray-900'>
                turning ideas into
                <span className='text-violet-500 dark:text-[#e0c0fd]'>Digital Reality</span>
              </h2>
              
              <p className='text-base lg:text-lg mb-8 leading-relaxed dark:text-gray-300 text-gray-600'>
                I'm a Front-End Developer passionate about building responsive and user-friendly websites with React.
                 I turn Figma designs and ideas into modern, interactive websites with clean code and attention to detail
              </p>
              <div className='mb-8 grid grid-cols-3 gap-4'>
                {
                  stats.map((stat , index)=>(
                    <div key={index}
                    className='p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 dark:bg-white/5
                    bg-gray-50 hover:dark:bg-white/10 hover:bg-gray-100'
                    data-aos="zoom-in-up"
                    data-aos-delay={index*100}>
                        <div className='text-2xl font-bold text-violet-500 dark:text-[#e0c0fd]'>
                          {stat.value}
                        </div>
                        <div className='text-sm dark:text-gray-400  text-gray-500 '>
                          {stat.label}
                        </div>
                    </div>
                    
                ))
                }
                
              </div>
              <button className='group inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold 
                transition-all duration-300 hover:scale-105 dark:bg-violet-500 bg-violet-500 text-white hover:dark:shadow-[0_0_40px_rgba(139,92,246,0.5)] 
                hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] '
                data-aos="fade-up"
                data-aos-delay="300">
                let's Talk
                <ArrowRight className='w-5 h-5 transition-transform  group-hover:translate-x-1 ' />
                </button>

          </div>

          
          {/* end left part (about) */}


       

      </div>   
    </section>
  )
}

export default About