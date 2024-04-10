import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import slide2 from "../assets/images/slide2.png";
import UnderRateBlanco from "../assets/images/UnderRateBlanco.svg"

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const notify = () =>
    toast.info("Ingresaste correctamente 🤘", {
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
  const notify2 = () =>
    toast.error("Credenciales invalidas", {
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
  const navigateToRegister = (e) => {
    navigate("/registro");
  };

  const loginUser = () => {
    fetch("https://web-production-3722.up.railway.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if(response.status !== 200){
          alert("Credenciales invalidas");
          notify2();
        } else {
          return response.json()
        }
      })
      .then((data) => {
        localStorage.setItem("email", email);
        localStorage.setItem("user_id", data.user_id);
        notify();
        navigate("/resumen-bandas");
      });
  };

  return (
    <div
      className="auth-form-container AppLog bg_cover footer-style-two"
      style={{ backgroundImage: `url(${slide2})` }}
    >
      <a className="brand-logo mb-30" href="#">
        <img
          src={UnderRateBlanco}
          width={180}
          alt="Site Logo"
        />
      </a>
      <h2></h2>
      <form className="login-form">
        <label htmlFor="email"></label>
        <input
          type="email"
          placeholder="Correo electrónico"
          id="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className="pb-20" htmlFor="password"></label>
        <input
          type="password"
          placeholder="Contraseña"
          id="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="main-btn text-center btn btn-info mt-40"
          type="button"
          onClick={loginUser}
        >
          Iniciar sesión
        </button>
      </form>
      <button className="link-btn" onClick={navigateToRegister}>
        ¿No tienes una cuenta? Regístrate
      </button>
    </div>
  );
}
