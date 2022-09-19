import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './Store';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Sidebar from './Shared/Sidebar/Sidebar';
import Inicio from './componentes/Inicio/Inicio';
import Cabanas from './componentes/Cabanas/Cabanas';
import Clientes from './componentes/Clientes/Clientes';
import Recepcionistas from './componentes/Recepcionistas/Index';
import Reservas from './componentes/Reservas';

// //Componentes de Cabañas
// import NewCabana from './componentes/Cabanas/NewCabana';
// import EditCabana from './componentes/Cabanas/EditCabana';

function App() {
  return (
    <Router>
      <Header />
      <Provider store={store}>
        <div className='contenedor'>
          <Sidebar />
          <div className='mainOptions'>
            <Switch>
              <Route exact path='/' component={Inicio} />
              <Route exact path='/cabanas' component={Cabanas} />
              
              <Route exact path='/clientes' component={Clientes} />

              <Route exact path='/recepcionistas' component={Recepcionistas} />

              <Route exact path='/reservas' component={Reservas} />
            </Switch>
          </div>
        </div>
      </Provider>
      <Footer />
    </Router>
  );
}

export default App;
