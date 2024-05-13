import React, { useEffect } from "react";
import EmprendimientoCard from "./EmprendimientoCard";
import BarraBusqueda from "./BarraBusqueda";
import FiltroEmprendimiento from "./FiltroEmprendimiento";
import { useDispatch, useSelector } from "react-redux";
import { retrieveEmprendimientos } from "../State/Emprendimiento/Action";
import { useState } from "react";

const filtro = [1, 1, 1];
const Directorio = () => {

  const dispatch = useDispatch();
  //const {emprendimiento} = useSelector((state) => state.emprendimiento);
  const {emprendimiento} = useSelector(store => store);
  console.log("Emprendimiento: ",emprendimiento);

  useEffect(() => {dispatch(retrieveEmprendimientos())},[])

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredEmprendimientos = emprendimiento.emprendimientos.filter((emprendimiento) => {
    return emprendimiento.nombre.toLowerCase().includes(query.toLowerCase())
  });

  return (
    <div className="">
      {/*Seccion con las card de los emprendimientos*/}
      <section className="relative flex flex-col justify-center items-center">
        {/*Barra de busqueda*/}
        <BarraBusqueda handleInputChange={handleInputChange} query={query}/>
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
            filteredEmprendimientos.map((item) => (
              <EmprendimientoCard key={item.id} item={item} />
            ))
            
          }
        </div>
      </section>
    </div>
  );
};

export default Directorio;
