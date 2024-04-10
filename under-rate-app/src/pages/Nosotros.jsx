import React from 'react'
import MenuHeader from "../components/Menu";
import Footer from "../components/Footer"
import Bloque_1_Nosotros from "../components/Bloque_1_nosotros"
import Intro_Artista from "../components/Intro_Artista"

const nosotros = () => {
  return (
   <>
    <MenuHeader />
    <Intro_Artista />
    <Bloque_1_Nosotros />
    <Footer />
   </>

  )
}

export default nosotros