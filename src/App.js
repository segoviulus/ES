import React, { useState } from 'react'
import useLocalStorage from "use-local-storage";

import { Header, Discografia, Recital, Footer, Topbar, Slider } from './container'

import './App.scss'
import { HiMenuAlt1, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import '../src/components/Navbar/Navbar.scss'
import { images } from './constants'
import { WiMoonAltThirdQuarter } from 'react-icons/wi'


const App = () => {

  const [theme, setTheme] = useLocalStorage('theme', '');

  const switchTheme = () => {
    if (theme === 'light') {
      setTheme('green')
    } else if (theme === 'green') {
      setTheme('pink')
    } else if (theme === 'pink') {
      setTheme('orange')
    } else if (theme === 'orange') {
      setTheme('violet')
    } else if (theme === 'violet') {
      setTheme('light')
    } else {
      setTheme('light')
    }
  }

  const [toggle, setToggle] = useState(false)
  
  return (
    <div className='app' data-theme={theme}>
        <Topbar/>
        <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="Logo ES" />
        <button className='switch' onClick={switchTheme}><WiMoonAltThirdQuarter/></button>
      </div>
      <ul className='app__navbar-links'>
        {['inicio', 'recitales', 'discografia'].map ((item) => (
          <li key={`link-${item}`}>
            <div />
            <a  className='app__flex p-text' href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
          <HiMenuAlt1 onClick={()=> setToggle(true)}/>

          {toggle && (
            <motion.div
              whileInView={{ x: [250,0]}}
              transition={{ duration: 0.85, ease: 'easeOut'}}
            >
              <HiX onClick={() => setToggle(false)}/>
              <ul>
              {['inicio', 'recitales', 'discografia'].map ((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
              </li>
                  ))}
              </ul>
            </motion.div>
          )}
      </div>
    </nav>
        <Header/>
        <Slider/>
        <Recital/>
        <Discografia/>
        <Footer/>
    </div>

    
  )
}

export default App