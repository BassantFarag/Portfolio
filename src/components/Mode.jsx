import React, { useEffect } from 'react';
import { Sun , Moon } from 'lucide-react';
import {motion} from 'framer-motion'
const Mode = ({ theme, setTheme }) => {

    // Set initial theme based on user preference or default to light
    useEffect(() => {
        const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(theme ||(preferredTheme ? 'dark' : 'light'));
    }, [])

    // Update document class based on theme
    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme',theme);
    }, [theme])

  return (
    <>
        {/* Toggle between sun and moon icons based on theme */}
        <motion.button 
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        className='cursor-pointer p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'>
           {
            theme === 'dark' ? (
                <Sun onClick={()=>setTheme('light')}  className='w-5 h-5 text-yellow-400 '  />
            ) :(
                <Moon onClick={()=>setTheme('dark')} className='w-5 h-5 text-gray-700 '  />
            )
           }
        </motion.button>
    </>
  )
}

export default Mode;