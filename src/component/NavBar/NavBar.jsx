import React, { useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../State/Authentication/Action";

const menu = [
  { title: "Inicio" },
  { title: "Directorio" },
  { title: "Novedades" },
  { title: "Servicios" },
  //{ title: "Administracion" },
];

const NavBar = ({ onOpenModal }) => {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (item) => {
    if (item.title === "Inicio") {
      navigate("/");
    } else if (item.title === "Administracion") {
      navigate("/admin");
    } else {
      navigate(`/${item.title.toLowerCase()}`);
    }
  };

  const handleProfileClick = () => {
    if (auth.user?.rol === "ROL_ADMIN") {
      navigate("/admin");
      setIsMenuOpen(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsMenuOpen(false);
    navigate("/");
  };

  return (
    <nav className="px-5 z-40 py-5 bg-[#026937] lg:px-10 flex items-center justify-center min-w-[100vw]">
      <div className="lg:flex items-center">
        <img
          onClick={() => navigate("/")}
          src="/png/LogoUdea.png"
          alt="Universidad de Antioquia"
          className="cursor-pointer h-auto w-[250px]"
        />
        <div className="flex flex-row gap-[20px] text-header pl-[100px] pr-[100px] justify-center">
          {menu.map((item) => (
            <div
              onClick={() => handleNavigate(item)}
              className="cursor-pointer"
            >
              <span className="hover:border-b-2">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="relative">
          <button
            className="flex items-center bg-[#F9A12C] text-black text-lg transition duration-300 ease-in-out hover:bg-[#ef434d] hover:text-white"
            style={{ boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.7)" }}
            title="Ingresar"
            name="Ingresar"
            onClick={() => {
              if (auth.user) {
                setIsMenuOpen(!isMenuOpen);
              } else {
                onOpenModal();
              }
            }}
          >
            <div className="mx-4 my-2 flex flex-row gap-[10px] items-center justify-center">
              <span>
                <PermIdentityIcon sx={{ fontSize: "20px" }} />
              </span>
              {auth.user ? (
                <span className="font-roboto-slab text-base">
                  {auth.user?.fullName}
                </span>
              ) : (
                <span className="font-roboto-slab text-base">
                  Ingresar
                </span>
              )}
            </div>
          </button>
          {isMenuOpen && auth.user && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50">
              <div className="py-2">
                <span
                  onClick={handleProfileClick}
                  className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                >
                  Administración
                </span>
                <span
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                >
                  Cerrar sesión
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
