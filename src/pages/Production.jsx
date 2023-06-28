import { TfiArchive,TfiBarChartAlt } from "react-icons/tfi";
import { useState } from 'react';
import Seccionproduccion from "../Components/Produccion/Seccionproduccion";
import Formulariomercaderia from "../Components/Produccion/Formulariomercaderia";
import Formularioproducto from "../Components/Produccion/Formularioproducto";
import Seccionestadisticaproduccion from '../Components/Produccion/Seccionestadisticaproduccion'

const Production = () => {

    const [menuproduccion, setMenuproduccion] = useState('stock');

    const handleMenu=(e)=>{
      setMenuproduccion(e)
    }

  return (
    <div className="containerUser">
      <div className="contentUser">
        <div className="headUsers">
          <h2> Productos</h2>
          <span> <span className='history'>Home</span> / Productos</span>
        </div>

        <div className="gadgetUsers">
          <div className={`contentGadget ${menuproduccion ==='stock'?'active':''}`}
            onClick={()=>handleMenu('stock')}
          >
            <TfiArchive className='iconGadget'/>
            <h4>Stock</h4>
            <p>Registración de Insumos / Producidos</p>
          </div>

          <div className={`contentGadget ${menuproduccion ==='estadisticas'?'active':''}`}
            onClick={()=>handleMenu('estadisticas')}
          >
            <TfiBarChartAlt className='iconGadget'/>
            <h4>Estadísticas</h4>
            <p>Resumen / Estidísticas / Gráficos sobre stock</p>
          </div>
        </div>
          {menuproduccion === 'stock'&&<Seccionproduccion setMenuproduccion={setMenuproduccion} />}
          {menuproduccion === 'addMercaderia'&&<Formulariomercaderia setMenuproduccion={setMenuproduccion} />}
          {menuproduccion === 'addProducto'&&<Formularioproducto setMenuproduccion={setMenuproduccion} />}
          {menuproduccion === 'estadisticas'&&<Seccionestadisticaproduccion />}
      </div>
    </div>
  )
}

export default Production