import React from 'react'
import Image from 'react-bootstrap/Image';
import ImageCD5 from '../assets/images/cd5.webp'
import ImageCD6 from '../assets/images/cd6.webp'
import ImageCD7 from '../assets/images/cd7.webp'
import ImageCD8 from '../assets/images/cd8.webp'
import ImageMusic18 from '../assets/images/music-18.svg'


const artistas = () => {
  return (
    <section className="fancy-features">
    <div className="continer-fluid p-0">
      <div className="features-style-two pt-70 pb-30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-title text-center mb-45 wow fadeInUp">
              <div >
                <img src={ImageMusic18} width={60} alt="Music Logo" />
              </div>
                <h2 className="anclaDos text-uppercase mt-20">
                  Somos una comunidad que promueve a los nuevos artistas
                </h2>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center mb-40 wow fadeInUp">
                <div className="">              
                   <Image className='shadow' src={ImageCD5} width={260}  rounded />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center mb-40 wow fadeInUp">
                <div className="">
                  <Image className='shadow' src={ImageCD6} width={260}  rounded />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center mb-40 wow fadeInUp">
                <div className="">
                 {/*  <h3 className="title text-underline">
                    Urbano
                  </h3> */}
                  <Image className='shadow' src={ImageCD7} width={260}  rounded />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center mb-40 wow fadeInUp">
                <div className="">
                  <Image className='shadow' src={ImageCD8} width={260}  rounded />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default artistas