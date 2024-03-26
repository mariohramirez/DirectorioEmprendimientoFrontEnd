import React from "react";
import EmprendimientoCard from "./EmprendimientoCard";

{/*Arreglo de emprendimientos a partir de los cuales se crean las cards*/}
const emprendimiento = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
const Directorio = () => {
  return (
    <div className="">
      {/*Seccion con las card de los emprendimientos*/}
      <section className="relative flex flex-col justify-center items-center">
        {/*Barra de busqueda*/}
        <div className="flex flex-row gap-5 bg-blue-500 mt-10 p-10">
          <span>Barra de busqueda</span>
          <span>Boton de busqueda</span>
        </div>
        <div className="text-black flex flex-row gap-10 pt-10">
          <div className="flex flex-col">
            <span>Programa academico: </span>
            <span>Ingenieria de sistemas </span>
          </div>
          <div className="flex flex-col">
            <span>Sector: </span>
            <span>tecnologia </span>
          </div>
        </div>
        {/*Div realizado para la totalidad de las cartas*/}
        <div className="flex flex-wrap items-center justify-around gap-5 py-10 px-[50px]">
          {
            /*Mapeo de los emprendimientos donde cada item crea una card de emprendimiento*/ 
            emprendimiento.map((item)=><EmprendimientoCard/>)
          }
        </div>
      </section>
    </div>
  );
};

export default Directorio;
