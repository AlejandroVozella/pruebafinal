import { ADD_RESERVA, GET_RESERVAS } from '../../Types/Reservas';

// Cada reducer tiene su propio State.
const inicialState = {
  reservas: [],
  error: false,
  reserva: [],
};

export default function ReservasReducers(state = inicialState, action) {
  switch (action.type) {
    case GET_RESERVAS:
      return { 
          ...state, 
          reservas: action.payload 
        };
    case ADD_RESERVA:
      return { 
          ...state, 
          reservas: [...state.reservas, action.payload],
          error: false,
        };
    default:
      return state;
  }
}
