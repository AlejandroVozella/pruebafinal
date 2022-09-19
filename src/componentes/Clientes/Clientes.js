import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { obtenerClientesAccion } from "../../Store/Accciones/ClientesAcciones"

const Clientes = ()=>{
   const dispatch = useDispatch()

   const clientes = useSelector(store =>store.clientes.arrayclientes)
   console.log(clientes)
    return(
    <div >
            <h3>Clientes</h3>
            <button onClick={()=>dispatch(obtenerClientesAccion())}>Clientes</button>
            {
                clientes.map(item=>(
                    <li key={item.id}>{item.apellido},{item.mail},{item.tipo_documento},{item.numero_documento},{item.domicilio},{item.telefono}</li>
                ))
            }
        </div>
    )
}

export default Clientes