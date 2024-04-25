import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
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

  return (
    <div className="w-[80vw] z-10">
      <div className="mt-10  text-white">
        <div className="bg-[#026937] font-bold lg:text-2xl p-2 rounded-t-md">
          <span>Novedades</span>
        </div>
        <div className=" font-bold lg: relative flex flex-col justify-center items-center rounded-b-md">
          <div>
            <div className="overflow-hidden relative">
              <div
                className="flex transition-trasnform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
              >
                {slides}
              </div>
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prev}
                  className="p-1 rounded-full shadow bg-black/50 border-2 border-[#026937]  text-[#026937] hover:bg-[#026937] hover:text-white"
                >
                  <ChevronLeft size={500} />
                </button>
                <button
                  onClick={next}
                  className="p-1 rounded-full shadow bg-black/50 border-2 border-[#026937]  text-[#026937] hover:bg-[#026937] hover:text-white"
                >
                  <ChevronRight size={500} />
                </button>
              </div>
              <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                  {slides.map((_, index) => (
                    <div
                      className={`transition-all w-3 h-3 bg-[#026937] rounded-full
                    ${curr === index ? "p-2" : "bg-opacity-50"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <img
              className="w-[80vw] h-[20rem] object-cover z-10"
              src="/jpg/FotosMiniatura/fotoNoticia.jpg"
              alt="Foto"
            />
            <div className="absolute inset-y-[0rem] inset-x-[0rem] bg-[#026937] bg-opacity-50 w-full -z-10">
              <div
                className="absolute bg-white rounded-full w-[3rem] h-[3rem]
                   text-black inset-x-[2rem] inset-y-[9rem]"
              >
                Boton
              </div>
              <span className="text-5xl">Titulo novedad</span>
              <div
                className="absolute bg-white rounded-full w-[3rem] h-[3rem] inset-y-[9rem] inset-x-[15rem]
                   text-black lg: left-[60rem] right-96 end-4"
              >
                Boton
              </div>
              <div>Estados</div>
            </div>
          </div>
          <div className=" bg-[#026937] bg-opacity-50 py-4 text-center rounded-b-md lg:w-[80vw] px-10 z-20">
            <span className=" text-sm w-[60vw]">
              Lorem ipsum dolor sit amet consectetur. Leo sollicitudin ante
              curabitur accumsan sodales nibh. Sed purus tellus id aenean
              volutpat. Diam turpis convallis at ut fringilla elementum ornare
              sit. Viverra sagittis sapien mauris nibh. At tincidunt gravida
              dolor aliquet magna in praesent.{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
