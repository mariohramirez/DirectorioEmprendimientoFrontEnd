import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import MenuAdmin from "../../Menu/MenuAdmin";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <section className="relative flex">
      <MenuAdmin />
      <div className="relative flex flex-col w-[80vw] p-2">
        <input
          type="text"
          placeholder="Titulo"
          className="border-[1px] border-solid border-black ml-[50px] pl-[10px] my-[50px]  text-[64px] rounded-none outline-none bg-white text-black"
        />
        <div>
          <span className="text-black pl-[50px]">Categoria: </span>
          <select
            className="mb-[50px] pt-[10px] ml-[50px] text-black"
            style={{ width: "max-content" }}
          >
            <option value="Novedad">Novedades</option>
            <option value="Evento">Eventos</option>
            <option value="Convocatoria">Convocatorias</option>
          </select>
        </div>
        <div className="flex gap-[20px] h-[700px] relative">
          <button
            onClick={() => setOpen(!open)}
            className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-[1px] border-solid border-black flex items-center justify-center cursor-pointer"
          >
            <img src="" alt="" width={16} height={16} />
          </button>
          {open && (
            <div className="flex gap-[20px] bg-slate-500 absolute z-[999] w-[20%] left-[50px]">
              <input type="file" id="image" style={{ display: "none" }} />
              <button className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-[1px] border-solid border-black flex items-center justify-center cursor-pointer">
                <label htmlFor="image">
                  <img src="" alt="" width={16} height={16} />
                </label>
              </button>
              <button className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-[1px] border-solid border-black flex items-center justify-center cursor-pointer">
                <img src="" alt="" width={16} height={16} />
              </button>
              <button className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-[1px] border-solid border-black flex items-center justify-center cursor-pointer">
                <img src="" alt="" width={16} height={16} />
              </button>
            </div>
          )}
          <ReactQuill
            className="w-[100%] h-[90%] text-black border-[1px] border-solid border-black rounded-none outline-none bg-white"
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Escribe tu novedad"
          />
        </div>
        <button></button>
      </div>
    </section>
  );
};

export default WritePage;
