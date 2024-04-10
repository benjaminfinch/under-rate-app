import React from "react";
import Slider from "react-slick";
import Image from "react-bootstrap/Image";
import avatar1 from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar2.png";
import avatar3 from "../assets/images/avatar3.png";

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
                    Un buen sitio para descubrir música. Ya tengo mis nuevos artistas favoritos.
                  </p>
                  <div className="author-title-thumb">
                    <div className="author-thumb">
                      <Image
                        width={50}
                        height={50}
                        src={avatar1}
                        alt="user image"
                      />
                    </div>
                    <div className="author-title pt-10">
                      <h3>Diego</h3>
                      <p className="position">@Usuario1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-item wow fadeInUp pr-20">
                <div className="wt-content">
                  <p>
                    Es genial poder interactuar de una forma más cercana con los artistas.
                  </p>
                  <div className="author-title-thumb">
                    <div className="author-thumb">
                      <Image
                        width={50}
                        height={50}
                        src={avatar2}
                        alt="user image"
                      />
                    </div>
                    <div className="author-title pt-10">
                      <h3>Benjamín</h3>
                      <p className="position">@Usuario2</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-item wow fadeInUp pr-20">
                <div className="wt-content">
                  <p>
                    Buena iniciativa. Recomiendo.
                  </p>
                  <div className="author-title-thumb pt-10">
                    <div className="author-thumb">
                      <Image
                        width={50}
                        height={50}
                        src={avatar3}
                        alt="user image"
                      />
                    </div>
                    <div className="author-title pt-10">
                      <h3>Ricardo</h3>
                      <p className="position">@Usuario3</p>
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
