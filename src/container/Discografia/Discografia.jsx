import React, {useState, useEffect }from 'react'
import { motion } from 'framer-motion'
import './Discografia.scss'
import { urlFor, client } from '../../client'

const Discografia = () => {

  const [albums, setAlbums] = useState([])
    
    useEffect(() => {
    const query = '*[_type == "discografia"]';
    client.fetch(query)
    .then((data) => setAlbums(data))
}, [])

  // Ordena los albums de mas nuevo a mas viejo
  albums.sort(function(a, b)
    {return b.ano - a.ano}
  )

  return (
    <div id='discografia'>
     <h2 className='titulo'>Discografia</h2>
      
     <div className='app__albums'>
      {albums.map((album, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
          className='app__album'
          key={album.titulo + index}
          >
            <a href={album.spotify}>
            <img src={urlFor(album.tapaalbum)} alt="Tapa de album" />
            <h2 className='album-text' style={{marginTop: 20}}>{album.titulo}</h2>
            <p className='album-text' style={{marginTop: 5, marginBottom: 10}}>{album.ano}</p>
            </a>
          </motion.div>
      ))}
     </div>
    </div>
  )
}

export default Discografia