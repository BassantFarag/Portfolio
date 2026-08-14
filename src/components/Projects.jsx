import React from 'react'
import { useRef } from 'react'
import Flower_shop from './asset/Flower_shop.jpg'
import Agency from './asset/Agency-ai.jpg'

const Projects = ({theme , setTheme}) => {
   const scrollRef=useRef(null)

      const ProjectData = [
        {
          id : 1,
          title:"FLower-shop",
          image:Flower_shop,
          desc:"A modern and responsive flower shop website built with HTML, Tailwind CSS, and JavaScript.",
          category:"Javascript",
           tags:["Javascript" ,"tailwind Css" ,"HTML"]
        },
        {
          id : 2,
          title:"Agency-ai",
          image:"",
          desc:"Modern responsive agency website built with React & Tailwind CSS, featuring smooth animations powered by Framer Motion.",
          category:"React",
          tags:["React" ,"tailwind Css"]
        },
        {
          id : 3,
          title:"Digital solution",
          image:"",
          desc:"website for Digital Solutions company build with HTML5 & CSS3",
          category:"HTML&CSS",
          tags:["HTML" ,"Css"]
        },
        {
          id : 4,
          title:"Alex Zoo",
          image:"",
          desc:"A modern, responsive E-commerce Pet Shop front-end website called Alex Zoo",
          category:"Javascript",
          tags:["Javascript" ,"tailwind Css" ,"HTML"]
        },
        {
          id : 5,
          title:"Dental-Clinic",
          image:"",
          desc:"Responsive Dental Clinic with Tailwind CSS",
          category:"tailwind Css",
          tags:["tailwind Css" ,"HTML"]
        },
        {
          id : 6,
          title:"Watches shop",
          image:"",
          desc:"Luxury Timepieces: A sleek, modern front-end project showcasing premium watch collections",
          category:"HTML&CSS",
         tags:["HTML" ,"Css"]
        },
      ]


      const inFinitProjects=[...ProjectData ,...ProjectData,...ProjectData]

      // Handle scroll
      const handle_scroll =(direction)=>{
        if(scrollRef.current){
          const{scrollLeft , clientWidth}=scrollRef.current
          const scrollAmount = clientWidth
          const targetScroll = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount

          scrollRef.current.scrollTo({
            left:targetScroll,
            behavior:"smooth"
          })

          setTimeout(()=>{
            if(scrollRef.current){
              const MaxScroll = scrollRef.current.scrollLeft /3 ;
              if(scrollRef.current.scrollLeft >=MaxScroll*2)
              if(scrollRef.current.scrollLeft <=0){
                scrollRef.current.scrollLeft = MaxScroll
              }
            }
          },400)
        }
      }

  return (
    <section id="Projects">
     

      
    </section>
  )
}

export default Projects