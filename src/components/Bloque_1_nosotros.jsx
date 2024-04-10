import React from 'react'
import Image from 'react-bootstrap/Image';
import ImagenBloqueUno from '../assets/images/imagenBloque1.png'

const Bloque_1_Nosotros = () => {
  return (
    <>
    <div className='container pt-60 pb-60'>
       <div className='row'>          
          <div className='col-lg-6 col-md-12 col-sm-6 '>
               <h1>Acerca de Under Rate</h1>
            <li></li>
            <li></li>
            <h2>Misión</h2>
            <p>Desarrollar y fortalecer una relación más cercana entre los artistas emergentes con su audiencia y ayudarlos a alcanzar su máximo potencial creativo.</p>
            <h2>Visión</h2>
            <p>Queremos ser el punto de partida para los músicos que buscan construir su audiencia y hacerse un nombre en la escena musical.</p>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-6 pt-30'>
               <Image className='shadow ' src={ImagenBloqueUno} width={480}  rounded />
          </div>
       </div>
    </div>
    </>
  )
}

export default Bloque_1_Nosotros
