import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Reproductor from "../src/pages/reproductor";
import DatosUsuario from "../src/pages/DatosUsuario";
import ResumenBanda from "../src/pages/ResumenBandas";
import Pagina404 from "../src/pages/404.jsx";
import SubirCancion from "./pages/SubirCancion.jsx";
import Nosotros from "../src/pages/Nosotros.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ingreso",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Register />,
  },
  {
    path: "/reproductor/:user_id",
    element: <Reproductor />,
  },
  {
    path: "/datos-usuario",
    element: <DatosUsuario />,
  },
  {
    path: "/resumen-bandas",
    element: <ResumenBanda />,
  },
  {
    path: "/subir-cancion",
    element: <SubirCancion />,
  },
  {
    path: "/Nosotros",
    element: <Nosotros />,
  },
  {
    path: "*",
    element: <Pagina404 />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
