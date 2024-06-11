import { Card } from "@mui/material";
import React from "react";
import { WhatsAppIcon, LinkedIcon } from "../../Iconos";
import { motion } from "framer-motion";

{
  /*Card para el detalle del emprendimiento*/
}
const CardDetalleEmprendimiento = ({datos}) => {
  return (
    <Card
      className="shadow-md rounded-lg  w-[17rem] "
      style={{ backgroundColor: "white" }}
    >
      <div className="relative p-4 flex flex-col justify-between items-center">
        <img
          className="w-auto h-[5rem] object-cover"
          src={datos?.nombreLogo}
          alt="Logo"
        />
      </div>
      <div className="bg-[#026937] p-4 textPart flex flex-col gap-2">
        <p ><span className="font-semibold">Nombre de la empresa: </span>{datos?.nombre}</p>
        <p className="text-sm"><span className="font-semibold">Pais:</span> {datos?.pais}</p>
        <p className="text-sm"><span className="font-semibold">Departamento:</span> {datos?.departamento}</p>
        <p className="text-sm"><span className="font-semibold">Ciudad:</span> {datos?.ciudad}</p>
        <p className="text-sm"><span className="font-semibold">Sector:</span> {datos?.sector}</p>
        <p className="text-sm"><span className="font-semibold">Area:</span> {datos?.areaTrabajo}</p>
        <p className="text-sm"><span className="font-semibold">Programa academico:</span> {datos?.fundador.programa}</p>
        <nav className="flex flex-row gap-10 pt-2 justify-center items-center">
          <motion.a
            href="https://wa.me/573002222222"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9"
          >
            <WhatsAppIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9"
          >
            <LinkedIcon />
          </motion.a>
        </nav>
      </div>
      <nav className=" bg-[#306A9F] p-2 lg:flex flex-col justify-center items-center">
        <a href={datos?.informacionDeContacto.paginaweb} target="_blank">Visitar sitio web</a>
      </nav>
    </Card>
  );
};

export default CardDetalleEmprendimiento;
