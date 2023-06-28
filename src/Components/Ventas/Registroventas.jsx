import Paginacion from "../Paginacion"
import Search from "../Search"
import { FiCheckSquare } from "react-icons/fi";
import Tableventas from "./Tableventas";

const Registroventas = ({setSubmenu}) => {
  return (
    <div className="sectionTable">
    <div className="viewTable">
      <div className="headTable">
        <h4> <FiCheckSquare/> Registro Ventas</h4>
        
        </div>
        
     
     
      <div className="bodyTable">
        <div className="contentSearch">
          <Search/>
          
        </div>
        
       <Tableventas setSubmenu={setSubmenu}/>
         
        
         <Paginacion/>
      </div>
    </div>
    
   </div>
  )
}

export default Registroventas