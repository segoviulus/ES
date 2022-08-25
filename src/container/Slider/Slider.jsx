import React, { useState, useRef, useEffect } from 'react'
import images from './images'
import './Slider.css'

import { motion } from 'framer-motion'

const Slider = () => {
  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect (() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth)
  }, [])


  return (
    <motion.div ref={slider} className='slider'>
        <motion.div className='slider__inner' drag="x" dragConstraints={{right: 0, left: -width}}>
            {images.map ((image, index) => (
                <motion.div key={index} className="slider__item">
                    <img src={image} alt="slider"/>
                </motion.div>
            ))}
        </motion.div>
        
    </motion.div>
  )
}

export default Slider