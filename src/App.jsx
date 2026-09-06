import React, { useEffect , useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'
import Skills from './components/skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Services from './components/Services'
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhyWorkWithMe from './components/WhyWorkWithMe';




const App = () => {

  const [theme, setTheme] = useState('dark');
  

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
      <About theme={theme} setTheme={setTheme}/>
      <Skills theme={theme} setTheme={setTheme} />
      <Projects theme={theme} setTheme={setTheme} />
      <Services theme={theme} setTheme={setTheme} />
      <WhyWorkWithMe theme={theme} setTheme={setTheme} />
      <Contact theme={theme} setTheme={setTheme} />
      <Footer theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App