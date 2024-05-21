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

const FormularioRegistroEmprendimiento = () => {
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
              Información sobre el emprendimiento o la empresa
            </span>
            <Formik
              initialValues={{
                nombre: "",
                servicios: "",
                formalizada: "",
                telefono: "",
                correo: "",
                redesSociales: "",
                sitioWeb: "",
                logo: "",
                tratamiento: "",
              }}
              onSubmit={handleSubmit}
              className="text-black"
            >
              <Form>
                <div>
                  <label>
                    Nombre del emprendimiento o la empresa (Visible en el
                    directorio)
                  </label>
                  <Field
                    required
                    as={CustomTextField}
                    name="nombre"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </div>
                <div>
                  <label>
                    Describe los productos/servicios que vendes (Visible en el
                    directorio)
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
                  <label>
                    Su emprendimiento/empresa está formalizada en Cámara de
                    Comercio
                  </label>
                  <Field
                    required
                    as={RadioGroup}
                    name="formalizada"
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
                  <label>
                    Teléfono de contacto de su emprendimiento/empresa (Visible
                    en el directorio)
                  </label>
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
                  <label>
                    Correo electrónico de su emprendimiento/empresa (Visible en
                    el directorio)
                  </label>
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
                    Usuarios de las redes sociales (Visible en el directorio)
                  </label>
                  <Field
                    required
                    as={CustomTextField}
                    name="redesSociales"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </div>
                <div>
                  <label>
                    Sitio web de su emprendimiento/empresa (Visible en el
                    directorio)
                  </label>
                  <Field
                    required
                    as={CustomTextField}
                    name="sitioWeb"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </div>
                <div>
                  <label>
                    Sube por favor el logo de tu emprendimiento en esta carpeta
                    https://bit.ly/LogosEmprendedoresING (Visible en el
                    directorio)
                  </label>
                  <Field
                    required
                    as={RadioGroup}
                    name="logo"
                    defaultValue="Si"
                  >
                    <FormControlLabel
                      value="No"
                      control={<StyledRadio />}
                      label="No tengo logo"
                    />
                    <FormControlLabel
                      value="Ya"
                      control={<StyledRadio />}
                      label="Ya subí el logo"
                    />
                    <FormControlLabel
                      value="No pude subirlo"
                      control={<StyledRadio />}
                      label="No pude subirlo"
                    />
                  </Field>
                </div>
                <div>
                  <label>
                    Con el envío de este formulario acepto el tratamiento de
                    datos personales conforme al Manual de Política de
                    Tratamiento de Información y Protección de Datos Personales
                    de la Universidad de Antioquia
                    <a
                      className="pl-2"
                      href="https://www.udea.edu.co/wps/wcm/connect/udea/dc0dcdc5-eb39-4a97-b440-3b52a5492380/criterios.pdf?MOD=AJPERES"
                    >
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
                  >
                    Enviar
                  </Button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormularioRegistroEmprendimiento;
