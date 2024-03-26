import React from "react";
import EmprendimientoCard from "./EmprendimientoCard";

const emprendimiento = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
const Directorio = () => {
  return (
    <div className="">
      <section className="relative flex flex-col justify-center items-center">
        <div className="flex flex-wrap items-center justify-around gap-5 py-10 px-[50px]">
          {
            emprendimiento.map((item)=><EmprendimientoCard/>)
          }
        </div>
      </section>
    </div>
  );
};

export default Directorio;
