import React, { useEffect } from "react";
import EmprendimientoCard from "./EmprendimientoCard";
import BarraBusqueda from "./BarraBusqueda";
import FiltroEmprendimiento from "./FiltroEmprendimiento";
import { useDispatch, useSelector } from "react-redux";
import { retrieveEmprendimientos } from "../State/Emprendimiento/Action";

const filtro = [1, 1, 1];
const Directorio = () => {

  const dispatch = useDispatch();
  //const {emprendimiento} = useSelector((state) => state.emprendimiento);
  const {emprendimiento} = useSelector(store => store);
  console.log("Emprendimiento: ",emprendimiento);

  useEffect(() => {dispatch(retrieveEmprendimientos())},[])

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
            emprendimiento.emprendimientos.map((item) => (
              <EmprendimientoCard item={item}/>

              //<span>{item.nombre}</span>
            ))
            
          }
        </div>
      </section>
    </div>
  );
};

export default Directorio;
