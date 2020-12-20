import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../App";
// import { selectUser } from "../features/userSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useStateValue } from "./StateProvider";

function PrivateRoute({ children, ...rest }) {
//   const user = useSelector(selectUser);

const [ loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
      loggedInUser?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
