import { SwipeableDrawer } from "@material-ui/core";
import Swal from "sweetalert2";
import axios from "axios";
import axiosClient from "axios";
import {
  ADD_RECEPCIONISTA,
  GET_RECEPCIONISTAS,
  ELIMINAR_RECEPCIONISTA,
  ELIMINAR_RECEPCIONISTA_ERROR,
  EDIT_RECEPCIONISTA,
} from "../../Types/Recepcionistas";

export const obtenerRecepcionistasAccion =
  () => async (dispactch, getState) => {
    try {
      const res = await axios.get(
        "https://app-final-bk.herokuapp.com/recepcionistas"
        /*"https://final-mcga-alejandrovozella.herokuapp.com/recepcionistas"*/
      );
      dispactch({
        type: GET_RECEPCIONISTAS,
        payload: res.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export function agregarNuevoRecepcionistaAccion(recepcionista) {
  return async (dispatch) => {
    try {
      console.log("envio datos al servidor ", recepcionista);
      let data = await axios.post(
        "https://app-final-bk.herokuapp.com/recepcionistas",
        recepcionista
      );
      dispatch(agregarRecepcionista(data.data.data));
      //Alerta OK.
      Swal.fire("Correcto", "Se agrego correctamente...", "success");
    } catch (error) {
      console.log(error);
      //Alerta Fallida.
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error.",
        text: "Ocurrio un error, intenta de nuevo.",
      });
    }
  };
}

const agregarRecepcionista = (recepcionista) => ({
  type: ADD_RECEPCIONISTA,
  payload: recepcionista,
});

export const elminiarRecepcionistaAccion = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `https://app-final-bk.herokuapp.com/recepcionistas/${id}`
      );

      dispatch(elminarRecepcionista(id));
      Swal.fire("Eliminado", "Se elimino correctamente...", "success");
    } catch (error) {
      console.error(error);
      dispatch(elminarRecepcionistaError(true));
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error.",
        text: "Ocurrio un error al eliminar, intenta de nuevo.",
      });
    }
  };
};

const elminarRecepcionista = (id) => ({
  type: ELIMINAR_RECEPCIONISTA,
  payload: id,
});

const elminarRecepcionistaError = (status) => ({
  type: ELIMINAR_RECEPCIONISTA_ERROR,
  payload: status,
});

export function editarNuevoRecepcionistaAccion(recepcionista,id) {
  return async (dispatch) => {
    try {
      console.log("envio datos al servidor ", recepcionista);
      let data = await axios.put(
        "https://app-final-bk.herokuapp.com/recepcionistas/"+ id,
        recepcionista
      );
      dispatch(editarRecepcionista(data.data.data));
      //Alerta OK.
      Swal.fire("Correcto", "Se agrego correctamente...", "success");
    } catch (error) {
      console.log(error);
      //Alerta Fallida.
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error.",
        text: "Ocurrio un error, intenta de nuevo.",
      });
    }
  };
}

const editarRecepcionista = (recepcionista) => ({
  type: EDIT_RECEPCIONISTA,
  payload: recepcionista,
});
