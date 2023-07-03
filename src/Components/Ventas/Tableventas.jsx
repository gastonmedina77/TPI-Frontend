import { FiEye } from "react-icons/fi";
import Swal from 'sweetalert2'

const Tableventas = () => {
    const Modalinfo=()=>{
        Swal.fire({
          title: '<strong>Detalle de la Venta <u>#</u></strong>',
          icon: 'info',
          html:
            '<p align="left"><b>Id Venta: </b> 0032 </br></br> ' +
            '<b>Fecha: </b> 22-06-23 </br></br> ' +
            '<b>Cliente: </b> Aldo </br></br>' +
                        
            '<table> <thead> <tr> <th>Linea</th> <th>Producto</th> <th>Cantidad</th> <th>Precio Unitario</th> <th>Subtotal</th> </tr> </thead> <tbody> ' +
            '<tr> <td>1</td> <td>Alfajor</td> <td> 2 </td> <td> 150 </td> <td> 300 </td></tr>  ' +
            '<tr> <td>2</td> <td>Turron</td> <td> 4 </td> <td> 100 </td> <td> 400 </td></tr>  ' +
            '<tr> <td>3</td> <td>Galletitas</td> <td> 1 </td> <td> 500 </td> <td> 500 </td></tr> </tbody> </table> ' +
            '</br> ' +
            '<p align="right"><b>Total: </b>$1200 </br></br>'
          ,
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText:
            'Genial!',
          confirmButtonAriaLabel: 'Thumbs up, great!',
          cancelButtonText:
            'Cancelar',
          cancelButtonAriaLabel: 'Thumbs down'
        })
      }

      return (
       <>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0032</td>
              <td> 22-08-23 </td>
              <td> Aldo </td>
              <td>
                <div className="buttonAction">
                    <span onClick={Modalinfo}>
                      <FiEye/>
                    </span>
                </div>
              </td>
            </tr>
            
            <tr>
              <td>0032</td>
              <td> 22-08-23 </td>
              <td> Aldo </td>
              <td>
                <div className="buttonAction">
                    <span onClick={Modalinfo} >
                      <FiEye/>
                    </span>
                 
                </div>
              </td>
            </tr>

            <tr>
              <td>0032</td>
              <td> 22-08-23 </td>
              <td> Aldo </td>
              <td>
                <div className="buttonAction">
                    <span onClick={Modalinfo} >
                      <FiEye/>
                    </span>
                 
                </div>
              </td>
            </tr>
        
            <tr>
              <td>0032</td>
              <td> 22-08-23 </td>
              <td> Aldo </td>
              <td>
                <div className="buttonAction">
                    <span onClick={Modalinfo} >
                      <FiEye/>
                    </span>
                 
                </div>
              </td>
            </tr>


          </tbody>
        </table>
       </>
      )
}

export default Tableventas