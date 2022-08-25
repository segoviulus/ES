import React from 'react'
import './Header.scss'
import Socials from '../../constants/Socials/Socials'
import { images } from '../../constants'



const Header = () => {
  return (
    <div id='inicio' className='app__header'>
        <div className='badge-es'>
          <div>
            <img src={images.erucasativa} alt="Eruca Sativa" />
          </div>
          
        </div>
        <div className='descripcion-es'>
          <h3 className='app__header-text' style={{ opacity: 0.25 , marginBottom: '-10px', marginLeft: '70px' }} >Power Trio</h3>
          <h3 className='app__header-text' style={{ opacity: 0.5 , marginBottom: '-12px', marginLeft: '35px' }} >Power Trio</h3>
          <h3 className='app__header-text'>Power Trio</h3>
        </div>
        <Socials/>
    </div>
  )
}  

export default Header