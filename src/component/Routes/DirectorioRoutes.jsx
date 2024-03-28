import React from "react";
import NavBar from "../NavBar/NavBar";
import { Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Routes } from "react-router-dom";
import Home from "../Home/Home";
import Directorio from "../Directorio/Directorio";
import Noticias from "../Noticias/Noticias";
import DetalleEmprendimiento from "../Directorio/Detalle/DetalleEmprendimiento";
import DetalleNoticia from "../Noticias/Detalle/DetalleNoticia";
import Auth from "../Auth/Auth";

export const DirectorioRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directorio" element={<Directorio />} />
        <Route path="/directorio/detalle" element={<DetalleEmprendimiento />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/detalle" element={<DetalleNoticia />} />
      </Routes>
      <Footer />
      <Auth />
    </div>
  );
};
