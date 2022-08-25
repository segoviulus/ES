import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {ImYoutube} from 'react-icons/im'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaSpotify} from 'react-icons/fa'
import {FaItunesNote} from 'react-icons/fa'
import {SiYoutubemusic} from 'react-icons/si'

import './Socials.css'

const Socials = () => {
  return (
    <div className='socialIcons'>
        <a href="https://www.facebook.com/erucasativa/"><FaFacebookF/></a>
        <a href="https://www.youtube.com/erucavids"><ImYoutube/></a>
        <a href="https://www.instagram.com/eruca_sativa/"><FaInstagram/></a>
        <a href="https://twitter.com/ErucaSativa"><FaTwitter/></a>
        <a href="https://open.spotify.com/artist/2RPNbhguRnI9uqahGYcUc6"><FaSpotify/></a>
        <a href="https://itunes.apple.com/gt/artist/eruca-sativa/514659301"><FaItunesNote/></a>
        <a href="https://music.youtube.com/watch?v=oEiB-h-jZP0"><SiYoutubemusic/></a>
    </div>
  )
}

export default Socials