import React, { useEffect } from "react";
import MenuAdmin from "../Menu/MenuAdmin";
import PieChartBox from "./PieChartBox/PieChartBox";
import { reportesPrueba } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { retrieveReporteSectores } from "../../State/Reportes/Action";

const Reportes = () => {
  const dispatch = useDispatch();
  const { reportes } = useSelector((store) => store.reporte);

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    dispatch(retrieveReporteSectores(jwt));
  }, []);

  const Sectores = reportes.map((item) => ({
    name: item.sector,
    value: item.count,
  }));

  return (
    <section className="flex min-h-[78vh]">
      <MenuAdmin />
      <div className="flex flex-col w-[80vw] p-2  text-black">
        <span className=" text-center py-2 text-5xl font-semibold">
          Reportes
        </span>
        <div
          className=" grid gap-[20px]"
          style={{
            gridTemplateColumns: "repeat(1, 1fr)",
            gridTemplateRows: "minmax(200px, auto)",
          }}
        >
          <div className="p-[20px] rounded-[10px] border-solid border-[1px] border-[#026937] col-span-1 row-span-1">
            <PieChartBox
              slug="Emprendedores por Genero"
              data={reportesPrueba[0].tipoDatos}
            />
          </div>
          <div className="p-[20px] rounded-[10px] border-solid border-[1px] border-[#026937] col-span-1 row-span-1">
            <PieChartBox
              slug="Emprendimientos por Sector"
              data={Sectores}
            />
          </div>
          <div className="p-[20px] rounded-[10px] border-solid border-[1px] border-[#026937] col-span-1 row-span-1">
            <PieChartBox
              slug="Emproendimientos por Programa Académico"
              data={reportesPrueba[2].tipoDatos}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reportes;
