import React from 'react'
import Image from 'react-bootstrap/Image';
import ImagenBloqueDos from "../assets/images/imagenBloque2.png";

const Bloque2 = () => {
  return (
    <div className='bloque2'>
    <div className='container pt-60 pb-60'>
       <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-6'>
               <Image className='shadow' src={ImagenBloqueDos} width={480}  rounded />
          </div>
          <div className='col-lg-6 col-md-12 col-sm-6 pt-30'>
               <h1>Visión de proyecto</h1>
               <p>Nuestra visión es democratizar el acceso a la industria musical, brindando a los artistas emergentes una plataforma sin trabas ni barreras burocráticas para compartir su música.</p>
          </div>
       </div>
    </div>
    </div>
  )
}

export default Bloque2