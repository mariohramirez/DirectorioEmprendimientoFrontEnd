import { Formik, Form, Field } from "formik";
import React from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
} from "@mui/material";
import styled from "@mui/material/styles/styled";
import { useNavigate } from "react-router-dom";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    color: "black",
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "#026937",
    },
    "& input": {
      color: "black",
    },
  },
});

const StyledRadio = styled(Radio)({
  // Estilos personalizados
  color: "black",
});

const FormularioRegistroIndependiente = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(values);
    navigate(`/servicios/formulario/Registro/Guardado`);

  };

  return (
    <>
      {" "}
      <section className="banner relative flex flex-col justify-center items-center  text-black">
        <div className="w-[80vw] z-10">
          <p className="text-2xl text-black lg:text-5xl font-bold z-10 py-10 text-center">
            Directorio de emprededores y empresarios de la Facultad de
            Ingeniería
          </p>
          <div className="flex flex-col py-2 mb-2">
            <span className="text-2xl">
              Información del profesional independiente
            </span>
            <Formik
              initialValues={{
                servicios: "",
                correo: "",
                telefono: "",
                tratamiento: "",
              }}
              onSubmit={handleSubmit}
              className="text-black"
            >
              <Form>
                <div>
                  <label>
                    Cuáles son los servicios que prestas en calidad de
                    profesional independiente (Visible en el directorio)
                  </label>
                  <Field
                    required
                    as={CustomTextField}
                    name="servicios"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </div>
                <div>
                  <label>Teléfono de contacto (Visible en el directorio)</label>
                  <Field
                    required
                    as={CustomTextField}
                    name="telefono"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </div>
                <div>
                  <label>Correo electrónico (Visible en el directorio)</label>
                  <Field
                    required
                    as={CustomTextField}
                    name="correo"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </div>
                <div>
                  <label>
                    Con el envío de este formulario acepto el tratamiento de
                    datos personales conforme al Manual de Política de
                    Tratamiento de Información y Protección de Datos Personales
                    de la Universidad de Antioquia
                    <a className="pl-2" href="https://www.udea.edu.co/wps/wcm/connect/udea/dc0dcdc5-eb39-4a97-b440-3b52a5492380/criterios.pdf?MOD=AJPERES">
                      https://bit.ly/PolíticaDatosUdeA
                    </a>
                    , la Ley 1581 de 2012 y sus decretos reglamentarios
                  </label>
                  <Field
                    required
                    as={RadioGroup}
                    name="tratamiento"
                    defaultValue="Si"
                  >
                    <FormControlLabel
                      value="Si"
                      control={<StyledRadio />}
                      label="Si"
                    />
                    <FormControlLabel
                      value="No"
                      control={<StyledRadio />}
                      label="No"
                    />
                  </Field>
                </div>
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
                  >Enviar</Button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormularioRegistroIndependiente;
