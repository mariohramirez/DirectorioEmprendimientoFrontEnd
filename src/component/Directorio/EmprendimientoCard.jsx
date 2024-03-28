import { Card } from "@mui/material";
import React from "react";
import { WhatsAppIcon, LinkedIcon } from "../Iconos";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EmprendimientoCard = () => {
  const navigate = useNavigate();
  return (
    <Card
      className="shadow-md rounded-lg  w-[18rem] "
      style={{ backgroundColor: "white" }}
    >
      <div className="relative p-4 flex flex-col justify-between items-center">
        <img
          className="w-auto h-[8rem] object-cover"
          src="/png/Logos/logoipsum-300.png"
          alt="Logo"
        />
      </div>
      <div className="bg-[#026937] p-4 textPart lg:flex flex-col justify-between items-center">
        <p className="font-semibold text-lg">Nombre de la empresa</p>
        <p className="text-sm">Informacion de empresa</p>
        <nav className="flex flex-row gap-10 pt-2">
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
      <div className=" bg-[#137598] p-2 lg:flex flex-col justify-center items-center">
        <p
          onClick={() => navigate("/directorio/detalle")}
          className=" cursor-pointer hover:text-black"
        >
          Ver mas
        </p>
      </div>
    </Card>
  );
};

export default EmprendimientoCard;
