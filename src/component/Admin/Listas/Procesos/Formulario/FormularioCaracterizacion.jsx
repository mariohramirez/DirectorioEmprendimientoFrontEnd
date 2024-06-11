import React, { useEffect, useState } from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
} from "@mui/material";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import styled from "@mui/material/styles/styled";
import { useNavigate } from "react-router-dom";
import { programas, programasPosgrado, roles } from "./data";
import { area } from "./data";
import { nivelMadurez } from "./data";
import { areaFortaleza } from "./data";
import { formaJuridica } from "./data";
import { tipoEmpresa } from "./data";
import { useDispatch } from "react-redux";
import { caractetizar } from "../../../../State/Procesos/Action";
import { app } from "../../../../../utils/firebase";

const storage = getStorage(app);

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

const FormularioCaracterizacion = ({ proceso }) => {
  const [formData, setFormData] = useState({
    nombres: proceso?.emprendedor.nombres,
    apellidos: proceso?.emprendedor.apellidos,
    telefono: proceso?.emprendedor.telefono,
    linkedinEmprendedor: proceso?.emprendedor.linkedin,
    vinculo: proceso?.emprendedor.vinculo.nombre,
    dependencia: proceso?.emprendedor.dependencia,
    tipoPrograma: proceso?.emprendedor.tipoPrograma.nombre,
    programa: proceso?.emprendedor.programa,
    rol: proceso?.emprendedor.rol,
    vinculacion: proceso?.emprendedor.vinculacion,
    imagen: proceso?.emprendedor.imagen,
    hayMujeres: proceso?.emprendimiento.hayMujeres,
    nombre: proceso?.emprendimiento.nombre,
    pais: proceso?.emprendimiento.pais,
    departamento: proceso?.emprendimiento.departamento,
    ciudad: proceso?.emprendimiento.ciudad,
    servicios: proceso?.emprendimiento.servicios,
    segmentoClientes: proceso?.emprendimiento.segmentoClientes,
    enfoque: proceso?.emprendimiento.enfoque,
    sector: proceso?.emprendimiento.sector,
    areaTrabajo: proceso?.emprendimiento.areaTrabajo,
    nivelMadurez: proceso?.emprendimiento.nivelMadurez,
    anoInicio: proceso?.emprendimiento.anoInicio,
    formales: proceso?.emprendimiento.formales,
    informales: proceso?.emprendimiento.informales,
    formalizada: proceso?.emprendimiento.formalizada,
    nit: proceso?.emprendimiento.nit,
    razonSocial: proceso?.emprendimiento.razonSocial,
    anoConstitucion: proceso?.emprendimiento.anoConstitucion,
    formaJuridica: proceso?.emprendimiento.formaJuridica,
    tamanoEmpresa: proceso?.emprendimiento.tamanoEmpresa,
    reconocimientos: proceso?.emprendimiento.reconocimientos,
    areaAFortalecer: proceso?.emprendimiento.areaAFortalecer,
    telefonoEmpresa: proceso?.emprendimiento.informacionDeContacto.telefono,
    email: proceso?.emprendimiento.informacionDeContacto.email,
    facebook: proceso?.emprendimiento.informacionDeContacto.facebook,
    whatsapp: proceso?.emprendimiento.informacionDeContacto.whatsapp,
    linkedin: proceso?.emprendimiento.informacionDeContacto.linkedin,
    instagram: proceso?.emprendimiento.informacionDeContacto.instagram,
    twitter: proceso?.emprendimiento.informacionDeContacto.twitter,
    paginaweb: proceso?.emprendimiento.informacionDeContacto.paginaweb,
    banner: proceso?.emprendimiento.banner,
    resumen: proceso?.emprendimiento.resumen,
    descripcion: proceso?.emprendimiento.descripcion,
    estadoInterno: proceso?.emprendimiento.estadoInterno.nombre,
    estadoProceso: proceso?.estadoProceso.nombre,
    areaTrabajoOtro: proceso?.emprendimiento.areaTrabajo,
    areaTrabajoAFortalecerOtro: proceso?.emprendimiento.areaAFortalecer,
  });

  const initialValues = {
    procesoId: proceso?.id,
    emprendeId: proceso?.emprendedor.id,
    emprendiId: proceso?.emprendimiento.id,
    nombres: formData.nombres,
    apellidos: formData.apellidos,
    telefono: formData.telefono,
    linkedinE: formData.linkedinEmprendedor,
    vinculo: formData.vinculo,
    dependencia: formData.dependencia,
    tipoPrograma: formData.tipoPrograma,
    programa: formData.programa,
    rol: formData.rol,
    vinculacion: formData.vinculacion,
    imagen: formData.imagen,
    hayMujeres: formData.hayMujeres,
    nombre: formData.nombre,
    pais: formData.pais,
    departamento: formData.departamento,
    ciudad: formData.ciudad,
    servicios: formData.servicios,
    segmentoClientes: formData.segmentoClientes,
    enfoque: formData.enfoque,
    sector: formData.sector,
    areaTrabajo: formData.areaTrabajo,
    nivelMadurez: formData.nivelMadurez,
    anoInicio: formData.anoInicio,
    formales: formData.formales,
    informales: formData.informales,
    formalizada: formData.formalizada,
    nit: formData.nit,
    razonSocial: formData.razonSocial,
    anoConstitucion: formData.anoConstitucion,
    formaJuridica: formData.formaJuridica,
    tamanoEmpresa: formData.tamanoEmpresa,
    reconocimientos: formData.reconocimientos,
    areaAFortalecer: formData.areaAFortalecer,
    informacionDeContacto: {
      email: formData.email,
      facebook: formData.facebook,
      whatsapp: formData.whatsapp,
      linkedin: formData.linkedin,
      instagram: formData.instagram,
      twitter: formData.twitter,
      paginaweb: formData.paginaweb,
      telefono: formData.telefonoEmpresa,
    },
    banner: formData.banner,
    descripcion: formData.descripcion,
    resumen: formData.resumen,
    estadoInterno: formData.estadoInterno,
    estadoProceso: formData.estadoProceso,
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [open, setOpen] = useState(false);

  const [fileName, setFileName] = useState("");

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");

  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    const upload = () => {
      //Obtenemos el nombre del archivo que se va a subir
      const name = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setFileName(name);
            setMedia(downloadURL);
            const updatedFormValues = {
              ...formData,
              banner: downloadURL,
            };
            setFormData(updatedFormValues);
            setOpen(!open);
          });
        }
      );
    };
    file && upload();
  }, [file]);

  const handleDelete = () => {
    //Obtenemos el nombre del archivo que se va a eliminar
    const name = fileName;
    const desertRef = ref(storage, name);
    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
        setFile(null);
        setFileName("");
        setMedia("");
        setOpen(!open);
        const updatedFormValues = {
          ...formData,
          banner: "",
        };
        setFormData(updatedFormValues);
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name); // Actualiza el nombre del archivo
    }
  };

  const getShortLink = (url) => {
    const urlObj = new URL(url);
    return `${urlObj.origin}/...${urlObj.pathname.slice(-10)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Informacion en el formilario", formData);
    console.log("Informacion a enviar", initialValues);
    dispatch(caractetizar(jwt, 1, initialValues));
  };

  return (
    <div className="">
      <section className="banner relative flex flex-col justify-center items-center text-black w-[100%]">
        <p className="text-2xl text-black lg:text-5xl font-bold z-10 py-10 text-center">
          Formulario de caracterizacion
        </p>
        <p className="text-2xl text-black lg:text-4xl font-bold z-10 pb-5 text-center">
          Datos del emprendedor
        </p>
        <div className="flex flex-col py-2 mb-2">
          <form onSubmit={handleSubmit} className="text-black">
            <div>
              <label>Nombres del emprendedor: </label>
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
              <label>Apellidos del emprendedor: </label>
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
              <label>Telefono de contacto del emprendedor: </label>
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
              <label>Usuario de LinkedIn: </label>
              <CustomTextField
                required
                name="linkedinEmprendedor"
                value={formData.linkedinEmprendedor}
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
            <div>
              <label>
                ¿Cómo te gustaría vincularte en los procesos de emprendimiento
                de la Facultad?
              </label>
              <RadioGroup
                name="vinculacion"
                value={formData.vinculacion}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Mentor"
                  control={<StyledRadio />}
                  label="Siendo mentor de algunos emprendedores"
                />
                <FormControlLabel
                  value="Charla"
                  control={<StyledRadio />}
                  label="Dando una charla para la comunidad"
                />
                <FormControlLabel
                  value="Asesor"
                  control={<StyledRadio />}
                  label="Siendo asesor de la práctica académica en la modalidad de empresarismo"
                />
                <FormControlLabel
                  value="Convenio"
                  control={<StyledRadio />}
                  label="Generando un convenio con la Facultad para realizar proyectos lucrativos para las partes"
                />
                <FormControlLabel
                  value="No Compromiso"
                  control={<StyledRadio />}
                  label="Por ahora no puedo comprometerme"
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
              <p className="text-2xl text-black lg:text-4xl font-bold z-10 pt-5 pb-10 text-center">
                Datos del emprendimiento
              </p>
            </div>
            <div>
              <label>Nombre del emprendimiento o la empresa (Marca): </label>
              <CustomTextField
                required
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>País: </label>
              <CustomTextField
                required
                name="pais"
                value={formData.pais}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>Departamento: </label>
              <CustomTextField
                required
                name="departamento"
                value={formData.departamento}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>Ciudad: </label>
              <CustomTextField
                required
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>Descripción de los productos o servicios: </label>
              <CustomTextField
                required
                name="servicios"
                value={formData.servicios}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>Segmento de clientes: </label>
              <CustomTextField
                required
                name="segmentoClientes"
                value={formData.segmentoClientes}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>¿Cuál es el enfoque de tu emprendimiento/empresa?</label>
              <RadioGroup
                name="enfoque"
                value={formData.enfoque}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Social"
                  control={<StyledRadio />}
                  label="Impacto social: Ayuda a una comunidad o grupo de personas en situación de vulnerabilidad"
                />
                <FormControlLabel
                  value="Ambiental"
                  control={<StyledRadio />}
                  label="Impacto ambiental: Iniciativas relacionadas con economía circular, reducción de huella de carbono, sostenibilidad, etc."
                />
                <FormControlLabel
                  value="Tecnologica"
                  control={<StyledRadio />}
                  label="Base tecnológica: Aplicación sistemática de conocimientos científicos y tecnológicos para el diseño y desarrollo de soluciones"
                />
                <FormControlLabel
                  value="Ninguna"
                  control={<StyledRadio />}
                  label="Ninguno de los anteriores"
                />
              </RadioGroup>
            </div>
            <div>
              <label>Sector</label>
              <RadioGroup
                name="sector"
                value={formData.sector}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Manufactura"
                  control={<StyledRadio />}
                  label="Manufactura"
                />
                <FormControlLabel
                  value="Servicios"
                  control={<StyledRadio />}
                  label="Servicios"
                />
                <FormControlLabel
                  value="Comercio"
                  control={<StyledRadio />}
                  label="Comercio"
                />
              </RadioGroup>
            </div>
            <div>
              <label>Principal área de trabajo</label>
              <select
                name="areaTrabajo"
                value={formData.areaTrabajo}
                onChange={handleChange}
                className="w-full bg-white border border-black hover:border-[#026937] focus:border-[#026937] focus:border-2 px-5 py-5 rounded-md"
              >
                {area.map((opcion) => (
                  <option key={opcion.value} value={opcion.value}>
                    {opcion.label}
                  </option>
                ))}
              </select>
              {formData.areaTrabajo === "Otro" && (
                <>
                  <label>¿Cuál?</label>
                  <CustomTextField
                    required
                    name="areaTrabajoOtro"
                    value={formData.areaTrabajoOtro}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </>
              )}
            </div>
            <div>
              <label>En qué etapa se encuentra el emprendimiento/empresa</label>
              <RadioGroup
                name="nivelMadurez"
                value={formData.nivelMadurez}
                onChange={handleChange}
              >
                {nivelMadurez.map((opcion) => (
                  <FormControlLabel
                    value={opcion.value}
                    control={<StyledRadio />}
                    label={opcion.label}
                  />
                ))}
              </RadioGroup>
            </div>
            <div>
              <label>Año de inicio de operaciones: </label>
              <CustomTextField
                required
                name="anoInicio"
                value={formData.anoInicio}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>
                Cuántos empleos formales o contratos de trabajo genera
              </label>
              <CustomTextField
                required
                name="formales"
                value={formData.formales}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>Cuántos empleos informales genera</label>
              <CustomTextField
                required
                name="informales"
                value={formData.informales}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>
                ¿Entre los fundadores o socios del emprendimiento o empresa que
                tienen vínculo con la Facultad hay mujeres?{" "}
              </label>
              <RadioGroup
                name="hayMujeres"
                value={formData.hayMujeres ? "Si" : "No"}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Si"
                  control={<StyledRadio />}
                  label="Sí"
                />
                <FormControlLabel
                  value="No"
                  control={<StyledRadio />}
                  label="No"
                />
              </RadioGroup>
            </div>
            <div>
              <label>
                Su emprendimiento/empresa está formalizada en Cámara de Comercio
              </label>
              <RadioGroup
                name="formalizada"
                value={formData.formalizada ? "Si" : "No"}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Si"
                  control={<StyledRadio />}
                  label="Sí"
                />
                <FormControlLabel
                  value="No"
                  control={<StyledRadio />}
                  label="No"
                />
              </RadioGroup>
            </div>
            <div>
              <label>NIT</label>
              <CustomTextField
                required
                name="nit"
                value={formData.nit}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>Razón Social</label>
              <CustomTextField
                required
                name="razonSocial"
                value={formData.razonSocial}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>Año de constitución de la empresa</label>
              <CustomTextField
                required
                name="anoConstitucion"
                value={formData.anoConstitucion}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>Si está formalizado indique la Forma jurídica </label>
              <select
                name="formaJuridica"
                value={formData.formaJuridica}
                onChange={handleChange}
                className="w-full bg-white border border-black hover:border-[#026937] focus:border-[#026937] focus:border-2 px-5 py-5 rounded-md"
              >
                {formaJuridica.map((opcion) => (
                  <option key={opcion.value} value={opcion.value}>
                    {opcion.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Tamaño de la empresa</label>
              <RadioGroup
                name="tamanoEmpresa"
                value={formData.tamanoEmpresa}
                onChange={handleChange}
              >
                {tipoEmpresa.map((opcion) => (
                  <FormControlLabel
                    value={opcion.value}
                    control={<StyledRadio />}
                    label={opcion.label}
                  />
                ))}
              </RadioGroup>
            </div>
            <div>
              <label>
                Qué premios, reconocimientos o acompañamiento por otras
                entidades ha recibido su emprendimiento/empresa
              </label>
              <CustomTextField
                required
                name="reconocimientos"
                value={formData.reconocimientos}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>
                Área principal que su emprendimiento necesita fortalecer
              </label>
              <select
                name="areaAFortalecer"
                value={formData.areaAFortalecer}
                onChange={handleChange}
                className="w-full bg-white border border-black hover:border-[#026937] focus:border-[#026937] focus:border-2 px-5 py-5 rounded-md"
              >
                {areaFortaleza.map((opcion) => (
                  <option key={opcion.value} value={opcion.value}>
                    {opcion.label}
                  </option>
                ))}
              </select>
              {formData.areaAFortalecer === "Otro" && (
                <>
                  <label>¿Cuál?</label>
                  <CustomTextField
                    required
                    name="areaTrabajoAFortalecerOtro"
                    value={formData.areaTrabajoAFortalecerOtro}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </>
              )}
            </div>
            <div>
              <label>
                Teléfono de contacto de su emprendimiento/empresa (Visible en el
                directorio)
              </label>
              <CustomTextField
                required
                name="telefonoEmpresa"
                value={formData.telefonoEmpresa}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>
                Correo electrónico de su emprendimiento/empresa (Visible en el
                directorio)
              </label>
              <CustomTextField
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>Facebook</label>
              <CustomTextField
                required
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>Instagram</label>
              <CustomTextField
                required
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>Linkedin</label>
              <CustomTextField
                required
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>Twitter</label>
              <CustomTextField
                required
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>Whatsapp</label>
              <CustomTextField
                required
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>Sitio web del emprendimiento/empresa</label>
              <CustomTextField
                required
                name="paginaweb"
                value={formData.paginaweb}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>
                Escriba un resumen acerca de la empresa para mostrar en el
                directorio:{" "}
              </label>
              <CustomTextField
                required
                name="resumen"
                value={formData.resumen}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>
                Escriba la descripción de la empresa para mostrar en detalle:{" "}
              </label>
              <CustomTextField
                required
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>Elegir estado del proceso: </label>
              <RadioGroup
                name="estadoProceso"
                value={formData.estadoProceso}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Inscrito"
                  control={<StyledRadio />}
                  label="Inscrito"
                />
                <FormControlLabel
                  value="Caracterizado"
                  control={<StyledRadio />}
                  label="Caracterizado"
                />
                <FormControlLabel
                  value="Indeterminado"
                  control={<StyledRadio />}
                  label="Indeterminado"
                />
                <FormControlLabel
                  value="Validado"
                  control={<StyledRadio />}
                  label="Validado"
                />
                <FormControlLabel
                  value="Cancelado"
                  control={<StyledRadio />}
                  label="Cancelado"
                />
              </RadioGroup>
            </div>
            <div>
              <label>¿Mostrar en el directorio? </label>
              <RadioGroup
                name="estadoInterno"
                value={formData.estadoInterno}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Visible"
                  control={<StyledRadio />}
                  label="Sí"
                />
                <FormControlLabel
                  value="Oculto"
                  control={<StyledRadio />}
                  label="No"
                />
              </RadioGroup>
            </div>
            <div>
              <div className="flex items-center justify-center align-middle gap-5">
                <span className="text-black pl-[50px]">Elige una imagen: </span>
                <input
                  type="text"
                  placeholder="Archivo"
                  value={fileName}
                  readOnly
                  className="border-[1px] border-solid border-black text-[12px] rounded-none outline-none bg-white text-black"
                />
                <input
                  type="file"
                  id="image"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <div
                  className="flex items-center bg-[rgb(2,105,55)] rounded-sm
                        text-lg transition duration-300 ease-in-out hover:bg-[#8DC63F] cursor-pointer"
                  style={{ boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.7)" }}
                  title="imagen"
                  name="imagen"
                >
                  <div className="mx-4 my-2 flex flex-row gap-[10px] items-center justify-center">
                    <label htmlFor="image" className=" cursor-pointer">
                      <span className="font-roboto-slab text-base cursor-pointer">
                        Subir imagen
                      </span>
                    </label>
                  </div>
                </div>
                <div
                  onClick={handleDelete}
                  className="flex items-center bg-[rgb(2,105,55)] rounded-sm
                        text-lg transition duration-300 ease-in-out hover:bg-[#8DC63F] cursor-pointer"
                  style={{ boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.7)" }}
                  title="imagen"
                  name="imagen"
                >
                  <div className="mx-4 my-2 flex flex-row gap-[10px] items-center justify-center">
                    <span className="font-roboto-slab text-base">
                      Eliminar imagen{" "}
                    </span>
                  </div>
                </div>
              </div>
              {open && (
                <div className="flex flex-col items-center justify-center align-middle gap-5 pl-[50px]">
                  <img src={media} alt="" className="w-[50%]" />
                  <a
                    href={media}
                    className="text-blue-600 underline"
                    target="_blank"
                  >
                    {getShortLink(media)}
                  </a>
                </div>
              )}
            </div>
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
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FormularioCaracterizacion;
