import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const BarraBusqueda = () => {
  return (
    <div className="flex flex-row gap-5 bg-[#026937] mt-10 py-5 px-10 w-[80vw] justify-center items-center rounded-lg">
      {/*Input para realizar la busqueda de un emprendimiento*/}
      <input
        type="text"
        className="w-[80%] h-10 bg-[#F7F6F6] text-black py-6 px-5 rounded-lg border-none"
        placeholder="Encuentra un emprendimiento"
      />
      {/*Boton para realizar la busqueda de un emprendimiento*/}
      <button
        className="flex items-center bg-[#137598] text-white rounded-lg
                        text-lg transition duration-300 ease-in-out hover:bg-[#ef434d] hover:text-white"
        style={{ boxShadow: "1px 5px 10px 0px rgba(0, 0, 0, 0.7)" }}
        title="Ingresar"
        name="Ingrear"
      >
        <div className="mx-4 my-2 flex flex-row gap-[10px] items-center justify-center">
          {/*Icono de busqueda usando material UI Icons*/}
          <span>
            <SearchIcon sx={{ fontSize: "px" }} />
          </span>
          <span className="font-roboto-slab text-base">Buscar</span>
        </div>
      </button>
    </div>
  );
};

export default BarraBusqueda;
