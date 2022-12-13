import { combineReducers } from "redux";
import RecepcionistasReducers from "./RecepcionistasReducers";
import ClieentesReducers from "./ClientesReducers";
import ReservasReducers from "./ReservasReducers";

export default combineReducers({
  recepcionistas: RecepcionistasReducers,
  clientes: ClieentesReducers,
  reservas: ReservasReducers,
});
