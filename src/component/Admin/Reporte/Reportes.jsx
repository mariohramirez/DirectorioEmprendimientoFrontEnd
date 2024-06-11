import React, { useEffect } from "react";
import MenuAdmin from "../Menu/MenuAdmin";
import PieChartBox from "./PieChartBox/PieChartBox";
import { reportesPrueba } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { retrieveReporteGenero, retrieveReportePrograma, retrieveReporteSectores } from "../../State/Reportes/Action";

const Reportes = () => {
  const dispatch = useDispatch();
  const { reportes } = useSelector((store) => store.reporte);
  const { reportesGenero } = useSelector((store) => store.reporte);
  const { reportesPrograma } = useSelector((store) => store.reporte);


  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    dispatch(retrieveReporteSectores(jwt));
  }, []);

  useEffect(() => {
    dispatch(retrieveReportePrograma(jwt));
  }, []);

  useEffect(() => {
    dispatch(retrieveReporteGenero(jwt));
  }, []);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const Sectores = reportes.map((item) => ({
    name: item.sector,
    value: item.count,
    color: getRandomColor(),
  }));

  const Genero = reportesGenero.map((item) => ({
    name: item.genero,
    value: item.count,
    color: getRandomColor(),
  }));

  const Programa = reportesPrograma.map((item) => ({
    name: item.programa,
    value: item.count,
    color: getRandomColor(),
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
              data={Genero}
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
              data={Programa}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reportes;
