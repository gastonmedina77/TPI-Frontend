import { useState } from "react";
import Gadget from "./Gadget";
import Registromercaderia from "./Registromercaderia";
import Registroproducto from './Registroproducto'

const Seccionproduccion = ({ setMenuproduccion }) => {
  const [submenu, setSubmenu] = useState("mercaderia");
 

  return (
    <>
      <br />
      <Gadget />
      <br />
      <div className="navregistroventas">
        <ul>
          <li
            className={submenu === "mercaderia" ? "active" : ""}
            onClick={() => setSubmenu("mercaderia")}
          >
            Registro de Insumos
          </li>
          <li
            className={submenu === "producido" ? "active" : ""}
            onClick={() => setSubmenu("producido")}
          >
            Registro de Producción
          </li>
        </ul>
      </div>
      {submenu === 'mercaderia'&&<Registromercaderia setMenuproduccion={setMenuproduccion}/>}
      {submenu === 'producido'&&<Registroproducto setMenuproduccion={setMenuproduccion} />}
     
    </>
  );
};

export default Seccionproduccion;
