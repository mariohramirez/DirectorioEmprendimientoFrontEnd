import React from "react";

const ListaNoticia = () => {
  return (
    <div className="flex flex-row w-[80vw] border-t-2 border-b-2 border-[#026937] py-2">
      <div className="h-[12rem] w-[12rem]">
        <img
          className="w-full h-full object-cover z-10 cursor-pointer"
          src="/jpg/FotosMiniatura/fotoNoticia.jpg"
          alt="Foto"
        />
      </div>
      <div className="w-[66vw] px-2">
        <p className="text-4xl font-bold text-[#026937] cursor-pointer">
          Titulo de la noticia
        </p>
        <p className="text-lg text-black">
          Lorem ipsum dolor sit amet consectetur. Quis etiam aliquet id lorem
          libero magnis nec id. Ac et scelerisque dui dolor non etiam neque
          suscipit mattis. Est maecenas morbi auctor lectus leo auctor eu.
        </p>
        <div>
          <button
            onClick={() => ""}
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
