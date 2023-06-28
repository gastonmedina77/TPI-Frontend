import { TfiAgenda,TfiBarChartAlt ,TfiCreditCard,} from "react-icons/tfi";
import { useState } from 'react';
import Seccionventas from "../Components/Ventas/Seccionventas";
import '../css/Ventas/sales.scss'
import SeccionFacturacion from "../Components/Ventas/SeccionFacturacion";
import Sectionestadisticaventa from "../Components/Ventas/Sectionestadisticaventa";

const Sales = () => {
  const [menuventas, setMenuventas] = useState('registroventa');
 

  const handleMenu=(e)=>{
    setMenuventas(e)
  }
  return (
    <div className="containerUser">
    <div className="contentUser">
      <div className="headUsers">
        <h2> Ventas</h2>
      <span> <span className='history'>Home</span> / Ventas</span>
      </div>
      <div className="gadgetUsers">
        <div className={`contentGadget ${menuventas ==='registroventa'?'active':''}`}
          onClick={()=>handleMenu('registroventa')}
        >
          <TfiAgenda className='iconGadget'/>
          <h4>Registros</h4>
          <p>Registración de ventas y pedidos</p>
        </div>
        <div className={`contentGadget ${menuventas ==='facturacion'?'active':''}`}
          onClick={()=>handleMenu('facturacion')}
        >
          <TfiCreditCard className='iconGadget'/>
          <h4>Facturación</h4>
          <p>Realización de ventas y facturación</p>
        </div>
        <div className={`contentGadget ${menuventas ==='estadisticas'?'active':''}`}
          onClick={()=>handleMenu('estadisticas')}
        >
          <TfiBarChartAlt className='iconGadget'/>
          <h4>Estadísticas</h4>
          <p>Resumen / Estidisticas / Gráficos sobre ventas</p>
        </div>
      </div>
    
         {menuventas === 'registroventa'&& <Seccionventas setMenuventas={setMenuventas}/>}
         {menuventas === 'facturacion'&& <SeccionFacturacion setMenuventas={setMenuventas}/>}
         {menuventas === 'estadisticas'&& <Sectionestadisticaventa/>}
    </div>
   </div>
  )
}

export default Sales