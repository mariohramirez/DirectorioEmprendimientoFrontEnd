import React from "react";
import Carousel from "./Carousel";
import ListaNoticia from "./ListaNoticia";
import { novedad } from "./Novedad";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
{
  /*Arreglo de imagenes a partir de las cuales se crean las slides*/
}
const slides = [
  "/jpg/FotosMiniatura/fotoNoticia.jpg",
  "/jpg/FotosMiniatura/fotoNoticia.jpg",
  "/jpg/FotosMiniatura/fotoNoticia.jpg",
];
const Noticias = () => {
  const slidesTexts = [
    novedad[0].resumen,
    novedad[1].resumen,
    novedad[2].resumen,
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredNovedad, setFilteredNovedad] = useState([]);
  const navigate = useNavigate();

  const handleClick = (category) => {
    setSelectedCategory(category);
    navigate(`/novedades?categoria=${category}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoria = params.get("categoria");
    setSelectedCategory(categoria);
  }, []);

  useEffect(() => {
    const filtered = selectedCategory
      ? novedad
          .filter((item) => item.categoria === selectedCategory)
          .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
      : novedad;
    setFilteredNovedad(filtered);
  }, [selectedCategory]);

  return (
    <div className="">
      <section className="relative flex flex-col justify-center items-center">
        <Carousel slides={slides} autoSlide={true} textSlides={slidesTexts} />

        <div
          className=" p-5 my-10 flex flex-col justify-center items-center 
        text-[#026937] text-4xl font-bold border-t-2 border-b-2 border-[#026937] w-[80vw]"
        >
          <div className="flex flex-row justify-evenly">
            <div className="border-r-2 border-[#026937] px-10">
              <span
                onClick={() => handleClick(null)}
                className={`hover:border-b-2 border-[#026937] cursor-pointer ${
                  selectedCategory === null ? "border-b-2" : ""
                }`}
              >
                Todas
              </span>
            </div>
            <div className="border-r-2 border-[rgb(2,105,55)] px-10 ">
              <span
                onClick={() => handleClick("Novedad")}
                className={`hover:border-b-2 border-[#026937] cursor-pointer ${
                  selectedCategory === "Novedad" ? "border-b-2" : ""
                }`}
              >
                Novedades
              </span>
            </div>
            <span className="border-r-2 border-[#026937] px-10 ">
              <span
                onClick={() => handleClick("Convocatoria")}
                className={`hover:border-b-2 border-[#026937] cursor-pointer ${
                  selectedCategory === "Convocatoria" ? "border-b-2" : ""
                }`}
              >
                Convocatorias
              </span>
            </span>
            <div className="px-10">
              <span
                onClick={() => handleClick("Evento")}
                className={`hover:border-b-2 border-[#026937] cursor-pointer ${
                  selectedCategory === "Evento" ? "border-b-2" : ""
                }`}
              >
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
            filteredNovedad.map((item) => (
              <ListaNoticia novedad={item} />
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default Noticias;
