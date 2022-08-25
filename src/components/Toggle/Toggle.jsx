import React from 'react'
import { WiMoonAltFull } from 'react-icons/wi'
import { WiMoonAltNew } from 'react-icons/wi'

export const Toggle = ({ theme, toggleTheme}) => {

  return (
    <div onClick={toggleTheme}>
        {theme === 'violet' ? <WiMoonAltFull/> : <WiMoonAltNew/>}
    </div>
  )
}

