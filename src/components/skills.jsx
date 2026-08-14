import React from 'react'
import {motion} from 'framer-motion'
import {Layout , Code2 ,Terminal ,Cpu } from 'lucide-react'

const Skills = ({theme , setTheme}) => {
    const skillsItems=[
        {name:"React js" , category:"Frontend-end" , level:"90%" ,icon:Layout},
        {name:"Tailwind Css" , category:"Frontend-end" , level:"85%" ,icon:Code2},
        {name:"Framer Motion" , category:"Frontend-end" , level:"50%" ,icon:Cpu},
        {name:"Html & Css" , category:"Frontend-end" , level:"95%" ,icon:Layout},
        {name:"Node js" , category:"Backend-end" , level:"30%" ,icon:Terminal},
        {name:"Github" , category:"Tools" , level:"90%" ,icon:Code2},
    ]

    const ContainerVariants={
        hidden:{opacity:0},
        visible:{
            opacity:1,
            transition:{staggerChildren:0.8}
        }
    }

    const ItemVariants={
        hidden:{opacity:0 , y:20},
        visible:{
            opacity:1,
            transition:{duration:0.5 , ease:"easeOut"}
        }
    }
  return (
    <section id="skills" className='py-24 relative overflow-hidden bg-transparent'>
        <div className='container mx-auto px-4 sm:px-8 lg:px-14 max-w-5xl '>

            <div className='mb-16 flex flex-col items-center lg:items-start '>
                <span className='text-xs font-mono uppercase text-violet-600 dark:text-violet-400 mb-2'>Expertise</span>
                <h2 className='text-3xl sm:text-4xl font-bold dark:text-white text-gray-900 '>
                    skills <span className='text-violet-500 dark:text-[#e0c0fd]'>&</span> Technologies
                </h2>
            </div>
            <motion.div
             variants={ContainerVariants}
             initial='hidden'
             whileInView='visible'
             viewport={{once:true ,margin:"-100px"}}
             className='grid grid-cols-1 md:grid-cols-2 border-t  border-b border-gray-200/50 dark:border-zinc-800/50'>
                {
                    skillsItems.map((skill , index)=>{
                        const Icon =skill.icon 
                        return (
                            <motion.div
                            key={index}
                            variants={ItemVariants}
                            className={`p-6 sm:p-8 flex flex-col justify-between group relative transition-colors duration-300 
                            hover:bg-violet-500/5 dark:bg-violet-500/10 
                            ${index % 2 === 0 ? "md:border-r" :""}
                            ${index <skillsItems.length -2 ? "border-b" : "max-md:border-b"}
                            border-gray-200/50 dark:border-zinc-800/50`}>

                                <div className='flex items-start justify-between mb-5'>
                                    <div className='flex items-center gap-4'>
                                        <div className='rounded-xl p-2.5 bg-violet-500/10 text-violet-600 dark:text-violet-400 
                                        group-hover:scale-110 transition-transform duration-300'>
                                            <Icon size={22}/>
                                        </div>
                                        <div>
                                            <h3 className='font-bold text-lg text-gray-900 dark:text-white
                                            group-hover:text-violet-600 dark:group-hover:text-[#e0c0fd] transition-colors '>
                                                {skill.name}
                                            </h3>
                                            <span className='text-xs font-mono text-gray-500 dark:text-zinc-500 '>
                                                {skill.category}
                                            </span>
                                        </div>
                                    </div>
                                    <span className='text-sm font-mono text-violet-400 font-semibold'>
                                        {skill.level}
                                    </span>
                                </div>

                                <div className='w-full h-0.75 bg-gray-200/50 dark:bg-zinc-800/50 rounded-full 
                                overflow-hidden '>
                                    <motion.div
                                    initial={{width:0}}
                                    whileInView={{width:skill.level}}
                                    viewport={{once:false}}
                                    transition={{duration:1 , ease:'easeInOut' , delay:0.1}}
                                    className='h-full bg-violet-500 dark:bg-violet-400'>

                                    </motion.div>
                                </div>

                            </motion.div>
                        )
                    })
                }
            </motion.div>
        </div>
    </section>
  )
}

export default Skills