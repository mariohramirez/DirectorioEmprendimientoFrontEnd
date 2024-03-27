import { Card } from "@mui/material";
import React from "react";
import { WhatsAppIcon, LinkedIcon } from "../../Iconos";
const fundadores = [1, 1, 1];
const CardFundadores = () => {
  return (
    <Card
      className="shadow-md rounded-lg  w-[17rem] "
      style={{ backgroundColor: "white" }}
    >
      <div className="relative bg-[#8DC63F] py-4 flex flex-col justify-between items-center">
        <p className=" font-semibold text-lg">Fundadores</p>
      </div>
      <div className="bg-[#026937] p-4 textPart lg:flex flex-col gap-5">
        {fundadores.map((item) => (
          <div className="flex flex-row justify-center items-center gap-5">
            <div className=" bg-slate-500 rounded-full w-[50px] h-[50px]">
              <img
                className="rounded-t-md"
                src="/png/Logos/logoipsum-300.png"
                alt="Logo"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Nombre del fundador</p>
              <p>Cargo</p>
              <span className=" w-5">
                <LinkedIcon />
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CardFundadores;
