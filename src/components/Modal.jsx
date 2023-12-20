import { useState,useEffect } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'


const Modal = ({setModal,animarModal,setAnimarModal,guardarGasto,gastoEditar}) => {

  const [nombre,setNombre]=useState('')
  const[cantidad,setCantidad]=useState(0)
  const[categoria,setCategoria]=useState('')
  const[mensaje,setMensaje]=useState('')
  const[id,setId]=useState('')
  const[fecha,setFecha]=useState('')


  
  useEffect(()=>{

    if(Object.keys(gastoEditar).length>0){
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)  
      setFecha(gastoEditar.fecha) 
    }



    
  },[])



const ocultarModal=()=>{
  setAnimarModal(false)
    setTimeout(()=>{
      setModal(false)
      },1000)
  
      

}

const handleSubmit=(e)=>{
  e.preventDefault()
if([nombre,cantidad,categoria].includes(''))
  {
    setMensaje('Todos los campos son obligatorios') 
   
   setTimeout(() => {
    
    setMensaje('')
   }, 1000);


    return  
  }
 
 guardarGasto({nombre,cantidad,categoria,id,fecha})
}

  return (

    <div className="modal"> 
         <div className="cerrar-modal">
          <img
           src={CerrarBtn}
           alt="BotonCerar"
          onClick={ocultarModal}
          
          
          />
        </div>

        <form  
          onSubmit={handleSubmit}
        
        
        className={`formulario ${animarModal ? "animar":"cerrar"}`} >
          
           <legend>{gastoEditar.nombre?"Editar gasto":"Nuevo Gasto"} </legend>
            {mensaje&& <Mensaje tipo={'error'} >{mensaje}</Mensaje>
              }

       <div className='campo'>
               <label htmlFor='nombre'>Nombre del Gasto</label>
      
                <input 
                   id='nombre' 
                   type="text"
                   placeholder='Nombre de Gasto'
                   value={nombre}
                   onChange={(e)=>setNombre(e.target.value)}
                 />
       </div>

       <div className='campo'>
               <label htmlFor='cantidad'>Cantidad</label>
      
                <input 
                   id='cantidad' 
                   type="number"
                   placeholder='cantidad del gasto'
                   value={cantidad}
                   onChange={e=>setCantidad(Number(e.target.value))}
                 />
       </div>
         
       <div className='campo'>
               <label htmlFor='categoria'>Categoria</label>
                <select
                   id="categoria"
                   value={categoria}
                   onChange={(e)=>setCategoria(e.target.value)}
                   >
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
           <input 
               type='submit'
               value={gastoEditar.nombre?"Editar Gasto":"Anadir gasto"}
          
           
           />



    </form>


      </div>
 
  )
}

export default Modal