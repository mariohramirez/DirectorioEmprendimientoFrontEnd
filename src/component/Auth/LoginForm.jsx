import { TextField, Button, Typography } from "@mui/material";
import React, { use, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../State/Authentication/Action";
import { useSelector } from "react-redux";

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
      window.location.reload();
    }
  }, [isAuthenticated, navigate]);
  
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(loginUser({userData: values}));
  };

  return (
    <div >
      <Typography variant="h5" className="text-center">
        Iniciar Sesión
      </Typography>
      <Formik  onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className="flex flex-col gap-5 justify-center items-center text-black mt-5">
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
          <Button
            sx={{padding: "1rem", backgroundColor: "#026937", color: "white"}}
            fullWidth
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
