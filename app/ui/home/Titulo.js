import styled from "styled-components";
import { useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { motion, AnimatePresence, easeIn } from "framer-motion";
import { anton, francois_one } from "../fonts";
import Image from "next/image";
import Menu from "./Menu";

const Titulo = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  justify-content: center;

  #cita {
    margin-top: 18px;
    margin-bottom: 18px;

    height: 100px;

    .cita {
      font-family: "Bebas Neue";
      font-style: italic;
      font-size: 16px;
      color: white;
    }
    .autor {
      font-family: "Anton";
      font-style: italic;
      font-size: 12px;
      color: rgb(255, 193, 7);
    }
  }
  h1 {
    position: relative;
    font-size: 5em;
    color: #ff9800;
    margin: 0;

    text-shadow: 4px 4px 0 #000,
      /* Simulated effect for Firefox and Opera
       and nice enhancement for WebKit */ -1px -1px
        0 #000,
      1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }
  h2 {
    color: rgb(33, 150, 243);
    font-size: 20px;
    margin-top: 20px;
  }
`;
const BotonInicio = styled.button`
  background-color: rgba(38, 50, 56, 0.5); /* Verde elegante */

  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 6px 4px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 12px; /* Bordes redondeados */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
  &:hover {
    background-color: white;
    color: #4caf50;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada */
  }
`;

export default function ({ cita }) {
  const [inicio, setInicio] = useState(false);
  return (
    <>
      <AnimatePresence>
        {!inicio && (
          <Titulo className={francois_one.className}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ x: -200, scale: 1.1, opacity: 1 }}
              transition={{ duration: 5, ease: "easeInOut" }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <Image
                src="/sphere2.png"
                width={140}
                height={140}
                className="hidden md:block"
                alt="Screenshots of the dashboard project showing desktop version"
              />
            </motion.div>
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                stiffness: 260,
                damping: 20,
              }}
            >
              SalesSphere
            </motion.h1>
            <motion.h2
              className={anton.className}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 3 }}
            >
              Visión Geográfica en Ventas
            </motion.h2>
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1.0, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 6 }}
            >
              <BotonInicio onClick={() => setInicio(true)}>Iniciar</BotonInicio>
            </motion.div>

            {/* <Cita cita={cita}></Cita> */}
          </Titulo>
        )}
      </AnimatePresence>
      <AnimatePresence>{inicio && (<Menu></Menu>)}</AnimatePresence>
      
    </>
  );
}
