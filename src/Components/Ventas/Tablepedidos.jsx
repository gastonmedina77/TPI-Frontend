
import { FiTrash,FiEye,FiEdit } from "react-icons/fi";
import { FiBook } from "react-icons/fi";
import Swal from 'sweetalert2'

const Tablepedidos = ({setSubmenu}) => {
    
      const handleEdit=(e)=>{
        setSubmenu(e)
      }
    
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
          <div className="bodyTable">
            <form className="colorful-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label " htmlFor="name">
                  Id:<span className="marcas">*</span> 
                </label>
                <input
                  required
                  placeholder="Id autogenerado"
                  className="form-input"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Fecha:<span className="marcas">*</span> 
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
                  Cliente:<span className="marcas">*</span> 
                </label>
                <input
                  required
                  placeholder="Nombre Cliente"
                  className="form-input"
                  name="date"
                  id="date"
                  type="text"
                />
              </div>
              <div> </div>
            
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  <span className="marcas"></span> 
                </label>
  
              </div>
              <div className="form-group tableForm">
                <table>
                  <tr>
                    <td>
                      <label className="form-label" htmlFor="email">
                        Producto:<span className="marcas">*</span> 
                      </label>
                      <select
                        name="pets"
                        id="pet-select"
                        className="form-input "
                        required
                      >
                        <option value="">Seleccione un Producto</option>
                        <option value="argentina">Producto1</option>
                        <option value="brazil">Producto2</option>
                        <option value="uruguay">Producto3</option>
                        <option value="paraguay">Producto4</option>
                        <option value="chile">Producto5</option>
                        <option value="colombia">Producto6</option>
                      </select>
                    </td>
                    <td>
                      <label className="form-label labelsmall" htmlFor="email">
                        Cantidad:<span className="marcas">*</span> 
                      </label>
                      <input
                        required
                        placeholder="Ingrese la cantidad"
                        className="form-input"
                        name="dni"
                        id="dni"
                        type="number"
                      />
                    </td>
                    <td>
                      <label className="form-label" htmlFor="email">
                        Precio:<span className="marcas"></span> 
                      </label>
                      <input
                        placeholder="Ingrese el precio"
                        className="form-input"
                        name="dni"
                        id="dni"
                        type="number"
                      />
                    </td>
                    <td>
                      <label className="form-label" htmlFor="email">
                        Subtotal:
                      </label>
                      <label className="form-label" htmlFor="email">
                        $500
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <button className="form-button">Agregar +</button>
                  </tr>
                  <td>
                      <label className="form-label" htmlFor="email">
                        Total:
                      </label>
                      <label className="form-label" htmlFor="email">
                       <span className="totalcompra">$500</span>
                      </label>
                    </td>
                </table>
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
        )
}

export default Tablepedidos