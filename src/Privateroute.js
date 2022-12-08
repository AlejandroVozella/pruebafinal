import {
    Route,    
    Redirect,
  } from "react-router-dom";
  import { useAuthState } from "./context/auth-cotext";
  
const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useAuthState();
    console.log(user)
    return (
      
      
      <Route
        {...rest}
        render={(props) =>
          !!user ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  };

  export default PrivateRoute