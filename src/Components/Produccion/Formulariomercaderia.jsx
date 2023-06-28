import { FiBook } from "react-icons/fi";
import Swal from "sweetalert2";

const Formulariomercaderia = ({setMenuproduccion}) => {


  const handleproveedor=()=>{
    return location.replace('usuarios')
  }

  const handleproducto=()=>{
    return location.replace('compras')
  }

  const handleAdd = (e) => {
    setMenuproduccion(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "¿Quieres guardar los Datos de la Mercaderia?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `No Guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("¡Salvado!", "", "éxito");
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
            <FiBook /> Formularo de Registro de Compras
          </h4>
          <button className="addClient" onClick={() => handleAdd("stock")}>
            Volver a Registro
          </button>
        </div>

        <div className="bodyTable">
          <form className="colorful-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                *N° de Factura:
              </label>
              <input
                required
                placeholder="Ingrese el numero de la factura"
                className="form-input"
                type="number"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                *Fecha de compra:
              </label>
              <input
                required
                placeholder="Seleccione la fecha de la compra"
                className="form-input"
                name="nombre"
                id="nombre"
                type="date"
              />
            </div>
            <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    *Producto:
                  </label>
                  <select name="pets" id="pet-select" className="form-input " required>
                    <option value="">Seleccione el producto</option>
                    <option value="argentina">Producto 1</option>
                    <option value="brazil">Producto 2</option>
                    <option value="brazil">Producto 3</option>
                    <option value="brazil">Producto 4</option>
                    <option value="brazil">Producto 5</option>
                  </select>
                </div>
                <div className="form-group">
                <button className="form-button"
                  onClick={handleproducto}
                >
             Añadir +
            </button>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                *Peso:
              </label>
              <input
                required
                placeholder="Ingres el peso estimado"
                className="form-input"
                name="date"
                id="date"
                type="text"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                *Cantidad:
              </label>
              <input
                required
                placeholder="Indique la cantidad"
                className="form-input"
                name="dni"
                id="dni"
                type="number"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                *Precio Unitario:
              </label>
              <input
                required
                placeholder="Indique el precio unitario"
                className="form-input"
                name="dni"
                id="dni"
                type="number"
              />
            </div>
            <div className="form-group">
                  
                </div>
            <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    *Proovedor:
                  </label>
                  <select name="pets" id="pet-select" className="form-input " required>
                    <option value="">Seleccione el proveedor</option>
                    <option value="argentina">Proveedor 1</option>
                    <option value="brazil">Proveedor 2</option>
                    <option value="brazil">Proveedor 3</option>
                    <option value="brazil">Proveedor 4</option>
                    <option value="brazil">Proveedor 5</option>
                  </select>
                </div>
                <div className="form-group">
                <button className="form-button"
                onClick={handleproveedor}
                >
             Añadir +
            </button>
            </div>
            <button className="form-button" type="submit">
              GUARDAR
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