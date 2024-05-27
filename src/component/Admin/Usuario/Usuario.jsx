import React from "react";
import Single from "../single/Single";
import MenuAdmin from "../Menu/MenuAdmin";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { retrieveUserById } from "../../State/Authentication/Action";

const Usuario = () => {

  const dispatch = useDispatch();
  const { userById } = useSelector((store) => store.auth);
  const jwt = localStorage.getItem("jwt");


  const { id } = useParams();

  console.log("id", id);

  useEffect(() => {
    dispatch(retrieveUserById(jwt, { userId: id }));
  }, []);
  

  console.log("User A: ", userById);

  return (
    <div className=" relative flex">
      <MenuAdmin />
      <div className="text-black w-[81vw] p-10">
        <Single emprende={userById} />
      </div>
    </div>
  );
};

export default Usuario;
