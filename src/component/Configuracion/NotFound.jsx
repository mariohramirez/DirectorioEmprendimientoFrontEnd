import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <section className="banner relative flex flex-col justify-center items-center">
        <div className="w-[60vw] z-10 py-10 flex flex-col items-center">
          <div className="">
            <img
              src="/png/NotFound/10.png"
              alt="Not found"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <p className="z-10 text-black lg:text-m text-center mb-10">
            No podemos encontrar la página que estás buscando. Si escribiste la
            URL en tu navegador, por favor, verifica que esté escrita
            correctamente.
          </p>
          <button
            onClick={() => navigate("/")}
            className="flex items-center bg-[#026937] text-white
                        text-lg transition duration-300 ease-in-out hover:text-black"
            style={{ boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.7)" }}
            title="Ingresar"
            name="Ingrear"
          >
            <div className="mx-4 my-2 flex flex-row gap-[10px] items-center justify-center">
              {/*Icono de usuario usando material UI Icons*/}

              <span className="font-roboto-slab text-base">Regresar al inicio</span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
