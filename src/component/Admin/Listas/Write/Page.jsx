import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import MenuAdmin from "../../Menu/MenuAdmin";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { app } from "../../../../utils/firebase";
import { useDispatch } from "react-redux";
import { createNovedad } from "../../../State/Novedades/Action";

const storage = getStorage(app);

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("NOVEDAD");

  const [fileName, setFileName] = useState("");

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");

  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");

  const initialValues = {
    categoria: "NOVEDAD",
    titulo: "",
    descripcion: "",
    img_url: "",
    cuerpo: "",
  };

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

  const handleSubmit = () => {
    initialValues.titulo = title;
    initialValues.descripcion = value.substring(0, 100);
    initialValues.cuerpo = value;
    initialValues.img_url = media;
    initialValues.categoria = category;
    dispatch(createNovedad(jwt, {novedadData: initialValues}));
    console.log("JEJEJEJE",initialValues);
  };

  const getShortLink = (url) => {
    const urlObj = new URL(url);
    return `${urlObj.origin}/...${urlObj.pathname.slice(-10)}`;
  };

  return (
    <section className="relative flex">
      <MenuAdmin />
      <div className="relative flex flex-col w-[80vw] p-2">
        <input
          type="text"
          placeholder="Titulo"
          className="border-[1px] border-solid border-black ml-[50px] pl-[10px] my-[50px]  text-[64px] rounded-none outline-none bg-white text-black"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex flex-col items-center mb-[50px] gap-5">
          <div className="flex items-center align-middle gap-10 ">
            <span className="text-black pl-[50px]">Categoria: </span>
            <select
              className="pt-[10px] text-black outline outline-black outline-1"
              style={{ width: "max-content" }}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="NOVEDAD">Novedades</option>
              <option value="EVENTO">Eventos</option>
              <option value="CONVOCATORIA">Convocatorias</option>
            </select>
          </div>
          <div className="flex items-center justify-center align-middle gap-5">
            <span className="text-black pl-[50px]">
              Elige una imagen para la portada:{" "}
            </span>
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
            <button
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
            </button>
            <button
              onClick={handleDelete}
              className="flex items-center bg-[rgb(2,105,55)] rounded-sm
                        text-lg transition duration-300 ease-in-out hover:bg-[#8DC63F]"
              style={{ boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.7)" }}
              title="imagen"
              name="imagen"
            >
              <div className="mx-4 my-2 flex flex-row gap-[10px] items-center justify-center">
                <span className="font-roboto-slab text-base">
                  Eliminar imagen{" "}
                </span>
              </div>
            </button>
          </div>
          {open && (
            <div className="flex flex-col items-center justify-center align-middle gap-5 pl-[50px]">
              <img src={media} alt="" className="w-[50%]" />
              <a href={media} className="text-blue-600 underline" target="_blank" >
                {getShortLink(media)}
              </a>
            </div>
          )}
        </div>
        <div className="flex ml-[50px] h-[700px] relative">
          {/*<button
            onClick={() => setOpen(!open)}
            className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-[1px] border-solid border-black flex items-center justify-center cursor-pointer"
          >
            <img src="" alt="" width={16} height={16} />
          </button>
          {open && (
            <div className="flex gap-[20px] bg-slate-500 absolute z-[999] w-[20%] left-[50px]">
              <input
                type="file"
                id="image"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <button className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-[1px] border-solid border-black flex items-center justify-center cursor-pointer">
                <label htmlFor="image">
                  <img src="" alt="" width={16} height={16} />
                </label>
              </button>
              <button className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-[1px] border-solid border-black flex items-center justify-center cursor-pointer">
                <img src="" alt="" width={16} height={16} />
              </button>
              <button className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-[1px] border-solid border-black flex items-center justify-center cursor-pointer">
                <img src="" alt="" width={16} height={16} />
              </button>
            </div>
          )}*/}
          <ReactQuill
            className="w-[100%] h-[90%] text-black border-[1px] border-solid border-black rounded-none outline-none bg-white"
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Escribe tu novedad"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="ml-[50px] mb-[50px] flex items-center bg-[rgb(2,105,55)] rounded-sm
                        text-lg transition duration-300 ease-in-out hover:bg-[#8DC63F]"
            style={{ boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.7)" }}
            title="Publicar"
            name="Publicar"
          >
            <div className="mx-4 my-2 flex flex-row gap-[10px] items-center justify-center">
              <span className="font-roboto-slab text-base">
                Publicar novedad
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WritePage;
