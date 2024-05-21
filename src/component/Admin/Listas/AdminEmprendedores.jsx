import React from "react";
import MenuAdmin from "../Menu/MenuAdmin";
import DataTable from "./DataTable/DataTable";
import Add from "./Add/Add";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveEmprendimientos } from "../../State/Emprendimiento/Action";
import { emprendedor } from "./Emprendedor";

const AdminEmprendedores = () => {

  const [open, setOpen] = React.useState(false);

  const emprendedorEjemplo = emprendedor.emprendedores[0];

  const columnasIgnoradas = [
    "resumen",
    "nombreLogo",
    "descripcion",
    "informacionDeContacto",
  ]; // Agrega aquí las claves que deseas ignorar

  // Determinar las columnas basadas en las claves del emprendimiento seleccionado, ignorando las columnas especificadas
  const columnsTabla = emprendedorEjemplo
    ? Object.keys(emprendedorEjemplo)
        .filter((key) => !columnasIgnoradas.includes(key))
        .map((key) => ({
          field: key,
          headerName: key.charAt(0).toUpperCase() + key.slice(1),
          width: 150,
        }))
    : [];

  const rows = emprendedor.emprendedores.map((emprendedor) => ({
    ...emprendedor,
    id: emprendedor.id,
  }));


  return (
    <section className="relative flex">
      <MenuAdmin />

      <div className="w-[81vw] min-h-[78vh]">
        <div className="flex  flex-col items-center gap-[20px] mb-[20px]">
          <p className=" text-black text-2xl lg:text-5xl font-bold pt-10 text-center">
            Emprendedores
          </p>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center bg-[#026937] rounded-sm
                        text-lg transition duration-300 ease-in-out hover:bg-[#8DC63F]"
            style={{ boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.7)" }}
            title="Agregar"
            name="Agregar"
          >
            <div className="mx-4 my-2 flex flex-row gap-[10px] items-center justify-center">
              <span className="font-roboto-slab text-base">
                Agregar nuevo emprendimiento
              </span>
            </div>
          </button>
        </div>
        <div className="pb-10">
          <DataTable slug="emprendedor" columns={columnsTabla} rows={rows} />
        </div>
      </div>
    </section>
  );
};

export default AdminEmprendedores;
