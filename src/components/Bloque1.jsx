import React from 'react'
import Image from 'react-bootstrap/Image';
import ImagenBloqueUno from "../assets/images/imagenBloque1.png";

const Bloque1 = () => {
  return (
    <>
    <div className='container pt-60 pb-60'>
       <div className='row'>          
          <div className='col-lg-6 col-md-12 col-sm-6 pt-40'>
               <h1>Acerca de Under Rate</h1>
               <p className='pt-20'>Under Rate es una plataforma de música en línea que permite a los usuarios descubrir, escuchar, subir y compartir música.
                  Ofrecemos una amplia variedad de funciones para usuarios tanto aficionados como profesionales de la música.</p>
               <p>"Under Rate" se diferencia al destacar artistas y canciones que no suelen recibir la atención que merecen en otras plataformas de música. Utiliza algoritmos inteligentes y recomendaciones curadas por expertos para presentar a los usuarios un catálogo diverso y emocionante de música menos conocida pero de alta calidad.</p>
               <a href="/Nosotros" className="main-btn mt-20 ">
                  Nosotros
               </a>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-6 pt-30'>
               <Image className='shadow ' src={ImagenBloqueUno} width={480}  rounded />
          </div>
      
       </div>
    </div>
    </>
  )
}

export default Bloque1