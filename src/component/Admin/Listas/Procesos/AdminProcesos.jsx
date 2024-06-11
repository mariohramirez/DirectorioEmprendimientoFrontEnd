import React from "react";
import MenuAdmin from "../../Menu/MenuAdmin";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveProcesos } from "../../../State/Procesos/Action";
import TablaProcesos from "./TablaProcesos";

const AdminProcesos = () => {
  const dispatch = useDispatch();
  const { procesos } = useSelector((store) => store.proceso);

  const jwt = localStorage.getItem("jwt");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProceso = async () => {
      await dispatch(retrieveProcesos(jwt));
      setLoading(false);
    };

    fetchProceso();
  }, [dispatch]);

  if (loading) {
    return <div>Lading...</div>;
  }

  console.log("Procesos: ", procesos);

  const procesoEjemplo = procesos[0];

  const columnasIgnoradas = [
    "resumen",
    "nombreLogo",
    "descripcion",
    "informacionDeContacto",
  ]; // Agrega aquí las claves que deseas ignorar

  const columns = procesoEjemplo
    ? Object.keys(procesoEjemplo).map((key) => ({
        field: key,
        headerName: key.charAt(0).toUpperCase() + key.slice(1),
        width: 150,
      }))
    : [];

  // Determinar las columnas basadas en las claves del emprendimiento seleccionado, ignorando las columnas especificadas
  const columnsTabla = procesoEjemplo
    ? Object.keys(procesoEjemplo)
        .filter((key) => !columnasIgnoradas.includes(key))
        .map((key) => ({
          field: key,
          headerName: key.charAt(0).toUpperCase() + key.slice(1),
          width: 150,
        }))
    : [];

  const rows = procesos.map((proceso) => ({
    ...proceso,
    id: proceso.id,
    emprendedor:
      proceso?.emprendedor.nombres + " " + proceso.emprendedor.apellidos,
    emprendimiento: proceso?.emprendimiento.nombre,
    estadoProceso: proceso?.estadoProceso.nombre,
  }));

  return (
    <section className="relative flex">
      <MenuAdmin />

      <div className="w-[81vw] min-h-[78vh]">
        <div className="flex  flex-col items-center gap-[20px] mb-[20px]">
          <p className=" text-black text-2xl lg:text-5xl font-bold pt-10 text-center">
            Procesos
          </p>
        </div>
        <div className="pb-10">
          <TablaProcesos slug="proceso" columns={columnsTabla} rows={rows} />
        </div>
      </div>
    </section>
  );
};

export default AdminProcesos;
