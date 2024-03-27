import React from "react";
import EmprendimientoCard from "./EmprendimientoCard";
import BarraBusqueda from "./BarraBusqueda";
import FiltroEmprendimiento from "./FiltroEmprendimiento";

{
  /*Arreglo de emprendimientos a partir de los cuales se crean las cards*/
}
const emprendimiento = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const filtro = [1, 1, 1];
const Directorio = () => {
  return (
    <div className="">
      {/*Seccion con las card de los emprendimientos*/}
      <section className="relative flex flex-col justify-center items-center">
        {/*Barra de busqueda*/}
        <BarraBusqueda />
        <div className="flex flex-wrap items-center justify-around gap-5 pt-10 w-[80vw] text-black">
          {
            /*Mapeo de los filtros de los emprendimientos*/
            filtro.map((item) => (
              <FiltroEmprendimiento />
            ))
          }
        </div>
        {/*Div realizado para la totalidad de las cartas*/}
        <div className="flex flex-wrap items-center justify-around gap-5 py-10 px-[50px]">
          {
            /*Mapeo de los emprendimientos donde cada item crea una card de emprendimiento*/
            emprendimiento.map((item) => (
              <EmprendimientoCard />
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default Directorio;
