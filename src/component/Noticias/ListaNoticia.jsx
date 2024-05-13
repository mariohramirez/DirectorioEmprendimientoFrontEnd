import React from "react";
import { useNavigate } from "react-router-dom";

const ListaNoticia = ({ novedad }) => {
  const navigate = useNavigate();

  const tituloParaRuta = novedad.titulo.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className="flex flex-row w-[80vw] border-t-2 border-b-2 border-[#026937] py-2">
      <div className="relative flex h-[12rem] w-[12rem]">
        <img
          onClick={() =>
            navigate(
              `/novedades/${novedad.categoria}/${tituloParaRuta}/${novedad.id}`
              )
          }
          className="w-full h-full object-cover z-10 cursor-pointer"
          src={novedad.imagen}
          alt="Foto"
        />
        <div className="absolute inset-0  z-20 bg-[#026937] h-[2rem] w-[70%]">
          <p className=" text-white text-lg font-bold">{novedad.categoria}</p>
        </div>
      </div>
      <div className="w-[66vw] px-2 relative">
        <p
          onClick={() =>
            navigate(
              `/novedades/${novedad.categoria}/${tituloParaRuta}/${novedad.id}`
              )
          }
          className="text-4xl font-bold text-[#026937] cursor-pointer"
        >
          {novedad.titulo}
        </p>
        <p className="text-lg text-black">{novedad.resumen}</p>
        <div className="absolute bottom-0 right-0">
          <button
            onClick={() =>
              navigate(
                `/novedades/${novedad.categoria}/${tituloParaRuta}/${novedad.id}`
              )
            }
            className="flex items-center bg-[#026937] text-white
                        text-lg transition duration-300 ease-in-out hover:text-black"
            style={{ boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.7)" }}
            title="Ver mas"
            name="Ver mas"
          >
            <span className=" mx-20 my-2 font-roboto-slab text-base">
              Ver más
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListaNoticia;
