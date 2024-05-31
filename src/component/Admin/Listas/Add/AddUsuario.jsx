import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { createUser } from "../../../State/Authentication/Action";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  rol: "ROL_ADMIN",
};

const AddUsuario = ({ slug, setOpen }) => {
  const dispatch = useDispatch();
  

  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(createUser({ userData: values }));
    setMensaje("Usuario creado correctamente");
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
        <Typography variant="h5" className="text-center">
          Agregar nuevo {slug}
        </Typography>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <Form className="flex flex-wrap max-w-[400px] justify-between text-black">
            <Field
              as={TextField}
              required
              name="fullName"
              label="Nombre"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <Field
              as={TextField}
              required
              name="email"
              label="Correo"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <Field
              as={TextField}
              required
              name="password"
              label="Contraseña"
              type="password"
              fullWidth
              variant="outlined"
              margin="normal"
            />

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
        {mensaje && (
          <Typography
            variant="h6"
            className="text-center mt-4"
            style={{ color: "green" }}
          >
            {mensaje}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default AddUsuario;
