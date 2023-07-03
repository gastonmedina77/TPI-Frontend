import { FiCheckSquare } from "react-icons/fi";
import Search from "../Search";
import Paginacion from "../Paginacion";
import Tablemercaderia from "./Tablemercaderia";

const Registromercaderia = ({setMenuproduccion}) => {
  return (
    <div className="sectionTable">
      <div className="viewTable">
        <div className="headTable">
          <h4> <FiCheckSquare/> Productos Registrados</h4>
          <button 
            className='addClient'
            onClick={()=>setMenuproduccion('addMercaderia')}
          >Registrar Producto</button>
        </div>
        
      <div className="bodyTable">
        <div className="contentSearch">
          <Search/>
        </div>
        
        <Tablemercaderia setMenuproduccion={setMenuproduccion}/>
        
        <Paginacion/>
      </div>
    </div>
    
   </div>
  )
}

export default Registromercaderia