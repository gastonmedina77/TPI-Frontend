import { FiTrash, FiEye, FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";

const Tablemercaderia = ({setMenuproduccion}) => {
  const Modalinfo = () => {
    Swal.fire({
      title: "<strong>Detalle del Insumo <u>#</u></strong>",
      icon: "info",
      html:
        '<p align="left"><b>N° de Factura: </b>, 0035 </br></br> ' +
        "<b>Insumo: </b>, Insumo 1 </br></br>" +
        "<b>Fecha de Compra: </b>, 01-08-23 </br></br>" +
        "<b>Peso: </b>, 10kg </br></br>" +
        "<b>Cantidad: </b>, 5 </br></br>" +
        "<b>Precio Unitario: </b>, $500 </br></br>" +
        "<b>Proveedor: </b>, Proveedor 1 </br></br></p>" ,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Genial!",
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: "Cancelar",
      cancelButtonAriaLabel: "Thumbs down",
    });
  };

  const Modaldelete = () => {
    Swal.fire({
      title: "¿Esta seguro de eliminar este registro de compra de insumo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, bórralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminar!", "Su archivo ha sido eliminado.", "éxito");
      }
    });
  };

  const handleEdit = (e) => {
    setMenuproduccion(e)
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Insumo</th>
            <th>Proveedor</th>
            <th>Fecha de compra</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Producto 1</td>
            <td>Proveedor 1</td>
            <td> 22-08-23 </td>
            <td>
              <div className="buttonAction">
                <span onClick={Modalinfo}>
                  <FiEye />{" "}
                </span>
                <span
                  onClick={() => {
                    handleEdit("addMercaderia");
                  }}
                >
                  <FiEdit />{" "}
                </span>
                <span onClick={Modaldelete}>
                  <FiTrash />{" "}
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Producto 1</td>
            <td>Proveedor 1</td>
            <td> 22-08-23 </td>
            <td>
              <div className="buttonAction">
                <span onClick={Modalinfo}>
                  <FiEye />{" "}
                </span>
                <span
                  onClick={() => {
                    handleEdit("addClient");
                  }}
                >
                  <FiEdit />{" "}
                </span>
                <span onClick={Modaldelete}>
                  <FiTrash />{" "}
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Producto 1</td>
            <td>Proveedor 1</td>
            <td> 22-08-23 </td>
            <td>
              <div className="buttonAction">
                <span onClick={Modalinfo}>
                  <FiEye />{" "}
                </span>
                <span
                  onClick={() => {
                    handleEdit("addClient");
                  }}
                >
                  <FiEdit />{" "}
                </span>
                <span onClick={Modaldelete}>
                  <FiTrash />{" "}
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Producto 1</td>
            <td>Proveedor 1</td>
            <td> 22-08-23 </td>
            <td>
              <div className="buttonAction">
                <span onClick={Modalinfo}>
                  <FiEye />{" "}
                </span>
                <span
                  onClick={() => {
                    handleEdit("addClient");
                  }}
                >
                  <FiEdit />{" "}
                </span>
                <span onClick={Modaldelete}>
                  <FiTrash />{" "}
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Producto 1</td>
            <td>Proveedor 1</td>
            <td> 22-08-23 </td>
            <td>
              <div className="buttonAction">
                <span onClick={Modalinfo}>
                  <FiEye />{" "}
                </span>
                <span
                  onClick={() => {
                    handleEdit("addClient");
                  }}
                >
                  <FiEdit />{" "}
                </span>
                <span onClick={Modaldelete}>
                  <FiTrash />{" "}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Tablemercaderia;
