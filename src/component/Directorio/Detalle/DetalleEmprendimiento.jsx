import React, { useEffect, useState } from "react";
import CardDetalleEmprendimiento from "./CardDetalleEmprendimiento";
import CardFundadores from "./CardFundadores";
import BannerEmprendimiento from "./BannerEmprendimiento";
import { useDispatch, useSelector } from "react-redux";
import { retrieveEmprendimientoById } from "../../State/Emprendimiento/Action";
import { useParams } from "react-router-dom";

const DetalleEmprendimiento = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { emprendimiento } = useSelector((store) => store);
  console.log("Emprendimiento: ", emprendimiento);

  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProceso = async () => {
      await dispatch(retrieveEmprendimientoById({ emprendimientoId: id }));
      setLoading(false);
    };

    fetchProceso();
  }, [dispatch, id]);

  if (loading) {
    return <div>Lading...</div>;
  }

  return (
    <div>
      <section className="relative flex flex-col justify-center items-center mt-10">
        <BannerEmprendimiento imagen={emprendimiento.emprendimiento} />
      </section>
      <section className="relative flex flex-col justify-center py-14 lg:flex-row gap-10">
        <div className="flex-col items-center justify-center text-black w-[60vw]">
          <p className="text-center text-2xl text-black lg:text-5xl font-bold pb-5">
            {emprendimiento.emprendimiento?.nombre}{" "}
          </p>
          <p>{emprendimiento.emprendimiento?.descripcion}</p>
        </div>
        <div className="flex text-black w-[80vw] lg:w-[20vw] flex-col gap-10 items-center">
          <CardDetalleEmprendimiento datos={emprendimiento.emprendimiento} />
          <CardFundadores fundador={emprendimiento.emprendimiento?.fundador} />
        </div>
      </section>
    </div>
  );
};

export default DetalleEmprendimiento;
