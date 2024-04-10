import { Link } from "react-router-dom";
import UnderRateBlanco from "../assets/images/UnderRateBlanco.svg";
import slide2 from "../assets/images/slide2.png";
const Footer = () => {
  return (
    <footer
      className="footer-area footer-style-two bg_cover"
      style={{ backgroundImage: `url(${slide2})` }}
    >
      <div className="container">
        <div className="footer-widget pt-70 pb-35">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="widget about-widget mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="logo mb-35">
                  <a>
                    <img src={UnderRateBlanco} width={220} alt="Site Logo" />
                  </a>
                </div>
                <div className="about-content">
                  <h4 className=" text-underline">
                    Tu soundtrack favorito, en cualquier momento y lugar
                  </h4>
                  <ul>
                    <li>
                      <i className="far fa-envelope" />
                      <span>
                        <a
                          className="ancla"
                          href="mailto:contacto@underrate.cl"
                        >
                          contacto@underrate.cl
                        </a>
                      </span>
                    </li>
                    <li>
                      <i className="far fa-map-marker-alt" />
                      <span>Región Metropolitana, Chile</span>
                    </li>
                    <li>
                      <i className="far fa-phone" />
                      <span>
                        <a className="ancla" href="tel:+5698765432">
                          +56 987 654 32
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h4 className="widget-title text-underline"></h4>
                <ul className="footer-nav list-style-dot"></ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <h4 className="widget-title text-underline">
                  Sé parte de nuestra comunidad
                </h4>
                <ul className="footer-nav list-style-dot">
                  <li>
                    <a className="ancla" href="/nosotros">
                      Nosotros
                    </a>
                  </li>
                  <li>
                    <a className="ancla" href="/registro">
                      Regístrate
                    </a>
                  </li>
                  <li>
                    <a className="ancla" href="/contacto">
                      Contáctanos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="row">
            <div className="col-md-6">
              <div className="text">
                <p>
                  © {new Date().getFullYear()} UnderRate. Todos los derechos
                  reservados.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="social-link float-md-right float-sm-none">
                <li>
                  <a target="blank" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
