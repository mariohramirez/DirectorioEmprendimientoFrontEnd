import React from "react";
import Single from "../single/Single";
import MenuAdmin from "../Menu/MenuAdmin";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveEmprendimientoById } from "../../State/Emprendimiento/Action";
import { useParams } from "react-router-dom";

const Novedad = () => {

  const { id } = useParams();

  return (
    <div className=" relative flex">
      <MenuAdmin />
      <div className="text-black w-[81vw] p-10">
        {/*<Single emprende={novedad.novedades[id]} />*/}
      </div>
    </div>
  );
};

export default Novedad;
