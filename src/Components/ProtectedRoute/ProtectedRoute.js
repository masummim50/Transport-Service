import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';

const ProtectedRoute = ({children, ...rest}) => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <Route
    {...rest}
    render={
      ({location}) => loggedInUser.isLoggedIn ? (children):
      (
        <Redirect
        to = {{
          pathname: '/login',
          state: {from: location}
        }}
        />
      )
    }
    />
  );
};

export default ProtectedRoute;