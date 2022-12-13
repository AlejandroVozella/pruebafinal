import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Reserva from "./Reserva";
import NewReserva from "./NewReserva";

import { obtenerReservasAccion } from "../../Store/Accciones/ReservasAcciones";
import { agregarNuevaReservaAccion } from "../../Store/Accciones/ReservasAcciones";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
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

const Reservas = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getReservas = () => dispatch(obtenerReservasAccion());
    getReservas();
  }, []);

  const { error, reservas } = useSelector((state) => state.reservas);

  console.log("Listado general: ", reservas);

  // Llama el action.
  //   const addNewReserva = (reserva) => dispatch(addNewReservaAction(reserva));

  //crea nuevo reserva para formulario hecho con react form
  const addReserva = (reserva) => {
    console.log("control add: ", reserva);
    agregarNuevaReservaAccion(reserva);
    openCloseModal();
  };

  //modal para formulario hecho con react form
  const openCloseModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <>
        <h2 className="text-center my-5">Listado de Reservas</h2>

        <div className="row pb-2">
          <div className="col-12 text-center">
            <button className="btn btn-primary m-1" onClick={openCloseModal}>
              Agregar Reserva
            </button>
            <Modal open={showModal} onClose={openCloseModal}>
              <NewReserva onAdd={addReserva} />
            </Modal>
          </div>
        </div>

        <table className="table table-striped">
          <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">Nro de reserva</th>
              <th scope="col">Fecha de Inicio</th>
              <th scope="col">Fecha Finalizacion</th>
              <th scope="col">Cliente</th>
              <th scope="col">Cabaña</th>
              <th scope="col">Recepcionista</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.length === 0
              ? "No hay Reservas para mostrar"
              : reservas.map((reserva) => (
                  <Reserva key={reserva._id} reserva={reserva} />
                ))}
          </tbody>
        </table>
      </>
    </div>
  );
};

export default Reservas;
