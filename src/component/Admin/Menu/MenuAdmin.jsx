import React from "react";
import { Link } from "react-router-dom";
import { menu } from "./data";

const MenuAdmin = () => {
  return (
    <div className="bg-[#026937] w-[250px] py-[5px] px-[20px] border-r-[1px] border-[#026937]/50">
      {menu.map((item) => (
        <div className="flex flex-col gap-[10px] mb-[20px]" key={item.key}>
          <span className=" text-[12px] font-[200]">{item.title}</span>
          {item.listItems.map((listItem) => (
          <Link
            to={listItem.to}
            className="flex items-center gap-[10px] p-[10px] rounded-[5px] hover:bg-[#8DC63F]/50"
            key={listItem.id}
          >
            <span>{listItem.title}</span>
          </Link>))}
        </div>
      ))}
    </div>
  );
};

export default MenuAdmin;
