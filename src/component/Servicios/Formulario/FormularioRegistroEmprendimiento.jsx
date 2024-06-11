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
import { useLocation, useNavigate } from "react-router-dom";
import { app } from "../../../utils/firebase";
import { useDispatch } from "react-redux";
import { createInscripcion } from "../../State/Inscripcion/Action";

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
  color: "black",
});

const FormularioRegistroEmprendimiento = () => {
  const initialValues = {
    nombres: "",
    apellidos: "",
    tipoDoc: "",
    numeroDoc: "",
    correoE: "",
    telContac: "",
    vinculo: "",
    tipoPrograma: "",
    dependencia: "",
    programa: "",
    genero: "",
    estadoe: "",
    rol: "",
    nombre: "",
    descripcion: "",
    productos: "",
    formalizada: "",
    informacionDeContacto: {
      email: "",
      telefono: "",
      twitter: "",
      instagram: "",
      whatsapp: "",
      linkedin: "",
      paginaweb: "",
    },
    logo: "",
    supertipo: "",
    sectores: "",
    servicios: "",
  };

  const location = useLocation();
  const formData = location.state?.formData;

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    nombre: "",
    servicios: "",
    formalizada: "Si",
    telefono: "",
    correo: "",
    //redesSociales: "",
    sitioWeb: "",
    logo: "Si",
    tratamiento: "Si",
    img_url: "",
  });

  const [open, setOpen] = useState(false);

  const [fileName, setFileName] = useState("");

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");

  const dispatch = useDispatch();

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
              ...formValues,
              img_url: downloadURL,
            };
            setFormValues(updatedFormValues);
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
          ...formValues,
          img_url: "",
        };
        setFormValues(updatedFormValues);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Info formulario anterior: ", formData);
    console.log(formValues);
    console.log("Nombres emprendedor: ", formData.nombres);
    initialValues.nombres = formData.nombres;
    initialValues.apellidos = formData.apellidos;
    initialValues.tipoDoc = formData.tipoDocumento;
    initialValues.numeroDoc = formData.numeroDocumento;
    initialValues.correoE = formData.correo;
    initialValues.programa = formData.programa;
    initialValues.telContac = formData.telefono;
    initialValues.vinculo = formData.vinculo;
    initialValues.tipoPrograma = formData.tipoPrograma;
    initialValues.dependencia = formData.dependencia;
    initialValues.genero = formData.genero;
    initialValues.estadoe = "Inscrito";
    initialValues.nombre = formData.nombre;
    initialValues.rol = formData.rol;
    initialValues.nombre = formValues.nombre;
    initialValues.informacionDeContacto.email = formValues.correo;
    initialValues.informacionDeContacto.telefono = formValues.telefono;
    initialValues.informacionDeContacto.twitter = "";
    initialValues.informacionDeContacto.instagram = "";
    initialValues.informacionDeContacto.whatsapp = "";
    initialValues.informacionDeContacto.linkedin = "";
    initialValues.informacionDeContacto.paginaweb = "";
    initialValues.logo = formValues.img_url;
    initialValues.supertipo = "Empresa";
    initialValues.servicios = formValues.servicios;
    console.log("Info a ser pasada", initialValues);
    dispatch(createInscripcion({ inscripcionData: initialValues }));
    navigate(`/servicios/formulario/Registro/Guardado`);
  };

  return (
    <section className="banner relative flex flex-col justify-center items-center text-black">
      <div className="w-[80vw] z-10">
        <p className="text-2xl text-black lg:text-5xl font-bold z-10 py-10 text-center">
          Directorio de emprededores y empresarios de la Facultad de Ingeniería
        </p>
        <div className="flex flex-col py-2 mb-2">
          <span className="text-2xl">
            Información sobre el emprendimiento o la empresa
          </span>
          <form onSubmit={handleSubmit} className="text-black">
            <div>
              <label>
                Nombre del emprendimiento o la empresa (Visible en el
                directorio)
              </label>
              <CustomTextField
                required
                name="nombre"
                value={formValues.nombre}
                onChange={handleChange}
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
              <CustomTextField
                required
                name="servicios"
                value={formValues.servicios}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>
                Su emprendimiento/empresa está formalizada en Cámara de Comercio
              </label>
              <RadioGroup
                required
                name="formalizada"
                value={formValues.formalizada}
                onChange={handleChange}
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
              </RadioGroup>
            </div>
            <div>
              <label>
                Teléfono de contacto de su emprendimiento/empresa (Visible en el
                directorio)
              </label>
              <CustomTextField
                required
                name="telefono"
                value={formValues.telefono}
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
                name="correo"
                value={formValues.correo}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            {/*  <div>
              <label>
                Usuarios de las redes sociales (Visible en el directorio)
              </label>
              <CustomTextField
                required
                name="redesSociales"
                value={formValues.redesSociales}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>*/}
            <div>
              <label>
                Sitio web de su emprendimiento/empresa (Visible en el
                directorio)
              </label>
              <CustomTextField
                required
                name="sitioWeb"
                value={formValues.sitioWeb}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </div>
            <div>
              <label>
                Sube por favor el logo de tu emprendimiento: (Visible en el
                directorio)
              </label>
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
              <label>
                Con el envío de este formulario acepto el tratamiento de datos
                personales conforme al Manual de Política de Tratamiento de
                Información y Protección de Datos Personales de la Universidad
                de Antioquia
                <a
                  className="pl-2"
                  href="https://www.udea.edu.co/wps/wcm/connect/udea/dc0dcdc5-eb39-4a97-b440-3b52a5492380/criterios.pdf?MOD=AJPERES"
                >
                  https://bit.ly/PolíticaDatosUdeA
                </a>
                , la Ley 1581 de 2012 y sus decretos reglamentarios
              </label>
              <RadioGroup
                required
                name="tratamiento"
                value={formValues.tratamiento}
                onChange={handleChange}
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
              </RadioGroup>
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormularioRegistroEmprendimiento;
