import React from "react";
import Slider from "react-slick";
import Image from "react-bootstrap/Image";

const testimonialSliderOne = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const SliderUsuarios = () => {
  return (
    <div className="pb-30 pt-30 bloque2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Slider
              {...testimonialSliderOne}
              className="testimonial-slider-one mb-90"
            >
              <div className="testimonial-item wow fadeInUp pr-20">
                <div className="wt-content">
                  <p>
                    Un sitio increíble para descubrir música underground. Ya
                    tengo mis nuevos artistas favoritos.
                  </p>
                  <div className="author-title-thumb">
                    <div className="author-thumb">
                      <Image
                        width={50}
                        height={50}
                        src="\src\assets\images\avatar1.png"
                        alt="user image"
                      />
                    </div>
                    <div className="author-title pt-10">
                      <h3>Peter</h3>
                      <p className="position">@usuario1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-item wow fadeInUp pr-20">
                <div className="wt-content">
                  <p>
                    Es genial poder interactuar de una forma más cercana con los
                    artistas. Llevo poco tiempo utilizando el sitio pero hasta
                    ahora he tenido una buena experiencia.
                  </p>
                  <div className="author-title-thumb">
                    <div className="author-thumb">
                      <Image
                        width={50}
                        height={50}
                        src="\src\assets\images\avatar2.png"
                        alt="user image"
                      />
                    </div>
                    <div className="author-title pt-10">
                      <h3>Johana</h3>
                      <p className="position">@usuario2</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-item wow fadeInUp pr-20">
                <div className="wt-content">
                  <p>
                    Buen servicio al cliente.
                  </p>
                  <div className="author-title-thumb pt-10">
                    <div className="author-thumb">
                      <Image
                        width={50}
                        height={50}
                        src="\src\assets\images\avatar3.png"
                        alt="user image"
                      />
                    </div>
                    <div className="author-title pt-10">
                      <h3>Usuario3</h3>
                      <p className="position">Usuario3</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderUsuarios;
