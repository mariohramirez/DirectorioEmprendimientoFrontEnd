import React from "react";
import MenuAdmin from "../Menu/MenuAdmin";
import PieChartBox from "./PieChartBox/PieChartBox";
import { reportes } from "./data";

const data = [
  { name: "Hombres", value: 90, color: "#0088FE" },
  { name: "Mujeres", value: 20, color: "#00C49F" },
];

const Reportes = () => {
  return (
    <section className="flex min-h-[72vh]">
      <MenuAdmin />
      <div className="flex flex-col w-[80vw] p-2  text-black">
        <span className=" text-center py-2 text-5xl font-semibold">
          Reportes
        </span>
        <div
          className=" grid gap-[20px]"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "minmax(200px, auto)",
          }}
        >
          <div className="p-[20px] rounded-[10px] border-solid border-[1px] border-[#026937] col-span-1 row-span-1">
            <PieChartBox slug="Emprendedores por Genero" data={reportes[0].tipoDatos} />
          </div>
          <div className="p-[20px] rounded-[10px] border-solid border-[1px] border-[#026937] col-span-1 row-span-1">
            <PieChartBox slug="Emprendimientos por Sector" data={reportes[1].tipoDatos}/>
          </div>
          <div className="p-[20px] rounded-[10px] border-solid border-[1px] border-[#026937] col-span-1 row-span-1">
            <PieChartBox slug="Emproendimientos por Programa Académico" data={reportes[2].tipoDatos}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reportes;
