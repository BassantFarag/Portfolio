import { DownloadIcon ,Mail } from 'lucide-react';
import React from 'react'
import { FaLinkedin ,FaUpwork ,FaInstagram ,FaGithub} from 'react-icons/fa6'
import CV from '../asset/CV.pdf'
import herop from '../asset/herop.png'
import picHero from '../asset/picHero.png'

const Hero = ({theme , setTheme}) => {
    const SocialIcon = [
  { icon: FaInstagram, alt: "Instagram", link: "https://www.instagram.com/bassantt_farag?igsh=MWM2Y21rdnRhamxhaA==" },
  { icon: FaGithub, alt: "GitHub", link: "https://github.com/BassantFarag" },
  { icon: FaLinkedin, alt: "LinkedIn", link: "https://www.linkedin.com/in/bassantfarag?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { icon: FaUpwork, alt: "Upwork", link: "#" },
];
  return (

    <section id='#home' className='min-h-screen flex items-center overflow-hidden relative '>
        <div className='container sm:px-8 lg:px-14 lg:py-0 lg:mt-8 mx-auto px-4 py-24'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 '>


              {/* start right section */}
              <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left '
              data-aos='fade-right'>
                {/* social media icons */}
                <div className='flex gap-4 mb-6 sm:gap-6'>
                  {
                    SocialIcon.map((icon , index)=>(
                      <a
                       key={index}
                       href={icon.link}
                       target='_blank'
                       rel='noopener noreferrer'
                       className={`p-2 rounded-full transition-all duration-300 hover:scale-110 dark:hover:bg-violet-500/20 
                       hover:bg-violet-500/10 dark:text-gray-300 text-gray-600 dark:hover:text-violet-400 hover:text-violet-600`}>
                        <icon.icon size={24}/>
                       </a>
                    ))
                  }
                </div>


                {/* about me title */}
                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 dark:text-white text-gray-700 '>
                  Hi , i'm <span className='text-violate-500 dark:text-[#e0c0fd] text-violet-700'>Bassant</span> 
                </h2>
                <h2 className='text-xl sm:text-2xl lg:text-3xl font-mono mb-4
                dark:text-violet-400 text-violet-600 '>
                  Frontend Developer
                </h2>
                {/* Bio */}
                <p className='mb-8 leading-relaxed max-w-md lg:max-w-lg dark:text-gray-300 text-gray-700 '>
                 I build modern, responsive web websites with React.js, transforming Figma designs into interactive and user-friendly websites.          
               </p>

                  {/* cv & hire buttons */}
               <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>

                  {/* CV btn */}
                  <a href={CV} download className="w-full sm:w-auto">
                    <button  className='w-full sm:w-auto inline-flex item-center justify-center gap-2 px-8 py-3
                  rounded-full font-semibold text-white bg-linear-to-r from-violet-500  to-violet-900 hover:shadow-[0_0_40px_rgba(139,92,246,0.7)]
                  transition-all duration-300 transform hover:sale-105'>
                    <DownloadIcon size={20}/>
                    Download CV
                  </button>
                  </a>

                  {/* Hire me btn */}
                  <a href="#Contact" className='w-full sm:w-auto'>
                    <button  className='w-full sm:w-auto inline-flex item-center justify-center gap-2 px-8 py-3
                              rounded-full font-semibold border-2 dark:border-violet-500 border-violet-500 dark:text-white 
                              text-gray-800 dark:hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] hover:shadow-[0_0_40px_rgba(139,92,246,0.7)]
                              dark:hover:bg-violet-500 hover:bg-violet-500
                             transition-all duration-300 transform hover:sale-105'>
                      <Mail />
                      Hire Me
                    </button>
                  </a>
               </div>
              </div>
                {/* End right section */}



                {/* start left section */}
                <div className='lg:w-1/2 w-full max-w-md lg:max-w-lg flex justify-center relative '
                data-aos='fade-left'>
                 
                 <div className='relative'>
                  <img src={theme==='dark' ?  picHero : herop } alt="Bassant photo" className='w-full h-auto scale-105 object-cover transform 
                  hover:scale-110 transition-transform 
                  rounded-3xl
                   dark:[mask-image:radial-gradient(ellipse,black_30%,transparent_100%)]
                   dark:[-webkit-mask-image:radial-gradient(ellipse,black_30%,transparent_100%)]'/>
                 </div>

                </div>
                {/* end left section */}


            </div>
        </div>
        <div className='absolute -top-20 -left-20 w-64 h-64 rounded-full filter blur-3xl animate-pulse hidden sm:block
        dark:bg-violet-500 bg-violet-400 
        '>

        </div>
    </section>
  )
}

export default Hero