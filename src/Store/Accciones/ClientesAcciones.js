import axios from 'axios';
import { GET_CLIENTES } from '../../Types/Clientes'

export const obtenerClientesAccion = () => async (dispactch,getState) => {
    try {
        const res = await axios.get('https://app-parcialmcga.herokuapp.com/clientes')
        dispactch ({
            type:GET_CLIENTES,
            payload:res.data.data
        })
    }catch (error){
        console.log(error)
    }
}