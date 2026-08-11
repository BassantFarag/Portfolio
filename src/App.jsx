import React, { useEffect , useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About';




const App = () => {

  const [theme, setTheme]=useState(localStorage.getItem('theme') || 'light');
  

  useEffect(()=>{
     AOS.init({
      duration:1000,
      once:false,
      offset:100
    });
  },[])

  useEffect(()=>{
    AOS.refresh()
  },[theme])

  return (
    <div className={theme === 'dark' ? 'bg-linear-to-br from-gray-900 via-[#230d2e] to-purple-900 min-h-screen' 
        :'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen' }>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} setTheme={setTheme} />
      <About  theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App