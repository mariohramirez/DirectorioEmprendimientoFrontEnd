import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

function Carousel({
  slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  textSlides,
  idSlides,
  categoriaSlides,
  tituloSlides,
}) {
  const [curr, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const handleNavigation = () => {
    console.log("idSlides", idSlides[curr]);
    window.location.href = `/novedades/${categoriaSlides[curr]}/${tituloSlides[curr]}/${idSlides[curr]}`;
    // window.location.href = `/novedades/${idSlides[curr]}`;
  };

  return (
    <div className="w-[80vw] z-10">
      <div className="mt-10  text-white">
        <div className="bg-[#026937] font-bold lg:text-2xl p-2 rounded-t-md">
          <span>Novedades</span>
        </div>
        <div
          className=" font-bold lg: relative flex flex-col justify-center items-center rounded-b-md"
        >
          <div>
            <div className="overflow-hidden relative w-[80vw] h-[25rem]">
              <div
                className="flex transition-trasnform ease-out duration-500 "
                style={{ transform: `translateX(-${curr * 100}%)` }}
              >
                {slides.map((slide) => (
                  <img className="object-cover" src={slide} />
                ))}{" "}
              </div>
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prev}
                  className=" z-50 p-1 rounded-full shadow bg-black/50 border-2 border-[#026937]  text-[#026937] hover:bg-[#026937] hover:text-white"
                >
                  <ChevronLeft size={500} />
                </button>
                <button
                  onClick={next}
                  className=" z-50 p-1 rounded-full shadow bg-black/50 border-2 border-[#026937]  text-[#026937] hover:bg-[#026937] hover:text-white"
                >
                  <ChevronRight size={500} />
                </button>
              </div>
              <div className="absolute bottom-20 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                  {slides.map((_, index) => (
                    <div
                      className={`transition-all w-3 h-3 bg-[#026937] rounded-full
                    ${curr === index ? "p-2" : "bg-opacity-50"}`}
                    />
                  ))}
                </div>
              </div>
              <div  onClick={handleNavigation} className="absolute bottom-0 right-0 left-0 cursor-pointer">
                <div className=" bg-[#026937] bg-opacity-50 py-4 text-center rounded-b-md lg:w-[80vw] px-10 z-20">
                  <div className="text-sm">{textSlides[curr]}</div>
                </div>
              </div>
            </div>
            {/*<img
              className="w-[80vw] h-[20rem] object-cover z-10"
              src="/jpg/FotosMiniatura/fotoNoticia.jpg"
              alt="Foto"
            />*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
