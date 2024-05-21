import React from "react";
import MenuAdmin from "../Menu/MenuAdmin";
import DataTable from "./DataTable/DataTable";
import Add from "./Add/Add";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveEmprendimientos } from "../../State/Emprendimiento/Action";

const AdminEmprendimientos = () => {
  const dispatch = useDispatch();
  //const {emprendimiento} = useSelector((state) => state.emprendimiento);
  const { emprendimiento } = useSelector((store) => store);
  console.log("Emprendimiento: ", emprendimiento);

  useEffect(() => {
    dispatch(retrieveEmprendimientos());
  }, []);

  const [open, setOpen] = React.useState(false);

  console.log("Emprendimiento aca: ", emprendimiento.emprendimientos[0]);

  // Seleccionar un emprendimiento del arreglo
  const emprendimientoEjemplo = emprendimiento.emprendimientos[0];

  console.log("Emprendimiento ejemplo: ", emprendimientoEjemplo);

  const columnasIgnoradas = [
    "resumen",
    "nombreLogo",
    "descripcion",
    "informacionDeContacto",
  ]; // Agrega aquí las claves que deseas ignorar

  // Determinar las columnas basadas en las claves del emprendimiento seleccionado, ignorando las columnas especificadas
  const columnsTabla = emprendimientoEjemplo
    ? Object.keys(emprendimientoEjemplo)
        .filter((key) => !columnasIgnoradas.includes(key))
        .map((key) => ({
          field: key,
          headerName: key.charAt(0).toUpperCase() + key.slice(1),
          width: 150,
        }))
    : [];

  // Determinar las columnas basadas en las claves del emprendimiento seleccionado, ignorando las columnas especificadas
  const columns = emprendimientoEjemplo
    ? Object.keys(emprendimientoEjemplo).map((key) => ({
        field: key,
        headerName: key.charAt(0).toUpperCase() + key.slice(1),
        width: 150,
        type: determineColumnType(emprendimientoEjemplo[key]),
      }))
    : [];

    function determineColumnType(value) {
      if (typeof value === "string") {
        // Verificar si es una fecha
        if (isValidDate(value)) {
          return "date";
        }
        // Verificar si es un número
        else if (!isNaN(value)) {
          return "number";
        }
        // Si no es una fecha ni un número, se asume que es texto
        else {
          return "text";
        }
      } else if (typeof value === "boolean") {
        return "boolean";
      } else {
        // Si el tipo no es string ni boolean, se asume que es texto
        return "text";
      }
    }

    function isValidDate(dateString) {
      // Intenta analizar la cadena como una fecha
      const timestamp = Date.parse(dateString);
      // Si el resultado es un valor numérico, es una fecha válida
      return !isNaN(timestamp);
    }
    

    

  const rows = emprendimiento.emprendimientos.map((emprendimiento) => ({
    ...emprendimiento,
    id: emprendimiento.id,
  }));

  return (
    <section className="relative flex">
      <MenuAdmin/>
      <div className="w-[81vw] min-h-[78vh]">
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
              <span className="font-roboto-slab text-base">
                Agregar nuevo emprendimiento
              </span>
            </div>
          </button>
        </div>
        <div className="pb-10">
          <DataTable slug="emprendimiento" columns={columnsTabla} rows={rows} />
          {open && (
            <Add slug="emprendimiento" columns={columns} setOpen={setOpen} />
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminEmprendimientos;
