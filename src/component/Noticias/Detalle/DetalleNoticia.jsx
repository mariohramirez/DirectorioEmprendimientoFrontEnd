import React, { useEffect } from "react";
import SellIcon from "@mui/icons-material/Sell";
import CardNoticiaRelacionada from "./CardNoticiaRelacionada";
import { useNavigate } from "react-router-dom";
import Conexiones from "./Conexiones";
import { useParams } from "react-router-dom";
import { novedad } from "../Novedad";
import { useDispatch, useSelector } from "react-redux";
import { retrieveNovedadById, retrieveNovedades } from "../../State/Novedades/Action";

const DetalleNoticia = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { novedad } = useSelector((store) => store.novedad);
  const { novedades } = useSelector((store) => store.novedad);

  useEffect(() => {
    dispatch(retrieveNovedadById({ novedadId: id }));
  }, []);

  useEffect(() => {
    dispatch(retrieveNovedades());
  }, []);

  const navigate = useNavigate();

  const handleClickCategoria = () => {
    navigate(`/novedades?categoria=${novedad.categoria}`);
  };

  const fecha = new Date(novedad?.fecha);
  const options = { day: "2-digit", month: "long", year: "numeric" };
  const formattedDate = fecha.toLocaleDateString("es-ES", options);

  const categoria = novedad?.categoria;
  const formattedCategoria =
    categoria?.charAt(0).toUpperCase() + categoria?.slice(1).toLowerCase();

  const noticiasRelacionadas = novedades
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    .slice(0, 3);

  return (
    <section className="relative flex flex-col justify-center py-14 lg:flex-row gap-10">
      <div className="flex flex-col gap-5 text-black w-[60vw]">
        <span className="text-2xl lg:text-5xl font-bold">
          {novedad?.titulo}
        </span>
        <img
          className="w-full h-[20rem] object-cover"
          src={novedad?.img_url}
          alt="Foto"
        />
        <div className="flex flex-row justify-between border-t-2 border-b-2 border-black p-3 text-lg">
          <div className="flex flex-row gap-5 font-semibold justify-center items-center">
            <span>{formattedDate}</span>
            {/*<span className="text-[#026937]">{novedad[id].autor}</span>*/}
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <span>Compartir: </span>
            <Conexiones />
          </div>
        </div>
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: novedad?.cuerpo }}
        />
        <div className="flex flex-row gap-5  border-t-2 border-b-2 border-black p-3 text-lg ">
          <span className="font-semibold">Categoria:</span>
          <div
            onClick={handleClickCategoria}
            className=" cursor-pointer flex flex-row gap-1"
          >
            <span>
              <SellIcon style={{ color: "#026937" }} />
            </span>
            <span className="text-[#026937]">{formattedCategoria}</span>
          </div>
        </div>
      </div>
      <div className="flex text-black w-[80vw] lg:w-[20vw] flex-col gap-5">
        <span className="text-2xl lg:text-5xl font-bold">Actualidad</span>
        {noticiasRelacionadas.map((item) => (
          <CardNoticiaRelacionada novedad={item} />
        ))}
      </div>
    </section>
  );
};

export default DetalleNoticia;
