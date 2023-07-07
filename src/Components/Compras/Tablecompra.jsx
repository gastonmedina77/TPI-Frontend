import { FiTrash,FiEye,FiEdit } from "react-icons/fi";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState, useEffect } from "react";

const URI = 'http://localhost:3000/'

const Tablecompra = ({setMenucompras}) => {

  //funcion para mostrar todos los productos
  const [compras, setCompras] = useState([])
  useEffect(()=>{
    getCompras()
  }, [])
 
  
  const getCompras = async () =>{
    const res = await axios.get(URI+'compras')
    setCompras(res.data)
  }

  //funcion para eliminar una venta
  const deleteCompra = async (id) =>{
    const URICOM = URI + 'eliminacompra/'
    
    Swal.fire({
      title: '¿Esta seguro de Eliminar la Compra?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) 
        borraCompra()
    })

    const borraCompra = async () =>{
      await axios.delete(`${URICOM}${id}`)
      Swal.fire(
        'Eliminar!',
        'Se ha eliminado la compra.',
        'éxito'
      )
      setSubmenu('compras')
    }
  }

  const Modalinfo=()=>{
      Swal.fire({
        title: '<strong>Detalle Compra <u>#</u></strong>',
        icon: 'info',
        html:
        '<p align="left"><b>Id Compra: </b> 0032 </br></br> ' +
        '<b>Fecha: </b> 22-06-23 </br></br> ' +
        '<b>Proveedor: </b> Arcor </br></br>' +
                    
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
    
    // const Modaldelete=()=>{
    //     Swal.fire({
    //   title: '¿Esta seguro de Eliminar la Compra?',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: '¡Sí, bórralo!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Eliminar!',
    //       'Su archivo ha sido eliminado.',
    //       'éxito'
    //     )
    //   }
    // })
    // }
    
    const handleEdit=(e)=>{
      setMenucompras(e)
    }
    
      const styleRow = {
        "display": "block" ,
        "width": "100px" ,
        "align": "right"
      }
      const styleRow2 = {
        "display": "block" ,
        "width": "50px"
      }

/*       return (
       <>

        <table>
          <thead>
            <tr>
              <th align={"left"} >Id</th>
              <th align={"right"} >Fecha</th>
              <th align={"left"} >Proveedor</th>
              <th align={"left"} >Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styleRow2} >034</td>
              <td style={styleRow} >25-05-23</td>
              <td style={styleRow} >Arcorrrrrrr </td>
              <td style={styleRow} >
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
             
              <td style={styleRow2} >003444</td>
              <td style={styleRow} >25-05-23</td>
              <td style={styleRow} > <span>Ar</span> </td>
              <td style={styleRow} >
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
             
            <td style={styleRow2} >0</td>
              <td style={styleRow} >25-05-23</td>
              <td style={styleRow} > <span>Ar</span> </td>
              <td style={styleRow} >
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
             
              <td style={styleRow2} >3444</td>
              <td style={styleRow} >25</td>
              <td style={styleRow} > <span>Ar</span> </td>
              <td style={styleRow} >
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
             
              <td style={styleRow2} >003444</td>
              <td style={styleRow} >25-05-23</td>
              <td style={styleRow} > <span>Ar</span> </td>
              <td style={styleRow} >
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
      ) */
      
    
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Fecha</th>
          <th>Proveedor</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {compras.map((compra) => (
          <tr key={compra.compras_id}>
            <td>{compra.compras_id}</td>
            <td>{compra.fecha}</td>
            <td>{compra.proveedor}</td>
            <td>
              <div className="buttonAction">
                <span onClick={Modalinfo}>
                  <FiEye/>{" "}
                </span>
                <span onClick={()=>deleteCompra(compra.compras_id)}>
                    <FiTrash />{" "}
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Tablecompra