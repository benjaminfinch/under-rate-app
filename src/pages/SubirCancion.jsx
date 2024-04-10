import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UnderRateBlanco from "../assets/images/UnderRateBlanco.svg"

const SubirCancion = () => {
  const navigate = useNavigate();
  const navigateToResumenBandas = (e) => {
    return navigate("/resumen-bandas");
  };
  const [nombreCancion, setNombreCancion] = useState();
  const [userSong, setUserSong] = useState();

  const notify = () =>
    toast.info("Tu canción se subió correctamente 🤘", {
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

  const uploadSong = () => {
    const formData = new FormData();
    const user_id = localStorage.getItem("user_id");
    formData.append("song_name", nombreCancion);
    formData.append("file", userSong);
    formData.append("user_id", user_id);
    formData.append("average_rating", 5.0);

    fetch("https://web-production-3722.up.railway.app/song", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/resumen-bandas");
        notify();
      })
      .catch((error) => {});
  };

  return (
    <div
      className="auth-form-container AppLog bg_cover footer-style-two"
      style={{ backgroundImage: "url(src/assets/images/slide2.png)" }}
    >
      <a className="brand-logo mb-30" href="#">
        <img
          src={UnderRateBlanco}
          width={180}
          alt="Site Logo"
        />
      </a>
      <label htmlFor="nombre"></label>
      <div>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Ingresa el nombre de tu canción"
          id="nombre"
          name="nombre"
          onChange={(e) => {
            setNombreCancion(e.target.value);
          }}
        />
        <label for="formFileLg" class="form-label">
          {" "}
        </label>
        <input
          className="form-control form-control-lg"
          id="formFileLg"
          type="file"
          onChange={(e) => setUserSong(e.target.files[0])}
        />
      </div>
      <button
        className="main-btn text-center btn btn-info mt-40"
        type="button"
        onClick={uploadSong}
      >
        Sube tu canción
      </button>

      <button className="link-btn" onClick={navigateToResumenBandas}>
        VOLVER
      </button>
    </div>
  );
};

export default SubirCancion;
