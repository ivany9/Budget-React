import { useEffect, useState } from "react"


const ControlPresupuesto = ({presupuesto,gastos}) => {
const [disponible,setDisponible]=useState(0)
const[gastado,setGastado]=useState(0)


useEffect(()=>{

 console.log('Control presupuesto')

},[gastos])



const formatearCantidad= (cantidad)=>{

 return cantidad.toLocaleString('en-US',{style:'currency',currency:'USD'})


}


  return (
    <div className='contenedor-presupuesto contenedor sombra '>
   
                  <div>
                          <p>grafica aca</p>
        
                 </div> 

          <div className='contenido-presupuesto'>
                   <p>
                         <span>Presupuesto: </span> {formatearCantidad( presupuesto)}
                   </p>
                   <p>
                         <span>Disponible: </span> {formatearCantidad(disponible)}
                   </p>
   
                   <p>
                         <span>Gastado: </span> {formatearCantidad(gastado)}
                   </p>

         </div>

        </div>
  )
}

export default ControlPresupuesto