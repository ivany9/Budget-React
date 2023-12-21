import {useState,useEffect  } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import { formatoFecha, generarId } from './helpers'
import ListadoGastos from './components/ListadoGastos'
import Filtros from './components/Filtros'


function App() {
  const [presupuesto,setPresupuesto]=useState(
    Number(localStorage.getItem('presupuesto'))?? 0
  )
  const[isValidPresupuesto,setIsValidPresupuesto]=useState(false)

  const [modal,setModal]=useState(false)
  const[animarModal,setAnimarModal]=useState(false)
  const[gastos,setGastos]=useState(

     localStorage.getItem('gastos')?JSON.parse(localStorage.getItem('gastos')) :[]

  )
 const [gastoEditar,setGastoEditar]=useState({})
 const [filtro,setFiltro]=useState('')
 const [gastosFiltrados,setGastosFiltrados]=useState([])


 
useEffect(()=>{

if(Object.keys(gastoEditar).length>0){
  setModal(true)
  setTimeout(()=>{
   setAnimarModal(true)

   
   


  },300)
  
}

},[gastoEditar])


useEffect(()=>{

localStorage.setItem('presupuesto',presupuesto??0)

},[presupuesto])

useEffect(()=>{
const presupuestoLs=Number(localStorage.getItem('presupuesto'))??0
if(presupuestoLs>0)
{
  setIsValidPresupuesto(true)
}

},[])

 
useEffect(()=>{


  localStorage.setItem('gastos',JSON.stringify(gastos)??[])

},[gastos])

useEffect(()=>{
 
  if(filtro){
  
    const gastosFiltrados=gastos.filter(gasto =>gasto.categoria===filtro)
     setGastosFiltrados(gastosFiltrados)

  }


},[filtro])

  
  const handleNuevoGasto=()=>{
    setModal(true)
    setGastoEditar('')
    setTimeout(()=>{
     setAnimarModal(true)

     
     


    },300)
 
   
    
  }



const guardarGasto=gasto=>{
if(gasto.id){
  console.log('actualizacion  ')
const gastoActualizado=gastos.map(gastoState=>gastoState.id===gasto.id ? gasto: gastoState)
setGastos(gastoActualizado)
}
else{
  gasto.id=generarId()
  const fechaActual=Date.now()
  gasto.fecha=formatoFecha(fechaActual)
  setGastos([...gastos,gasto])
}
  
   setAnimarModal(false)
    setTimeout(()=>{
      setModal(false)
      },1000)
  
}
 const eliminarGasto=id=>{
 
    const gastosActualizados=gastos.filter(gasto=>gasto.id!=id)
   setGastos(gastosActualizados)
   setGastoEditar({})
 }


   return (
    <div className={modal?"fijar":''}>
      <Header
       
      gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      
      />
          
          {isValidPresupuesto&&(
           
           <> 
           <main>
            <Filtros
               filtro={filtro}
               setFiltro={setFiltro}
            />
           <ListadoGastos
              setGastoEditar={setGastoEditar}
              gastos={gastos}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}

           />
           </main>
          <div className='nuevo-gasto'>

             <img
             src={IconoNuevoGasto}
             alt="iconogasto"
             onClick={handleNuevoGasto}     
             />

          </div>
          </>
)}

   {modal && <Modal
     
      setModal={setModal}
      animarModal={animarModal}
      setAnimarModal={setAnimarModal}
      guardarGasto={guardarGasto}
      gastoEditar={gastoEditar}
      setGastoEditar={setGastoEditar}
    
   />}

    </div>
  )
}

export default App
