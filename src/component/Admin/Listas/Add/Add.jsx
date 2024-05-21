import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Typography } from "@mui/material";

const Add = ({ slug, columns, setOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    //Agregar nuevo emprendimiento
  };

  return (
    <div className="z-50 w-[100%] h-[100%] absolute top-0 left-0 bg-[#026937]/50 flex items-center justify-center">
      <div className="p-[50px] bg-[#242B2E] relative">
        <span
          className=" cursor-pointer absolute top-[10px] right-[10px]"
          onClick={() => setOpen(false)}
        >
          X
        </span>
        {/*<h1 className="mb-[40px] text-[24px]">Agregar nuevo {slug}</h1>
        <form className="flex flex-wrap max-w-[500px] justify-between">
          {/*columns
            .filter((column) => column.field !== "id")
            .map((column) => (
              <div
                className="flex flex-col gap-[10px] mb-[20px]"
                key={column.field}
              >
                <label className=" text-[14px]">{column.headerName}</label>
                <input
                  className=" p-[10px] bg-transparent text-white outline-none border-[1px] border-solid border-white"
                  type={column.type}
                  placeholder={column.field}
                />
              </div>
            ))
          <button>Guardar</button>
        </form>*/}
        <Typography variant="h5" className="text-center">
          Agregar nuevo {slug}
        </Typography>
        <Formik onSubmit={handleSubmit}>
          <Form className="flex flex-wrap max-w-[500px] justify-between text-black">
            {columns
              .filter((column) => column.field !== "id")
              .map((column) => (
                <div className="w-[45%]">
                  {console.log("Columnaaaa: ",column.field," Tipo: ",column.type)}
                  <Field
                    as={TextField}
                    name={column.headerName}
                    label={column.headerName}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </div>
              ))}
            <div className="w-[100%]">
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
                Guardar
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Add;
