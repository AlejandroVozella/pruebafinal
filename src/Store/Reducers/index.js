import { combineReducers } from "redux";
import RecepcionistasReducers from "./RecepcionistasReducers";
import ClieentesReducers from "./ClientesReducers";
import ReservasReducers from "./ReservasReducers";

export default combineReducers ({
    recepcionistas:RecepcionistasReducers,
    clientes:ClieentesReducers,
    reservas:ReservasReducers
});



/*import { createStore, combineReducers,compose,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import RecepcionistasReducers from './RecepcionistasReducers'

const rootReducer=combineReducers({
     recepcionistas: RecepcionistasReducers

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store=createStore(rootReducer , composeEnhancers(applyMiddleware(thunk)))
    return store;

}*/