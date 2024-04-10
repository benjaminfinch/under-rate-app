import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 3500,
    slidesToScroll: 1,

  };
  return (
    <section className="hero-area">
      <Slider {...settings} className="hero-wrapper-two hero-slider-two">
      <div
            className="single-slider banner-slide-3 bg_cover"
            style={{
              backgroundImage: "url(assets/images/slide1.png)",
            }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-8">
                  <div className="hero-content text-left">
                    <span
                      className="sub-title text-underline"
                      data-animation="fadeInDown"
                      data-delay=".3s"
                    >
                        Únete la comunidad más grande de música emergente
                    </span>
                    <h1 data-animation="fadeInDown" data-delay=".5s">
                      ¡Sube tus canciones!
                    </h1>
                    <ul
                      className="button"
                      data-animation="fadeInDown"
                      data-delay=".7s"
                    >
                      <li>
                         <a target="blank" href="/registro" className="main-btn">
                         Regístrate
                         </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
      </div>

      <div
            className="single-slider banner-slide-1 bg_cover"
            style={{
              backgroundImage: "url(assets/images/slide3.png)",
            }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-8">
                  <div className="hero-content text-left">
                    <span
                      className="sub-title text-underline"
                      data-animation="fadeInDown"
                      data-delay=".3s"
                    >
                        Sumérgete en la librería musical más grande de Latinoamérica
                    </span>
                    <h1 data-animation="fadeInDown" data-delay=".5s">
                        Conoce a tu audiencia
                    </h1>
                    <ul
                      className="button"
                      data-animation="fadeInDown"
                      data-delay=".7s"
                    >
                      <li>
                        <a target="blank" href="/registro" className="main-btn">
                          Regístrate
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
      </div>

      </Slider>
    </section>
  );
}