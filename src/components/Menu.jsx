import { Link, useNavigate } from "react-router-dom";
import UnderRate from "../assets/images/UnderRate.svg";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

  const notify = () =>
    toast.info("Hasta pronto 😎✌🏼", {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

function MenuHeader() {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const logout = () => {
    localStorage.removeItem("email");
    navigate("/");
    notify();
  };

  const showPublicMenu = () => {
    if (!email) {
      return (
        <>
          <button className="btn btn-info mr-20 main-btn" type="button">
            <Link className="ancla" to="/ingreso">
              Ingresa
            </Link>
          </button>
          <button className="btn btn-info main-btn" type="button">
            <Link className="ancla" to="/registro">
              Regístrate
            </Link>
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            className="btn btn-info mr-20 main-btn"
            type="button"
            onClick={() => navigate("/subir-cancion")}
          >
            Subir canción
          </button>
          <button
            onClick={logout}
            className="btn btn-info mr-20 main-btn"
            type="button"
          >
            Cerrar sesión
          </button>
        </>
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="nav-link active" aria-current="page" to="/">
            <img src={UnderRate} width={180} alt="Site Logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mt-2" id="#offcanvasNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-25">
              <li className="nav-item" href="#">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/nosotros"
                >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/resumen-bandas"
                >
                  Bandas Destacadas
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {showPublicMenu()}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default MenuHeader;
