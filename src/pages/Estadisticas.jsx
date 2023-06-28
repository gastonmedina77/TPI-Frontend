import { useState } from "react";
import "../css/estadisticas.scss";
import ReporteDeudores from "../Components/Reportes/ReporteDeudores";
import ReporteProveedores from "../Components/Reportes/ReporteProveedores";
import Reportepedidos from "../Components/Reportes/Reportepedidos";
import ReporteStock from "../Components/Reportes/ReporteStock";
import ReporteProducidos from "../Components/Reportes/ReporteProducidos";
import ReporteCompras from "../Components/Reportes/ReporteCompras";
import ReporteVentas from "../Components/Reportes/ReporteVentas";

const Estadisticas = () => {
  const [value, setValue] = useState("");
  const [generar, setGenerar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setGenerar(value)
  };

  

  return (
    <div className="containerUser">
      <div className="contentUser">
        <div className="headUsers">
          <h2> Estadísticas</h2>
          <span>
            {" "}
            <span className="history">Home</span> / Estadísticas
          </span>
        </div>
        <div className="reporteGenerador">
          <div className="selecteRango">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Periodo de:
                </label>
                <input
                  placeholder=""
                  className="form-input"
                  name="dni"
                  id="dni"
                  type="date"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  a:
                </label>
                <input
                  placeholder=""
                  className="form-input"
                  name="dni"
                  id="dni"
                  type="date"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  *Módulo:
                </label>
                <select
                  name="pets"
                  id="pet-select"
                  className="form-input "
                  value={value}
                  onChange={() => setValue(event.target.value)}
                  required
                >
                  <option value="">Seleccione el módulo</option>
                  <option value="deudores">Deudores</option>
                  <option value="proveedores">Proveedores - ultimos movimiento</option>
                  <option value="pedidos">Pedidos</option>
                  <option value="stock">Stock</option>
                  <option value="producidos">Producidos</option>
                  <option value="compras">Compras</option>
                  <option value="ventas">Ventas</option>
                </select>
              </div>
              <div className="form-group">
                <button className="form-button">GENERAR</button>
              </div>
              <div className="form-group">
                <span>
                  *Si no selecciona un periodo se mostrará todo hasta el dia de
                  la fecha
                </span>
              </div>
            </form>
          </div>
        </div>
            {generar === 'deudores'&&<ReporteDeudores/>}
            {generar === 'proveedores'&&<ReporteProveedores/>}
            {generar === 'pedidos'&&<Reportepedidos/>}
            {generar === 'stock'&&<ReporteStock/>}
            {generar === 'producidos'&&<ReporteProducidos/>}
            {generar === 'compras'&&<ReporteCompras/>}
            {generar === 'ventas'&&<ReporteVentas/>}
      </div>

    </div>
  );
};

export default Estadisticas;
