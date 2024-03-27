import React from "react";

const FiltroNoticia = () => {
  return (
    <div className="flex flex-col">
      <span>Filtro: </span>
      <div>
        <select
          name="Filtro"
          id="Filtro"
          className="h-10 bg-[#F7F6F6] py-2 pl-5 pr-20 rounded-lg border-none"
        >
          <option value="" selected="true" disabled>Seleccione el filtro</option>
          <option value="Filtro1">Filtro 1</option>
          <option value="Filtro2">Filtro 2</option>
          <option value="Filtro3">Filtro 3</option>
        </select>
      </div>
    </div>
  );
};

export default FiltroNoticia;
