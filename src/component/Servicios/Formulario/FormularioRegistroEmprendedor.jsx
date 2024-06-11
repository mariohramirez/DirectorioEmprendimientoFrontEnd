import React, { useState } from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
} from "@mui/material";
import styled from "@mui/material/styles/styled";
import { useNavigate } from "react-router-dom";
import { genero, programas, programasPosgrado, roles } from "./data";

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

const FormularioRegistroEmprendedor = () => {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    tipoDocumento: "Cedula",
    numeroDocumento: "",
    correo: "",
    telefono: "",
    vinculo: "Externo",
    dependencia: "",
    tipoPrograma: "Pregrado",
    programa: "",
    rol: "Nuevo",
    genero: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    switch (formData.rol) {
      case "Emprendedor":
      case "Empresario":
        navigate(`/servicios/formulario/Registro/Emprendimiento`, {
          state: { formData },
        });
        break;
      case "Independiente":
        navigate(`/servicios/formulario/Registro/Profesional`, {
          state: { formData },
        });
        break;
      default:
        navigate(`/servicios/formulario/Registro/Emprendimiento`, {
          state: { formData },
        });
        break;
    }
  };

  return (
    <div className="">
      <section className="banner relative flex flex-col justify-center items-center text-black w-[100vw]">
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
              Facultad:
            </span>
            <br />
            <ul>
              <li>
                🔹 Visibilidad en el directorio alojado en el portal
                institucional https://bit.ly/DirectorioEmprendedoresING
              </li>
              <li>🔹 Formación en temas de emprendimiento e innovación.</li>
              <li>
                🔹 Acompañamiento para fortalecer tu emprendimiento o empresa
              </li>
              <li>
                🔹 Te ayudamos conectar con el ecosistema de emprendimiento
              </li>
              <li>
                🔹 Estar al tanto de las convocatorias y oportunidades para los
                emprendedores
              </li>
              <li>🔹 Networking</li>
              <li>
                🔹 Conocer a otros emprendedores que puedan ser tus proveedores
                o clientes.
              </li>
            </ul>
            <br />
            <span>
              Nota: Te indicaremos los campos o la información que será visible
              en el directorio
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
              alguna en este contexto.
            </span>
            <br />
            <span>
              Esta es una iniciativa de la Unidad de Innovación, con el apoyo
              del Programa de Egresados y la Unidad de Comunicaciones de la
              Facultad de Ingeniería.
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
            <form onSubmit={handleSubmit} className="text-black">
              <div>
                <label>Nombres</label>
                <CustomTextField
                  required
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              </div>
              <div>
                <label>Apellidos</label>
                <CustomTextField
                  required
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              </div>
              <div>
                <label>Tipo de documento</label>
                <RadioGroup
                  name="tipoDocumento"
                  value={formData.tipoDocumento}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="CC"
                    control={<StyledRadio />}
                    label="Cédula de ciudadania"
                  />
                  <FormControlLabel
                    value="TI"
                    control={<StyledRadio />}
                    label="Tarjeta de Identidad"
                  />
                </RadioGroup>
              </div>
              <div>
                <label>Numero de Documento</label>
                <CustomTextField
                  required
                  name="numeroDocumento"
                  value={formData.numeroDocumento}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              </div>
              <div>
                <label>Genero</label>
                <select
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                  className="w-full bg-white border border-black hover:border-[#026937] focus:border-[#026937] focus:border-2 px-5 py-5 rounded-md"
                >
                  {genero.map((opcion) => (
                    <option key={opcion.value} value={opcion.value}>
                      {opcion.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Correo electronico del emprendedor</label>
                <CustomTextField
                  required
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              </div>
              <div>
                <label>Telefono de contacto</label>
                <CustomTextField
                  required
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              </div>
              <div>
                <label>Vinculo con la Facultad</label>
                <RadioGroup
                  name="vinculo"
                  value={formData.vinculo}
                  onChange={handleChange}
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
                </RadioGroup>
              </div>
              {formData.vinculo !== "Externo" && (
                <>
                  {(formData.vinculo === "Administrativo" ||
                    formData.vinculo === "Docente") && (
                    <div>
                      <label>Dependencia en la que trabaja</label>
                      <CustomTextField
                        required
                        name="dependencia"
                        value={formData.dependencia}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                      />
                    </div>
                  )}
                  <div>
                    <label>Tipo de programa academico</label>
                    <RadioGroup
                      name="tipoPrograma"
                      value={formData.tipoPrograma}
                      onChange={handleChange}
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
                    </RadioGroup>
                  </div>
                  <div>
                    <label>Programa academico</label>
                    <select
                      name="programa"
                      value={formData.programa}
                      onChange={handleChange}
                      className="w-full bg-white border border-black hover:border-[#026937] focus:border-[#026937] focus:border-2 px-5 py-5 rounded-md"
                    >
                      {formData.tipoPrograma === "Posgrado" &&
                        programasPosgrado.map((opcion) => (
                          <option key={opcion.value} value={opcion.value}>
                            {opcion.label}
                          </option>
                        ))}
                      {formData.tipoPrograma === "Pregrado" &&
                        programas.map((opcion) => (
                          <option key={opcion.value} value={opcion.value}>
                            {opcion.label}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <label>Con que rol te identificas</label>
                    <RadioGroup
                      name="rol"
                      value={formData.rol}
                      onChange={handleChange}
                    >
                      {roles.map((rol) => (
                        <FormControlLabel
                          key={rol.value}
                          value={rol.value}
                          control={<StyledRadio />}
                          label={rol.label}
                        />
                      ))}
                    </RadioGroup>
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
                  type="submit"
                  variant="contained"
                >
                  {formData.vinculo === "Externo" ||
                  formData.rol === "Nuevo" ||
                  formData.rol === "Practicante"
                    ? "Enviar"
                    : "Siguiente"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormularioRegistroEmprendedor;
