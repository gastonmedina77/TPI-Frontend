
import { FiTrash,FiEye,FiEdit } from "react-icons/fi";
import Swal from 'sweetalert2'

const Tablecompra = ({setMenucompras}) => {
    const Modalinfo=()=>{
        Swal.fire({
          title: '<strong>Detalle Compra <u>#</u></strong>',
          icon: 'info',
          html:
            '<p align="left"><b>N° de Factura: </b>00354 </br></br> ' +
            '<b>Fecha de Compra: </b>, 25-05-23 </br></br>' +
            '<b>Nombre Comercial: </b>, Proveedor 1 </br></br>' +
            '<b>Estado: </b>, RECIBIDO </br></br>' +
            '<b>Archivo: </b>, Factura1.pdf ' +
            '<button  background-color: "#ff5f59">Descargar</button></br></br> '
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
    
      const Modaldelete=()=>{
          Swal.fire({
        title: '¿Esta seguro de Eliminar la Compra?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, bórralo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminar!',
            'Su archivo ha sido eliminado.',
            'éxito'
          )
        }
      })
      }
    
      const handleEdit=(e)=>{
        setMenucompras(e)
      }
    
    
      return (
       <>
        <table>
          <thead>
            <tr>
              <th>N° Factura</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             
              <td>0034</td>
              <td>25-05-23</td>
              <td> <span className='activoTable'>Recibido</span> </td>
              <td>
              <div className="buttonAction">
                    <span
                    onClick={Modalinfo}
                    ><FiEye/> </span>
                    <span
                    onClick={()=>{handleEdit('addCompra')}}
                    ><FiEdit/> </span>
                    <span
                    onClick={Modaldelete}
                    ><FiTrash/> </span>
                </div>
              </td>
            
            </tr>
            <tr>
             
            <td>0034</td>
              <td>25-05-23</td>
              <td> <span className='activoTable'>Recibido</span> </td>
              <td>
              <div className="buttonAction">
              <span
                    onClick={Modalinfo}
                    ><FiEye/> </span>
                    <span
                    onClick={()=>{handleEdit('addCompra')}}
                    ><FiEdit/> </span>
                    <span
                    onClick={Modaldelete}
                    ><FiTrash/> </span>
                </div>
              </td>
             
            </tr>
            <tr>
             
            <td>0034</td>
              <td>25-05-23</td>
              <td> <span className='activoTable'>Recibido</span> </td>
              <td>
              <div className="buttonAction">
              <span
                    onClick={Modalinfo}
                    ><FiEye/> </span>
                    <span
                    onClick={()=>{handleEdit('addCompra')}}
                    ><FiEdit/> </span>
                     <span
                    onClick={Modaldelete}
                    ><FiTrash/> </span>
                </div>
              </td>
             
            </tr>
            <tr>
             
            <td>0034</td>
              <td>25-05-23</td>
              <td> <span className='activoTable'>Recibido</span> </td>
              <td>
              <div className="buttonAction">
              <span
                    onClick={Modalinfo}
                    ><FiEye/> </span>
                    <span
                    onClick={()=>{handleEdit('addCompra')}}
                    ><FiEdit/> </span>
                    <span
                    onClick={Modaldelete}
                    ><FiTrash/> </span>
                </div>
              </td>
             
            </tr>
            <tr>
             
            <td>0034</td>
              <td>25-05-23</td>
              <td> <span className='activoTable'>Recibido</span> </td>
              <td>
                <div className="buttonAction">
                <span
                    onClick={Modalinfo}
                    ><FiEye/> </span>
                    <span
                    onClick={()=>{handleEdit('addCompra')}}
                    ><FiEdit/> </span>
                    <span
                    onClick={Modaldelete}
                    ><FiTrash/> </span>
                </div>
              </td>
        
            </tr>
          </tbody>
        </table>
       </>
      )
      }
export default Tablecompra