import { Card } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CardNoticia = () => {
  const navigate = useNavigate();
  return (
    <Card
      className="shadow-md rounded-lg  w-[25rem] "
      style={{ backgroundColor: "white" }}
    >
      <div className="relative flex flex-col justify-between items-center">
        <img
          className="w-full h-[8rem] rounded-t-md object-cover"
          src="/jpg/FotosMiniatura/fotoNoticia.jpg"
          alt="Foto"
        />
      </div>
      <div className="bg-[#026937] p-4 textPart">
        <div className="flex flex-row gap-2 justify-between">
          <p>Categoria</p>
          <p>Fecha</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-semibold text-lg">Titulo de la noticia</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Quis etiam aliquet id lorem
            libero magnis nec id. Ac et scelerisque dui dolor non etiam neque
            suscipit mattis. Est maecenas morbi auctor lectus leo auctor eu.{" "}
          </p>
        </div>
      </div>
      <div className=" bg-blue-500 p-2 lg:flex flex-col justify-center items-center">
        <p onClick={()=>navigate("/noticias/detalle")} className=" cursor-pointer hover:text-black">Leer mas</p>
      </div>
    </Card>
  );
};

export default CardNoticia;
