import { FiTrash, FiEye, FiEdit } from "react-icons/fi";
import { FiBook } from "react-icons/fi";
import Swal from "sweetalert2";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const URI = 'http://localhost:3000/'

const ShowProducts = ({setMenuproduccion}) => {
  const [nombre, setNombre] = useState('')
  const [stock, setStock] = useState('')
  const [precio, setPrecio] = useState('')
  const [categoria, setCategoria] = useState('')
  const [fecha, setFecha] = useState('')
  const {id} = useParams()

  useEffect(()=>{
    getProductById()
  }, [])

  const getProductById = async() =>{
    const res = await axios.get(URI+id)
    setNombre(res.data.producto_nombre)
    setStock(res.data.stock)
    setPrecio(res.data.precio)
    setCategoria(res.data.categoria)
    setFecha(res.data.fecha_actualizacion)
  }

  const Modalinfo = () =>{}
  
  //funcion para mostrar todos los productos
  const [products, setProduct] = useState([])
  useEffect(()=>{
    getProducts()
  }, [])
 
  
  const getProducts = async () =>{
    const res = await axios.get(URI)
    setProduct(res.data)
  }

  //funcion para eliminar un producto
  const deleteProduct = async (id) =>{
    
    Swal.fire({
      title: '¿Esta seguro de eliminar el producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) 
        borraProducto()
    })

    const borraProducto = async () =>{
      await axios.delete(`${URI}${id}`)
    
      Swal.fire(
        'Eliminar!',
        'Se ha eliminado el producto.',
        'éxito'
      )
      handleAdd('stock')
    }
  }

  const handleAdd = (e) => {
    setMenuproduccion(e);
  };
  
  return (
    <div>
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
    </div>
  )
}

export default ShowProducts;

