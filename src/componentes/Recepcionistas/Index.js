import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { obtenerRecepcionistasAccion } from "../../Store/Accciones/RecepcionistasAcciones";
import { agregarNuevoRecepcionistaAccion } from "../../Store/Accciones/RecepcionistasAcciones";
import Recepcionista from "./Recepcionista";
import NewRecepcionista from "./NewRecepcionista";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "alsolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadows: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
  },
}));

const Recepcionistas = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getTodosRecepcionistas = () =>
      dispatch(obtenerRecepcionistasAccion());
    getTodosRecepcionistas();
  }, []);

  const { error, recepcionistas } = useSelector(
    (state) => state.recepcionistas
  );

  console.log("general: ", recepcionistas);

  // Llama el action.
  const agregarNuevoRecepcionista = (recepcionista) =>
    dispatch(agregarNuevoRecepcionistaAccion(recepcionista));

  const agregarRecepcionista = (recepcionista) => {
    console.log("control add: ", recepcionista);
    agregarNuevoRecepcionista(recepcionista);
    openCloseModal();
  };

  const openCloseModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <>
        <button className="btn btn-primary m-1" onClick={openCloseModal}>
          Agregar Recepcionista
        </button>
        <Modal open={showModal} onClose={openCloseModal}>
          <NewRecepcionista onAdd={agregarRecepcionista} />
        </Modal>

        <table className="table table-striped">
          <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">Usuario</th>
              <th scope="col">Contraseña</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {recepcionistas.length === 0
              ? "No hay Recepcionsistas"
              : recepcionistas.map((recepcionista) => (
                  <Recepcionista
                    key={recepcionistas._id}
                    recepcionista={recepcionista}
                  />
                ))}
          </tbody>
        </table>
      </>
    </div>
  );
};

export default Recepcionistas;
