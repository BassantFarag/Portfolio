import React from 'react'
import { FaLinkedin ,FaUpwork ,FaInstagram ,FaGithub} from 'react-icons/fa6'
const Hero = ({theme , setTheme}) => {
    const SocialIcon = [
  { icon: FaInstagram, alt: "Instagram", link: "https://www.instagram.com/bassantt_farag?igsh=MWM2Y21rdnRhamxhaA==" },
  { icon: FaGithub, alt: "GitHub", link: "https://github.com/BassantFarag" },
  { icon: FaLinkedin, alt: "LinkedIn", link: "https://www.linkedin.com/in/bassantfarag?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { icon: FaUpwork, alt: "Upwork", link: "#" },
];
  return (

    <section id='#home' className='min-h-screen flex items-center overflow-hidden relative '>
        <div className='container sm:px-8 lg:px-14 lg:py-0 lg:mt-8 mx-auto px-4'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 '>

            </div>
        </div>
    </section>
  )
}

export default Hero