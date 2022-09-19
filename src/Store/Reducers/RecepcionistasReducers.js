import {
  ADD_RECEPCIONISTA,
  GET_RECEPCIONISTAS,
  ELIMINAR_RECEPCIONISTA,
  ELIMINAR_RECEPCIONISTA_ERROR,
} from "../../Types/Recepcionistas";

const inicialState = {
  recepcionistas: [],
  error: false,
};

export default function RecepcionistasReducers(state = inicialState, action) {
  switch (action.type) {
    case GET_RECEPCIONISTAS:
      return {
        ...state,
        recepcionistas: action.payload,
      };
    case ADD_RECEPCIONISTA:
      return {
        ...state,
        recepcionistas: [...state.recepcionistas, action.payload],
        error: false,
      };
    case ELIMINAR_RECEPCIONISTA:
      return {
        ...state,

        recepcionistas: state.recepcionistas.filter(
          (recepcionista) => recepcionista._id !== action.payload
        ),
        error: false,
      };

    case ELIMINAR_RECEPCIONISTA_ERROR:
      return {
        ...state,

        error: action.payload,
        // En este caso, el error pasa a true. (Para poder notificar al usuario)
      };
    default:
      return state;
  }
}
//import { GET_RECEPCIONISTAS

// } from '../../Types/Recepcionistas';

// const inicialState= {
//     arrayrecepcionistas: []
// } ;

// export default function RecepcionistasReducers (state= inicialState,action) {
//     switch (action.type) {
//       case GET_RECEPCIONISTAS:
//         return {...state, arrayrecepcionistas: action.payload}
//         default:
//             return state
//     }
// };