import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal,animarModal,setAnimarModal}) => {

  

const ocultarModal=()=>{

    setTimeout(()=>{
      setModal(false)
      },1000)
  
      setAnimarModal(false)

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

        <form className={`formulario ${animarModal ? "animar":"cerrar"}`} >
          
           <legend>Nuevo Gasto</legend>
       <div className='campo'>
               <label htmlFor='nombre'>Nombre del Gasto</label>
      
                <input 
                   id='nombre' 
                   type="text"
                   placeholder='Nombre de Gasto'
                 />
       </div>

       <div className='campo'>
               <label htmlFor='cantidad'>Cantidad</label>
      
                <input 
                   id='cantidad' 
                   type="number"
                   placeholder='cantidad del gasto'
                 />
       </div>
         
       <div className='campo'>
               <label htmlFor='categoria'>Categoria</label>
                <select
                   id="categoria"
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