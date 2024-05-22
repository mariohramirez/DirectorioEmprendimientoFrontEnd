import { Formik, Form, Field } from "formik";
import React from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import styled from "@mui/material/styles/styled";
import { useState } from "react";
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

const StyledSelect = styled(Select)({
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

const FormularioRegistroEmprendedor = () => {
  const [vinculo, setVinculo] = useState("Externo");
  const [rol, setRol] = useState("");

  const handleVinculoChange = (event) => {
    setVinculo(event.target.value);
  };

  const handleRolChange = (event) => {
    setRol(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(values);
    switch (values.rol) {
      case "Emprendedor":
        navigate(`/servicios/formula rio/Registro/Emprendimiento`);
        break;
      case "Empresario":
        navigate(`/servicios/formulario/Registro/Emprendimiento`);
        break;
      case "Independiente":
        navigate(`/servicios/formulario/Registro/Profesional`);
        break;
      default:
        navigate(`/servicios/formulario/Registro/Emprendimiento`);
        break;
    }
  };

  return (
    <div className="">
      <section className="banner relative flex flex-col justify-center items-center  text-black w-[100vw]">
        <div className="w-[80vw] z-10">
          <p className="text-2xl text-black lg:text-5xl font-bold z-10 py-10 text-center">
            Directorio de emprededores y empresarios de la Facultad de
            Ingeniería
          </p>
          <div className="flex flex-col py-2 lg:text-m text-justify">
            <span>
              Esta iniciativa nos permite identificar, conectar y apoyar a los
              emprendedores de la Facultad. Te invitamos a registrarte y hacer
              parte de nuestra comunidad.
            </span>
            <br />
            <span>
              Beneficios por integrar la comunidad de emprendedores de la
              Facultad:{" "}
            </span>
            <br />
            <ul>
              <li>
                🔹 Visibilidad en el directorio alojado en el portal
                institucional https://bit.ly/DirectorioEmprendedoresING{" "}
              </li>
              <li>🔹 Formación en temas de emprendimiento e innovación. </li>
              <li>
                🔹 Acompañamiento para fortalecer tu emprendimiento o empresa{" "}
              </li>
              <li>
                🔹 Te ayudamos conectar con el ecosistema de emprendimiento{" "}
              </li>
              <li>
                🔹 Estar al tanto de las convocatorias y oportunidades para los
                emprendedores{" "}
              </li>
              <li>🔹 Networking </li>
              <li>
                🔹 Conocer a otros emprendedores que puedan ser tus proveedores
                o clientes.
              </li>
            </ul>
            <br />
            <span>
              Nota: Te indicaremos los campos o la información que será visible
              en el directorio{" "}
            </span>
            <br />
            <span>
              ⚠️ La Facultad de Ingeniería apoya la visibilidad de sus
              emprededores y unidades productivas previa verificación de la
              información aquí registrada, esto sin obtener beneficios
              económicos por dicha labor. Cabe destacar que las relaciones o
              transacciones comerciales que puedan surgir como resultado de esta
              Directorio serán responsabilidad exclusiva del emprendedor y la
              parte que lo haya contactado. La Facultad no asume responsabilidad
              alguna en este contexto.{" "}
            </span>
            <br />
            <span>
              Esta es una iniciativa de la Unidad de Innovación, con el apoyo
              del Programa de Egresados y la Unidad de Comunicaciones de la
              Facultad de Ingeniería.{" "}
            </span>
            <br />
            <span>
              Cualquier inquietud o recomendación puedes hacerla llegar a
              emprendimiento.ing@udea.edu.co
            </span>
          </div>
          <div className="flex flex-col py-2 mb-2">
            <span className="text-2xl">
              Información del emprendedor, empresario o profesional
              independiente
            </span>
            <br />
            <span>
              Este directorio es exclusivo para personas que tienen vínculo con
              la Facultad de Ingeniería de la Universidad de Antioquia
            </span>
            <Formik
              initialValues={{
                nombreCompleto: "",
                tipoDocumento: "",
                numeroDocumento: "",
                correo: "",
                telefono: "",
                vinculo: "Externo",
                dependencia: "",
                tipoPrograma: "",
                programa: "",
                rol: "",
              }}
              onSubmit={handleSubmit}
              className="text-black"
            >
              <Form>
                <div>
                  <label>Nombre completo</label>
                  <Field
                    required
                    as={CustomTextField}
                    name="nombreCompleto"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </div>
                <div>
                  <label>Tipo de documento</label>
                  <Field
                    required
                    as={RadioGroup}
                    name="tipoDocumento"
                    defaultValue="Cedula"
                  >
                    <FormControlLabel
                      value="Cedula"
                      control={<StyledRadio />}
                      label="Cédula de ciudadania"
                    />
                    <FormControlLabel
                      value="Tarjeta"
                      control={<StyledRadio />}
                      label="Tarjeta de Identidad"
                    />
                  </Field>
                </div>
                <div>
                  <label>Numero de Documento</label>
                  <Field
                    required
                    as={CustomTextField}
                    name="numeroDocumento"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </div>
                <div>
                  <label>Correo electronico del emprendedor</label>
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
                  <label>Telefono de contacto</label>
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
                  <label>Vinculo con la Facultad</label>
                  <Field
                    required
                    as={RadioGroup}
                    name="vinculo"
                    value={vinculo}
                    defaultValue="Externo"
                    onChange={handleVinculoChange}
                  >
                    <FormControlLabel
                      value="Estudiante"
                      control={<StyledRadio />}
                      label="Estudiante"
                    />
                    <FormControlLabel
                      value="Egresado"
                      control={<StyledRadio />}
                      label="Egresado"
                    />
                    <FormControlLabel
                      value="Docente"
                      control={<StyledRadio />}
                      label="Docente"
                    />
                    <FormControlLabel
                      value="Administrativo"
                      control={<StyledRadio />}
                      label="Administrativo"
                    />
                    <FormControlLabel
                      value="Externo"
                      control={<StyledRadio />}
                      label="Externo"
                    />
                  </Field>
                </div>
                {vinculo !== "Externo" && (
                  <>
                    {(vinculo === "Administrativo" ||
                      vinculo === "Docente") && (
                      <div>
                        <label>Dependencia en la que trabaja</label>
                        <Field
                          required
                          as={CustomTextField}
                          name="dependencia"
                          fullWidth
                          variant="outlined"
                          margin="normal"
                        />
                      </div>
                    )}

                    <div>
                      <label>Tipo de programa academico</label>
                      <Field
                        required
                        as={RadioGroup}
                        name="tipoPrograma"
                        defaultValue="Pregrado"
                      >
                        <FormControlLabel
                          value="Pregrado"
                          control={<StyledRadio />}
                          label="Pregrado"
                        />
                        <FormControlLabel
                          value="Posgrado"
                          control={<StyledRadio />}
                          label="Posgrado"
                        />
                      </Field>
                    </div>
                    <div>
                      <label>Programa academico</label>
                      <Field
                        required
                        as={StyledSelect}
                        name="programa"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                      >
                        <MenuItem value="Bioingeniería">Bioingeniería</MenuItem>
                        <MenuItem value="Ingeniería Aeroespacial">
                          Ingenieria Aeroespacial
                        </MenuItem>
                        <MenuItem value="Ingeniería Agroindustrial">
                          Ingenieria Agroindustrial
                        </MenuItem>
                        <MenuItem value="Ingeniería Ambiental">
                          Ingenieria Ambiental
                        </MenuItem>
                        <MenuItem value="Ingeniería Bioquímica">
                          Ingenieria Bioquímica
                        </MenuItem>
                        <MenuItem value="Ingeniería Civil">
                          Ingenieria Civil
                        </MenuItem>
                        <MenuItem value="Ingeniería Energética">
                          Ingenieria Energética
                        </MenuItem>
                        <MenuItem value="Ingeniería Eléctica">
                          Ingenieria Eléctrica
                        </MenuItem>
                        <MenuItem value="Ingeniería Electrónica">
                          Ingenieria Electrónica
                        </MenuItem>
                        <MenuItem value="Ingeniería Industrial">
                          Ingenieria Industrial
                        </MenuItem>
                        <MenuItem value="Ingeniería de Materiales">
                          Ingenieria de Materiales
                        </MenuItem>
                        <MenuItem value="Ingeniería Mecánica">
                          Ingenieria Mecánica
                        </MenuItem>
                        <MenuItem value="Ingeniería de Oceanográfica">
                          Ingenieria de Oceanográfica
                        </MenuItem>
                        <MenuItem value="Ingeniería Química">
                          Ingenieria Química
                        </MenuItem>
                        <MenuItem value="Ingeniería Sanitaria">
                          Ingenieria Sanitaria
                        </MenuItem>
                        <MenuItem value="Ingeniería de Sistemas">
                          Ingenieria de Sistemas
                        </MenuItem>
                        <MenuItem value="Ingeniería de Telecomunicaciones">
                          Ingenieria de Telecomunicaciones
                        </MenuItem>
                        <MenuItem value="Ingeniería Urbana">
                          Ingenieria Urbana
                        </MenuItem>
                        <MenuItem value="Tecnología Agroindustrial">
                          Tecnología Agroindustrial
                        </MenuItem>
                        <MenuItem value="Tecnología Biomédica">
                          Tecnología Biomédica
                        </MenuItem>
                      </Field>
                    </div>
                    <div>
                      <label>Con que rol te identificas</label>
                      <Field
                        required
                        as={RadioGroup}
                        name="rol"
                        value={rol}
                        onChange={handleRolChange}
                        defaultValue="Nuevo"
                      >
                        <FormControlLabel
                          value="Nuevo"
                          control={<StyledRadio />}
                          label="Quiero emprender, necesito acompanamiento"
                        />
                        <FormControlLabel
                          value="Practicante"
                          control={<StyledRadio />}
                          label="Practicante de empresarismo"
                        />
                        <FormControlLabel
                          value="Emprendedor"
                          control={<StyledRadio />}
                          label="Emprendedor: Estoy creando un negocio / Ya estoy vendiendo un producto o servicio"
                        />
                        <FormControlLabel
                          value="Empresario"
                          control={<StyledRadio />}
                          label="Empresario: Tengo una empresa constituida y en operación"
                        />
                        <FormControlLabel
                          value="Independiente"
                          control={<StyledRadio />}
                          label="Profesional independiente: Profesional que presta servicios de manera autónoma"
                        />
                      </Field>
                    </div>
                  </>
                )}
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
                    {vinculo === "Externo" ||
                    rol === "Nuevo" ||
                    rol === "Practicante"
                      ? "Enviar"
                      : "Siguiente"}
                  </Button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormularioRegistroEmprendedor;
