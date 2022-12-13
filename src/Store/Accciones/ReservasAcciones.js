import Swal from "sweetalert2";
import axios from "axios";
import { GET_RESERVAS, ADD_RESERVA } from "../../Types/Reservas";

export const obtenerReservasAccion = () => async (dispactch, getState) => {
  try {
    const res = await axios.get(
      "https://app-parcialmcga.herokuapp.com/reservas"
    );
    dispactch({
      type: GET_RESERVAS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export function agregarNuevaReservaAccion(reserva) {
  return async (dispatch) => {
    dispatch(agregarNuevaReserva());
    try {
      console.log("estoy por enviar los datos al servidor");

      await axios.post(
        "https://app-parcialmcga.herokuapp.com/reservas",
        reserva
      );

      // Alerta exitosa.
      Swal.fire(
        "Correcto",
        "La nueva reserva se agrego correctamente...",
        "success"
      );
    } catch (error) {
      console.log(error);
      // Alerta de error.
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error.",
        text: "Ocurrio un error, intenta de nuevo.",
      });
    }
  };
}

const agregarNuevaReserva = (reserva) => ({
  type: ADD_RESERVA,
  payload: reserva,
});
