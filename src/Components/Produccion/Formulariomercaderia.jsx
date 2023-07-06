import { FiBook } from "react-icons/fi";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:3000/'

const Formulariomercaderia = ({setMenuproduccion}) => {

  const [nombre, setNombre] = useState('')
  const [stock, setStock] = useState('')
  const [precio, setPrecio] = useState('')
  const [categoria, setCategoria] = useState('')
  const [fecha, setFecha] = useState('')

  const handleproveedor=()=>{
    return location.replace('usuarios')
  }

  const handleproducto=()=>{
    return location.replace('compras')
  }

  const handleAdd = (e) => {
    setMenuproduccion(e);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post(URI, {producto_nombre:nombre, stock:stock, precio:precio, categoria:categoria, fecha_actualizacion:fecha})

    Swal.fire({
      title: "¿Quieres guardar el Nuevo Producto?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `No Guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("¡Salvado!", "", "Éxito");
        setMenuproduccion('stock')
      } else if (result.isDenied) {
        Swal.fire("Los cambios no se guardan", "", "info");
      }
    });
  };

  return (
    <div className="sectionTable">
      <div className="viewTable">
        <div className="headTable">
          <h4>
            {" "}
            <FiBook /> Formulario de Registro de Producto
          </h4>
          <button className="addClient" onClick={() => handleAdd("stock")}>
            Volver a Productos
          </button>
        </div>

        <div className="bodyTable">
          <form className="colorful-form" onSubmit={handleSubmit}>
            {/* <div className="form-group">
              <label className="form-label" htmlFor="name">
                Id:
              </label>
              <input
                required
                placeholder="Id autogenerado"
                className="form-input"
                type="number"
              />
            </div> */}
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Nombre:*
              </label>
              <input
                required
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}
                placeholder="Nombre del producto"
                className="form-input"
                name="Nombre"
                id="Nombre"
                type="text"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Stock:*
              </label>
              <input
                required
                value={stock}
                onChange={(e)=>setStock(e.target.value)}
                placeholder="Ingrese la cantidad"
                className="form-input"
                name="Stock"
                id="Stock"
                type="number"
              />
            </div>
                        
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Precio:*
              </label>
              <input
                required
                value={precio}
                onChange={(e)=>setPrecio(e.target.value)}
                placeholder="Indique el precio"
                className="form-input"
                name="Precio"
                id="Precio"
                type="number"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Categoria:
              </label>
              <input
                value={categoria}
                onChange={(e)=>setCategoria(e.target.value)}
                placeholder="Categoria del producto"
                className="form-input"
                name="Categoria"
                id="Categoria"
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Fecha Actualización:*
              </label>
              <input
                value={fecha}
                onChange={(e)=>setFecha(e.target.value)}
                placeholder="Fecha autogenerada"
                className="form-input"
                name="Fecha"
                id="Fecha"
                type="date"
              />
            </div>
            <button className="form-button" type="submit">
              Guardar
            </button>
          </form>

          <span className="formAlert">
            {" "}
            los campos con el signo ( * ) son obligatorios
          </span>
        </div>
      </div>
    </div>
  )
}

export default Formulariomercaderia