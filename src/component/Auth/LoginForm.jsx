import { Button, Typography } from "@mui/material";
import React from "react";
import { Formik, Form } from "formik";

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Iniciar Sesión
      </Typography>
      <Formik>
        <Form>
          <Field
            as={TextFlied}
            name="correo"
            label="Correo"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextFlied}
            name="contraseña"
            label="Contraseña"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Button
            sx={{ mt: 2, padding: "" }}
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
