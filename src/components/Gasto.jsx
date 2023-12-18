import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const Gasto = ({gasto}) => {
 
    const {cantidad,nombre,categoria,fecha}=gasto

    const diccionarioIconos={
      
      ahorro:IconoAhorro,
    comida:IconoComida,
    gastos:IconoGastos,
      casa:IconoCasa,
    ocio:IconoOcio,
    suscripciones:IconoSuscripciones,
     salud:IconoSalud,

  }
  return (
   <div className="gasto sombra">
       <div className="contenido-gasto">
         <img
           src={ diccionarioIconos[categoria]}
        alt='icono-Gasto'
         />
         <div className="descripcion-gasto">
                 <p className="categoria"> {categoria} </p>
                  <p className="nombre-gasto"> {nombre} </p>
                  <p className="fecha-gasto"> 
                   Agregado: {'  '}
                  <span>{fecha}</span> </p>
         </div>
             </div>
             <p className="cantidad-gasto">$ {cantidad}</p>
    </div>
  )
}

export default Gasto