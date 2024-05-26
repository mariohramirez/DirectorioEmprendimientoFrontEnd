import React from "react";
import { useNavigate } from "react-router-dom";

const FormularioGuardado = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <section className="banner relative flex flex-col justify-center items-center">
        <div className="w-[60vw] z-10 py-10 flex flex-col items-center">
          <div className=" mb-10">
            <img
              src="/svg/Registro/Startup.svg"
              alt="Not found"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <p className="z-10 text-black lg:text-m text-center mb-10">
            ¡Se ha guardado exitosamente la información!, pronto la Unidad de Innovación de la Facultad de Ingeniería (UIFI) se pondrá en contacto con usted para continuar el proceso de registro. Cualquier duda que tengas, puedes escribirla al correo: emprendimiento.ing@udea.edu.co 
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

export default FormularioGuardado;
