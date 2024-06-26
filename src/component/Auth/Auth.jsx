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
  bgcolor: "black.main",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const Auth = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleOnClose = () => {
    onClose();
    navigate("/");
  };

  return (
    <Modal open={isOpen} onClose={handleOnClose}>
      <Box sx={style}>
        <LoginForm />
      </Box>
    </Modal>
  );
};

export default Auth;
