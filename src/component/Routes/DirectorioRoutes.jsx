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
import Reportes from "../Admin/Reporte/Reportes";
import WritePage from "../Admin/Listas/Write/Page";
import FormularioRegistroEmprendedor from "../Servicios/Formulario/FormularioRegistroEmprendedor";
import FormularioRegistroIndependiente from "../Servicios/Formulario/FormularioRegistroIndependiente";
import FormularioGuardado from "../Servicios/Formulario/FormularioGuardado";
import FormularioRegistroEmprendimiento from "../Servicios/Formulario/FormularioRegistroEmprendimiento";
import Novedad from "../Admin/Novedad/Novedad";
import Usuario from "../Admin/Usuario/Usuario";

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
        <Route path="/servicios/formulario/Registro/Emprendedor" element={<FormularioRegistroEmprendedor />} />
        <Route path="/servicios/formulario/Registro/Profesional" element={<FormularioRegistroIndependiente />} />
        <Route path="/servicios/formulario/Registro/Emprendimiento" element={<FormularioRegistroEmprendimiento />} />
        <Route path="/servicios/formulario/Registro/Guardado" element={<FormularioGuardado />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route
          path="/admin/emprendimientos"
          element={<AdminEmprendimientos />}
        />
        <Route path="/admin/novedades" element={<AdminNovedades />} />
        <Route
          path="/admin/novedades/novedad/:id"
          element={<Novedad />}
        />
        <Route path="/admin/novedades/agregar" element={<WritePage />} />
        <Route path="/admin/usuarios" element={<AdminUsuarios />} />
        <Route path="/admin/usuarios/usuario/:id" element={<Usuario />} />
        <Route path="/admin/emprendedores" element={<AdminEmprendedores />} />
        <Route path="/admin/emprendedores/emprendedor/:id" element={<Emprendedor />} />
        <Route
          path="/admin/emprendedores/emprendedores/:id"
          element={<Emprendedor />}
        />
        <Route path="/admin/reportes" element={<Reportes />} />
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
