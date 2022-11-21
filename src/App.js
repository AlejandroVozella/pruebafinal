import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import Sidebar from "./Shared/Sidebar/Sidebar";
import Inicio from "./componentes/Inicio/Inicio";
import Cabanas from "./componentes/Cabanas/Cabanas";
import Clientes from "./componentes/Clientes/Clientes";
import Recepcionistas from "./componentes/Recepcionistas/Index";
import Reservas from "./componentes/Reservas";

// //Componentes de Cabañas
// import NewCabana from './componentes/Cabanas/NewCabana';
// import EditCabana from './componentes/Cabanas/EditCabana';

const isLogin = () => {
  return false;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

function App() {
  return (
    <Router>
      <Header />
      <Provider store={store}>
        <div className="contenedor">
          <Sidebar />
          <div className="mainOptions">
            <Switch>
              <Route exact path="/" component={Inicio} />
              {/* <Route exact path='/cabanas' component={Cabanas} /> */}

              <Route exact path="/clientes" component={Clientes} />

              <Route exact path="/recepcionistas" component={Recepcionistas} />

              <Route exact path="/reservas" component={Reservas} />
              <PublicRoute
                restricted={false}
                component={Inicio}
                path="/"
                exact
              />
              {/* <PublicRoute restricted={true} component={Cabanas} path="/signin" exact /> */}
              <PrivateRoute component={Cabanas} path="/cabanas" exact />
            </Switch>
          </div>
        </div>
      </Provider>
      <Footer />
    </Router>
  );
}

export default App;
