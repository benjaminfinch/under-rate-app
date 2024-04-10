import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const navigate = useNavigate();
  const redirectToLogin = (e) => {
    return navigate("/ingreso");
  };

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userPhoto, setUserPhoto] = useState();
  const [profileType, setProfileType] = useState("1");

  const notify = () =>
    toast.info("Te registraste correctamente 🤘", {
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

  const registerUser = () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("file", userPhoto);
    formData.append("profile_type", profileType);

    fetch("https://web-production-3722.up.railway.app/register", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/");
        notify();
      })
      .catch((error) => {
        toast.error("Error al registrar usuario");
      });
  };

  return (
    <div
      className="auth-form-container AppLog bg_cover footer-style-two"
      style={{ backgroundImage: "url(src/assets/images/slide2.png)" }}
    >
      <a className="brand-logo mb-30" href="#">
        <img
          src="src/assets/images/UnderRateBlanco.svg"
          width={180}
          alt="Site Logo"
        />
      </a>
      <h2></h2>
      <form className="register-form">
        <label htmlFor="username"></label>
        <input
          name="username"
          id="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email"></label>
        <input
          name="email"
          id="email"
          placeholder="Correo electrónico"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          placeholder="Contraseña"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="user_photo"></label>
        <input
          className="form-select"
          type="file"
          id="user_photo"
          name="user_photo"
          accept="image/*"
          onChange={(e) => setUserPhoto(e.target.files[0])}
        />
        <label>
          Tipo de Perfil
          <select
            name="profile_type"
            className="form-select"
            id="profile_type"
            onChange={(e) => setProfileType(e.target.value)}
            defaultValue={"1"}
          >
            <option value="1">Oyente</option>
            <option value="2">Artista</option>
          </select>
        </label>
        <button
          className="main-btn text-center btn btn-info mt-20"
          type="button"
          onClick={registerUser}
        >
          Registrarse
        </button>
      </form>
      <button className="link-btn" type="button" onClick={redirectToLogin}>
        ¿Tienes una cuenta? Inicia sesión
      </button>
    </div>
  );
}
