import React from "react";
import SellIcon from "@mui/icons-material/Sell";
import CardNoticiaRelacionada from "./CardNoticiaRelacionada";
import { useNavigate } from "react-router-dom";
import Conexiones from "./Conexiones";

const etiquetas = [1, 1, 1];
const noticiasRelacionadas = [1, 1, 1];
const DetalleNoticia = () => {
  const navigate = useNavigate();
  return (
    <section className="relative flex flex-col justify-center py-14 lg:flex-row gap-10">
      <div className="flex flex-col gap-5 text-black w-[60vw]">
        <span className="text-2xl lg:text-5xl font-bold">
          Titulo de la Noticia
        </span>
        <img
          className="w-full h-[20rem] object-cover"
          src="/jpg/FotosMiniatura/fotoNoticia.jpg"
          alt="Foto"
        />
        <div className="flex flex-row justify-between border-t-2 border-b-2 border-black p-3 text-lg">
          <div className="flex flex-row gap-5 font-semibold justify-center items-center">
            <span>Fecha de publicacion</span>
            <span className="text-[#026937]">Autor</span>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <span>Compartir: </span>
            <Conexiones />
          </div>
        </div>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur. Leo sollicitudin ante
          curabitur accumsan sodales nibh. Sed purus tellus id aenean volutpat.
          Diam turpis convallis at ut fringilla elementum ornare sit. Viverra
          sagittis sapien mauris nibh. At tincidunt gravida dolor aliquet magna
          in praesent. Non dapibus ullamcorper diam natoque nulla neque eget
          posuere. Pretium gravida rutrum pellentesque sed condimentum. Risus
          laoreet hendrerit in ultrices a. Ut interdum posuere ut a sit. At eget
          velit sagittis turpis faucibus. Augue porttitor eu a leo consectetur
          ut pharetra congue. Aliquam aenean tempor sit tellus. Eleifend
          sagittis augue vel sed penatibus eu dictum aliquet eu. Aliquet
          suspendisse felis volutpat purus urna iaculis. Purus urna vitae est
          sit urna ornare blandit. Vulputate tortor adipiscing lacus elementum
          eu nibh arcu et. Libero dui laoreet odio quis risus lorem ultrices
          enim. Quis sed sed risus risus quis lectus magna ultrices. Sed gravida
          at eu lobortis nulla lectus dignissim. Ac lectus commodo faucibus at
          semper. Nunc pulvinar id lobortis fusce suspendisse volutpat pulvinar
          ullamcorper. Nisl senectus amet dui aenean sollicitudin vel. Turpis
          lorem bibendum elit nunc. Fermentum suspendisse viverra pharetra ipsum
          aliquet. Eu turpis et blandit vel. Ut ac sit senectus condimentum nibh
          mattis dolor.
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
