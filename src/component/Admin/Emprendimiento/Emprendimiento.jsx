import React from "react";
import Single from "../single/Single";
import MenuAdmin from "../Menu/MenuAdmin";
import { emprendimiento } from "./data";

const Emprendimiento = () => {
  return (
    <div className=" relative flex">
      <MenuAdmin />
      <div className="text-black w-[81vw]">
        <Single emprendimiento={emprendimiento}/>
      </div>
    </div>
  );
};

export default Emprendimiento;
