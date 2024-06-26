import React from "react";

const TipoServicioCard = ({ title, text }) => {
  return (
    <div
      className={`text-black block relative p-0.5 md:max-w-[24rem] 
      rounded-br-[2rem] rounded-tl-[2rem] rounded-tr-[7rem] rounded-bl-[7rem] 
      shadow-lg shadow-black/50 border border-[#026937] hover:shadow-2xl transition duration-200 ease-in-out`}
    >
      <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
        <h5 className="h5 mb-5 text-2xl  font-bold text-[#026937]">{title}</h5>
        <p className="body-2 mb-6 text-n-3">{text}</p>
        <div className="flex items-center mt-auto">
          <p
            className={`text-[#026937] ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer z-10`}
          >
            Explorar mas
          </p>
        </div>
      </div>

      <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />

      <div
        className="absolute inset-0.5 bg-n-8"
        style={{ clipPath: "url(#benefits)" }}
      >
        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 duration-200 ease-in">
          {/*<img
            src="/png/Logos/logoipsum-300.png"
            width={380}
            height={362}
            className="w-full h-full object-cover"
  />*/}
        </div>
      </div>
    </div>
  );
};

export default TipoServicioCard;
