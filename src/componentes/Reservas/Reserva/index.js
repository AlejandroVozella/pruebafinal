import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';


const Reserva = ({ reserva }) => {
  const { id, nroReserva, fechaInicio, fechaFin, cliente, cabaña, recepcionista } = reserva;

  const dispatch = useDispatch();
  const history = useHistory(); // Habilitar history para redireccionar.

  const onDeleteReserva = (id) => {
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
        // dispatch(deleteReservaAction(id));
      }
    });
  };


  return (
    <tr>
      <td>
        <span className='font-weight-bold'> {nroReserva} </span>
      </td>
      <td>{fechaInicio}</td>
      <td>{fechaFin}</td>
      <td>{cliente}</td>
      <td>{cabaña}</td>
      <td>{recepcionista}</td>
      <td className='actions'>
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
          onClick=''
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Reserva;
