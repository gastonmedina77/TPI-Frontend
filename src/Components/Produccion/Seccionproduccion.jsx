import { useState } from "react";
import Gadget from "./Gadget";
import Registromercaderia from "./Registromercaderia";
import Registroproducto from './Registroproducto'

const Seccionproduccion = ({ setMenuproduccion }) => {
  const [submenu, setSubmenu] = useState("mercaderia");
 
  return (
    <>
      
      {submenu === 'mercaderia'&&<Registromercaderia setMenuproduccion={setMenuproduccion}/>}
      
    </>
  );
};

export default Seccionproduccion;
