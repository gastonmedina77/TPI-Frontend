import { FiBook } from "react-icons/fi";
import Swal from "sweetalert2";

const Formcompra = ({setMenucompras}) => {
  const handleAdd = (e) => {
    setMenucompras(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "¿Quieres guardar los Datos de la Compra?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `No Guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("¡Salvado!", "", "éxito");
        setMenucompras('registrocompra')
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
          <button className="addClient" onClick={() => handleAdd("registrocompra")}>
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
                *Nombre Comercial:
              </label>
              <input
                required
                placeholder="Ingres el nombre del proveedor"
                className="form-input"
                name="date"
                id="date"
                type="text"
              />
            </div>
            <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    *Estado:
                  </label>
                  <select name="pets" id="pet-select" className="form-input " required>
                    <option value="">Seleccione un Estado</option>
                    <option value="argentina">Recibido</option>
                    <option value="brazil">En espera</option>
                  </select>
                </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                *Factura del proveedor(.pdf):
              </label>
              <input
                required
                placeholder="Suba el archivo .pdf"
                className="form-input"
                name="dni"
                id="dni"
                type="file"
              />
            </div>
            <div className="form-group">
                 
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
  );
}

export default Formcompra