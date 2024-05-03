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
import AdminDashboard from "../Admin/AdminDashboard";
import AdminEmprendimientos from "../Admin/Listas/AdminEmprendimientos";
import Emprendimiento from "../Admin/Emprendimiento/Emprendimiento";

export const DirectorioRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directorio" element={<Directorio />} />
        <Route path="/directorio/emprendimiento/:nombreEmprendimiento/:id" element={<DetalleEmprendimiento />} />
        <Route path="/novedades" element={<Noticias />} />
        <Route path="/novedades/detalle" element={<DetalleNoticia />} />
        <Route path="/novedades/detalle" element={<DetalleNoticia />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route
          path="/admin/emprendimientos"
          element={<AdminEmprendimientos />}
        />
        <Route path="/admin/emprendimientos/emprendimiento/:id" element={<Emprendimiento/>} />
      </Routes>
      <Footer />
      <Auth />
    </div>
  );
};
