import { Card} from "@mui/material";
import React from "react";
import { WhatsAppIcon, LinkedIcon } from "../../Iconos";

const CardDetalleEmprendimiento = () => {
  return (
    <Card
      className="shadow-md rounded-lg  w-[17rem] "
      style={{ backgroundColor: "white" }}
    >
      <div className="relative p-4 flex flex-col justify-between items-center">
        <img
          className="w-auto h-[5rem] object-cover"
          src="/png/Logos/logoipsum-300.png"
          alt="Logo"
        />
      </div>
      <div className="bg-[#026937] p-4 textPart lg:flex flex-col">
        <p className="font-semibold">Nombre de la empresa</p>
        <p className="text-sm">Informacion de empresa</p>
        <p className="text-sm">Informacion de empresa</p>
        <p className="text-sm">Informacion de empresa</p>
        <div className="flex flex-row gap-10 pt-2 justify-center items-center">
            <span className=" w-10">
              <WhatsAppIcon />
            </span>
            <span className=" w-10">
              <LinkedIcon/>
            </span>
        </div>
      </div>
      <div className=" bg-[#306A9F] p-2 lg:flex flex-col justify-center items-center">
        <p>Visitar sitio web</p>
      </div>
    </Card>
  );
};

export default CardDetalleEmprendimiento;
