import { TfiAgenda,TfiBarChartAlt } from "react-icons/tfi";
import { useState } from 'react';
import Formcompra from '../Components/Compras/Formcompra'
import Sectioncompras from "../Components/Compras/Sectioncompras";
import SeccionEstadisticacompra from "../Components/Compras/SeccionEstadisticacompra";

const Shopping = () => {
    const [menucompras, setMenucompras] = useState('registrocompra');
 

    const handleMenu=(e)=>{
      setMenucompras(e)
    }
  return (
    <div className="containerUser">
      <div className="contentUser">
        <div className="headUsers">
          <h2>Compras</h2>
          <span> <span className='history'>Home</span> / Compras</span>
        </div>
      <div className="gadgetUsers">
        <div className={`contentGadget ${menucompras ==='registrocompra'?'active':''}`}
          onClick={()=>handleMenu('registrocompra')}
        >
          <TfiAgenda className='iconGadget'/>
          <h4>Registros</h4>
          <p>Registración de las compras realizadas</p>
        </div>
      
        <div className={`contentGadget ${menucompras ==='estadisticas'?'active':''}`}
          onClick={()=>handleMenu('estadisticas')}
        >
          <TfiBarChartAlt className='iconGadget'/>
          <h4>Estadísticas</h4>
          <p>Resumen / Estidísticas / Gráficos sobre compras</p>
        </div>
      </div>
    
         {menucompras === 'registrocompra'&& <Sectioncompras setMenucompras={setMenucompras}/>}
         {menucompras === 'addCompra'&& <Formcompra setMenucompras={setMenucompras}/>}
         {menucompras === 'estadisticas'&& <SeccionEstadisticacompra/>}
    </div>
   </div>
  )
}

export default Shopping