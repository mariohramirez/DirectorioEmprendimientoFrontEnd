import React, {useEffect} from "react";
import CardDetalleEmprendimiento from "./CardDetalleEmprendimiento";
import CardFundadores from "./CardFundadores";
import BannerEmprendimiento from "./BannerEmprendimiento";
import { useDispatch, useSelector } from "react-redux";
import { retrieveEmprendimientoById } from "../../State/Emprendimiento/Action";
import { retrieveEmprendimientos } from "../../State/Emprendimiento/Action";
import { useParams } from "react-router-dom";

const DetalleEmprendimiento = () => {

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {emprendimiento} = useSelector(store => store);
  console.log("Emprendimiento: ",emprendimiento);

  const {id} = useParams();

  console.log("id", id);


  useEffect(() => {dispatch(retrieveEmprendimientoById({emprendimientoId: id, }))},[])

  return (
    <div>
      <section className="relative flex flex-col justify-center items-center mt-10">
        <BannerEmprendimiento  />
      </section>
      <section className="relative flex flex-col justify-center py-14 lg:flex-row gap-10">
        <div className="flex-col items-center justify-center text-black w-[60vw]">
          <p className="text-center text-2xl text-black lg:text-5xl font-bold pb-5">{emprendimiento.emprendimiento?.nombre}          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Leo sollicitudin ante
            curabitur accumsan sodales nibh. Sed purus tellus id aenean
            volutpat. Diam turpis convallis at ut fringilla elementum ornare
            sit. Viverra sagittis sapien mauris nibh. At tincidunt gravida dolor
            aliquet magna in praesent. Non dapibus ullamcorper diam natoque
            nulla neque eget posuere. Pretium gravida rutrum pellentesque sed
            condimentum. Risus laoreet hendrerit in ultrices a. Ut interdum
            posuere ut a sit. At eget velit sagittis turpis faucibus. Augue
            porttitor eu a leo consectetur ut pharetra congue. Aliquam aenean
            tempor sit tellus. Eleifend sagittis augue vel sed penatibus eu
            dictum aliquet eu. Aliquet suspendisse felis volutpat purus urna
            iaculis. Purus urna vitae est sit urna ornare blandit. Vulputate
            tortor adipiscing lacus elementum eu nibh arcu et. Libero dui
            laoreet odio quis risus lorem ultrices enim. Quis sed sed risus
            risus quis lectus magna ultrices. Sed gravida at eu lobortis nulla
            lectus dignissim. Ac lectus commodo faucibus at semper. Nunc
            pulvinar id lobortis fusce suspendisse volutpat pulvinar
            ullamcorper. Nisl senectus amet dui aenean sollicitudin vel. Turpis
            lorem bibendum elit nunc. Fermentum suspendisse viverra pharetra
            ipsum aliquet. Eu turpis et blandit vel. Ut ac sit senectus
            condimentum nibh mattis dolor.
          </p>
        </div>
        <div className="flex text-black w-[80vw] lg:w-[20vw] flex-col gap-10 items-center">
          <CardDetalleEmprendimiento />
          <CardFundadores />
        </div>
      </section>
    </div>
  );
};

export default DetalleEmprendimiento;
