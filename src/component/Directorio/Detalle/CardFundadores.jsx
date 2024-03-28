import { Card } from "@mui/material";
import React from "react";
import { LinkedIcon } from "../../Iconos";
import { motion } from "framer-motion";

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
            <div className=" bg-slate-500 rounded-full w-[55px] h-[55px]">
              <img
                className="rounded-t-md"
                src="/png/Logos/logoipsum-300.png"
                alt="Logo"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Nombre del fundador</p>
              <p>Cargo</p>
              <nav className="flex flex-row gap-10">
                <motion.a
                  href="https://www.linkedin.com"
                  target="_blank"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-7"
                >
                  <LinkedIcon />
                </motion.a>
              </nav>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CardFundadores;
