import { TextField, Button, Typography } from "@mui/material";
import React from "react";
import { Formik, Form, Field } from "formik";

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  
  const handleSubmit = () => {};

  return (
    <div >
      <Typography variant="h5" className="text-center">
        Iniciar Sesión
      </Typography>
      <Formik  onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className="flex flex-col gap-5 justify-center items-center text-black mt-5">
          <Field
            as={TextField}
            name="correo"
            label="Correo"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="contraseña"
            label="Contraseña"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Button
            sx={{padding: "1rem", backgroundColor: "#026937", color: "white"}}
            fullWdith
            type="submit"
            variant="contained"
          >
            Iniciar Sesion
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
