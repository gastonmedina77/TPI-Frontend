import { FiCheckSquare } from "react-icons/fi";
import Search from "../Search";
import Paginacion from "../Paginacion";
import Tablepedidos from './Tablepedidos'


const Registropedidos = ({setSubmenu}) => {


    const handleCliente = () => {

      return location.replace('/reciplas/dashboard/usuarios')
    };
  return (
    <div className="sectionTable">
        <div className="viewTable">
          <div className="headTable">
            <h4> <FiCheckSquare/> Registro Pedidos</h4>
            
                <button 
            className='addClient'
            onClick={handleCliente}
            >Agregar Cliente</button>
            <button 
            className='addClient'
            onClick={()=>setSubmenu('addpedido')}
            >Agregar Pedido</button>
            </div>
            
         
         
          <div className="bodyTable">
            <div className="contentSearch">
              <Search/>
              
            </div>
            
           <Tablepedidos setSubmenu={setSubmenu}/>
             
            
             <Paginacion/>
          </div>
        </div>
        
       </div>
  )
}

export default Registropedidos