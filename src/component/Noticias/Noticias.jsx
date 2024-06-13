import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import ListaNoticia from "./ListaNoticia";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { retrieveNovedades } from "../State/Novedades/Action";

const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
};

const Noticias = () => {
  const dispatch = useDispatch();
  const { novedades } = useSelector((store) => store.novedad);
  const [loading, setLoading] = useState(true); // Loading state
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredNovedad, setFilteredNovedad] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(retrieveNovedades()).then(() => setLoading(false)); // Set loading to false after fetching data
  }, [dispatch]);

  const slidesImages = [
    novedades[0]?.img_url,
    novedades[1]?.img_url,
    novedades[2]?.img_url,
  ];

  const slidesTexts = [
    novedades[0]?.descripcion,
    novedades[1]?.descripcion,
    novedades[2]?.descripcion,
  ];

  const slidesId = [novedades[0]?.id, novedades[1]?.id, novedades[2]?.id];

  const slidesCategoria = [
    novedades[0]?.categoria,
    novedades[1]?.categoria,
    novedades[2]?.categoria,
  ];

  const slidesTitulo = [
    novedades[0]?.titulo,
    novedades[1]?.titulo,
    novedades[2]?.titulo,
  ];

  const formattedSlidesTexts = slidesTexts.map((descripcion) =>
    descripcion
      ? new DOMParser().parseFromString(descripcion, "text/html").body.innerText
      : ""
  );

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
      ? novedades
          .filter((item) => item.categoria === selectedCategory)
          .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
      : novedades;
    setFilteredNovedad(filtered);
  }, [selectedCategory, novedades]);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = slidesImages.map((src) => preloadImage(src));
      await Promise.all(imagePromises);
      setLoading(false);
    };

    if (novedades.length) {
      loadImages();
    }
  }, [slidesImages, novedades]);

  if (loading) {
    return <div>Loading...</div>; // Show loading message or spinner
  }

  return (
    <div className="">
      <section className="relative flex flex-col justify-center items-center">
        <Carousel
          slides={slidesImages}
          autoSlide={true}
          textSlides={formattedSlidesTexts}
          idSlides={slidesId}
          categoriaSlides={slidesCategoria}
          tituloSlides={slidesTitulo}
        />

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
                onClick={() => handleClick("NOVEDAD")}
                className={`hover:border-b-2 border-[#026937] cursor-pointer ${
                  selectedCategory === "NOVEDAD" ? "border-b-2" : ""
                }`}
              >
                Novedades
              </span>
            </div>
            <span className="border-r-2 border-[#026937] px-10 ">
              <span
                onClick={() => handleClick("CONVOCATORIA")}
                className={`hover:border-b-2 border-[#026937] cursor-pointer ${
                  selectedCategory === "CONVOCATORIA" ? "border-b-2" : ""
                }`}
              >
                Convocatorias
              </span>
            </span>
            <div className="px-10">
              <span
                onClick={() => handleClick("EVENTO")}
                className={`hover:border-b-2 border-[#026937] cursor-pointer ${
                  selectedCategory === "EVENTO" ? "border-b-2" : ""
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
              <ListaNoticia key={item.id} novedad={item} />
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default Noticias;
