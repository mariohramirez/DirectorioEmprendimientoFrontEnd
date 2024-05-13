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
import Servicios from "../Servicios/Servicios";
import AdminEmprendedores from "../Admin/Listas/AdminEmprendedores";
import Emprendedor from "../Admin/Emprendedor/Emprendedor";
import AdminNovedades from "../Admin/Listas/AdminNovedades";
import AdminUsuarios from "../Admin/Listas/AdminUsuarios";
import NotFound from "../Configuracion/NotFound";
import ScrollToTop from "../Configuracion/ScrollToTop";

export const DirectorioRoutes = () => {
  return (
    <div>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directorio" element={<Directorio />} />
        <Route
          path="/directorio/emprendimiento/:nombreEmprendimiento/:id"
          element={<DetalleEmprendimiento />}
        />
        <Route path="/novedades" element={<Noticias />} />
        <Route
          path="/novedades/:categoria/:titulo/:id"
          element={<DetalleNoticia />}
        />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route
          path="/admin/emprendimientos"
          element={<AdminEmprendimientos />}
        />
        <Route path="/admin/novedades" element={<AdminNovedades />} />
        <Route path="/admin/usuarios" element={<AdminUsuarios />} />
        <Route path="/admin/emprendedores" element={<AdminEmprendedores />} />
        <Route
          path="/admin/emprendedores/emprendedores/:id"
          element={<Emprendedor />}
        />

        <Route
          path="/admin/emprendimientos/emprendimiento/:id"
          element={<Emprendimiento />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Auth />
    </div>
  );
};
