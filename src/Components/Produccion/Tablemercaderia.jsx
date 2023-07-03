import { FiTrash, FiEye, FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";

const Tablemercaderia = ({setMenuproduccion}) => {
  const Modalinfo = () => {
    Swal.fire({
      title: "<strong>Detalle Producto <u></u></strong>",
      icon: "info",
      html:
        '<p align="left"><b>Id: </b> 1234 </br></br> ' +
        "<b>Nombre: </b> Alfajor Fulbito </br></br>" +
        "<b>Stock: </b> 20 </br></br>" +
        "<b>Precio: </b> 100 </br></br>" +
        "<b>Categoria: </b> Alfajores </br></br>" +
        "<b>Fecha Actualización: </b> 22-08-23 </br></br>" ,
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
      title: "¿Esta seguro de eliminar este Producto?",
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
            <th>Id</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Fecha actualización</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1234</td>
            <td>Alfajor Fulbito</td>
            <td>20</td>
            <td>100</td>
            <td>Alfajores</td>
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
            <td>1234</td>
            <td>Alfajor Fulbito</td>
            <td>20</td>
            <td>100</td>
            <td>Alfajores</td>
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
            <td>1234</td>
            <td>Alfajor Fulbito</td>
            <td>20</td>
            <td>100</td>
            <td>Alfajores</td>
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
            <td>1234</td>
            <td>Alfajor Fulbito</td>
            <td>20</td>
            <td>100</td>
            <td>Alfajores</td>
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
            <td>1234</td>
            <td>Alfajor Fulbito</td>
            <td>20</td>
            <td>100</td>
            <td>Alfajores</td>
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
        </tbody>
      </table>
    </>
  );
};

export default Tablemercaderia;
