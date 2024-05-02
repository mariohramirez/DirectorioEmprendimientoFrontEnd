import React from "react";
import MenuAdmin from "../Menu/MenuAdmin";
import DataTable from "./DataTable/DataTable";
import Add from "./Add/Add";

const rows = [
  { id: 1, nombre: "Hello", formalizada: true },
  { id: 2, nombre: "DataGridPro", formalizada: false },
  { id: 3, nombre: "MUI", formalizada: false },
];

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "nombre", headerName: "Nombre", width: 150 },
  {
    field: "formalizada",
    headerName: "Formalizada",
    width: 100,
    type: "boolean",
  },
  { field: "sector", headerName: "Sector", width: 150 },
  { field: "servicio", headerName: "Servicio", width: 150 },
  { field: "fundador", headerName: "Fundador", width: 150 },
  { field: "etapa", headerName: "Etapa", width: 150 },
  { field: "fecha", headerName: "Fecha de registro", width: 150 },
];

const AdminEmprendimientos = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="relative flex">
      <MenuAdmin />

      <div className="w-[81vw]">
        <div className="flex  flex-col items-center gap-[20px] mb-[20px]">
          <p className=" text-black text-2xl lg:text-5xl font-bold pt-10 text-center">
            Emprendimientos
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
              {/*Icono de usuario usando material UI Icons*/}
              <span>
              </span>

                <span className="font-roboto-slab text-base">Agregar nuevo emprendimiento</span>
            </div>
          </button>
        </div>
        <DataTable slug="emprendimiento" columns={columns} rows={rows} />
        {open && (
          <Add slug="emprendimiento" columns={columns} setOpen={setOpen} />
        )}
      </div>
    </section>
  );
};

export default AdminEmprendimientos;
