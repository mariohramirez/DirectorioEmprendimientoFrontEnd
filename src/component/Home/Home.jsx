import React from "react";
import RoleButton from "./RoleButton";
import { infoHome} from "./data";

const Home = () => {
  return (
    <div className="">
      <section className="banner relative flex flex-col justify-center items-center">
        <div className="w-[80vw] z-10">
          <p className="text-2xl text-black lg:text-5xl font-bold z-10 py-10 text-center">
            Unidad de innovación de la Facultad de ingenieria
          </p>
          <p className="z-10 text-black lg:text-m text-justify">
            {infoHome[0].informacion}
          </p>
          <div className="mt-10">
            <img src={infoHome[0].imagen} alt={infoHome.title} className="w-[100%] h-[100%] object-cover" />
          </div>
          <div className="bg-[#3EBDAC] py-[80px] mt-10">
            <span className="font-bold lg:text-5xl ">
              Ruta del emprendimiento
            </span>
          </div>
          <div className="flex flex-row gap-[20px] justify-between py-10">
            <RoleButton text="Quiero Emprender" url="https://forms.office.com/pages/responsepage.aspx?id=IefhmYRxjkmK_7KtTlPBwke8p-azwIdPkDYFCIUGxKZUOUQzVFdaUVBJS0E0N1pBRkIwQlVOVzJOSyQlQCN0PWcu"/>
            <RoleButton text="Soy Emprendedor/Empresario" url="https://forms.office.com/pages/responsepage.aspx?id=IefhmYRxjkmK_7KtTlPBwke8p-azwIdPkDYFCIUGxKZUOUQzVFdaUVBJS0E0N1pBRkIwQlVOVzJOSyQlQCN0PWcu"/>
            <RoleButton text="Soy Profesor" url="/"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
