import React from 'react'
import Image from 'react-bootstrap/Image';
import ImagenCD1 from '../assets/images/cd1.webp';


const artistas = () => {
  return (
    <section className="fancy-features">
    <div className="continer-fluid p-0">
      <div className="features-style-one pt-70 pb-30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-title text-center mb-45 wow fadeInUp">
              <div >
                <img src="src/assets/images/iso.svg" width={60} alt="Site Logo" />
              </div>
                <h4 className="text-uppercase mt-20">
                  Construyendo una comunidad de nuevos artistas
                </h4>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center mb-40 wow fadeInUp">
                <div className="">              
                   <Image className='shadow' src={ImagenCD1} width={260}  rounded />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center mb-40 wow fadeInUp">
                <div className="">
                  <Image className='shadow' src="src/assets/images/cd2.webp" width={260}  rounded />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center mb-40 wow fadeInUp">
                <div className="">
                 {/*  <h3 className="title text-underline">
                    Urbano
                  </h3> */}
                  <Image className='shadow' src="src/assets/images/cd3.webp" width={260}  rounded />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center mb-40 wow fadeInUp">
                <div className="">
                  <Image className='shadow' src="src/assets/images/cd5.webp" width={260}  rounded />
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