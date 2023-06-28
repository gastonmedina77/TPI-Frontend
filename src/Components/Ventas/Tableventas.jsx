import { FiEye } from "react-icons/fi";
import Swal from 'sweetalert2'

const Tableventas = () => {
    const Modalinfo=()=>{
        Swal.fire({
          title: '<strong>Detalle del Pedido <u>#</u></strong>',
          icon: 'info',
          html:
            '<p align="left"><b>N° de Factura: </b>, 0032 </br></br> ' +
            '<b>N° de Orden: </b>, 0035 </br></br> ' +
            '<b>Cliente: </b>, Aldo </br></br>' +
            '<b>Fecha de Pedido: </b>, 01-08-23 </br></br>' +
            '<b>Fecha de entrega: </b>, 22-08-23 </br></br>' +
            '<b>Detalle:</p></br></br> </b> <b>Nombre: </b>producto 1 &nbsp  <b>Cantidad: </b> 24  &nbsp<b>Monto: </b>  $2000</br></br> ' +
            ' <b>Nombre: </b>producto 2 &nbsp  <b>Cantidad: </b> 14  &nbsp<b>Monto: </b>  $5000</br></br> '+ 
            '<b>Nombre: </b>producto 3 &nbsp  <b>Cantidad: </b> 4  &nbsp<b>Monto: </b>  $7000</br></br> ' +
            '<b>IVA: </b>$800 </br></br>'+
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
    
     
    
     
    
    
      return (
       <>
        <table>
          <thead>
            <tr>
              <th>N° Factura</th>
              <th>N° Orden</th>
              <th>Fecha de Entrega</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             
              <td>0032</td>
              <td>0032</td>
              <td> 22-08-23 </td>
              <td>
              <div className="buttonAction">
                    <span
                    onClick={Modalinfo}
                    ><FiEye/> </span>
                 
                </div>
              </td>
            
            </tr>
            <tr>
             
            <td>0032</td>
              <td>0032</td>
              <td> 22-08-23 </td>
              <td>
              <div className="buttonAction">
                    <span
                    onClick={Modalinfo}
                    ><FiEye/> </span>
                 
                </div>
              </td>
            
            </tr>
            <tr>
             
            <td>0032</td>
              <td>0032</td>
              <td> 22-08-23 </td>
             <td>
             <div className="buttonAction">
                   <span
                   onClick={Modalinfo}
                   ><FiEye/> </span>
                 
               </div>
             </td>
           
           </tr>
           <tr>
             
           <td>0032</td>
              <td>0032</td>
              <td> 22-08-23 </td>
             <td>
             <div className="buttonAction">
                   <span
                   onClick={Modalinfo}
                   ><FiEye/> </span>
                 
               </div>
             </td>
           
           </tr>
           <tr>
             
           <td>0032</td>
              <td>0032</td>
              <td> 22-08-23 </td>
             <td>
             <div className="buttonAction">
                   <span
                   onClick={Modalinfo}
                   ><FiEye/> </span>
               
               </div>
             </td>
           
           </tr>
          </tbody>
        </table>
       </>
      )
}

export default Tableventas