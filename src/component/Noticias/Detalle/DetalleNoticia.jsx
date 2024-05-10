import React from "react";
import SellIcon from "@mui/icons-material/Sell";
import CardNoticiaRelacionada from "./CardNoticiaRelacionada";
import { useNavigate } from "react-router-dom";
import Conexiones from "./Conexiones";
import {useParams} from "react-router-dom";
import { novedad } from "../Novedad";

const etiquetas = [1, 1, 1];
const noticiasRelacionadas = [1, 1, 1];
const DetalleNoticia = () => {

  const{id} = useParams();

  const navigate = useNavigate();
  return (
    <section className="relative flex flex-col justify-center py-14 lg:flex-row gap-10">
      <div className="flex flex-col gap-5 text-black w-[60vw]">
        <span className="text-2xl lg:text-5xl font-bold">
          {novedad[id].titulo}
        </span>
        <img
          className="w-full h-[20rem] object-cover"
          src={novedad[id].imagen}
          alt="Foto"
        />
        <div className="flex flex-row justify-between border-t-2 border-b-2 border-black p-3 text-lg">
          <div className="flex flex-row gap-5 font-semibold justify-center items-center">
            <span>{novedad[id].fecha}</span>
            <span className="text-[#026937]">{novedad[id].autor}</span>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <span>Compartir: </span>
            <Conexiones />
          </div>
        </div>
        <p className="text-justify">
          {novedad[id].informacion}
        </p>
        <div className="flex flex-row gap-5  border-t-2 border-b-2 border-black p-3 text-lg ">
          <span className="font-semibold">Etiquetas:</span>
          {etiquetas.map((item) => (
            <div
              onClick={() => navigate("/novedades")}
              className=" cursor-pointer flex flex-row gap-1"
            >
              <span>
                <SellIcon style={{ color: "#026937" }} />
              </span>
              <span className="text-[#026937]">Etiqueta</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex text-black w-[80vw] lg:w-[20vw] flex-col gap-5">
        <span className="text-2xl lg:text-5xl font-bold">Actualidad</span>
        {noticiasRelacionadas.map((item) => (
          <CardNoticiaRelacionada />
        ))}
      </div>
    </section>
  );
};

export default DetalleNoticia;
