import { Card } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CardNoticiaRelacionada = ({ novedad }) => {
  
  const tituloParaRuta = novedad.titulo.replace(/\s+/g, '-').toLowerCase();

  const navigate = useNavigate();
  return (
    <Card
      className="shadow-md rounded-lg  w-[20rem] "
      style={{ backgroundColor: "white" }}
    >
      <div className="relative flex flex-col justify-between items-center">
        <img
          className="w-full h-[8rem] rounded-t-md object-cover"
          src={novedad.imagen}
          alt="Foto"
        />
      </div>
      <div className="bg-[#026937] p-4 textPart">
        <div className="flex flex-row gap-2 justify-between">
          <p>{novedad.categoria}</p>
          <p>{novedad.fecha}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-semibold text-lg text-center py-2">
            {novedad.titulo}
          </p>
          <p className="text-sm text-justify">{novedad.resumen} </p>
        </div>
      </div>
      <div className=" bg-blue-500 p-2 lg:flex flex-col justify-center items-center">
        <p
          onClick={() =>
            navigate(
              `/novedades/${novedad.categoria}/${tituloParaRuta}/${novedad.id}`
              )
          }
          className=" cursor-pointer hover:text-black"
        >
          Leer mas
        </p>
      </div>
    </Card>
  );
};

export default CardNoticiaRelacionada;
