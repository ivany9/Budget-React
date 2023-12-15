import { useState } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'


const Modal = ({setModal,animarModal,setAnimarModal}) => {

  const [nombre,setNombre]=useState('')
  const[cantidad,setCantidad]=useState(0)
  const[categoria,setCategoria]=useState('')
  const[mensaje,setMensaje]=useState('')
  



const ocultarModal=()=>{

    setTimeout(()=>{
      setModal(false)
      },1000)
  
      setAnimarModal(false)

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
          
           <legend>Nuevo Gasto</legend>
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
                   <option value="gastos-varios">  gastos varios </option>
                   <option value="casa"> Casa  </option>
                   <option value="ocio"> Ocio </option>
                   <option value="suscripciones"> Suscripciones </option>
                 
   
                </select>
                
       </div>
           <input 
               type='submit'
               value='anadir gasto'
           
           
           />



    </form>


      </div>
 
  )
}

export default Modal