import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useNavigate } from "react-router-dom";

const menu = [
  { title: "Inicio" },
  { title: "Directorio" },
  { title: "Novedades" },
  { title: "Servicios" },
  { title: "Administracion" },
];

export const NavBar = () => {
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    if (item.title === "Inicio") {
      navigate("/");
    } else if (item.title === "Administracion") {
      navigate("/admin");
    } else {
      navigate(`/${item.title.toLowerCase()}`);
    }
  };
  return (
    //En pantallas pequenas el tamano sera de px-5 y en pantallas grandes sera de px-20
    <nav className="px-5 z-40 py-5 bg-[#026937] lg:px-10 flex items-center justify-center min-w-[100vw]">
      {/*Div conteniendo cada uno de los elementos del NavBar*/}
      <div className="lg:flex items-center ">
        {/*Logo de la Universidad de Antioquia*/}
        <img
          onClick={() => navigate("/")}
          src="/png/LogoUdea.png"
          alt="Universidad de Antioquia"
          className="cursor-pointer h-auto w-[250px]"
        />

        {/*Menu de navegacion*/}
        <div className="flex flex-row gap-[20px]  text-header pl-[100px] pr-[100px] justify-center">
          {menu.map((item) => (
            <div
              onClick={() => handleNavigate(item)}
              className="cursor-pointer"
            >
              <span className=" hover:border-b-2">{item.title}</span>
            </div>
          ))}
        </div>

        {/*Div para el boton de iniciar sesiin*/}
        <div>
          {/*Boton de iniciar sesion, la transicion es para el hover, el estilo
                        es para tener una sombra bajo el boton personalizada*/}
          <button
            onClick={() => navigate("/login")}
            className="flex items-center bg-[#F9A12C] text-black
                        text-lg transition duration-300 ease-in-out hover:bg-[#ef434d] hover:text-white"
            style={{ boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.7)" }}
            title="Ingresar"
            name="Ingrear"
          >
            <div className="mx-4 my-2 flex flex-row gap-[10px] items-center justify-center">
              {/*Icono de usuario usando material UI Icons*/}
              <span>
                <PermIdentityIcon sx={{ fontSize: "20px" }} />
              </span>
              {false ? (
                <span className="font-roboto-slab text-base">
                  Cerrar sesion
                </span>
              ) : (
                <span className="font-roboto-slab text-base">Ingresar</span>
              )}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
