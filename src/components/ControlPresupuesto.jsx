import { useEffect, useState } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ControlPresupuesto = ({presupuesto,gastos}) => {
 const [porcentaje,setPorcentaje]=useState(0)     
const [disponible,setDisponible]=useState(0)
const[gastado,setGastado]=useState(0)
const[overLimit,setOverLimit]=useState('blue')


useEffect(()=>{

 const totalGastado=gastos.reduce((total,gasto)=>
gasto.cantidad+total,0)
setGastado(totalGastado)

const totalDisponible=presupuesto-totalGastado
setDisponible(totalDisponible)

const nuevoPorcentaje=(((presupuesto-totalDisponible)/presupuesto)*100).toFixed(2)
if(nuevoPorcentaje>100)
{
 setOverLimit('red') }
 else
 setOverLimit('blue')


setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)      
}, 1500);


},[gastos])



const formatearCantidad= (cantidad)=>{

 return cantidad.toLocaleString('en-US',{style:'currency',currency:'USD'})


}


  return (
    <div className='contenedor-presupuesto contenedor sombra '>
   
                  <div>
                  <CircularProgressbar
                  styles={buildStyles({
                        pathColor: `${overLimit}`,
                        trailColor:"#F5F5F5" ,
                        textColor:"black"                   
  
                  })}
                       value={porcentaje}
                       text={`${porcentaje}% Gastado`}


                  />
        
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