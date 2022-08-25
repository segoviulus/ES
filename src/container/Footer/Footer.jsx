import React from 'react'
import './Footer.scss'
import { images } from '../../constants'

const Footer = () => {
  return (
    <div className="footer app__flex">
      <h3>Hecho con amor para Eruca sativa</h3>
      <img src={images.alarse} alt="alarse favicon" />
    </div>
    
  )
}

export default Footer