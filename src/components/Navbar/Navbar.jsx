import React, {useState}from 'react'
import { HiMenuAlt1, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import './Navbar.scss'
import { images } from '../../constants'

const variants = {
  open: { opacity: 1, x: 0},
  closed: { opacity: 0, x: '-100%'}
}


const Navbar = () => {

  const [toggle, setToggle] = useState(false)


  return (
  
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="Logo ES" />
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
              variants={variants}
              whileInView={{ x: [250,0]}}
              transition={{ duration: 0.25, ease: 'easeOut'}}
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
  )
}

export default Navbar
