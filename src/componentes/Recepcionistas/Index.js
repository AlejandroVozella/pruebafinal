import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { obtenerRecepcionistasAccion } from "../../Store/Accciones/RecepcionistasAcciones";
import { agregarNuevoRecepcionistaAccion } from "../../Store/Accciones/RecepcionistasAcciones";
import Recepcionista from "./Recepcionista";
import NewRecepcionista from "./NewRecepcionista";
import EditRecepcionista from "./EditRecepcionista/Index";
import { editarNuevoRecepcionistaAccion } from "../../Store/Accciones/RecepcionistasAcciones";

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
  // const recepcionistas = useSelector(
  //   (store) => store.recepcionistas.arrayrecepcionistas
  // );
  console.log("general: ", recepcionistas);

  // Llama el action.
  const agregarNuevoRecepcionista = (recepcionista) =>
    dispatch(agregarNuevoRecepcionistaAccion(recepcionista));

  const editarNuevoRecepcionista = (recepcionista) =>
    dispatch(editarNuevoRecepcionistaAccion(recepcionista));

  const agregarRecepcionista = (recepcionista) => {
    console.log("control add: ", recepcionista);
    agregarNuevoRecepcionista(recepcionista);
    openCloseModal();
  };

  const editarRecepcionista = (recepcionista) => {
    console.log("control add: ", recepcionista);
    editarNuevoRecepcionista(recepcionista);
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
        <Modal open={showModal} onClose={openCloseModal}>
          <EditRecepcionista onEdit={editarRecepcionista} />
        </Modal>
        {/* {loading ? <h4 className='text-center'> Loading... </h4> : null} */}
        {/* {error ? (
                <p className='alert alert-danger p-2 m-4 text-center'>
                 Ocurrio un error.</p>
                 ) : null} */}

        <table className="table table-striped">
          <thead className="bg-primary table-dark">
            <tr>
              {/* <th scope="col">Id</th> */}
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
            {/* {recepcionistas.map((recepcionista) => (
              <Recepcionista
                key={recepcionista._id}
                recepcionista={recepcionista}
              />
            ))} */}
          </tbody>
        </table>
      </>
    </div>
  );
};

export default Recepcionistas;

// import React from 'react';

// import { useDispatch, useSelector} from 'react-redux'

// import { obtenerRecepcionistasAccion } from '../../Store/Accciones/RecepcionistasAcciones';

// const Recepcionistas = ()=>{

// const dispatch = useDispatch()

// const recepcionistas= useSelector(store => store.recepcionistas.arrayrecepcionistas)
//     console.log(recepcionistas)
//     return(
//         <div >
//             <h3>Recepcionistas</h3>
//             <button onClick={() => dispatch(obtenerRecepcionistasAccion())}>Recepcionistas</button>
//             {
//                 recepcionistas.map(item => (
//                     <li key={item.id}>{item.usuario},{item.contraseña},{item.nombre},{item.apellido}</li>
//                 ))
//             }

//         </div>
//     )
// }

// export default Recepcionistas
