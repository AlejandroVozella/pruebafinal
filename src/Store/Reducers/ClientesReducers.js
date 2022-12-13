import { GET_CLIENTES } from "../../Types/Clientes";

const inicialState = {
  arrayclientes: [],
};

export default function ClieentesReducers(state = inicialState, action) {
  switch (action.type) {
    case GET_CLIENTES:
      return { ...state, arrayclientes: action.payload };
    default:
      return state;
  }
}
