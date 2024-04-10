import React from 'react'
import { Form, redirect } from "react-router-dom";
import MenuHeader from "../components/Menu";
import FormularioDatos from '../components/FormularioDatos';
import Footer from '../components/Footer';



const DatosUsuario = () => {
  return (
    <>
      <MenuHeader />
      <FormularioDatos />
      <Footer />
    </>
  )
}

export default DatosUsuario