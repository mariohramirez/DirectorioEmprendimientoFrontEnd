import React from "react";
import RoleButton from "./RoleButton";

const Home = () => {
  return (
    <div className="">
      <section className="banner relative flex flex-col justify-center items-center">
        <div className="w-[80vw] z-10 text-center">
          <p className="text-2xl text-black lg:text-5xl font-bold z-10 py-10">
            Unidad de innovación de la Facultad de ingenieria
          </p>
          <p className="z-10 text-black lg:text-m">
            Lorem ipsum dolor sit amet consectetur. Sed enim sem ullamcorper
            dictumst feugiat gravida adipiscing eu purus. Eget sit odio faucibus
            aliquam dictumst arcu. Diam nunc tincidunt tincidunt nec vitae.
            Aliquam turpis enim magna sed eu etiam purus congue. Est sit sed a
            massa. In nisi ultrices vulputate pulvinar in sed adipiscing semper.
            Nulla porttitor vestibulum tincidunt ut amet magna. Morbi at diam
            cras et sit nisl ultrices. Cursus tristique ultricies a ultrices nam
            velit elit sollicitudin. Pellentesque suscipit nulla maecenas eu et.
            Etiam eu mus aliquam tortor bibendum senectus neque est. Sapien
            viverra ut vitae amet vitae. Eu libero adipiscing rutrum elementum
            sem nulla rutrum. Dui cras mi eu nibh diam vitae aenean elit. Sed
            sit cursus quis ut faucibus vitae praesent velit. Lectus augue
            viverra sit gravida neque. Convallis cursus ipsum in velit. Orci
            vitae quam sed donec rhoncus egestas. Ultricies iaculis sagittis
            convallis tellus lacus. Quisque fermentum dictumst aliquam justo
            nisi erat sed. Pellentesque amet eget ac lacus faucibus nunc eu.
            Ullamcorper id arcu maecenas dignissim montes.
          </p>
          <div className="bg-[#3EBDAC] py-[80px] mt-10">
            <span className="font-bold lg:text-5xl">
              Ruta del emprendimiento
            </span>
          </div>
          <div className="flex flex-row gap-[20px] justify-between py-10">
            <RoleButton text="Quiero Emprender" />
            <RoleButton text="Soy Emprendedor/Empresario" />
            <RoleButton text="Soy Profesor" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
