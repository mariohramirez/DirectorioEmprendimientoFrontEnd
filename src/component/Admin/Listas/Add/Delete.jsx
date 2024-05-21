import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Typography } from "@mui/material";

const Delete = ({ slug, columns, setOpen }) => {
  const handleDelete = () => {

    //Agregar nuevo emprendimiento
  };

  return (
    <div className="z-50 w-[100%] h-[100%] absolute top-0 left-0 bg-[#026937]/50 flex items-center justify-center">
      <div className="p-[50px] bg-[#242B2E] relative">
        <Typography variant="h5" className="text-center">
          Advertencia!
        </Typography>
        <div>
        <Button
          sx={{
            padding: "1rem",
            backgroundColor: "#026937",
            color: "white",
            width: "100%",
          }}
          fullWdith
          type="submit"
          variant="contained"
        >
          Eliminar{" "}
        </Button>
        <Button
          className=" cursor-pointer absolute top-[10px] right-[10px]"
          onClick={() => setOpen(false)}
        >
          Cancelar
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
