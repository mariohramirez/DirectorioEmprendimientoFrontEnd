import React from "react";

const RoleButton = ({ text }) => {
    return (
        <button
            className="flex items-center bg-[#137598] text-white rounded-lg 
                        text-lg transition duration-700 ease-in-out hover:bg-[#0e7774] hover:text-slate-500"
            style={{ boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.7)" }}
        >
            <div className="mx-4 my-2 flex flex-row gap-[10px] items-center justify-center">
                <span className="font-roboto-slab mx-4 my-2 font-semibold">
                    {text}
                </span>
            </div>
        </button>
    )

}

export default RoleButton;