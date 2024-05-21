import React from "react";

export const Footer = () => {
  return (
    <footer className="font-medium text-md bg-[#026937] min-w-[100vw]">
      <div className="py-8 px-8 text-prelude flex flex-col items-center justify-center gap-2">
        <p>Unidad de Innovación - Facultad de Ingeniería - Universidad de Antioquia</p>
        <p>Medellín - Colombia | Dirección: Calle 67 #53-108 | Oficina: 21-125  </p>
        <p>Desarrollado por Mario Humberto Ramirez y Felipe de Jesús Correa</p>
        <span>
          {new Date().getFullYear()}&copy; Unidad de Innovación - Facultad de Ingeniería
        </span>
      </div>
    </footer>
  );
};

export default Footer;
