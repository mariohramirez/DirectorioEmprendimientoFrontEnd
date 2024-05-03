import React from "react";
import Single from "../single/Single";
import MenuAdmin from "../Menu/MenuAdmin";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveEmprendimientoById } from "../../State/Emprendimiento/Action";
import { useParams } from "react-router-dom";

const Emprendimiento = () => {
  const dispatch = useDispatch();
  const { emprendimiento } = useSelector((store) => store);

  const { id } = useParams();

  console.log("id", id);

  useEffect(() => {
    dispatch(retrieveEmprendimientoById({ emprendimientoId: id }));
  }, []);

  console.log("Emprendimiento: ", emprendimiento.emprendimiento);

  return (
    <div className=" relative flex">
      <MenuAdmin />
      <div className="text-black w-[81vw] p-10">
        <Single emprende={emprendimiento.emprendimiento} />
      </div>
    </div>
  );
};

export default Emprendimiento;
