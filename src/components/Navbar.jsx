import React, { useState } from 'react'
import Mode from './Mode'
import {motion ,AnimatePresence} from 'framer-motion'
import { Menu, Phone ,X } from 'lucide-react'


const Navbar = ({ theme, setTheme }) => {
  const[isOpen,setIsOpen]=useState(false);

  const navItem=[
    {name:"Home" , link:"#Home"},
    {name:"About" , link:"#About"},
    {name:"Skills" ,link:"#Skills"},
    {name:"Projects" ,link:"#Projects"},
    {name:"Contact" ,link:"#Contact"},
  ]

  
  return (
    <div className='fixed z-50 w-full mt-4 flex justify-center'>
      
      <motion.nav 
      initial={{y:-100}}
      animate={{y:0}}
      transition={{duration:0.5}}
      className='relative bg-linear-to-br from-violet-400 to-white dark:bg-linear-to-br dark:from-purple-950
      dark:to-black backdrop-blur-xl rounded-2xl shadow-2xl px-6 py-3 w-[90%] max-w-4xl border border-white/20
      dark:border-gray-700/50'
      >

        <div className='flex justify-between items-center'>
          {/* Logo */}
          <motion.a href='/' whileHover={{scale:1.05}}
          className='text-2xl font-bold bg-linear-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent'>
            Portfolio<span className='text-gray-800 dark:text-white'>.</span>
          </motion.a>

          {/* links */}
          <div className='hidden md:flex items-center gap-6'>
            {
              navItem.map((items)=>(
                <a href={items.link}
                className='text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 
                transition-colors font-medium'>
                  {items.name}
                </a>
              ))
            }
          </div>

          {/* call */}
          <div className='flex items-center gap-2'>
            <motion.a
            href="#Contact"
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            className='p-2 rounded-full bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 
            dark:hover:bg-purple-800/30 
            transition-colors'
           >
              <Phone className='w-5 h-5 text-purple-600 dark:text-purple-400 '/>
            </motion.a>

            {/* mode button */}
           <Mode theme={theme} setTheme={setTheme} />


           {/* menu icon */}
           <motion.button
           whileTap={{scale:0.9}}
           onClick={()=>{setIsOpen(!isOpen)}}
           className='md:hidden p-2 rounded-lg bg-gray dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors'>
              {isOpen ?(
                <X  className='w-5 h-5 text-gray-700 dark:text-white '/>
              ) :( 
                <Menu className='w-5 h-5 text-gray-700 dark:text-white '/>
              )}
           </motion.button>
          </div>
        </div>

        {/* mobile menu */}
        <AnimatePresence>
              {isOpen &&(<motion.div
              initial={{opacity:0 , height:0 , y:-20}}
              animate={{opacity:1 , height:'auto' ,y:0}}
              exit={{opacity:0 , height:0 ,y:-20}}
              transition={{duration:0.3 , ease:'easeInOut'}}
              className='md:hidden overflow-hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700'>
                
                <div className='flex flex-col gap-3'>
                  {
                    navItem.map((item ,index)=>(
                      <motion.a href={item.link} key={item.name} 
                      onClick={()=>setIsOpen(false)}
                      initial={{opacity:0 , x:-20}}
                      animate={{opacity:1 , x:0}}
                      transition={{delay:index*0.05 }}
                      className='text-center py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-purple-50 
                      dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all 
                      font-medium '  
                      >
                        {item.name}
                      </motion.a>
                    ))
                  }
                  <motion.a href="#Contact"
                  onClick={()=>setIsOpen(false)}
                  initial={{opacity:0 , x:-20}}
                  animate={{opacity:1 , x:0}}
                  transition={{delay:0.25}}
                  className='text-center rounded-xl py-3 font-semibold bg-linear-to-r from-purple-600 to-violet-600
                  text-white shadow-lg hover:shadow-purple-500/25 transition-shadow '>
                    Hire Me
                  </motion.a>
                </div>

              </motion.div>)}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}

export default Navbar