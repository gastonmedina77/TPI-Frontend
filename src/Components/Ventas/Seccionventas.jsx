
import { useState } from "react";
import Registropedidos from "./Registropedidos";
import Formpedido from "./Formpedido";
import Registroventas from "./Registroventas";

const Seccionventas = ({ setMenuventas }) => {
  const [submenu, setSubmenu] = useState("pedidos");
  const handleAddsales = (e) => {
    setMenuventas(e);
  };

  return (
    <>
      <div className="navregistroventas">
        <ul>
          <li
            className={submenu === "pedidos" ? "active" : ""}
            onClick={() => setSubmenu("pedidos")}
          >
            Registrar Nueva Venta
          </li>
          <li
            className={submenu === "ventas" ? "active" : ""}
            onClick={() => setSubmenu("ventas")}
          >
            Mostrar Ventas Realizadas
          </li>
        </ul>
      </div>
      
      {submenu === 'pedidos'&&<Registropedidos setSubmenu={setSubmenu}/>}
      {submenu === 'ventas'&&<Registroventas setSubmenu={setSubmenu}/>}
      
    </>
  );
};

export default Seccionventas;
