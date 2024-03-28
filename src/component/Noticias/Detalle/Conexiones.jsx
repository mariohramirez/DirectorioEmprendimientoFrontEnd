import React from "react";
import { motion } from "framer-motion";
import {
  LinkedIcon,
  WhatsAppIcon,
  FacebookIcon,
  TwitterIcon,
  GmailIcon,
} from "../../Iconos";

const Conexiones = () => {
  return (
    <nav className="flex flex-row gap-1 justify-center items-center">
      <motion.a
        href="https://twitter.com/intent/tweet?url=https://www.ejemplo.com&text=Mira%20esta%20noticia"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-9"
      >
        <TwitterIcon />
      </motion.a>
      <motion.a
        href="https://www.facebook.com/sharer/sharer.php?u=https://www.ejemplo.com"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-9"
      >
        <FacebookIcon />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/shareArticle?url=https://www.ejemplo.com"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-9"
      >
        <LinkedIcon />
      </motion.a>
      <motion.a
        href="whatsapp://send?text=Mira%20esta%20noticia%20https://www.ejemplo.com"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-9"
      >
        <GmailIcon />
      </motion.a>
      <motion.a
        href="whatsapp://send?text=Mira%20esta%20noticia%20https://www.ejemplo.com"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-10"
      >
        <WhatsAppIcon />
      </motion.a>
    </nav>
  );
};

export default Conexiones;
