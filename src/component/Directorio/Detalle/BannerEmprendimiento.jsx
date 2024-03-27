import React from "react";

{/*Banner para cada uno de los emprendimientos, el primer div contiene la imagen que servira
de banner, el segundo contiene el logo, centrado en el medio de la imagen, los valores
inset permiten mover el logo por fuera del div que lo contiene*/}
const BannerEmprendimiento = () => {
  return (
    
    <div className="relative w-[84vw] bg-blue-300">
      <img
        className="w-full h-[15rem] rounded-t-md object-cover"
        src="/jpg/FotosMiniatura/fotoNoticia.jpg"
        alt="Foto"
      />
      <div
        className="absolute inset-y-[11rem] inset-x-[45%] right-0 w-[7rem] h-[7rem]
       bg-white rounded-full flex flex-row items-center justify-center"
      >
        <img
          className="w-[80%]"
          src="/png/Logos/logoipsum-300.png"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default BannerEmprendimiento;
