import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {elminiarRecepcionistaAccion} from '../../../Store/Accciones/RecepcionistasAcciones';
import Swal from 'sweetalert2';

const Recepcionista = ({ recepcionista }) => {
  const { _id,usuario, contraseña, nombre, apellido } = recepcionista;
  console.log("valor: ",recepcionista)

  const dispatch = useDispatch();
  //const history = useHistory(); // Habilitar history para redireccionar.
  const eliminarrecepcionista = (id) => {
    // preguntar al usuario
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Esta accion es irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        dispatch(elminiarRecepcionistaAccion(id));
      }
    });
  };
  return (
    <tr>
      {/* <td>{_id}</td> */}
      <td>{usuario}</td>
      <td>{contraseña}</td>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>
        <button
          type='button'
          onClick=''
          className='btn btn-primary m-1'
        >
          Editar
        </button>
        <button
          type='button'
          className='btn btn-danger m-1'
          onClick={() => eliminarrecepcionista(_id)}
        >
          Eliminar
        </button></td>
      
    </tr>
  );
};
export default Recepcionista;
