import React from 'react'
import './Topbar.scss'
import {ImYoutube} from 'react-icons/im'
import {FaSpotify} from 'react-icons/fa'

const Topbar = () => {
  return (
    <div className='topbar app__flex'>
        <h4>Escucha Dia Mil</h4>
        <a href="https://www.youtube.com/watch?v=Kbbhb1iHwVo"><ImYoutube/></a>
        <a href="https://open.spotify.com/album/5f61HbLZV9pWoCWYqo9nu1"><FaSpotify/></a>
    </div>
  )
}

export default Topbar