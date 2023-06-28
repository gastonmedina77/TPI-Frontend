
import { FiTrash,FiEye,FiEdit } from "react-icons/fi";
import Swal from 'sweetalert2'

const Tablepedidos = ({setSubmenu}) => {
    const Modalinfo=()=>{
        Swal.fire({
          title: '<strong>Detalle del Pedido <u>#</u></strong>',
          icon: 'info',
          html:
            '<p align="left"><b>N° de Orden: </b>, 0035 </br></br> ' +
            '<b>Cliente: </b>, Aldo </br></br>' +
            '<b>Fecha de Pedido: </b>, 01-08-23 </br></br>' +
            '<b>Fecha de entrega: </b>, 22-08-23 </br></br>' +
            '<b>Detalle:</p></br></br> </b> <b>Nombre: </b>producto 1 &nbsp  <b>Cantidad: </b> 24  &nbsp<b>Monto: </b>  $2000</br></br> ' +
            ' <b>Nombre: </b>producto 2 &nbsp  <b>Cantidad: </b> 14  &nbsp<b>Monto: </b>  $5000</br></br> '+ 
            '<b>Nombre: </b>producto 3 &nbsp  <b>Cantidad: </b> 4  &nbsp<b>Monto: </b>  $7000</br></br> ' +
            '<b>Total a Pagar: </b>$14000 </br></br>'
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
        title: '¿Esta seguro de Eliminar el Pedido?',
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
        setSubmenu(e)
      }
    
    
      return (
       <>
        <table>
          <thead>
            <tr>
              <th>N° Orden</th>
              <th>Cliente</th>
              <th>Fecha de Entrega</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             
              <td>0035</td>
              <td>Aldo</td>
              <td> 22-08-23 </td>
              <td>
              <div className="buttonAction">
                    <span
                    onClick={Modalinfo}
                    ><FiEye/> </span>
                    <span
                    onClick={()=>{handleEdit('addpedido')}}
                    ><FiEdit/> </span>
                    <span
                    onClick={Modaldelete}
                    ><FiTrash/> </span>
                </div>
              </td>
            
            </tr>
            <tr>
             
              <td>0035</td>
              <td>Aldo</td>
              <td> 22-08-23 </td>
              <td>
              <div className="buttonAction">
                    <span
                    onClick={Modalinfo}
                    ><FiEye/> </span>
                    <span
                    onClick={()=>{handleEdit('addpedido')}}
                    ><FiEdit/> </span>
                    <span
                    onClick={Modaldelete}
                    ><FiTrash/> </span>
                </div>
              </td>
            
            </tr>
            <tr>
             
             <td>0035</td>
             <td>Aldo</td>
             <td> 22-08-23 </td>
             <td>
             <div className="buttonAction">
                   <span
                   onClick={Modalinfo}
                   ><FiEye/> </span>
                   <span
                   onClick={()=>{handleEdit('addpedido')}}
                   ><FiEdit/> </span>
                   <span
                   onClick={Modaldelete}
                   ><FiTrash/> </span>
               </div>
             </td>
           
           </tr>
           <tr>
             
             <td>0035</td>
             <td>Aldo</td>
             <td> 22-08-23 </td>
             <td>
             <div className="buttonAction">
                   <span
                   onClick={Modalinfo}
                   ><FiEye/> </span>
                   <span
                   onClick={()=>{handleEdit('addpedido')}}
                   ><FiEdit/> </span>
                   <span
                   onClick={Modaldelete}
                   ><FiTrash/> </span>
               </div>
             </td>
           
           </tr>
           <tr>
             
             <td>0035</td>
             <td>Aldo</td>
             <td> 22-08-23 </td>
             <td>
             <div className="buttonAction">
                   <span
                   onClick={Modalinfo}
                   ><FiEye/> </span>
                   <span
                   onClick={()=>{handleEdit('addpedido')}}
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

export default Tablepedidos