import React, { useState, useEffect } from 'react'
import './Recitales.scss'
import { client } from '../../client'
import dayjs from 'dayjs'


const Recital = () => {
    
    const [recitales, setRecitales] = useState([])
    
   useEffect(() => {
    const query = '*[_type == "recitales"]'
    client.fetch(query)
    .then((data) => setRecitales(data))
}, [])

  return (
    <div id='recitales' className='recitales'>
      <div className='recitales__heading'>
        <div>
            <h1 className='titulo'>Gira 15 años</h1>
            <h4>proximos recitales en vivo 2022</h4>
            <p></p>
        </div>
      </div>

      <div className='recital'>
        {recitales.map((recital, index) => (
          <div className='recital__container' key={recital.ciudad + index}>

            <div className='recital__fecha'>
                <div />
                <h3>{dayjs(recital.fecharecital).format('ddd DD MMM')}</h3>
            </div>

            <div className='recital__institucion'>
                <h1>{recital.lugar}</h1> 
                <h3>{recital.direccion}</h3>
                <h3>{recital.ciudad}</h3>
            </div>

            <div className='recital__ticket'>
                <a href={recital.ticket}>ticket</a>
            </div>

          </div>
            ))}
      </div>

    </div>
  )
}

export default Recital