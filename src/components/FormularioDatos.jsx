import React from 'react'
import { Form, redirect } from "react-router-dom";
import UnderRateBlanco from '../assets/images/UnderRateBlanco.svg'

const FormularioDatos = () => {
    return (
        <>
             <div className="auth-form-container AppLog bg_cover footer-style-two"
            style={{ backgroundImage: "url(src/assets/images/slide2.png)" }}
            >
          <div className='border radio pt-60 pb-40 pl-30 pr-30'>
          <a className="brand-logo mb-30" href="#">
                <img
                  src={UnderRateBlanco}
                  width={180}
                  alt="Site Logo"
                />
              </a>
          <h5 className='pt-20 pb-30'>Datos de Usuario</h5>
              <Form method="post" className="register-form">
                  <label htmlFor="username">
                      Username
                  </label>
                  <h4 className='alignIzq'>Username</h4>
                  <label htmlFor="email">
                      Correo electrónico
                  </label>
                  <h4 className='alignIzq'>Correo Electrónico</h4>
                  <label htmlFor="password">
                      Contraseña
                  </label>
                  <h4 className='alignIzq'>Contraseña</h4>
                  <label htmlFor="user_photo">
                      Foto de Usuario
                  </label>
                  <h4 className='alignIzq'>Foto de Usuario</h4>
              </Form>
          </div>
             </div>
        </>
    )
}

export default FormularioDatos