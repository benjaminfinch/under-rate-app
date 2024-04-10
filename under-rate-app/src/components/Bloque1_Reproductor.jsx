import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import { useParams } from 'react-router-dom';

const Bloque1_Reproductor = () => {

   const [artist, setArtist] = useState({});
   const params = useParams();

   useEffect(() => {
       fetch(`https://web-production-3722.up.railway.app/user/${params.user_id}`, {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json',
          },
       })
          .then((response) => response.json())
          .then((data) => {
          setArtist(data);
          });
    }, []);

   return (
    <div className='bgGrey'>
    <div className='container pt-30 pb-60'>
       <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-6 pt-10'>
               <Image className='shadow ' src={artist.user_photo} width={440}  rounded />
          </div>
          <div className='col-lg-6 col-md-12 col-sm-6 pt-30'>
               <h1 className='anclaDos'>{artist.username}</h1>
               <p className='anclaDos'>Under Rate es una plataforma de música en línea que permite a los usuarios descubrir, escuchar, subir y compartir música.
                   Ofrecemos una amplia variedad de funciones para usuarios tanto aficionados como profesionales de la música.</p>
          </div>
      
       </div>
    </div>
    </div>
  )
}

export default Bloque1_Reproductor