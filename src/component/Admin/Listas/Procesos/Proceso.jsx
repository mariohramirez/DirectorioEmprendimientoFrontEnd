import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { retrieveProcesoById } from "../../../State/Procesos/Action";
import MenuAdmin from "../../Menu/MenuAdmin";
import FormularioCaracterizacion from "./Formulario/FormularioCaracterizacion";

const Proceso = () => {
  const dispatch = useDispatch();
  const { proceso } = useSelector((store) => store.proceso);
  const jwt = localStorage.getItem("jwt");
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProceso = async () => {
      await dispatch(retrieveProcesoById(jwt, { procesoId: id }));
      setLoading(false);
    };

    fetchProceso();
  }, [dispatch, jwt, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative flex">
      <MenuAdmin />
      <div className="text-black w-[81vw] p-10">
        <FormularioCaracterizacion proceso={proceso} />
      </div>
    </div>
  );
};

export default Proceso;
