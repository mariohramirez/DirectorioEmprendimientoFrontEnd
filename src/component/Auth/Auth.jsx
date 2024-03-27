import React from "react";
import { Modal } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import LoginForm from "./LoginForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

export const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleOnCLose = () => {
    navigate("/");
  };
  return (
    <>
      <Modal open={location.pathname === "/login"} onClose={handleOnCLose}>
        <Box sx={style}>
          {location.pathname === "/login" ? <LoginForm />: null}
        </Box>
      </Modal>
    </>
  );
};

export default Auth;
