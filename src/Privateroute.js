import {
    Route,    
    Redirect,
  } from "react-router-dom";
  import { useAuthState } from "./context/auth-cotext";
  
const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useAuthState();
    console.log(user)
    return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      
      <Route
        {...rest}
        render={(props) =>
          !!user ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  };

  export default PrivateRoute