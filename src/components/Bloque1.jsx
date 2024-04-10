import React from 'react'
import Image from 'react-bootstrap/Image';

const Bloque1 = () => {
  return (
    <>
    <div className='container pt-60 pb-60'>
       <div className='row'>          
          <div className='col-lg-6 col-md-12 col-sm-6 '>
               <h1>Acerca de Under Rate</h1>
               <p>Under Rate es una plataforma de música en línea que permite a los usuarios descubrir, escuchar, subir y compartir música.
                   Ofrecemos una amplia variedad de funciones para usuarios tanto aficionados como profesionales de la música.</p>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-6 pt-30'>
               <Image className='shadow ' src="src/assets/images/imagenBloque1.png" width={480}  rounded />
          </div>
      
       </div>
    </div>
    </>
  )
}

export default Bloque1