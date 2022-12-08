import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { elminiarRecepcionistaAccion } from "../../../Store/Accciones/RecepcionistasAcciones";
import Swal from "sweetalert2";
import { Modal } from "@material-ui/core";
import EditRecepcionista from "../EditRecepcionista/Index";
import { editarNuevoRecepcionistaAccion } from "../../../Store/Accciones/RecepcionistasAcciones";

const Recepcionista = ({ recepcionista }) => {
  const { _id, usuario, contraseña, nombre, apellido } = recepcionista;
  console.log("valor: ", recepcionista);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const editarNuevoRecepcionista = (recepcionista, id) =>
    dispatch(editarNuevoRecepcionistaAccion(recepcionista, id));
  const editarRecepcionista = (recepcionista, id) => {
    console.log("control add: ", recepcionista);
    console.log("control editrecepcionista: ", id);
    editarNuevoRecepcionista(recepcionista, id);

    openCloseModal();
  };

  const openCloseModal = () => {
    setShowModal(!showModal);
  };
  //const history = useHistory(); // Habilitar history para redireccionar.
  const eliminarrecepcionista = (id) => {
    // preguntar al usuario
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Esta accion es irreversible.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        dispatch(elminiarRecepcionistaAccion(id));
      }
    });
  };
  return (
    <>
      <Modal open={showModal} onClose={openCloseModal}>
        <EditRecepcionista
          onEdit={editarRecepcionista}
          recepcionistaEdit={recepcionista}
        />
      </Modal>
      <tr>
        
        <td>{usuario}</td>
        <td>{contraseña}</td>
        <td>{nombre}</td>
        <td>{apellido}</td>
        <td>
          <button
            type="button"
            onClick={openCloseModal}
            className="btn btn-primary m-1"
          >
            Editar
          </button>
          <button
            type="button"
            className="btn btn-danger m-1"
            onClick={() => eliminarrecepcionista(_id)}
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};
export default Recepcionista;
