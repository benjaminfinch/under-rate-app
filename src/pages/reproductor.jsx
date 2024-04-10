import React from 'react'
import MenuHeader from '../components/Menu'
import Controles from '../components/ControlPlayer'
import Bloque1_Reproductor from '../components/Bloque1_Reproductor'
import SliderUsuarios from '../components/SliderUsuarios'
import { TablaCanciones } from '../components/TablaCanciones'

const reproductor = () => {
  return (
    <>
       <MenuHeader /> 
       <Bloque1_Reproductor />
       <TablaCanciones/>
       <SliderUsuarios />
       {/* <Controles /> */}
    </>
  )
}

export default reproductor