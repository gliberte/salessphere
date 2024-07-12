import styled from "styled-components";
import { motion } from "framer-motion";
import CardMenu from "./CardMenu";
import { squada_one } from "../fonts";

const Contenido = styled.div`
  position: absolute;

  top: 50%;
`;
const Elemento = styled(motion.div)`
  width:200px;
  
  position: relative;
  /* background-color:rgb(120, 144, 156); */
  /* background-image: ${(props)=>`url(${props.img})`}; */
  background-color: rgba(38, 50, 56,0.4);
  background-size:cover;
  background-blend-mode:darken;
  padding:0 0 10px 0;
  transition: all ease-in-out 0.2s;

  span{
    top: 0;
    position: absolute;
    color: red;
    font-family: "Francois One";
    font-size:1.5rem;
    transform:translateY(-10px) translateX(-20px) rotate(-20deg);
  }
  :hover{
    transform:scale3d(1.3,1.3,2);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
 
`;
export default function Menu() {
  return (
    <motion.div style={{width:'60%'}}  initial={{opacity:0,scale:0.5,position:'absolute',top:'50%',left:'50%',translateX:'-50%'}} animate={{opacity:1,scale:1,translateX:'-50%',translateY:'-50%'}} transition={{duration:0.5,ease:'easeInOut'}}>
 
      <div style={{display:'flex',gap:'20px',flexWrap:'wrap',alignContent:'space-between'}}>
        <CardMenu img='/vision2.png' titulo='Vision' descripcion='Obtén una vision nacional del estado de venta en cada cliente registrado.' url='/vision'>
        </CardMenu>
        <CardMenu img='/coberturades.png' titulo='Coberturas' descripcion='Coberturas, potencial y volumen de ventas por polígonos de rutas.' url='/coberturas'></CardMenu>
        <CardMenu img='/ventas.png' titulo='Ventas' descripcion='Ventas por marcas consolidadas por regiones politico-administrativas y datos censales' url='/ventas'></CardMenu>
      </div>
    </motion.div>
  );
}
