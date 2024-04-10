import React from 'react'
import Image from 'react-bootstrap/Image';
import ImagenBloqueUno from '../assets/images/imagenBloque1.png'

const Bloque_1_Nosotros = () => {
  return (
    <>
    <div className='container pt-60 pb-60'>
       <div className='row'>          
          <div className='col-lg-6 col-md-12 col-sm-6 '>
               <h1>Acerca de UnderRate</h1>
               <p>UnderRate es un reproductor de música digital diseñado específicamente para nuevos artistas emergentes en la industria musical. Este reproductor ofrece una plataforma accesible y centrada en el apoyo a talentos emergentes, brindándoles la oportunidad de dar a conocer su música a un público más amplio.</p>
               <p>Con UnderRate, los artistas pueden cargar fácilmente su música y conectar con fans potenciales sin las barreras tradicionales que a menudo enfrentan los nuevos talentos. Además de la reproducción de música, la plataforma también ofrece funciones para que los artistas gestionen y promocionen su trabajo, como herramientas de análisis de audiencia y opciones de promoción.</p>
               <p>UnderRate se destaca por su enfoque en la equidad y la democratización del acceso a la industria musical, proporcionando una plataforma inclusiva donde todos los artistas tienen la oportunidad de ser descubiertos y valorados por su talento, independientemente de su popularidad o recursos previos.</p>
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