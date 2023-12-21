import { useState,useEffect } from "react"



const Filtros = ({filtro,setFiltro}) => {



  return (
    <div className="filtros sombra contenedor">
           <form>
               <div className="campo">
                <label>Filtrar Gastos</label>
                <select
                id="filtro"
                value={filtro}
                onChange={(e)=>setFiltro(e.target.value)}>
                <option value=""> -- Selecciome -- </option>
                   <option value="ahorro"> ahorro  </option>
                   <option value="comida"> comida  </option>
                   <option value="gastos">  gastos varios </option>
                   <option value="casa"> Casa  </option>
                   <option value="ocio"> Ocio </option>
                   <option value="suscripciones"> Suscripciones </option>
                   <option value="salud"> Salud </option>
                </select>
                </div>
           </form>
 
    </div>
  )
}

export default Filtros