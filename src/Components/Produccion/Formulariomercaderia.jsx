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
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Id:
              </label>
              <input
                required
                placeholder="Id autogenerado"
                className="form-input"
                type="number"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Nombre:*
              </label>
              <input
                required
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