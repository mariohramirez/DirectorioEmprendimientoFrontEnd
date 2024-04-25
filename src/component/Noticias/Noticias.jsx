import React from "react";
import FiltroNoticia from "./FiltroNoticia";
import CardNoticia from "./CardNoticia";
import Carousel from "./Carousel";
import ListaNoticia from "./ListaNoticia";

{
  /*Arreglo de emprendimientos a partir de los cuales se crean las cards*/
}
const slides = [
  "/jpg/FotosMiniatura/fotoNoticia.jpg",
  "/jpg/FotosMiniatura/fotoNoticia.jpg",
  "/jpg/FotosMiniatura/fotoNoticia.jpg",
];
const noticias = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const filtro = [1, 1];
const Noticias = () => {
  return (
    <div className="">
      <section className="relative flex flex-col justify-center items-center">
        <Carousel autoSlide={true}>
          {slides.map((slide) => (
            <img className="w-[80vw]" src={slide} />
          ))}
        </Carousel>
        <div
          className=" p-5 my-10 flex flex-col justify-center items-center 
        text-[#026937] text-4xl font-bold border-t-2 border-b-2 border-[#026937] w-[80vw]"
        >
          <div className="flex flex-row  justify-evenly">
            <div className=" border-r-2 border-[#026937] px-10">
              <span className="hover:border-b-2 border-[#026937] cursor-pointer">
                Todas
              </span>
            </div>
            <div className=" border-r-2 border-[#026937] px-10 ">
              <span className="hover:border-b-2 border-[#026937] cursor-pointer">
                Novedades
              </span>
            </div>
            <span className=" border-r-2 border-[#026937] px-10">
              <span className="hover:border-b-2 border-[#026937] cursor-pointer">
                Convocatorias
              </span>
            </span>
            <div className=" px-10">
              <span className="hover:border-b-2 border-[#026937] cursor-pointer">
                Eventos
              </span>
            </div>
          </div>
        </div>
      </section>
      {/*Seccion con las card de los emprendimientos*/}
      <section className="relative flex flex-col justify-center items-center">
        {/*Div realizado para la totalidad de las cartas*/}
        <div className="flex flex-col items-center justify-around gap-5 py-10 px-[50px]">
          {
            /*Mapeo de las noticias donde cada item crea una card de noticia*/
            noticias.map((item) => (
              <ListaNoticia />
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default Noticias;
