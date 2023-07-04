import { FiTrash, FiEye, FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:3000/'

const ShowProducts = () => {
  const Modalinfo = () => {};
  
  //const Modaldelete = async(id) => {
  //  await axios.delete(`${URI}${id}`)
  //  getProducts()
  //};
  const handleEdit = () => {};
 
  const [products, setProduct] = useState([])
  useEffect(()=>{
    getProducts()
  }, [])
 
  //funcion para mostrar todos los productos
  const getProducts = async () =>{
    const res = await axios.get(URI)
    setProduct(res.data)
  }

  const deleteProduct = async (id) =>{
    await axios.delete(`${URI}${id}`)
    setMenuproduccion('stock')
    getProducts()
  }
  
  
  return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.producto_id}>
              <td>{product.producto_id}</td>
              <td>{product.producto_nombre}</td>
              <td>{product.stock}</td>
              <td>{product.precio} </td>
              <td>{product.categoria} </td>
              <td>
                <div className="buttonAction">
                  <span onClick={Modalinfo()}>
                    <FiEye />{" "}
                  </span>
                  <span
                    onClick={() => {
                      handleEdit("addMercaderia");
                    }}
                  >
                    <FiEdit />{" "}
                  </span>
                  <span onClick={()=>deleteProduct(product.producto_id)}>
                    <FiTrash />{" "}
                  </span>
                </div>
              </td>
            </tr>
            ))
          }
        </tbody>
      </table>
  );
};

export default ShowProducts;




//const Tablemercaderia = ({setMenuproduccion}) => {
//  const Modalinfo = (ev) => {
//    ev.preventDefault();
//    const id = ev.target.id.value
//    console.log(id);
//    Swal.fire({
//      title: "<strong>Detalle del Insumo <u>#</u></strong>",
//      icon: "info",
//      html:
//        <h1>{elemento.id}</h1> +
//        '<p align="left"><b>N° de Factura: </b>, 0035 </br></br> ' +
//        "<b>Insumo: </b>, Insumo 1 </br></br>" +
//        "<b>Fecha de Compra: </b>, 01-08-23 </br></br>" +
//        "<b>Peso: </b>, 10kg </br></br>" +
//        "<b>Cantidad: </b>, 5 </br></br>" +
//        "<b>Precio Unitario: </b>, $500 </br></br>" +
//        "<b>Proveedor: </b>, Proveedor 1 </br></br></p>" ,
//      showCloseButton: true,
//      showCancelButton: true,
//      focusConfirm: false,
//      confirmButtonText: "Genial!",
//      confirmButtonAriaLabel: "Thumbs up, great!",
//      cancelButtonText: "Cancelar",
//      cancelButtonAriaLabel: "Thumbs down",
//    });
//  };

//  const Modaldelete = () => {
//    Swal.fire({
//      title: "¿Esta seguro de eliminar este registro de compra de insumo?",
//      icon: "warning",
//      showCancelButton: true,
//      confirmButtonColor: "#3085d6",
//      cancelButtonColor: "#d33",
//      confirmButtonText: "¡Sí, bórralo!",
//    }).then((result) => {
//      if (result.isConfirmed) {
//        Swal.fire("Eliminar!", "Su archivo ha sido eliminado.", "éxito");
//      }
//    });
//  };
//
//  const handleEdit = (e) => {
//    setMenuproduccion(e)
//  };
