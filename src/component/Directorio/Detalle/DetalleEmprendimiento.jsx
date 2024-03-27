import React from "react";

const DetalleEmprendimiento = () => {
  return (
    <div>
      <section className="banner relative flex flex-col justify-center items-center mt-10">
        <div className="text-black bg-slate-400 w-[84vw] flex flex-col items-center justify-center">
          Imagen
          <div className=" bg-slate-50 w-[10vw]">Logo</div>
        </div>
      </section>
      <section className="banner relative flex flex-row gap-10 justify-center py-10">
        <div className="text-black w-[60vw] flex flex-col gap-5">
          <p className="text-center text-2xl text-black lg:text-5xl font-bold">
            Nombre de la empresa
          </p>
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
        <div className="text-black w-[20vw] bg-green-600 flex flex-col gap-10 items-center py-10">
          <div>Seccion detalles</div>
          <div>Seccion fundadores</div>
        </div>
      </section>
    </div>
  );
};

export default DetalleEmprendimiento;
